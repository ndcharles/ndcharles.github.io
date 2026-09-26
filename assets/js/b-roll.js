// B-Roll feed and notes, and the love/share bar on blog posts: relative times,
// love/comment counts from thatbros, the love toggle, sharing and "Show more notes".
// One delegated click listener, keyed on data-action.
(function () {
    'use strict';

    var root = document.querySelector('[data-br-api]');
    if (!root) return;
    var API = (root.getAttribute('data-br-api') || '').replace(/\/$/, '');
    var PAGE_SIZE = 10;

    /* ---------- Relative time: "4h", "2d", "25 Sept", "25 Sept, 2025" ---------- */
    var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    function relative(date) {
        var s = (Date.now() - date.getTime()) / 1000;
        if (s < 60) return 'just now';
        if (s < 3600) return Math.floor(s / 60) + 'm';
        if (s < 86400) return Math.floor(s / 3600) + 'h';
        if (s < 7 * 86400) return Math.floor(s / 86400) + 'd';
        var label = date.getDate() + ' ' + MONTHS[date.getMonth()];
        return date.getFullYear() === new Date().getFullYear() ? label : label + ', ' + date.getFullYear();
    }
    document.querySelectorAll('time.br-time').forEach(function (el) {
        var d = new Date(el.getAttribute('datetime'));
        if (!isNaN(d)) el.textContent = relative(d);
    });

    /* ---------- Counts ---------- */
    function storage() {
        try { return window.localStorage; } catch (e) { return null; }
    }
    // Same key as the <thatbros-reactions> widget, so both agree on "loved".
    function lovedKey(pageId) { return 'thatbros:loved:' + pageId; }

    function setCount(bar, name, n) {
        var el = bar.querySelector('[data-count="' + name + '"]');
        if (el) el.textContent = n > 0 ? String(n) : '';
    }

    function api(path, init) {
        init = init || {};
        // Only writes carry a body; a plain GET skips the CORS preflight.
        if (init.body) init.headers = { 'Content-Type': 'application/json' };
        return fetch(API + path, init).then(function (res) {
            return res.text().then(function (text) {
                var data = text ? JSON.parse(text) : {};
                if (!res.ok) throw new Error(data.error || 'Request failed (' + res.status + ')');
                return data;
            });
        });
    }

    function loadCounts(bar) {
        var pageId = bar.getAttribute('data-page-id');
        var q = '?pageId=' + encodeURIComponent(pageId);
        var loved = storage() && storage().getItem(lovedKey(pageId)) === '1';
        bar.querySelector('.br-love').setAttribute('aria-pressed', loved ? 'true' : 'false');
        if (!API) return;
        api('/api/reactions' + q).then(function (d) { setCount(bar, 'loves', d.loves || 0); })
            .catch(function (e) { console.warn('[b-roll] loves:', e.message); });
        // The post share bar has no comment count; skip fetching the thread there.
        if (!bar.querySelector('[data-count="comments"]')) return;
        api('/api/comments' + q).then(function (d) { setCount(bar, 'comments', d.total || 0); })
            .catch(function (e) { console.warn('[b-roll] comments:', e.message); });
    }

    // Only fetch counts for notes that scroll into view.
    var observer = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            observer.unobserve(entry.target);
            loadCounts(entry.target);
        });
    }, { rootMargin: '200px' }) : null;

    function watch(bar) { observer ? observer.observe(bar) : loadCounts(bar); }
    document.querySelectorAll('.br-actions').forEach(function (bar) {
        if (!bar.closest('.br-hidden')) watch(bar);
    });

    /* ---------- Love ---------- */
    function toggleLove(button) {
        if (!API || button.getAttribute('aria-busy') === 'true') return;
        var bar = button.closest('.br-actions');
        var pageId = bar.getAttribute('data-page-id');
        var countEl = bar.querySelector('[data-count="loves"]');
        var before = parseInt(countEl.textContent, 10) || 0;
        var loving = button.getAttribute('aria-pressed') !== 'true';

        // Optimistic: flip the heart immediately, correct from the response.
        button.setAttribute('aria-busy', 'true');
        button.setAttribute('aria-pressed', loving ? 'true' : 'false');
        setCount(bar, 'loves', Math.max(before + (loving ? 1 : -1), 0));
        if (loving) {
            button.classList.remove('br-pop');
            void button.offsetWidth;
            button.classList.add('br-pop');
        }

        api('/api/reactions', { method: loving ? 'POST' : 'DELETE', body: JSON.stringify({ pageId: pageId }) })
            .then(function (d) {
                if (typeof d.loves === 'number') setCount(bar, 'loves', d.loves);
                var s = storage();
                if (s) loving ? s.setItem(lovedKey(pageId), '1') : s.removeItem(lovedKey(pageId));
            })
            .catch(function (e) {
                button.setAttribute('aria-pressed', loving ? 'false' : 'true');
                setCount(bar, 'loves', before);
                toast(e.message || 'Could not save that. Try again.');
            })
            .then(function () { button.removeAttribute('aria-busy'); });
    }

    /* ---------- Share ---------- */
    function closeMenus(except) {
        document.querySelectorAll('.br-share-menu:not([hidden])').forEach(function (menu) {
            if (menu === except) return;
            menu.hidden = true;
            menu.parentNode.querySelector('[data-action="share-toggle"]').setAttribute('aria-expanded', 'false');
        });
    }

    function copyText(text) {
        if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
        return new Promise(function (resolve, reject) {
            var ta = document.createElement('textarea');
            ta.value = text;
            ta.setAttribute('readonly', '');
            ta.style.cssText = 'position:fixed;opacity:0';
            document.body.appendChild(ta);
            ta.select();
            var ok = document.execCommand('copy');
            document.body.removeChild(ta);
            ok ? resolve() : reject(new Error('copy failed'));
        });
    }

    var toastEl, toastTimer;
    function toast(message) {
        if (!toastEl) {
            toastEl = document.createElement('div');
            toastEl.className = 'br-toast';
            toastEl.setAttribute('role', 'status');
            document.body.appendChild(toastEl);
        }
        toastEl.textContent = message;
        toastEl.classList.add('br-show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () { toastEl.classList.remove('br-show'); }, 2600);
    }

    // Inline confirmation above the button, e.g. "Link copied".
    function flash(button, message) {
        var bubble = button.querySelector('.br-flash');
        if (!bubble) {
            bubble = document.createElement('span');
            bubble.className = 'br-flash';
            bubble.setAttribute('role', 'status');
            button.appendChild(bubble);
        }
        bubble.textContent = message;
        void bubble.offsetWidth;
        bubble.classList.add('br-show');
        clearTimeout(bubble._timer);
        bubble._timer = setTimeout(function () { bubble.classList.remove('br-show'); }, 1600);
    }

    // kind: "copy" or "instagram" picks that button's UTM-tagged link, if the bar has one.
    function shareData(el, kind) {
        var bar = el.closest('.br-actions');
        var url = (kind && bar.getAttribute('data-' + kind + '-url')) || bar.getAttribute('data-share-url');
        return { url: url, title: bar.getAttribute('data-share-title') };
    }

    /* ---------- Clicks ---------- */
    document.addEventListener('click', function (event) {
        var target = event.target.closest('[data-action]');
        if (!target || !root.contains(target)) {
            if (!event.target.closest('.br-share')) closeMenus();
            return;
        }
        var action = target.getAttribute('data-action');

        if (action === 'love') {
            event.preventDefault();
            toggleLove(target);
        } else if (action === 'share-toggle') {
            event.preventDefault();
            var menu = target.parentNode.querySelector('.br-share-menu');
            closeMenus(menu);
            menu.hidden = !menu.hidden;
            target.setAttribute('aria-expanded', menu.hidden ? 'false' : 'true');
            if (!menu.hidden) menu.querySelector('a, button').focus();
        } else if (action === 'share-popup') {
            event.preventDefault();
            window.open(target.href, 'br-share', 'noopener,width=600,height=560');
            closeMenus();
        } else if (action === 'copy') {
            event.preventDefault();
            // In the B-Roll share menu the menu closes, so confirm on the share button.
            var anchor = target.closest('.br-share')
                ? target.closest('.br-share').querySelector('[data-action="share-toggle"]')
                : target;
            copyText(shareData(target, 'copy').url).then(function () { flash(anchor, 'Link copied'); },
                function () { flash(anchor, 'Could not copy'); });
            closeMenus();
        } else if (action === 'instagram') {
            // Instagram has no web share link. Use the phone's share sheet when
            // there is one; otherwise copy the link for a story or DM.
            event.preventDefault();
            var data = shareData(target, 'instagram');
            closeMenus();
            if (navigator.share) {
                navigator.share({ title: data.title, url: data.url }).catch(function () {});
            } else {
                copyText(data.url).then(function () { toast('Link copied. Paste it into your Instagram story or DM.'); },
                    function () { toast('Could not copy the link'); });
            }
        } else if (action === 'load-more') {
            var hidden = root.querySelectorAll('.br-card.br-hidden');
            for (var i = 0; i < hidden.length && i < PAGE_SIZE; i++) {
                hidden[i].classList.remove('br-hidden');
                watch(hidden[i].querySelector('.br-actions'));
            }
            if (hidden.length <= PAGE_SIZE) target.remove();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key !== 'Escape') return;
        var open = document.querySelector('.br-share-menu:not([hidden])');
        if (!open) return;
        closeMenus();
        open.parentNode.querySelector('[data-action="share-toggle"]').focus();
    });
})();

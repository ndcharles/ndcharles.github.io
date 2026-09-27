// Editor-friendly extras for post, note, project and page bodies, so writing in the
// Pages CMS rich-text editor needs no code:
//  1. A media link pasted on its own line becomes a player (YouTube, Vimeo, Spotify,
//     SoundCloud, .mp4/.webm/.mov video, .mp3/.m4a/.ogg/.wav audio).
//  2. A quote whose last paragraph starts with "—" becomes a quote card, with that
//     paragraph as the attribution.
//  3. Every code block gets a Copy button.
(function () {
    'use strict';

    var bodies = document.querySelectorAll('.article-post, .br-body, .page-content');
    if (!bodies.length) return;

    function frame(src, title, allow) {
        return '<div class="embed-frame"><iframe src="' + src + '" title="' + title + '" loading="lazy" allow="' +
            (allow || 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share') +
            '" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>';
    }

    // Returns the player HTML for a URL, or null if it isn't media we know.
    function playerFor(href) {
        var url;
        try { url = new URL(href, location.href); } catch (e) { return null; }
        var host = url.hostname.replace(/^www\.|^m\./, '');
        var path = url.pathname;
        var m;

        if (host === 'youtube.com' && path === '/watch' && url.searchParams.get('v')) {
            return frame('https://www.youtube-nocookie.com/embed/' + encodeURIComponent(url.searchParams.get('v')), 'YouTube video');
        }
        if ((m = path.match(/^\/(?:shorts|embed|live)\/([\w-]+)/)) && host === 'youtube.com') {
            return frame('https://www.youtube-nocookie.com/embed/' + m[1], 'YouTube video');
        }
        if (host === 'youtu.be' && (m = path.match(/^\/([\w-]+)/))) {
            return frame('https://www.youtube-nocookie.com/embed/' + m[1], 'YouTube video');
        }
        if (host === 'vimeo.com' && (m = path.match(/^\/(\d+)/))) {
            return frame('https://player.vimeo.com/video/' + m[1] + '?dnt=1', 'Vimeo video', 'fullscreen; picture-in-picture');
        }
        if (host === 'open.spotify.com' && (m = path.match(/^\/(?:intl-[a-z-]+\/)?(track|album|playlist|episode|show|artist)\/(\w+)/))) {
            var tall = !/^(track|episode)$/.test(m[1]);
            return '<iframe class="embed-audio-frame" src="https://open.spotify.com/embed/' + m[1] + '/' + m[2] +
                '" height="' + (tall ? 352 : 152) + '" title="Spotify player" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
        }
        if (host === 'soundcloud.com' && path.split('/').filter(Boolean).length >= 2) {
            return '<iframe class="embed-audio-frame" src="https://w.soundcloud.com/player/?url=' + encodeURIComponent(url.href) +
                '&amp;color=%2303a87c&amp;visual=false&amp;show_comments=false" height="166" title="SoundCloud player" loading="lazy" allow="autoplay"></iframe>';
        }
        if (/\.(mp4|webm|mov)$/i.test(path)) {
            return '<video class="embed-video" src="' + url.href + '" controls playsinline preload="metadata"></video>';
        }
        if (/\.(mp3|m4a|ogg|wav)$/i.test(path)) {
            return '<audio class="embed-audio" src="' + url.href + '" controls preload="none"></audio>';
        }
        return null;
    }

    function sameUrl(text, href) {
        var clean = function (s) { return s.trim().replace(/^https?:\/\//, '').replace(/\/$/, ''); };
        return clean(text) === clean(href);
    }

    bodies.forEach(function (body) {
        // 1. A paragraph that is nothing but a pasted media link -> player.
        body.querySelectorAll('p').forEach(function (p) {
            if (p.closest('figure, blockquote, li')) return;
            var text = p.textContent.trim();
            var links = p.querySelectorAll('a');
            var href = null;
            if (links.length === 1 && text === links[0].textContent.trim() && sameUrl(text, links[0].getAttribute('href') || '')) {
                href = links[0].href;                       // a pasted link the editor turned into a link
            } else if (!links.length && !p.children.length && /^https?:\/\/\S+$/.test(text)) {
                href = text;                                // a plain-text address on its own line
            }
            if (!href) return;
            var html = playerFor(href);
            if (!html) return;
            var fig = document.createElement('figure');
            fig.className = 'embed';
            fig.innerHTML = html;
            p.replaceWith(fig);
        });

        // 3. Copy button on every code block.
        body.querySelectorAll('pre').forEach(function (pre) {
            var box = pre.closest('.highlighter-rouge') || pre;
            if (box.classList.contains('code-wrap')) return;
            box.classList.add('code-wrap');
            var button = document.createElement('button');
            button.type = 'button';
            button.className = 'code-copy';
            button.textContent = 'Copy';
            button.setAttribute('aria-label', 'Copy code');
            button.addEventListener('click', function () {
                var text = pre.innerText.replace(/\n$/, '');
                var done = function () {
                    button.textContent = 'Copied';
                    button.classList.add('is-done');
                    setTimeout(function () { button.textContent = 'Copy'; button.classList.remove('is-done'); }, 1500);
                };
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(text).then(done);
                } else {
                    var ta = document.createElement('textarea');
                    ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
                    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); done();
                }
            });
            box.appendChild(button);
        });

        // 2. Quote ending in "— Name, Source" -> quote card.
        body.querySelectorAll('blockquote').forEach(function (bq) {
            if (bq.closest('.quote-card')) return;
            var paras = bq.querySelectorAll(':scope > p');
            if (paras.length < 2) return;
            var last = paras[paras.length - 1];
            if (!/^\s*(—|–|--|&mdash;)/.test(last.textContent)) return;
            var fig = document.createElement('figure');
            fig.className = 'quote-card';
            var caption = document.createElement('figcaption');
            caption.innerHTML = last.innerHTML.replace(/^\s*(—|–|--)\s*/, '&mdash; ');
            last.remove();
            bq.replaceWith(fig);
            fig.appendChild(bq);
            fig.appendChild(caption);
        });
    });
})();

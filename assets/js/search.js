// Site search. lunr.js and the index (/search.json) are fetched on the first
// search instead of being inlined into every page.
var searchDocuments = null;
var searchIndex = null;
var searchLoading = null;

function loadSearch() {
    if (searchLoading) return searchLoading;
    var base = window.SEARCH_BASEURL || '';
    var lunrReady = new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = base + '/assets/js/lunr.js';
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
    });
    var docsReady = fetch(base + '/search.json').then(function (r) { return r.json(); });
    searchLoading = Promise.all([lunrReady, docsReady]).then(function (res) {
        searchDocuments = res[1];
        searchIndex = lunr(function () {
            this.ref('id');
            this.field('title');
            this.field('body');
            searchDocuments.forEach(function (doc, i) {
                this.add({ id: i, title: doc.title, body: doc.body });
            }, this);
        });
    });
    searchLoading.catch(function () { searchLoading = null; });
    return searchLoading;
}

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
}

function renderSearchResults(term) {
    var list = document.querySelectorAll('#lunrsearchresults ul')[0];
    var results = searchIndex.search(term);
    if (results.length > 0) {
        var html = '';
        for (var i = 0; i < results.length; i++) {
            var doc = searchDocuments[results[i].ref];
            html += "<li class='lunrsearchresult'><a href='" + escapeHtml(doc.url) + "'><span class='title'>" + escapeHtml(doc.title) + "</span><br /><small><span class='body'>" + escapeHtml(doc.body.substring(0, 160)) + "...</span><br /><span class='url'>" + escapeHtml(doc.url) + "</span></small></a></li>";
        }
        list.innerHTML = html;
    } else {
        list.innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
    }
}

function lunr_search(term) {
    $('#lunrsearchresults').show(1000);
    $('body').addClass('modal-open');

    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if (term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + escapeHtml(term) + "'</h5>" + document.getElementById('modtit').innerHTML;
        var list = document.querySelectorAll('#lunrsearchresults ul')[0];
        list.innerHTML = "<li class='lunrsearchresult'>Searching...</li>";
        loadSearch().then(function () {
            renderSearchResults(term);
        }, function () {
            list.innerHTML = "<li class='lunrsearchresult'>Search could not load. Please try again.</li>";
        });
    }
    return false;
}

$(function () {
    $('#lunrsearchresults').on('click', '#btnx', function () {
        $('#lunrsearchresults').hide(1000);
        $('body').removeClass('modal-open');
    });
    // Start fetching the index as soon as someone focuses the search box.
    $('#lunrsearch').one('focus', function () { loadSearch(); });
});

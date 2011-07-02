$(function() {
  var actionBar = $('.title-actions-bar ul.actions');
  if (actionBar) {
    var el = $(
      '<li>' + 
      '<div class="topsearch" style="float: left; width: auto; margin:0;">' +
      '  <form style="float: left">' +
      '    <div class="search" style="padding: 0 6px;">' +
      '      <input type="text" class="search" style="height: 16px" />' +
      '    </div>' +
      '  </form>' +
      '</div>' +
      '</li>'
    );

    var searchBox = el.find('input');
    searchBox.attr('placeholder', "Search within project...");

    var urlParts = window.location.href.split('/');
    var repoId = urlParts[3] + '/' + urlParts[4];
    var repoUrl = 'github.com/' + repoId;

    var searchForm = el.find('form');
    searchForm.submit(function() {
      var query = encodeURIComponent(searchBox.val());
      var package = encodeURIComponent('package:' + repoUrl);
      var url = 'http://www.google.com/codesearch?q=' + query + ' ' + package;
      window.location.href = url;
      return false;
    });

    actionBar.prepend(el);
  }
});

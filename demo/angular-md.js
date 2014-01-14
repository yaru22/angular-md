/* global angular, hljs, marked */

'use strict';

angular.module('yaru22.directives.md', [
]).directive('md', function () {
  return {
    restrict: 'E',
    link: function ($scope, $elem) {
      if (typeof hljs !== 'undefined') {
        marked.setOptions({
          highlight: function (code, lang) {
            if (lang) {
              return hljs.highlight(lang, code).value;
            } else {
              return hljs.highlightAuto(code).value;
            }
          }
        });
      }
      var html = marked($elem.text());
      $elem.html(html);
    }  // link function
  };
});

/* global angular, marked */

'use strict';

angular.module('yaru22.directives.md', [
]).directive('md', function () {
  return {
    restrict: 'E',
    link: function ($scope, $elem) {
      var html = marked($elem.text());
      $elem.html(html);
    }  // link function
  };
});

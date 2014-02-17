var app = angular.module('ngApp', [
  'yaru22.directives.md'
]);

app.controller('Ex2Ctrl', function ($scope) {
  $scope.mdText = '## Example 2\nThis is a second example. Modify the text in the text box and see it being rendered on the fly!';
});

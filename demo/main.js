var app = angular.module('ngApp', [
  'yaru22.md'
]);

app.controller('Ex3Ctrl', function ($scope) {
  $scope.mdText = '## Example 3\nThis is the third example. Modify the text in the text box and see it being rendered on the fly!';
});

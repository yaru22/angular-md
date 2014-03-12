/* globals angular, beforeEach, chai, describe, inject, it */
'use strict';

var expect = chai.expect;

describe('Static markdown rendering', function () {
  var elm, scope;

  // load the code
  beforeEach(module('yaru22.md'));

  beforeEach(inject(function ($rootScope, $compile) {
    // we might move this tpl into an html file as well...
    elm = angular.element('<md>**Hello world**</md>');

    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
  }));


  it('should render "Hello world" with "hello" being strong element', inject(function () {
    var strong = elm.find('strong');

    expect(strong).to.have.length(1);
    expect(strong.eq(0).text()).to.equal('Hello world');
  }));
});

describe('Dynamic markdown rendering', function () {
  var elm, scope;

  // load the code
  beforeEach(module('yaru22.md'));

  beforeEach(inject(function ($rootScope, $compile) {
    // we might move this tpl into an html file as well...
    elm = angular.element('<md ng-model="mdText">Ignored text.</md>');

    scope = $rootScope;
    scope.mdText = '**Hello world**';
    $compile(elm)(scope);
    scope.$digest();
  }));


  it('should not render "Ignored text."', inject(function () {
    var renderedText = elm.text();
    expect(renderedText.search('Ignored text.')).to.equal(-1);
  }));

  it('should render "Hello world" with "hello" being strong element', inject(function () {
    var strong = elm.find('strong');

    expect(strong).to.have.length(1);
    expect(strong.eq(0).text()).to.equal('Hello world');
  }));
});

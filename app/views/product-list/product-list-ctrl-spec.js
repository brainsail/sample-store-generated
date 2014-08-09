/*globals inject, beforeEach, describe, it, expect, module*/
describe('wc.views.ProductList', function () {

  beforeEach( module('wc.views.ProductList'));
  var scope, ctrl;
  beforeEach( inject( function ($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('ProductListCtrl as vm', { $scope: scope });
  }));


  it('should have scope', function () {
    expect(scope.vm.name).to.equal('ProductListCtrl');
  });

});
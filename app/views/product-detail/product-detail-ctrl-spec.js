/*globals inject, beforeEach, describe, it, expect, module*/
describe('wc.views.ProductDetail', function () {

  beforeEach( module('wc.views.ProductDetail'));
  var scope, ctrl;
  beforeEach( inject( function ($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('ProductDetailCtrl as vm', { $scope: scope });
  }));


  it('should have scope', function () {
    expect(scope.vm.name).to.equal('Product Detail');
  });

});
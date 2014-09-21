/*globals inject, beforeEach, describe, it, expect, module*/
xdescribe('wc.views.ProductAdd', function () {

  beforeEach( module('wc.views.ProductAdd'));
  var scope, ctrl;
  beforeEach( inject( function ($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('ProductAddCtrl as vm', { $scope: scope });
  }));


  it('should have scope', function () {
    expect(scope.vm.name).to.equal('Add a New Product');
  });

});
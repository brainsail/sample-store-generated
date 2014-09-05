/*globals inject, beforeEach, describe, it, expect, module*/
describe('wc.views.ProductManage', function () {

  beforeEach( module('wc.views.ProductManage'));
  var scope, ctrl;
  beforeEach( inject( function ($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('ProductManageCtrl as vm', { $scope: scope });
  }));


  it('should have scope', function () {
    expect(scope.vm.name).to.equal('ProductManageCtrl');
  });

});
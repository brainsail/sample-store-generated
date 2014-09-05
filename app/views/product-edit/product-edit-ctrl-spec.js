/*globals inject, beforeEach, describe, it, expect, module*/
describe('wc.views.ProductEdit', function () {

  beforeEach( module('wc.views.ProductEdit'));
  var scope, ctrl;
  beforeEach( inject( function ($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('ProductEditCtrl as vm', { $scope: scope });
  }));


  it('should have scope', function () {
    expect(scope.vm.name).to.equal('ProductEditCtrl');
  });

});
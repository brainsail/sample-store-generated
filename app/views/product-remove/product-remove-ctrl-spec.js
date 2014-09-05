/*globals inject, beforeEach, describe, it, expect, module*/
describe('wc.views.ProductRemove', function () {

  beforeEach( module('wc.views.ProductRemove'));
  var scope, ctrl;
  beforeEach( inject( function ($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('ProductRemoveCtrl as vm', { $scope: scope });
  }));


  it('should have scope', function () {
    expect(scope.vm.name).to.equal('ProductRemoveCtrl');
  });

});
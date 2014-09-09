/*globals inject, beforeEach, describe, it, expect, module*/
/*jshint expr: true*/
describe('wc.services.WcToastr', function () {

  beforeEach( module('wc.services.WcToastr'));

  it('should have a data function that returns an array', inject(function (wcToastr) {
    expect(angular.isArray(wcToastr.getData())).to.be.true;
  }));

});
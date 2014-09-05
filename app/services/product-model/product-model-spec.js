/*globals inject, beforeEach, describe, it, expect, module*/
/*jshint expr: true*/
describe('wc.services.ProductModel', function () {

  beforeEach( module('wc.services.ProductModel'));

  it('should have a data function that returns an array', inject(function (productModel) {
    expect(angular.isArray(productModel.getData())).to.be.true;
  }));

});
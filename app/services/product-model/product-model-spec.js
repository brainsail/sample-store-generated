/*globals inject, beforeEach, describe, it, expect, module*/
/*jshint expr: true*/
describe('wc.services.ProductModel', function () {
  var mockProducts, $httpBackend;

  beforeEach( module('wc.services.ProductModel'));
  beforeEach( module('wc.services.ProductResourceMockData'));

  beforeEach( inject(function(_$httpBackend_, ProductResourceMockData) {
      mockProducts = ProductResourceMockData;
      $httpBackend = _$httpBackend_;
      $httpBackend.whenGET('/api/v1/products').respond(200, mockProducts);
  }));

  describe('refresh', function () {
    it('should return a list of products', inject(function ($log, productModel) {
      productModel.refresh().then(
          function(resp){
            expect(angular.isArray(resp)).to.be.true;
          },
          function(err){
            $log.error(err);
          }
        );
      $httpBackend.flush();
    }));
  });

});
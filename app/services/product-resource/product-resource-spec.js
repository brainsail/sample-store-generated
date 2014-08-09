/*globals inject, beforeEach, describe, it, expect, module*/
describe('wc.services.ProductResource', function () {
  var mockProducts, $httpBackend;

  beforeEach( module('wc.services.ProductResource'));
  beforeEach( module('wc.services.ProductResourceMockData'));

  beforeEach( inject(function(_$httpBackend_, ProductResourceMockData) {
      mockProducts = ProductResourceMockData;
      $httpBackend = _$httpBackend_;
      $httpBackend.whenGET('/api/v1/products').respond(200, mockProducts);
  }));

  describe('get', function () {
    it('should return a list of products', inject(function ($log, ProductResource) {
      ProductResource.get().then(
          function(resp){
            expect(angular.isArray(resp.data)).to.be.true;
          },
          function(err){
            $log.error(err);
          }
        );
      $httpBackend.flush();
    }));
  });

  // describe('edit', function () {

  //   beforeEach(inject(function() {
      
  //   }));

  // });

  // describe('add', function () {


  // });

  // describe('remove', function () {

  // });

});
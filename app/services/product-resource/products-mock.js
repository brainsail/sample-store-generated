(function () {
  angular.module('wc.services.ProductResourceMock', ['ngMockE2E', 'wc.services.ProductResourceMockData'])
    .run(function ($httpBackend, ProductResourceMockData) {
      var URL = '/api/v1/products';
      $httpBackend.whenGET(URL).respond(ProductResourceMockData);
  });
})(); 
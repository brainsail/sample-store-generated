(function () {
  angular.module('wc.services.ProductResourceMock', ['ngMockE2E', 'wc.services.ProductResourceMockData'])
    .run(function ($httpBackend, ProductResourceMockData) {
      var URL = '/api/v1/products';
      $httpBackend.whenGET(URL).respond(ProductResourceMockData);
      $httpBackend.whenPOST(URL).respond(function (method, url, data) {
        var lastId = _.max(ProductResourceMockData, function(product) {
          return product.id;
        });
        data = JSON.parse(data);
        data.id = lastId.id + 1;
        ProductResourceMockData.push(data);
        return [200, data, {}];
      });
  });
})(); 
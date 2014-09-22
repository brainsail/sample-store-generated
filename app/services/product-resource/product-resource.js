(function () {


  /* @ngInject */
  function ProductResource(Restangular){
    var ra = Restangular.withConfig(function (Configurer) {
          Configurer.setBaseUrl('/api/v1');
    });

    var productResource = ra.all('products');

    function getProductList(){
      return productResource.getList();
    }

    function addProduct(product){
      return productResource.post(product);
    }

    function removeProduct(product){
      return productResource.remove(product);
    }

    function editProduct(product){
      return productResofurce.remove(product);
    }

    //Public API
    return {
      get: getProductList,
      add: addProduct,
      remove: removeProduct,
      edit: editProduct
    };
  }

  angular.module('wc.services.ProductResource', ['restangular'])
    .factory('ProductResource', ProductResource);

})();
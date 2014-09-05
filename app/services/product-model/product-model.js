(function () {

  /* @ngInject */
  function ProductModel($log, ProductResource) {
    var _products = [];
    var _selectedProduct;

    function refreshProducts(){
      return ProductResource.get().then(
        function(resp){
          _products = resp.data;
          return _products;
        },
        function(err){
          $log.error(err);

        }
      );
    }

    function selectProduct(product) {
      _selectedProduct = product;
    }

    //Public API
    return {
      getProducts: function () {
        return _products;
      },
      refresh: refreshProducts,
      select: selectProduct,
      getSelectedProduct: function () {
        return _selectedProduct;
      }
    };
  }

  angular.module('wc.services.ProductModel', ['wc.services.ProductResource'])
    .factory('productModel', ProductModel);

})();
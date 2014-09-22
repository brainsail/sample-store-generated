(function () {

  /* @ngInject */
  function ProductModel($log, ProductResource) {
    var _products = [];
    var _selectedProduct;

    function refreshProducts(){
      return ProductResource.get().then(
        function(resp){
          _products = resp;
          return _products;
        },
        function(err){
          $log.error(err);

        }
      );
    }

    function addProduct(product) {
      return ProductResource.add(product).then(
        function(resp) {
          _products.push(resp);
          return resp;
        },
        function(err){
          $log.error(err);
        }
      );
    }

    function selectProduct(product) {
      _selectedProduct = product;
    }

    function getProducts() {
        return _products;
      }

    function getSelectedProduct() {
      return _selectedProduct;
    }

    //Public API
    return {
      getProducts: getProducts,
      refresh: refreshProducts,
      select: selectProduct,
      add: addProduct,
      getSelectedProduct: getSelectedProduct
    };
  }

  angular.module('wc.services.ProductModel', ['wc.services.ProductResource'])
    .factory('productModel', ProductModel);

})();
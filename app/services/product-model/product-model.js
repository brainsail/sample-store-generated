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

    function addProduct () {
      ProductResource.add(product).then(
        function(resp) {
          vm.products.push(resp.data);
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
      add: addProduct,
      getSelectedProduct: function () {
        return _selectedProduct;
      }
    }
  }

  angular.module('wc.services.ProductModel', ['wc.services.ProductResource'])
    .factory('productModel', ProductModel);

})();
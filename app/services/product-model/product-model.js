(function () {

  /* @ngInject */
  function ProductModel($log, ProductResource, wcToastr) {
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
          wcToastr.success( resp.name + ' Added!');
          return resp;
        },
        function(err){
          $log.error(err);
          wcToastr.error('You screwed something up.');
        }
      );
    }

    function removeProduct(product) {
      return ProductResource.remove(product).then(
        function(resp) {
          _.remove(_products, function (product) { 
            return product.id  === resp.id;
          });
          wcToastr.success( resp.name + ' Deleted!');
          return resp;
        },
        function(err){
          $log.error(err);
          wcToastr.error('You screwed something up.');
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

    refreshProducts();

    //Public API
    return {
      getProducts: getProducts,
      refresh: refreshProducts,
      select: selectProduct,
      add: addProduct,
      remove: removeProduct,
      getSelectedProduct: getSelectedProduct
    };
  }

  angular.module('wc.services.ProductModel', ['wc.services.ProductResource', 'wc.services.WcToastr'])
    .factory('productModel', ProductModel);

})();
(function () {

  /* @ngInject */
  function ProductListCtrl($log, ProductResource, productModel) {
    var vm = this;
    vm.name = 'Products';
    vm.products = [];

    productModel.refresh().then(
      function (resp) {
        vm.products = resp;
      }
    );

    vm.addProduct = function(product) {
      ProductResource.add(product).then(
        function(resp) {
          vm.products.push(resp.data);
        },
        function(err){
          $log.error(err);
        }
      );
    };

    vm.selectProduct = function(product) {
      productModel.select(product);
    };

  }

  angular.module('wc.views.ProductList', ['wc.services.ProductResource','wc.services.ProductModel','ui.router'])
    .controller('ProductListCtrl', ProductListCtrl);

})(); 

(function () {

  /* @ngInject */
  function ProductListCtrl($log, productModel) {
    var vm = this;
    vm.name = 'Products';
    vm.products = [];

    productModel.refresh().then(
      function (resp) {
        vm.products = resp;
      }
    );

    vm.selectProduct = function(product) {
      productModel.select(product);
    };

    vm.addProduct = function(product) {
      productModel.add(product);
    }

  }

  angular.module('wc.views.ProductList', ['wc.services.ProductModel','ui.router'])
    .controller('ProductListCtrl', ProductListCtrl);

})(); 

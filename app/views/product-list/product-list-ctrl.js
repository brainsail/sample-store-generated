(function () {

  /* @ngInject */
  function ProductListCtrl($log, $modal, productModel, wcToastr) {
    var vm = this;
    vm.name = 'Products';
    vm.products = [];

    productModel.refresh().then(
      function (resp) {
        vm.products = resp;
      }
    );

    vm.selectProduct = function (product) {
      productModel.select(product);
    };

    vm.addProduct = function (product) {
      productModel.add(product);
    };

    vm.open = function () {
      $modal.open({
        templateUrl: '/views/product-add/product-add.html',
        controller: 'ProductAddCtrl as vm',
        size: 'lg'
      }).result.then(
        function () {
          wcToastr.success('New Product Added!');
        },
        function () {
          wcToastr.warn('Product Add Cancelled!');
        }
      );
    };

  }

  angular.module('wc.views.ProductList', ['wc.services.ProductModel','ui.router','ui.bootstrap', 'wc.views.ProductAdd', 'wc.services.WcToastr'])
    .controller('ProductListCtrl', ProductListCtrl);

})(); 

(function () {

  /* @ngInject */
  function ProductListCtrl($log, $scope, $modal, productModel, wcToastr) {
    var vm = this;
    vm.name = 'Products';
    vm.products = [];

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
      });
    };

    $scope.$watch(
      function () {
        return productModel.getProducts();
      },
      function (products) {
        vm.products = products;
      }
    );

  }

  angular.module('wc.views.ProductList', ['wc.services.ProductModel','ui.router','ui.bootstrap', 'wc.views.ProductAdd', 'wc.services.WcToastr'])
    .controller('ProductListCtrl', ProductListCtrl);

})(); 

(function () {

  /* @ngInject */
  function ProductDetailCtrl($stateParams, productModel, $state) {
    var vm = this;
    vm.name = 'Product Detail';
    vm.product = productModel.getSelectedProduct();

    vm.remove = function (product) {
      productModel.remove(product);
      $state.go('productList');
    };

    vm.back = function () {
      $state.go('productList');
    };
  }

  angular.module('wc.views.ProductDetail', ['ui.router', 'wc.services.ProductModel'])
    .controller('ProductDetailCtrl', ProductDetailCtrl);

})();


(function () {

  /* @ngInject */
  function ProductAddCtrl($state, $modalInstance, productModel) {
    var vm = this;
    vm.name = 'Add a New Product';
    
    vm.addProduct = function () {
      productModel.add(vm.product).then(
          function () {
            $modalInstance.close();
          }
        );
    };

    vm.newProduct =   {
      id: 0,
      name: '',
      price: 0,
      description: '',
      images: [],
      canPurchase: false,
      soldOut: false,
      reviews: []
    };
    
    var resetForm = function () {
      vm.product = vm.newProduct;
    };

    vm.back = function () {
      $state.go('productList');
    };

    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    resetForm();

  }

  angular.module('wc.views.ProductAdd', ['ui.router', 'wc.services.ProductModel'])
    .controller('ProductAddCtrl', ProductAddCtrl);

})();


(function () {

  /* @ngInject */
  function ProductDetailCtrl($stateParams) {
    var vm = this;
    vm.name = 'ProductDetailCtrl';
  }

  angular.module('wc.views.ProductDetail', ['ui.router'])
    .controller('ProductDetailCtrl', ProductDetailCtrl);

})();


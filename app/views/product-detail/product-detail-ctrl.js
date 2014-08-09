(function () {

  /* @ngInject */
  function ProductDetailCtrl() {
    var vm = this;
    vm.name = 'ProductDetailCtrl';
  }

  angular.module('wc.views.ProductDetail', [])
    .controller('ProductDetailCtrl', ProductDetailCtrl);

})();


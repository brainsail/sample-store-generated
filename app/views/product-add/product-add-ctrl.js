(function () {

  /* @ngInject */
  function ProductAddCtrl() {
    var vm = this;
    vm.name = 'ProductAddCtrl';
  }

  angular.module('wc.views.ProductAdd', [])
    .controller('ProductAddCtrl', ProductAddCtrl);

})();


(function () {

  /* @ngInject */
  function ProductEditCtrl() {
    var vm = this;
    vm.name = 'ProductEditCtrl';
  }

  angular.module('wc.views.ProductEdit', [])
    .controller('ProductEditCtrl', ProductEditCtrl);

})();


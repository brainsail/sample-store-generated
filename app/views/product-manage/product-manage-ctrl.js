(function () {

  /* @ngInject */
  function ProductManageCtrl() {
    var vm = this;
    vm.name = 'ProductManageCtrl';
  }

  angular.module('wc.views.ProductManage', [])
    .controller('ProductManageCtrl', ProductManageCtrl);

})();


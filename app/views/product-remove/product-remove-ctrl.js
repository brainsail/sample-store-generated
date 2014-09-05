(function () {

  /* @ngInject */
  function ProductRemoveCtrl() {
    var vm = this;
    vm.name = 'ProductRemoveCtrl';
  }

  angular.module('wc.views.ProductRemove', [])
    .controller('ProductRemoveCtrl', ProductRemoveCtrl);

})();


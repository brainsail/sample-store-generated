(function () {

  /* @ngInject */
  function ProductListCtrl() {
    var vm = this;
    vm.name = 'ProductListCtrl';
  }

  angular.module('wc.views.ProductList', [])
    .controller('ProductListCtrl', ProductListCtrl);

})(); 

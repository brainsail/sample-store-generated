(function () {

  /* @ngInject */
  function ProductListCtrl($log, ProductResource) {
    var vm = this;
    vm.name = 'Products';
    vm.products = [];
    ProductResource.get().then(
      function(resp){
        vm.products = resp.data;
      },
      function(err){
        $log.error(err);
      }
    );
  }

  angular.module('wc.views.ProductList', ['wc.services.ProductResource'])
    .controller('ProductListCtrl', ProductListCtrl);

})(); 

(function () {

  /* @ngInject */
  function config ($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $stateProvider
      .state('productList', { url: '/product-list', templateUrl: '/views/product-list/product-list.html', controller: 'ProductListCtrl', controllerAs: 'vm'})
      .state('productDetail', { url: '/product-list/:id', templateUrl: '/views/product-detail/product-detail.html', controller: 'ProductDetailCtrl', controllerAs: 'vm'})
      .state('productAdd', { url: '/new-product', templateUrl: '/views/product-add/product-add.html', controller: 'ProductAddCtrl', controllerAs: 'vm'});

    $urlRouterProvider.otherwise('/product-list');
  }

  /* @ngInject */
  function SampleStoreGeneratedCtrl() {
    var vm = this;
    vm.appTitle = 'Sample Store Generated';
  }

  angular.module('sampleStoreGenerated', [
    'ui.router',
    'wc.tmpls',
    'wc.views.ProductList',
    'wc.views.ProductDetail',
    'wc.views.ProductAdd',
    'wc.services.ProductResourceMock',
    'wc.services.WcToastr'
  ])
    .config(config)

    .controller('SampleStoreGeneratedCtrl', SampleStoreGeneratedCtrl);
})();
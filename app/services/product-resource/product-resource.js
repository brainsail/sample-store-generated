(function () {

  function startCreating() {
    $scope.isCreating = true;
    $scope.isEditing = false;
    resetCreateForm();
  }

  /* @ngInject */
  function ProductResource($http){
    var URL = '/api/v1/products';
    function getProductList(){
      return $http.get(URL);
    };

    function addProduct(product){
      return $http.post(URL, product);
    };

    function removeProduct(){

    };

    function editProduct(){

    };

    //Public API
    return {
      get: getProductList,
      add: addProduct,
      remove: removeProduct,
      edit: editProduct
    };
  }

  angular.module('wc.services.ProductResource', [])
    .factory('ProductResource', ProductResource);

})();
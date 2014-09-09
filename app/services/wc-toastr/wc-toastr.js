(function () {

  /* @ngInject */
  function WcToastr(toastr) {
    toastr.options.closeButton = true;
    return {
      success: function (msg, title) {
        toastr.success(msg, title);
      },
      error: function (msg, title) {
        toastr.error(msg, title);
      },
      warn: function (msg, title) {
        toastr.warning(msg, title);
      }
    };
  }

  angular.module('wc.services.WcToastr', [])
    .value('toastr', toastr)
    .factory('wcToastr', WcToastr);

})();
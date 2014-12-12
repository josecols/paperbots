(function () {

  var app = angular.module('paperbots');

  app.controller('RegistroController', function ($scope, $http) {
    $scope.registro = function () {
      $http.post('registro', $scope.registroModelo)
        .success(function (resp) {
          //TODO: Mostrar exito de registro.
        })
        .error(function (resp) {
          //TODO: Mostrar error.
        });
      console.log($scope.registroModelo);
    };
  });

})();
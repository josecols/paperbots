(function () {

  var app = angular.module('paperbots');

  app.controller('RegistroController', function ($scope, $http) {
    $scope.registro = function (formValid) {
      
      if (!formValid || (!$scope.registroModelo.patas && !$scope.registroModelo.ruedas)) {
        alert('Debe completar todos los campos');
        return;
      }
      
      console.log($scope.registroModelo);
      
      $http.post('json/registro.php', $scope.registroModelo)
        .success(function (resp) {
          if (resp.success) {
            alert('Registro realizado con éxito, pronto recibirá en su correo más información acerca del evento');
          }
        })
        .error(function (resp) {
          alert('Ha ocurrido un error realizando el registro');
        });
    };
  });

})();
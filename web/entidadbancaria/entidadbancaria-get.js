GetController.$inject = ['$scope', '$routeParams', 'entidadBancariaService', '$location'];
function GetController($scope, $routeParams, entidadBancariaService, $location) {
    $scope.entidadBancaria = {};
    $scope.entidadBancaria.idEntidadBancaria = $routeParams.idEntidadBancaria;
    var response = entidadBancariaService.get($routeParams.idEntidadBancaria);
    $scope.valorboton = "Mostrar otra";
    $scope.estado = "VIEW";

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    });

    response.error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });

    $scope.ok = function () {
  $location.url('/find/');
    };

    $scope.cancel = function () {
        $location.url('/');
    };
}
app.controller("GetController", GetController);

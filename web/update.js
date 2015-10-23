app.controller("updateController", updateController);
updateController.Sinject=['$scope','$http','$routeParams'];
function updateController($scope, $http, $routeParams) {
$scope.actualizar = function () {
    $http({
        method: 'PUT',
        url: '../Banco.api/api/entidadbancaria/'+$routeParams.idEntidadBancaria,
        data: $scope.entidadBancaria

    }).success(function (data, status, headers, config) {
          alert( $scope.entidadBancaria.nombre);
        alert("Actualizado Correctamente");
    }).error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
        console.log(data);
    });
    }
}
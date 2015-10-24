app.controller("updateController", updateController);
updateController.Sinject = ['$scope', '$http', '$routeParams'];
function updateController($scope, $http, $routeParams) {
    $scope.entidadBancaria = {
    };
    $scope.entidadBancaria.idEntidadBancaria = +$routeParams.idEntidadBancaria
    $scope.actualizar = function () {
        $http({
            method: 'PUT',
            url: '../Banco.api/api/entidadbancaria/' + $scope.entidadBancaria.idEntidadBancaria,
            data: $scope.entidadBancaria

        }).success(function (data, status, headers, config) {
            alert("Actualizado");
            alert($scope.entidadBancaria.idEntidadBancaria);
        }).error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
            console.log(data);
        });
    }
}
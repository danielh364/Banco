app.controller("updateController", updateController);
updateController.Sinject = ['$scope', '$routeParams', 'entidadBancariaService'];
function updateController($scope, $http, $routeParams, entidadBancariaService) {
    $scope.entidadBancaria = {};
    $scope.entidadBancaria.idEntidadBancaria = +$routeParams.idEntidadBancaria
    $scope.actualizar = function () {

        var response = entidadBancariaService.update($scope.entidadBancaria.idEntidadBancaria, $scope.entidadBancaria);

        response.success(function (data, status, headers, config) {
            alert("Actualizado");
        })

        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
            console.log(data);
        });
    }
}
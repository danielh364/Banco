UpdateController.$inject = ['$scope', '$routeParams', 'entidadBancariaService', '$location'];
function UpdateController($scope, $routeParams, entidadBancariaService, $location) {
    $scope.entidadBancaria = {};
    $scope.entidadBancaria.idEntidadBancaria = +$routeParams.idEntidadBancaria;
    $scope.estado = "UPDATE";
    $scope.valorboton = "Actualizar";
    $scope.ok = function () {
        var response = entidadBancariaService.update($scope.entidadBancaria.idEntidadBancaria, $scope.entidadBancaria);

        response.success(function (data, status, headers, config) {
            alert("ACTUALIZADO CON ÉXITO");
        });

        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });
    };

    $scope.cancel = function () {
        $location.url('/find/');
    };
}
app.controller("UpdateController", UpdateController);
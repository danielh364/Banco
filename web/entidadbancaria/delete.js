DeleteController.$inject = ['$scope', '$routeParams', 'entidadBancariaService'];
function DeleteController($scope, $routeParams, entidadBancariaService) {
    $scope.entidadBancaria = {};
    $scope.identidadBancaria = $routeParams.idEntidadBancaria;
    $scope.estado = "DELETE";
    $scope.ok = function () {

        var response = entidadBancariaService.delete($routeParams.idEntidadBancaria);

        response.success(function (data, status, headers, config) {
            alert("se ha borrado Correctamente");

        });

        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });
    };
    $scope.cancel = function () {
        alert("No se ha borrado la entidad bancaria " + $routeParams.idEntidadBancaria);
    };
}
app.controller("DeleteController", DeleteController);
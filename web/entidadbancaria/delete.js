DeleteController.$inject = ['$scope', '$routeParams', 'entidadBancariaService'];
function DeleteController($scope, $routeParams, entidadBancariaService) {
    $scope.identidadBancaria = $routeParams.idEntidadBancaria;
    $scope.borrar = function () {

        var response = entidadBancariaService.delete($routeParams.idEntidadBancaria);

        response.success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
            alert("se ha borrado Correctamente");
        });
    }
    $scope.noBorrar = function () {
        alert("No se ha borrado la entidad bancaria " + $routeParams.idEntidadBancaria);
    }
}
app.controller("DeleteController", DeleteController);
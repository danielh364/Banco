app.controller("deleteController", deleteController);
deleteController.Sinject = ['$scope', '$routeParams', 'entidadBancariaService'];
function deleteController($scope, $routeParams, entidadBancariaService) {
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

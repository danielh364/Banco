DeleteController.$inject = ['$scope', '$routeParams', 'entidadBancariaService', '$location'];
function DeleteController($scope, $routeParams, entidadBancariaService, $location) {
    $scope.entidadBancaria = {};

    $scope.entidadBancaria.idEntidadBancaria = $routeParams.idEntidadBancaria;
    var response = entidadBancariaService.get($routeParams.idEntidadBancaria);
    $scope.estado = "DELETE";
    $scope.valorboton = "Borrar";

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    });

    response.error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });
    $scope.ok = function () {

        var response = entidadBancariaService.delete($routeParams.idEntidadBancaria);

        response.success(function (data, status, headers, config) {
            alert("BORRADO CON ÉXITO");

        });

        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });
    };
    $scope.cancel = function () {
        $location.url('/find/');
    };
}
app.controller("DeleteController", DeleteController);
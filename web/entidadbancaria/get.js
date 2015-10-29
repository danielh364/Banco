GetController.$inject = ['$scope', '$routeParams', 'entidadBancariaService'];
function GetController($scope, $routeParams, entidadBancariaService) {

    var response = entidadBancariaService.get($routeParams.idEntidadBancaria);
    $scope.estado = "VIEW";

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    });

    response.error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });
}
app.controller("GetController", GetController);

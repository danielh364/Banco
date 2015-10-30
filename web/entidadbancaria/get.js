GetController.$inject = ['$scope', '$routeParams', 'entidadBancariaService'];
function GetController($scope, $routeParams, entidadBancariaService) {
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

    };

    $scope.cancel = function () {
};
}
app.controller("GetController", GetController);

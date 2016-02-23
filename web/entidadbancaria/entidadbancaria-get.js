GetController.$inject = ['$scope', '$routeParams', 'entidadBancariaService', '$location','sucursalBancariaService'];
function GetController($scope, $routeParams, entidadBancariaService, $location, sucursalBancariaService) {
    $scope.entidadBancaria = {};
    $scope.sucursalesBancarias = {};
    $scope.entidadBancaria.idEntidadBancaria = $routeParams.idEntidadBancaria;
    var response = entidadBancariaService.get($routeParams.idEntidadBancaria);
    $scope.valorboton = "Mostrar otra";
    $scope.estado = "VIEW";
    
    var response2 = sucursalBancariaService.findSucursalByEntidad($routeParams.idEntidadBancaria);

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    });

    response.error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });

    response2.success(function (data, status, headers, config) {
        $scope.sucursalesBancarias = data;
    });

    response2.error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });


    $scope.ok = function () {
        $location.url('/find/');
    };

    $scope.cancel = function () {
        $location.url('/');
    };
}
app.controller("GetController", GetController);

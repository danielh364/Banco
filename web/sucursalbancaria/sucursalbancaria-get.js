GetSucursalController.$inject = ['$Scope', 'SucursalBancariaService', '$RouteParams', '$location'];


function GetSucursalController($Scope, SucursalBancariaService, $RouteParams, $location) {
    $scope.sucursalBancaria = {};
    $scope.sucursalBancaria.idSucursalBancaria = $RouteParams.idSucursalBancaria;

    response.success(function (data, status, headers, config) {
        $scope.sucursalBancaria = data;
    });

    response.error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });


}

app.Controller('GetSucursalController', GetSucursalController);


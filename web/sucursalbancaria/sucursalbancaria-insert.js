InsertSucursalController.$inject = ['SucursalBancariaService', '$routeParams','$Location', '$scope'];

function insertSucursalCOntroller($scope, SucursalBancariaService, $Location,$routeParams, $scope) {
    $scope.tipo = "INSERTAR";
    $scope.botonok = "Insertar";
    $scope.sucursalBancaria = {};

    $scope.ok = function () {


        var response = SucursalBancariaService.insert($scope.sucursalBancaria);

        response.success(function (data, status, headers, config) {
            alert("Insertado con exito");
        });

        response.error(function (data, status, headers, config) {
            $scope.businessMessages = data;
        });

    };

    $scope.cancel = function () {
        $location.url('/');

    };
}
;


app.controller('insertSucursalController', InsertSucursalController);
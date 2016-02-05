InsertController.$inject = ['$scope', 'entidadBancariaService', '$location'];
function InsertController($scope, entidadBancariaService, $location) {

    $scope.entidadBancaria = {};
    $scope.estado = "INSERT";
    $scope.valorboton = "Insertar";
    $scope.ok = function () {

        var response = entidadBancariaService.insert($scope.entidadBancaria);

        response.success(function (data, status, headers, config) {
            alert("INSERTADO CON ÉXITO");
        });

        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición: Estado HTTP:" + status);
             $scope.businessMessages = data;
            console.log(data);
        });
    };
    $scope.cancel = function () {
        $location.url('/');
    }
}
app.controller("InsertController", InsertController);
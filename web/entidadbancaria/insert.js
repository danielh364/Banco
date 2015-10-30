InsertController.$inject = ['$scope', 'entidadBancariaService'];
function InsertController($scope, entidadBancariaService) {

    $scope.entidadBancaria = {};
    $scope.estado = "INSERT";
    $scope.valorboton="Insertar";
    $scope.ok = function () {

        var response = entidadBancariaService.insert($scope.entidadBancaria);

        response.success(function (data, status, headers, config) {
            alert("INSERTADO CON ÉXITO");
        });

        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición: Estado HTTP:" + status);
            console.log(data);
        });
    };
     $scope.cancel = function () {}
}
app.controller("InsertController", InsertController);
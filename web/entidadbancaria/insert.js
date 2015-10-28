InsertController.$inject = ['$scope', 'entidadBancariaService'];
function InsertController($scope, entidadBancariaService) {

    $scope.entidadBancaria = {};

    $scope.insertar = function () {

        var response = entidadBancariaService.insert($scope.entidadBancaria);

        response.success(function (data, status, headers, config) {
            alert("INSERTADO CON ÉXITO");
        })

        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición: Estado HTTP:" + status);
            console.log(data);
        });
    }
}
app.controller("InsertController", InsertController);
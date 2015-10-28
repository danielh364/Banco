app.controller("insertController", insertController);

insertController.Sinject = ['$scope', 'entidadBancariaService'];
function insertController($scope, entidadBancariaService) {

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

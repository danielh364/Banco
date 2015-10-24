app.controller("insertController", insertController);

insertController.Sinject = ['$scope', '$http'];
function insertController($scope, $http) {


    $scope.insertar = function () {
//        No me funciona 
//        $scope.entidadBancaria = {
//        };

        $http({
            method: 'POST',
            url: '../Banco.api/api/entidadbancaria/',
            data: $scope.entidadBancaria

        }).success(function (data, status, headers, config) {
            alert("INSERTADO CON ÉXITO");
        }).error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
            console.log(data);
        });
    }
}

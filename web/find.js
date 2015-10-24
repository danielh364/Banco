app.controller("findController", findController);
findController.Sinject = ['$scope', '$http', '$routeParams'];
function findController($scope, $http, $routeParams) {

    if ($routeParams.nombre == null) {
        var config = {
            method: "GET",
            url: "../Banco.api/api/entidadbancaria"
        }

        var response = $http(config);
        response.success(function (data, status, headers, config) {
            $scope.entidadesBancarias = data;
        });
    }
    else {
        var config = {
            method: "GET",
            url: "../Banco.api/api/entidadbancaria?nombre=" + $routeParams.nombre
        }

        var response = $http(config);
        response.success(function (data, status, headers, config) {
            $scope.entidadesBancarias = data;
        });
    }
}
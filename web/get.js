
app.controller("getController", getController);
getController.Sinject=['$scope','$http','$routeParams'];
function getController($scope, $http, $routeParams) {
   
    var config = {
        method: "GET",
        url: "../Banco.api/api/entidadbancaria/"+$routeParams.idEntidadBancaria
    }
    var response = $http(config);
    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    });
}

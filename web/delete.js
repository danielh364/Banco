app.controller("deleteController", deleteController);
IndexController.Sinject=['$scope','$http','$routeParams'];
function deleteController($scope, $http, $routeParams) {
   
    var config = {
        method: "DELETE",
        url: "../Banco.api/api/entidadbancaria/"+$routeParams.idEntidadBancaria
    }
    var response = $http(config);
    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
           alert("se ha borrado Correctamente");
    });
}


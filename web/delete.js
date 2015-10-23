app.controller("deleteController", deleteController);
deleteController.Sinject=['$scope','$http','$routeParams'];
function deleteController($scope, $http, $routeParams) {
      $scope.identidadBancaria=$routeParams.idEntidadBancaria
   $scope.borrar = function () { 

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
   
   $scope.noBorrar = function () { 
   
    var config = {} 
    
    var response = $http(config);
    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
           alert("No se ha borrado la Entidad Bancaria");
    });
}
}

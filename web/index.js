var app = angular.module("app", ['ngRoute']);


app.controller("IndexController", IndexController);
IndexController.Sinject=['$scope','$http'];
function IndexController($scope, $http) {
    $scope.mensaje = "hola mundo";
   

    var config = {
        method: "GET",
        url: "../Banco.api/api/entidadbancaria"
    }

    var response = $http(config);
    response.success(function (data, status, headers, config) {
        $scope.entidadesBancarias = data;
    });


}

app.config(['$routeProvider', function ($routeProvider){
    
    
  $routeProvider.when('/get/:idEntidadBancaria', {
  templateUrl: "getangular.html",
  controller: "getController"
});
    
  
  $routeProvider.when('/insert/', {
  templateUrl: "formularioinsert.html",
  controller: "insertController"
});   

 $routeProvider.when('/delete/:idEntidadBancaria', {
  templateUrl: "delete.html",
  controller: "deleteController"
});
    

 $routeProvider.when('/update/:idEntidadBancaria', {
  templateUrl: "formularioupdate.html",
  controller: "updateController"
});   


    
}]);

app.controller("updateController", updateController);

updateController.Sinject=['$scope','$http','$routeParams'];
function updateController($scope, $http, $routeParams) {
    
$scope.idEntidadBancaria=+$routeParams.idEntidadBancaria;   
$scope.url;
$scope.actualizar = function () {
    $http({
        method: 'PUT',
        url: '../Banco.api/api/entidadbancaria/'+$scope.idEntidadBancaria,
        data: $scope.entidadBancaria

   }).success(function (data, status, headers, config) {
            alert("Actualizado");
        }).error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
            console.log(data);
        });
    }
}
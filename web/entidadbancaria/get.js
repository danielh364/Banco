GetController.$inject = ['$scope', '$routeParams', 'entidadBancariaService'];
function GetController($scope, $routeParams, entidadBancariaService) {

    var response = entidadBancariaService.get($routeParams.idEntidadBancaria);

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    });
}
app.controller("GetController", GetController);

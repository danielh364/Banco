app.controller("getController", getController);
getController.Sinject = ['$scope', '$routeParams', 'entidadBancariaService'];
function getController($scope, $routeParams, entidadBancariaService) {

    var response = entidadBancariaService.get($routeParams.idEntidadBancaria);

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    });
}

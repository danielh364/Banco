app.controller("findController", findController);
findController.Sinject = ['$scope', '$routeParams', 'entidadBancariaService'];
function findController($scope, $routeParams, entidadBancariaService) {
    var response;
    if ($routeParams.nombre == null) {

        response = entidadBancariaService.find();
        response.success(function (data, status, headers, config) {
            $scope.entidadesBancarias = data;
        });
    }
    else {

        response = entidadBancariaService.findByName($routeParams.nombre);
        response.success(function (data, status, headers, config) {
            $scope.entidadesBancarias = data;
        });
    }
}
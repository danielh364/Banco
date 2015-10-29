
FindController.$inject = ['$scope', '$routeParams', 'entidadBancariaService'];
function FindController($scope, $routeParams, entidadBancariaService) {

    if ($routeParams.nombre) {
        var response = entidadBancariaService.findByName($routeParams.nombre);
        response.success(function (data, status, headers, config) {
            $scope.entidadesBancarias = data;
        });
    } else {
        var response = entidadBancariaService.find();
        response.success(function (data, status, headers, config) {
            $scope.entidadesBancarias = data;
        });
    }
}
app.controller("FindController", FindController);
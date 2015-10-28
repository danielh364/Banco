
FindController.$inject = ['$scope', '$routeParams', 'entidadBancariaService'];
function FindController($scope, $routeParams, entidadBancariaService) {
    var response;
    
    if ($routeParams.nombre === undefined ) {

        response = entidadBancariaService.find();
        response.success(function (data, status, headers, config) {
            $scope.entidadesBancarias = data;
        });
    } else {
        response = entidadBancariaService.findByName($routeParams.nombre);
        response.success(function (data, status, headers, config) {
            $scope.entidadesBancarias = data;
        });
    }
}
app.controller("FindController", FindController);
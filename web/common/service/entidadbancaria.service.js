EntidadBancariaService.$inject = ['$http'];
function EntidadBancariaService($http) {

    this.find = function () {

        var response = $http({
            method: "GET",
            url: "/Banco.api/api/entidadbancaria"
        }
        );
        return response;
    };

    this.findByName = function (nombre) {

        var response = $http({
            method: "GET",
            url: "/Banco.api/api/entidadbancaria?nombre=" + nombre
        });
        return response;
    };


    this.insert = function (entidadBancaria) {
        var response = $http({
            method: 'POST',
            url: '/Banco.api/api/entidadbancaria/',
            data: entidadBancaria
        });
        return response;
    };


    this.get = function (idEntidadBancaria) {

        var response = $http({
            method: "GET",
            url: "/Banco.api/api/entidadbancaria/" + idEntidadBancaria
        });
        return response;
    };

    this.update = function (idEntidadBancaria, entidadBancaria) {
        var response = $http({
            method: 'PUT',
            url: '/Banco.api/api/entidadbancaria/' + idEntidadBancaria,
            data: entidadBancaria
        });
        return response;
    };


    this.delete = function (idEntidadBancaria) {

        var response = $http({
            method: "DELETE",
            url: "/Banco.api/api/entidadbancaria/" + idEntidadBancaria
        });
        return response;
    };
    

}
app.service("entidadBancariaService", EntidadBancariaService);
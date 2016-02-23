/* global app */

SucursalBancariaService.$inject = ['$http'];

function SucursalBancariaService($http) {

    this.find = function () {

        var response = $http({
            method: 'GET',
            url: '/Banco.api/api/sucursalbancaria'
        });
        return response;
    };

    this.get = function (idSucursalBancaria) {

        var response = $http({
            method: 'GET',
            url: '/Banco.api/api/sucursalbancaria/' + idSucursalBancaria
        });
        return response;
    };

    this.insert = function (sucursalbancaria) {

        var response = $http({
            method: 'POST',
            url: '/Banco.api/api/sucursalbancaria',
            data: sucursalbancaria
        });
        return response;
    };

    this.update = function (sucursalbancaria) {

        var response = $http({
            method: 'PUT',
            url: '/Banco.api/api/sucursalbancaria',
            data: sucursalbancaria
        });
        return response;
    };

    this.delete = function (idSucursalBancaria) {

        var response = $http({
            method: 'DELETE',
            url: '/Banco.api/api/sucursalbancaria/'+idSucursalBancaria
        });
        return response;
    };
    
       this.findSucursalByEntidad = function (idEntidadBancaria) {
        var response = $http({
            method: "GET",
            url: "/Banco.api/api/sucursalbancaria?identidadbancaria=" + idEntidadBancaria
        });
        return response;
    };
    
}

app.service('sucursalBancariaService', SucursalBancariaService);






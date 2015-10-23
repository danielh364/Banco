var app = angular.module("app", []);

function getParameterByName(name) {
    var regexS = "[\\?&]" + name + "=([^&#]*)",
            regex = new RegExp(regexS),
            results = regex.exec(window.location.search);
    if (results == null) {
        return "";
    } else {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
}

entidadBancaria = {
    idEntidadBancaria: getParameterByName("idEntidadBancaria"),
    nombre: getParameterByName("nombre"),
    codigoEntidad: getParameterByName("codigoEntidad"),
    fechaCreacion: getParameterByName("fechaCreacion"),
    direccion: getParameterByName("direccion"),
    cif: getParameterByName("cif")
}
updateController.Sinject=['$scope','$http'];
function updateController($scope, $http) {


    $http({
        method: 'PUT',
        url: '../Banco.api/api/entidadbancaria/'+getParameterByName("idEntidadBancaria"),
        data: entidadBancaria

    }).success(function (data, status, headers, config) {
        alert("Actualizado Correctamente");
    }).error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
        console.log(data);
    });
}
app.controller("updateController", updateController);
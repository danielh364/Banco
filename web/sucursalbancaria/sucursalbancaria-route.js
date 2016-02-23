
app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/insertsucursal/', {
            templateUrl: "sucursalbancaria/sucursalbancaria-detail.html",
            controller: "InsertSucursalController"
        });

        $routeProvider.when('/sucursal/:idSucursalBancaria', {
            templateUrl: "sucursalbancaria/sucursalbancaria-detail.html",
            controller: "GetSucursalController"
        });

        $routeProvider.when('/updatesucursal/:idSucursalBancaria', {
            templateUrl: "sucursalbancaria/sucursalbancaria-detail.html",
            controller: "UpdateSucursalController"
        });

        $routeProvider.when('/sucursal/', {
            templateUrl: "sucursalbancaria/sucursalbancaria-detail.html",
            controller: "FindSucursalController"
        });


        $routeProvider.when('/deletesucursal/:idSucursalBancaria', {
            templateUrl: "sucursalbancaria/sucursalbancaria-detail.html",
            controller: "DeleteSucursalController"
        });
    }]);
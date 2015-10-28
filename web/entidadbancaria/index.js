var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/find/', {
            templateUrl: "find.html",
            controller: "findController"
        });

        $routeProvider.when('/find/:nombre', {
            templateUrl: "find.html",
            controller: "findController"
        });

        $routeProvider.when('/get/:idEntidadBancaria', {
            templateUrl: "get.html",
            controller: "getController"
        });


        $routeProvider.when('/insert/', {
            templateUrl: "insert.html",
            controller: "insertController"
        });

        $routeProvider.when('/delete/:idEntidadBancaria', {
            templateUrl: "delete.html",
            controller: "deleteController"
        });


        $routeProvider.when('/update/:idEntidadBancaria', {
            templateUrl: "update.html",
            controller: "updateController"
        });

        $routeProvider.otherwise({
            redirectTo: '/find/'
        });

    }]);

var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/find/', {
            templateUrl: "find.html",
            controller: "FindController"
        });

        $routeProvider.when('/find/:nombre', {
            templateUrl: "find.html",
            controller: "FindController"
        });

        $routeProvider.when('/get/:idEntidadBancaria', {
            templateUrl: "get.html",
            controller: "GetController"
        });


        $routeProvider.when('/insert/', {
            templateUrl: "insert.html",
            controller: "InsertController"
        });

        $routeProvider.when('/delete/:idEntidadBancaria', {
            templateUrl: "delete.html",
            controller: "DeleteController"
        });


        $routeProvider.when('/update/:idEntidadBancaria', {
            templateUrl: "update.html",
            controller: "UpdateController"
        });

        $routeProvider.otherwise({
            redirectTo: '/find/'
        });

    }]);

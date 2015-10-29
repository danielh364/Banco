app.config(['$routeProvider', function ($routeProvider) {


        $routeProvider.when('/find/:nombre?', {
            templateUrl: "entidadbancaria/find.html",
            controller: "FindController"
        });

        $routeProvider.when('/get/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/get.html",
            controller: "GetController"
        });


        $routeProvider.when('/insert/', {
            templateUrl: "entidadbancaria/insert.html",
            controller: "InsertController"
        });

        $routeProvider.when('/delete/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/delete.html",
            controller: "DeleteController"
        });


        $routeProvider.when('/update/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/update.html",
            controller: "UpdateController"
        });

    }]);

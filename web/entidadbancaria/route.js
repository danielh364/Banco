app.config(['$routeProvider', function ($routeProvider) {


        $routeProvider.when('/find/:nombre?', {
            templateUrl: "entidadbancaria/find.html",
            controller: "FindController"
        });

        $routeProvider.when('/get/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/detail.html",
            controller: "GetController"
        });


        $routeProvider.when('/insert/', {
            templateUrl: "entidadbancaria/detail.html",
            controller: "InsertController"
        });

        $routeProvider.when('/delete/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/detail.html",
            controller: "DeleteController"
        });


        $routeProvider.when('/update/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/detail.html",
            controller: "UpdateController"
        });

    }]);

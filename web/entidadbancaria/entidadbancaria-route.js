app.config(['$routeProvider', function ($routeProvider) {


        $routeProvider.when('/find/:nombre?', {
            templateUrl: "entidadbancaria/entidadbancaria-find.html",
            controller: "FindController"
        });

        $routeProvider.when('/get/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/entidadbancaria-detail.html",
            controller: "GetController"
        });


        $routeProvider.when('/insert/', {
            templateUrl: "entidadbancaria/entidadbancaria-detail.html",
            controller: "InsertController"
        });

        $routeProvider.when('/delete/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/entidadbancaria-detail.html",
            controller: "DeleteController"
        });


        $routeProvider.when('/update/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/entidadbancaria-detail.html",
            controller: "UpdateController"
        });

    }]);

angular
    .module('proInd')
    .config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix("!");
    
        $routeProvider
            .when("/login",{
                    template:'<login></login>'
                })
            .when("/index",{
                template:'<index></index>'
            })
            .otherwise("/login");
    }]);
console.log("Best pet adoption blog ever?");

// angular.module('adoptionBlog', ['ngRoute'])
//     .config(['$locationProvider', '$routeProvider'],
//     function ($locationProvider, $routerProvider) {
//         $locationProvider.html5Mode({
//             enabled: true,
//             requiredBase: false,
//         });
//
//         $routerProvider
//             .when('/', {
//                 templateUrl: 'ngViews/home.html',
//                 controller: 'PostCtrl'
//             });
//
//         //default route
//         $routerProvider.otherwise({redirectTo: '/'});
//
//     });

angular.module('adoptionBlog', ['ngRoute'])
.config( [
    '$locationProvider',
    '$routeProvider',
    function ($locationProvider, $routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'ngViews/home.html',
                controller: 'PostsCtrl'
            });

        $routeProvider.otherwise({redirectTo: '/'});
    }
]);
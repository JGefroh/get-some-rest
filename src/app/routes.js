(function() {
    function Routes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                redirectTo: 'splash',
                data: {
                    pageTitle: 'Home'
                }
            })
            .state('splash', {
                url: '/splash',
                templateUrl: 'modules/splash/SplashView.html',
                controller: 'SplashController',
                data: {
                    pageTitle: 'Home'
                }
            })
            .state('rest', {
                url: '/rest',
                templateUrl: 'modules/rest/RESTView.html',
                controller: 'RESTController',
                data: {
                    pageTitle: 'REST Tester'
                }
            });
        $urlRouterProvider.otherwise('/splash');
    }
    angular
        .module('get-some-rest')
        .config(['$stateProvider', '$urlRouterProvider', Routes]);
})();
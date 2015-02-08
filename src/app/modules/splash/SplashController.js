(function () {
    function Controller ($scope, NavigationService, RESTService) {
        $scope.goTo = NavigationService.goTo;
    }

    angular
        .module('get-some-rest.SplashModule', [])
        .controller('SplashController', ['$scope', 'NavigationService', 'RESTService', Controller]);
})();

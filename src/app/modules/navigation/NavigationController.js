(function() {
    function Controller($scope, NavigationService, applicationName) {
        $scope.applicationName = applicationName;
        $scope.goTo = NavigationService.goTo;
        $scope.isActive = NavigationService.isActive;
    }
    angular
        .module('get-some-rest.NavigationModule')
        .controller('NavigationController', ['$scope', 'NavigationService', 'applicationName', Controller]);
})();
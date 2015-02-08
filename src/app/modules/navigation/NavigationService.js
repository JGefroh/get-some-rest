(function() {
    function Service($location, $stateParams) {
        this.goTo = function(route) {
            $location.path(route);
        };

        this.isActive = function(route) {
            return $location.path() === route || $location.path().indexOf(route) === 0;
        };

        this.getParameter = function(parameterName) {
            return $stateParams[parameterName];
        };

        this.setParameter = function(parameterName, value) {
            $stateParams[parameterName] = value;
        };
    }
    angular
        .module('get-some-rest.NavigationModule')
        .service('NavigationService', ['$location', '$stateParams', Service]);
})();
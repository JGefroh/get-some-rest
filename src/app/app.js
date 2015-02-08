/**
 * Defines and configures all modules.
 */
(function () {
    angular
        .module('get-some-rest',
            [
                'ngResource',
                'ui.bootstrap',
                'ui.router',
                'com.jgefroh.WidgetModule',
                'com.jgefroh.TableFilter',
                'get-some-rest.SplashModule',
                'get-some-rest.NavigationModule',
                'get-some-rest.RESTModule'
            ]
        );
    angular
        .module('get-some-rest')
        .constant('applicationName', 'Get Some Rest')
        .constant('versionNumber', 'v0.0.1')
        .constant('baseImagePath', 'resources/images/');
})();
(function () {
    function AppController ($rootScope, $state, $scope, baseImagePath) {
        $rootScope.baseImagePath = baseImagePath;

        $scope.getPageTitle = function() {
            if (!$state.current.data) {
                return null;
            }
            var pageSection = $state.current.data.pageSection ? ' - ' + $state.current.data.pageSection : '';
            return $state.current.data.pageTitle + pageSection;
        };
    }

    angular
        .module('get-some-rest')
        .controller('AppController', ['$rootScope', '$state', '$scope', 'baseImagePath', AppController]);
})();

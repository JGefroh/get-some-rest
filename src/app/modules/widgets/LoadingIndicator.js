(function() {
    function LoadingIndicatorDirective() {
        function LoadingIndicatorController($scope) {
            if (!$scope.fontSize) {
                $scope.fontSize = '1em';
            }
            if (!$scope.iconClass) {
                $scope.iconClass = 'fa fa-spin fa-spinner'
            }

            if ($scope.isCentered === null || $scope.isCentered === undefined) {
                $scope.isCentered = true;
            }
        }
        return {
            restrict: 'A',
            transclude: true,
            scope: {
                message: '=',
                isLoading: '=',
                fontSize: '=?',
                isCentered: '=?',
                iconClass: '=?'
            },
            templateUrl: 'LoadingIndicator.html',
            controller: ['$scope', LoadingIndicatorController]
        }
    }
    angular
        .module('com.jgefroh.WidgetModule')
        .directive('loadingIndicator', LoadingIndicatorDirective);
})();
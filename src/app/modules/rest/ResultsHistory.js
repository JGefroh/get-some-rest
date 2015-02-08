(function() {
    function Directive() {
        function Controller($scope, RESTService) {
            $scope.resultsHistory = RESTService.resultsHistory;

            $scope.pager = {
                pageNumber: 1,
                itemsPerPage: 5,
                numPages: 7
            };

            $scope.view = function(result) {
                $scope.$emit('resultsHistory.viewResult', result);
            };
        }
        return {
            restrict: 'A',
            scope: {
                currentResultId: '='
            },
            templateUrl: 'ResultsHistory.html',
            controller: ['$scope', 'RESTService', Controller]
        }
    }
    angular
        .module('get-some-rest.RESTModule')
        .directive('resultsHistory', Directive);
})();
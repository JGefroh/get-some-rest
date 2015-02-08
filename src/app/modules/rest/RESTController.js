(function () {
    function Controller ($scope, NavigationService, RESTService) {
        $scope.url = 'data/projects.json';
        $scope.lastRequestedId = RESTService.getId();

        $scope.operations = {
            isGetting: false,
            isPutting: false,
            isDeleting: false,
            isPosting: false,
            isLoading: function() {
                return this.isGetting || this.isPutting || this.isDeleting || this.isPosting;
            }
        };

        $scope.$on('resultsHistory.viewResult', function(event, result) {
            $scope.result = result;
        });

        $scope.get = function(url) {
            $scope.operations.isGetting = true;
            $scope.lastRequestedId = RESTService.getId();
            RESTService.get($scope.lastRequestedId, url).then(function(result) {
                if (result.id === $scope.lastRequestedId) {
                    $scope.result = result;
                    $scope.operations.isGetting = false;
                }
            });
        };
    }

    angular
        .module('get-some-rest.RESTModule')
        .controller('RESTController', ['$scope', 'NavigationService', 'RESTService', Controller]);
})();

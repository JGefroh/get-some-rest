(function () {
    function Controller ($scope, NavigationService, RESTService) {
        $scope.request = {
            parameters: [],
            url: 'data/projects.json',
            id: RESTService.getId()
        };

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
            $scope.result = angular.copy(result);
            $scope.request = angular.copy(result.request);
        });


        $scope.removeParameter = function(parameter) {
            var index = $scope.request.parameters.indexOf(parameter);
            $scope.request.parameters.splice(index, 1);
        };

        $scope.addParameter = function(name, value) {
            $scope.request.parameters.push({name:name, value:value});
        };

        $scope.get = function(request) {
            $scope.operations.isGetting = true;
            $scope.request.id = RESTService.getId();
            RESTService.get(angular.copy(request)).then(function(result) {
                $scope.operations.isGetting = false;
                if (result.request.id === $scope.request.id) {
                    $scope.result = result;
                }
            });
        };
    }

    angular
        .module('get-some-rest.RESTModule')
        .controller('RESTController', ['$scope', 'NavigationService', 'RESTService', Controller]);
})();

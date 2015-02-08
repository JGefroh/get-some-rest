(function() {
    function Service($http) {
        var self = this;
        this.resultsHistory = [];
        var lastUsedId = 0;
        this.get = function(request) {
            var timeStarted = new Date();
            request.type = 'GET';
            return $http.get(request.url).then(function(response) {
                var timeEnded =  new Date();
                return createResult(request, createLiteResponse(response), timeStarted, timeEnded);
            }, function(response) {
                var timeEnded = new Date();
                return createResult(request, createLiteResponse(response), timeStarted, timeEnded);
            });
        };

        this.getId = function() {
            return lastUsedId++;
        };

        function createLiteResponse(response) {
            if (angular.isObject(response.data)) {
                response.type = 'json';
            }
            else {
                response.type = 'html';
            }
            return {
                data: response.data,
                status: response.status,
                type: response.type
            }
        }

        function createResult(request, response, timeStarted, timeEnded) {
            var result = {
                request: request,
                response: response,
                timeStarted: timeStarted,
                timeTaken: timeEnded - timeStarted
            };
            self.resultsHistory.push(result);
            return result;
        }
    }
    angular
        .module('get-some-rest.RESTModule')
        .service('RESTService', ['$http', Service]);
})();
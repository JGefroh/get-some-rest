(function() {
    function Service($http) {
        var self = this;
        this.resultsHistory = [];
        var lastUsedId = 0;
        this.get = function(id, url) {
            var timeStarted = new Date();
            return $http.get(url).then(function(response) {
                var timeEnded =  new Date();
                return createResult(id, url, 'GET', createLiteResponse(response), timeStarted, timeEnded);
            }, function(response) {
                var timeEnded = new Date();
                return createResult(id, url, 'GET', createLiteResponse(response), timeStarted, timeEnded);
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

        function createResult(id, url, requestType, response, timeStarted, timeEnded) {
            var result = {
                id: id,
                url: url,
                response: response,
                requestType: requestType,
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
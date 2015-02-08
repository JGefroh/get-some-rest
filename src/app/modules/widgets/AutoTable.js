(function() {
    function AutoTableDirective() {
        function AutoTableController($scope) {
            $scope.pager = {
                pageNumber: 1,
                itemsPerPage: 5,
                numPages: 7
            };
            $scope.$watch('objects', function (newVal, oldVal) {
                rebuildHeadersAndFields();
            });
            rebuildHeadersAndFields();

            function hasObjects() {
                return $scope.objects && $scope.objects.length > 0;
            }

            function rebuildHeadersAndFields() {
                if (!$scope.headers || $scope.headers.length === 0) {
                    console.warn('AutoTable: Headers not provided - generating headers from object properties.');
                    if (hasObjects()) {
                        $scope.generatedHeaders = [];
                        for (var propertyName in $scope.objects[0]) {
                            if (propertyName.indexOf('$') === -1) {
                                $scope.generatedHeaders.push(propertyName);
                            }
                        }
                    }
                }

                if (!$scope.fields) {
                    console.warn('AutoTable: Fields not provided - generating fields from headers.');
                }
            }
        }
        return {
            restrict: 'A',
            scope: {
                objects: '='
            },
            templateUrl: 'AutoTable.html',
            controller: ['$scope', AutoTableController]
        }
    }
    angular
        .module('com.jgefroh.WidgetModule')
        .directive('autoTable', AutoTableDirective);
})();
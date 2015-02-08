(function() {
    function TableFilter() {
        return function (tableData, pageNumber, itemsPerPage) {
            var dataToShow = [];
            if (tableData && tableData.length > 0) {
                dataToShow = tableData.slice((pageNumber-1) * itemsPerPage, pageNumber * itemsPerPage);
            }
            return dataToShow;
        };
    }
    angular
        .module('com.jgefroh.TableFilter', [])
        .filter('TableFilter', TableFilter);
})();
var a = angular.module('ngFactorySort', []);


a.factory('factorySort', ['$q', function($q) {
	return {
		trigger: function (haystack, columnName, sequence) {
			
			return $q(function(resolve, reject) {
				if(sequence.toLowerCase() == "asc") {

						haystack.sort(function(a, b) {
								    return parseFloat(a[columnName]) - parseFloat(b[columnName]);
								});
				}
				else {
					haystack.sort(function(a, b) {
								    return parseFloat(b[columnName]) - parseFloat(a[columnName]) ;
								});
				}

				resolve(haystack);
				});

				
			
		}
	}
}]);
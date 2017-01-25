var a = angular.module('ngFactorySort', []);


a.factory('factorySort', ['$q', function($q) {
	return {
		trigger: function (haystack, columnName, sequence) {
			
			return $q(function(resolve, reject) {
				if(sequence.toLowerCase() == "asc") {
						if(isNaN(haystack[0][columnName])) {
							haystack.sort(function(a,b) {return (a[columnName] > b[columnName]) ? 1 : ((b[columnName] > a[columnName]) ? -1 : 0);});
						}
						else {
							haystack.sort(function(a, b) {
									    return parseFloat(a[columnName]) - parseFloat(b[columnName]);
									});
							
						}
				}
				else {
					if(isNaN(haystack[0][columnName])) {
							haystack.reverse();
					}
					else {
					haystack.sort(function(a, b) {
								    return parseFloat(b[columnName]) - parseFloat(a[columnName]) ;
								});
					}
				}

				resolve(haystack);
				});

				
			
		}
	}
}]);

var clApp = angular.module('app',[]);

clApp.controller('lineCTRL', function ($scope, $http, $location) {

	function sortAsc(a,b) {
        c = a.substring(1, a.length);
        d = b.substring(1, b.length);
        return (c-d);
	}
	
	$scope.top =["c21", "c2","c12"];
	$scope.middle = [ "b31","b3","b2","b4"];
	$scope.bottom = ["a21","a11","a2","a1","a3"];
	
	$scope.top.sort(sortAsc);
	$scope.middle.sort(sortAsc);
	$scope.bottom.sort(sortAsc);
});

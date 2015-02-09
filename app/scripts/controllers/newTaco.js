'use strict';

app.controller('NewTacoCtrl', function($scope, $location, Taco) {
	$scope.taco = new Taco();

	$scope.create = function() {
		Taco.create({ taco: $scope.taco }, function() {
			$location.path('#/tacos');
		});
	};
});

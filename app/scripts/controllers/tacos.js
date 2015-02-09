'use strict';

app.controller('TacosCtrl', function($scope, $location, Taco) {
	$scope.tacos = Taco.query();

	$scope.destroy = function(taco) {
		taco.$delete(function() {
			// This function is run once it has successfully deleted
			// the taco
			$location.path('#/tacos');
		});
	};
});

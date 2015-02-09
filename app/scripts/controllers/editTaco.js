'use strict';

app.controller('EditTacoCtrl', function($scope, $routeParams, $location, Taco) {
	$scope.taco = Taco.get({ id: $routeParams.id });

	$scope.update = function() {
		Taco.update({ id: $scope.taco.id }, {
			// We have to manually pass in each value
			// to exclude id, created_at, and updated_at
			// to meet the whitelist criteria specified
			// in Rails' strong parameters
			taco: {
				sauce: $scope.taco.sauce,
				vegetable: $scope.taco.vegetable,
				meat: $scope.taco.meat
			}
		}, function() { // This function is run once the update is complete
			$location.path('/tacos/' + $scope.taco.id);
		});
	};
});

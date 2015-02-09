'use strict';

app.controller('TacoCtrl', function($scope, $routeParams, Taco) {
	$scope.taco = Taco.get({ id: $routeParams.id });
});

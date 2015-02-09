'use strict';

app.factory('Taco', function($resource) {
	// Connect to backend here using $resource
	return $resource('http://localhost:3000/tacos/:id', {
		id: '@id'
	}, {
		// Make Taco.update() available
		'update': { method: 'PUT' },

		// Make Taco.create() available
		'create': { method: 'POST' }
	});
});

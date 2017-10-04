(function() {
	'use strict';
	
	var app = angular.module('meanApp');

	function homeCtrl() {
		console.log('Home controller is running');
	}

	app.controller('homeCtrl', homeCtrl);

})();
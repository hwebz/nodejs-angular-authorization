(function() {
	'use strict';
	
	var app = angular.module('meanApp');

	function registerCtrl($location, authentication) {
		var vm = this;

		vm.credentials = {
			name: "",
			email: "",
			password: ""
		};

		vm.onSubmit = function() {
			console.log("Submitting registration");
			authentication
				.register(vm.credentials)
				.error(function(err) {
					console.log(err);
				})
				.then(function() {
					$location.path('profile');
				});
		}
	}
	registerCtrl.$inject = ['$location', 'authentication'];

	app.controller('registerCtrl', registerCtrl);

})();
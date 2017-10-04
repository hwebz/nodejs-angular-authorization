(function() {
	'use strict';
	
	var app = angular.module('meanApp');

	function loginCtrl($location, authentication) {
		var vm = this;

		vm.credentials = {
			email: '',
			password: ''
		};
		vm.error = '';;

		vm.onSubmit = function() {
			authentication
				.login(vm.credentials)
				.error(function(err) {
					console.log(err);
					vm.error = err;
				})
				.then(function() {
					$location.path('profile');
				});
		}
	}
	loginCtrl.$inject = ['$location', 'authentication'];

	app.controller('loginCtrl', loginCtrl);

})();
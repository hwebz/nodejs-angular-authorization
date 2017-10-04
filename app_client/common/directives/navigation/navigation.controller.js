(function() {
	'use strict';
	
	var app = angular.module('meanApp');

	function navigationCtrl($location, authentication) {
		var vm = this;

		vm.isLoggedIn = authentication.isLoggedIn();

		vm.currentUser = authentication.currentUser();

		vm.logout = function() {
			authentication.logout();
			$location.path('login');
		}
	}
	navigationCtrl.$inject = ['$location', 'authentication'];
	app.controller('navigationCtrl', navigationCtrl);

})();
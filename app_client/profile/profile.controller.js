(function() {
	'use strict';
	
	var app = angular.module('meanApp');

	function profileCtrl($location, meanData, $timeout) {
		var vm = this;

		vm.user = {};
		vm.isLoading = true;
		
		meanData.getProfile()
			.success(function(data) {
				vm.user = data;
				vm.isLoading = false;
			})
			.error(function(e) {
				console.log(e);
			})
	}

	profileCtrl.$inject = ['$location', 'meanData', '$timeout'];
	app.controller('profileCtrl', profileCtrl);

})();
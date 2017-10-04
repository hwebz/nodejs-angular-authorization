(function() {
	'use strict';
	
	var app = angular.module('meanApp');

	function meanData($http, authentication) {
		var getProfile = function() {
			return $http.get('/api/profile', {
				headers: {
					Authorization: 'Bearer ' + authentication.getToken()
				}
			});
		}

		return {
			getProfile: getProfile
		}
	}
	meanData.$inject = ['$http', 'authentication'];

	app.service('meanData', meanData);

})();
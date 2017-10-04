(function() {

	var app = angular.module('meanApp');

	function navigation() {
		return {
			restrict: 'E',
			templateUrl: '/common/directives/navigation/navigation.template.html',
			controller: 'navigationCtrl as navm'
		};
	}

	app.directive('navigation', navigation);

})();
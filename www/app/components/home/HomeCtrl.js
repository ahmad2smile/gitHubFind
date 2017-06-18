appMainModule.controller("HomeCtrl", function($scope, gitHubService) {

	function userDetailsResolved(data) {
		$scope.userDetails = data;
	}

	function userReposResolved(data) {
		$scope.repos = data;
	}

	function logError(err) {
		console.log(err);
	}

	$scope.getUserDetails = function(userName) {
		gitHubService.getUserDetails(userName)
							.then(userDetailsResolved, logError);
		gitHubService.getUserRepos(userName)
							.then(userReposResolved, logError);
	};
});

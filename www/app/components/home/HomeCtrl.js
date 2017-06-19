appMainModule.controller("HomeCtrl", function($scope, $ionicScrollDelegate, gitHubService) {
	$scope.dataReady = false;
	function userDetailsResolved(data) {
		$scope.userDetails = data;
	}

	function userReposResolved(data) {
		$scope.repos = data;
		data.forEach((repo, index)=>{
			gitHubService.getRepoLangs(repo.owner.login, repo.name)
								.then((data)=> {
									repo.usedLangs = Object.keys(data);
									$scope.dataReady = true;
								}, logError);
		});
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

	$scope.langFilter = function(lang = ""){
		$scope.filterByLang = $scope.filterByLang === lang ? "" : lang;
		$ionicScrollDelegate.scrollTop(true);
	};
});

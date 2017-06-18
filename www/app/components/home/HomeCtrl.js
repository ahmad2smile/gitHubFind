appMainModule.controller("HomeCtrl", function($scope, gitHubService) {

	$scope.getUserDetails = function(userName) {
		gitHubService.getUserDetails(userName)
							.then((res)=> $scope.userDetails = res, (err)=> console.log(err));
	}
});

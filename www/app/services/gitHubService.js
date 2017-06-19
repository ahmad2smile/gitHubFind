appMainModule.factory("gitHubService", function($http) {

	function getUserDetails(userName) {
		return $http.get("https://api.github.com/users/" + userName)
					.then((res)=> res.data);
	}

	function getUserRepos(userName){
		return $http.get("https://api.github.com/users/" + userName + "/repos")
					.then((res)=> res.data);
	}

	function getRepoLangs(userName, repoName) {
		return $http.get("https://api.github.com/repos/"+ userName +"/"+ repoName +"/languages")
					.then((res)=> res.data);
	}

	return {
		getUserDetails: getUserDetails,
		getUserRepos: getUserRepos,
		getRepoLangs: getRepoLangs
	};
});

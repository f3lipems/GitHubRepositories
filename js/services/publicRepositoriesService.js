angular.module("ADPChallenge").service("publicRespositories", function($http, config){
    this.getPublicRepositories = function(lastId){
        return $http.get(config.baseUrl + "repositories?since=" + lastId);
    };
});
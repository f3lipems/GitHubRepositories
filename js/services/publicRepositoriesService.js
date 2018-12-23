angular.module("ADPChallenge").service("publicRespositories", function($http, config){
    this.getPublicRepositories = function(url){
        return $http.get(config.baseUrl + "repositories");
    };
});
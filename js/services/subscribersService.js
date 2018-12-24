angular.module("ADPChallenge").factory("subscribers", function($http){
    let _getSubscribers = function(url){
        return $http.get(url);
    };

    return {
        getSubscribers: _getSubscribers
    }
});
angular.module("ADPChallenge").factory("subscriptions", function($http){
    let _getSubscriptions = function(url){
        return $http.get(url);
    };

    return {
        getSubscriptions: _getSubscriptions
    }
});
angular.module("ADPChallenge").directive("bodyDirective", function(){
    return{
        templateUrl: "view/body.html",
        replace: true,
        restrict: "E"
    }
});
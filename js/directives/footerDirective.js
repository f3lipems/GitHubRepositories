angular.module("ADPChallenge").directive("footerDirective", function(){
    return{
        templateUrl: "view/footer.html",
        replace: true,
        restrict: "E"
    }
});
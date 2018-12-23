angular.module("ADPChallenge").filter("pagination", function(){
    return function(input, paginationArray){
        return input.slice(paginationArray[0] * paginationArray[1]);
        }
});
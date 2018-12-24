angular.module("ADPChallenge").filter("ellipsis", function(){
    return function(input, size){
        if(input === null || input === undefined){
            input = ""
        }
        input = input.toString();
        if (input.length <= size){
            return input;
        }
        let output = input.substring(0,(size || 20)) + "...";
        return output;
    }
})
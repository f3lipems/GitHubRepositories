angular.module("ADPChallenge").filter("nameHeader", function(){
    return function(input){
        
        let listHeader = input.split("_");

        let formatedHeader = listHeader.map(function(header){
            // if(/(da|de)/.test(header)) return header
            return header.charAt(0).toUpperCase() + header.substring(1).toLowerCase()
        });

        return formatedHeader.join(" ");
    }
})
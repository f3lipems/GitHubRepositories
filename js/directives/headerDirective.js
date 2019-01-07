angular.module("ADPChallenge").directive("headerDirective", function(){
    return{
        // template: "<div> Header Directive </div>"
        templateUrl: "view/header.html",

        // Realiza replace no html
        replace: true,
        
        // A - Diretiva restrita como atributo de um elemento;
        // E - Diretiva restrita como elemento;
        // C - Diretiva restrita a classe do elemento;
        // M - Diretiva restritaao comentário do elemento.
        restrict: "E",
        scope: {
            head: "@head",
            subs: "=subs",
            respositories: "="
        }
    }
});
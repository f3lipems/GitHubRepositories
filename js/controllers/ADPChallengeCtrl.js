angular.module("ADPChallenge", ["ngMessages"]);
angular.module("ADPChallenge").controller("ADPChallengeCtrl", function ($scope, publicRespositories, subscribers) {
    
    $scope.title = "ADP Challenge - Git Repositories";

    //Table attributes
    $scope.tableHeader = [];
    $scope.paginationRow = 0;
    $scope.paginationActive = true;
    $scope.tableLimit = 7;
    $scope.sortField = '';
    $scope.paginationList = [];
    $scope.paginationButtonsList = [];

    //Count attributes
    $scope.repositoriesSelected = [];
    $scope.countRepositoriesSelected = 0;
    $scope.countSubscribersSelected = 0;


    let getPublicRepositories = function(){
        publicRespositories.getPublicRepositories().then(function(data){
            $scope.publicRespositories = data.data;
            
            buildPagination(data.data);
            buildListButtonsPagination();
        }).catch(function(data){
            $scope.message = "Erro ao carregar os repositórios do Git: " + data;
        });

    };

    let buildPagination = function(obj){
        let maxPage = obj.length / $scope.tableLimit;
        for(let i = 0; i < maxPage; i++){
            $scope.paginationList.push(i)
        }
    };

    let buildListButtonsPagination = function(){
        if($scope.paginationList.length <= 7){
            $scope.paginationButtonsList = $scope.paginationList;
        }
        else if($scope.paginationRow < 4){
            $scope.paginationButtonsList = $scope.paginationList.slice(1,7);
        }
        else if($scope.paginationRow > ($scope.paginationList.length - 4)){
            $scope.paginationButtonsList = $scope.paginationList.slice($scope.paginationList.length - 5);
        }
        else{
            $scope.paginationButtonsList = $scope.paginationList.slice(($scope.paginationRow - 1), ($scope.paginationRow + 4));
        };
    }

    $scope.goToPage = function(page){
        $scope.paginationRow = page;  
        buildListButtonsPagination();      
    }

    $scope.activePagination = function(){
        $scope.paginationActive = !$scope.paginationActive;
        if($scope.paginationActive == false){
            $scope.tableLimit = "";
        }else{
            $scope.tableLimit = 7;
        }
    }

    $scope.clickRow = function(repository){
        repository.selected = ! repository.selected
        console.log(repository);
        
 
        if(repository.subscribers == undefined){
            subscribers.getSubscribers(repository.subscribers_url).then(function(data){
                repository.subscribers = data;                
                repository.subscribersCount = data.data.length;               
                countRepositories();
            }).catch(function(data){
                $scope.message = "Erro ao carregar subscribers do repositório: " + data;
            });
        }else{
            countRepositories();
        }
    }

    $scope.sortWith = function(field){
        $scope.sortField = field;
        $scope.sortDirection = !$scope.sortDirection;
    };

    getPublicRepositories();

});
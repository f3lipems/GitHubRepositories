angular.module("ADPChallenge", []);
angular.module("ADPChallenge").controller("ADPChallengeCtrl", function ($scope, publicRespositories, subscribers) {
    
    $scope.title = "ADP Challenge - Git Public Repositories";

    //Table attributes
    $scope.publicRespositories = []
    $scope.tableHeader = [];
    $scope.paginationRow = 0;
    $scope.paginationActive = true;
    $scope.tableLimit = 7;
    $scope.paginationList = [];
    $scope.paginationButtonsList = [];
    $scope.sortField = '';
    $scope.sortFieldSelected = '';
    $scope.requestId = [0];
    $scope.positionId = 0;

    //Count attributes
    $scope.repositoriesSelected = [];
    $scope.countRepositoriesSelected = 0;
    $scope.countSubscribersSelected = 0;

    let getPublicRepositories = function(){
        publicRespositories.getPublicRepositories($scope.requestId[$scope.positionId]).then(function(data){
            $scope.publicRespositories = $scope.publicRespositories.concat(data.data);

            buildPagination($scope.publicRespositories);
            buildListButtonsPagination();
            getLastPosition();
        }).catch(function(data){
            $scope.message = "Erro ao carregar os repositórios do Git: " + data;
        });

    };

    let buildPagination = function(obj){
        $scope.paginationList = [];
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

    let countRepositories = function(){
        $scope.countSubscribersSelected = 0;
        $scope.countRepositoriesSelected = 0;
        $scope.repositoriesSelected = $scope.publicRespositories.filter(function(repository){
            if(repository.selected){
                $scope.countSubscribersSelected = $scope.countSubscribersSelected + repository.subscribers;
                $scope.countRepositoriesSelected = $scope.countRepositoriesSelected + 1;
                return repository;
            };
        });
    };

    let getLastPosition = function(){
        if($scope.publicRespositories[$scope.publicRespositories.length - 1].id > $scope.requestId[$scope.requestId.length - 1])
        $scope.requestId.push($scope.publicRespositories[$scope.publicRespositories.length - 1].id);
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
 
        if(repository.subscribers == undefined){
            subscribers.getSubscribers(repository.subscribers_url).then(function(data){                
                repository.subscribers = data.data.length;               
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
    
    $scope.sortWithSelected = function(field){
        $scope.sortFieldSelected = field;
        $scope.sortDirectionSelected = !$scope.sortDirectionSelected;
    };

    $scope.nextRequest = function(){
        $scope.positionId = $scope.positionId + 1 
        getPublicRepositories();
    }

    getPublicRepositories();

});
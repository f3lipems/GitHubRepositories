angular.module("ADPChallenge", ["ngMessages"]);
angular.module("ADPChallenge").controller("ADPChallengeCtrl", function ($scope, $filter, publicRespositories, subscriptions) {
    
    $scope.title = "ADP Challenge - Git Repositories";
    $scope.tableHeader = [];
    $scope.paginationRow = 0;
    $scope.tableLimit = 8;
    $scope.sortField = '';
    $scope.paginationList = [];

    // $scope.nameTest = "felipe_martins_da_silva";

    $scope.data = {
        model: null,
        availableOptions: [
          {id: '1', name: 'Option A'},
          {id: '2', name: 'Option B'},
          {id: '3', name: 'Option C'}
        ]
       };


    $scope.tablePageLimit = [
        {limit: 8, selected: true },
        {limit: 12},
        {limit: 16}
    ];

    let getPublicRepositories = function(){
        publicRespositories.getPublicRepositories().then(function(data, status){
            $scope.publicRespositories = data.data;
            console.log(data);
            // buildTableHeader(data.data[0]);
            buildPagination(data.data);
            
        }).catch(function(data, status){
            $scope.message = "Erro ao carregar os repositórios do Git: " + data;
        });

    };

    let getSubscriptions = function(url){
        subscriptions.getSubscriptions(url).then(function(data){
            $scope.subscriptions = data;
            console.log(data);
        }).catch(function(data, status){
            $scope.message = "Erro ao carregar subscribers do repositório: " + data;
        });
    }

    // let buildTableHeader = function(obj){
    //     Object.keys(obj).forEach(function(header){
    //         // if(header === 'owner'){
    //         //     Object.keys(header).forEach(function(header_owner){
    //         //         $scope.tableHeader.push(header_owner);
    //         //     });
    //         // }else{
    //         //     $scope.tableHeader.push(header);
    //         // }
    //         $scope.tableHeader.push(header);
    //     });
    //     console.log($scope.tableHeader);
    // }

    let buildPagination = function(obj){
        console.log(obj);
        
        let maxPage = obj.length / $scope.tableLimit;
        console.log(maxPage);
        
        for(let i = 0; i < maxPage; i++){
            $scope.paginationList.push(i)
            console.log(i);
            
        }
        console.log($scope.paginationList);
        
    };

    $scope.paginatorChange = function(){
        setTimeout(() => {
            buildPagination($scope.publicRespositories);            
        }, 1000);
    };

    $scope.goToPage = function(page){
        $scope.paginationRow = page; 
        console.log(page);
        
    }

    $scope.sortWith = function(field){
        $scope.sortField = field;
        $scope.sortDirection = !$scope.sortDirection;
        console.log($scope.sortField);
    };

    getPublicRepositories();
    getSubscriptions("https://api.github.com/repos/mojombo/grit/subscribers");

});
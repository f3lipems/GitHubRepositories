describe("Spec ADPChallenge controller", function(){

    let $controller
    let $rootScope
    let ADPChallengeCtrlSpec;
    let publicRespositoriesSpec;
    let subscribersSpec;

    beforeEach(angular.mock.module('ADPChallenge'));

    beforeEach(inject(function(_$controller_, _$rootScope_, publicRespositories, subscribers){
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        publicRespositoriesSpec = publicRespositories;
        subscribersSpec = subscribers;

        ADPChallengeCtrlSpec = $controller('ADPChallengeCtrl',{$scope: $rootScope, publicRespositories: publicRespositoriesSpec, subscribers: subscribersSpec});
    }));


    it("Controller exist", function(){
        expect(ADPChallengeCtrlSpec).toBeDefined();
    });

    describe("Spec $scope attirbutes",function(){
        it("Attribute tableHeader has the correct value", function(){
            expect($rootScope.tableHeader).toEqual([]);
        });
        it("Attribute paginationRow has the correct value", function(){
            expect($rootScope.paginationRow).toEqual(0);
        });
        it("Attribute paginationActive has the correct value", function(){
            expect($rootScope.paginationActive).toEqual(true);
        });
        it("Attribute tableLimit has the correct value", function(){
            expect($rootScope.tableLimit).toEqual(7);
        });
        it("Attribute sortField has the correct value", function(){
            expect($rootScope.sortField).toEqual('');
        });
        it("Attribute paginationList has the correct value", function(){
            expect($rootScope.paginationList).toEqual([]);
        });
        it("Attribute paginationButtonsList has the correct value", function(){
            expect($rootScope.paginationButtonsList).toEqual([]);
        });
        it("Attribute repositoriesSelected has the correct value", function(){
            expect($rootScope.repositoriesSelected).toEqual([]);
        });
        it("Attribute countRepositoriesSelected has the correct value", function(){
            expect($rootScope.countRepositoriesSelected).toEqual(0);
        });
        it("Attribute countSubscribersSelected has the correct value", function(){
            expect($rootScope.countSubscribersSelected).toEqual(0);
        });
    });

    describe("Spec $scope functions",function(){
        it("Function goToPage exist", function(){
            expect($rootScope.goToPage).toBeDefined();
        });
        it("Function activePagination exist", function(){
            expect($rootScope.activePagination).toBeDefined();
        });
        it("Function clickRow exist", function(){
            expect($rootScope.clickRow).toBeDefined();
        });
        it("Function sortWith exist", function(){
            expect($rootScope.sortWith).toBeDefined();
        });
    });
    
});
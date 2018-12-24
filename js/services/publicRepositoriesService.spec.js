describe("Spec public repositories service", function(){

    let repositories;

    beforeEach(angular.mock.module("ADPChallenge"));
    beforeEach(inject(function(publicRespositories){
        repositories = publicRespositories;
    }));

    it("Sevice exist", function(){
        expect(repositories).toBeDefined();
    });
    it("Service request exist", function(){
        expect(repositories.getPublicRepositories('http://github.com/repositories')).toBeDefined
    });
    it("Service request not to be Null", function(){
        expect(repositories.getPublicRepositories('http://github.com/repositories')).not.toBeNull();
    });
    it("Service request not to be Undefined", function(){
        expect(repositories.getPublicRepositories('http://github.com/repositories')).not.toBeUndefined();
    });

});
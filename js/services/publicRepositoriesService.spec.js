describe("Spec public repositories service", function(){

    let publicRespositoriesSpec;

    beforeEach(angular.mock.module("ADPChallenge"));
    beforeEach(inject(function(publicRespositories){
        publicRespositoriesSpec = publicRespositories;
    }));

    it("Sevice exist", function(){
        expect(publicRespositoriesSpec).toBeDefined();
    });
    it("Service request exist", function(){
        expect(publicRespositoriesSpec.getPublicRepositories('http://github.com/repositories')).toBeDefined
    });
    it("Service request not to be Null", function(){
        expect(publicRespositoriesSpec.getPublicRepositories('http://github.com/repositories')).not.toBeNull();
    });
    it("Service request not to be Undefined", function(){
        expect(publicRespositoriesSpec.getPublicRepositories('http://github.com/repositories')).not.toBeUndefined();
    });

});
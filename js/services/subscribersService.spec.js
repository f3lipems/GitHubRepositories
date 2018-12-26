describe("Spec subscribers service", function(){

    let subscribersSpec;

    beforeEach(angular.mock.module("ADPChallenge"));
    beforeEach(inject(function(subscribers){
        subscribersSpec = subscribers;
    }));

    it("Sevice exist", function(){
        expect(subscribersSpec).toBeDefined();
    });
    it("Service request exist", function(){
        expect(subscribersSpec.getSubscribers('https://api.github.com/repos/mojombo/grit/subscribers')).toBeDefined
    });
    it("Service request is not Null", function(){
        expect(subscribersSpec.getSubscribers('https://api.github.com/repos/mojombo/grit/subscribers')).not.toBeNull();
    });
    it("Service request is not Undefined", function(){
        expect(subscribersSpec.getSubscribers('https://api.github.com/repos/mojombo/grit/subscribers')).not.toBeUndefined();
    });

});
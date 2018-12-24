describe("Spec subscribers service", function(){

    let subscriber;

    beforeEach(angular.mock.module("ADPChallenge"));
    beforeEach(inject(function(subscribers){
        subscriber = subscribers;
    }));

    it("Sevice exist", function(){
        expect(subscriber).toBeDefined();
    });
    it("Service request exist", function(){
        expect(subscriber.getSubscribers('https://api.github.com/repos/mojombo/grit/subscribers')).toBeDefined
    });
    it("Service request not to be Null", function(){
        expect(subscriber.getSubscribers('https://api.github.com/repos/mojombo/grit/subscribers')).not.toBeNull();
    });
    it("Service request not to be Undefined", function(){
        expect(subscriber.getSubscribers('https://api.github.com/repos/mojombo/grit/subscribers')).not.toBeUndefined();
    });

});
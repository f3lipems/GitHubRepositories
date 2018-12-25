describe("Spec header filter", function(){

    let nameHeaderSpec;

    beforeEach(angular.mock.module("ADPChallenge"));
    beforeEach(inject(function(_$filter_){
        nameHeaderSpec = _$filter_('nameHeader');
    }));

    it("Filter exist", function(){
        expect(nameHeaderSpec).toBeDefined();
    });
    it("Filter test result specifc", function(){
        expect(nameHeaderSpec('ADP_Challenge')).toEqual('Adp Challenge');
    });
});
describe("Spec header filter", function(){

    let ellipsisSpec;

    beforeEach(angular.mock.module("ADPChallenge"));
    beforeEach(inject(function(_$filter_){
        ellipsisSpec = _$filter_('ellipsis');
    }));

    it("Filter exist", function(){
        expect(ellipsisSpec).toBeDefined();
    });
    it("Filter test result specifc", function(){
        expect(ellipsisSpec('ADP Challenge',3)).toEqual('ADP...');
    });
});
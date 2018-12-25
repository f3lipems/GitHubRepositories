describe("Spec pagination filter", function(){

    let paginationSpec;

    beforeEach(angular.mock.module("ADPChallenge"));
    beforeEach(inject(function(_$filter_){
        paginationSpec = _$filter_('pagination');
    }));

    it("Filter exist", function(){
        expect(paginationSpec).toBeDefined();
    });
    it("Filter test result specifc", function(){
        expect(paginationSpec([1,2,3,4,5,6,7],[2,2])).toEqual([5,6,7]);
    });
});
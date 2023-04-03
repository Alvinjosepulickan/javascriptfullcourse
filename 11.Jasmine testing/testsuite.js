describe('Add Test cases:',function(){
    it('Test Case 1: Add',function(){
       expect(add(10,20)).toEqual(30);
    });
})
describe('isZero',function(){
    it('Test Case 2: isZero',function(){
       expect(isZero(0)).toEqual(true);
       expect(isZero(1)).toEqual(false);
    });
})
describe('divide',function(){
    it('Test Case 3: divide',function(){
       expect(divide(1,0)).toEqual("Cannot divide by zero");
       expect(isZero(10,2)).toEqual(false);
    });
})
describe('substract',function(){
    it('Test Case 3: substract',function(){
       expect(substract(2,1)).toEqual(1);
       expect(substract(2,2)).toEqual(0);
    });
})
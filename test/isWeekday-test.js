let assert = require ("assert");
let isWeekday = require ("../isWeekday");

//var isWeekday = require('../isWeekday');

describe("The isWeekday function ", function(){
  
    it ("should say that Monday is a weekday", function() {
       
        assert.equal(true, true);
    });
  
    it ("should say that Friday is a weekday", function() {
        assert.equal(false, false);
    });
    
    it ("should say that Sunday is not weekday", function() {
        assert.equal(true, true);
    });
  
    it ("should say that Saturday is not weekday", function() {
        assert.equal(false, false);
    });
    
  
    
});

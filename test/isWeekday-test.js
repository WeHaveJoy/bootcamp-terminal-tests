let assert = require ("assert");
let isWeekday = require ("../isWeekday");

//var isWeekday = require('../isWeekday');

describe("The isWeekday function ", function(){
  
    it ("should say that Monday is a weekday", function() {
        var weekDay = "Monday"
      
        assert.equal("week day!", isWeekday(weekDay));
    });
  
    it ("should say that Friday is a weekday", function() {
        var weekDay = "Friday"

        assert.equal("week day!", isWeekday(weekDay));
    });
    
    it ("should say that Sunday is not weekday", function() {
        var weekEnd = "is not a weekday"

        assert.equal(weekEnd, isWeekday("Saturday"));
    });
  
    it ("should say that Saturday is not weekday", function() {
        var weekEnd = "is not a weekday"

        assert.equal(weekEnd, isWeekday("Sunday"));
    });
    
  
    
});

let assert = require ("assert");
let transportFee = require ("../transportFee");

//var transportFee = require('../transportFee')


describe("The transportFee function ", function(){
  
    it ("should be able to test morning shift", function() {
        
      var shift="morning";
      assert.equal(transportFee(shift),"R20");
    }); 
    it ("should be able to test afternoon shift", function() {
        
      var shift="afternoon"  ;
      assert.equal(transportFee(shift),"R10");
    });
    it ("should be able to test night shift", function() {
       
      var shift="night"  ;
      assert.equal(transportFee(shift),"free");
    });
});


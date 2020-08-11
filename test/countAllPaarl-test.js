let assert = require ("assert");
let countAllPaarl = require ("../countAllPaarl");

//var countAllPaarl = require('../countAllFromPaarlt');

describe("The countAllPaarl function ", function() {
 
    
    it("should return 0 if its not from Paarl", function() {
      
      assert.equal(0, countAllPaarl("CA 123-123"));
    });
    
    it("should return 2 registration numbers from Paarl ", function() {
      var EXPECTED_COUNT = 2;
     
      
      assert.equal(EXPECTED_COUNT, countAllPaarl("CL 123-123, CL 123-123"));
    });
    
    it("should return 5 registration numbers from Paarl", function() {
      var EXPECTED_COUNT = 5;
      
      
      assert.equal(EXPECTED_COUNT, countAllPaarl("CL 123-123, CL 123-123, CL 123-123, CL 123-123, CL 123-123"));
    });
    
    it("should return 6 registration numbers from Paarl ", function() {
      var EXPECTED_COUNT = 6;
      
   
      assert.equal(EXPECTED_COUNT, countAllPaarl("CL 123-123, CL 123-123, CL 123-123, CL 123-123, CL 123-123, CL 123-123"));
    });
    
  });
  
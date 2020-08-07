let assert = require ("assert");
let countAllPaarl = require ("../countAllPaarl");

//var countAllPaarl = require('../countAllFromPaarlt');

describe("The countAllPaarl function ", function() {
 
    
    it("should return 0", function() {
      
      assert.equal(0, countAllPaarl("CA 123-123"));
    });
    
    it("should return 2 ", function() {
      var EXPECTED_COUNT = 2;
     
      
      assert.equal(EXPECTED_COUNT, countAllPaarl("CL 123-123, CL 123-123"));
    });
    
    it("should return 5 ", function() {
      var EXPECTED_COUNT = 5;
      
      
      assert.equal(EXPECTED_COUNT, countAllPaarl("CL 123-123, CL 123-123, CL 123-123, CL 123-123, CL 123-123"));
    });
    
    it("should return 6 ", function() {
      var EXPECTED_COUNT = 6;
      
   
      assert.equal(EXPECTED_COUNT, countAllPaarl("CL 123-123, CL 123-123, CL 123-123, CL 123-123, CL 123-123, CL 123-123"));
    });
    
  });
  
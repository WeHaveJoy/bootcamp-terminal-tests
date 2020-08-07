let assert = require ("assert");
let countAllFromTown = require ("../countAllFromTown");

//var countAllFromTown = require('../countAllFromTownt');

describe("The countAllFromTown function ", function() {
 
    
    it("should return 1", function() {
      var EXPECTED_COUNT = 1;
      
      assert.equal(EXPECTED_COUNT, countAllFromTown("CA 123-123"));
    });
    
    it("should return 2 ", function() {
      var EXPECTED_COUNT = 2;
      
      
      assert.equal(EXPECTED_COUNT, countAllFromTown("CA 123-123, CA 123-123"));
    });
    
    it("should return 3 ", function() {
      var EXPECTED_COUNT = 3;
      
      
      assert.equal(EXPECTED_COUNT, countAllFromTown("CA 123-123, CA 123-123, CA 123-123"));
    });
    
    it("should return 4 ", function() {
      var EXPECTED_COUNT = 4;
      
      assert.equal(EXPECTED_COUNT, countAllFromTown("CA 123-123, CA 123-123, CA 123-123, CA 123-123"));
    });
    
  });
  
  
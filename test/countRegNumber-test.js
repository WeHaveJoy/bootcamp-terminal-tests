let assert = require ("assert");
let countRegNumber = require ("../countRegNumber");



describe("The countRegNumber function ", function() {
 
    
    it("should return 0", function() {
      
      assert.equal(0, countRegNumber("CL 123-123"));
    });
    
    it("should return 2 ", function() {
      var EXPECTED_COUNT = 1;
     
      
      assert.equal(EXPECTED_COUNT, countRegNumber("CY 123-123, CA 123-123"));
    });
    
    it("should return 5 ", function() {
      var EXPECTED_COUNT = 3;
      
      
      assert.equal(EXPECTED_COUNT, countRegNumber("CY 123-123, CA 123-123, CY 123-123, CA 123-123, CY 123-123, CA 123-123"));
    });
    
    it("should return 6 ", function() {
      var EXPECTED_COUNT = 3;
      
   
      assert.equal(EXPECTED_COUNT, countRegNumber("CY 123-123, CA 123-123, CY 123-123, CA 123-123, CY 123-123, CA 123-123"));
    });
    
  });
  
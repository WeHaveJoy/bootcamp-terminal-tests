let assert = require ("assert");
let fromWhere = require ("../fromWhere");

//var fromWhere = require('../fromWhere')
describe("The fromWhere function ", function() {
  
    
    it("should return Bellville ", function() {
      assert.equal("Bellville", fromWhere("CY 123-223"));
    });
    
    it("should return Paarl ", function() {
      assert.equal("Paarl", fromWhere("CJ 123-223"));
    });
    
it("should return Cape Town ", function() {
  assert.equal("Cape Town", fromWhere("CA 123-223"));
});
    
it("should return false ", function() {
  assert.equal("Some other place!", fromWhere("CL 123-223"));

});
  });
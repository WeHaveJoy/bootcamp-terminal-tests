let assert = require ("assert");
let totalPhoneBill = require ("../totalPhoneBill");

//var totalPhoneBill = require('../totalPhoneBill')

describe("The phone bill factory function", function () {
    it("should be able to set call cost", function () {

        console.log(totalPhoneBill("Call,call,call"));
        assert.equal("R8.25", totalPhoneBill('call,call,call'));
    })

        it("should be able to set sms cost", function () {
            
            console.log(totalPhoneBill("sms,sms,sms,sms"));
            assert.equal("R2.60", totalPhoneBill('sms,sms,sms,sms'));
        })
});
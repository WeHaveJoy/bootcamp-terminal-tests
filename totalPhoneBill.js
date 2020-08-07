module.exports = function totalPhoneBill(cs){
    var amount = cs.split(',')
   var total = 0;
    for(var i=0; i<amount.length;i++){
      var bill = amount[i].trim();
       if(bill === "call"){
          total += 2.75;
          }
      if(bill === "sms"){
         total += 0.65
         }
    }
      return "R"+ total.toFixed(2);
  }
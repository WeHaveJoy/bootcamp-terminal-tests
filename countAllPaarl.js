module.exports = function countAllPaarl(regList){
    var counter = 0;
    const paarl = regList.split(",");
    for (var i=0;i<paarl.length;i++) {
        var regNumber = paarl[i].trim();
        if (regNumber.startsWith("CA")) {
          return 0;
        }
      
        if (regNumber.startsWith("CL")) {
          counter++;
        }
    }
    
    return counter;
  }
  
module.exports = function countAllFromTown(regList){
  var counter = 0;
  const regNumbers = regList.split(",");
  for (var i=0;i<regNumbers.length;i++) {
      var regNumber = regNumbers[i].trim();
      if (regNumber.startsWith("CY")) {
        return 0;
      }
    
      if (regNumber.startsWith("CA")) {
        counter++;
      }
  }
  
  return counter;
}

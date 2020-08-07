module.exports = function yearsAgo(numOfYears){
    var d = new Date();
  var n = d.getFullYear()- numOfYears;
    return n;
  }
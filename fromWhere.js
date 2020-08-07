module.exports = function fromWhere(regNum){
    if (regNum.startsWith('CY')){
    return 'Bellville';
    }
      if (regNum.startsWith('CJ')){
      return 'Paarl';
      }
      if (regNum.startsWith('CA')){
      return 'Cape Town';
      }
      else{
      return 'Some other place!';
      }
    }
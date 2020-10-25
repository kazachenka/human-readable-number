module.exports = function toReadable (number) {
  number += '';
  let units = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let dozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let hundreds = ['','one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'];
  let res = '';
  let ten = 0;
  if (number.length === 3){
    res += hundreds[+number[0]];
    if (+number[1] === 1 && +number[2] === 0){
      res += ' ten'
    }
    if (+number[1] == 1) {
      ten += 10;
    }
    else if (+number[1] == 0) {
      res;
    }
    else {
      res += ' ';
      res += dozens[+number[1]];
    }

    if (+number[2] == 0) {
      res;
    }
    else {
      res += ' ';
      res += units[+number[2] + ten];
    }
  }

  if (number.length === 2){
    if (+number[0] === 1){
      ten += 10;
    }
    else {
     res += dozens[+number[0]];
    }

    if (ten === 10){
      res += units[+number[1] + ten];
    }
    else if (+number[1] == 0){
      res;
    }
    else {
      res += ' ';
      res += units[+number[1]];
    }
  }

  if (number.length === 1){
    if (+number[0] === 0){
      res += 'zero';
    }
    else {
      res += units[+number[0]];
    }
    
  }

  return res;
}

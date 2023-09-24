function convertToRoman(num) {
  
  let romanNumeral = '';

  while(num > 0){
    if(num >= 1000){
      romanNumeral = romanNumeral.concat('M');
      num -= 1000;
    } else if(num >= 900){
      romanNumeral = romanNumeral.concat('CM');
      num -= 900;
    }else if(num >= 500){
      romanNumeral = romanNumeral.concat('D');
      num -= 500;
    }else if(num >= 400){
      romanNumeral = romanNumeral.concat('CD');
      num -= 400;
    }else if(num >= 100){
      romanNumeral = romanNumeral.concat('C');
      num -= 100;
    }else if(num >= 90){
      romanNumeral = romanNumeral.concat('XC');
      num -= 90;
    }else if(num >= 50){
      romanNumeral = romanNumeral.concat('L');
      num -= 50;
    }else if(num >= 40){
      romanNumeral = romanNumeral.concat('XL');
      num -= 40;
    }else if(num >= 10){
      romanNumeral = romanNumeral.concat('X');
      num -= 10;
    }else if(num >= 9){
      romanNumeral = romanNumeral.concat('IX');
      num -= 9;
    }else if(num >= 5){
      romanNumeral = romanNumeral.concat('V');
      num -= 5;
    }else if(num >= 4){s
      romanNumeral = romanNumeral.concat('IV');
      num -= 4;
    }else if(num >= 1){
      romanNumeral = romanNumeral.concat('I');
      num -= 1;
    }
  }
  return romanNumeral;
}
  
convertToRoman(36);
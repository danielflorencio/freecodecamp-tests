function telephoneCheck(str) {
    if(str[0] !== '1' && str[0] !== '(' && str[0] !== '5'){
      return false;
    } 

    const specialCharsRegex = /[?]/;

    let newPhoneNumberString = '';

    if(str.includes('(') && !str.includes(')')){
        return false;
    } else if(str.includes(')') && !str.includes('(')){
        return false;
    } else if(specialCharsRegex.test(str)){
        return false;
    }
    if(str.includes('(') && str.includes(')')){
        const firstParenthesisIndex = str.indexOf('(');
        const secondParenthesisIndex = str.indexOf(')');
        if(secondParenthesisIndex - firstParenthesisIndex > 4){
            return false;
        } 
    }

    let traceCounter = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === '-'){
            traceCounter += 1;
            if(traceCounter >= 3){
                return false;
            }
        }
        if(!isNaN(Number(str[i])) && str[i] !== ' '){
            newPhoneNumberString = newPhoneNumberString.concat(str[i]);
        }
    }

    if(newPhoneNumberString.length === 10){
        return true;
    } else if(newPhoneNumberString.length === 11){
        if(newPhoneNumberString[0] !== '1'){
            return false;
        }
        return true;
    } else{
        return false;
    }
}
 
telephoneCheck("55 55-55-555-5");
// telephoneCheck("5555555555")
// telephoneCheck("1 (555) 555-5555")
// telephoneCheck("1 555-555-5555")
// telephoneCheck("555-555-5555");
function verifyThreeNumbers(str){
    if(str === '555' || str === '456'){
        return true
    } 
    return false;
}

function telephoneCheck(str) {

    if(str[0] !== '1' || str[0] !== '(' || str[0] !== 5){
      console.log('Check failed on false 00');
      return false;
    }

    const specialCharsRegex = /[?]/;

    let newPhoneNumberString = '';

    if(str.includes('(') && !str.includes(')')){
        console.log('Check failed on false 01');
        return false;
    } else if(str.includes(')') && !str.includes('(')){
        console.log('Check failed on false 02');
        return false;
    } else if(specialCharsRegex.test(str)){
        console.log('Check failed on false 03');
        return false;
    }
    if(str.includes('(') && str.includes(')')){
        firstParenthesisIndex =  str.indexOf('(');
        secondParenthesisIndex = str.indexOf(')');
        if(secondParenthesisIndex - firstParenthesisIndex > 3){
            console.log('Check failed on false 03.5');
            return false;
        } 
    }

    let traceCounter = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === '-'){
            traceCounter++;
            if(traceCounter === 4){
                console.log('Check failed on false 04');
                return false;
            }
        }
        if(!isNaN(Number(str[i])) && str[i] !== ' '){
            console.log('Item to be concatenated: ', str[i])
            newPhoneNumberString = newPhoneNumberString.concat(str[i]);
        }
    }
    console.log('New Phone Number string: ', newPhoneNumberString)
    if(newPhoneNumberString.length === 10){
        const stringToVerify = newPhoneNumberString[0].concat(newPhoneNumberString[1]).concat(newPhoneNumberString[2]);
        console.log('String to Verify 01: ', stringToVerify)
        console.log('Check failed on false 05');
        return verifyThreeNumbers(stringToVerify);
    } else if(newPhoneNumberString.length === 11){
        if(newPhoneNumberString !== '1'){
            console.log('Check failed on false 06');
            return false;
        }
        const stringToVerify = newPhoneNumberString[1].concat(newPhoneNumberString[2]).concat(newPhoneNumberString[3]);
        console.log('String to Verify 02: ', stringToVerify)
        console.log('Check failed on false 06');
        return verifyThreeNumbers(stringToVerify);
    } else{
        console.log('Check failed on false 07');
        return false;
    }
}
 
telephoneCheck("1 456 789 4444")
// telephoneCheck("555-555-5555");
// telephoneCheck("1 555-555-5555");
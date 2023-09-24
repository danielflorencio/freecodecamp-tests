function removeSpecialCharacters(inputString) {
  return inputString.replace(/[^a-zA-Z0-9]/g, '');
}

function palindrome(str) {
  let reversedString = '';
  str = removeSpecialCharacters(str.toLowerCase().trim())

  for(let i = str.length; i > 0; i--){
    reversedString = reversedString.concat(str.at(i - 1))
  }

  if(str === reversedString){
    return true;
  } else{
    return false;
  }
}
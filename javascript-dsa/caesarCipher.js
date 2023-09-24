function cipherLetter(letter){
  
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specialCharsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/|=]/;
  const alphabetLetterIndex = alphabet.indexOf(letter);

  if(letter === ' '){
    return ' '
  } 
  if(specialCharsRegex.test(letter)){
    return letter;
  }
  
  const newIndex = (alphabetLetterIndex + 13) % alphabet.length 
  
  return alphabet[newIndex];
}

function rot13(str) {

  let cipheredString = '';
  for(let i = 0; i < str.length; i++){
    cipheredString = cipheredString.concat(cipherLetter(str[i]))
  }  
  console.log('Ciphered String: ', cipheredString);
  return cipheredString;
}

rot13("SERR PBQR PNZC");

// function cipherLetter(letter){
  
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   let cipheredLetter = '';
//   const specialCharsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/|=]/;
//   const alphabetLetterIndex = alphabet.indexOf(letter);

//   if(letter === ' '){
//     cipheredLetter = ' ';
//   } else if(specialCharsRegex.test(letter)){
//     cipheredLetter = letter;
//   } else {
//     if(alphabetLetterIndex){

//       // if(alphabetLetterIndex + 13 < alphabet.length){
//       //   cipheredLetter = alphabet[alphabetLetterIndex + 13];
//       // } else{
//       //   cipheredLetter = alphabet[alphabetLetterIndex - 13];
//       // }

//     const newIndex = (alphabetLetterIndex + 13) % alphabet.length 
//     cipheredLetter = alphabet[newIndex]

//     } else{
//       cipheredLetter = cipheredLetter;
//     }
//   }

//   return cipheredLetter;
// }

// function rot13(str) {

//   let cipheredString = '';
//   for(let i = 0; i < str.length; i++){
//     cipheredString = cipheredString.concat(cipherLetter(str[i]))
//   }  
//   console.log('Ciphered String: ', cipheredString);
//   return cipheredString;
// }

// rot13("SERR PBQR PNZC");
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")



// function cipherLetter(letter){
//   // console.log('Received letter: ', letter)
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   let cipheredLetter = '';
//   const specialCharsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/|=]/;
//   const alphabetLetterIndex = alphabet.indexOf(letter);

//   // if(letter === 'N'){
//     // console.log('AlphabetLetterIndex: ', alphabetLetterIndex);
//     // console.log('Letter: ', letter)
//   // }

//   console.log('AlphabetLetterIndex: ', alphabetLetterIndex);
//   if(letter === ' '){
//     cipheredLetter = ' ';
//   } else if(specialCharsRegex.test(letter)){
//     cipheredLetter = letter;
//   } else {
//     if(alphabetLetterIndex){
//       if(alphabetLetterIndex + 13 < alphabet.length){
//         cipheredLetter = alphabet[alphabetLetterIndex + 13];
//       } 
//       else if(alphabetLetterIndex === 13){
//         console.log('if alphabetIndex = 13 activated. ', alphabet[alphabetLetterIndex] )
//         cipheredLetter = alphabet[13]
//         console.log(' :::: ', alphabet[alphabetLetterIndex])
//       } 
//       else{
//         cipheredLetter = alphabet[alphabetLetterIndex - 13];
//       }
//     } else{
//       cipheredLetter = cipheredLetter;
//     }
//   }
//   if(letter === 'N'){
//     // console.log('Ciphered letter: ', cipheredLetter)
//   }
//   return cipheredLetter;
// }

// function rot13(str) {

//   let cipheredString = '';
//   for(let i = 0; i < str.length; i++){
//     cipheredString = cipheredString.concat(cipherLetter(str[i]))
//     console.log('Ciphered letter: ', cipherLetter(str[i]))
//     console.log('Ciphered string: ', cipheredString)
//   }  
//   // console.log('Ciphered String: ', cipheredString, ' - Length: ', cipheredString.length);

//   return cipheredString;
// }

// // rot13("SERR PBQR PNZC");
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")


// function cipherLetter(letter){
//   // console.log('Received letter: ', letter)
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   let cipheredLetter = '';
//   const specialCharsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/|=]/;
//   const alphabetLetterIndex = alphabet.indexOf(letter);

//   // if(letter === 'N'){
//     // console.log('AlphabetLetterIndex: ', alphabetLetterIndex);
//     // console.log('Letter: ', letter)
//   // }

//   if(letter === ' '){
//     cipheredLetter = ' ';
//   } else if(specialCharsRegex.test(letter)){
//     cipheredLetter = letter;
//   } else {
//     if(alphabetLetterIndex){
//       if(alphabetLetterIndex + 13 < alphabet.length){
//         cipheredLetter = alphabet[alphabetLetterIndex + 13];
//       } 
//       // else if(alphabetLetterIndex === 13){
//         // cipheredLetter = alphabet[alphabetLetterIndex + 13]
//         // console.log(' :::: ', alphabet[alphabetLetterIndex])
//       // } 
//       else{
//         cipheredLetter = alphabet[alphabetLetterIndex - 13];
//       }
//     } else{
//       cipheredLetter = cipheredLetter;
//     }
//   }
//   if(letter === 'N'){
//     // console.log('Ciphered letter: ', cipheredLetter)
//   }
//   return cipheredLetter;
// }

// function rot13(str) {

//   let cipheredString = '';
//   for(let i = 0; i < str.length; i++){
//     cipheredString = cipheredString.concat(cipherLetter(str[i]))
//     console.log('Ciphered letter: ', cipherLetter(str[i]))
//     console.log('Ciphered string: ', cipheredString)
//   }  
//   // console.log('Ciphered String: ', cipheredString, ' - Length: ', cipheredString.length);

//   return cipheredString;
// }

// // rot13("SERR PBQR PNZC");
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")



















// I'm running the test code and the ciphered result shows up exactly as it should be, but it cannot pass the last test, even though I can successfully translate

// GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.

// to

// THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

// Any tips on how to procede? Here is the code I'm running:

// function cipherLetter(letter){

// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// let cipheredLetter = '';
// const specialCharsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/|=]/;
// const alphabetLetterIndex = alphabet.indexOf(letter);
// if(letter === ' '){
// cipheredLetter = ' ';
// } else if(specialCharsRegex.test(letter)){
// cipheredLetter = letter;
// } else {
// if(alphabetLetterIndex){
// if(alphabetLetterIndex + 13 < alphabet.length){
// cipheredLetter = alphabet[alphabetLetterIndex + 13];
// } else{
// cipheredLetter = alphabet[alphabetLetterIndex - 13];
// }
// } else{
// cipheredLetter = cipheredLetter;
// }
// }
// return cipheredLetter;
// }

// function rot13(str) {
// let cipheredString = '';
// for(let i = 0; i < str.length; i++){
// cipheredString = cipheredString.concat(cipherLetter(str[i]))
// }  
// console.log('Ciphered String: ', cipheredString);
// return cipheredString;
// }
// rot13("SERR PBQR PNZC");
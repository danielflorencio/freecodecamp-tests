const amountPerUnit = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]

function getAmountPerUnit(amountPerUnit, totalAmount){
  
  let totalAmountPerUnit = 0;  
  
  while(totalAmountPerUnit !== totalAmount){
    amountPerUnit--;
    totalAmountPerUnit += amountPerUnit
  }

  return totalAmountPerUnit;
}

// function getTotalCash(notConvertedCash){
//   let totalCash;

//   for(let i = notConvertedCash.length; i > 0; i--){
//     while(notConvertedCash[i - 1][1] !== 0){
//       totalCash += amountPerUnit[i]
//       notConvertedCash[i][1] -= amountPerUnit[i]
//     }
//   }

//   return totalCash;
// }


// function changeConverter(price, cash, cashInDrawer, )


// purchase price: Price - Value of the product;
// accepted payment: Cash - Money delivered to the attendant;
// cash in drawer: Cid - Money in the drawer.

  // for(let i = change.length; i >= 0; i--){
  //   change[i - 1][1] = getTotalCash(cash, cid, [i -1][1], amountPerUnit[change.length - 1],)   
  // }
  
  // console.log(getTotalCash(cid))



function checkCashRegister(price, cash, cid) {
  // let change = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

  let change = [];
  let status;

  let changeToBeAchieved = cash - price;
  let currentTotalChange = 0;

  for(let i = cid.length; i > 0; i--){

    if(cid[i - 1][1] > changeToBeAchieved){
      console.log('Change to be achieved: ', changeToBeAchieved)
      console.log('cid ', cid[i - 1][1])
      let amountUsedAsChange = 0; 
      while(cid[i - 1][1] > amountPerUnit[i - 1][1]){

        // amountUsedAsChange += cid[i - 1][1] - amountPerUnit[i - 1][1]
        // change[i - 1][1] += amountUsedAsChange;
        // cid[i - 1][1] -= amountUsedAsChange;
        // currentTotalChange += amountUsedAsChange;
        // changeToBeAchieved -= amountUsedAsChange;
        amountUsedAsChange += amountPerUnit[i - 1][1];
        cid[i - 1] -= amountPerUnit[i - 1][1];
        currentTotalChange += amountPerUnit[i - 1][1];
        changeToBeAchieved -= amountPerUnit[i - 1][1];

        if(currentTotalChange === changeToBeAchieved){
          return {status: 'price achieved', change: change}
        }
      }

      if(amountUsedAsChange !== 0){
        change.push([amountPerUnit[i - 1][0], amountUsedAsChange])
      }

    }
 
  }
  console.log({status: 'OPEN', change: change})
  return {status: 'OPEN', change: change};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
const x = 1

const amountPerUnit = [["PENNY", 0.01], ["NICKEL", 0.05*x], ["DIME", 0.1*x], ["QUARTER", 0.25*x], ["ONE", 1*x], ["FIVE", 5*x], ["TEN", 10*x], ["TWENTY", 20*x], ["ONE HUNDRED", 100*x]]

function getAmountPerUnit(amountPerUnit, totalAmount){
  
  let totalAmountPerUnit = 0;  
  
  while(totalAmountPerUnit !== totalAmount){
    amountPerUnit--;
    totalAmountPerUnit += amountPerUnit
  }

  return totalAmountPerUnit;
}

function checkCashRegister(price, cash, cid) {

  let change = [];
  let status = 'INSUFFICIENT_FUNDS';

  const changeToBeAchieved = cash - price;
  let currentTotalChange = 0;
  let leftChangeToBeFilled = cash - price;

  // console.log('leftChangeToBeFilled', leftChangeToBeFilled)
  for(let i = cid.length; i > 0; i--){
    // console.log('cid[i - 1][1]', cid[i - 1][1])
    let loopAmountToBeAdded = 0;
    // while(cid[i - 1][1] <= leftChangeToBeFilled && cid[i - 1][1] > 0){
      
    while(cid[i - 1][1] > 0 && leftChangeToBeFilled >= amountPerUnit[i - 1][1]){
      console.log('While operation -------------- before changes ', i)
      console.log('LeftChangeToBeFilled: ', leftChangeToBeFilled)
      console.log('cid[i - 1][1]', cid[i - 1][1])
      console.log('While operation -------------- ', i)
      cid[i - 1][1] = cid[i - 1][1] - amountPerUnit[i - 1][1];
      currentTotalChange = currentTotalChange + amountPerUnit[i - 1][1];
      leftChangeToBeFilled = leftChangeToBeFilled - amountPerUnit[i - 1][1];
      loopAmountToBeAdded = loopAmountToBeAdded + amountPerUnit[i - 1][1];
      console.log('While operation -------------- after changes ', i)
      console.log('LeftChangeToBeFilled: ', leftChangeToBeFilled)
      console.log('cid[i - 1][1]', cid[i - 1][1])
      console.log('While operation -------------- ', i)
      if(leftChangeToBeFilled < 0.01 && leftChangeToBeFilled > 0.001){
        leftChangeToBeFilled = 0.01
      }
    }
    if(loopAmountToBeAdded !== 0){
      change.push([cid[i-1][0], loopAmountToBeAdded])
      console.log('Added a ', cid[i-1][0], ' on loop ', i, ' with value ', loopAmountToBeAdded)
    }
    if(leftChangeToBeFilled === 0){
      status = 'OPEN'
    }
   
  }
  // if(leftChangeToBeFilled === 0){
    // return {status: open}
  // }
  if(leftChangeToBeFilled > 0){
    change = []
  }
  // if(leftChangeToBeFilled === 0)
  console.log('CHANGE: ', change)
  return {status: status, change: change};
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])


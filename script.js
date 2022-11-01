



///////////////////////////////////////
// OPTION 1: IF STATEMENT

const calcTip = (bill) => {
  
  if(bill <= 300 && bill >= 50){
    return bill * 0.15;
  } else {
    return bill * 0.2
  }

}

///////////////////////////////////////
// OPTION 2: TERNARY OPERATOR

// const calcTip2= (bill) => {
//   return bill <= 300 && bill >= 50 
//   ? bill * 0.15 
//   : bill * 0.2;
// }
// console.log(calcTip2(430))

 
// //TEST DATA: Test for bill values 275, 40 and 430

const bills =[275, 40, 430]
const tips = [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + tips[0], bills[1]+ tips[1], bills[2]+tips[2]]

// TEST THE TOTAL VALUES
console.log(bills, tips, totals)

  





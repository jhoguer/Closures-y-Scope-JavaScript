var a = 'Hello';


function hello() {
  let b = 'Hello World';
  const c = 'Hello World!';
  if (true) {
    let d = 'Hello World!!!'
    debugger
  }
}

hello();

const moneyBox = () => {
  debugger
  var saveCoins = 0;
  const countCoins = (coins) => {
    debugger
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
  }

  return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

const fruits = () => { 
  var fruit = 'apple'; 
  console.log(fruit); 
}

fruits()

const fruits = () => { 
  if (true) { 
    var fruit1 = 'apple'; 
    const fruit2 = 'banana'; 
    let fruit3 = 'kiwi'; 
  } 

  console.log(fruit3)
}


// function that takes a whole number or integer as a param  then loops through that number from 1 to the number and checks if it is divisible by 2, 3, 5

function yugioh(num) {
  // our empty array to store our final result
  let arr = [];
  let two = "yu";
  let three = "gi";
  let five = "oh";
  // if our conditions below is true, we push the results to our array

  if (Number.isInteger(num)) {
    for (let i = 1; i <= num; i++) {
      if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        arr.push(`${two}-${three}-${five}`);
      } else if (i % 2 === 0 && i % 3 === 0) {
        arr.push(`${two}-${three}`);
      } else if (i % 2 === 0 && i % 5 === 0) {
        arr.push(`${two}-${five}`);
      } else if (i % 2 === 0) {
        arr.push(`${two}`);
      } else if (i % 3 === 0) {
        arr.push(`${three}`);
      } else if (i % 5 === 0) {
        arr.push(`${five}`);
      } else {
        arr.push(i);
      }
    }
    // then return our final results in our array 😁😎
    return arr;
  } else {
    return "Please, enter a whole number/integer";
  }
}

let myNum = yugioh(100);
console.log(myNum);

// This was a very fun exercise 😁

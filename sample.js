// program to find the factorial of a number
function factorial(x) {
  // if number is 0
  if (x == 0) {
    return 1;
  }

  // if number is positive
  else {
    const prevNum = x - 1;
    return x * factorial(prevNum);
  }
}

// take input from the user
const num = 5;

// calling factorial() if num is positive
if (num >= 0) {
  const result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
} else {
  console.log("Enter a positive number.");
}

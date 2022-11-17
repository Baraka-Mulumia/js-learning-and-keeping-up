// iteration
function sum(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

sum([0, 1, 2, 3, 4]); // 10

// * recursive
function recursiveSum(numbers) {
  if (numbers.length === 1) {
    //* base case - to end the recursion
    return numbers[0];
  } else {
    // * recursive case
    return numbers[0] + sum(numbers.slice(1));
  }
}

// iterative factorial
function iterativeFactorial(n) {
  let product = 1;

  while (n > 0) {
    product *= n;
    n--;
  }
  return product;
}

//* recursive factorial
function recursiveFactorial(n) {
  if (n === 0) return 1;
  return n * recursiveFactorial(n - 1);
}

// iterative Fibonacci
function iterativeFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let previous = 0,
    current = 1;

  for (let i = n; i > 1; i--) {
    let next = previous + current;
    [previous, current] = [current, next];
  }
  return current;
}

function recursiveFibonacci(n) {}

//* recursive nth Fibonacci
function recursiveFibonacci(n) {
  // * base cases
  if (n === 0) return 0;
  if (n === 1) return 1;
  //? tail call optimization
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}

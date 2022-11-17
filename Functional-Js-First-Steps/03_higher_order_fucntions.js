//filter map and reduce
// Concatenate two arrays into a new single array
function concat(array1, array2) {
  return array1.concat(array2);
}
// Return the number of items in an array
function length(array) {
  return array.length;
}

// Return the first item in an array
function head(array) {
  return array[0];
}

// Return the rest of an array after the first item
function tail(array) {
  return array.slice(1);
}

function filter(predicate, array) {
  if (length(array) === 0) return [];
  const firstItem = head(array);
  const filteredFirst = predicate(firstItem) ? [firstItem] : [];
  return concat(filteredFirst, filter(predicate, tail(array)));
}

function map(predicate, array) {
  if (length(array) === 0) return [];
  return concat([predicate(head(array))], map(predicate, tail(array)));
}

// function isPrime(n) {
//   if (n === 2) return true;
//   if (n < 2 || n % 2 === 0) return false;
//   for (let i = 3; i * i <= n; i += 2) if (n % i === 0) return false;
//   return true;
// }

function reduce(reducerFn, initialValue, array) {
  if (length(array) === 0) return initialValue;
  const newInitialValue = reducerFn(initialValue, head(array));
  return reduce(reducerFn, newInitialValue, tail(array));
}

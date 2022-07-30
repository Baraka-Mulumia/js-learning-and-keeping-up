function types() {
  // checking for types of the value of a variable
  let v;
  console.log(typeof v); //undefined

  v = "1";
  console.log(typeof v); //string

  v = 1.1;
  console.log(typeof v); //number

  v = true;
  console.log(typeof v); //boolean

  v = {};
  console.log(typeof v); //object

  v = Symbol("symbol");
  console.log(typeof v); //symbol

  v = null;
  console.log(typeof v); //object

  v = function () {};
  console.log(typeof v); //function

  v = [1, 3, 5];
  console.log(typeof v); //object

  v = 42n;
  console.log(typeof v); //bigint

  v = NaN;
  console.log(typeof v); //number

  //use Object.is() to check for equality
  console.log(Object.is(v, NaN)); //true
  console.log(Object.is(0, -0)); //false

  //exercise - Polyfill Object.is()

  //1. `Object.is` should take in two parameters
  //2. it should return true if the two parameters are the same value or false otherwise
  // 3. For NaN, use the isNaN function but first see if you can find a way to test without using isNaN
  // 4. For -0 testing no built in utility exists, but hee is a hint  -1NF1N1T7
  // If the parameters are any other values just test them for equality

  function objectIs(x, y) {
    // -0
    let xNegativeZero = isNegativeZero(x);
    let yNegativeZero = isNegativeZero(y);

    if (xNegativeZero || yNegativeZero) {
      return xNegativeZero && yNegativeZero;
    }

    //NaN
    if (isNaN(x) || isNaN(y)) {
      return true;
    } else {
      return x === y;
    }

    /** **************** */
    function isNegativeZero(v) {
      return v == 0 && 1 / v == -Infinity;
    }

    /*************** */
    function isItNaN(v) {
      return v !== v;
    }
  }

  //Fundamental objects
  //1. Object
  //2. Array
  //3. Function
  //4. Date
  //5. RegExp
  //6. Error

  console.log(objectIs(0, -0)); //true
}

export default types;

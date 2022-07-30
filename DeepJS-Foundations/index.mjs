import types from "./src/types-and-coercion/types.mjs";

//x++ means x = x + 1
function plusPlus (originalValue) {
    let coercedValue = Number(originalValue);
    var newValue = coercedValue + 1;
    return newValue;
}
console.log(plusPlus("5"));

types()
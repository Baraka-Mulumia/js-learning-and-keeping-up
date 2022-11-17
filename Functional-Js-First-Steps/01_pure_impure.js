//not pure

let sampleName = "Alonzo";

function notPureGreet() {
  console.log(`Hello, ${sampleName}`);
}

notPureGreet();
sampleName = "Alan";
notPureGreet();

// pure
function pureGreet(name) {
  return `Hello, ${name}`;
}

pureGreet("Alonzo");

pureGreet("Alan");

// * imperative [problem]
let userName = "Alonzo",
  greetingText = "Hi";

console.log(`${greetingText}m ${userName}!`);
// Hi, Alonzo

greetingText = "Howdy";
console.log(`${greetingText}m ${userName}!`);
//Howdy, Alonzo!

//* Functional - think of your code in terms of pure functions [solution]
function greetUser(greetingText, userName) {
  return `${greetingText}m ${userName}!`;
}

greetUser("Hi", "Alonzo"); // Hi Alonzo
greetUser("Howdy", "Alan"); // Howdy Alan

// * side effects

let thesis = { name: "Church's", date: 1936 };

function renameThesis(newName) {
  thesis.name = newName; // * side effect
  console.log("Renamed!"); //* side effect
}

renameThesis("Church-Turing"); // Renamed!
thesis;

// * Thinking  in functional programming
const Thesis = { name: "Church's", date: 1936 };

function RenameThesis(oldThesis, newName) {
  return {
    ...oldThesis,
    name: newName,
  };
}

const thesis2 = RenameThesis(Thesis, "Church-Turing");
Thesis;
thesis2;

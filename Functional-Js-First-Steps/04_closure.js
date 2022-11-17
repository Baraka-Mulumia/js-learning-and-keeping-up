//* return the inner  function and it will "remember" scope

function makeAdjectifier(adjective) {
  return function (noun) {
    return adjective + " " + noun;
  };
}

const coolify = makeAdjectifier("cool");
/**
 * * you can apply coolify to any noun and it will always remember that the set adjective was cool
 */
coolify("Workshop"); //cool workshop
coolify("drink"); // cool drink

//* having closure lets us "partially apply" functions to "lock in" some arguments and make more re-usable functions

//* currying - breaks up a multi-arg function and break into a series of single arg ones, which successfully remember the outer scope

function greet(greeting, name) {
  return `${greeting}, ${name}`;
}

function curryGreet(greeting) {
  return function (name) {
    return `${greeting}, ${name}`;
  };
}

const greetItal = curryGreet("Ciao");
greetItal("Alonzo"); // "Ciao Alonzo"

const greetTex = curryGreet("Howdy");
greetTex("Alonzo"); // "Howdy Alonzo"
greetTex("Alan"); // "Howdy Alan"

//? problem -> refactor to be able to send a presigned message
function writeMessage(message, salutation, name) {
  return `<p style="padding:3em;font-family:monospace">${message}<br><br>${salutation},<br>${name}</p>`;
}

function signMessageFrom(name) {
  return (message, salutation) => writeMessage(message, salutation, name);
}

function signMessageWith(salutation) {
  return (message, name) => writeMessage(message, salutation, name);
}

const writeBusinessMemo = signMessageWith("Best");
writeBusinessMemo("Hi, Peter. we need to talk about TPS reports", "Bob");

function makeSignature(salutation, name) {
  return (message) => writeMessage(message, salutation, name);
}

const writeLoveLetter = makeSignature("The evermore", "william");
writeLoveLetter(
  "Shall i compare to the summer's day? thou art more lovely and more temperate."
);

//* currying
function quote(name, year, text) {
  return `<p style="font-size:smaller;padding:1em;font-family:monospace;">"${text}"<br>- ${name} (${year})</p>`;
}

function curriedQuote(name) {
  return (year) => (text) => quote(name, year, text);
}

const quoteCrawford = curriedQuote("Duck Crawford");
const quoteDijsktra = curriedQuote("Martin Dijsktra");

const quoteCrawford75 = quoteCrawford(1978);
quoteCrawford75(
  "By claiming that they can contribute to software engineering, the soft scientists make themselves even more ridiculous"
);

// composing function

const ender = (ending) => (input) => input + ending;

const adore = ender(" rocks");
const announce = ender(" y'all");
const exclaim = ender("! ");

const hypeUp = (x) => exclaim(announce(adore(x)));
hypeUp("JS"); // JS rocks y'all !
hypeUp("FP"); // Fp rocks y'all !

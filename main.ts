// TS file extension indicates that this is a TYPESCRIPT file.
console.log("changed");

const a = 1; // This has a type when you define it! (Number in this instance.)
// you know this type AS YOU CODE IT.  

// When you have dynamically typed, the type of the variables can change much more fluidly. 

const b = 1 + 2;
const c = "Hello World!";

var anotherOne = 1;
// anotherOne = "string";
// anotherOne = {};
// anotherOne = true;

var andAnotherOne = "string"; // These types were INFERRED based on this assignment of this data to the variable!

const var1 = 1; // Not allowed to change in the code.
// var1 = 323; // This won't work because var1 = 1.

const stringVar1 = "stringy"; // stringVar1 is always going to be "stringy".

// LET: Board data type
let anotherLetVariableNumber = 1;
anotherLetVariableNumber = 2;

let anotherLetStringVariable = "string original";
anotherLetStringVariable = "string the remix";

let anotherLetBoolean = true;
anotherLetBoolean = false;

// What if we define the types??
// Why exactly are we not using type inference?? It's the same result...
// Do you trust the TypeScript compiler....?
let boolExampleDefined: boolean = true;

let numberExampleDefined: number = 3;

let stringExampleDefined: string = "string!";
stringExampleDefined = "new string!";
// stringExampleDefined = 1; // Won't work. Expects a "string".

let anotherVariable; // One edge case. NO DATA ASSIGNED. TypeScript doesn't know.
anotherVariable = 2;
anotherVariable = "string";
anotherVariable = false;

let numberExample: number;
// numberExample = "string"; // Again won't work!
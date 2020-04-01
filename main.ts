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

/*
* LET: Board data type
*/
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
numberExample = 4; // WORK!

/**
 * LOOPS
 */
for(let i = 0; i < 10; i++) { // let i is number type so 0 1 2 3 4 5 6 7 8 9.
    console.log(i);
}

let booleanExample: boolean;
booleanExample = true || (true && true);
console.log(booleanExample);


/**
 * Functions and data types!
 */
function addNumbers(a: number, b: number): number {
    return a + b;
    // return = true; // These won't work!
    // return = "string";
    // return = {};
}

console.log(addNumbers(4, 6));
// addNumbers("string", "string"); // Won't work. Only numbers!

/**
 * Strings
 */
var concatenateStrings = (stringA: string, stringB: string): string => {
    return stringA + stringB; // Concatenates Strings!
}
console.log(concatenateStrings("Hello ", "World!"));

/**
 * Let's say we want a method that will not return a value.
 */
var returnNothingFunction = (a: string): void => {
    console.log(a);
}

/**
 * Booleans
 */
const booleansAndOperatorFunction = (a: boolean, b: boolean): boolean => {
    return a && b;
}
console.log(booleansAndOperatorFunction(true, true));

/**
 * Let's say a method will NEVER return. It returns NEVER. 
 */
var neverReturnFunction = (): never => { // Infinite while loop! There are a few fringe cases where you'd maybe want to use this...
    while(true) {
        console.log("never returning!");
    }
}

/**
 * Any....
 * It's controversial.
 * Indicates potental design failure, or lack of knowledge of union types, etc. Usually...
 */
var functionWithAny = (a: any, b: any): any => {
    return 9000 + "Hello " + 9001 + "World!";
}
console.log(functionWithAny("Hello " + "World!", false)); // Look at what it returns when called....

/**
 * Type GAURDS and type CASTING.
 */
// Typeguards are mostly something that belongs in a museum at this point. For most cases. 
// Also who wants to check these manually? 
var functionWithTypeGuards = (a: any): void => {
    if (typeof a === "string") { // The typeguard is the "typeof a === "string""
        console.log("Input is a string data type!");
    } else if (typeof a === "number") { // The typeguard is the "typeof a === "number""
        console.log("Input is a number data type!");
    }
}
functionWithTypeGuards("Hello World!");
functionWithTypeGuards(8);
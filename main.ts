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
for (let i = 0; i < 10; i++) {
  // let i is number type so 0 1 2 3 4 5 6 7 8 9.
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
};
console.log(concatenateStrings("Hello ", "World!"));

/**
 * Let's say we want a method that will not return a value.
 */
var returnNothingFunction = (a: string): void => {
  console.log(a);
};

/**
 * Booleans
 */
const booleansAndOperatorFunction = (a: boolean, b: boolean): boolean => {
  return a && b;
};
console.log(booleansAndOperatorFunction(true, true));

/**
 * Let's say a method will NEVER return. It returns NEVER.
 */
var neverReturnFunction = (): never => {
  // Infinite while loop! There are a few fringe cases where you'd maybe want to use this...
  while (true) {
    console.log("never returning!");
  }
};

/**
 * Any....
 * It's controversial.
 * Indicates potental design failure, or lack of knowledge of union types, etc. Usually...
 */
var functionWithAny = (a: any, b: any): any => {
  return 9000 + "Hello " + 9001 + "World!";
};
console.log(functionWithAny("Hello " + "World!", false)); // Look at what it returns when called....

/**
 * Type GAURDS and type CASTING.
 */
// Typeguards are mostly something that belongs in a museum at this point. For most cases.
// Also who wants to check these manually?
var functionWithTypeGuards = (a: any): void => {
  if (typeof a === "string") {
    // The typeguard is the "typeof a === "string""
    console.log("Input is a string data type!");
  } else if (typeof a === "number") {
    // The typeguard is the "typeof a === "number""
    console.log("Input is a number data type!");
  }
};
functionWithTypeGuards("Hello World!");
functionWithTypeGuards(8);

// Type casting.
let stringVariable = "123";
const fn2 = (inputNumber: number) => {
  console.log(inputNumber);
};

// fn2(stringVariable); // Won't accept anothing but a number! Cast it!
fn2(Number(stringVariable));
// fn2(+stringVariable); // "+" also converts to a number!

const numberVariable = 432;
const fn3 = (inputString: string) => {
  console.log(inputString);
};

// fn3(numberVariable); // Won't accept anothing but a string! Cast it!
fn3(String(numberVariable));

/**
 * Union types.
 * Two or more types...
 */
const unionTypesFunction = (a: string | number) => {
  if (typeof a === "string") {
    console.log("You passed in a string!");
  } else if (typeof a === "number") {
    console.log("You passed in a number!");
  }
};

unionTypesFunction("a");
unionTypesFunction(2);
// unionTypesFunction(true); // It still does NOT take a boolean though!!!

/**
 * Literal types!
 * LITERALLY ONLY THOSE TYPES
 */
const varA = "Hello World!";
// varA = "String"; // Not working to work! Only goiong to be that initial value.

const literalTypesFunction = (a: "literally") => {
  console.log("This is a literal type! " + a);
};

literalTypesFunction("literally"); // This works!
// literalTypesFunction("string"); // This does not work!

const literallyReturningLeralsFunction = (): "literally" => {
  return "literally";
  // return "string"; // These don't work!
  // return "2"; // These dont't work!
};
/**
 * Unions and Literals in one go!
 * Very fine control over what you can use here!
 */
const unionTypeLiteral = (
  a: 2 | 3 | 4 | "string" | true
): 5 | "string" | false => {
  // This can be hard to read...
  return 5;
};
console.log(unionTypeLiteral(true)); // Notice what's being logged.

/**
 * Type Allias!
 */
type StringsAndNumbers = number | string;

function stringsAndNumbersFunctionExample(
  a: StringsAndNumbers,
  b: StringsAndNumbers
): StringsAndNumbers {
  // 3 here alone... in a toy example.
  return "a";
}
console.log(stringsAndNumbersFunctionExample(878787, "Hello World!"));

type AcceptedParametersTypes = 2 | 3 | 4 | "string" | true;
type AcceptedReturnValueTypes = 5 | "string" | false;

// Try and keep type definitions through type alias and methods seperate.
const unionTypeLiterals = (
  a: AcceptedParametersTypes
): AcceptedReturnValueTypes => {
  // A bit easier to read!
  return 5;
};
// This process is what we call "refactoring".

/**
 * Function types.
 * Functions are FIRST CLASS!
 * 1. They can be passed into other functions as parameters.
 * 2. They can be returned from functions!
 * Functions basically act similar to objects.
 */
const basicConsoleDotLogFunction = (): void =>
  console.log("Hello I am the basic function");
const basicConsoleDotLogFunction2 = (): void =>
  console.log("Hello I am the basic function #2");
const basicConsoleDotLogFunction3 = (): void =>
  console.log("Hello I am the basic function #3");
basicConsoleDotLogFunction();

const functionAcceptingAnotherFunctionInParams = (
  // Parameters into here! callback: can be called anything!
  callback: () => void // You are taking in a function here that take NO PARAMETERS "()" and returns VOID "void".
): void => {
  callback();
};

functionAcceptingAnotherFunctionInParams(basicConsoleDotLogFunction);
functionAcceptingAnotherFunctionInParams(basicConsoleDotLogFunction2);
functionAcceptingAnotherFunctionInParams(basicConsoleDotLogFunction3);

const functionReturningBasicFunction = (): ((a: string) => number) => {
  return (a: string): number => {
    console.log("This function was printed!");
    console.log(a);
    return 5;
  };
};
// Closures, review if I don't understand.
console.log(functionReturningBasicFunction()("Hello World Again!"));

const functionTakingOneFunctionAsAnArgumentAndReturningAnotherFunction = (
  aString: string,
  callback: (callBackParams: string) => string
): ((a: string) => string) => {
  const closureConst = callback(aString);

  return (callbackString: string) => {
    return closureConst + callbackString;
  };
};

console.log(
  functionTakingOneFunctionAsAnArgumentAndReturningAnotherFunction(
    "Hello ",
    (a: string): string => {
      return a;
    }
  )("World! =(")
);

/**
 * Any types! Again!
 */
function anyFunction(a: any, b: any): any {
  a = 2;
  a = {};
  a = "42";
  a = +a;
  b = 8;
  b = { objectProperty: "okThen" };
  let c = +a + " " + b.objectProperty;
  return c;
}
console.log(anyFunction("StringsStringsStrings", 9001));

console.log("changed");
var a = 1;
var b = 1 + 2;
var c = "Hello World!";
var anotherOne = 1;
var andAnotherOne = "string";
var var1 = 1;
var stringVar1 = "stringy";
var anotherLetVariableNumber = 1;
anotherLetVariableNumber = 2;
var anotherLetStringVariable = "string original";
anotherLetStringVariable = "string the remix";
var anotherLetBoolean = true;
anotherLetBoolean = false;
var boolExampleDefined = true;
var numberExampleDefined = 3;
var stringExampleDefined = "string!";
stringExampleDefined = "new string!";
var anotherVariable;
anotherVariable = 2;
anotherVariable = "string";
anotherVariable = false;
var numberExample;
numberExample = 4;
for (var i = 0; i < 10; i++) {
    console.log(i);
}
var booleanExample;
booleanExample = true || (true && true);
console.log(booleanExample);
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(4, 6));
var concatenateStrings = function (stringA, stringB) {
    return stringA + stringB;
};
console.log(concatenateStrings("Hello ", "World!"));
var returnNothingFunction = function (a) {
    console.log(a);
};
var booleansAndOperatorFunction = function (a, b) {
    return a && b;
};
console.log(booleansAndOperatorFunction(true, true));
var neverReturnFunction = function () {
    while (true) {
        console.log("never returning!");
    }
};
var functionWithAny = function (a, b) {
    return 9000 + "Hello " + 9001 + "World!";
};
console.log(functionWithAny("Hello " + "World!", false));
var functionWithTypeGuards = function (a) {
    if (typeof a === "string") {
        console.log("Input is a string data type!");
    }
    else if (typeof a === "number") {
        console.log("Input is a number data type!");
    }
};
functionWithTypeGuards("Hello World!");
functionWithTypeGuards(8);
//# sourceMappingURL=main.js.map
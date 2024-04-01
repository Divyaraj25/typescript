// primitive types : number, string, boolean, undefined
// reference types : object, array
// function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// primitive types
var num = 10;
var str = "hello";
var bool = true;
// let und: undefined = undefined;
// let nul: null = null;
// reference types
// arrays
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
var strArr = ["1", "2", "3"];
var strArr2 = ["1", "2", "3"];
// objects
var obj;
obj = {
    task: "hello",
    tasks: 10,
    completed: true,
};
obj = {
    completed: false,
    tasks: 11,
    task: "world",
};
// array of object
var objArr;
objArr = [
    {
        task: "hello",
        completed: true,
    },
    {
        task: "world",
        completed: false,
    },
];
// union types
var numOrStr = 10;
numOrStr = "hello";
// function types
function add(a, b) {
    return a + b;
}
// void type function doesnt return anything
function subtract(a, b) {
    console.log(a - b);
}
// generic type function
function genericTypeFn(input) {
    return input;
}
genericTypeFn(10);
genericTypeFn("divyaraj");
// second example of generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
var stringArray = insertAtBeginning(["a", "b", "c"], "d");
// class
// shorthand properties in constructor
var Person = /** @class */ (function () {
    // name: string;
    // age: number;
    // private courses: string[];
    function Person(name, age, courses) {
        this.name = name;
        this.age = age;
        this.courses = courses;
    }
    Person.prototype.greet = function () {
        console.log("Hi, I am ".concat(this.name));
    };
    return Person;
}());
var person = new Person("Divyaraj", 22, ["angular", "nodejs", "typescript"]);
person.greet();
// class using interface
var Student = /** @class */ (function () {
    // name: string;
    // age: number;
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.greet = function () {
        console.log("Hi, I am ".concat(this.name));
    };
    return Student;
}());

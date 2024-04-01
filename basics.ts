// primitive types : number, string, boolean, undefined
// reference types : object, array
// function types, parameters

// primitive types
let num: number = 10;
let str: string = "hello";
let bool: boolean = true;
// let und: undefined = undefined;
// let nul: null = null;

// reference types
// arrays
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
let strArr: string[] = ["1", "2", "3"];
let strArr2: Array<string> = ["1", "2", "3"];

// objects
let obj: {
    task: string;
    tasks: number;
    completed: boolean;
};

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
let objArr: {
    task: string;
    completed: boolean;
}[];

objArr = [
    {
        task: "hello",
        completed: true,
    },
    {
        task: "world",
        completed: false,
    },
]

// type inference
// typescript bydefault infer primitive types

// let numbers = [1,2,3,4]
// numbers = [7,5,6,7] // allowed
// numbers = ['divyaraj', 'raj'] // not allowed

// gives error, because string is not assignable to number
// let num2 = 10;
// num2 = 'divyaraj';

// type alias
type NumOrStr = number | string;

// union types
let numOrStr: NumOrStr = 10;
numOrStr = "hello";

// function types
function add(a: number, b: number): number {
    return a + b;
}

// void type function doesnt return anything
function subtract(a: number, b: number): void {
    console.log(a - b);
}

// generic type function
function genericTypeFn<T>(input: T): T {
    return input;
}

genericTypeFn(10)
genericTypeFn("divyaraj")

// second example of generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d")

// class
// shorthand properties in constructor
class Person {
    // name: string;
    // age: number;
    // private courses: string[];
    constructor(public name: string, public age: number, private courses: string[]) { }

    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}

const person = new Person("Divyaraj", 22, ["angular", "nodejs", "typescript"]);
person.greet();

// interface
// interface is a blueprint for a class and object, same as type alias but for class and object
interface PersonInterface {
    name: string;
    age: number;
    greet(): void;
}

// class using interface
class Student implements PersonInterface {
    // name: string;
    // age: number;
    constructor(public name: string, public age: number) { }
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}
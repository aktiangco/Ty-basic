// adds 2 numbers                                          
export function add (x: number, y: number): number{
    return x+y
}

// Example variables
const name: string = "John";
const age: number = 25;
const isStudent: boolean = true;

// Example function
export function greet(name: string): string {
  return "Hello, " + name;
}

//! Incorrect typings to intentionally introduce errors
// const incorrectName: number = "Jane"; // Error: Type 'string' is not assignable to type 'number'

// export function multiply(a: number, b: string): number {
//   return a * b; // Error: Operator '*' cannot be applied to types 'number' and 'string'
// }

//* Corrected code
const correctName: string = "Jane";

export function multiplyCorrected(a: number, b: number): number {
  return a * b;
}
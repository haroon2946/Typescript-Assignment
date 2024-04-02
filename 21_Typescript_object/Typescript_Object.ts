//  Write a program that creates Objects containing these items.

import { log } from "console";

// let person_Name: string = 'Haroon';

// const personName_Array :string[] = ['Person','car', 'cold drink'];


// Datatype of person object
interface person {
    age: Number;
    name: string;   
    nationality: string;
    student: Boolean
}

// person object
let person :person = {

    age : 26 ,
    name : 'Haroon' ,
    nationality : 'Pakistan' ,
    student : true
}

// print person
console.log(person);

// Datatype of car object
interface car {
    maker: string,
    color: string
    automatic: boolean
}

// car object
let car = {
    maker : 'toyota',
    color : 'black',
    automatic : true
}

// print car
console.log(car);
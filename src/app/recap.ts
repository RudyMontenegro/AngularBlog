import { NgIfContext } from "@angular/common";

const username: string | number = 'Nicolas';
const sum = (a: number, b: number) => {
    return a + b;
}

class Person {
    constructor (private age: number, public lasName : string){

    }
}
const nico = new Person(15, 'Molina');

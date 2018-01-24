//TypeScript

import "../src/css/style.css";

import {Person} from "./Person";

export class CustomerEs6 extends Person {
    private name: string;

    public constructor(id: number, name: string) {
        super(id);
        this.name = name;
    }

}

let myCustomer = new CustomerEs6(5, 'A');

myCustomer.getId();

let myMap = new Map<number, string>();

myMap.set(3, 'A');
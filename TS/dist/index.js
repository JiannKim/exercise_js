"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("Dominica", 20, "female");
/*
interface Human {
    name: string;
    age: number;
    gender: string;
};
const person = {
    name: "kaka",
    age: 223,
    gender: "dkdk"
};
*/
const sayHi = (person) => {
    return `Hello! ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map
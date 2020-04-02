// export
class Human {
    public name: string;
    age: number;
    gender: string;
    constructor(name: string, age: number, gender?: string) {
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
const sayHi = (person: Human): string => {
    return `Hello! ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
}
console.log(sayHi(lynn));

export {};
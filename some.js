class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log('My name is ' + this.name + ', and I am ' + this.age + ' years old.');
    }
}

const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);

const introduce = person1.introduce.bind(person2);



function introduce(prefix, suffix) {
    console.log(prefix + this.name + ', age ' + this.age + suffix);
}

const boundIntroduce = introduce.bind(person);
boundIntroduce('Hello, my name is ', '.');
introduce(); // Output: My name is Jane, and I am 25 years old.



const printMarina = (person) => {
    return () => console.log("Hello", person.name)
}

 const hey = printMarina({name:"Hey"})
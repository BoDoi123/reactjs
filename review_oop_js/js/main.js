const user = {
    // Property
    name: "Lan",
    age: 70,
    sex: "male",

    // Method
    hello() {
        console.log("Hello");
        console.log(this.age);

        return 1;
    },
};

console.log(user);

console.log(user.name);
console.log(user.age);

console.log(user.sex);

console.log(user.hello());

// Class
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log("Hello");
        console.log(this.age);

        return 1;
    }
}

const user1 = new Student("Nam", 60);

console.log(user1.name);
console.log(user1.age);
console.log(user1.hello());

const user2 = new Student("Trung", 70);

console.log(user2.name);
console.log(user2.age);
console.log(user2.hello());

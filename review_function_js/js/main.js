// 1. Khai báo hàm Function Declaration
console.log("1. Function Declaration:");
function hello() {
    console.log("Hello World");
}

hello();

function hello2(userName) {
    console.log(`Hello ${userName}`);
}

hello2("Lan");
hello2("Trang");
hello2("Nam");

function product(a = 1, b = 9) {
    return c * d;
}

let result = product(4, 5);
console.log(result);

console.log(product());

console.log(product(undefined, 8)); // Lấy giá trị a mặc định và b = 9

function hello3(userName = "No name") {
    console.log(`Hello ${userName}`);
}

hello3();

// 2. Khai báo hàm dùng Function Expression
console.log("2. Function Expression:");
let sum = function (a, b) {
    return a + b;
};

console.log(sum(5, 3));

let result1 = sum(4, 5);
console.log(result);

// 3. Khai báo hàm dùng Arrow Function
console.log("3. Arrow Function: ");

// 3.1 Với trường hợp tổng quát, cú pháp
let ten_hame = (parameters) => {
    // thân hàm
    // return something
};

let multiplyAndAddArrow = (a, b) => {
    let product = a * b;
    let sum = a + b;

    return sum + product;
};

let result2 = multiplyAndAddArrow(4, 5);
console.log(result2);

// 3.2 Khi thân hàm chỉ có 1 câu lệnh duy nhất
let multiply = (a, b) => a * b;

console.log(multiply(2, 3));

// 3.3 Khi trả về 1 đối tượng
// let person = (ten, tuoi) => {
//     return {
//         name: ten,
//         age: tuoi,
//     };
// };

let person = (ten, tuoi) => ({ name: ten, age: tuoi });

console.log(person("Lan", 70));

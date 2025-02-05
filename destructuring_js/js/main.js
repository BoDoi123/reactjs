// 1. Destructuring Arrays
const userName = ["Toan", "Ha", "Huy"];

// Truy xuat binh thuong
const user1 = userName[0];
const user2 = userName[1];
const user3 = userName[2];

console.log(user1, user2, user3);

// Su dung Destructuring
const [user4, user5, user6] = userName;

console.log(user4, user5, user6);

// 1.2. Có thể bỏ qua phần tử không cần thiết bằng cách để dấu phẩy.
const [, , user8] = userName;

console.log(user8);

// 1.3. Destructuring với giá trị mặc định
const [user9, user10, user11, user12 = "Default Name"] = userName;

console.log(user12);

// 1.4. Destructuring với rest parameter
const [user13, ...rest] = userName; // rest sẽ chứa các phần tử còn lại sau phần tử đầu tiên

console.log(user13);
console.log(rest);

// 2. Destructuring Objects
const user = {
    name: "Toan",
    age: 20,
};

// Truy xuat property binh thuong
const ten = user.name;
const tuoi = user.age;

console.log(ten, tuoi);

// Su dung Destructuring
// Lưu ý: Tên biến phải trùng với tên thuộc tính trong Object
const { name, age } = user;

console.log(name);
console.log(age);

// 2.2. Đổi tên biến khi destructuring Obj (Dùng alias - tên bí danh):
const { name: ten1, age: tuoi1 } = user;

console.log(ten1);
console.log(tuoi1);

// 2.3. Destructuring với giá trị mặc định
const { name: ten2, age: tuoi2, gioiTinh = "Chua khai bao" } = user;

console.log(ten2);
console.log(tuoi2);
console.log(gioiTinh);

// 2.4. Destructuring với rest parameter
const { name: ten3, ...rest1 } = user; // Lấy thuộc tính còn sót lại của obj user

console.log(ten3);
console.log(rest); // {age: 20};

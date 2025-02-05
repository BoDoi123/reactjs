// 1. Lấy 1 phần tử cần thiết.
// import { myVar } from "./named.js";

// console.log(myVar);

// 2. Hoặc lấy trên 1 phần từ cần thiết
// import { myVar, myFunction } from "./named.js";

// console.log(myVar);
// myFunction();

// 3. Hoặc lấy tất cả
import * as name from "./named.js";

console.log(name);

console.log(name.myVar);
name.myFunction();

console.log(name.df2); // undefined

import df2, { myVar, myFunction } from "./named.js";
console.log(df2);

// 4. Default Export
// import df from "./default.js";
// console.log(df);

import total from "./default.js";
console.log(total(4, 1));

// 5. Đổi tên khi import.

// 5.1 Default Import: đặt tên tùy ý.
import anyName from "./default.js";
console.log(anyName(8, 5));

// Named Import: đặt tên với keyword as.
import { myVar as newName } from "./named.js";
console.log(newName);

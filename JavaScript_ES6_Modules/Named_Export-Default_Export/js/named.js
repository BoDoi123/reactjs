// Cách 1: Khai báo hàm, biến. class rồi export
// const myVar = 10;

// function myFunction() {
//     console.log("Xin chao, day la ham");
// }

// export { myVar, myFunction };

// Cách 2: Export tại nơi.
export const myVar = 10;

export function myFunction() {
    console.log("Xin chao, day la ham");
}

// file có 1 export default
let df2 = "Day la bien default 2 trong named.js";

export default df2;

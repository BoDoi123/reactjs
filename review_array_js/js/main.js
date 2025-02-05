const traiCay = ["cam", "xoai", "nho", "tao", "cam"];

console.log(typeof traiCay);
console.log(traiCay);

// Truy cap cac phan tu cua mang
console.log(traiCay[0]);
console.log(traiCay[1]);
console.log(traiCay[2]);
console.log(traiCay[3]);

// 2. Mang long nhau
const mang = [1, "hello", true, null, undefined, [1, 2, 3]];

// Truy cap mang long nhau
console.log(mang[5][0]);
console.log(mang[5][1]);

// 3. Mot so phuong thuc thuong dung
// 3.1 push(): Them phan tu
traiCay.push("dua");

// 3.2 map(): map sẽ duyệt qua từng phần tử của mảng, tạo mảng mới từ mảng cũ
const so = [1, 2, 3, 4, 5];
console.log(so);

const so2 = so.map((item) => item * 2);
console.log(so2);

// Bien doi phan tu cua mang thanh doi tuong moi
const so3 = so.map((item) => ({ so: item }));

// 3.3 findIndex()
const kq = traiCay.findIndex((item) => {
    return item === "cam";
});

console.log(kq);

// Exercise
const result = traiCay.map((item) => {
    return (item += " !");
});
console.log(result);

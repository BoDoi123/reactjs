// 1. Spread operator with Array
let soThich = ["doc sach", "nghe nhac"];

// So thich muon them
const soThichMoi = ["Di du lich", "Xem phim"];

// Cap nhat danh sach so thich
soThich = [...soThich, "abc", ...soThichMoi];

console.log("Dang sach so thich moi sau khi them: ", soThich);

// 2. Spread operator with Object
// Thong tin nguoi dung ban dau
let user = {
    id: 1,
    name: "Nguyen Van A",
    email: "vana@gmail.com",
    role: "Member",
};

// Thong tin moi cap nhat
const updates = {
    address: "123 Duong ABC",
    role: "Admin",
};

// Cap nhat thong tin nguoi dung
user = { ...user, ...updates };

console.log(user);

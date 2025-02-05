// 3. Destructuring in Function
const donHang = {
    maDonHang: 101,
    tienTe: "VND",
    tongTien: 50000,
};

const donHang2 = {
    maDonHang: 105,
    tienTe: "VND",
    tongTien: 500000,
};

// a. Khong su dung Destructuring
function xuLyDonHang(donHang) {
    const maDonHang = donHang.maDonHang;
    const tienTe = donHang.tienTe;
    const tongTien = donHang.tongTien;

    console.log(`Ma don hang: ${maDonHang}`);
    console.log(`Tien te: ${tienTe}`);
    console.log(`Tong tien: ${tongTien}`);
}

// Goi ham
xuLyDonHang(donHang);
xuLyDonHang(donHang2);

// b. Su dung Destructuring
function xuLyDonHang2({ maDonHang, tienTe, tongTien }) {
    console.log(`Ma don hang: ${maDonHang}`);
    console.log(`Tien te: ${tienTe}`);
    console.log(`Tong tien: ${tongTien}`);
}

xuLyDonHang2(donHang);
xuLyDonHang2(donHang2);

// 3.2 Sử dụng Destructuring với mặc định
function xuLyDonHang2({ maDonHang = 0, tienTe = "VND", tongTien = 0 }) {
    console.log(`Ma don hang: ${maDonHang}`);
    console.log(`Tien te: ${tienTe}`);
    console.log(`Tong tien: ${tongTien}`);
}

// Goi ham voi du lieu thieu
xuLyDonHang2({ maDonHang: 102 });

// 3.3 Sử dụng Rest Parameter
function xuLyDonHang({ maDonHang, ...rest }) {
    console.log(maDonHang);
    console.log(rest);
}

xuLyDonHang({
    maDonHang: 103,
    tienTe: "USD",
    tongTien: 1000,
    khachHang: "Nguyen Van A",
});

function xuLyDonHang3({ maDonHang: ma, ...rest }) {
    console.log("Ma don hang: " + ma);
    console.log(rest);
}

xuLyDonHang3({
    maDonHang: 103,
    tienTe: "USD",
    tongTien: 1000,
    khachHang: "Nguyen Van A",
});

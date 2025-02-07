import "./App.css";
import demoPic from "../src/assets/img/demo.png";

const wellCome = [
	"Chào mừng bạn đến với thế giới React!",
	"Rất vui được chào đón bạn đến thế giới React",
	"Chúng ta sẽ được học các kiến thức thú vị về React",
];

function randomTitle() {
	let n = Math.floor(Math.random() * wellCome.length);

	return wellCome[n];
}

function Header() {
	let date = new Date().toLocaleDateString();
	let time = new Date().toLocaleTimeString();

	const title = randomTitle();

	return (
		<>
			<h1>{title}</h1>
			<p>
				Hôm nay là <strong>{date}</strong>. Thời gian hiện tại:{" "}
				<strong>{time}</strong>
			</p>
		</>
	);
}

function DynamicValue() {
	const name = "Nam";

	let isLogged = true;
	let person = {
		name: "Lan",
		age: 38,
	};

	return (
		<>
			{/* 1. Dùng để chèn **biểu thức** JS (expression) */}
			<h2>Chào {name}</h2>
			<p>Kết quả: {1 + 2 * 5}</p>

			{/* 2.  Không chèn **câu lệnh** (statement) */}
			{/* <p>if (true) {console.log("Đúng rồi);}</p> */}

			{/* 
                    3. Kết hợp với điều kiện (Toán tử Ternary)

                        - JSX không hỗ trợ trực tiếp if-else, nhưng có thể dùng toán tử Ternary bên trong.
             */}
			<p>{isLogged ? "Bạn đã đăng nhập" : "Hãy đăng nhập"}</p>

			{/* 4.Chèn thuộc tính của đối tượng */}
			<p>
				Tên: {person.name}, Tuổi: {person.age}
			</p>

			{/* 5. Chèn hình ảnh vào thẻ img */}
			<img src={demoPic} alt="" />
		</>
	);
}

function App() {
	return (
		<>
			<Header />

			<DynamicValue />
		</>
	);
}

export default App;

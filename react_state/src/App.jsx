import { useState } from "react";
import "./App.css";

function App() {
	const [user, setUser] = useState({ fullname: "", email: "" });

	const handleChange = (e) => {
		const { name, value } = e.target;

		setUser((prevUser) => {
			return {
				...prevUser,
				[name]: value,
			};
		});
	};

	return (
		<>
			<h2>Cập nhật thông tin cá nhân</h2>
			<label>
				Họ và Tên:
				<input
					type="text"
					name="fullname"
					value={user.fullname}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Email:
				<input
					type="email"
					name="email"
					value={user.email}
					onChange={handleChange}
				/>
			</label>
			<br />
			<h3>Thông tin đã nhập:</h3>
			<p>Họ và Tên {user.fullname}</p>
			<p>Email: {user.email}</p>
		</>
	);
}

export default App;

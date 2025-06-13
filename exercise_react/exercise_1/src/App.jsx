import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [greeting, setGreeting] = useState("Chào bạn!");
	let currentHour = new Date().getHours();
	currentHour = 18;

	function updateGreeting() {
		if (currentHour > 18) {
			setGreeting("Chào buổi tối!");
		} else if (currentHour > 12) {
			setGreeting("Chào buổi chiều!");
		} else {
			setGreeting("Chào buổi sáng");
		}
	}

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>{greeting}</h1>
			<div className="card">
				<button onClick={updateGreeting}>Cập nhật lời chào</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;

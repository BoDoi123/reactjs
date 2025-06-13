import { useState } from "react";

//bài tập 03 khoá học react js tại https://tuhoc.cc
export default function App() {
	const [isActive, setIsActive] = useState(false);

	function handleActive() {
		setIsActive(!isActive);
	}

	return (
		<div className="container">
			<p className={isActive ? "active" : undefined}>Click vào em!</p>
			<button onClick={handleActive}>Toggle btn</button>
		</div>
	);
}

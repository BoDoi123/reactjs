import PropTypes from "prop-types";

export default function TabButton({ children }) {
	function handleClick() {
		alert("Button da duoc clik");
	}

	return (
		<li>
			<button onClick={handleClick}>{children}</button>
		</li>
	);
}

TabButton.propTypes = {
	children: PropTypes.string,
};

// export default function TabButton({ label }) {
// 	return (
// 		<li>
// 			<button>{label}</button>
// 		</li>
// 	);
// }

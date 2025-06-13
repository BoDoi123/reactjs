import PropTypes from "prop-types";

export default function TabButton({ children, onSelect }) {
	// function handleClick() {
	// 	alert("Button da duoc clik");
	// }

	return (
		<li>
			<button onClick={onSelect}>{children}</button>
		</li>
	);
}

TabButton.propTypes = {
	children: PropTypes.string,
	onSelect: PropTypes.function,
};

// export default function TabButton({ label }) {
// 	return (
// 		<li>
// 			<button>{label}</button>
// 		</li>
// 	);
// }

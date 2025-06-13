import PropTypes from "prop-types";

export default function TabButton({ children, onSelect, isSelected }) {
	// function handleClick() {
	// 	alert("Button da duoc clik");
	// }

	return (
		<li>
			<button
				className={isSelected ? "active" : undefined}
				onClick={onSelect}
			>
				{children}
			</button>
		</li>
	);
}

TabButton.propTypes = {
	children: PropTypes.string,
	onSelect: PropTypes.function,
	isSelected: PropTypes.bool,
};

// export default function TabButton({ label }) {
// 	return (
// 		<li>
// 			<button>{label}</button>
// 		</li>
// 	);
// }

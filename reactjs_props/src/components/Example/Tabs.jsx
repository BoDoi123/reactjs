import PropTypes from "prop-types";

export default function Tabs({ buttons, children, ButtonsContainer = "menu" }) {
	return (
		<>
			<ButtonsContainer>{buttons}</ButtonsContainer>
			{children}
		</>
	);
}

Tabs.propTypes = {
	buttons: PropTypes.element,
	children: PropTypes.element,
	ButtonsContainer: PropTypes.string,
};

import PropTypes from "prop-types";

export default function Section({ title, id, children }) {
	return (
		<section id={id}>
			<h2>{title}</h2>
			{children}
		</section>
	);
}

Section.propTypes = {
	title: PropTypes.string,
	id: PropTypes.string,
	children: PropTypes.element,
};

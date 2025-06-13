import PropTypes from "prop-types";

export default function TabContent({ title, desc, code }) {
	return (
		<>
			<div id="tab-content">
				<h3>{title}</h3>
				<p>{desc}</p>
				<pre>
					<code>{code}</code>
				</pre>
			</div>
		</>
	);
}

TabContent.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
	code: PropTypes.string,
};

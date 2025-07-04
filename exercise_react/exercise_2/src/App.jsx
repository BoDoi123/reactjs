import { useState } from "react";

// Don't change the component name "App"
export default function App() {
	const [isAlertVisible, setIsAlertVisible] = useState(false);
	const [isActivated, setIsActivated] = useState(false);

	function activateHandler() {
		setIsAlertVisible(true);
	}

	function confirmHandler() {
		setIsAlertVisible(false);
		setIsActivated(true);
	}

	function cancelHandler() {
		setIsAlertVisible(false);
		setIsActivated(false);
	}

	console.log(isAlertVisible, isActivated);

	return (
		<>
			{!isAlertVisible && !isActivated && (
				<button className="action-btn" onClick={activateHandler}>
					Activate
				</button>
			)}

			{isAlertVisible && (
				<div className="alert-box">
					<h2>Warning!</h2>
					<p>Are you sure you want to activate this mode?</p>
					<button className="confirm-btn" onClick={confirmHandler}>
						Confirm
					</button>
					<button className="cancel-btn" onClick={cancelHandler}>
						Cancel
					</button>
				</div>
			)}

			{isActivated && (
				<h3 className="success-message">Mode Activated!</h3>
			)}
		</>
	);
}

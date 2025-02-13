import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import TabButton from "./components/TabButton.jsx";

import { myData } from "../data.js";

function App() {
	return (
		<>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Khái niệm chính trong React</h2>
					<ul>
						<MainContent {...myData[0]} />
						<MainContent {...myData[1]} />
						<MainContent {...myData[2]} />
						<MainContent {...myData[3]} />
					</ul>
				</section>

				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton>Components</TabButton>
						<TabButton>JSX</TabButton>
						<TabButton>Props</TabButton>
						<TabButton>State</TabButton>
						{/* <TabButton label="Components" /> */}
					</menu>
				</section>
			</main>
		</>
	);
}

export default App;

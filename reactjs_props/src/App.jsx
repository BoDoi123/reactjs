import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import TabButton from "./components/TabButton.jsx";
import TabContent from "./components/TabContent.jsx";
import Section from "./components/MainContent/Section.jsx";
import Tabs from "./components/MainContent/Tabs.jsx";
import { myData, EXAMPLES } from "../data.js";

function App() {
	const [selectedTopic, setSelectedTopic] = useState("");

	let tabContent = <p>Vui lòng click vào nút</p>;
	if (selectedTopic) {
		tabContent = <TabContent {...EXAMPLES[selectedTopic]} />;
	}

	function handleSelect(e) {
		setSelectedTopic(e.target.innerText);
	}

	return (
		<>
			<Header />
			<main>
				<Section id="core-concepts" title="Khái niệm chính trong React">
					<ul>
						{myData.map((data) => (
							<MainContent key={data.title} {...data} />
						))}
					</ul>
				</Section>

				<Section id="examples" title="Examples">
					<Tabs
						buttons={
							<>
								<TabButton
									onClick={handleSelect}
									isSelected={selectedTopic === "Components"}
								>
									Components
								</TabButton>
								<TabButton
									onClick={handleSelect}
									isSelected={selectedTopic === "JSX"}
								>
									JSX
								</TabButton>
								<TabButton
									onClick={handleSelect}
									isSelected={selectedTopic === "Props"}
								>
									Props
								</TabButton>
								<TabButton
									onClick={handleSelect}
									isSelected={selectedTopic === "State"}
								>
									State
								</TabButton>
							</>
						}
					>
						{tabContent}
					</Tabs>
				</Section>
			</main>
		</>
	);
}

export default App;

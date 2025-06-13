import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import TabButton from "./components/TabButton.jsx";
import TabContent from "./components/TabContent.jsx";
import Section from "./components/MainContent/Section.jsx";
import { myData, EXAMPLES } from "../data.js";

function App() {
	const [selectedTopic, setSelectedTopic] = useState("");

	// Cách 3:
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
					<menu>
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
						{/* <TabButton label="Components" /> */}
					</menu>

					{/* Cách 1: Dùng toán tử 3 ngôi */}
					{/* {selectedTopic ? (
						<TabContent {...EXAMPLES[selectedTopic]} />
					) : (
						<p>Vui lòng click vào nút</p>
					)} */}

					{/* Cách 2: Dùng toán tử && */}
					{/* {!selectedTopic && <p>Vui lòng click vào nút</p>}
					{selectedTopic && (
						<TabContent {...EXAMPLES[selectedTopic]} />
					)} */}

					{/* Cách 3: */}
					{tabContent}
				</Section>
			</main>
		</>
	);
}

export default App;

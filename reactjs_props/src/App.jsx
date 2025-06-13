import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import TabButton from "./components/TabButton.jsx";
import TabContent from "./components/TabContent.jsx";
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
				<section id="core-concepts">
					<h2>Khái niệm chính trong React</h2>
					<ul>
						{/* <MainContent {...myData[0]} />
						<MainContent {...myData[1]} />
						<MainContent {...myData[2]} />
						<MainContent {...myData[3]} /> */}
						{myData.map((data) => {
							return <MainContent key={data.title} {...data} />;
						})}
					</ul>
				</section>

				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton
							onSelect={handleSelect}
							isSelected={selectedTopic === "Components"}
						>
							Components
						</TabButton>
						<TabButton
							onSelect={handleSelect}
							isSelected={selectedTopic === "JSX"}
						>
							JSX
						</TabButton>
						<TabButton
							onSelect={handleSelect}
							isSelected={selectedTopic === "Props"}
						>
							Props
						</TabButton>
						<TabButton
							onSelect={handleSelect}
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
				</section>
			</main>
		</>
	);
}

export default App;

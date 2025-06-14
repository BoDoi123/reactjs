import Section from "../Section";
import Tabs from "./Tabs";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import { EXAMPLES } from "../../../data";
import { useState } from "react";

export default function Example() {
	const [selectedTopic, setSelectedTopic] = useState("");

	let tabContent = <p>Vui lòng click vào nút</p>;
	if (selectedTopic) {
		tabContent = <TabContent {...EXAMPLES[selectedTopic]} />;
	}

	function handleSelect(e) {
		setSelectedTopic(e.target.innerText);
	}

	return (
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
	);
}

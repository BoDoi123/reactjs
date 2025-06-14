import ContentItem from "./ContentItem";
import Section from "../Section";
import { myData } from "../../../data";

export default function MainContent() {
	return (
		<Section id="core-concepts" title="Khái niệm chính trong React">
			<ul>
				{myData.map((data) => (
					<ContentItem key={data.title} {...data} />
				))}
			</ul>
		</Section>
	);
}

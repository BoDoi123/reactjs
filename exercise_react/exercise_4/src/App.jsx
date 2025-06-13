import Book from "./Book";
import "./index.css";

const myBooks = ["sách hay", "lập trình cùng tuhoc.cc", "kỹ năng sống"];

function App() {
	return (
		<div className="container">
			<h1 className="title">Danh sách Sách yêu thích</h1>
			<ul className="book-list">
				{myBooks.map((book, index) => (
					<Book key={index} title={book} />
				))}
			</ul>
		</div>
	);
}

export default App;

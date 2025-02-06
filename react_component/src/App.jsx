import "./App.css";

function Header() {
	return (
		<>
			<h2>Chào mừng đến với thế giới React!</h2>

			<p>
				Hôm này là <strong>22/01/2024</strong>. Thời gian hiện tại{" "}
				<strong>19:00</strong>
			</p>
		</>
	);
}

function Exercise() {
	return (
		<>
			<h1>Danh sách công việc của tôi</h1>

			<ul>
				<li>Học bài React</li>
				<li>Hoàn thành bài tập lập trình</li>
				<li>Dọn dẹp bàn làm việc</li>
			</ul>

			<p>Chúc bạn hoàn thành công việc tốt nhất hôm nay!</p>
		</>
	);
}

function App() {
	return (
		<>
			<Exercise />
			{/* <h1>Đây là tiêu đề</h1>
			<p>Lorem ipsum dolor sit amet.</p> */}

			{/* <Header></Header> */}
			<Header />
		</>
	);
}

export default App;

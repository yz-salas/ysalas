import './App.css';
import Home from './components/Home';
import Navbar from './components/layout/Navbar';
import ClickSpark from './components/motion/ClickSpark';

function App() {
	return (
		<div className="text-white selection:bg-purple-600">
			<ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
				<Navbar />
				<Home />
			</ClickSpark>
		</div>
	);
}

export default App;

import './App.css';
import Home from './components/Home';
import ClickSpark from './components/motion/ClickSpark';

function App() {
	return (
		<div className="text-white selection:bg-zinc-950">
			<ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
				<Home />
			</ClickSpark>
		</div>
	);
}

export default App;

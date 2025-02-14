import './App.css';
import Home from './components/layout/home';
import Navbar from './components/layout/Navbar';
import { InitionAnimation, LeftToRightAnimation } from './components/motion/AppMotion';

function App() {
	return (
		<div>
			<LeftToRightAnimation>
				<Navbar />
			</LeftToRightAnimation>
			<InitionAnimation>
				<Home />
			</InitionAnimation>
		</div>
	);
}

export default App;

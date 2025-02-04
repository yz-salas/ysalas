import './App.css';
import Home from './components/layout/home';
import Navbar from './components/layout/Navbar';

function App() {
	return (
		<div className="flex">
			<Navbar />
			<Home />
		</div>
	);
}

export default App;

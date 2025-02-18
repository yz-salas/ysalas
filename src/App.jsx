import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import './App.css';
import Home from './components/layout/home';
import Navbar from './components/layout/Navbar';
import { InitionAnimation, LeftToRightAnimation } from './components/motion/AppMotion';

function App() {
	const [sections, setSections] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.5, // Aumentamos la duración para un scroll más suave
			easing: (t) => 1 - Math.pow(1 - t, 4), // Suavidad más fluida
			smooth: true,
			smoothTouch: true,
			wheelMultiplier: 1.5, // Un poco más sensible para mejorar la interacción
		});

		const raf = (time) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};
		requestAnimationFrame(raf);

		return () => lenis.destroy();
	}, []);

	useEffect(() => {
		// Obtiene todas las secciones de la página
		setSections([...document.querySelectorAll('section')]);
	}, []);

	// Eliminamos el manejador de scroll personalizado
	// Lenis ya maneja todo el scroll

	return (
		<div className="font-sans text-white bg-zinc-900">
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

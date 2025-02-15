import React, { useEffect, useState, useRef } from 'react';
import ButtomP from '../../ui-ux/buttoms/ButtomP';
import 'animate.css';

const Header = () => {
	const [isVisible, setIsVisible] = useState(false);
	const headerRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.intersectionRatio >= 0.8);
			},
			{
				threshold: [0.8], // Detecta cuando el 50% del header es visible
			}
		);

		if (headerRef.current) {
			observer.observe(headerRef.current);
		}

		return () => {
			if (headerRef.current) {
				observer.unobserve(headerRef.current);
			}
		};
	}, []);

	return (
		<header
			ref={headerRef}
			id="home"
			className={`lg:px-[10rem] lg:mb-[250px] font-lilita w-full space-y-6 h-[100vh] flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
				isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
			}`}
		>
			<div className="flex flex-col items-center text-center">
				<h1 className="text-green-400 text-[60px] md:text-[100px] lg:text-[120px] font-400">Zadiel Salas</h1>
				<hr className="w-[100px]" />
			</div>

			<div className="text-center md:text-start">
				<p className="text-white text-[5vw] sm:text-[30px] md:text-[40px] lg:text-[50px]">
					Front <span className="text-green-400"> - </span> End Developer
				</p>
			</div>

			<ButtomP title="Slite" url="#about" flecha="⭣" />
		</header>
	);
};

export default Header;

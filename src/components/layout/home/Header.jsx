import React, { useEffect, useState, useRef } from 'react';
import Aurora from '../../motion/Aurora';
import ButtomP from '../../ui-ux/buttoms/ButtomP';
import 'animate.css';

const Header = () => {
	const [isVisible, setIsVisible] = useState(false);
	const headerRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{
				threshold: 0.5, // Ajusta este valor si es necesario
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
			className={`relative lg:px-[10rem] font-saira font-600 w-full space-y-6 h-[100vh] flex flex-col justify-end transition-all duration-500 ease-in-out ${
				isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
			}`}
		>
			{/* Aurora como fondo */}
			<div className="absolute inset-0 w-full h-full -z-10">
				<Aurora colorStops={['#4B0082', '#800080', '#9370DB']} speed={0.5} />
			</div>

			{/* Contenido del Header */}
			<div className="w-[95%] space-y-5 mb-20 relative z-10">
				<div className="flex flex-col mb-24 items-center md:items-start md:ml-[80px] lg:ml-[0px]">
					<div
						className={`transition-all duration-500 flex gap-[20px] justify-center items-center ${
							isVisible ? 'opacity-100 translate-x-0 animate__animated animate__fadeInLeft' : 'opacity-0 translate-x-[-50px]'
						}`}
					>
						<div>
							<p className="text-[60px] md:text-[100px] lg:text-[130px] outline-text-teal-300-2">HEY, I'M</p>
						</div>
						<h1 className="text-[60px] md:text-[100px] lg:text-[130px] text-purple-600">
							<span className="">Zadiel</span>
							<span className=""> Salas.</span>
						</h1>
					</div>
					<div
						className={`transition-all duration-500 ${
							isVisible ? 'opacity-100 translate-x-0 animate__animated animate__fadeInLeft' : 'opacity-0 translate-x-[-50px]'
						}`}
					>
						<ButtomP title="A Little Of Me" url="#about" color="teal-600" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

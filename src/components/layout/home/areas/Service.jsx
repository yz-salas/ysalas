import React, { useEffect, useState, useRef } from 'react';
import ButtomP from '../../../ui-ux/buttoms/ButtomP';
import Cart1 from '../../../ui-ux/carts/Cart1';

const Service = () => {
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const [isVisibleLeft, setIsVisibleLeft] = useState(false);
	const [isVisibleRight, setIsVisibleRight] = useState(false);

	useEffect(() => {
		const observerOptions = {
			root: null,
			threshold: 0.3, // Se activa cuando el 30% del elemento es visible
		};

		const observerLeft = new IntersectionObserver(([entry]) => {
			setIsVisibleLeft(entry.isIntersecting);
		}, observerOptions);

		const observerRight = new IntersectionObserver(([entry]) => {
			setIsVisibleRight(entry.isIntersecting);
		}, observerOptions);

		if (leftRef.current) observerLeft.observe(leftRef.current);
		if (rightRef.current) observerRight.observe(rightRef.current);

		return () => {
			if (leftRef.current) observerLeft.unobserve(leftRef.current);
			if (rightRef.current) observerRight.unobserve(rightRef.current);
		};
	}, []);

	return (
		<section id="service" className="w-full flex flex-row lg:flex-col min-h-screen font-lilita">
			{/* Contenedor principal */}
			<div className="flex flex-col lg:flex-row">
				{/* Contenedor izquierdo */}
				<div
					ref={leftRef}
					className={`w-full lg:w-[40%] flex flex-col items-start py-16 md:pl-10 transition-all duration-700 ease-in-out ${
						isVisibleLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
					}`}
				>
					<h1 className="text-[50px] lg:text-[70px] sticky top-36 text-green-400">
						Service
						<hr className="w-[100px]" />
					</h1>
				</div>

				{/* Contenedor derecho */}
				<div
					ref={rightRef}
					className={`w-full lg:w-[60%] md:px-10 lg:py-28 flex flex-col gap-10 text-white transition-all duration-700 ease-in-out ${
						isVisibleRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
					}`}
				>
					<div>
						<p className="text-green-400 text-[20px]">2 / 5</p>
					</div>

					<hr className="w-[100px]" />

					<div className="text-lg">
						Como desarrollador web frontend con experiencia, me especializo en la creación de interfaces modernas, rápidas y funcionales.
					</div>

					<hr className="w-[100px]" />

					<div className="flex gap-28">
						<ButtomP title="I want to hire you!" url="#more" />
					</div>

					<div className="w-full py-28 flex flex-col space-y-10">
						<Cart1
							title="Front - End Developer"
							des="With around three years of preparation in front-end development.
              My approach is based on simplicity and elegance, prioritizing minimalist design to deliver intuitive and engaging user experiences."
						/>
						<hr className="w-[100px]" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Service;

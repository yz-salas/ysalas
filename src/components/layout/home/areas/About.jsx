import React, { useEffect, useState, useRef } from 'react';
import ButtomP from '../../../ui-ux/buttoms/ButtomP';

const About = () => {
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
		<section id="about" className="w-full flex flex-col lg:flex-row min-h-screen font-lilita">
			{/* Contenedor izquierdo */}
			<div
				ref={leftRef}
				className={`w-full lg:w-[40%] flex flex-col items-start py-16 md:pl-10 transition-all duration-700 ease-in-out ${
					isVisibleLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
				}`}
			>
				<h1 className="text-[50px] lg:text-[70px] sticky top-36 text-green-400">
					About Us
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
					<p className="text-green-400 text-[20px]">1 / 5</p>
				</div>
				<hr className="w-[100px]" />
				<div className="text-lg space-y-2">
					<p>My name is Zadiel Salas, I am 21 years old and I am a self-taught front-end web developer.</p>
					<p>
						I have always loved the world of digital, and since I was little, I have been very creative, applying myself to drawing, photography, and
						enjoying nature and travel.
					</p>
					<p>I found the right area to combine all these skills that I enjoy.</p>
					<p>My vision is to provide companies with modern web solutions that visually please users.</p>
					<p>I believe in combining clean design and solid functionality to create seamless experiences.</p>
					<p>I am passionate about turning ideas into reality, one line of code at a time.</p>
				</div>

				<hr className="w-[100px]" />

				<div className="text-lg space-y-2">
					<p>I have solid knowledge in various web development technologies, which allow us to create efficient and modern solutions.</p>
					<p>From using design languages like HTML and CSS to implementing advanced frameworks like React.</p>
					<p>js and Tailwind CSS, I'm ready to take on any development challenge.</p>
				</div>

				<div className="flex gap-28 text-zinc-700">
					<div className="w-full md:w-[40%] flex flex-col gap-20">
						<ButtomP title="Contact Me" flecha="⭢" url="#contact" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

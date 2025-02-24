import React, { useEffect, useState, useRef } from 'react';
import ButtomP from '../../../ui-ux/buttoms/ButtomP';

const About = () => {
	const sectionRef = useRef(null);
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const [isVisibleLeft, setIsVisibleLeft] = useState(false);
	const [isVisibleRight, setIsVisibleRight] = useState(false);
	const [isVisibleBackground, setIsVisibleBackground] = useState(false);
	const [marginBottom, setMarginBottom] = useState(90);
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		const observerOptions = { root: null, threshold: 0.3 };

		const observerCallback = (entries, setState) => {
			entries.forEach((entry) => setState(entry.isIntersecting));
		};

		const observerLeft = new IntersectionObserver((entries) => observerCallback(entries, setIsVisibleLeft), observerOptions);
		const observerRight = new IntersectionObserver((entries) => observerCallback(entries, setIsVisibleRight), observerOptions);
		const observerBackground = new IntersectionObserver((entries) => observerCallback(entries, setIsVisibleBackground), observerOptions);

		if (leftRef.current) observerLeft.observe(leftRef.current);
		if (rightRef.current) observerRight.observe(rightRef.current);
		if (sectionRef.current) observerBackground.observe(sectionRef.current);

		return () => {
			if (leftRef.current) observerLeft.unobserve(leftRef.current);
			if (rightRef.current) observerRight.unobserve(rightRef.current);
			if (sectionRef.current) observerBackground.unobserve(sectionRef.current);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const newMargin = Math.max(30, 90 - scrollY * 0.2);
			setMarginBottom(newMargin);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		const handleAutoScroll = () => {
			if (!hasScrolled && window.scrollY > 50) {
				setHasScrolled(true);
				if (sectionRef.current) {
					window.scrollTo({
						top: sectionRef.current.offsetTop - window.innerHeight / 4,
						behavior: 'smooth',
					});
				}
			}
		};

		window.addEventListener('scroll', handleAutoScroll);
		return () => window.removeEventListener('scroll', handleAutoScroll);
	}, [hasScrolled]);

	return (
		<div ref={sectionRef} className="relative flex font-600 flex-col items-end justify-center w-full min-h-screen font-saira">
			{/* Fondo con texto "About Me" */}
			<div className={`absolute px-6 inset-0 flex z-0 transition-opacity duration-1000 ${isVisibleBackground ? 'opacity-50' : 'opacity-0'}`}>
				<h1 className="text-[100px] md:text-[150px] lg:text-[250px] outline-text-white-2 opacity-20 mt-5">About Me</h1>
			</div>

			<div className="relative z-10 w-full h-screen flex flex-col justify-end">
				<div
					ref={rightRef}
					className={`w-full flex flex-col lg:flex-row items-end justify-end gap-x-6 text-white transition-all duration-1000 ease-in-out transform ${
						isVisibleRight
							? 'opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0'
							: 'opacity-0 translate-x-10 translate-y-10 scale-90 rotate-5'
					}`}
				>
					<div className="flex flex-col px-8 justify-end items-end w-full">
						{/* Texto */}
						<div className="flex-[2] space-y-6 w-[60%] mb-20">
							<div className="text-[20px] md:text-[25px] lg:text-[20px] text-white space-y-3">
								<p>My name is Zadiel Salas, I am 21 years old and I am a self-taught front-end web developer.</p>
								<p>
									I have always loved the world of digital, and since I was little, I have been very creative, applying myself to drawing,
									photography, and enjoying nature and travel.
								</p>
								<p>I found the right area to combine all these skills that I enjoy.</p>
								<p>My vision is to provide companies with modern web solutions that visually please users.</p>
								<p>I believe in combining clean design and solid functionality to create seamless experiences.</p>
								<p>I am passionate about turning ideas into reality, one line of code at a time.</p>
							</div>
							{/* Botón */}
							<div className="flex-1 flex w-[355px] lg:justify-center items-center">
								<ButtomP title="What do you offer?" url="#service" color="purple-600" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

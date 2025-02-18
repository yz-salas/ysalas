import React, { useEffect, useState, useRef } from 'react';
import ButtomP from '../../../ui-ux/buttoms/ButtomP';
import SkillsSection from '../../../ui-ux/icons/Skills';

const Skills = () => {
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const [isVisibleLeft, setIsVisibleLeft] = useState(false);
	const [isVisibleRight, setIsVisibleRight] = useState(false);

	useEffect(() => {
		const observerOptions = {
			root: null,
			threshold: 0.5, // Se activa cuando el 70% del elemento es visible
		};

		const observerCallback = (entries, observer, setState) => {
			entries.forEach((entry) => setState(entry.isIntersecting));
		};

		const observerLeft = new IntersectionObserver((entries) => observerCallback(entries, observerLeft, setIsVisibleLeft), observerOptions);

		const observerRight = new IntersectionObserver((entries) => observerCallback(entries, observerRight, setIsVisibleRight), observerOptions);

		if (leftRef.current) observerLeft.observe(leftRef.current);
		if (rightRef.current) observerRight.observe(rightRef.current);

		return () => {
			if (leftRef.current) observerLeft.unobserve(leftRef.current);
			if (rightRef.current) observerRight.unobserve(rightRef.current);
		};
	}, []);

	return (
		<section id="skills" className="w-full flex min-h-screen font-serif flex-col">
			<div className="flex flex-col lg:flex-row">
				{/* Contenedor izquierdo */}
				<div
					ref={leftRef}
					className={`w-full lg:w-[40%] flex flex-col items-start py-16 md:pl-10 transition-all duration-1000 ease-in-out ${
						isVisibleLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
					}`}
				>
					<h1 className="outline-text-white-1 text-[50px] lg:text-[70px] sticky top-36 text-green-400">
						Skills
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
						<p className="text-green-400 text-[20px]">4 / 5</p>
					</div>

					<hr className="w-[100px]" />

					<div className="text-lg space-y-5">
						<p>My focus is on writing clean and optimized code, ensuring a smooth and engaging user experience.</p>
						<p>With mastery of Key technologies and a minimalist style, always looking for the best combination of functionality and design.</p>
						<p>And that is precisely why I master technologies that allow me to develop the qualities on your page that I previously mentioned.</p>
					</div>

					<hr className="w-[100px]" />

					<div className="flex gap-28">
						<ButtomP title="know more" url="#more" />
					</div>

					<div className="w-full py-28 flex flex-col space-y-10">
						<SkillsSection />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;

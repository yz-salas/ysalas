import React, { useRef } from 'react';

import Header from './layout/Header';
import Experience from './layout/Experience';
import Work from './layout/Work';
import About from './layout/About';

const Home = () => {
	const aboutRef = useRef(null);
	const experienceRef = useRef(null);
	const projectsRef = useRef(null);

	return (
		<div
			id="Home"
			className="lg:min-h-screen mx-auto min-h-screen max-w-screen-xl px-6 font-sans md:px-12 lg:py-0 w-full flex flex-col lg:flex-row justify-between"
		>
			<section
				id="home"
				className="lg:h-screen flex justify-center items-center lg:justify-start lg:items-start lg:py-[93px] lg:w-[47.5%] snap-start"
			>
				<Header sections={{ aboutRef, experienceRef, projectsRef }} />
			</section>

			<div className="w-[100%] lg:w-[51%] min-h-screen flex flex-col gap-[59px] pt-24 lg:gap-0">
				<section id="About" ref={aboutRef} className="w-full snap-start">
					<About />
				</section>

				<section id="experience" ref={experienceRef} className="w-full snap-start">
					<Experience />
				</section>

				<section id="projects" ref={projectsRef} className="w-full snap-start">
					<Work />
				</section>
			</div>
		</div>
	);
};

export default Home;

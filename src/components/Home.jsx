import React, { useRef } from 'react';
import Header from './layout/Header';
import Experience from './layout/Experience';
import Project from './layout/Project';
import About from './layout/About';

const Home = () => {
	const aboutRef = useRef(null);
	const experienceRef = useRef(null);
	const projectsRef = useRef(null);

	return (
		<div className="lg:min-h-screen w-full flex flex-col lg:flex-row justify-between">
			<section
				id="home"
				className="lg:h-screen flex justify-center items-center lg:justify-start lg:items-start lg:pl-[130px] lg:py-[80px] w-full lg:w-[45%] snap-start"
			>
				<Header sections={{ aboutRef, experienceRef, projectsRef}} />
			</section>

			<div className="w-[100%] lg:w-[55%] min-h-screen lg:pr-[130px] py-[20px] flex flex-col gap-[59px] lg:gap-0">
				<section id="About" ref={aboutRef} className="w-full snap-start">
					<About />
				</section>

				<section id="experience" ref={experienceRef} className="w-full snap-start">
					<Experience />
				</section>

				<section id="projects" ref={projectsRef} className="w-full snap-start">
					<Project />
				</section>
			</div>
		</div>
	);
};

export default Home;

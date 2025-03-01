import React, { useRef } from 'react';
import Header from './layout/Header';
import Service from './layout/Service';
import Project from './layout/Project';
import About from './layout/About';

const Home = () => {
	const serviceRef = useRef(null);
	const projectsRef = useRef(null);
	const educationRef = useRef(null);
	const aboutRef = useRef(null);

	return (
		<div className="lg:min-h-screen w-full flex flex-col lg:flex-row justify-between">
			<section
				id="home"
				className="lg:h-screen flex justify-center items-center lg:justify-start lg:items-start lg:pl-[130px] lg:py-[80px] w-full lg:w-[45%] snap-start"
			>
				<Header sections={{ aboutRef, serviceRef, projectsRef, educationRef }} />
			</section>

			<div className="w-[100%] lg:w-[55%] min-h-screen lg:pr-[130px] py-[20px]">
				<section id="About" ref={aboutRef} className="w-full snap-start">
					<About />
				</section>

				<section id="service" ref={serviceRef} className="w-full snap-start">
					<Service />
				</section>

				<section id="projects" ref={projectsRef} className="w-full snap-start">
					<Project />
				</section>
			</div>
		</div>
	);
};

export default Home;

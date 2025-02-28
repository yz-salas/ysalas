import React from 'react';
import Header from './layout/Header';
import Service from './layout/Service';
import Project from './layout/Project';
import Education from './layout/Education';

const Home = () => {
	return (
		<div className="min-h-screen w-full flex flex-col lg:flex-row justify-between">
			<section
				id="home"
				className="h-[70vh] lg:h-screen flex justify-center items-center lg:justify-start lg:items-start lg:pl-[150px] lg:py-[80px] w-full lg:w-[40%] snap-start"
			>
				<Header />
			</section>

			<div className="w-[100%] lg:w-[50%] min-h-screen lg:pr-28 py-[70px]">
				<section id="service" className="w-full snap-start">
					<Service />
				</section>

				<section id="projects" className="w-full snap-start">
					<Project />
				</section>

				<section id="education" className="w-full snap-start">
					<Education />
				</section>
			</div>
		</div>
	);
};

export default Home;

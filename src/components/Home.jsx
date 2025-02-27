import React from 'react';
import Header from './layout/Header';
import Service from './layout/Service';
import Project from './layout/Project';
import Education from './layout/Education';

const Home = () => {
	return (
		<div className="min-h-screen w-full flex justify-between">
			<section id="home" className="h-screen pl-[150px] py-[80px] w-[40%] snap-start">
				<Header />
			</section>

			<div className="w-[50%] min-h-screen pr-28 py-[70px]">
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

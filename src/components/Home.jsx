import React from 'react';
import About from './layout/home/areas/About';
import Header from './layout/home/header';
import Service from './layout/home/areas/Service';
import Projectintro from './layout/home/areas/Project';
import Project from './layout/home/areas/Projects';
import Footer from './layout/home/Footer';

const Home = () => {
	return (
		<div className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
			<section id="home" className="h-screen w-full snap-start">
				<Header />
			</section>
			<section id="about" className="container h-screen w-full snap-start">
				<About />
			</section>
			<section id="service" className="container h-screen w-full snap-start">
				<Service />
			</section>
			<section id="projects" className="container h-screen w-full snap-start">
				<Projectintro />
			</section>

			<section id="footer" className="container h-screen w-full snap-start">
				<Footer />
			</section>
		</div>
	);
};

export default Home;

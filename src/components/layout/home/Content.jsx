import React from 'react';
import ButtomP from '../../ui-ux/buttoms/ButtomP';
import '../../../App.css';
import SkillsSection from '../../ui-ux/icons/Skills';
import About from './areas/About';
import Service from './areas/Service';
import Skills from './areas/Skills';
import Project from './areas/Project';
import Footer from './Footer';
const Content = () => {
	return (
		<main className="lg:container px-5 flex">
			<div id="sidebar">
				<About />
				<Service />
				<Project />
				<Skills />
				<Footer />
			</div>
		</main>
	);
};

export default Content;

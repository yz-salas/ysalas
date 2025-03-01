import React, { useEffect, useState } from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import ButtomP from '../ui-ux/buttoms/ButtomP';

const Header = ({ sections }) => {
	const { aboutRef, serviceRef, projectsRef, educationRef } = sections;
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		const observerOptions = { threshold: 0.4 };

		const observerCallback = (entries) => {
			const visibleEntry = entries.find((entry) => entry.isIntersecting);
			if (visibleEntry) {
				setActiveSection(visibleEntry.target.id);
			}
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);

		[aboutRef, serviceRef, projectsRef, educationRef].forEach((ref) => {
			if (ref.current) observer.observe(ref.current);
		});

		return () => {
			[aboutRef, serviceRef, projectsRef, educationRef].forEach((ref) => {
				if (ref.current) observer.unobserve(ref.current);
			});
		};
	}, [aboutRef, serviceRef, projectsRef, educationRef]);

	return (
		<header className="lg:z-10 lg:fixed w-full lg:w-[40%] font-600 px-8 space-y-6 h-[60vh] lg:h-[100vh] flex flex-col transition-opacity duration-500 ease-in-out justify-center items-center lg:justify-start lg:items-start text-slate-200 font-ubuntu">
			<div className="space-y-5 z-10 flex flex-col justify-center lg:justify-start lg:items-start">
				<div className="flex flex-col md:items-start w-full lg:w-auto">
					<div className="transition-opacity duration-500 opacity-100">
						<div className="text-[50px] md:text-[70px] lg:text-[60px] ">Zadiel Salas</div>
					</div>
					<div className="transition-opacity duration-500 opacity-100">
						<div className="text-[20px] lg:text-[20px] font-500">Front End Developer</div>
					</div>
				</div>

				<div className="flex-[2] space-y-6 w-full lg:w-[60%] mb-20">
					<div className="text-[16px] lg:text-start md:text-[20px] lg:text-[15px] space-y-3">
						<p className="w-full text-slate-500">I create front-end websites, my design style is based on a clean and minimalist interface.</p>
					</div>
				</div>

				<div className="hidden lg:flex flex-col gap-5 py-10">
					<div className="flex-1 flex w-[355px]">
						<ButtomP title="ABOUT ME" url="#About" isActive={activeSection === 'About'} />
					</div>
					<div className="flex-1 flex w-[355px] items-center">
						<ButtomP title="SERVICE" url="#service" isActive={activeSection === 'service'} />
					</div>
					<div className="flex-1 flex w-[355px] items-center">
						<ButtomP title="PROJECTS" url="#projects" isActive={activeSection === 'projects'} />
					</div>
				</div>

				<div className="h-[100px] lg:h-[200px] items-center lg:justify-start flex gap-5">
					<a
						href="https://github.com/dashboard"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 text-white/40 hover:text-white transition-opacity duration-300 text-lg"
					>
						<FaGithub className="text-[30px] lg:text-2xl" />
					</a>
					{/*
						
					<div className="h-[20px] w-[1px] bg-white duration-300"></div>
						*/}
					<a
						href="https://mail.google.com/mail/u/0/#inbox?compose=new"
						className="flex items-center gap-3 text-white/40 hover:text-white transition-opacity duration-300 text-lg"
					>
						<FaEnvelope className="text-[30px] lg:text-2xl" />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;

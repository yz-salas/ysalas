import React, { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa';
import ButtomP from '../ui-ux/buttoms/ButtomP';

const Header = ({ sections }) => {
	const { aboutRef, projectsRef, experienceRef } = sections;
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

		[aboutRef, projectsRef, experienceRef].forEach((ref) => {
			if (ref.current) observer.observe(ref.current);
		});

		return () => {
			[aboutRef, projectsRef, experienceRef].forEach((ref) => {
				if (ref.current) observer.unobserve(ref.current);
			});
		};
	}, [aboutRef, projectsRef, experienceRef]);

	return (
		<header className="lg:z-10 lg:fixed font-600 lg:h-screen lg:px-5 lg:p-0 space-y-6 flex flex-col transition text-[20px]-opacity duration-500 ease-in-out text-slate-200 items-center lg:justify-between lg:items-start font-Outfit">
			<div className="space-y-[10px] z-10 flex flex-col lg:h-[45vh] lg:justify-between lg:items-start">
				<div className="flex flex-col md:items-start space-y-[5px] w-full lg:w-auto">
					<div className="transition text-[20px]-opacity duration-500 opacity-100">
						<div className="text-[50px] md:text-[90px] lg:text-[50px] tracking-tight font-700">Zadiel Salas</div>
					</div>

					<div className="transition text-[20px]-opacity duration-500 opacity-100">
						<div className="text-[20px] md:text-[30px] lg:text-[21px] font-400 tracking-tight">Front End Developer</div>
					</div>

					<div className="w-full lg:w-[70%] font-100">
						<div className="text-[16px] lg:text-start md:text-[25px] lg:text-[18px] tracking-tight">
							<p className="w-full text-slate-400">I create minimalist, interactive and scalable websites.</p>
						</div>
					</div>
				</div>

				<div className="hidden lg:flex flex-col gap-5">
					<div className="flex-1 flex w-[355px]">
						<ButtomP title="ABOUT" url="#home" isActive={activeSection === 'About'} />
					</div>
					<div className="flex-1 flex w-[355px] items-center">
						<ButtomP title="EXPERIENCE" url="#experience" isActive={activeSection === 'experience'} />
					</div>
					<div className="flex-1 flex w-[355px] items-center">
						<ButtomP title="WORKS" url="#projects" isActive={activeSection === 'projects'} />
					</div>
				</div>
			</div>
			<div className="lg:h-[30vh] w-full flex space-x-[10px]">
				<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="transition text-[23px] text-slate-400">
					<FaInstagram />
				</a>
				<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="transition text-[23px] text-slate-400">
					<FaLinkedin />
				</a>
				<a href="https://github.com" target="_blank" rel="noopener noreferrer" className=" transition text-[23px] text-slate-400">
					<FaGithub />
				</a>
				<a href="https://codepen.io" target="_blank" rel="noopener noreferrer" className="w-400 transition text-[23px] text-slate-400">
					<FaCodepen />
				</a>
			</div>
		</header>
	);
};

export default Header;

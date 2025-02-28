import React, { useEffect, useState, useRef } from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import ButtomP from '../ui-ux/buttoms/ButtomP';
import 'animate.css';

const Header = () => {
	const [activeSection, setActiveSection] = useState(null);
	const headerRef = useRef(null);
	const sections = useRef({});

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.5 }
		);

		const sectionIds = ['service', 'projects', 'education', 'footer'];
		sectionIds.forEach((id) => {
			const section = document.getElementById(id);
			if (section) {
				sections.current[id] = section;
				observer.observe(section);
			}
		});

		return () => {
			sectionIds.forEach((id) => {
				if (sections.current[id]) {
					observer.unobserve(sections.current[id]);
				}
			});
		};
	}, []);

	return (
		<header
			ref={headerRef}
			className={`lg:z-10 lg:fixed font-saira font-600 px-8 space-y-6  lg:h-[100vh]  flex flex-col transition-all duration-500 ease-in-out justify-center items-center lg:justify-start lg:items-start ${
				activeSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
			}`}
		>
			<div className="space-y-5 z-10  flex flex-col justify-center  lg:justify-start lg:items-start">
				<div className="flex flex-col md:items-start">
					<div
						className={`transition-all duration-500 flex flex-col ${
							activeSection ? 'opacity-100 translate-x-0 animate__animated animate__fadeInLeft' : 'opacity-0 translate-x-[-50px]'
						}`}
					>
						<div className="text-[70px] md:text-[110px] lg:text-[80px]">Zadiel Salas</div>
					</div>
				</div>

				<div className="flex-[2] space-y-6 w-full lg:w-[60%] mb-20">
					<div className="text-[20px] lg:text-start md:text-[30px] lg:text-[17px] text-white space-y-3">
						<p className='w-full'>My name is Zadiel Salas, I am 21 years old and I am a self-taught front-end web developer.</p>
						<p className='w-full'>I create front-end websites, my design style is based on a clean and minimalist interface.</p>
					</div>
				</div>

				<div className="hidden lg:flex flex-col gap-5 py-10">
					<div className="flex-1 flex w-[355px] items-center">
						<ButtomP title="Service" url="#service" color="white/15" number="01" isActive={activeSection === 'service'} />
					</div>
					<div className="flex-1 flex w-[355px] items-center">
						<ButtomP title="Projects" url="#projects" color="white" number="02" isActive={activeSection === 'projects'} />
					</div>
					<div className="flex-1 flex w-[355px] items-center">
						<ButtomP title="Education" url="#education" color="white" number="03" isActive={activeSection === 'education'} />
					</div>
				</div>

				<div className="h-[100px] w-full items-center  lg:justify-start flex gap-5">
					<a
						href="https://github.com/dashboard"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 text-white/40 hover:text-white transition-all ease-in-out duration-300 text-lg"
					>
						<FaGithub className="text-2xl" />
						<span>GitHub</span>
					</a>
					<div className={`h-[20px] w-[1px] bg-white duration-300 ease-in-out`}></div>
					<a
						href="https://mail.google.com/mail/u/0/#inbox?compose=new"
						className="flex items-center gap-3 text-white/40 hover:text-white transition-all ease-in-out duration-300 text-lg"
					>
						<FaEnvelope className="text-2xl" />
						<span>Email</span>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;

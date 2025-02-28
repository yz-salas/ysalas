import React, { useEffect, useState, useRef } from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import ButtomP from '../ui-ux/buttoms/ButtomP';

const Header = () => {
	const [isVisible, setIsVisible] = useState(false);
	const headerRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.5 }
		);

		if (headerRef.current) {
			observer.observe(headerRef.current);
		}

		return () => {
			if (headerRef.current) {
				observer.unobserve(headerRef.current);
			}
		};
	}, []);

	return (
		<header
			ref={headerRef}
			className={`lg:z-10 lg:fixed font-saira font-600 px-8 space-y-6 lg:h-[100vh] flex flex-col transition-opacity duration-500 ease-in-out justify-center items-center lg:justify-start lg:items-start ${
				isVisible ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<div className="space-y-5 z-10 flex flex-col justify-center lg:justify-start lg:items-start">
				<div className="flex flex-col md:items-start">
					<div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
						<div className="text-[70px] md:text-[110px] lg:text-[80px]">Zadiel Salas</div>
					</div>
				</div>

				<div className="flex-[2] space-y-6 w-full lg:w-[60%] mb-20">
					<div className="text-[20px] lg:text-start md:text-[30px] lg:text-[17px] text-white space-y-3">
						<p className="w-full">My name is Zadiel Salas, I am 21 years old and I am a self-taught front-end web developer.</p>
						<p className="w-full">I create front-end websites, my design style is based on a clean and minimalist interface.</p>
					</div>
				</div>

				<div className="hidden lg:flex flex-col gap-5 py-10">
					<div className="flex-1 flex w-[355px] items-center">
						<ButtomP title="Service" url="#service" color="white/15" number="01" isActive={isVisible} />
					</div>
					<div className="flex-1 flex w-[355px] items-center">
						<ButtomP title="Projects" url="#projects" color="white" number="02" isActive={isVisible} />
					</div>
					<div className="flex-1 flex w-[355px] items-center">
						<ButtomP title="Education" url="#education" color="white" number="03" isActive={isVisible} />
					</div>
				</div>

				<div className="h-[100px] w-full items-center lg:justify-start flex gap-5">
					<a
						href="https://github.com/dashboard"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 text-white/40 hover:text-white transition-opacity duration-300 text-lg"
					>
						<FaGithub className="text-2xl" />
						<span>GitHub</span>
					</a>
					<div className="h-[20px] w-[1px] bg-white duration-300"></div>
					<a
						href="https://mail.google.com/mail/u/0/#inbox?compose=new"
						className="flex items-center gap-3 text-white/40 hover:text-white transition-opacity duration-300 text-lg"
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

import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const projects = [
	{
		id: 1,
		title: 'AOS Corporation',
		subtitle:
			'My First Website Developed In Php, Tailwind.css, And Mysql, This Being My First Website I Was Able To Finish It After One Or Two Months',
		number: '01',
		url: 'https://aoscorporation.com/src/main.php',
		technologies: [<FaPhp className="text-indigo-500" />, <SiTailwindcss className="text-blue-400" />],
	},
	{
		id: 2,
		title: 'DelfinesPark',
		subtitle:
			'This is my second website developed in Php, Css, Tailwind, Mysql, at the time I created this app I already had some more experience and it is reflected in the website, its design and functionality speak for themselves.',
		number: '02',
		url: 'https://delfinespark.com/src/main.php',
		technologies: [<FaPhp className="text-indigo-500" />, <FaCss3Alt className="text-blue-500" />, <SiTailwindcss className="text-blue-400" />],
		mas: '+',
	},
	{
		id: 3,
		title: 'Your Images',
		subtitle:
			'This small website shows my ability to consume apis and display its data on the screen, it is developed in html, css, javasctipt, tailwind.css, and react.js shows images of an API when you click a button, they are added 1 by 1 and all images are deleted when you touch the secondary button',
		number: '03',
		url: 'https://github.com/yz-salas/App_image',
		technologies: [
			<FaHtml5 className="text-orange-500" />,
			<FaCss3Alt className="text-blue-500" />,
			<FaJs className="text-yellow-400" />,
			<FaReact className="text-cyan-400" />,
			<SiTailwindcss className="text-blue-400" />,
		],
	},
	{
		id: 5,
		title: 'Weather App',
		subtitle: 'Using a weather API, this website gives the exact weather in real time of cities in different countries.',
		number: '04',
		url: 'https://github.com/yz-salas/App_De_Clima',
		technologies: [<FaHtml5 className="text-orange-500" />, <FaJs className="text-yellow-400" />],
	},
	{
		id: 6,
		title: 'Rick And Morty',
		subtitle: 'By consuming an API, this website shows images of characters from the famous television show called Rick and Morty.',
		number: '05',
		url: 'https://github.com/yz-salas/app_personajes',
		technologies: [<FaJs className="text-yellow-400" />, <FaReact className="text-cyan-400" />],
	},
];

const Project = () => {
	const sectionRef = useRef(null);
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const [isVisibleLeft, setIsVisibleLeft] = useState(false);
	const [isVisibleRight, setIsVisibleRight] = useState(false);
	const [isVisibleBackground, setIsVisibleBackground] = useState(false);
	const [marginBottom, setMarginBottom] = useState(90);
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		// Configuración de Intersection Observer para la visibilidad
		const observerOptions = { root: null, threshold: 0.3 };
		const observerCallback = (entries, setState) => {
			entries.forEach((entry) => setState(entry.isIntersecting));
		};

		const observerLeft = new IntersectionObserver((entries) => observerCallback(entries, setIsVisibleLeft), observerOptions);
		const observerRight = new IntersectionObserver((entries) => observerCallback(entries, setIsVisibleRight), observerOptions);
		const observerBackground = new IntersectionObserver((entries) => observerCallback(entries, setIsVisibleBackground), observerOptions);

		if (leftRef.current) observerLeft.observe(leftRef.current);
		if (rightRef.current) observerRight.observe(rightRef.current);
		if (sectionRef.current) observerBackground.observe(sectionRef.current);

		return () => {
			if (leftRef.current) observerLeft.unobserve(leftRef.current);
			if (rightRef.current) observerRight.unobserve(rightRef.current);
			if (sectionRef.current) observerBackground.unobserve(sectionRef.current);
		};
	}, []);

	useEffect(() => {
		// Control del margen al hacer scroll
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const newMargin = Math.max(30, 90 - scrollY * 0.2);
			setMarginBottom(newMargin);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		// Scroll automático al inicio
		const handleAutoScroll = () => {
			if (!hasScrolled && window.scrollY > 50) {
				setHasScrolled(true);
				if (sectionRef.current) {
					window.scrollTo({
						top: sectionRef.current.offsetTop - window.innerHeight / 4,
						behavior: 'smooth',
					});
				}
			}
		};

		window.addEventListener('scroll', handleAutoScroll);
		return () => window.removeEventListener('scroll', handleAutoScroll);
	}, [hasScrolled]);

	return (
		<div ref={sectionRef} className="w-full font-100 flex h-screen flex-col justify-end relative">
			{/* Fondo con texto "Proyectos" */}

			<div className="flex justify-end mb-10 w-[100%]">
				{/* Contenedor izquierdo */}

				{/* Contenedor derecho */}
				<div
					ref={rightRef}
					className={`w-full lg:w-[100%] flex flex-col items-end justify-end gap-10 text-white transition-all duration-700 ease-in-out ${
						isVisibleRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
					}`}
				>
					{/* Sección de Proyectos */}
					<div id="more" className="flex flex-col items-end snap-y snap-mandatory overflow-y-auto h-[100%] w-[100%]">
						{/* Contenedor de Tarjetas */}
						<div className="flex flex-wrap gap-1 w-[100%] h-[47vh]">
							{projects.map((project) => (
								<Link
									key={project.id}
									to={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="p-5 z-50 text-white font-saira font-400 snap-start min-h-[300px] w-full md:w-[240px] flex flex-col transition duration-300 space-y-5 group bg-zinc-900/60 hover:bg-purple-600/15 hover:border-teal-600"
								>
									<h1 className="text-[25px] group-hover:text-teal-600 group-hover:underline group-hover:decoration-wavy transition duration-300 ">
										{project.title}
									</h1>
									<hr className="w-[100px] border-white transition-colors duration-300" />
									<p className="text-[15px]">{project.subtitle}</p>
									<div className="flex gap-2">
										{project.technologies.map((icon, index) => (
											<span key={index} className="text-[20px]">
												{icon}
											</span>
										))}
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;

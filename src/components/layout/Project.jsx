import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCss3Alt, FaPhp } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const projects = [
	{
		id: 1,
		title: 'AOS Corporation',
		subtitle:
			'My First Website Developed In Php, Tailwind.css, And Mysql, This Being My First Website I Was Able To Finish It After One Or Two Months',
		url: 'https://aoscorporation.com/src/main.php',
		technologies: [<FaPhp className="text-indigo-500" />, <SiTailwindcss className="text-blue-400" />],
	},
	{
		id: 2,
		title: 'DelfinesPark',
		subtitle:
			'This is my second website developed in Php, Css, Tailwind, Mysql, at the time I created this app I already had some more experience and it is reflected in the website, its design and functionality speak for themselves.',
		url: 'https://delfinespark.com/src/main.php',
		technologies: [<FaPhp className="text-indigo-500" />, <FaCss3Alt className="text-blue-500" />, <SiTailwindcss className="text-blue-400" />],
	},
];

const Project = () => {
	const sectionRef = useRef(null);
	const textRef = useRef(null);
	const projectsRef = useRef(null);
	const textAreaRef = useRef(null); // Nueva referencia para el área de texto
	const [isVisibleText, setIsVisibleText] = useState(false);
	const [isVisibleProjects, setIsVisibleProjects] = useState(false);
	const [isVisibleTextArea, setIsVisibleTextArea] = useState(false); // Estado para el área de texto

	useEffect(() => {
		const observerOptions = { root: null, threshold: 0.3 };

		const observerCallback = (entries, setState) => {
			entries.forEach((entry) => setState(entry.isIntersecting));
		};

		const observerText = new IntersectionObserver((entries) => observerCallback(entries, setIsVisibleText), observerOptions);
		const observerProjects = new IntersectionObserver((entries) => observerCallback(entries, setIsVisibleProjects), observerOptions);
		const observerTextArea = new IntersectionObserver((entries) => observerCallback(entries, setIsVisibleTextArea), observerOptions);

		if (textRef.current) observerText.observe(textRef.current);
		if (projectsRef.current) observerProjects.observe(projectsRef.current);
		if (textAreaRef.current) observerTextArea.observe(textAreaRef.current); // Observar el área de texto

		return () => {
			if (textRef.current) observerText.unobserve(textRef.current);
			if (projectsRef.current) observerProjects.unobserve(projectsRef.current);
			if (textAreaRef.current) observerTextArea.unobserve(textAreaRef.current); // Dejar de observar
		};
	}, []);

	return (
		<div className="relative z-10 w-full justify-center flex flex-col lg:min-h-screen" ref={sectionRef}>
			<div className="flex flex-grow justify-center">
				<div className="w-full flex flex-col px-8 py-[80px] justify-between items-end font-saira transition-all duration-700 ease-in-out">
					{/* Texto */}
					<div className="relative">
						{/* carts */}
						<div
							ref={projectsRef}
							className={`flex flex-col gap-1 min-h-[80%] w-full transition-all duration-1000 ease-in-out transform ${
								isVisibleProjects ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
							}`}
						>
							{projects.map((project) => (
								<Link
									key={project.id}
									to={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="p-5 bg-zinc-800 group-hover:scale-75 transform text-white font-saira font-500 min-w-[200px] min-h-[260px] flex flex-col transition duration-300 space-y-5 group hover:bg-zinc-700 "
								>
									<h1 className="text-[25px] text-white">{project.title}</h1>
									<hr className="w-[100px] border-white transition-colors duration-300" />
									<p className="text-[15px]">{project.subtitle}</p>
									<div className="flex gap-2">
										{project.technologies.map((icon, index) => (
											<span key={index} className="text-[25px]">
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

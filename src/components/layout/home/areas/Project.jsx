import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaGitAlt, FaGithub } from 'react-icons/fa';
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

const Projectintro = () => {
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
		<div className="relative w-full font-100 flex h-screen flex-col justify-center" ref={sectionRef}>
			{/* about */}
			<div className="absolute px-3 inset-0 flex z-0 transition-opacity duration-1000 opacity-20">
				<h1
					ref={textRef}
					className={`text-[100px] md:text-[150px] lg:text-[250px] font-400 font-saira outline-text-white-2 mt-5 transition-all duration-1000 ${
						isVisibleText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					Projects
				</h1>
			</div>
			{/* about */}
			<div className="flex flex-grow justify-center">
				<div className="w-full flex px-8 py-[80px] justify-between items-end font-saira transition-all duration-700 ease-in-out">
					{/* Texto */}
					<div
						ref={textAreaRef} // Asignar la referencia al área de texto
						className={`flex flex-col gap-2 font-400 text-[25px] text-white w-[50%] transition-all duration-1000 ${
							isVisibleTextArea ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
						}`}
					>
						<p>My focus is on writing clean and optimized code, ensuring a smooth and engaging user experience.</p>
						<p>With mastery of Key technologies and a minimalist style, always looking for the best combination of functionality and design.</p>
						<p>And that is precisely why I master technologies that allow me to develop the qualities on your page that I previously mentioned.</p>
					</div>
					{/* Texto */}
					<div className="relative w-full max-w-[40%]">
						{/* carts */}
						<div
							ref={projectsRef}
							className={`flex gap-1 w-full h-[47vh] transition-all duration-1000 ease-in-out transform ${
								isVisibleProjects ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
							}`}
						>
							{projects.map((project) => (
								<Link
									key={project.id}
									to={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="p-5 text-white font-saira font-400 w-1/2 min-w-[240px] h-full flex flex-col transition duration-300 space-y-5 group border-[1px] hover:bg-purple-600/15 hover:border-teal-600"
								>
									<h1 className="text-[25px] text-teal-600 group-hover:underline group-hover:decoration-wavy transition duration-300">
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

export default Projectintro;

import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ButtomP from '../../../ui-ux/buttoms/ButtomP';

const projects = [
	{
		id: 1,
		title: 'AOS Corporation',
		subtitle:
			'My First Website Developed In Php, Tailwind.css, And Mysql, This Being My First Website I Was Able To Finish It After One Or Two Months',
		number: '01',
		url: 'https://aoscorporation.com/src/main.php',
	},
	{
		id: 2,
		title: 'DelfinesPark',
		subtitle:
			'This is my second website developed in Php, Css, Tailwind, Mysql, at the time I created this app I already had some more experience and it is reflected in the website, its design and functionality speak for themselves.',
		number: '02',
		url: 'https://delfinespark.com/src/main.php',
	},
	{
		id: 4,
		title: 'Your Images',
		subtitle:
			'This small website shows my ability to consume apis and display its data on the screen, it is developed in html, css, javasctipt, tailwind.css, and react.js shows images of an API when you click a button, they are added 1 by 1 and all images are deleted when you touch the secondary button',
		number: '03',
		url: 'https://github.com/yz-salas/App_image',
	},
	{
		id: 5,
		title: 'Weather App',
		subtitle: 'Using a weather API, this website gives the exact weather in real time of cities in different countries.',
		number: '04',
		url: 'https://github.com/yz-salas/App_De_Clima',
	},
	{
		id: 6,
		title: 'Rick And Morty',
		subtitle: 'By consuming an API, this website shows images of characters from the famous television show called Rick and Morty.',
		number: '05',
		url: 'https://github.com/yz-salas/app_personajes',
	},
];

const Project = () => {
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const [isVisibleLeft, setIsVisibleLeft] = useState(false);
	const [isVisibleRight, setIsVisibleRight] = useState(false);

	useEffect(() => {
		const observerOptions = {
			root: null,
			threshold: 0.3, // Se activa cuando el 30% del elemento es visible
		};

		const observerLeft = new IntersectionObserver(([entry]) => {
			setIsVisibleLeft(entry.isIntersecting);
		}, observerOptions);

		const observerRight = new IntersectionObserver(([entry]) => {
			setIsVisibleRight(entry.isIntersecting);
		}, observerOptions);

		if (leftRef.current) observerLeft.observe(leftRef.current);
		if (rightRef.current) observerRight.observe(rightRef.current);

		return () => {
			if (leftRef.current) observerLeft.unobserve(leftRef.current);
			if (rightRef.current) observerRight.unobserve(rightRef.current);
		};
	}, []);

	return (
		<section id="project" className="w-full flex min-h-screen font-lilita flex-col">
			{/* Contenedor principal */}
			<div className="flex flex-col lg:flex-row">
				{/* Contenedor izquierdo */}
				<div
					ref={leftRef}
					className={`w-full lg:w-[40%] flex flex-col items-start py-16 md:pl-10 transition-all duration-700 ease-in-out ${
						isVisibleLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
					}`}
				>
					<h1 className="text-[50px] lg:text-[70px] sticky top-36 text-green-400">
						Project
						<hr className="w-[100px]" />
					</h1>
				</div>

				{/* Contenedor derecho */}
				<div
					ref={rightRef}
					className={`w-full lg:w-[60%] md:px-10 lg:py-28 flex flex-col gap-10 text-white transition-all duration-700 ease-in-out ${
						isVisibleRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
					}`}
				>
					<div>
						<p className="text-green-400 text-[20px]">3 / 5</p>
					</div>

					<hr className="w-[100px]" />

					<div className="text-lg">
						Como desarrollador web frontend con experiencia, me especializo en la creación de interfaces modernas, rápidas y funcionales.
					</div>

					<div className="flex gap-28">
						<ButtomP title="know more" url="#more" />
					</div>

					{/* Sección de Proyectos */}
					<div id="more" className="w-full flex py-[40px]">
						<div className="flex items-center flex-col justify-center lg:justify-start lg:items-start w-full space-y-10">
							<div className="text-lg md:text-[50px] text-green-400 mt-10">these are my projects</div>

							<hr className="w-[100px]" />

							<div className="flex flex-wrap justify-center items-center lg:justify-start lg:items-start gap-[3px]">
								{projects.map((project) => (
									<Link
										key={project.id}
										to={project.url}
										target="blanck"
										className="p-5 hover:bg-white/15 hover:bg-zinc-900 text-white min-h-[250px] space-y-5 rounded-sm flex transition duration-300 flex-col border-white border-[1px]"
									>
										<div className="flex flex-col space-y-5">
											<div className="text-green-400 text-[30px] w-full h-[15%] flex items-center">{project.number}</div>
										</div>
										<hr className="w-[100px]" />
										<div className="w-full h-[80%] flex justify-center flex-col space-y-2">
											<h1 className="text-[20px] text-green-400">{project.title}</h1>
											<p className="text-[15px]">{project.subtitle}</p>
										</div>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Project;

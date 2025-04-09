import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
	{
		id: 1,
		title: 'AOS Corporation',
		subtitle:
			'My First Website Developed In Php, Tailwind.css, And Mysql, This Being My First Website I Was Able To Finish It After One Or Two Months',
		url: 'https://aoscorporation.com/src/main.php',
		technologies: ['Php', 'Tailwind', 'Html & Css'],
		fecha: '2024 — 2025',
	},
	{
		id: 2,
		title: 'General information app about the · Delfines Park water park',
		subtitle:
			'This is my second website developed in Php, Css, Tailwind, Mysql, at the time I created this app I already had some more experience and it is reflected in the website, its design and functionality speak for themselves.',
		url: 'https://delfinespark.com/src/main.php',
		technologies: ['Php', 'Css', 'Tailwind'],
		fecha: '2024 — 2025',
	},
	{
		id: 3,
		title: 'This App',
		subtitle:
			'My personal website to upload my projects and so you can see my work, experience, and get to know me a little better. It is developed in HTML, CSS, JavaScript, React, Tailwind, and uses some libraries such as Router-Router-Dom and React-Icon.',
		url: 'https://yz-salas.github.io/ysalas/',
		technologies: ['Html & Css', 'JavaScript', 'React', 'Tailwind, React-Router-Dom', 'React-Icon'],
		fecha: '2025 — 2026',
	},
];

const Work = () => {
	return (
		<div className="relative w-full justify-center flex flex-col font-Outfit lg:min-h-screen">
			<div className="flex flex-grow justify-center">
				<div className="w-full flex flex-col justify-center items-end transition-all duration-700 ease-in-out">
					<div className="relative">
						<div
							className={`group/list flex flex-col gap-[12px] min-h-[80%] w-full space-y-[40px] transition-all duration-1000 ease-in-out transform `}
						>
							{projects.map((project) => (
								<Link
									key={project.id}
									to={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 
									opacity-100 transition-opacity duration-300 ease-in-out 
									lg:group-hover/list:opacity-40 lg:hover:!opacity-100"
								>
									{/* Fondo blur decorativo */}
									<div className="absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md group-hover:bg-slate-400/5 group-hover:backdrop-blur-[2px] transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:drop-shadow-sm"></div>

									{/* Fecha */}
									<header
										className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2 space-x-2"
										aria-label="2024 to Present"
									>
										<span>{project.fecha}</span>
									</header>

									{/* Contenido */}
									<div className="z-10 sm:col-span-6">
										<h3 className="font-500 leading-snug text-slate-200">
											<div>
												<div className="inline-flex flex-col space-y-[5px] items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
													<span>
														{project.title}{' '}
														<span className="inline-block">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
																aria-hidden="true"
															>
																<path
																	fillRule="evenodd"
																	d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
																	clipRule="evenodd"
																/>
															</svg>
														</span>
													</span>
												</div>

												<p className="mt-2 text-[15px] font-100 leading-normal text-slate-400">{project.subtitle}</p>
												<a href={project.url} className="hover:text-teal-300 transition duration-300 flex mt-2">
													<p className="flex justify-center items-center">{project.refIcon}</p>
													<p>{project.reftitle}</p>
												</a>
												<ul className="mt-2 flex flex-wrap">
													{project.technologies.map((icon, index) => (
														<li key={index} className="mr-1.5 mt-2">
															<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-500 leading-5 text-teal-300 ">
																{icon}
															</div>
														</li>
													))}
												</ul>
											</div>
										</h3>
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

export default Work;

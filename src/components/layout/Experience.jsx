import React, { useState } from 'react';
import resume from '../../../public/cv.jpg';
import img1 from '../../assets/platzy.jpg';
import img2 from '../../assets/diplomadojs.jpg';
import img3 from '../../assets/introduction.jpg';
import Encabezado from '../ui-ux/Encabezado';

const Experience = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	const projects = [
		{
			id: 1,
			title: 'Diploma in web programming with JavaScript',
			img: img2,
			subtitle: 'During these 3 months we learned the basics of JavaScript, we worked with express html, css, and JavaScript',
			technologies: ['Html & Css', 'JavaScript'],
			fecha: '2024 — 2025',
		},
		{
			id: 2,
			title: 'Theoretical and practical course on manipulating code with JavaScript',
			img: img1,
			subtitle:
				'During the 3 months of this course we cover both theoretical and practical topics, with good practices on how to manipulate the DOM correctly with JavaScript, HTML and CSS.',
			technologies: ['Html & Css', 'JavaScript'],
			fecha: '2024 — 2025',
		},
		{
			id: 3,
			title: 'Introduction to programming with Python and JavaScript',
			img: img3,
			subtitle:
				'During the 2 months of this course we learned through theory and practice the basics of programming, data types, functions, arrays, objects, variables, loops, conditionals, and error handling with try - catch.',
			technologies: ['Data types', 'Funciones', 'Arrays', 'Objects', 'Variables', 'loops', 'Conditionals', 'error handling with try - catch'],
			url: 'https://yz-salas.github.io/ysalas/',
			fecha: '2025 — 2026',
		},
	];

	const renderModal = () => {
		if (!selectedImage) return null;

		return (
			<div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center" onClick={() => setSelectedImage(null)}>
				<img src={selectedImage} alt="Zoomed" className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()} />
			</div>
		);
	};

	return (
		<div className="relative w-full justify-center flex flex-col mt-[50px] mb-[100px] font-Outfit lg:min-h-[80vh]">
			<div className="flex flex-grow justify-center">
				<div className="w-full flex flex-col justify-center items-end transition-all duration-700 ease-in-out">
					<div className="flex flex-col justify-between space-y-[30px] relative">
						<Encabezado title="PREPARATION" />
						<div
							className={`group/list flex flex-col gap-[12px] min-h-[80%] w-full space-y-[40px] transition-all duration-1000 ease-in-out transform `}
						>
							{projects.map((project) => (
								<div
									onClick={(e) => {
										e.preventDefault(); // Evita que se abra el link al hacer clic en la imagen
										setSelectedImage(project.img);
									}}
									key={project.id}
									to={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="group relative grid pb-1 cursor-pointer sm:grid-cols-8 sm:gap-8 md:gap-4 
											opacity-100 transition-opacity duration-300 ease-in-out 
											lg:group-hover/list:opacity-40 lg:hover:!opacity-100"
								>
									<div className="absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md group-hover:bg-slate-400/5 group-hover:backdrop-blur-[2px] transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:drop-shadow-sm"></div>

									<header
										className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2 space-x-2"
										aria-label="2024 to Present"
									>
										<img
											src={project.img}
											alt={project.title}
											className="cursor-pointer rounded-md shadow-md w-[120px] h-[80px] object-cover transition duration-300 hover:scale-105"
										/>
									</header>

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
								</div>
							))}
						</div>
						<div className="flex items-center mt-12 group">
							<a
								href={resume} // Usa la ruta correcta a tu imagen
								download="My-Resume.png" // Nombre con el que se descargará
								className="inline-flex items-baseline leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base"
							>
								<span>Download Résumé</span>
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
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Modal para imagen */}
			{renderModal()}
		</div>
	);
};

export default Experience;

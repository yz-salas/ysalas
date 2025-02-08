import React from 'react';
import Navbar from '../Navbar';
import ButtomP from '../../ui-ux/buttoms/ButtomP';
import '../../../App.css';
import Cart1 from '../../ui-ux/carts/Cart1';
import SkillsSection from '../../ui-ux/icons/Skills';
import { Link } from 'react-router-dom';
const Content = () => {
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
			id: 5,
			title: 'Rick And Morty',
			subtitle: 'By consuming an API, this website shows images of characters from the famous television show called Rick and Morty.',
			number: '05',
			url: 'https://github.com/yz-salas/app_personajes',
		},
	];

	return (
		<main className="container flex">
			<div id="sidebar" className="flex flex-col space-y-72">
				<section id="about" className="w-full flex flex-col lg:flex-row min-h-screen font-lilita ">
					{/* Contenedor izquierdo */}
					<div className="w-full lg:w-[40%] flex flex-col items-start py-16 md:pl-10 ">
						<h1 className="text-[50px] sticky top-36 text-green-400 ">
							About Us
							<hr className="w-[100px]" />
						</h1>
					</div>

					{/* Contenedor derecho */}
					<div className="w-full lg:w-[60%] md:px-10 py-28 flex flex-col gap-10 text-white">
						<div>
							<p className="text-green-400 text-[20px]">1 / 5</p>
						</div>
						<hr className="w-[100px]" />
						<div className="text-lg space-y-2">
							<p>My name is Zadiel Salas, I am 21 years old and I am a self-taught front-end web developer.</p>
							<p>
								I have always loved the world of digital, and since I was little, I have been very creative, applying myself to drawing, photography,
								and enjoying nature and travel.
							</p>
							<p>I found the right area to combine all these skills that I enjoy.</p>
							<p>My vision is to provide companies with modern web solutions that visually please users.</p>
							<p>I believe in combining clean design and solid functionality to create seamless experiences.</p>
							<p>I am passionate about turning ideas into reality, one line of code at a time.</p>
						</div>

						<hr className="w-[100px]" />

						<div className="text-lg space-y-2">
							<p>I have solid knowledge in various web development technologies, which allow us to create efficient and modern solutions.</p>
							<p>From using design languages like HTML and CSS to implementing advanced frameworks like React.</p>
							<p>js and Tailwind CSS, I'm ready to take on any development challenge.</p>
						</div>

						<div className="flex gap-28 text-zinc-700">
							<div className="w-full md:w-[40%] flex flex-col gap-20">
								<ButtomP title="Contact Me" flecha="⭢" url="#contact" />
							</div>
						</div>
					</div>
				</section>

				<section id="service" className="w-full flex flex-row lg:flex-col min-h-screen font-lilita">
					{/* Contenedor izquierdo */}
					<div className="flex flex-col lg:flex-row ">
					<div className="w-full lg:w-[40%] flex flex-col items-start py-16 md:pl-10 ">
						<h1 className="text-[50px] sticky top-36 text-green-400">
							Service
							<hr className="w-[100px]" />
						</h1>
					</div>

						{/* Contenedor derecho */}
						<div className="w-full lg:w-[60%] md:px-10 py-28 flex flex-col gap-10 text-white">
							<div>
								<p className="text-green-400 text-[20px]">2 / 5</p>
							</div>

							<hr className="w-[100px]" />

							<div className="text-lg">
								Como desarrollador web frontend con experiencia, me especializo en la creación de interfaces modernas, rápidas y funcionales.
							</div>

							<hr className="w-[100px]" />

							<div className="flex gap-28">
								<ButtomP title="I want to hire you!" url="#more" />
							</div>

							<div className="w-full py-28 flex flex-col space-y-10">
								<Cart1
									title="Front - End Developer"
									des="With around three years of preparation in front-end development.
									My approach is based on simplicity and elegance, prioritizing minimalist design to deliver intuitive and engaging user experiences."
								/>
								<hr className="w-[100px]" />
							</div>
						</div>
					</div>
				</section>

				<section id="project" className="w-full flex min-h-screen font-lilita flex-col">
					{/* Contenedor izquierdo */}
					<div className="flex flex-col lg:flex-row">
					<div className="w-full lg:w-[40%] flex flex-col items-start py-16 md:pl-10 ">
						<h1 className="text-[50px] sticky top-36 text-green-400">
							Project
							<hr className="w-[100px]" />
						</h1>
					</div>

						{/* Contenedor derecho */}
						<div className="w-full lg:w-[60%] md:px-10 py-28 flex flex-col gap-10 text-white">
							<div>
								<p className="text-green-400 text-[20px]">3 / 5</p>
							</div>

							<hr className="w-[100px]" />

							<div className="text-lg">
								Como desarrollador web frontend con experiencia, me especializo en la creación de interfaces modernas, rápidas y funcionales.
							</div>

							<hr className="w-[100px]" />

							<div className="flex gap-28">
								<ButtomP title="know more" url="#more" />
							</div>

							<div className="w-full flex py-[40px]">
								<div className="flex items-center justify-center lg:justify-start lg:items-start w-full">
									<div className="flex flex-wrap justify-center items-center lg:justify-start lg:items-start gap-[3px]">
										{projects.map((project) => (
											<Link
												to={project.url}
												target="blanck"
												className="p-5 hover:bg-white/10 hover:bg-zinc-900 text-white min-h-[250px] space-y-5 rounded-sm flex transition duration-300 flex-col border-white border-[1px]"
											>
												<div className="flex flex-col space-y-5">
													<div className="text-green-400 text-[30px] w-full h-[15%] flex items-center">{project.number}</div>
												</div>
												<hr className="w-[100px]" />
												<div className="w-full h-[80%] flex justify-center flex-col space-y-2">
													<h1 className="text-[20px] text-green-400"> {project.title}</h1>
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

				<section id="skills" className="w-full flex min-h-screen font-lilita flex-col">
					{/* Contenedor izquierdo */}
					<div className="flex flex-col lg:flex-row">
					<div className="w-full lg:w-[40%] flex flex-col items-start py-16 md:pl-10 ">
						<h1 className="text-[50px] sticky top-36 text-green-400">
							Skills
							<hr className="w-[100px]" />
						</h1>
					</div>

						{/* Contenedor derecho */}
						<div className="w-full lg:w-[60%] md:px-10 py-28 flex flex-col gap-10 text-white">
							<div>
								<p className="text-green-400 text-[20px]">4 / 5</p>
							</div>

							<hr className="w-[100px]" />

							<div className="text-lg space-y-5">
								<p>My focus is on writing clean and optimized code, ensuring a smooth and engaging user experience.</p>
								<p>With mastery of Key technologies and a minimalist style, always looking for the best combination of functionality and design.</p>
								<p>
									And that is precisely why I master technologies that allow me to develop the qualities on your page that I previously mentioned.
								</p>
							</div>

							<hr className="w-[100px]" />

							<div className="flex gap-28">
								<ButtomP title="know more" url="#more" />
							</div>

							<div className="w-full py-28 flex flex-col space-y-10">
								<SkillsSection />
							</div>
						</div>
					</div>
				</section>

				<section className="min-h-[70vh]">
					<footer id="contact" className="bg-white/10 rounded-sm font-lilita">
						<div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
							<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
								<div className="space-y-5">
									<div>
										<p className="text-green-400 text-[20px]">5 / 5</p>
									</div>

									<hr className="w-[100px]" />

									<p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left dark:text-gray-400">
										Desarrollador apasionado por crear experiencias digitales impresionantes.
									</p>
								</div>

								<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
									<div className=" sm:text-left">
										<p className="text-lg text-green-400 ">About Me</p>

										<ul className="mt-8 space-y-4 text-sm">
											<li>
												<a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#aboutus">
													Who are you?
												</a>
											</li>
										</ul>
									</div>

									<div className=" sm:text-left">
										<p className="text-lg text-green-400 ">My Services</p>

										<ul className="mt-8 space-y-4 text-sm">
											<li>
												<a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#service">
													What Do You Offer?
												</a>
											</li>
										</ul>
									</div>

									<div className="sm:text-left w-[200px]">
										<p className="text-lg text-green-400 ">Contact Us</p>

										<ul className="mt-8 space-y-4 text-sm">
											<li>
												<a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="#">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="size-5 shrink-0 text-gray-900 dark:text-white"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth="2"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
														/>
													</svg>

													<span className="flex-1 text-gray-700 dark:text-gray-300"> sadielsalas35@gmail.com</span>
												</a>
											</li>

											<li>
												<a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="#">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="size-5 shrink-0 text-gray-900 dark:text-white"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth="2"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
														/>
													</svg>

													<span className="flex-1 text-gray-700 dark:text-gray-300">829-442-1503</span>
												</a>
											</li>

											<li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="size-5 shrink-0 text-gray-900 dark:text-white"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													strokeWidth="2"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
													/>
													<path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
												</svg>

												<address className="-mt-0.5 flex-1 not-italic text-gray-700 dark:text-gray-300">
													Santiago De Los Caballeros Republica Dominicana
												</address>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
								<div className="text-center sm:flex sm:justify-between sm:text-left">
									<p className="text-sm text-gray-500 dark:text-gray-400">
										<span className="block sm:inline">All rights reserved.</span>

										<a
											className="inline-block text-green-400 underline transition hover:text-green-400/75 dark:text-green-400 dark:hover:text-green-400/75"
											href="#"
										>
											Terms & Conditions
										</a>

										<span>&middot;</span>

										<a
											className="inline-block text-green-400 underline transition hover:text-green-400/75 dark:text-green-400 dark:hover:text-green-400/75"
											href="#"
										>
											Privacy Policy
										</a>
									</p>

									<p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400">&copy; 2022 Company Name</p>
								</div>
							</div>
						</div>
					</footer>
				</section>
			</div>
		</main>
	);
};

export default Content;

import React, { useState, useEffect } from 'react';
import ClickSpark from '../motion/ClickSpark';

const Navbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		const sections = document.querySelectorAll('section, footer'); // Asegúrate de incluir el footer
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.5 } // Detecta cuando la sección está al 50% en pantalla
		);

		sections.forEach((section) => observer.observe(section));

		return () => sections.forEach((section) => observer.unobserve(section));
	}, []);

	const handleLinkClick = () => {
		setTimeout(() => {
			setIsSidebarOpen(false);
		}, 300);
	};

	return (
		<ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
			<div className="relative">
				{/* Pequeños indicadores de navegación */}
				<div className="fixed right-[40px] flex flex-col space-y-4 top-[50%] transform -translate-y-1/2 z-10">
					{['home', 'about', 'service', 'projects', 'contact'].map((id) => (
						<a key={id} href={`#${id}`}>
							<div
								className={`w-[3px] h-[50px] transition-all duration-300 ${activeSection === id ? 'bg-purple-600 scale-125' : 'bg-white opacity-50'}`}
							></div>
						</a>
					))}
					{/* Indicador para el footer */}
					{activeSection === 'footer' && ( // Solo renderiza el indicador si el footer es la sección activa
						<a href="#footer">
							<div
								className={`w-[3px] h-[50px] transition-all duration-300 ${
									activeSection === 'footer' ? 'bg-purple-600 scale-125' : 'bg-white opacity-50'
								}`}
							></div>
						</a>
					)}
				</div>

				{/* Hamburger Button */}
				<button
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className="fixed min-w-[60px] flex-col top-2 left-2 z-50 flex ml-[8px] md:ml-[20px] lg:ml-[148px] mt-[70px] space-y-3 group gap-1 transition-all duration-300 ease-in-out"
				>
					<div className="w-[50px] h-[3px] bg-purple-600 transition-all duration-300 group-hover:w-[70px]" />
					<div className="w-[30px] h-[2px] bg-teal-600 transition-all duration-300 group-hover:w-[50px]" />
				</button>

				{/* Sidebar */}
				<div
					className={`fixed top-0 flex-col left-0 h-full w-full bg-zinc-950 transition-transform ${
						isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
					} z-50 duration-500`}
				>
					<div className="px-10 py-[100px] lg:px-[8rem] flex flex-col w-full h-full gap-10 lg:gap-0">
						{/* Sidebar Content */}
						<div className="w-full lg:w-[100%]">
							<nav className="flex flex-col justify-center w-full h-full gap-5 space-y-4 font-saira">
								<div className="w-full h-[10px] flex items-center justify-end">
									<button onClick={() => setIsSidebarOpen(false)} className="flex flex-col items-end space-y-2 group">
										<div className="w-[50px] h-[4px] bg-white transition-all duration-300 group-hover:w-[70px]" />
									</button>
								</div>
								<div className="flex min-h-[50vh]">
									<div className="flex flex-col">
										{['home', 'about', 'service', 'projects', 'contact'].map((id, index) => (
											<a
												key={id}
												href={`#${id}`}
												onClick={handleLinkClick}
												className="text-[35px] hover:text-purple-600 text-zinc-700 md:text-[60px] lg:text-[50px] w-full transition-colors duration-300 flex items-center"
											>
												{['Home', 'About Me', 'My Services', 'My Projects', 'Contact Me'][index]}
											</a>
										))}
									</div>
									<div className="lg:w-[70%] h-full flex justify-center items-center">
										<h1 className={`text-[0px] lg:text-[250px] text-purple-600 font-100 ${isSidebarOpen ? 'block' : 'hidden'}`}>MENU</h1>
									</div>
								</div>
								<hr className="w-full h-[1px] border-0 bg-white" />
							</nav>
						</div>
					</div>
				</div>

				{/* Overlay */}
				{isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 z-40 bg-black bg-opacity-50"></div>}
			</div>
		</ClickSpark>
	);
};

export default Navbar;

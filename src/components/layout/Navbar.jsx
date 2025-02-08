import React, { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	// Función para cerrar el menú al hacer clic en un enlace
	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<>
			{/* Botón para abrir el menú en móviles, tabletas y laptops */}
			<button className="xl:hidden fixed top-4 left-4 text-[35px] text-green-400 p-2 rounded z-50" onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? 'x' : '☰'}
			</button>

			{/* Sidebar */}
			<nav
				className={`flex justify-center items-center fixed xl:sticky top-0 xl:top-4 xl:left-4 min-h-screen xl:h-[calc(100vh-2rem)] p-5 shadow-lg transform z-10 ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} xl:translate-x-0 transition-transform duration-300 w-64 rounded-lg xl:flex xl:flex-col`}
			>
				{/* Links */}
				<ul className="flex flex-col items-center font-lilita">
					<div className="space-y-9 w-32 font-lilita font-500">
						{['Home', 'About', 'Service', 'Project', 'Skills', 'Contact'].map((item, index) => (
							<li key={index} className="group flex items-center text-white/35 hover:text-green-400/100">
								<hr className="w-6 opacity-0 group-hover:opacity-100 transition-opacity mr-2" />
								<a
									href={`#${item.toLowerCase()}`}
									className="block p-2 transform transition-transform group-hover:translate-x-2"
									onClick={handleLinkClick} // Cierra el menú al hacer clic en el enlace
								>
									{item}
								</a>
							</li>
						))}
					</div>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;

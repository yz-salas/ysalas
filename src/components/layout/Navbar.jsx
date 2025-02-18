import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LeftToRightAnimation } from '../motion/AppMotion';
const Navbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	// Function to handle the delay when closing the sidebar
	const handleLinkClick = () => {
		// Add a delay before closing the sidebar
		setTimeout(() => {
			setIsSidebarOpen(false);
		}, 300); // Delay of 300ms before closing the sidebar
	};

	return (
		<div className="relative">
			{/* Hamburger Button */}
			<button
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				className="fixed min-w-[100px] top-4 left-4 z-50 flex ml-[12px] md:ml-[35px] lg:ml-[152px] mt-[40px] items-center space-y-2 group gap-2 transition-all duration-300 ease-in-out hover:scale-110"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					className="transition-all duration-300 ease-in-out group-hover:rotate-[20deg]"
				>
					<path
						d="M2 15.29V5.71c0-1.33.77-1.65 1.71-.71L6.3 7.59c.39.39 1.03.39 1.41 0L11.29 4a.996.996 0 0 1 1.41 0l3.59 3.59c.39.39 1.03.39 1.41 0L20.29 5c.94-.94 1.71-.62 1.71.71v9.59c0 3-2 5-5 5H7c-2.76-.01-5-2.25-5-5.01Z"
						stroke="#37d67a"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
				</svg>

				<hr className="h-[50px] w-[1px] bg-white transition-all duration-300 ease-in-out" />

				<div className="text-[23px] font-serif transition-all duration-300 ease-in-out group-hover:tracking-[6px] text-white">Menu</div>
			</button>

			{/* Sidebar */}
			<div
				className={`fixed top-0 left-0 h-full w-full bg-zinc-950 shadow-md transition-transform transform ${
					isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
				} z-50 transition-all duration-500 delay-100`} // Add delay to the transition
			>
				<div className="px-10 py-[100px] lg:px-[8rem] flex flex-col w-full h-full gap-10 lg:gap-0 ">
					{/* Sidebar Content */}
					<div className="w-full lg:w-[100%]">
						<nav className="flex flex-col space-y-4 h-full w-full justify-center gap-5 font-serif">
							<div className="w-full h-[10px] flex items-center justify-end">
								<button onClick={() => setIsSidebarOpen(false)} className="flex flex-col items-center justify-center space-y-1 group gap-5">
									{/* Línea superior */}
									<span className="w-[60px] h-[10px] rounded-sm bg-green-400 transition-all group-hover:w-[80px]"></span>
								</button>
							</div>
							<div className="flex min-h-[50vh]">
								<div className="flex flex-col">
									<a
										href="#home"
										onClick={handleLinkClick} // Use the handleLinkClick with delay
										className=" outline-text-white-1 text-[35px] hover:text-white font-bolddec font-serif md:text-[60px] lg:text-[50px] w-full lg:w-[20%] transition-colors duration-300 flex items-center"
									>
										Home
									</a>

									<a
										href="#about"
										onClick={handleLinkClick} // Use the handleLinkClick with delay
										className=" outline-text-white-1 text-[35px] hover:text-white font-bolddec font-serif md:text-[60px] lg:text-[50px] w-full lg:w-[20%] transition-colors duration-300 flex items-center"
									>
										About
									</a>

									<a
										href="#service"
										onClick={handleLinkClick} // Use the handleLinkClick with delay
										className=" outline-text-white-1 text-[35px] hover:text-white font-bolddec font-serif md:text-[60px] lg:text-[50px] w-full lg:w-[20%] transition-colors duration-300 flex items-center"
									>
										Service
									</a>

									<a
										href="#project"
										onClick={handleLinkClick} // Use the handleLinkClick with delay
										className=" outline-text-white-1 text-[35px] hover:text-white font-bolddec font-serif md:text-[60px] lg:text-[50px] w-full lg:w-[20%] transition-colors duration-300 flex items-center"
									>
										Project
									</a>

									<a
										href="#skills"
										onClick={handleLinkClick} // Use the handleLinkClick with delay
										className=" outline-text-white-1 text-[35px] hover:text-white font-bolddec font-serif md:text-[60px] lg:text-[50px] w-full lg:w-[20%] transition-colors duration-300 flex items-center"
									>
										Skills
									</a>
									<a
										href="#contact"
										onClick={handleLinkClick} // Use the handleLinkClick with delay
										className=" outline-text-white-1 text-[35px] hover:text-white font-bolddec font-serif md:text-[60px] lg:text-[50px] w-full lg:w-[20%] transition-colors duration-300 flex items-center"
									>
										Contact
									</a>
								</div>
								<div className="lg:w-[80%] h-full flex justify-center items-center">
									<h1 className={`text-[0px] lg:text-[300px] ${isSidebarOpen ? 'block' : 'hidden'}`}>MENU</h1>
								</div>
							</div>
							<hr className="w-full h-[1px] border-0 bg-white" />
							<div className="w-full min-h-[50px] flex items-center justify-between">
								<ul className="flex space-x-5 lg:items-center text-white/55">
									<li>
										<a href="#" className="text-white text-[20px] hover:text-green-400">
											Instagram
										</a>
									</li>

									<li>
										<a href="#" className="text-white text-[20px] hover:text-green-400">
											WhatsApp
										</a>
									</li>

									<li>
										<a href="#" className="text-white text-[20px] hover:text-green-400">
											GitHub
										</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
					<div className="w-[30%]">
						<div className=""></div>
					</div>
				</div>
			</div>

			{/* Overlay */}
			{isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>}
		</div>
	);
};

export default Navbar;

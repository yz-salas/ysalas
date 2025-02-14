import React from 'react';
import ButtomP from '../../ui-ux/buttoms/ButtomP';
import { InitionAnimation } from '../../motion/AppMotion';

const Header = () => {
	return (
		<>
			<header id="home" className="lg:px-[10rem] mb-[250px] font-lilita w-full space-y-6 h-screen flex flex-col justify-center items-center">
				<div className="flex flex-col items-center text-center">
					<h1 className="text-green-400 text-[60px] md:text-[100px] lg:text-[120px] font-400">Zadiel Salas</h1>
					<hr className="w-[100px]" />
				</div>

				<div className="text-center md:text-start">
					<p className="text-white text-[5vw] sm:text-[30px] md:text-[40px] lg:text-[50px]">
						Front <span className="text-green-400"> - </span> End Developer
					</p>
				</div>

				<ButtomP title="Slite" url="#about" flecha="⭣" />
			</header>
		</>
	);
};

export default Header;

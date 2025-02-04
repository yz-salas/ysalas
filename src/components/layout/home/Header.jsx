import React from 'react';
import ButtomP from '../../ui-ux/buttoms/ButtomP';

const Header = () => {
	return (
		<>
			<header id="home" className="md:px-[4rem] w-full space-y-6 h-screen flex flex-col justify-center items-center md:items-start">
				<div className="w-full flex flex-col items-center md:items-start text-center md:text-start">
					<h1 className="text-green-400 text-[60px] md:text-[100px] lg:text-[120px] font-serif font-400">Zadiel Salas</h1>
					<hr className="w-[100px]" />
				</div>

				<div className="w-full text-center md:text-start">
					<p className="text-zinc-300 text-[5vw] sm:text-[30px] md:text-[40px] lg:text-[50px] font-serif">Front - End Developer</p>
				</div>

				<ButtomP title="slite" url="#aboutus" flecha="⭣" />
			</header>
		</>
	);
};

export default Header;

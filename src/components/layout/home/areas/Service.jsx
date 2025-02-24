import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa'; // Importa los iconos
import ButtomP from '../../../ui-ux/buttoms/ButtomP';
import Cart1 from '../../../ui-ux/carts/Cart1';

const Service = () => {
	const { ref: sectionRef, inView: isSectionInView } = useInView({
		threshold: 0.3,
		triggerOnce: false,
	});

	const { ref: rightRef, inView: isRightInView } = useInView({
		threshold: 0.3,
		triggerOnce: false,
	});

	return (
		<div ref={sectionRef} className="relative px-8 flex font-600 flex-col w-full min-h-screen font-saira">
			{/* Fondo con texto "Service" */}
			<div className={`absolute inset-0 px-5 flex z-0 transition-opacity justify-end duration-1000 ${isSectionInView ? 'opacity-50' : 'opacity-0'}`}>
				<h1 className="text-[100px] md:text-[150px] lg:text-[300px] outline-text-white-2 opacity-20">Services</h1>
			</div>

			<div className="relative z-10 w-full h-screen justify-center flex flex-col">
				{/* Contenedor derecho con tu contenido */}
				<div
					ref={rightRef}
					className={`w-full lg:py-10 h-[600px] flex items-end gap-10 text-white transition-all duration-700 ease-in-out ${
						isRightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
					}`}
				>
					<div className="flex">
						<div className="flex flex-col lg:w-[45%] h-[50%] w-full space-y-10">
							<Cart1
								title="Front - End Developer"
								des="With around three years of preparation in front-end development.
							My approach is based on simplicity and elegance, prioritizing minimalist design to deliver intuitive and engaging user experiences."
							/>
							<ButtomP title="What Have You Done?" url="#projects" colorletter="purple-600" color="purple-600" />
						</div>
						<div className="flex gap-4 mt-4 w-[50%] justify-end items-end">
							<div className='flex gap-5'>
								{/* Aquí se añaden los iconos de las tecnologías */}
								<FaHtml5 className="text-orange-500 text-[30px]" />
								<FaCss3Alt className="text-blue-500 text-[30px]" />
								<FaJs className="text-yellow-400 text-[30px]" />
								<FaPhp className="text-indigo-500 text-[30px]" />
								<FaReact className="text-cyan-400 text-[30px]" />
								<FaGitAlt className="text-red-500 text-[30px]" />
								<FaGithub className="text-gray-900 text-[30px]" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;

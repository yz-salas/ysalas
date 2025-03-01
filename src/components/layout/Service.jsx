import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa'; // Importa los iconos
import Cart1 from '../ui-ux/carts/Cart1';

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
		<div ref={sectionRef} className="relative px-8 flex font-600 flex-col w-full justify-center font-saira min-h-[70vh] lg:h-[90vh]">
			<div className="relative z-10 w-full flex flex-col">
				{/* Contenedor derecho con tu contenido */}
				<div
					ref={rightRef}
					className={`w-full lg:py-7 lg:min-h-[600px] flex flex-col gap-10 text-white transition-all duration-700 ease-in-out ${
						isRightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
					}`}
				>
					<div className="flex flex-col h-full gap-5 w-full justify-center">
						<div className="flex flex-col justify-center w-full space-y-10">
							<Cart1
								title=""
								des="With around three years of preparation in front-end development.
							My approach is based on simplicity and elegance, prioritizing minimalist design to deliver intuitive and engaging user experiences."
							/>
						</div>

						<hr className="w-[150px] transition-all duration-300 ease-in-out group-hover:w-[50px] border-gray-500 group-hover:border-white" />

						<div className="flex gap-4 mt-4 items-end">
							<div className="flex gap-5">
								{/* Aquí se añaden los iconos de las tecnologías */}
								<FaHtml5 className="text-orange-500 text-[20px] md:text-[30px]" />
								<FaCss3Alt className="text-blue-500 text-[20px] md:text-[30px]" />
								<FaJs className="text-yellow-400 text-[20px] md:text-[30px]" />
								<FaPhp className="text-indigo-500 text-[20px] md:text-[30px]" />
								<FaReact className="text-cyan-400 text-[20px] md:text-[30px]" />
								<FaGitAlt className="text-red-500 text-[20px] md:text-[30px]" />
								<FaGithub className="text-white text-[20px] md:text-[30px]" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;

import React from 'react';
import Encabezado from '../ui-ux/Encabezado';

const About = () => {
	return (
		<div className="flex font-Outfit font-100 flex-col items-center w-full lg:min-h-[70vh]">
			<div className="relative z-10 w-full flex flex-col">
				{/* Contenedor derecho con tu contenido */}
				<div className={`w-full flex flex-col gap-10 transition-all duration-700 ease-in-out`}>
					<div className="flex flex-col space-y-[20px] text-slate-400">
					<Encabezado title="ABOUT ME"/>
						<div className="text-[16px] md:text-[25px] lg:text-[16px] space-y-[20px]">
							<p className="">
								I am a front-end developer passionate about technology and minimalist web design. I have always loved the digital world, and since I
								was little, I have been very creative, dedicating myself to drawing, photography, and enjoying nature and travel. I found the perfect
								field to combine all these skills that I enjoy.
							</p>

							<p className="">
								My vision is to provide companies with modern web solutions that visually appeal to users. I believe in combining clean design and
								solid functionality to create seamless experiences{' '}
								<a href="#experience" className="text-white hover:text-teal-500 transition duration-100">
									I am passionate about turning ideas into reality, one line of code at a time.
								</a>
							</p>

							<p className="">
								Throughout my journey as a front-end developer, I have dedicated a significant amount of time to mastering the fundamental principles
								of CSS. I have worked on improving my ability to create responsive, visually appealing, and well-structured designs that enhance user
								experience.
							</p>

							<p className="">
								Similarly, I have invested considerable effort in learning and refining my skills in React. I am continuously exploring best
								practices, optimizing performance, and structuring components effectively to build{' '}
								<a href="#projects" className="text-white hover:text-teal-500 transition duration-100">
									scalable and maintainable applications.
								</a>
							</p>

							<p className="">
								My goal is to keep growing as a developer, staying up to date with{' '}
								<a href="#experience" className="text-white hover:text-teal-500 transition duration-100">
									the latest technologies
								</a>{' '}
								, and delivering high-quality solutions that meet both aesthetic and functional demands.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

import React from 'react';

const About = () => {
	return (
		<div className="relative flex font-ubuntu font-600 mb-20 px-5 flex-col justify-center items-center w-full min-h-[60px] lg:h-[90vh]">
			<div className="relative z-10 w-full justify-center flex flex-col">
				{/* Contenedor derecho con tu contenido */}
				<div className={`w-full lg:py-7 lg:min-h-[600px] justify-end flex flex-col gap-10 text-white transition-all duration-700 ease-in-out`}>
					<div className=" flex flex-col justify-center text-slate-500">
						<div className=" space-y-4 lg:space-y-[50px]">
							<div className="block lg:hidden md:h-[100px]">
								<h3 className="text-[20px] md:text-[30px] text-white">ABOUT ME</h3>
							</div>
							<div className="text-[16px] md:text-[25px] lg:text-[16px] space-y-4">
								<p>My name is Zadiel Salas. I am 21 years old, and I am a self-taught front-end web developer.</p>

								<p>
									I have always loved the digital world, and since I was little, I have been very creative, dedicating myself to drawing, photography,
									and enjoying nature and travel. I found the perfect field to combine all these skills that I enjoy.
								</p>

								<p>
									My vision is to provide companies with modern web solutions that visually appeal to users. I believe in combining clean design and
									solid functionality to create seamless experiences.
								</p>

								<p>
									<a href="#experience" className="text-teal-500 hover:decoration-solid hover:underline transition duration-500">
										I am passionate about turning ideas into reality, one line of code at a time.
									</a>
								</p>

								<p>
									Throughout my journey as a front-end developer, I have dedicated a significant amount of time to mastering the fundamental
									principles of CSS. I have worked on improving my ability to create responsive, visually appealing, and well-structured designs that
									enhance user experience.
								</p>

								<p>
									Similarly, I have invested considerable effort in learning and refining my skills in React. I am continuously exploring best
									practices, optimizing performance, and structuring components effectively to build{' '}
									<a href="#projects" className="text-teal-500 hover:decoration-solid hover:underline transition duration-500">
										scalable and maintainable applications.
									</a>
								</p>

								<p>
									My goal is to keep growing as a developer, staying up to date with{' '}
									<a href="#experience" className="text-teal-500 hover:decoration-solid hover:underline transition duration-500">
										the latest technologies
									</a>{' '}
									, and delivering high-quality solutions that meet both aesthetic and functional demands.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

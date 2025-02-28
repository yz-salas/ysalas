import React, { useRef, useEffect, useState } from 'react';

const Education = () => {
	const sectionRef = useRef(null);
	const textRef = useRef(null);
	const projectsRef = useRef(null);
	const textAreaRef = useRef(null); // Nueva referencia para el área de texto
	const [isVisibleText, setIsVisibleText] = useState(false);
	const [isVisibleProjects, setIsVisibleProjects] = useState(false);
	const [isVisibleTextArea, setIsVisibleTextArea] = useState(false); // Estado para el área de texto

	useEffect(() => {
		const observerOptions = { root: null, threshold: 0.3 };

		const observerCallback = (entries, setState) => {
			entries.forEach((entry) => setState(entry.isIntersecting));
		};

		const observerText = new IntersectionObserver((entries) => observerCallback(entries, setIsVisibleText), observerOptions);
		const observerProjects = new IntersectionObserver((entries) => observerCallback(entries, setIsVisibleProjects), observerOptions);
		const observerTextArea = new IntersectionObserver((entries) => observerCallback(entries, setIsVisibleTextArea), observerOptions);

		if (textRef.current) observerText.observe(textRef.current);
		if (projectsRef.current) observerProjects.observe(projectsRef.current);
		if (textAreaRef.current) observerTextArea.observe(textAreaRef.current); // Observar el área de texto

		return () => {
			if (textRef.current) observerText.unobserve(textRef.current);
			if (projectsRef.current) observerProjects.unobserve(projectsRef.current);
			if (textAreaRef.current) observerTextArea.unobserve(textAreaRef.current); // Dejar de observar
		};
	}, []);

	return (
		<div className="relative z-10 w-full justify-center flex flex-col min-h-[70vh] lg:min-h-screen" ref={sectionRef}>
			<div className="flex justify-center">
				<div className="w-full flex flex-col px-8 py-[40px] justify-between items-end font-saira transition-all duration-700 ease-in-out">
					{/* Texto */}
					<div className="relative w-full">
						{/* carts */}
						<div
							ref={projectsRef}
							className={`flex flex-col gap-[50px] h-auto w-full transition-all duration-1000 ease-in-out transform ${
								isVisibleProjects ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
							}`}
						>
							<div className="h-auto w-full flex items-center mt-4">
								<p className="text-[20px] md:text-[30px] w-full lg:w-full">
									I have several diplomas and study certificates that guarantee my experience and good academic performance.
								</p>
							</div>
							<div className="w-full flex flex-col lg:flex-row md:flex-wrap gap-1">
								{/* Cart 1 */}
								<div className="w-full min-h-[240px] lg:w-[230px] lg:h-[230px] transition duration-300 cursor-pointer hover:bg-zinc-700  bg-zinc-800 p-5 flex flex-col justify-between">
									<div className="w-full">
										<p>Online</p>
										<p>2 Months</p>
									</div>
									<div className="w-full">
										<div>
											<p className="text-[18px]">Web JavaScript Diploma</p>
										</div>
										<div className="flex gap-2">
											<p>View</p>
											<p>Download</p>
										</div>
									</div>
								</div>
								{/* Cart 1 */}

								{/* Cart 2 */}
								<div className="w-full min-h-[240px] lg:w-[230px] lg:h-[230px] transition duration-300 cursor-pointer hover:bg-zinc-700  bg-zinc-800 p-5 flex flex-col justify-between">
									<div className="w-full">
										<p>Online</p>
										<p>1 Month</p>
									</div>
									<div className="w-full">
										<div>
											<p className="text-[18px]">Manipulations Of The Dom</p>
										</div>
										<div className="flex gap-2">
											<p>View</p>
											<p>Download</p>
										</div>
									</div>
								</div>
								{/* Cart 2 */}

								{/* Cart 3 */}
								<div className="w-full min-h-[240px] lg:w-[230px] lg:h-[230px] transition duration-300 cursor-pointer hover:bg-zinc-700  bg-zinc-800 p-5 flex flex-col justify-between">
									<div className="w-full">
										<p>Online</p>
										<p>3 Months</p>
									</div>
									<div className="w-full">
										<div>
											<p className="text-[18px]">Introduction to Programming</p>
										</div>
										<div className="flex gap-2">
											<p>View</p>
											<p>Download</p>
										</div>
									</div>
								</div>
								{/* Cart 3 */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;

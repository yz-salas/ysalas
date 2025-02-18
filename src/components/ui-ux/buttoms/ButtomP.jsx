import React from 'react';

function ButtomP({ url, title, onClick }) {
	return (
		<>
			{/* Fancy Button */}
			<a
				href={url}
				onClick={onClick} // Passing onClick here to close the sidebar with a delay
				className="group relative inline-block text-center px-20 py-3 text-lg border-[3px] text-white border-white cursor-pointer overflow-hidden transition-all duration-200 ease-in hover:text-black z-[1]"
			>
				{/* First circle overlay */}
				<span className="absolute left-1/2 -translate-x-1/2 scale-x-125 scale-y-100 top-full w-[140%] h-[180%] bg-black/5 rounded-full block transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] delay-100 -z-[1] group-hover:top-[-35%] group-hover:bg-white group-hover:scale-x-80 group-hover:scale-y-130"></span>
				{/* Second circle overlay */}
				<span className="absolute left-[55%] -translate-x-1/2 scale-x-145 scale-y-100 top-[180%] w-[160%] h-[190%] bg-white rounded-full block transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] delay-100 -z-[1] group-hover:top-[-45%] group-hover:scale-x-80 group-hover:scale-y-130"></span>
				{title}
			</a>
		</>
	);
}

export default ButtomP;

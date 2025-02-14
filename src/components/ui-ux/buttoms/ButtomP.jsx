import React, { useState } from 'react';

function ButtomP(props) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<>
			{/* Fancy Button */}
			<a
				href={props.url}
				className="group relative inline-block text-center px-20 py-3 text-lg border-[3px] text-white border-white rounded cursor-pointer overflow-hidden transition-all duration-200 ease-in hover:text-black hover:border-green-400 z-[1]"
			>
				{/* First circle overlay */}
				<span className="absolute left-1/2 -translate-x-1/2 scale-x-125 scale-y-100 top-full w-[140%] h-[180%] bg-black/5 rounded-full block transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] delay-100 -z-[1] group-hover:top-[-35%] group-hover:bg-[#39bda7] group-hover:scale-x-80 group-hover:scale-y-130"></span>
				{/* Second circle overlay */}
				<span className="absolute left-[55%] -translate-x-1/2 scale-x-145 scale-y-100 top-[180%] w-[160%] h-[190%] bg-emerald-50 rounded-full block transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] delay-100 -z-[1] group-hover:top-[-45%] group-hover:scale-x-80 group-hover:scale-y-130"></span>
				{props.title}
			</a>
		</>
	);
}

export default ButtomP;

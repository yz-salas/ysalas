import React from 'react';

function ButtomP({ url, title, colorletter, color, number, isActive }) {
	return (
		<div>
			<a href={url} className="flex items-center cursor-pointer transition-all ease-in-out duration-200 text-white/40 gap-5 group w-[300px]">
				<div className={`text-[15px] transition-colors group-hover:text-white duration-200 ${isActive ? 'text-white' : ''}`}>{number}</div>
				<div className="flex items-center gap-5">
					<div
						className={`transition-all h-[1px] duration-300 ease-in-out ${
							isActive ? 'w-[50px] bg-white' : 'w-[20px] bg-white/40 group-hover:w-[50px] group-hover:bg-white'
						}`}
					></div>
					<p
						className={`tracking-widest text-[17px] transition-all duration-300 ease-in-out ${
							isActive ? 'text-white ' : 'group-hover:text-white'
						} group-hover:text-${colorletter}`}
					>
						{title}
					</p>
				</div>
			</a>
		</div>
	);
}

export default ButtomP;

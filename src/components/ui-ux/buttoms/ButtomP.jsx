import React from 'react';

function ButtomP({ url, title, colorletter, color, number, isActive }) {
	return (
		<div>
			<a href={url} className="flex items-center cursor-pointer transition-all ease-in-out duration-200 text-white/40 gap-5 group w-[300px] font-ubuntu">
				<div className="flex items-center gap-5">
					{/* div rallita */}
					<div
						className={`transition-all h-[1px] duration-300 ease-in-out ${isActive ? 'w-[70px] bg-white' : 'w-[30px] group-hover:w-[50px] bg-white/40'}`}
					></div>
					{/* div rallita */}
					<p
						className={`tracking-widest text-[13px] transition-all duration-300 ease-in-out ${
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

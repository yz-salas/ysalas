import React from 'react';

function ButtomP({ url, title, colorletter, color, number, isActive }) {
	return (
		<div>
			<a
				href={url}
				className="flex items-center cursor-pointer transition-all ease-in-out duration-100 text-slate-400 gap-5 group min-w-[50%] font-Outfit font-600"
			>
				<div className="flex items-center gap-5">
					{/* div rallita */}
					<div
						className={`transition-all h-[1px] duration-100 ease-in-out ${
							isActive ? 'w-[70px] bg-white' : 'w-[30px] group-hover:w-[70px] bg-slate-400'
						}`}
					></div>
					{/* div rallita */}
					<p
						className={`tracking-widest text-[13px] transition-all duration-100 ease-in-out uppercase ${
							isActive ? 'text-white' : 'group-hover:text-white'
						}`}
					>
						{title}
					</p>
				</div>
			</a>
		</div>
	);
}

export default ButtomP;

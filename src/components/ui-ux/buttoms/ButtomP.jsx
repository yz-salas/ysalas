import React from 'react';

function ButtomP({ url, title, colorletter, color, size }) {
	return (
		<>
			<div>
				<a href={url} className="flex items-center cursor-pointer space-x-5 group w-[350px]">
					<hr className={`w-[50px] transition-all duration-300 group-hover:w-[100px] group-hover:border-${color}`} />
					<p className={`text-${color} group-hover:text-${colorletter} outline-text-teal-300-2 transition-colors duration-300 text-[25px] group-hover:decoration-wavy group-hover:underline`}>
						{title}
					</p>
				</a>
			</div>
		</>
	);
}

export default ButtomP;

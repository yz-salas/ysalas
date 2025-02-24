import React from 'react';

const Buttom2 = ({ url, title, color }) => {
	return (
		<>
			<div>
				<a href={url} className="flex items-center cursor-pointer space-x-5 group w-[300px]">
					<hr className={`w-[50px] transition-all duration-300 group-hover:w-[100px] hover:bg-${color}`} />
					<p className={`text-purple-600 transition-colors duration-300 text-[20px]`}>{title}</p>
				</a>
			</div>
		</>
	);
};

export default Buttom2
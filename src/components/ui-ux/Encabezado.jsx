import React from 'react';

const Encabezado = ({ title }) => {
	return (
		<div className="text-[16px] md:text-[20px] lg:hidden text-white sticky top">
			<p>{title}</p>
		</div>
	);
};

export default Encabezado;

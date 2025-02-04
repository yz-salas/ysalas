import React from 'react';

const Cart1 = ({ title, des }) => {
	return (
		<>
			<div className='flex flex-col space-y-[45px]'>
				<div className="w-full space-y-3">
					<h1 className="text-[20px] text-green-400">{title}</h1>
					<p>
						{des}
					</p>
				</div>
			</div>
		</>
	);
};

export default Cart1;

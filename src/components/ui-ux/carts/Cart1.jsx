import React from 'react';

const Cart1 = ({ title, des }) => {
	return (
		<>
			<div className='flex flex-col space-y-[45px] min-w-[500px]'>
				<div className="w-full space-y-3">
					<h1 className="text-[40px] lg:text-[30px] text-white">{title}</h1>
					<p className='text-[25px] lg:text-[20px]'>
						{des}
					</p>
				</div>
			</div>
		</>
	);
};

export default Cart1;

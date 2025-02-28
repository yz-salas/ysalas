import React from 'react';

const Cart1 = ({ title, des }) => {
	return (
		<>
			<div className='flex flex-col space-y-[45px]'>
				<div className="w-full space-y-3 max-w-full lg:max-w-[800px]">
					<h1 className="text-[40px] lg:text-[30px] text-white">{title}</h1>
					<p className='w-full text-[20px] md:text-[40px] lg:text-[20px] break-words'>
						{des}
					</p>
				</div>
			</div>
		</>
	);
};

export default Cart1;

import React from 'react';

const Cart1 = ({ title, des }) => {
	return (
		<>
			<div className='flex flex-col space-y-[45px] font-ubuntu font-400 text-slate-500'>
				<div className="w-full space-y-3 max-w-full lg:max-w-[800px]">
					<p className='w-full text-[16px] md:text-[20px] lg:text-[16px] break-words'>
						{des}
					</p>
				</div>
			</div>
		</>
	);
};

export default Cart1;

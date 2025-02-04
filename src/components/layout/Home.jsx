import React from 'react';
import Header from './home/header';
import Content from './home/Content';
import Navbar from './Navbar';

const Home = () => {
	return (
		<div className='w-full lg:w-[80%] space-y-72'>
			<Header />
			<Content />
		</div>
	);
};

export default Home;

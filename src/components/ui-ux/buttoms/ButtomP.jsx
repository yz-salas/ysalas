import React from 'react';
import { Link } from 'react-router-dom';

const ButtomP = (props) => {
	return (
		<div className="border-[1px] border-white hover:bg-white/10 text-white font-lilita min-w-[120px] min-h-[40px] max-w-[200px] flex justify-center items-center rounded-sm cursor-pointer px-5">
			<a href={props.url}>{props.title} {props.flecha}</a>
		</div>
	);
};

export default ButtomP;

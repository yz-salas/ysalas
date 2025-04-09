import React from 'react';

const CartV2 = () => {
	return (
		<div className="group relative grid pb-1 h-[50vh] w-[600px] transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
			<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md bg-white/5 backdrop-blur-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:drop-shadow-lg"></div>

			<header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">hola mundo</header>

			<div className="z-10 sm:col-span-6">
				<h3 className="font-medium leading-snug text-slate-200">
					<div>
						<a
							href=""
							className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
						>
							<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, dicta adipisci eum facilis aperiam suscipit, et quibusdam porro iure
								in quidem? Possimus distinctio illum amet minus. Soluta voluptatum ullam error!
							</span>
						</a>
					</div>
				</h3>
				<p className="mt-2 text-sm leading-normal"></p>
			</div>
		</div>
	);
};

export default CartV2;

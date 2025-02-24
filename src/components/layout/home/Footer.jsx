import React from 'react';
import ButtomP from '../../ui-ux/buttoms/ButtomP';

const Footer = () => {
	return (
		<section className="min-h-[100vh] flex justify-center items-center px-4">
			<footer id="contact" className="bg-white/10 rounded-lg font-lilita min-h-[70vh] p-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Information */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div className="space-y-5 text-center lg:text-left">
							<p className="text-green-400 text-[20px]">5 / 5</p>
							<hr className="w-[100px] mx-auto lg:mx-0" />
							<p className="mt-6 max-w-md text-gray-500 dark:text-gray-400 mx-auto lg:mx-0">
								Developer passionate about creating amazing digital experiences.
							</p>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
							<div className="text-center lg:text-left">
								<p className="text-lg text-green-400">About Me</p>
								<ul className="mt-4 space-y-2">
									<li>
										<a className="text-gray-700 hover:text-gray-500 dark:text-white dark:hover:text-gray-400" href="#aboutus">
											Who am I?
										</a>
									</li>
								</ul>
							</div>

							<div className="text-center lg:text-left">
								<p className="text-lg text-green-400">My Services</p>
								<ul className="mt-4 space-y-2">
									<li>
										<a className="text-gray-700 hover:text-gray-500 dark:text-white dark:hover:text-gray-400" href="#service">
											What Do I Offer?
										</a>
									</li>
								</ul>
							</div>

							<div className="text-center lg:text-left">
								<p className="text-lg text-green-400">Contact Me</p>
								<ul className="mt-4 space-y-3 text-sm">
									<li className="flex items-center justify-center lg:justify-start gap-2">
										<span className="text-gray-700 dark:text-gray-300">📧</span>
										<span className="text-gray-700 dark:text-gray-300">sadielsalas35@gmail.com</span>
									</li>
									<li className="flex items-center justify-center lg:justify-start gap-2">
										<span className="text-gray-700 dark:text-gray-300">📞</span>
										<span className="text-gray-700 dark:text-gray-300">829-442-1503</span>
									</li>
									<li className="flex items-center justify-center lg:justify-start gap-2">
										<span className="text-gray-700 dark:text-gray-300">📍</span>
										<span className="text-gray-700 dark:text-gray-300">Santiago, Dominican Republic</span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Form */}
					<div className="flex items-center justify-center">
						<form className="w-full max-w-md space-y-4">
							<input
								type="text"
								placeholder="Name"
								className="w-full p-2 rounded-lg bg-transparent border-[3px] text-white border-gray-300 focus:outline-none"
							/>
							<input
								type="email"
								placeholder="Email"
								className="w-full p-2 rounded-lg bg-transparent border-[3px] text-white border-gray-300 focus:outline-none"
							/>
							<textarea
								placeholder="Message"
								className="w-full p-2 rounded-lg bg-transparent border-[3px] text-white border-gray-300 focus:outline-none h-[250px]"
							></textarea>
							<ButtomP title="Sent" url="#" />
						</form>
					</div>
				</div>

				<div className="mt-6 border-t border-gray-100 pt-6 dark:border-gray-800 text-center">
					<p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
				</div>
			</footer>
		</section>
	);
};

export default Footer;

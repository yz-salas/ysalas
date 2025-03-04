import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';

const TechCard = ({ icon: Icon, title, color, description }) => {
	return (
		<div className="w-full p-5">
			<div className="flex items-center gap-3 border-b border-gray-700 pb-2 mb-3">
				<Icon className={`text-[50px] ${color}`} />
			</div>
			<p className="text-slate-500 text-[16px] md:text-[25px] lg:text-[16px] font-ubuntu font-600 leading-relaxed">{description}</p>
		</div>
	);
};

const Experience = () => {
	const technologies = [
		{
			icon: FaHtml5,
			title: 'HTML',
			color: 'text-orange-500',
			description:
				'In my projects, I use HTML along with CSS and JavaScript to develop clean and functional interfaces. I also leverage HTML semantics to improve accessibility and SEO, which helps make pages more intuitive and rank well in search engines.',
		},
		{
			icon: FaCss3Alt,
			title: 'CSS',
			color: 'text-blue-500',
			description:
				'In my development, I prefer to use Tailwind CSS to streamline the process and keep the code clean, but I also use pure CSS and preprocessors like Sass when necessary. Thanks to properties like Flexbox and Grid, I organize content efficiently, ensuring a fluid experience on any device.',
		},
		{
			icon: FaJs,
			title: 'JavaScript',
			color: 'text-yellow-400',
			description:
				'In my developments, I use pure JavaScript and frameworks like React.js to build interactive and efficient interfaces. I also work with APIs to obtain and process data in real time, improving the functionality of web applications.',
		},
		{
			icon: FaReact,
			title: 'React',
			color: 'text-cyan-400',
			description:
				'I use React along with Tailwind CSS to design modern, clean, responsive interfaces. I also leverage state and hooks like useState and useEffect to manage my application logic efficiently.',
		},
		{
			icon: FaGitAlt,
			title: 'Git',
			color: 'text-red-500',
			description:
				'I use commands like git commit, git push, and git pull to manage my repositories, and I work with platforms like GitHub to host and share code. Additionally, I employ branching and merging to develop new features without affecting the main version of the project.',
		},
		{
			icon: FaGithub,
			title: 'GitHub',
			color: 'text-white',
			description:
				'I use public and private repositories to organize my projects, and leverage tools like GitHub Actions to automate processes. I also work with pull requests and issues to improve collaboration and tracking of code changes.',
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-20">
			{technologies.map((tech, index) => (
				<TechCard key={index} icon={tech.icon} title={tech.title} color={tech.color} description={tech.description} />
			))}
		</div>
	);
};

export default Experience;

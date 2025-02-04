import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const skills = [
	{ name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
	{ name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
	{ name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
	{ name: 'React', icon: <FaReact className="text-cyan-400" /> },
	{ name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" /> },
	{ name: 'PHP', icon: <FaPhp className="text-indigo-500" /> },
	{ name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
	{ name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" /> },
];

export default function SkillsSection() {
	return (
		<section className="py-10 space-y-10">
			<h2 className="text-[20px] text-green-400 mb-6">Mis Habilidades</h2>
			<hr className="w-[100px]" />
			<div className="flex flex-wrap gap-10 w-[70%]">
				{skills.map((skill, index) => (
					<div key={index} className="flex flex-col items-center">
						<div className="text-5xl">{skill.icon}</div>
						{/*
						<p className="text-lg font-medium">{skill.name}</p>
                        */}
					</div>
				))}
			</div>
		</section>
	);
}

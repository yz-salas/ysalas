import { useEffect, useState } from 'react';

const Spotlight = ({ children, spotlightColor = 'rgba(255, 255, 255, 0.15)' }) => {
	const [position, setPosition] = useState({ x: -100, y: -100 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<div className="relative min-h-screen w-full bg-blue-950/10 overflow-hidden">
			<div
				className="pointer-events-none fixed inset-0"
				style={{
					background: `radial-gradient(circle 200px at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
				}}
			></div>

			{children}
		</div>
	);
};

export default Spotlight;

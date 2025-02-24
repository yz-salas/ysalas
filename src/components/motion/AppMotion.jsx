import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const springValues = {
	damping: 30,
	stiffness: 100,
	mass: 2,
};

export const TiltedCard = ({
	captionText = '',
	containerHeight = '300px',
	containerWidth = '300px',
	scaleOnHover = 1.1,
	rotateAmplitude = 14,
	showTooltip = true,
	overlayContent = null,
	displayOverlayContent = false,
}) => {
	const ref = useRef(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useSpring(0, springValues);
	const rotateY = useSpring(0, springValues);
	const scale = useSpring(1, springValues);
	const opacity = useSpring(0);
	const rotateFigcaption = useSpring(0, { stiffness: 350, damping: 30, mass: 1 });
	const [lastY, setLastY] = useState(0);

	const handleMouse = (e) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const offsetX = e.clientX - rect.left - rect.width / 2;
		const offsetY = e.clientY - rect.top - rect.height / 2;
		rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
		rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
		x.set(e.clientX - rect.left);
		y.set(e.clientY - rect.top);
		const velocityY = offsetY - lastY;
		rotateFigcaption.set(-velocityY * 0.6);
		setLastY(offsetY);
	};

	const handleMouseEnter = () => {
		scale.set(scaleOnHover);
		opacity.set(1);
	};

	const handleMouseLeave = () => {
		opacity.set(0);
		scale.set(1);
		rotateX.set(0);
		rotateY.set(0);
		rotateFigcaption.set(0);
	};

	return (
		<figure
			ref={ref}
			className="relative flex flex-col items-center justify-center border border-gray-300 rounded-lg"
			style={{ height: containerHeight, width: containerWidth }}
			onMouseMove={handleMouse}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<motion.div
				className="relative flex items-center justify-center [transform-style:preserve-3d] p-4"
				style={{ width: '100%', height: '100%', rotateX, rotateY, scale }}
			>
				{displayOverlayContent && overlayContent && (
					<motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">{overlayContent}</motion.div>
				)}
			</motion.div>

			{showTooltip && (
				<motion.figcaption
					className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
					style={{ x, y, opacity, rotate: rotateFigcaption }}
				>
					{captionText}
				</motion.figcaption>
			)}
		</figure>
	);
};

export const LeftToRightAnimation = ({ children, delay = 0 }) => {
	const variants = {
		hidden: { x: -100, opacity: 0 },
		visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut', delay } },
	};

	return (
		<motion.div variants={variants} initial="hidden" animate="visible" className="w-full">
			{children}
		</motion.div>
	);
};

export const InitionAnimation = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	);
};

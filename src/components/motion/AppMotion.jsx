import { motion } from 'framer-motion';

export const LeftToRightAnimation = ({ children, delay = 0 }) => {
	const variants = {
		hidden: { x: -100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: { duration: 0.6, ease: 'easeInOut', delay: delay },
		},
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
			initial={{ opacity: 0 }} // Inicia con opacidad 0
			animate={{ opacity: 1 }} // Se anima a opacidad 1
			transition={{ duration: 0.5, ease: 'easeInOut' }} // Duración más corta (0.5 segundos)
			whileInView={{ opacity: 1 }} // Aparece cuando está en vista
			viewport={{ once: true }} // Solo se ejecuta una vez
		>
			{children} {/* Aquí se renderizan los hijos dentro del contenedor animado */}
		</motion.div>
	);
};

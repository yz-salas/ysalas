import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

const SplitText = ({
	text = '',
	className = '',
	delay = 100,
	animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
	animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
	easing = 'easeOutCubic',
	threshold = 0.1,
	rootMargin = '-100px',
	textAlign = 'center',
	onLetterAnimationComplete,
}) => {
	const words = text.split(' ').map((word) => word.split(''));
	const letters = words.flat();
	const [inView, setInView] = useState(false);
	const ref = useRef();
	const animatedCount = useRef(0);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					// Reiniciar la animación cuando entra en vista
					animatedCount.current = 0; // Reinicia el contador de letras animadas
				} else {
					setInView(false); // Restablece el estado a false cuando sale
				}
			},
			{ threshold, rootMargin }
		);

		observer.observe(ref.current);

		return () => observer.disconnect();
	}, [threshold, rootMargin]);

	const key = inView ? `in-${Date.now()}` : `out-${Date.now()}`;

	const springs = useSprings(
		letters.length,
		letters.map((_, i) => ({
			from: animationFrom,
			to: animationTo,
			delay: i * delay,
			config: { easing },
			reset: inView, // Resetea la animación al volver a entrar
		}))
	);

	return (
		<p
			ref={ref}
			className={`split-parent overflow-hidden inline min-h-[400px] flex justify-center items-center outline-text-white-1 text-[60px] ${className}`}
			style={{ textAlign, whiteSpace: 'normal', wordWrap: 'break-word' }}
		>
			{words.map((word, wordIndex) => (
				<span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
					{word.map((letter, letterIndex) => {
						const index = words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) + letterIndex;

						return (
							<animated.span key={index} style={springs[index]} className="inline-block transition-opacity transform will-change-transform">
								{letter}
							</animated.span>
						);
					})}
					<span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
				</span>
			))}
		</p>
	);
};

export default SplitText;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
	children,
	scrollContainerRef,
	enableBlur = true,
	baseOpacity = 0.1,
	baseRotation = 3,
	blurStrength = 4,
	containerClassName = '',
	textClassName = '',
	rotationEnd = 'bottom bottom',
	wordAnimationEnd = 'bottom bottom',
	className,
}) => {
	const containerRef = useRef(null);

	const processChildren = (nodes) => {
		if (!nodes) return null;

		return React.Children.map(nodes, (child, index) => {
			if (typeof child === 'string') {
				return child.split(/(\s+)/).map((word, i) =>
					word.match(/^\s+$/) ? (
						word
					) : (
						<span className="inline-block word" key={`${index}-${i}`}>
							{word}
						</span>
					)
				);
			} else if (React.isValidElement(child)) {
				return React.cloneElement(child, {
					key: index,
					children: processChildren(child.props.children),
				});
			}
			return child;
		});
	};

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const scroller = scrollContainerRef?.current || window;

		gsap.fromTo(
			el,
			{ transformOrigin: '0% 50%', rotate: baseRotation },
			{
				ease: 'none',
				rotate: 0,
				scrollTrigger: {
					trigger: el,
					scroller,
					start: 'top bottom',
					end: rotationEnd,
					scrub: true,
				},
			}
		);

		const wordElements = el.querySelectorAll('.word');

		gsap.fromTo(
			wordElements,
			{ opacity: baseOpacity, willChange: 'opacity' },
			{
				ease: 'none',
				opacity: 1,
				stagger: 0.05,
				scrollTrigger: {
					trigger: el,
					scroller,
					start: 'top bottom-=20%',
					end: wordAnimationEnd,
					scrub: true,
				},
			}
		);

		if (enableBlur) {
			gsap.fromTo(
				wordElements,
				{ filter: `blur(${blurStrength}px)` },
				{
					ease: 'none',
					filter: 'blur(0px)',
					stagger: 0.05,
					scrollTrigger: {
						trigger: el,
						scroller,
						start: 'top bottom-=20%',
						end: wordAnimationEnd,
						scrub: true,
					},
				}
			);
		}

		return () => {
			ScrollTrigger.getById(el)?.kill();
		};
	}, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

	return (
		<div ref={containerRef} className={`relative ${containerClassName}`}>
			<div className={`${className} ${textClassName}`}>{processChildren(children)}</div>
		</div>
	);
};

export default ScrollReveal;

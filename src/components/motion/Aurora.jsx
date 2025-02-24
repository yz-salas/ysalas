import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;

out vec4 fragColor;

float snoise(vec2 v){
    const vec4 C = vec4(
        0.211324865405187, 0.366025403784439,
        -0.577350269189626, 0.024390243902439
    );
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);

    vec3 p = mod(((i.y + vec3(0.0, i1.y, 1.0)) * 34.0 + 1.0) * (i.x + vec3(0.0, i1.x, 1.0)), 289.0);
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m * m * m;

    vec3 x = 2.0 * fract(p * 0.024390243902439) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);

    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution;

    vec3 rampColor = mix(
        mix(uColorStops[0], uColorStops[1], smoothstep(0.0, 0.5, uv.x)),
        uColorStops[2],
        smoothstep(0.5, 1.0, uv.x)
    );

    float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
    height = exp(height);
    height = (uv.y * 2.0 - height + 0.2);

    fragColor.rgb = 0.6 * height * rampColor;
    fragColor.a = 1.0;
}
`;

export default function Aurora({ colorStops = ['#3A29FF', '#FF94B4', '#FF3232'], amplitude = 1.0, children }) {
	const propsRef = useRef({ colorStops, amplitude });
	const ctnDom = useRef(null);

	useEffect(() => {
		const ctn = ctnDom.current;
		if (!ctn) return;

		const renderer = new Renderer();
		const gl = renderer.gl;
		gl.clearColor(0, 0, 0, 1);

		const resize = () => {
			const width = ctn.offsetWidth;
			const height = ctn.offsetHeight;
			renderer.setSize(width, height);
			program.uniforms.uResolution.value = [width, height];
		};
		window.addEventListener('resize', resize);

		const geometry = new Triangle(gl);
		if (geometry.attributes.uv) delete geometry.attributes.uv;

		const colorStopsArray = colorStops.map((hex) => {
			const c = new Color(hex);
			return [c.r, c.g, c.b];
		});

		const program = new Program(gl, {
			vertex: VERT,
			fragment: FRAG,
			uniforms: {
				uTime: { value: 0 },
				uAmplitude: { value: amplitude },
				uColorStops: { value: colorStopsArray },
				uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
			},
		});

		const mesh = new Mesh(gl, { geometry, program });
		ctn.appendChild(gl.canvas);

		let animateId = 0;
		const update = (t) => {
			animateId = requestAnimationFrame(update);
			const { time = t * 0.01, speed = 1.0 } = propsRef.current;
			program.uniforms.uTime.value = time * speed * 0.1;
			program.uniforms.uAmplitude.value = propsRef.current.amplitude;
			program.uniforms.uColorStops.value = propsRef.current.colorStops.map((hex) => {
				const c = new Color(hex);
				return [c.r, c.g, c.b];
			});
			renderer.render({ scene: mesh });
		};
		animateId = requestAnimationFrame(update);

		resize();

		return () => {
			cancelAnimationFrame(animateId);
			window.removeEventListener('resize', resize);
			if (ctn && gl.canvas.parentNode === ctn) {
				ctn.removeChild(gl.canvas);
			}
			gl.getExtension('WEBGL_lose_context')?.loseContext();
		};
	}, [colorStops, amplitude]);

	return (
		<div ref={ctnDom} className="w-full h-full  absolute inset-0">
			{children}
		</div>
	);
}

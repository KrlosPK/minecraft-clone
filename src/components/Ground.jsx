import { usePlane } from '@react-three/cannon';
import { useStore } from '../hooks/useStore';
import { groundTexture } from '../images/textures';

export function Ground() {
	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
		position: [0, -0.5, 0]
	}));

	const [addCube] = useStore((state) => [state.addCube]);

	groundTexture.repeat.set(200, 200);

	const handleClickGround = (event) => {
		event.stopPropagation();
		const [x, y, z] = Object.values(event.point).map((n) => Math.ceil(n));
		addCube(x, y, z);
	};

	return (
		<mesh onClick={handleClickGround} ref={ref}>
			<planeGeometry attach='geometry' args={[200, 200]} />
			<meshStandardMaterial attach='material' map={groundTexture} />
		</mesh>
	);
}

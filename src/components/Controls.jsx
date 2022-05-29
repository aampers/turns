import { useRef } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

// todo make TS less mad
const Controls = () => {
	const controls = useRef();
	const { camera, gl } = useThree();
	useFrame(() => controls.current.update());
	return (
		<orbitControls
			ref={controls}
			args={[camera, gl.domElement]}
			enableZoom={true}
			maxDistance={100}
			enableDamping
			dampingFactor={0.125}
			maxPolarAngle={Math.PI / 2 - 0.001}
			enablePan={false}
		/>
	);
};

export default Controls;

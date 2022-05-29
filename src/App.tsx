import { Canvas } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Color } from 'three';
import Controls from './components/Controls';
import { spaces, xLength, yLength } from './maps';

const background = '#272730';

const Map = ({ ...props }) => {
	const group = useRef();
	const [selection, setSelection] = useState(null);

	const onClick = (space) => {
		setSelection(space);
	};

	return (
		<group
			ref={group}
			{...props}
			dispose={null}
			position={[-Math.floor(xLength / 2), 0, -Math.floor(yLength / 2)]}>
			{spaces.map((space, i) => {
				let material = space.material.clone();
				if (space === selection) {
					material.emissive = new Color('#55a');
					material.emissiveIntensity = 1;
				}
				return (
					<mesh
						key={`space-${i}`}
						geometry={space.geometry}
						material={material}
						onClick={() => onClick(space)}
					/>
				);
			})}
		</group>
	);
};

const App = () => {
	return (
		<div className='container' style={{ width: '100%', height: '100vh' }}>
			<Canvas camera={{ position: [0, 5, -5] }} style={{ background }}>
				<Controls />
				<fog attach='fog' color='#666670' near={1} far={50} />
				<gridHelper args={[100, 100, '#49495a', '#73738c']} />
				<Map />
				<ambientLight intensity={0.6} />
				<directionalLight
					intensity={0.4}
					position={[25, 20, 25]}
					shadow={{ mapSize: [500, 500] }}
				/>
			</Canvas>
		</div>
	);
};

export default App;

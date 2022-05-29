import { BufferAttribute, BufferGeometry, Material } from 'three';
import { mergeBufferGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type Triangle from '../Triangle';

class Space {
	geometry: BufferGeometry;
	material: Material;
	position: number[];

	constructor([triangleA, triangleB]: Triangle[]) {
		const { geometry: geometryA, material, square } = triangleA;
		const { geometry: geometryB } = triangleB;

		const spaceGeometry = mergeBufferGeometries([geometryA, geometryB], false);

		this.geometry = spaceGeometry;
		this.material = material;
		this.position = square.position;
	}
}

export default Space;

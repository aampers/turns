import { BufferAttribute, BufferGeometry, Material } from 'three';
import { mergeBufferGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type Triangle from '../Triangle';

class Space {
	geometry: BufferGeometry;
	material: Material;
	position: BufferAttribute;

	constructor([triangleA, triangleB]: Triangle[]) {
		const { geometry: geometryA, material, position } = triangleA;
		const { geometry: geometryB } = triangleB;

		const spaceGeometry = mergeBufferGeometries([geometryA, geometryB], false);

		this.geometry = spaceGeometry;
		this.material = material;
		this.position = position;
	}
}

export default Space;

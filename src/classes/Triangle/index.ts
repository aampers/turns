import { BufferAttribute, BufferGeometry, Material, MeshStandardMaterial } from 'three';

export interface Square {
	coordinates: number[][];
	position: number[];
}

interface TriangleOptions {
	coordinates: number[][];
	position: BufferAttribute;
	square: Square;
	color?: string;
	material?: Material;
}

class Triangle {
	coordinates: number[][];
	position: BufferAttribute;
	square: Square;
	material?: Material;
	geometry?: BufferGeometry;

	constructor({
		coordinates: [a, b, c],
		square,
		color = 'CornflowerBlue',
		material = new MeshStandardMaterial({ color })
	}: TriangleOptions) {
		const triangleGeometry = new BufferGeometry();
		const triangleMaterial = material;
		const vertices = new Float32Array([...a, ...b, ...c]);
		const position = new BufferAttribute(vertices, 3);

		triangleGeometry.setAttribute('position', position);
		triangleGeometry.computeVertexNormals();

		this.coordinates = [a, b, c];
		this.geometry = triangleGeometry;
		this.material = triangleMaterial;
		this.position = position;
		this.square = square;
	}
}

export default Triangle;

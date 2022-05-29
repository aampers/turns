import { separateSpaces, separateTriangles } from '../utils/triangles';
import { buildSquares } from '../utils/squares';
import type Triangle from '../classes/Triangle';
import Space from '../classes/Space';

export const buildPoints = (map: number[][]) => {
	const yLength = map.length;
	const xLength = map[0].length;
	const points = [];

	for (let y = 0; y < yLength; y += 1) {
		for (let x = 0; x < xLength; x += 1) {
			points.push([x, map[y][x], y]);
		}
	}
	return points;
};

const map0 = [
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	[0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0],
	[0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0],
	[0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0],
	[0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0],
];

const map1 = [
	[0, 0, 0, 0, 0, 0, 0],
	[0, 3, 3, 3, 3, 3, 0],
	[0, 3, 6, 6, 6, 3, 0],
	[0, 3, 6, 9, 6, 3, 0],
	[0, 3, 6, 6, 6, 3, 0],
	[0, 3, 3, 3, 3, 3, 0],
	[0, 0, 0, 0, 0, 0, 0],
];

const map2 = [
	[0, 0, 0, 1, 2, 1, 1],
	[0, 0, 0, 0, 1, 2, 2],
	[0, 0, 0, 0, 1, 3, 2],
	[4, 0, 1, 0, 0, 1, 1],
	[4, 2, 1, 1, 0, 0, 0],
	[4, 2, 1, 0, 0, 0, 1],
	[4, 0, 0, 0, 0, 0, 0],
];

const map3 = [
	[0, 0, 0, 0, 0, 0, 0],
	[0, 3, 3, 3, 3, 3, 0],
	[0, 3, 6, 6, 6, 3, 0],
	[0, 3, 6, 9, 6, 3, 0],
	[0, 3, 6, 0, 0, 0, 0],
	[0, 3, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
];

const map4 = [
	[0, 0, 0, 0, 0, 0, 0],
	[0, 3, 3, 3, 3, 3, 0],
	[0, 3, 6, 6, 6, 0, 0],
	[0, 3, 6, 9, 0, 0, 0],
	[0, 3, 6, 6, 0, 0, 0],
	[0, 3, 3, 3, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
];

// adjust elevation
const map = map2.map((row) => row.map((y) => 0.01 + y / 2));

const points = buildPoints(map);

export const yLength = map.length;
export const xLength = map[0].length;

export const squares = buildSquares(points, xLength, yLength);

export const triangles: Triangle[] = squares
	.map((points) => points.map(([x, y, z]) => [x, y, z]))
	.flatMap(separateTriangles);

export const spaces: Space[] = squares
	.map((points) => points.map(([x, y, z]) => [x, y, z]))
	.flatMap(separateSpaces);

// const edges

import Space from '../../classes/Space';
import Triangle from '../../classes/Triangle';

export const getIsolatedPointIndex = (square: number[][]) => {
	// we're only interested in the y coord, so we'll start by mapping to it
	const yCoords = square.map(([, y]) => y);

	const candidates = [];
	for (let index = 0; index < yCoords.length; index++) {
		const yCoord = yCoords[index];
		const indexOf = yCoords.indexOf(yCoord);
		const lastIndexOf = yCoords.lastIndexOf(yCoord);

		if (
			// if we have an isolated point
			indexOf === lastIndexOf
		) {
			candidates.push(indexOf);
			continue;
		} else if (
			// if we have 2 adjacent similar coords, we want the latter
			indexOf ===
			lastIndexOf - 1
		) {
			return lastIndexOf;
		} else if (indexOf === 0 && lastIndexOf === 3) {
			if (new Set(yCoords).size === 2)
				return yCoords.at(yCoords.indexOf(Math.max(...yCoords)) - 1);
			return index;
		}
	}

	if (candidates.length === 4) {
		console.log('it DOES happen!', { yCoords });
		return Math.max(...yCoords);
	} else return candidates[0];
};

export const separateTriangles = (
	coordinatesOfSquare: number[][]
): Triangle[] => {
	const isolatedPointIndex = getIsolatedPointIndex(coordinatesOfSquare);
	const [a, b, c, d] = coordinatesOfSquare;

	let coordinatesA;
	let coordinatesB;

	switch (isolatedPointIndex) {
		case 1:
		case 3: {
			coordinatesA = [a, b, c];
			coordinatesB = [c, d, a];
			break;
		}
		default: {
			coordinatesA = [b, c, d];
			coordinatesB = [d, a, b];
		}
	}

	const square = { coordinates: coordinatesOfSquare, position: [a[0], a[2]] };

	const color = `hsla(${180 + a[0] * 15 + a[2] * 10}, 50%, 70%, 1)`;

	return [
		new Triangle({ coordinates: coordinatesA, square, color }),
		new Triangle({ coordinates: coordinatesB, square, color }),
	];
};

export const separateSpaces = (coordinatesOfSquare: number[][]) => {
	const triangles = separateTriangles(coordinatesOfSquare);
	return new Space(triangles);
};

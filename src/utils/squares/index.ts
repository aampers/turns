export const buildSquares = (
	points: number[][],
	xLength: number = Math.sqrt(points.length),
	yLength: number = xLength
): number[][][] => {
	const squares = [];

	for (let xIndex = 0; xIndex < xLength - 1; xIndex++) {
		for (let yIndex = 0; yIndex < yLength - 1; yIndex++) {
			squares.push([
				points[xLength * yIndex + xIndex],
				points[xLength * yIndex + xLength + 1 * xIndex],
				points[xLength * yIndex + xLength + 1 * (xIndex + 1)],
				points[xLength * yIndex + xIndex + 1]
			]);
		}
	}

	return squares;
};

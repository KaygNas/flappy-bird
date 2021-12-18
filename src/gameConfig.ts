import { PxPerSecond, PxPerSquareSecond } from './modules/Unit'

export const WINDOW_SIZE = {
	WIDTH: 800,
	HEIGHT: 400,
}

export const BIRD = {
	SPEED_H: new PxPerSecond(120),
	SPEED_V: new PxPerSecond(0),
	SPEED_FLAP: new PxPerSecond(120),
	LEFT: 50,
	TOP: WINDOW_SIZE.HEIGHT / 2,
	WIDTH: 30,
	HEIGHT: 30,
	COLOR: '#ff0000',
}

export const MAP = {
	GRAVITY: new PxPerSquareSecond(280),
	PIPE_WIDTH: 80,
	GAP: 140,
}

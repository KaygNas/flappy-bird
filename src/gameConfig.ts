import { PxPerSecond, PxPerSquareSecond, Second } from './modules/Unit'

const TIME_FALL_TO_BOTTOM_FROM_TOP = new Second(1.5)
export const WINDOW_SIZE = {
	WIDTH: window.innerWidth,
	HEIGHT: window.innerHeight,
}

export const MAP = {
	GRAVITY: new PxPerSquareSecond(
		(WINDOW_SIZE.HEIGHT * 2) / TIME_FALL_TO_BOTTOM_FROM_TOP.value ** 2,
	),
	PIPE_WIDTH: 80,
	GAP: 140,
	GAP_BETWEEN_TWO_PIPE: WINDOW_SIZE.HEIGHT / 2.5,
}

export const BIRD = {
	SPEED_H: new PxPerSecond(120),
	SPEED_V: new PxPerSecond(0),
	SPEED_FLAP: new PxPerSecond(MAP.GRAVITY.value / 2.5),
	LEFT: 50,
	TOP: WINDOW_SIZE.HEIGHT / 2,
	WIDTH: 30,
	HEIGHT: 30,
	COLOR: '#ff0000',
}

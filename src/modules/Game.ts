import Bird from './Bird'
import BootScreen from './BootScreen'
import Map from './Map'
import * as GAME_CONFIG from './gameConfig'

enum GAME_STATUS {
	READY,
	STAETED,
	GAME_OVER,
}

interface ScreenSize {
	width: number
	height: number
}

export default class Game {
	private bird: Bird
	private map: Map
	private bootScreen: BootScreen
	private score: number
	private status: GAME_STATUS

	constructor(screenSize: ScreenSize) {
		this.bird = new Bird(GAME_CONFIG.BIRD.SPEED_V, GAME_CONFIG.BIRD.SPEED_H)
		this.map = new Map(screenSize.width, screenSize.height)
		this.bootScreen = new BootScreen(this.start.bind(this), screenSize.width, screenSize.height)
		this.score = 0
		this.status = GAME_STATUS.STAETED
	}

	start(): void {
		// TODO
		this.render()
	}

	playing(): void {
		// TODO
		this.render()
	}

	gameOver(): void {
		// TODO
		this.render()
	}

	private render(): void {
		// TODO: render all element to the canvas
	}
}

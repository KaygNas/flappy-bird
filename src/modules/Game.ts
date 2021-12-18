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
	private ctx: CanvasRenderingContext2D

	constructor(screenSize: ScreenSize, ctx: CanvasRenderingContext2D) {
		this.ctx = ctx
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
		this.map.render(this.ctx)
		this.bird.render(this.ctx)
		// TODO: render all element to the canvas
	}
}

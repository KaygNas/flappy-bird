import Bird from './Bird'
import BootScreen from './BootScreen'
import Map from './Map'
import Animation from './Animation'
import * as GAME_CONFIG from './gameConfig'
import { Second } from './Unit'

export enum GAME_STATUS {
	READY = 'ready',
	PLAYING = 'playing',
	PAUSED = 'paused',
	GAME_OVER = 'gameOver',
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
	private ctx: CanvasRenderingContext2D
	private anim: Animation
	status: GAME_STATUS

	constructor(screenSize: ScreenSize, ctx: CanvasRenderingContext2D) {
		this.ctx = ctx
		this.bird = new Bird(GAME_CONFIG.BIRD.SPEED_V, GAME_CONFIG.BIRD.SPEED_H)
		this.map = new Map(screenSize.width, screenSize.height)
		this.anim = new Animation(this.playing.bind(this))
		this.bootScreen = new BootScreen(this.start.bind(this), screenSize.width, screenSize.height)
		this.score = 0
		this.status = GAME_STATUS.READY
	}

	start(): void {
		this.status = GAME_STATUS.PLAYING
		this.anim.run()
	}

	playing(time: Second): void {
		this.map.moveOn(this.bird.speedHorizontal, time)
		this.render()
	}

	pause(): void {
		this.status = GAME_STATUS.PAUSED
		this.anim.stop()
	}

	gameOver(): void {
		// TODO
		this.render()
	}

	private render(): void {
		// TODO: render all element to the canvas
		this.map.render(this.ctx)
		this.bird.render(this.ctx)
	}
}

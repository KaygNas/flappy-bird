import Bird from './Bird'
import BootScreen from './BootScreen'
import Map from './Map'
import Animation from './Animation'
import * as GAME_CONFIG from '../gameConfig'
import { Second } from './Unit'
import Block from './Block'

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
	private screenSize: ScreenSize
	status: GAME_STATUS

	constructor(screenSize: ScreenSize, ctx: CanvasRenderingContext2D) {
		this.screenSize = screenSize
		this.ctx = ctx
		this.bird = new Bird(GAME_CONFIG.BIRD.SPEED_V, GAME_CONFIG.BIRD.SPEED_H)
		this.map = new Map(screenSize.width, screenSize.height)
		this.anim = new Animation(this.playing.bind(this))
		this.bootScreen = new BootScreen(this.start.bind(this), screenSize.width, screenSize.height)
		this.score = 0
		this.status = GAME_STATUS.READY
	}

	start(): void {
		console.log('start')
		this.status = GAME_STATUS.PLAYING
		this.anim.run()
	}

	restart(): void {
		console.log('restart')
		this.resetGame()
		this.start()
	}

	playing(time: Second): void {
		if (this.status === GAME_STATUS.GAME_OVER) return

		this.bird.drop(this.map.grvaity, time)
		this.bird.fly(time, this.map)
		this.render()

		if (this.map.isCollidedAnyPipe(this.bird)) {
			return this.gameOver()
		}
	}

	pause(): void {
		console.log('pause')
		this.status = GAME_STATUS.PAUSED
		this.anim.stop()
	}

	gameOver(): void {
		console.log('gameOver')
		this.pause()
		this.status = GAME_STATUS.GAME_OVER
	}

	birdFlap(): void {
		this.bird.flap()
	}

	private resetGame(): void {
		const screenSize = this.screenSize
		this.bird = new Bird(GAME_CONFIG.BIRD.SPEED_V, GAME_CONFIG.BIRD.SPEED_H)
		this.map = new Map(screenSize.width, screenSize.height)
		this.bootScreen = new BootScreen(this.start.bind(this), screenSize.width, screenSize.height)
		this.score = 0
	}

	private render(): void {
		// TODO: render all element to the canvas
		this.map.render(this.ctx)
		this.bird.render(this.ctx)
	}
}

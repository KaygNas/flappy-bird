import Bird from './Bird'
import BootScreen from './BootScreen'
import Map from './Map'
import Animation from './Animation'
import * as GAME_CONFIG from '../gameConfig'
import { Second } from './Unit'

export enum GAME_STATUS {
	READY = 'ready',
	PLAYING = 'playing',
	PAUSED = 'paused',
	GAME_OVER = 'gameOver',
}

export default class Game {
	private bird: Bird
	private map: Map
	private bootScreen: BootScreen
	private score: number
	private ctx: CanvasRenderingContext2D
	private anim: Animation
	private canvasEle: HTMLCanvasElement
	private status: GAME_STATUS

	constructor(canvasEle: HTMLCanvasElement) {
		this.canvasEle = canvasEle
		const ctx = canvasEle.getContext('2d')
		if (!ctx) throw new Error('can not get canvas context 2d')
		this.ctx = ctx
		this.bird = new Bird(GAME_CONFIG.BIRD.SPEED_V, GAME_CONFIG.BIRD.SPEED_H)
		this.map = new Map(canvasEle.width, canvasEle.height)
		this.anim = new Animation(this.playing.bind(this))
		this.bootScreen = new BootScreen(canvasEle.width, canvasEle.height)
		this.score = 0
		this.status = GAME_STATUS.READY

		this.registerListener()
		this.bootScreen.boot()
		this.render()
	}

	start(): void {
		console.log('start')
		this.status = GAME_STATUS.PLAYING
		this.bootScreen.hide()
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
		this.bird.fly(this.map, time)
		this.render()

		if (this.map.isCollided(this.bird)) {
			return this.gameOver()
		}
	}

	pause(): void {
		console.log('pause')
		this.status = GAME_STATUS.PAUSED
		this.bootScreen.showPause()
		this.anim.stop()
	}

	gameOver(): void {
		this.pause()
		this.status = GAME_STATUS.GAME_OVER
		this.score = Math.round(this.map.totalDistance)
		this.bootScreen.showGameover(this.score)
		this.render()
		console.log('gameOver, your score:', this.score)
	}

	birdFlap(): void {
		this.bird.flap()
	}

	private resetGame(): void {
		const canvasEle = this.canvasEle
		this.bird = new Bird(GAME_CONFIG.BIRD.SPEED_V, GAME_CONFIG.BIRD.SPEED_H)
		this.map = new Map(canvasEle.width, canvasEle.height)
		this.bootScreen = new BootScreen(canvasEle.width, canvasEle.height)
		this.score = 0
		this.registerListener()
	}

	private render(): void {
		this.map.render(this.ctx)
		this.bird.render(this.ctx)
		this.bootScreen.render(this.ctx)
	}

	private registerListener() {
		this.bootScreen.onStart(this.start.bind(this))
		this.bootScreen.onRestart(this.restart.bind(this))
		this.canvasEle.onclick = (e) => {
			if (this.status === GAME_STATUS.PLAYING) this.birdFlap()
			else this.bootScreen.click(e, this.status)
		}
	}
}

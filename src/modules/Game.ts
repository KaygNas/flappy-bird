import Bird from './Bird'
import BootScreen from './BootScreen'
import Map from './Map'
import Animation from './Animation'
import * as GAME_CONFIG from '../gameConfig'
import { Second } from './Unit'
import { Dashboard } from './Dashborad'

export enum GAME_STATUS {
	READY = 'ready',
	PLAYING = 'playing',
	PAUSED = 'paused',
	GAME_OVER = 'gameOver',
	GAME_WIN = '游戏通关',
}

export default class Game {
	private 小鸟: Bird
	private 地图: Map
	private 启动屏幕: BootScreen
	private 状态板: Dashboard
	private 分数: number
	private 上下文: CanvasRenderingContext2D
	private 动画: Animation
	private 画布元素: HTMLCanvasElement
	private 状态: GAME_STATUS

	constructor(画布元素: HTMLCanvasElement) {
		this.画布元素 = 画布元素
		const 上下文 = 画布元素.getContext('2d')
		if (!上下文) throw new Error('can not get canvas context 2d')
		this.上下文 = 上下文
		this.小鸟 = new Bird(GAME_CONFIG.小鸟.垂直速度, GAME_CONFIG.小鸟.水平速度)
		this.地图 = new Map(画布元素.width, 画布元素.height)
		this.动画 = new Animation(this.playing.bind(this))
		this.启动屏幕 = new BootScreen(画布元素.width, 画布元素.height)
		this.状态板 = new Dashboard(画布元素.width, 画布元素.height)
		this.分数 = 0
		this.状态 = GAME_STATUS.READY

		this.registerListener()
		this.启动屏幕.boot()
		this.render()
	}

	start(): void {
		console.log('start')
		this.状态 = GAME_STATUS.PLAYING
		this.启动屏幕.hide()
		this.动画.run()
	}

	restart(): void {
		console.log('restart')
		this.resetGame()
		this.start()
	}

	playing(时间: Second): void {
		if (this.状态 === GAME_STATUS.GAME_OVER) return

		this.小鸟.drop(this.地图.重力, 时间)
		this.小鸟.fly(this.地图, 时间)
		this.分数 = this.calcScore()
		this.状态板.setScore(this.分数)
		this.render()

		if (this.地图.isCollided(this.小鸟)) {
			return this.gameOver()
		}

		if (this.分数 >= GAME_CONFIG.游戏配置.胜利分数) {
			return this.gameWin()
		}
	}

	pause(): void {
		console.log('pause')
		this.状态 = GAME_STATUS.PAUSED
		this.启动屏幕.showPause()
		this.动画.stop()
	}

	calcScore(): number {
		return Math.round(this.地图.总距离)
	}

	gameOver(): void {
		this.pause()
		this.状态 = GAME_STATUS.GAME_OVER
		this.启动屏幕.showGameover(this.分数)
		this.render()
		console.log('gameOver, your score:', this.分数)
	}

	gameWin(): void {
		this.pause()
		this.状态 = GAME_STATUS.GAME_WIN
		this.启动屏幕.showGameWin(this.分数)
		this.render()
		console.log('gameWin, your score:', this.分数)
	}

	birdFlap(): void {
		this.小鸟.flap()
	}

	private resetGame(): void {
		const 画布元素 = this.画布元素
		this.小鸟 = new Bird(GAME_CONFIG.小鸟.垂直速度, GAME_CONFIG.小鸟.水平速度)
		this.地图 = new Map(画布元素.width, 画布元素.height)
		this.启动屏幕 = new BootScreen(画布元素.width, 画布元素.height)
		this.分数 = 0
		this.registerListener()
	}

	private render(): void {
		this.地图.render(this.上下文)
		this.小鸟.render(this.上下文)
		this.启动屏幕.render(this.上下文)
		this.状态板.render(this.上下文)
	}

	private registerListener() {
		this.启动屏幕.onStart(this.start.bind(this))
		this.启动屏幕.onRestart(this.restart.bind(this))
		this.画布元素.onclick = (e) => {
			if (this.状态 === GAME_STATUS.PLAYING) this.birdFlap()
			else this.启动屏幕.click(e, this.状态)
		}
	}
}

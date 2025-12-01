import { Second } from './Unit'

type AnimFn = (时间戳: number) => void
type RenderFn = (时间: Second) => void

export default class Animation {
	private 动画ID?: number
	private 上次渲染时间?: number
	private 渲染函数: RenderFn
	constructor(函数: RenderFn) {
		this.渲染函数 = 函数
	}

	run() {
		const 包装函数: AnimFn = (时间戳: number) => {
			const _时间 = this.上次渲染时间 ? 时间戳 - this.上次渲染时间 : 0
			const 时间 = new Second(_时间 / 1000)
			this.上次渲染时间 = 时间戳
			this.渲染函数(时间)
			this.动画ID = window.requestAnimationFrame(包装函数)
		}

		this.动画ID = window.requestAnimationFrame(包装函数)
	}

	stop() {
		if (this.动画ID) {
			window.cancelAnimationFrame(this.动画ID)
			this.动画ID = undefined
			this.上次渲染时间 = undefined
		}
	}
}

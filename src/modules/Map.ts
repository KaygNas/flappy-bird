import Block from './Block'
import { Element, ElementInfo } from './Element'
import { 地图 as 地图配置, 窗口尺寸 } from '../gameConfig'
import { default as PipePairFactory, PipePair } from './PipePairFactory'
import { PxPerSecond, Second, PxPerSquareSecond } from './Unit'

export default class Map extends Element {
	private 管道对数组: PipePair[]
	private 管道宽度: number
	private 间隙: number
	private 管道间间距: number
	重力: PxPerSquareSecond
	总距离: number

	constructor(宽度: number, 高度: number) {
		const 信息 = {
			宽: 宽度,
			高: 高度,
			上: 0,
			左: 0,
			颜色: '#e3e3e3',
		}
		super(信息)
		this.管道对数组 = []
		this.管道宽度 = 地图配置.管道宽度
		this.间隙 = 地图配置.间隙
		this.管道间间距 = 地图配置.两管道间距
		this.重力 = 地图配置.重力
		this.总距离 = 0
		this.fillPipePairs(窗口尺寸.宽度 / 3)
	}

	moveOn(速度: PxPerSecond, 时间: Second): void {
		// record the distance that has been moved
		const 距离 = 速度.值 * 时间.值
		this.总距离 += 距离
		// move all pipePair backward
		this.管道对数组.forEach(([管道1, 管道2]) => {
			管道1.左 -= 距离
			管道2.左 -= 距离
		})
	}

	changeStyle(样式: Partial<ElementInfo>): void {
		Object.assign(this, 样式)
	}

	render(ctx: CanvasRenderingContext2D): void {
		this.fillPipePairs()
		super.render(ctx)
		this.管道对数组.forEach((管道们) => {
			管道们.forEach((管道) => 管道.render(ctx))
		})
	}

	isCollided(方块: Block) {
		return this.isCollidedAnyPipe(方块) || this.isCollidedMapBoundary(方块)
	}

	private isCollidedMapBoundary(方块: Block) {
		return !this.isContain(方块)
	}

	private isCollidedAnyPipe(方块: Block): boolean {
		return this.管道对数组.some((管道对) => {
			return 管道对.some((管道) => {
				return 管道.isCollidedWith(方块)
			})
		})
	}

	private fillPipePairs(偏移: number = 0) {
		const 地图宽度 = this.宽 - 偏移
		const 地图高度 = this.高
		const 管道宽度 = this.管道宽度
		const 管道间隙 = this.间隙
		const 管道间间距 = this.管道间间距
		const 长度 = this.管道对数组.length

		// find pipes on the screen and figure out how many pipes are needed
		let 屏幕上第一个管道索引: number = 长度
		let 屏幕上最后一个管道索引: number = 长度
		for (let 索引 = 0; 索引 < 长度; 索引++) {
			const [管道] = this.管道对数组[索引]
			if (管道.左 + 管道.宽 >= 0) {
				屏幕上第一个管道索引 = 索引
				break
			}
		}

		// if there are nothing on the screen
		// then the reset width is the screen width
		// else the reset width is counted from the last one
		const [最后一个管道] =
			屏幕上第一个管道索引 < 屏幕上最后一个管道索引
				? this.管道对数组[屏幕上最后一个管道索引 - 1]
				: []
		const 最后一个管道右边 = 最后一个管道 ? 最后一个管道.左 + 最后一个管道.宽 : 0
		const 剩余宽度 = 地图宽度 - 最后一个管道右边 > 0 ? 地图宽度 - 最后一个管道右边 : 0
		const 需要的管道对数量 = Math.ceil(剩余宽度 / (管道宽度 + 管道间隙))
		const 屏幕上的管道对 = this.管道对数组.slice(屏幕上第一个管道索引, 屏幕上最后一个管道索引)
		const 需要的管道对 = new Array(需要的管道对数量)
			.fill(0)
			.map((_, 索引) =>
				PipePairFactory.create(
					最后一个管道右边 + (管道间隙 + 管道宽度) * (索引 + 1) - 管道宽度 + 偏移,
					管道宽度,
					地图高度,
					管道间间距,
				),
			)
		this.管道对数组 = 屏幕上的管道对.concat(需要的管道对)
	}
}

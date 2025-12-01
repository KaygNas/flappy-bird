import Block from './Block'
import { 小鸟 } from '../gameConfig'
import Map from './Map'
import { PxPerSecond, PxPerSquareSecond, Second } from './Unit'
import birdImgSrc from '@/assets/bird.png'
import { throttle } from 'lodash'
export default class Bird extends Block {
	垂直速度: PxPerSecond
	水平速度: PxPerSecond

	constructor(垂直速度: PxPerSecond, 水平速度: PxPerSecond) {
		super({
			上: 小鸟.顶边距,
			左: 小鸟.左边距,
			宽: 小鸟.宽度,
			高: 小鸟.高度,
			颜色: 小鸟.颜色,
			图片源: birdImgSrc,
		})
		this.垂直速度 = 垂直速度
		this.水平速度 = 水平速度
	}

	flap(): void {
		this.垂直速度 = 小鸟.拍打速度
	}

	drop(重力: PxPerSquareSecond, 时间: Second): void {
		this.垂直速度 = this.垂直速度.substract(new PxPerSecond(重力.值 * 时间.值))
	}

	fly(地图: Map, 时间: Second): void {
		this.上 += -this.垂直速度.值 * 时间.值
		this.changeFrame()
		地图.moveOn(this.水平速度, 时间)
	}

	private changeFrame = throttle(() => {
		if (this.图片元素) {
			const 下一个图片X = this.图片X + this.宽
			this.图片X = 下一个图片X >= this.图片元素.width ? 0 : 下一个图片X
		}
	}, 100)
}

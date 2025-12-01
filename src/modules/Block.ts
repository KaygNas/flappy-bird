import { Element, ElementInfo } from './Element'

export type BlockInfo = ElementInfo

export default class Block extends Element {
	constructor(元素信息: ElementInfo) {
		super(元素信息)
	}

	isCollidedWith(方块: Block): boolean {
		return this.isOverlay(方块)
	}
}

import { Element, ElementInfo } from './Element'

export type BlockInfo = ElementInfo

export default class Block extends Element {
	constructor(eleInfo: ElementInfo) {
		super(eleInfo)
	}

	isCollidedWith(block: Block): boolean {
		return this.isOverlay(block) || block.isOverlay(this)
	}
}

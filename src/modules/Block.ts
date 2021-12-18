import { Element, ElementInfo } from './Element'

export type BlockInfo = ElementInfo
export default class Block extends Element {
	constructor(eleInfo: ElementInfo) {
		super(eleInfo)
	}

	isCollidedWith(block: Block): boolean {
		// TODO: clac whether two block is overlap
		return true
	}
}

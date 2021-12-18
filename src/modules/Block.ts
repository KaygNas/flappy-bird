import Element from './Element'

export default class Block implements Element {
	top: number = 0
	left: number = 0
	width: number = 0
	height: number = 0
	color: string = ''

	constructor(eleInfo: Element) {
		Object.assign(this, eleInfo)
	}

	isCollidedWith(block: Block): boolean {
		// TODO: clac whether two block is overlap
		return true
	}
}

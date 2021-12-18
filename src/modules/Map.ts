import Block from './Block'
import Element from './Element'
import { PipePair } from './PipePairFactory'
export default class Map {
	private pipePairs: PipePair[]
	private gap: number
	info: Element
	grvaity: number
	distance: number

	constructor(width: number, height: number) {
		this.info = {
			width,
			height,
			top: 0,
			left: 0,
			color: '#fff',
		}
		this.pipePairs = []
		this.gap = 100
		this.grvaity = 10
		this.distance = 0
	}

	isCollidedAnyPipe(block: Block): boolean {
		// TODO: calc whether the block collide with any pipe
		return true
	}

	moveOn(distance: number): void {
		// record the distance that has been moved
		this.distance += distance
		// TODO
		// move all pipePair backward
		// if there are not enough pipePair
		// then fill until enough
	}
}

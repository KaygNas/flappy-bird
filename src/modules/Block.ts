import { Element, ElementInfo } from './Element'

export type BlockInfo = ElementInfo
type X = number
type Y = number
type Coordination = [X, Y]
type BlockCoord = [Coordination, Coordination, Coordination, Coordination]
export default class Block extends Element {
	constructor(eleInfo: ElementInfo) {
		super(eleInfo)
	}

	isCollidedWith(block: Block): boolean {
		return this.isOverlay(block) || block.isOverlay(this)
	}

	private isOverlay(block: Block): boolean {
		const hRange = [this.left, this.right] as const
		const vRange = [this.top, this.bottom] as const
		const coord = this.getCoordination(block)
		return coord.some(([x, y]) => {
			return this.isInRange(x, hRange) && this.isInRange(y, vRange)
		})
	}

	private isInRange(value: number, range: readonly [number, number]): boolean {
		return value > range[0] && value < range[1]
	}

	private getCoordination({ top, left, right, bottom }: Block): BlockCoord {
		return [
			[left, top],
			[right, top],
			[right, bottom],
			[left, bottom],
		]
	}
}

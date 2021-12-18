import Block from './Block'

class Pipe extends Block {
	constructor(top: number, left: number, height: number) {
		super({
			top,
			left,
			height,
			width: 80,
			color: '#008000',
		})
	}
}

export type PipePair = [Pipe, Pipe]

export default class PipePairFactory {
	static create(left: number, mapHeight: number) {
		const GAP_BETWEEN_TWO_PIPE = 100
		const pipeAboveHeight =
			Math.random() * (mapHeight - GAP_BETWEEN_TWO_PIPE) /* 确保能够预留通过的间隙 */
		const pipeBelowTop = pipeAboveHeight + GAP_BETWEEN_TWO_PIPE
		const pipeBelowHeight = mapHeight - pipeAboveHeight - GAP_BETWEEN_TWO_PIPE
		const pipeAbove = new Pipe(0, left, pipeAboveHeight)
		const piepBelow = new Pipe(pipeBelowTop, left, pipeBelowHeight)

		return [pipeAbove, piepBelow]
	}
}

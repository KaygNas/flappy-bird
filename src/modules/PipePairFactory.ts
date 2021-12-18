import { default as Block, BlockInfo } from './Block'

class Pipe extends Block {
	constructor(top: number, left: number, width: number, height: number) {
		super({
			top,
			left,
			height,
			width,
			color: '#008000',
		})
	}
}

export type PipePair = [Pipe, Pipe]

export default class PipePairFactory {
	static create(left: number, width: number, mapHeight: number): PipePair {
		const GAP_BETWEEN_TWO_PIPE = 100
		const pipeAboveHeight = Math.round(
			Math.random() * (mapHeight - GAP_BETWEEN_TWO_PIPE),
		) /* 确保能够预留通过的间隙 */
		const pipeBelowTop = pipeAboveHeight + GAP_BETWEEN_TWO_PIPE
		const pipeBelowHeight = mapHeight - pipeAboveHeight - GAP_BETWEEN_TWO_PIPE
		const pipeAbove = new Pipe(0, left, width, pipeAboveHeight)
		const piepBelow = new Pipe(pipeBelowTop, left, width, pipeBelowHeight)
		console.log('created pipePair', [pipeAbove, piepBelow])
		return [pipeAbove, piepBelow]
	}
}

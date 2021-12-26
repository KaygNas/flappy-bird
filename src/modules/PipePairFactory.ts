import { default as Block, BlockInfo } from './Block'
import pipeImgSrc from '@/assets/pipe.png'
class Pipe extends Block {
	position: 'above' | 'below'
	constructor(
		top: number,
		left: number,
		width: number,
		height: number,
		position: 'above' | 'below',
	) {
		super({
			top,
			left,
			height,
			width,
			color: '#008000',
			imgSrc: pipeImgSrc,
		})
		this.position = position
	}

	render(ctx: CanvasRenderingContext2D): void {
		if (this.position === 'above') {
			const translateX = this.left + this.width / 2
			const translateY = this.top + this.height / 2
			ctx.translate(translateX, translateY)
			ctx.rotate(Math.PI)
			ctx.translate(-translateX, -translateY)
			super.render(ctx)
			ctx.setTransform(1, 0, 0, 1, 0, 0)
		} else {
			super.render(ctx)
		}
	}
}

export type PipePair = [Pipe, Pipe]

export default class PipePairFactory {
	static create(left: number, width: number, mapHeight: number, gap: number): PipePair {
		const pipeMinHeight = 100
		const pipeAboveHeight = Math.round(
			Math.random() * (mapHeight - gap - pipeMinHeight),
		) /* 确保能够预留通过的间隙 */
		const pipeBelowTop = pipeAboveHeight + gap
		const pipeBelowHeight = mapHeight - pipeAboveHeight - gap
		const pipeAbove = new Pipe(0, left, width, pipeAboveHeight, 'above')
		const piepBelow = new Pipe(pipeBelowTop, left, width, pipeBelowHeight, 'below')
		return [pipeAbove, piepBelow]
	}
}

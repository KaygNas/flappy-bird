import { default as Block, BlockInfo } from './Block'
import pipeImgSrc from '@/assets/pipe.png'
class Pipe extends Block {
	位置: 'above' | 'below'
	constructor(
		上: number,
		左: number,
		宽: number,
		高: number,
		位置: 'above' | 'below',
	) {
		super({
			上,
			左,
			高,
			宽,
			颜色: '#008000',
			图片源: pipeImgSrc,
		})
		this.位置 = 位置
	}

	render(ctx: CanvasRenderingContext2D): void {
		if (this.位置 === 'above') {
			const 平移X = this.左 + this.宽 / 2
			const 平移Y = this.上 + this.高 / 2
			ctx.translate(平移X, 平移Y)
			ctx.rotate(Math.PI)
			ctx.translate(-平移X, -平移Y)
			super.render(ctx)
			ctx.setTransform(1, 0, 0, 1, 0, 0)
		} else {
			super.render(ctx)
		}
	}
}

export type PipePair = [Pipe, Pipe]

export default class PipePairFactory {
	static create(左: number, 宽: number, 地图高度: number, 间隙: number): PipePair {
		const 管道最小高度 = 100
		const 上方管道高度 = Math.round(
			Math.random() * (地图高度 - 间隙 - 管道最小高度),
		) /* 确保能够预留通过的间隙 */
		const 下方管道顶部 = 上方管道高度 + 间隙
		const 下方管道高度 = 地图高度 - 上方管道高度 - 间隙
		const 上方管道 = new Pipe(0, 左, 宽, 上方管道高度, 'above')
		const 下方管道 = new Pipe(下方管道顶部, 左, 宽, 下方管道高度, 'below')
		return [上方管道, 下方管道]
	}
}

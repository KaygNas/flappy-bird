import { Element, ElementInfo } from './Element'

export interface TextInfo extends Omit<ElementInfo, '宽' | '高'> {
	文本: string
	字体: CanvasRenderingContext2D['font']
	文本对齐?: CanvasRenderingContext2D['textAlign']
	文本基线?: CanvasRenderingContext2D['textBaseline']
}
export default class Text extends Element {
	文本: string
	字体: CanvasRenderingContext2D['font']
	文本对齐: CanvasRenderingContext2D['textAlign']
	文本基线: CanvasRenderingContext2D['textBaseline']
	constructor(信息: TextInfo) {
		super({ ...信息, 宽: 0, 高: 0 })
		this.文本 = 信息.文本
		this.字体 = 信息.字体
		this.文本对齐 = 信息.文本对齐 || 'center'
		this.文本基线 = 信息.文本基线 || 'middle'
	}

	render(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = this.颜色
		ctx.textAlign = this.文本对齐
		ctx.font = this.字体
		ctx.textBaseline = this.文本基线
		ctx.fillText(this.文本, this.左, this.上)
	}
}

import { Element, ElementInfo } from './Element'

export interface TextInfo extends Omit<ElementInfo, 'width' | 'height'> {
	text: string
	font: CanvasRenderingContext2D['font']
	textAlign?: CanvasRenderingContext2D['textAlign']
	textBaseLine?: CanvasRenderingContext2D['textBaseline']
}
export default class Text extends Element {
	text: string
	font: CanvasRenderingContext2D['font']
	textAlign: CanvasRenderingContext2D['textAlign']
	textBaseLine: CanvasRenderingContext2D['textBaseline']
	constructor(info: TextInfo) {
		super({ ...info, width: 0, height: 0 })
		this.text = info.text
		this.font = info.font
		this.textAlign = info.textAlign || 'center'
		this.textBaseLine = info.textBaseLine || 'middle'
	}

	render(ctx: CanvasRenderingContext2D): void {
		ctx.fillStyle = this.color
		ctx.textAlign = this.textAlign
		ctx.font = this.font
		ctx.textBaseline = this.textBaseLine
		ctx.fillText(this.text, this.left, this.top)
	}
}

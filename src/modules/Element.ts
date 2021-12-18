export interface ElementInfo {
	top: number
	left: number
	width: number
	height: number
	color: string
}
export class Element {
	top: number
	left: number
	width: number
	height: number
	color: string
	constructor(info: ElementInfo) {
		this.top = info.top
		this.left = info.left
		this.width = info.width
		this.height = info.height
		this.color = info.color
	}

	render(ctx: CanvasRenderingContext2D): void {
		const info = this
		ctx.fillStyle = info.color
		ctx.fillRect(info.left, info.top, info.width, info.height)
	}
}

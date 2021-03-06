type X = number
type Y = number
type Coordination = [X, Y]
type EleCoord = [Coordination, Coordination, Coordination, Coordination]
export type ElementInfo = {
	top: number
	left: number
	width: number
	height: number
	color?: string
	imgSrc?: string
}
export class Element {
	top: number
	left: number
	width: number
	height: number
	color: string
	imgEle?: HTMLImageElement
	imgX: number
	imgY: number
	get right() {
		return this.left + this.width
	}
	get bottom() {
		return this.top + this.height
	}

	constructor(info: ElementInfo) {
		this.top = info.top
		this.left = info.left
		this.width = info.width
		this.height = info.height
		this.color = info.color || '#000'
		this.imgX = 0
		this.imgY = 0
		if (info.imgSrc) {
			const image = new Image()
			image.onload = () => {
				this.imgEle = image
			}
			image.src = info.imgSrc
		}
	}

	render(ctx: CanvasRenderingContext2D): void {
		if (this.imgEle) {
			ctx.drawImage(
				this.imgEle,
				this.imgX,
				this.imgY,
				this.width,
				this.height,
				this.left,
				this.top,
				this.width,
				this.height,
			)
		} else {
			ctx.fillStyle = this.color
			ctx.fillRect(this.left, this.top, this.width, this.height)
		}
	}

	/**
	 * 判断本元素是否与输入元素相交;
	 * @param ele
	 */
	isOverlay(ele: Element): boolean {
		const hRange = [this.left, this.right] as const
		const vRange = [this.top, this.bottom] as const
		const coord = this.getCoordination(ele)
		return (
			coord.some(([x, y]) => {
				return this.isInRange(x, hRange) && this.isInRange(y, vRange)
			}) || ele.isContain(this)
		)
	}

	/**
	 * 判断本元素是否包含输入元素
	 * @param ele
	 */
	isContain(ele: Element): boolean {
		const hRange = [this.left, this.right] as const
		const vRange = [this.top, this.bottom] as const
		const coord = this.getCoordination(ele)
		return coord.every(([x, y]) => {
			return this.isInRange(x, hRange) && this.isInRange(y, vRange)
		})
	}

	private isInRange(value: number, range: readonly [number, number]): boolean {
		return value >= range[0] && value <= range[1]
	}

	private getCoordination({ top, left, right, bottom }: Element): EleCoord {
		return [
			[left, top],
			[right, top],
			[right, bottom],
			[left, bottom],
		]
	}
}

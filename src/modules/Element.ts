type X = number
type Y = number
type Coordination = [X, Y]
type EleCoord = [Coordination, Coordination, Coordination, Coordination]
export type ElementInfo = {
	上: number
	左: number
	宽: number
	高: number
	颜色?: string
	图片源?: string
}
export class Element {
	上: number
	左: number
	宽: number
	高: number
	颜色: string
	图片元素?: HTMLImageElement
	图片X: number
	图片Y: number
	get 右() {
		return this.左 + this.宽
	}
	get 下() {
		return this.上 + this.高
	}

	constructor(信息: ElementInfo) {
		this.上 = 信息.上
		this.左 = 信息.左
		this.宽 = 信息.宽
		this.高 = 信息.高
		this.颜色 = 信息.颜色 || '#000'
		this.图片X = 0
		this.图片Y = 0
		if (信息.图片源) {
			const 图像 = new Image()
			图像.onload = () => {
				this.图片元素 = 图像
			}
			图像.src = 信息.图片源
		}
	}

	render(ctx: CanvasRenderingContext2D): void {
		if (this.图片元素) {
			ctx.drawImage(
				this.图片元素,
				this.图片X,
				this.图片Y,
				this.宽,
				this.高,
				this.左,
				this.上,
				this.宽,
				this.高,
			)
		} else {
			ctx.fillStyle = this.颜色
			ctx.fillRect(this.左, this.上, this.宽, this.高)
		}
	}

	/**
	 * 判断本元素是否与输入元素相交;
	 * @param ele
	 */
	isOverlay(元素: Element): boolean {
		const 水平范围 = [this.左, this.右] as const
		const 垂直范围 = [this.上, this.下] as const
		const 坐标 = this.getCoordination(元素)
		return (
			坐标.some(([x, y]) => {
				return this.isInRange(x, 水平范围) && this.isInRange(y, 垂直范围)
			}) || 元素.isContain(this)
		)
	}

	/**
	 * 判断本元素是否包含输入元素
	 * @param ele
	 */
	isContain(元素: Element): boolean {
		const 水平范围 = [this.左, this.右] as const
		const 垂直范围 = [this.上, this.下] as const
		const 坐标 = this.getCoordination(元素)
		return 坐标.every(([x, y]) => {
			return this.isInRange(x, 水平范围) && this.isInRange(y, 垂直范围)
		})
	}

	private isInRange(值: number, 范围: readonly [number, number]): boolean {
		return 值 >= 范围[0] && 值 <= 范围[1]
	}

	private getCoordination({ 上, 左, 右, 下 }: Element): EleCoord {
		return [
			[左, 上],
			[右, 上],
			[右, 下],
			[左, 下],
		]
	}
}

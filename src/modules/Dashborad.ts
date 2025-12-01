import { Element } from './Element'
import Text from './Text'

/**
 * 渲染现在游戏状态的仪表盘元素
 */
export class Dashboard extends Element {
	private _分数文本: Text
	constructor(宽度: number, 高度: number) {
		super({
			宽: 宽度,
			高: 高度,
			上: 0,
			左: 0,
			颜色: '#ffffff00',
		})
		this._分数文本 = new Text({
			左: 10,
			上: 10,
			颜色: '#000',
			文本: '',
			字体: `24px Microsoft Yahei`,
			文本对齐: 'left',
			文本基线: 'top',
		})
	}

	setScore(分数: number): void {
		this._分数文本.文本 = `分数: ${分数}`
	}

	render(ctx: CanvasRenderingContext2D): void {
		super.render(ctx)
		this._分数文本.render(ctx)
	}
}

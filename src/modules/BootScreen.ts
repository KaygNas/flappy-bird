import { Element } from './Element'
import { GAME_STATUS } from './Game'
import Text from './Text'
enum GAME_TITLE {
	GAME_NAME = '敲好玩的 Flappy Bird! 🐥',
	GAME_OVER = 'Never mind, 再冲一次!',
}
enum BUTTON_TEXT {
	START = '开始',
	RESTART = '冲冲冲!🐱‍🏍',
}
export default class BootScreen extends Element {
	private _开始回调?: Function
	private _重启回调?: Function
	private _按钮: Element
	private _按钮文本: Text
	private _游戏标题: Text
	private _分数文本: Text
	private 可见: boolean

	constructor(宽度: number, 高度: number) {
		super({
			宽: 宽度,
			高: 高度,
			上: 0,
			左: 0,
			颜色: '#cbcbcbcc',
		})
		this.可见 = false

		const 按钮宽度 = Math.max(宽度 / 10, 200)
		const 按钮高度 = 按钮宽度 / 3
		const 按钮信息 = {
			上: 高度 / 2 + 按钮高度,
			左: 宽度 / 2 - 按钮宽度 / 2,
			宽: 按钮宽度,
			高: 按钮高度,
			颜色: '#ffa500',
		}
		this._按钮 = new Element(按钮信息)

		const 字体大小 = 按钮高度 / 2
		this._按钮文本 = new Text({
			左: 按钮信息.左 + 按钮宽度 / 2,
			上: 按钮信息.上 + 按钮高度 / 2,
			颜色: '#fff',
			文本: BUTTON_TEXT.START,
			字体: `${字体大小}px Microsoft Yahei`,
			文本对齐: 'center',
			文本基线: 'middle',
		})

		const 标题字体大小 = 按钮高度
		this._游戏标题 = new Text({
			左: 按钮信息.左 + 按钮宽度 / 2,
			上: 按钮信息.上 - 按钮高度 * 2,
			颜色: '#ff0000',
			文本: GAME_TITLE.GAME_NAME,
			字体: `${标题字体大小}px Microsoft Yahei`,
			文本对齐: 'center',
			文本基线: 'bottom',
		})

		this._分数文本 = new Text({
			左: this._游戏标题.左,
			上: this._游戏标题.上 + 字体大小,
			颜色: '#fff',
			文本: '',
			字体: `${字体大小}px Microsoft Yahei`,
			文本基线: 'top',
		})
	}

	onStart(开始回调: Function): void {
		this._开始回调 = 开始回调
	}

	onRestart(重启回调: Function): void {
		this._重启回调 = 重启回调
	}

	boot(): void {
		console.log('welcome playing flappy bird! enjoy it!')
		this.show()
	}

	show(): void {
		this.可见 = true
	}

	hide(): void {
		this.可见 = false
	}

	showPause(): void {
		this.show()
		this._游戏标题.文本 = GAME_TITLE.GAME_NAME
		this._按钮文本.文本 = BUTTON_TEXT.START
	}

	showGameover(分数: string | number): void {
		this.show()
		this._分数文本.文本 = `得分 ${分数}分 `
		this._游戏标题.文本 = GAME_TITLE.GAME_OVER
		this._按钮文本.文本 = BUTTON_TEXT.RESTART
	}

	click(e: MouseEvent, 状态: GAME_STATUS): void {
		const 鼠标 = new Element({
			上: e.offsetY,
			左: e.offsetX,
			宽: 0,
			高: 0,
		})
		if (this._按钮.isOverlay(鼠标)) {
			switch (状态) {
				case GAME_STATUS.GAME_OVER:
					this._重启回调 && this._重启回调()
					break
				case GAME_STATUS.READY:
					this._开始回调 && this._开始回调()
					break
				case GAME_STATUS.PAUSED:
					this._开始回调 && this._开始回调()
					break
				default:
			}
		}
	}

	render(ctx: CanvasRenderingContext2D): void {
		if (!this.可见) return
		super.render(ctx)
		this._按钮.render(ctx)
		this._按钮文本.render(ctx)
		this._游戏标题.render(ctx)
		if (this._分数文本.文本) {
			this._分数文本.render(ctx)
			this._分数文本.文本 = ''
		}
	}
}

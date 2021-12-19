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
	private _onStart?: Function
	private _onRestart?: Function
	private _button: Element
	private _buttonText: Text
	private _gameTitle: Text
	private _scoreText: Text
	private visible: boolean

	constructor(width: number, height: number) {
		super({
			width,
			height,
			top: 0,
			left: 0,
			color: '#cbcbcbcc',
		})
		this.visible = false

		const buttonWidth = Math.max(width / 10, 200)
		const buttonHeight = buttonWidth / 3
		const buttonInfo = {
			top: height / 2 + buttonHeight,
			left: width / 2 - buttonWidth / 2,
			width: buttonWidth,
			height: buttonHeight,
			color: '#ffa500',
		}
		this._button = new Element(buttonInfo)

		const fontSize = buttonHeight / 2
		this._buttonText = new Text({
			left: buttonInfo.left + buttonWidth / 2,
			top: buttonInfo.top + buttonHeight / 2,
			color: '#fff',
			text: BUTTON_TEXT.START,
			font: `${fontSize}px Microsoft Yahei`,
			textAlign: 'center',
			textBaseLine: 'middle',
		})

		const titleFontSize = buttonHeight
		this._gameTitle = new Text({
			left: buttonInfo.left + buttonWidth / 2,
			top: buttonInfo.top - buttonHeight * 2,
			color: '#ff0000',
			text: GAME_TITLE.GAME_NAME,
			font: `${titleFontSize}px Microsoft Yahei`,
			textAlign: 'center',
			textBaseLine: 'bottom',
		})

		this._scoreText = new Text({
			left: this._gameTitle.left,
			top: this._gameTitle.top + fontSize,
			color: '#fff',
			text: '',
			font: `${fontSize}px Microsoft Yahei`,
			textBaseLine: 'top',
		})
	}

	onStart(onStart: Function): void {
		this._onStart = onStart
	}

	onRestart(onRestart: Function): void {
		this._onRestart = onRestart
	}

	boot(): void {
		console.log('welcome playing flappy bird! enjoy it!')
		this.show()
	}

	show(): void {
		this.visible = true
	}

	hide(): void {
		this.visible = false
	}

	showPause(): void {
		this.show()
		this._gameTitle.text = GAME_TITLE.GAME_NAME
		this._buttonText.text = BUTTON_TEXT.START
	}

	showGameover(score: string | number): void {
		this.show()
		this._scoreText.text = `得分 ${score}分 `
		this._gameTitle.text = GAME_TITLE.GAME_OVER
		this._buttonText.text = BUTTON_TEXT.RESTART
	}

	click(e: MouseEvent, status: GAME_STATUS): void {
		const mouse = new Element({
			top: e.offsetY,
			left: e.offsetX,
			width: 0,
			height: 0,
		})
		if (this._button.isOverlay(mouse)) {
			switch (status) {
				case GAME_STATUS.GAME_OVER:
					this._onRestart && this._onRestart()
					break
				case GAME_STATUS.READY:
					this._onStart && this._onStart()
					break
				case GAME_STATUS.PAUSED:
					this._onStart && this._onStart()
					break
				default:
			}
		}
	}

	render(ctx: CanvasRenderingContext2D): void {
		if (!this.visible) return
		super.render(ctx)
		this._button.render(ctx)
		this._buttonText.render(ctx)
		this._gameTitle.render(ctx)
		if (this._scoreText.text) {
			this._scoreText.render(ctx)
			this._scoreText.text = ''
		}
	}
}

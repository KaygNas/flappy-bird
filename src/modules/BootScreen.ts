import Element from './Element'

export default class BootScreen {
	private onStart: Function
	info: Element

	constructor(onStart: Function, width: number, height: number) {
		this.onStart = onStart
		this.info = {
			width,
			height,
			top: 0,
			left: 0,
			color: '#cbcbcb70',
		}
	}

	boot(): void {
		this.onStart()
	}

	showStartButton(): void {
		// TODO
	}

	showRestartButton(): void {
		// TODO
	}

	showScore(score: number): void {
		// TODO
	}
}

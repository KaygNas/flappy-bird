import { Element, ElementInfo } from './Element'

export default class BootScreen extends Element {
	private onStart: Function

	constructor(onStart: Function, width: number, height: number) {
		const info = {
			width,
			height,
			top: 0,
			left: 0,
			color: '#cbcbcb70',
		}
		super(info)
		this.onStart = onStart
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

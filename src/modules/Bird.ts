import Block from './Block'
import { PxPerSecond } from './Unit'
export default class Bird extends Block {
	speedVertical: PxPerSecond
	speedHorizontal: PxPerSecond

	constructor(speedVertical: PxPerSecond, speedHorizontal: PxPerSecond) {
		super({
			top: 0,
			left: 0,
			width: 40,
			height: 40,
			color: '#ff0000',
		})
		this.speedVertical = speedVertical
		this.speedHorizontal = speedHorizontal
	}

	flap(gravity: number): void {
		// TODO: give the bird a speed upward
	}

	drop(gravity: number): void {
		// TODO: give the bird a speed downward
	}

	fly(): void {
		// TODO: update the position according to the speedV & speedH
	}
}

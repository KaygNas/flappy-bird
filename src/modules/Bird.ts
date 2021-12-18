import Block from './Block'

export default class Bird extends Block {
	speedVertical: number
	speedHorizontal: number

	constructor(speedVertical: number, speedHorizontal: number) {
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

import Block from './Block'
import { BIRD } from '../gameConfig'
import Map from './Map'
import { PxPerSecond, PxPerSquareSecond, Second } from './Unit'
export default class Bird extends Block {
	speedVertical: PxPerSecond
	speedHorizontal: PxPerSecond

	constructor(speedVertical: PxPerSecond, speedHorizontal: PxPerSecond) {
		super({
			top: BIRD.TOP,
			left: BIRD.LEFT,
			width: BIRD.WIDTH,
			height: BIRD.HEIGHT,
			color: BIRD.COLOR,
		})
		this.speedVertical = speedVertical
		this.speedHorizontal = speedHorizontal
	}

	flap(): void {
		if (this.speedVertical.value >= 0) {
			this.speedVertical = this.speedVertical.add(BIRD.SPEED_FLAP)
		} else {
			this.speedVertical = BIRD.SPEED_FLAP
		}
	}

	drop(gravity: PxPerSquareSecond, time: Second): void {
		this.speedVertical = this.speedVertical.substract(new PxPerSecond(gravity.value * time.value))
	}

	fly(map: Map, time: Second): void {
		this.top += -this.speedVertical.value * time.value
		map.moveOn(this.speedHorizontal, time)
	}
}

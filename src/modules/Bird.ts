import Block from './Block'
import { BIRD } from '../gameConfig'
import Map from './Map'
import { PxPerSecond, PxPerSquareSecond, Second } from './Unit'
import birdImgSrc from '@/assets/bird.png'
import { throttle } from 'lodash'
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
			imgSrc: birdImgSrc,
		})
		this.speedVertical = speedVertical
		this.speedHorizontal = speedHorizontal
	}

	flap(): void {
		this.speedVertical = BIRD.SPEED_FLAP
	}

	drop(gravity: PxPerSquareSecond, time: Second): void {
		this.speedVertical = this.speedVertical.substract(new PxPerSecond(gravity.value * time.value))
	}

	fly(map: Map, time: Second): void {
		this.top += -this.speedVertical.value * time.value
		this.changeFrame()
		map.moveOn(this.speedHorizontal, time)
	}

	private changeFrame = throttle(() => {
		if (this.imgEle) {
			const nextImgX = this.imgX + this.width
			this.imgX = nextImgX >= this.imgEle.width ? 0 : nextImgX
		}
	}, 100)
}

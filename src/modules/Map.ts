import Block from './Block'
import { Element } from './Element'
import { MAP, WINDOW_SIZE } from '../gameConfig'
import { default as PipePairFactory, PipePair } from './PipePairFactory'
import { PxPerSecond, Second, PxPerSquareSecond } from './Unit'

export default class Map extends Element {
	private pipePairs: PipePair[]
	private pipeWidth: number
	private gap: number
	grvaity: PxPerSquareSecond
	totalDistance: number

	constructor(width: number, height: number) {
		const info = {
			width,
			height,
			top: 0,
			left: 0,
			color: '#e3e3e3',
		}
		super(info)
		this.pipePairs = []
		this.pipeWidth = MAP.PIPE_WIDTH
		this.gap = MAP.GAP
		this.grvaity = MAP.GRAVITY
		this.totalDistance = 0
		this.fillPipePairs(WINDOW_SIZE.WIDTH / 3)
	}

	isCollidedAnyPipe(block: Block): boolean {
		return this.pipePairs.some((pipePair) => {
			return pipePair.some((pipe) => {
				return pipe.isCollidedWith(block)
			})
		})
	}

	moveOn(speed: PxPerSecond, time: Second): void {
		// record the distance that has been moved
		const distance = speed.value * time.value
		this.totalDistance += distance
		// move all pipePair backward
		this.pipePairs.forEach(([pipe1, pipe2]) => {
			pipe1.left -= distance
			pipe2.left -= distance
		})
	}

	render(ctx: CanvasRenderingContext2D): void {
		this.fillPipePairs()
		super.render(ctx)
		this.pipePairs.forEach((pipes) => {
			pipes.forEach((pipe) => pipe.render(ctx))
		})
	}

	private fillPipePairs(offset: number = 0) {
		const mapWidth = this.width - offset
		const mapHeight = this.height
		const pipeWidth = this.pipeWidth
		const pipeGap = this.gap
		const length = this.pipePairs.length

		// find pipes on the screen and figure out how many pipes are needed
		let firstPipeOnScreenIndex: number = length
		let lastPipeOnScreenIndex: number = length
		for (let index = 0; index < length; index++) {
			const [pipe] = this.pipePairs[index]
			if (pipe.left + pipe.width >= 0) {
				firstPipeOnScreenIndex = index
				break
			}
		}

		// if there are nothing on the screen
		// then the reset width is the screen width
		// else the reset width is counted from the last one
		const [lastPipe] =
			firstPipeOnScreenIndex < lastPipeOnScreenIndex
				? this.pipePairs[lastPipeOnScreenIndex - 1]
				: []
		const lastPipeRight = lastPipe ? lastPipe.left + lastPipe.width : 0
		const restWidth = mapWidth - lastPipeRight > 0 ? mapWidth - lastPipeRight : 0
		const pipePairsNeededCount = Math.ceil(restWidth / (pipeWidth + pipeGap))
		const pipePairsOnScreen = this.pipePairs.slice(firstPipeOnScreenIndex, lastPipeOnScreenIndex)
		const pipePairsNeeded = new Array(pipePairsNeededCount)
			.fill(0)
			.map((_, index) =>
				PipePairFactory.create(
					lastPipeRight + (pipeGap + pipeWidth) * (index + 1) - pipeWidth + offset,
					pipeWidth,
					mapHeight,
				),
			)
		this.pipePairs = pipePairsOnScreen.concat(pipePairsNeeded)
	}
}

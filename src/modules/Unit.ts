export abstract class Unit {
	abstract readonly value: number
	abstract readonly unit: string
	abstract create(value: number): any
	add<T extends Unit>(unit: T): T {
		return this.create(this.value + unit.value)
	}
	substract<T extends Unit>(unit: T): T {
		return this.create(this.value - unit.value)
	}
	multiple<T extends Unit>(times: number): T {
		return this.create(this.value * times)
	}
}

const PxPerMsType: unique symbol = Symbol()
export class PxPerSecond extends Unit {
	[PxPerMsType]: void
	readonly value: number
	readonly unit: string
	constructor(value: number) {
		super()
		this.value = value
		this.unit = 'px/s'
	}
	create(value: number) {
		return new PxPerSecond(value)
	}
}

const SecondType: unique symbol = Symbol()
export class Second extends Unit {
	[SecondType]: void
	readonly value: number
	readonly unit: string
	constructor(value: number) {
		super()
		this.value = value
		this.unit = 's'
	}
	create(value: number) {
		return new Second(value)
	}
}

const PxPerSquareSecondType: unique symbol = Symbol()
export class PxPerSquareSecond extends Unit {
	[PxPerSquareSecondType]: void
	readonly value: number
	readonly unit: string
	constructor(value: number) {
		super()
		this.value = value
		this.unit = 'px/s²'
	}
	create(value: number) {
		return new PxPerSquareSecond(value)
	}
}

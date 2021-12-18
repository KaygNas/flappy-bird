export abstract class Unit {
	abstract readonly value: number
	abstract readonly unit: string
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
}

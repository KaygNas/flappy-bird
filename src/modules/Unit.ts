export abstract class Unit {
	abstract readonly 值: number
	abstract readonly 单位: string
	abstract create(值: number): any
	add<T extends Unit>(单位: T): T {
		return this.create(this.值 + 单位.值)
	}
	substract<T extends Unit>(单位: T): T {
		return this.create(this.值 - 单位.值)
	}
	multiple<T extends Unit>(倍数: number): T {
		return this.create(this.值 * 倍数)
	}
}

const PxPerMsType: unique symbol = Symbol()
export class PxPerSecond extends Unit {
	[PxPerMsType]!: void
	readonly 值: number
	readonly 单位: string
	constructor(值: number) {
		super()
		this.值 = 值
		this.单位 = 'px/s'
	}
	create(值: number) {
		return new PxPerSecond(值)
	}
}

const SecondType: unique symbol = Symbol()
export class Second extends Unit {
	[SecondType]!: void
	readonly 值: number
	readonly 单位: string
	constructor(值: number) {
		super()
		this.值 = 值
		this.单位 = 's'
	}
	create(值: number) {
		return new Second(值)
	}
}

const PxPerSquareSecondType: unique symbol = Symbol()
export class PxPerSquareSecond extends Unit {
	[PxPerSquareSecondType]!: void
	readonly 值: number
	readonly 单位: string
	constructor(值: number) {
		super()
		this.值 = 值
		this.单位 = 'px/s²'
	}
	create(值: number) {
		return new PxPerSquareSecond(值)
	}
}

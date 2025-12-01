import { PxPerSecond, PxPerSquareSecond, Second } from './modules/Unit'

const 从顶部落到底部的时间 = new Second(1)
export const 窗口尺寸 = {
	宽度: window.innerWidth,
	高度: window.innerHeight,
}

export const 地图 = {
	重力: new PxPerSquareSecond(
		(窗口尺寸.高度 * 1.5) / 从顶部落到底部的时间.值 ** 2,
	),
	管道宽度: 138,
	间隙: 800,
	两管道间距: 400,
}

export const 小鸟 = {
	水平速度: new PxPerSecond(1000),
	垂直速度: new PxPerSecond(0),
	拍打速度: new PxPerSecond(地图.重力.值 / 3),
	左边距: 50,
	顶边距: 窗口尺寸.高度 / 2,
	宽度: 92,
	高度: 64,
	颜色: '#ff0000',
}

export const 游戏配置 = {
	胜利分数: 20000,
}
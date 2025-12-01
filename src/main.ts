import Game from './modules/Game'
import { 窗口尺寸 } from './gameConfig'

window.onload = () => {
	const 游戏窗口 = document.querySelector('#gameWindow') as HTMLCanvasElement
	游戏窗口.width = 窗口尺寸.宽度
	游戏窗口.height = 窗口尺寸.高度
	new Game(游戏窗口)
}

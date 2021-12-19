import Game from './modules/Game'
import { WINDOW_SIZE } from './gameConfig'

window.onload = () => {
	const gameWindow = document.querySelector('#gameWindow') as HTMLCanvasElement
	gameWindow.width = WINDOW_SIZE.WIDTH
	gameWindow.height = WINDOW_SIZE.HEIGHT
	new Game(gameWindow)
}

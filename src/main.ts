import Game, { GAME_STATUS } from './modules/Game'
import { WINDOW_SIZE } from './gameConfig'

window.onload = () => {
	const gameWindow = document.querySelector('#gameWindow') as HTMLCanvasElement
	gameWindow.width = WINDOW_SIZE.WIDTH
	gameWindow.height = WINDOW_SIZE.HEIGHT
	const ctx = gameWindow.getContext('2d')
	if (!ctx) return
	const game = new Game(
		{ width: WINDOW_SIZE.WIDTH, height: WINDOW_SIZE.HEIGHT },
		//
		ctx,
	)
	game.start()
	gameWindow.onclick = () => {
		if (game.status === GAME_STATUS.PLAYING) game.birdFlap()
		if (game.status === GAME_STATUS.PAUSED) game.start()
		if (game.status === GAME_STATUS.GAME_OVER) game.restart()
	}
}

export const changeState = (game, state) => {
	game.state.start(state);
}

export const showElement = (el) => {
	el.style.visibility = 'visible';
}

export const hideElement = (el) => {
	el.style.visibility = 'hidden';
}

export const isEmpty = (input) => {
	return input.value.length === 0;
}

export const center = (el) => {
	return el.anchor.setTo(.5, .5);
}
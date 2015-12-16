'use strict';

import Preload from './classes/states/Preload';
import Menu from './classes/states/Menu';
import Play from './classes/states/Play';
import Leaderboard from './classes/states/Leaderboard';
import Gameover from './classes/states/Gameover';
import Info from './classes/states/Info';
import Shop from './classes/states/Shop';


const init = () => {
	let game = new Phaser.Game(750, 500, Phaser.AUTO);
	game.state.add('Preload', Preload, true);
	game.state.add('Menu', Menu, false);
	game.state.add('Play', Play, false);
	game.state.add('Leaderboard', Leaderboard, false);
	game.state.add('Gameover', Gameover, false);
	game.state.add('Info', Info, false);
	game.state.add('Shop', Shop, false);
};

init();


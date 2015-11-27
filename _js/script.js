import Preload from './classes/states/Preload';
import Menu from './classes/states/Menu';
import Play from './classes/states/Play';

"use strict";

let game = new Phaser.Game(750,500, Phaser.AUTO);
game.state.add('Preload', Preload, false);
game.state.add('Menu', Menu, false);
game.state.add('Play', Play, false);
game.state.start('Preload');
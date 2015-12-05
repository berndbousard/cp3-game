export default class Preload extends Phaser.State {
	preload(){
		console.log("start preload");

		// load assets
		this.game.load.image('startButton', 'assets/startButton.png');
		this.game.load.image('leaderboardButton', 'assets/leaderboardButton.png');
		this.game.load.image('infoButton', 'assets/instructionsButton.png');
		this.game.load.image('backButton', 'assets/backButton.png');
		this.game.load.image('city', 'assets/city.jpg');
		this.game.load.image('menuBackground', 'assets/menu_background.png');
		this.game.load.image('bullet', 'assets/bullet.png');
		this.game.load.image('player_menu', 'assets/player_menu.png');

		this.game.load.bitmapFont('gamefont', 'assets/font/extra/gamefont.png', 'assets/font/extra/gamefont.fnt');

		this.game.load.spritesheet('player_black', 'assets/player_black.png', 42, 44, 14);
		this.game.load.spritesheet('player_white', 'assets/player_white.png', 42, 44, 14);
		this.game.load.spritesheet('enemy_black', 'assets/enemy_black.png', 45, 45, 6);
		this.game.load.spritesheet('enemy_white', 'assets/enemy_white.png', 45, 45, 6);
		this.game.load.spritesheet('enemy_orange', 'assets/enemy_orange.png', 45, 45, 6);
		this.game.load.spritesheet('enemy_red', 'assets/enemy_red.png', 60, 60, 6);
		this.game.load.spritesheet('coin', 'assets/coin.png', 25, 25, 10);

		this.game.load.audio('change_side' ,'assets/sound/change_side.mp3');
		this.game.load.audio('coin' ,'assets/sound/coin.mp3');
		this.game.load.audio('enemy_hit' ,'assets/sound/enemy_hit.wav');

	}
	create(){
		this.game.state.start('Menu');
	}
	update(){
		
	}
	shutdown(){
		console.log('end preload');
	}
}
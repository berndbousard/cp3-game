export default class Preload extends Phaser.State {
	preload(){
		console.log("start preload");

		// load assets
		this.game.load.image('startButton', 'assets/startButton.png');
		this.game.load.image('leaderboardbutton', 'assets/leaderboardButton.png');
		this.game.load.image('infoButton', 'assets/instructionsButton.png');
		this.game.load.image('cityWhite', 'assets/city_white.jpg');
		this.game.load.image('cityBlack', 'assets/city_black.jpg');
		this.game.load.image('menuBackground', 'assets/menu_background.png');
		this.game.load.bitmapFont('gamefont', 'assets/font/gamefont/gamefont.png', 'assets/font/gamefont/gamefont.fnt');
		this.game.load.spritesheet('player_black', 'assets/player_black.png', 42, 44, 14);
		this.game.load.spritesheet('player_white', 'assets/player_white.png', 42, 44, 14);
		this.game.load.spritesheet('enemy_black', 'assets/enemy_black.png', 45, 45, 6);
		this.game.load.spritesheet('enemy_white', 'assets/enemy_white.png', 45, 45, 6);

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
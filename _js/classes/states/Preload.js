import * as Utils from '../objects/Utils';

export default class Preload extends Phaser.State {
	preload(){
		// console.log("start preload");

		//show percentage
		// game, x, y, font, text, size, align
		this.progressText = this.game.add.text(this.game.world.centerX, this.game.world.centerY-30, '0%', {fill: 'white'});
		Utils.center(this.progressText);

		this.game.load.onFileComplete.add(this.onFileComplete, this);

		// load assets
		this.game.load.image('startButton', 'assets/startButton.png');
		this.game.load.image('leaderboardButton', 'assets/leaderboardButton.png');
		this.game.load.image('infoButton', 'assets/instructionsButton.png');
		this.game.load.image('backButton', 'assets/backButton.png');
		this.game.load.image('city', 'assets/city.jpg');
		this.game.load.image('menuBackground', 'assets/menu_background.png');
		this.game.load.image('bullet', 'assets/bullet.png');
		this.game.load.image('player_menu', 'assets/player_menu.png');
		this.game.load.image('shopButton', 'assets/shopButton.png');
		this.game.load.image('bulletButton', 'assets/bulletButton.png');
		this.game.load.image('meteorButton', 'assets/meteorButton.png');
		this.game.load.image('rainbowButton', 'assets/rainbowButton.png');
		this.game.load.image('muteButton', 'assets/muteButton.png');
		this.game.load.image('unmuteButton', 'assets/unmuteButton.png');
		this.game.load.image('displayScore', 'assets/displayScore.png');
		this.game.load.image('displayBullets', 'assets/displayBullets.png');
		this.game.load.image('displayKills', 'assets/displayKills.png');
		this.game.load.image('displayMeteors', 'assets/displayMeteors.png');

		this.game.load.bitmapFont('gamefont', 'assets/font/extra/gamefont.png', 'assets/font/extra/gamefont.fnt');

		this.game.load.spritesheet('player_black', 'assets/player_black.png', 42, 44, 14);
		this.game.load.spritesheet('player_white', 'assets/player_white.png', 42, 44, 14);
		this.game.load.spritesheet('player_rainbow', 'assets/player_rainbow.png', 42, 44, 14);
		this.game.load.spritesheet('player_rainbow_flip', 'assets/player_rainbow_flip.png', 42, 44, 14);
		this.game.load.spritesheet('enemy_black', 'assets/enemy_black.png', 45, 45, 6);
		this.game.load.spritesheet('enemy_white', 'assets/enemy_white.png', 45, 45, 6);
		this.game.load.spritesheet('enemy_orange', 'assets/enemy_orange.png', 45, 45, 6);
		this.game.load.spritesheet('enemy_red', 'assets/enemy_red.png', 60, 60, 6);
		this.game.load.spritesheet('coin', 'assets/coin.png', 25, 25, 10);
		this.game.load.spritesheet('meteor', 'assets/meteor.png', 37, 50, 6);
		this.game.load.spritesheet('keysImg', 'assets/keys.png', 120, 56, 5);
		this.game.load.spritesheet('spaceBar', 'assets/spaceBar.png', 170, 25, 3);
		this.game.load.spritesheet('mKey', 'assets/mKey.png', 29, 25, 2);
		this.game.load.spritesheet('explosion', 'assets/explosion.png', 41, 41, 7);

		this.game.load.audio('change_side' ,'assets/sound/change_side.mp3');
		this.game.load.audio('coin' ,'assets/sound/coin.mp3');
		this.game.load.audio('enemy_hit' ,'assets/sound/enemy_hit.wav');
		this.game.load.audio('player_hit' ,'assets/sound/player_hit.mp3');
		this.game.load.audio('player_shoot' ,'assets/sound/shot.mp3');
		this.game.load.audio('click' ,'assets/sound/click.mp3');
		this.game.load.audio('bulletPackSound' ,'assets/sound/ammoSound.mp3');
		this.game.load.audio('background' ,'assets/sound/background2.mp3');
		this.game.load.audio('error' ,'assets/sound/error.mp3');
		this.game.load.audio('meteor', 'assets/sound/meteor2.mp3');
	}

	create(){
		Utils.changeState(this.game, 'Menu');
	}

	update(){
		
	}

	onFileComplete(progress){
		this.progressText.text = progress + '%';
	}
	
	shutdown(){
		// console.log('end preload');
		this.progressText.destroy();
		this.progressText = null;
	}
}
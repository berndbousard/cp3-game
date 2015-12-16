import BackgroundCity from '../objects/BackgroundCity';
import MenuBackground from '../objects/MenuBackground';
import Sound from '../objects/Sound';
import Text from '../objects/Text';
import * as Utils from '../objects/Utils';
// import Data from '../objects/Data';

export default class Menu extends Phaser.State {
	preload(){
		// console.log('start menu');
	}

	create(){
		this.soundSetup();
		this.initControls();
		this.initBackground();
		this.initTitle();
		this.initButtons();
	}

	update(){
	}

	shutdown(){
		// console.log('end menu');
	}

	startClickHandler(){
		this.clickSound.play();
		Utils.changeState(this.game, 'Play');
	}

	leaderboardClickHandler(){
		this.clickSound.play();
		Utils.changeState(this.game, 'Leaderboard');
	}

	infoClickHandler(){
		this.clickSound.play();
		Utils.changeState(this.game, 'Info');
	}

	shopClickHandler(){
		this.clickSound.play();
		Utils.changeState(this.game, 'Shop');
	}

	titleFlipUp(){
		if(this.titleBox.scale.y === -1){
			this.titleBox.scale.y = 1;
			this.titleBox.position.y = 228;
			this.flipSound.play();
		}
	}

	titleFlipDown(){
		if(this.titleBox.scale.y === 1){
			this.titleBox.scale.y = -1;
			this.titleBox.position.y = 220;
			this.flipSound.play();
		}
	}
	
	soundSetup(){
		// music
		this.clickSound = new Sound(this.game, 'click');
		this.flipSound = new Sound(this.game, 'change_side');
	}

	initControls(){
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.cursors.down.onDown.add(this.titleFlipDown, this);
		this.cursors.up.onDown.add(this.titleFlipUp, this);
	}

	initBackground(){
		this.city = new BackgroundCity(this.game, 0, 0, 750, 500, 'city');
		this.game.add.existing(this.city);
		this.menuBackground = new MenuBackground(this.game, this.game.width/2, this.game.height/2);
		this.game.add.existing(this.menuBackground);
		this.playerImg = this.game.add.sprite(this.game.width/2, this.game.height/2-90, 'player_menu');
		Utils.center(this.playerImg);
	}

	initTitle(){
		let titleBoxText = 'CITYFLIP';
		this.titleBox = new Text(this.game, this.game.width/2+5, this.game.height/2-22, 'gamefont', titleBoxText, 60);
		Utils.center(this.titleBox);
		this.game.add.existing(this.titleBox);
	}

	initButtons(){
		this.startButton = this.game.add.button(this.game.width/2, this.game.height/2 + 75, 'startButton', this.startClickHandler, this);
		Utils.center(this.startButton);
		this.leaderboardButton = this.game.add.button(this.game.width/2 - 100, this.game.height/2 + 150, 'leaderboardButton', this.leaderboardClickHandler, this);
		Utils.center(this.leaderboardButton);
		this.infoButton = this.game.add.button(this.game.width/2 + 100, this.game.height/2 + 150, 'infoButton', this.infoClickHandler, this);
		Utils.center(this.infoButton);
		this.startButton = this.game.add.button(this.game.width/2, this.game.height/2 + 150, 'shopButton', this.shopClickHandler, this);
		Utils.center(this.startButton);
	}
}
import Text from '../objects/Text';
import Sound from '../objects/Sound';
import * as Utils from '../objects/Utils';
import KeysImage from '../objects/KeysImage';

export default class Info extends Phaser.State {
	preload(){
		// console.log('start info');
	}

	create(){
		this.soundSetup();
		this.initText();
		this.initButtons();
		this.initImages();
	}

	update(){
		
	}

	shutdown(){
		// console.log('end info');	
	}

	startClickHandler() {
		this.clickSound.play();
		Utils.changeState(this.game, 'Play');
	}

	backClickHandler() {
		this.clickSound.play();
		Utils.changeState(this.game, 'Menu');
	}

	soundSetup(){
		// music
		this.clickSound = new Sound(this.game, 'click');
	}

	initText(){
		let textBoxText = 'Het doel\nHet doel van het spel is om zo ver mogelijk te raken\nDit doe je door zoveel mogelijk enemies te ontwijken\n\nControls\nGebruik de pijltjestoetsen om te\nwisselen tussen bovenaan en onderaan\n\nGebruik de spatiebalk om te schieten\n\nGebruik de M om meteoren te laten regenen';
		this.textBox = new Text(this.game, this.game.width/2, this.game.height/2 - 40, 'gamefont', textBoxText, 20);
		Utils.center(this.textBox);
		this.game.add.existing(this.textBox);
	}

	initImages(){
		this.keysImg = new KeysImage(this.game, this.game.width/2 + 216, this.game.height/2 - 34, 'keysImg');
		Utils.center(this.keysImg);
		this.game.add.existing(this.keysImg);

		this.spaceBarImg = new KeysImage(this.game, this.game.width/2 + 219, this.game.height/2 + 20, 'spaceBar');
		Utils.center(this.spaceBarImg);
		this.game.add.existing(this.spaceBarImg);

		this.mKeyImg = new KeysImage(this.game, this.game.width/2 + 216, this.game.height/2 + 59, 'mKey');
		Utils.center(this.mKeyImg);
		this.game.add.existing(this.mKeyImg);
	}

	initButtons(){
		this.startButton = this.game.add.button(this.game.width/2 + 50, this.game.height/2 + 175, 'startButton', this.startClickHandler, this);
		Utils.center(this.startButton);
		this.backButton = this.game.add.button(this.game.width/2 - 50, this.game.height/2 + 175, 'backButton', this.backClickHandler, this);
		Utils.center(this.backButton);
	}
}
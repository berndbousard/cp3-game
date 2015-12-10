import Text from '../objects/Text';
import Sound from '../objects/Sound';
import * as Utils from '../objects/Utils';
import KeysImage from '../objects/KeysImage';
import Player from '../objects/Player';

export default class Info extends Phaser.State {
	preload(){
		console.log('start info');
	}
	create(){
		// music
		this.clickSound = new Sound(this.game, 'click');
		// To create multi-line text insert \r, \n or \r\n escape codes into the text string.
		// dit font heeft geen . tekens dus als je een punt typt komt er een error, geen punten dus ;)
		// new BitmapText(game, x, y, font, text, size)`
		let text = "Het doel\nHet doel van het spel is om zo ver mogelijk te raken\nDit doe je door zoveel mogelijk enemies te ontwijken\n\nControls\nDoor de pijltjestoesten te gebruiken kan je\nwisselen tussen bovenaan en onderaan\nGebruik de spatiebalk om te schieten";
		this.textBox = new Text(this.game, this.game.width/2, this.game.height/2, 'gamefont', text, 20);
		this.textBox.anchor.setTo(.5, .5);
		this.game.add.existing(this.textBox);
		

		this.startButton = this.game.add.button(
			this.game.width/2 + 50, this.game.height/2 + 175, 'startButton', this.startClickHandler, this
		);
		Utils.center(this.startButton);
		this.backButton = this.game.add.button(
			this.game.width/2 - 50, this.game.height/2 + 175, 'backButton', this.backClickHandler, this
		);
		Utils.center(this.backButton);

		this.keysImg = new KeysImage(this.game, this.game.width/2 + 225, this.game.height/2 + 50);
		Utils.center(this.keysImg);
		this.game.add.existing(this.keysImg);
	}
	update(){
		
	}
	shutdown(){
		console.log('end info');	
	}
	startClickHandler() {
		this.clickSound.play();
		Utils.changeState(this.game, 'Play');
	}
	backClickHandler() {
		this.clickSound.play();
		Utils.changeState(this.game, 'Menu');
	}
}
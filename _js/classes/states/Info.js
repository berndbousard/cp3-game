import Text from '../objects/Text';

export default class Info extends Phaser.State {
	preload(){
		console.log('start info');
	}
	create(){
		// To create multi-line text insert \r, \n or \r\n escape codes into the text string.
		// dit font heeft geen . tekens dus als je een punt typt komt er een error, geen punten dus ;)
		// new BitmapText(game, x, y, font, text, size)`
		let text = "het doel\nhet doel van het spel is van zo ver mogelijk te raken\ndit doe je door zoveel mogelijk enemies te ontwijken\n\ncontrols\nDoor de pijltjestoesten te gebruiken kan je\nwisselen tussen bovenaan of onderaan te lopen";
		this.textBox = new Text(this.game, this.game.width/2, this.game.height/2, 'gamefont', text, 20);
		this.textBox.anchor.setTo(.5, .5);
		this.game.add.existing(this.textBox);
		

		this.startButton = this.game.add.button(
			this.game.width/2, this.game.height/2 + 175, 'startButton', this.startClickHandler, this
		);
		this.startButton.anchor.setTo(0.5,0.5);
	}
	update(){
		
	}
	shutdown(){
		console.log('end info');	
	}
	startClickHandler() {
		this.game.state.start('Play');
	}
}
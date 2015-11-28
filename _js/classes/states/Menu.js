export default class Menu extends Phaser.State {
	preload(){
		console.log("start menu");
	}
	create(){
		
		// Images
		this.backgroundWhite = this.game.add.sprite(0, 0, 'cityWhite');
		this.backgroundBlack = this.game.add.sprite(0, 500, 'cityBlack');
		this.menuBackground = this.game.add.sprite(this.game.width/2, this.game.height/2, 'menuBackground');
		this.menuBackground.anchor.setTo(.5, .5);

		// Flip de background
		this.backgroundBlack.scale.y *= -1;

		// Button
		this.startButton = this.game.add.button(
			this.game.width/2, (this.game.height/2) + 30, 'playbutton', this.startClick, this
		);
		this.startButton.scale.setTo(0.5,0.5);
		this.startButton.anchor.setTo(0.5,0.5);
	}
	update(){
		
	}
	shutdown(){
		console.log("end menu");
	}
	startClick() {
		this.game.state.start('Play');
	}
}
export default class Menu extends Phaser.State {
	create(){
		console.log("menu");

		this.backgroundWhite = this.game.add.sprite(0,0,'cityWhite');
		this.backgroundBlack = this.game.add.sprite(0,500,'cityBlack');

		// flip de background
		this.backgroundBlack.scale.y *= -1;

		this.startButton = this.game.add.button(
			this.game.width/2, (this.game.height/2) -30, 'playbutton', this.startClick, this
		);

		this.startButton.scale.setTo(0.5,0.5);
		this.startButton.anchor.setTo(0.5,0.5);
	}
	startClick() {
		this.game.state.start('Play');
	}
}
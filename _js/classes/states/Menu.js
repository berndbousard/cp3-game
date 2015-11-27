export default class Menu extends Phaser.State {
	create(){
		console.log("menu");
		/*
		this.titleGroup = this.game.add.group();

		this.titleGroup.x = 30;
		this.titleGroup.y = 100;

		this.startButton = this.game.add.button(
			this.game.width/2, 300, 'startButton', this.startClick, this
		);

		this.startButton.anchor.setTo(0.5,0.5);
		*/
	}
	startClick() {
		this.game.state.start('Play');
	}
}
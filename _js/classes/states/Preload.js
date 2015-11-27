export default class Preload extends Phaser.State {
	preload() {
		console.log("preload");

		// load assets
		this.load.image('playbutton', 'assets/playbutton.png');
		this.load.image('cityWhite', 'assets/city_white.jpg');
		this.load.image('cityBlack', 'assets/city_black.jpg');

		this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

	}
	onLoadComplete() {
		this.game.state.start('Menu');
	}
}
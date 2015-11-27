export default class Preload extends Phaser.State {
	preload() {
		console.log("preload");

		// load assets
		// this.load.image('name_image', 'assets/image.png');

		this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

	}
	onLoadComplete() {
		this.game.state.start('Menu');
	}
}
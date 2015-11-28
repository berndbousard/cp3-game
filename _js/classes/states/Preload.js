export default class Preload extends Phaser.State {
	preload(){
		console.log("start preload");

		// load assets
		this.load.image('playbutton', 'assets/playbutton.png');
		this.load.image('cityWhite', 'assets/city_white.jpg');
		this.load.image('cityBlack', 'assets/city_black.jpg');
		this.load.image('menuBackground', 'assets/menu_background.png');
	}
	create(){
		this.game.state.start('Menu');
	}
	update(){
		
	}
	shutdown(){
		console.log('end preload');
	}
}
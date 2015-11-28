export default class Button extends Phaser.Button {
	constructor(game, x, y, key, callback, callbackContext){
		super(game, x, y, key, callback, callbackContext);
	}
	startClickHandler(){
		// this.game.state.start('Play');
		console.log('test');
	}
}
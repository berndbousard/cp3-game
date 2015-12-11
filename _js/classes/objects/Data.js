export default class Data {
	constructor(game){
		game.data = {};
		this.coins = 1;
		this.distance = 0;
		this.bullets = 5;
		this.kills = 0;
		this.meteor = 1;
		this.firstTimePlaying = true;
	}
}
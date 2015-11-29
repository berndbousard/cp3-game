import Player from '../objects/Player';
import BackgroundCity from '../objects/BackgroundCity';
import Enemy from '../objects/Enemy';


export default class Play extends Phaser.State {
	preload(){
		console.log('start play');
	}
	create(){
		// physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// Declarations
		this.keyArray = [];
		this.side = 'up'; //Nu kunnen we weten of hij bovenaan of onderaan loopt


		// Images
		this.cityBlack = new BackgroundCity(this.game, 0, 0, 750, 250, 'cityBlack');
		this.game.add.existing(this.cityBlack);
		

		this.cityWhite = new BackgroundCity(this.game, 0, 500, 750, 250, 'cityWhite');
		this.game.add.existing(this.cityWhite);

		this.cityWhite.scale.y *= -1; /* flip onderste stuk */


		// Player
		this.playerBlack = new Player(this.game, 50, this.game.height/2 - 21, 'player_black');
		this.game.add.existing(this.playerBlack);
		this.playerBlack.anchor.setTo(.5, .5);

		this.playerWhite = new Player(this.game, -1000, this.game.height/2 + 21, 'player_white');
		this.game.add.existing(this.playerWhite);
		this.playerWhite.anchor.setTo(.5, .5);

		this.playerWhite.scale.y *= -1; /* flip onderste stuk */


		// Set keys
		this.keyArray[0] = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		this.keyArray[1] = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

		// enemy
		this.enemies = this.game.add.group();
		this.game.time.events.loop(Phaser.Timer.SECOND * 3, this.spawnEnemy, this);

	}
	update(){

		if(this.keyArray[0].isDown){ // up

			this.playerBlack.x = 50;
			this.playerWhite.x = -1000;
			this.side = 'up';
		}

		if(this.keyArray[1].isDown){ // down

			this.playerWhite.x = 50;
			this.playerBlack.x = -1000;
			this.side = 'down';
		}

		// console.log(this.game.input.x, this.game.input.y);
		//makkelijk om te meten

		// collision
		console.log(this.enemies.children.length); //zo zie je hoeveel er in enemies group zitten, zit nog geen pooling op
		this.enemies.forEach((oneEnemy) => {
			this.game.physics.arcade.collide(this.playerBlack, oneEnemy, this.enemyPlayerCollisionHandler, null, this);
		});

		this.enemies.forEach((oneEnemy) => {
			this.game.physics.arcade.collide(this.playerWhite, oneEnemy, this.enemyPlayerCollisionHandler, null, this);
		});
	}
	shutdown(){
		console.log('end play');
	}

	// eigen functies
	spawnEnemy(){
		console.log(this.side);
		let enemy = this.enemies.getFirstExists(false);
		if(!enemy){
			enemy = new Enemy(this.game, 725, 225, 'black');
			this.enemies.add(enemy);
		}
	}
	enemyPlayerCollisionHandler(){
		console.log('botsing');
	}
}
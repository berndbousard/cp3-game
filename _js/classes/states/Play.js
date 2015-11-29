import Player from '../objects/Player';
import BackgroundCity from '../objects/BackgroundCity';
import Enemy from '../objects/Enemy';
import Text from '../objects/Text';
import Coin from '../objects/Coin';

export default class Play extends Phaser.State {
	preload(){
		console.log('start play');
	}
	create(){
		// physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// Declarations
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.side = 'up'; //Nu kunnen we weten of hij bovenaan of onderaan loopt
		this.game.score = 0;
		this.game.distance = 0;
		this.gameSpeed = .3; //variable die de snelheid van de game bepaalt. hoe groter het getal hoe sneller/moeilijker


		// Images
		this.cityBlack = new BackgroundCity(this.game, 0, 0, 750, 250, 'cityBlack');
		this.game.add.existing(this.cityBlack);

		this.cityWhite = new BackgroundCity(this.game, 0, 500, 750, 250, 'cityWhite');
		this.game.add.existing(this.cityWhite);
		this.cityWhite.scale.y *= -1; /* flip onderste stuk */

		// Player
		this.player = new Player(this.game, 50, this.game.height/2 - 43);
		this.game.add.existing(this.player);

		// enemy
		this.enemies = this.game.add.group();
		this.enemyTimer = this.game.time.events.loop(Phaser.Timer.SECOND / this.gameSpeed, this.spawnEnemy, this);

		// coins
		this.coins = this.game.add.group();
		this.coinTimer = this.game.time.events.loop(Phaser.Timer.SECOND / this.gameSpeed, this.spawnCoin, this);

		// score + text
		this.distanceTextBox = new Text(this.game, this.game.width/2, 50, 'gamefont', this.game.distance.toString() + ' km', 30);
		this.game.add.existing(this.distanceTextBox);

		this.scoreTextBox = new Text(this.game, this.game.width/2 + 300, 50, 'gamefont', this.game.score.toString() + ' coins', 20);
		this.game.add.existing(this.scoreTextBox);

	}
	update(){

		if(this.cursors.down.isDown){
			this.player.flipDown();
		}
		if(this.cursors.up.isDown){
			this.player.flipUp();
		}

		console.log(this.game.input.x, this.game.input.y);
		//makkelijk om te meten

		// collision
		//console.log(this.enemies.children.length); //zo zie je hoeveel er in enemies group zitten, zit nog geen pooling op
		this.enemies.forEach((oneEnemy) => {
			this.game.physics.arcade.collide(this.player, oneEnemy, this.enemyPlayerCollisionHandler, null, this);
		});

		this.game.distance += .01;
		this.distanceTextBox.setText(Math.floor(this.game.distance) + ' km');

	}
	shutdown(){
		console.log('end play');
	}

	// eigen functies
	spawnEnemy(){
		//console.log(this.side);
		let enemy = this.enemies.getFirstExists(false);
		if(!enemy){
			enemy = new Enemy(this.game, 725, 225, 'black');
			this.enemies.add(enemy);
		}
	}
	enemyPlayerCollisionHandler(player, enemy){
		enemy.destroy();
		this.cityBlack.autoScroll(0, 0);
		this.cityWhite.autoScroll(0, 0);
		this.enemyTimer.timer.destroy();
		player.destroy();
	}

	spawnCoin(){
		console.log('spawn een coin');
	}

	collectCoin(){
		this.game.score += 1;
		this.scoreTextBox.setText(Math.floor(this.game.score) + ' coins');
	}
}
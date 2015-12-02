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
		this.game.state.score = 0;
		this.game.state.distance = 0;
		this.gameSpeed = .95; //variable die de snelheid van de game bepaalt. hoe groter het getal hoe sneller/moeilijker. Beinvloed momenteel enkel spawnrate van enemy
		this.delay = Phaser.Timer.SECOND * 2;

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
		this.enemyTimer = this.game.time.events.loop(this.delay, this.spawnEnemy, this);
		console.log(this.enemyTimer);

		// coins
		this.coins = this.game.add.group();
		this.coinTimer = this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.spawnCoin, this);

		// distance score text
		this.distanceTimer = this.game.time.events.loop(Phaser.Timer.SECOND / 1.2, this.increaseDistance, this);
		this.distanceTextBox = new Text(this.game, this.game.width/2, 50, 'gamefont', this.game.state.distance.toString() + ' km', 30);
		this.game.add.existing(this.distanceTextBox);

		// coins score text
		this.scoreTextBox = new Text(this.game, this.game.width/2 + 300, 50, 'gamefont', this.game.state.score + ' coins', 20);
		this.game.add.existing(this.scoreTextBox);

	}
	update(){

		if(this.cursors.down.isDown){
			this.player.flipDown();
		}
		if(this.cursors.up.isDown){
			this.player.flipUp();
		}

		// console.log(this.game.input.x, this.game.input.y);
		// makkelijk om te meten

		// collision
		// console.log('aantal coins' + this.coins.children.length); //zo zie je hoeveel er in enemies group zitten, zit nog geen pooling op

		this.enemies.forEach((oneEnemy) => {
			this.game.physics.arcade.overlap(this.player, oneEnemy, this.enemyPlayerCollisionHandler, null, this);
			this.game.physics.arcade.collide(this.player, oneEnemy, this.enemyPlayerCollisionHandler, null, this);
		});

		this.coins.forEach((oneCoin) => {
			this.game.physics.arcade.overlap(this.player, oneCoin, this.coinPlayerCollisionHandler, null, this);
		});

		// console.log('score ' + this.game.state.score);
		// console.log(this.gameSpeed);
	}
	shutdown(){
		console.log('end play');
	}

	// eigen functies
	spawnEnemy(){
		let enemy = this.enemies.getFirstExists(false);
		if(!enemy){
			enemy = new Enemy(this.game, 0, 0, 'black');
		}
		// positioning
		let x = this.game.rnd.integerInRange(750, 800);
		let lot = Math.round(Math.random()*1);
		let y;
		if(lot == 0){
			// boven
			y = 225;
			if(enemy.scale.y = -1){
				enemy.scale.y = 1;
			}
			enemy.loadTexture('enemy_black', null, false);
		}
		if(lot == 1){
			// onder
			y = 275;
			if(enemy.scale.y = 1){
				enemy.scale.y = -1;
			}
			enemy.loadTexture('enemy_white', null, false);
		}
		this.game.physics.arcade.enableBody(enemy);
		enemy.reset(x, y);
		enemy.body.velocity.x = -250;
		this.enemies.add(enemy);
	}

	spawnCoin(){
		// console.log('spawn een coin');
		let coin = this.coins.getFirstExists(false);
		if(!coin){
			coin = new Coin(this.game, 0, 0);
		}

		// positioning
		let x = this.game.rnd.integerInRange(750, 800);
		let lot = Math.round(Math.random()*1);
		let y = this.game.height/2;

		this.game.physics.arcade.enableBody(coin);
		coin.reset(x, y);
		coin.body.velocity.x = -100;
		this.coins.add(coin);
	}

	enemyPlayerCollisionHandler(player, enemy){
		enemy.destroy();
		this.cityBlack.autoScroll(0, 0);
		this.cityWhite.autoScroll(0, 0);
		this.enemyTimer.timer.destroy();
		player.destroy();

		console.log('dead');

		this.game.state.start('Gameover');
		//this.game.time.events.add(200, this.doGameover, this);
	}

	coinPlayerCollisionHandler(player, coin){
		coin.exists = false;
		this.game.state.score++;
		let suffix = this.createSuffixForScore();
		this.scoreTextBox.text = this.game.state.score + suffix;
	}

	doGameover(){
		this.game.state.start('Gameover');
	}

	createSuffixForScore(){
		if(this.game.state.score === 1){
			return ' coin';
		}else{
			return ' coins';
		}
	}
	increaseDistance(){
		this.game.state.distance++;
		this.distanceTextBox.text = this.game.state.distance + ' km';
		if(this.game.state.distance%2 === 0){
			let delay = this.enemyTimer.delay * this.gameSpeed;
			// console.log(this.gameSpeed);
			// this.enemyTimer.tick = 1449055971970 - (Phaser.Timer.SECOND / this.gameSpeed);
			this.enemyTimer.delay = delay;
			// console.log(this.enemyTimer.delay);
		}
	}
}
import Player from '../objects/Player';
import BackgroundCity from '../objects/BackgroundCity';
import Enemy from '../objects/Enemy';
import Text from '../objects/Text';
import Coin from '../objects/Coin';
import Sound from '../objects/Sound';
import BulletGroup from '../objects/BulletGroup';
import Keyboard from '../objects/Keyboard';
import * as Utils from '../objects/Utils';

export default class Play extends Phaser.State {
	preload(){
		console.log('start play');
	}
	create(){
		this.flipSound = new Sound(this.game, 'change_side');
		this.coinSound = new Sound(this.game, 'coin');
		this.enemyHitSound = new Sound(this.game, 'enemy_hit');

		// physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// controls
		this.cursors = this.game.input.keyboard.createCursorKeys();
		// this.keys = this.game.input.keyboard.addKeys({
		// 	'SPACEBAR': Phaser.Keyboard.SPACEBAR
		// });
		this.spacebar = this.game.input.keyboard.addKey(32);
		this.spacebar.onDown.add(this.spaceBarHandler, this);
		// this.


		// Declarations
		this.side = 'up'; //Nu kunnen we weten of hij bovenaan of onderaan loopt
		this.game.state.score = 0;
		this.game.state.distance = 0;
		this.game.state.bullets = 5;
		this.gameSpeed = .95; //variable die de snelheid van de game bepaalt. hoe groter het getal hoe sneller/moeilijker. Beinvloed momenteel enkel spawnrate van enemy
		this.delay = Phaser.Timer.SECOND * 2;

		// Images
		this.city = new BackgroundCity(this.game, 0, 0, 750, 500, 'city');
		this.game.add.existing(this.city);

		// Player
		this.player = new Player(this.game, 50, this.game.height/2 - 43, this.flipSound);
		this.game.add.existing(this.player);

		// enemy
		this.enemies = this.game.add.group();
		this.enemyTimer = this.game.time.events.loop(this.delay, this.spawnEnemy, this);

		// coins
		this.coins = this.game.add.group();
		this.coinTimer = this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.spawnCoin, this);

		// distance score text
		this.distanceTimer = this.game.time.events.loop(Phaser.Timer.SECOND / 1.2, this.increaseDistance, this);
		this.distanceTextBox = new Text(this.game, this.game.width/2, 50, 'gamefont', this.game.state.distance.toString() + ' km', 30);
		this.game.add.existing(this.distanceTextBox);

		// coins score text
		this.scoreTextBox = new Text(this.game, this.game.width/2 + 300, 50, 'gamefont', this.game.state.score + '\ncoins', 20, 'center');
		this.game.add.existing(this.scoreTextBox);

		// bullets score text
		this.bulletTextBox = new Text(this.game, this.game.width/2 - 300, 50, 'gamefont', this.game.state.bullets + '\nbullets', 20, 'center');
		this.game.add.existing(this.bulletTextBox);

		// bullets
		this.bullets = this.game.add.group();
	}
	update(){

		if(this.cursors.down.isDown){
			this.player.flipDown();
		}
		if(this.cursors.up.isDown){
			this.player.flipUp();
		}

		// console.log(this.game.state.bullets);
		
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

		this.bullets.forEach((oneBullet) => {
			this.enemies.forEach((oneEnemy) => {
				this.game.physics.arcade.collide(oneBullet, oneEnemy, this.enemyBulletCollisionHandler, null, this);
			});
		});

		console.log(this.coins.length);
	}
	shutdown(){
		console.log('end play');
		this.city.autoScroll(0, 0);
		// this.enemyTimer.timer.destroy();
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
		player.destroy();
		this.game.state.start('Gameover');
	}

	coinPlayerCollisionHandler(player, coin){
		coin.exists = false;
		this.game.state.score++;
		this.game.state.bullets += 5;
		this.bulletTextBox.text = this.game.state.bullets + '\nbullets';
		let suffix = this.createSuffixForScore();
		this.updateScore(suffix);
		this.coinSound.play();
	}

	enemyBulletCollisionHandler(bullet, enemy){
		enemy.destroy();
		bullet.destroy();
		this.enemyHitSound.play();
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
		this.updateDistance();
		if(this.game.state.distance%2 === 0){
			let delay = this.enemyTimer.delay * this.gameSpeed;
			// console.log(this.gameSpeed);
			// this.enemyTimer.tick = 1449055971970 - (Phaser.Timer.SECOND / this.gameSpeed);
			this.enemyTimer.delay = delay;
			// console.log(this.enemyTimer.delay);
		}
	}

	spaceBarHandler(){
		// shoot
		console.log('schoot');
		if(this.game.state.bullets >= 1){
			let bullet = this.bullets.getFirstExists(false);
			if(!bullet){
				bullet = new BulletGroup(this.game, this.bullets, this.player.x, this.player.y);
			}
			let x = this.player.body.x - 10;
			let y = this.player.body.y - 105;
			// console.log(x, y);
			bullet.reset(x, y);
			this.game.state.bullets--;
			this.bulletTextBox.text = this.game.state.bullets + '\nbullets';
			// console.log('shoot');
		}
	}
	updateScore(suffix){
		this.scoreTextBox.text = this.game.state.score + suffix;
	}
	updateDistance(){
		this.distanceTextBox.text = this.game.state.distance + ' km';
	}
}
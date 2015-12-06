import Player from '../objects/Player';
import BackgroundCity from '../objects/BackgroundCity';
import Enemy from '../objects/Enemy';
import Text from '../objects/Text';
import Coin from '../objects/Coin';
import Sound from '../objects/Sound';
import BulletGroup from '../objects/BulletGroup';
import Keyboard from '../objects/Keyboard';
import * as Utils from '../objects/Utils';
import Data from '../objects/Data';

let harderOverTime = 0;

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
		this.spacebar = this.game.input.keyboard.addKey(32);
		this.spacebar.onDown.add(this.spaceBarHandler, this);


		// Declarations
		this.side = 'up'; //Nu kunnen we weten of hij bovenaan of onderaan loopt
		Data.score = 0;
		Data.distance = 0;
		Data.bullets = 20;
		this.gameSpeed = .95; //variable die de snelheid van de game bepaalt. hoe groter het getal hoe sneller/moeilijker. Beinvloed momenteel enkel spawnrate van enemy
		this.delay = Phaser.Timer.SECOND * 2;
		this.minimumDistanceBetween = 500;

		this.bossTimer = 0;
		this.keepUpWithBoss = []; // array om bij te houden welke bosses er al aangemaakt zijn. Idealiter blijft deze array op 0 of 1 entries.

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
		this.distanceTextBox = new Text(this.game, this.game.width/2, 50, 'gamefont', Data.distance + ' km', 30);
		this.game.add.existing(this.distanceTextBox);

		// coins score text
		this.scoreTextBox = new Text(this.game, this.game.width/2 + 300, 50, 'gamefont', Data.score + '\ncoins', 20, 'center');
		this.game.add.existing(this.scoreTextBox);

		// bullets score text
		this.bulletTextBox = new Text(this.game, this.game.width/2 - 300, 50, 'gamefont', Data.bullets + '\nbullets', 20, 'center');
		this.game.add.existing(this.bulletTextBox);

		// bullets
		this.bullets = this.game.add.group();
	}
	update(){

		harderOverTime ++;

		if(this.cursors.down.isDown){
			this.player.flipDown();
			if(this.keepUpWithBoss.length != 0){
				this.keepUpWithBoss[0].flipDown();
			}
		}
		if(this.cursors.up.isDown){
			this.player.flipUp();
			if(this.keepUpWithBoss.length != 0){
				this.keepUpWithBoss[0].flipUp();
			}
		}

		// console.log(Data.bullets);

		// collision
		this.enemies.forEach((oneEnemy) => {
			this.game.physics.arcade.overlap(this.player, oneEnemy, this.enemyPlayerCollisionHandler, null, this);
			this.game.physics.arcade.collide(this.player, oneEnemy, this.enemyPlayerCollisionHandler, null, this);
		});

		this.coins.forEach((oneCoin) => {
			this.game.physics.arcade.overlap(this.player, oneCoin, this.coinPlayerCollisionHandler, null, this);
		});

		this.bullets.forEach((oneBullet) => {
			this.enemies.forEach((oneEnemy) => {
				this.game.physics.arcade.overlap(oneBullet, oneEnemy, this.enemyBulletCollisionHandler, null, this);
				this.game.physics.arcade.collide(oneBullet, oneEnemy, this.enemyBulletCollisionHandler, null, this);

			});
		});
	}
	shutdown(){
		console.log('end play');
		this.city.autoScroll(0, 0);
	}

	// eigen functies
	spawnEnemy(){
		let bossChance = Math.random();
		let orangeEnemyChance = Math.random() * (0.6 + (harderOverTime/10000));
		console.log(bossChance, orangeEnemyChance);

		let direction;
		let enemyType = "normal";

		let enemy = this.enemies.getFirstExists(false);

		if(!enemy){
			if(bossChance < (0.2 + (harderOverTime/10000)) && bossChance > 0 && this.keepUpWithBoss.length === 0){
				console.log("spawn a boss");
				enemy = new Enemy(this.game, 0, 0, 'enemy_red');
				enemyType = "boss";

				// geef hem mee aan this.keepUpWithBoss zodat je later er nog veranderingen op kan uitvoeren
				// (buiten deze functie om)
				this.keepUpWithBoss.push(enemy);

			}else if(orangeEnemyChance < 0.4){
				console.log("spawn an orange guy");
				enemy = new Enemy(this.game, 0, 0, 'enemy_orange');
				enemyType = "orange";
			}else{
				enemy = new Enemy(this.game, 0, 0, 'enemy_black');
				enemyType = "normal";
			}
		}

		// positioning
		let x = this.game.rnd.integerInRange(750, 800);
		let lot = Math.round(Math.random()*1);
		let y;
		if(lot == 0){
			direction = "up";
			if(enemyType === "boss"){
				y = (this.game.height/2) - 29;
			}else{
				y = 225;
			}
			enemy.scale.y = 1;
		}
		if(lot == 1){
			direction = "down";
			if(enemyType === "boss"){
				y = (this.game.height/2) + 31;
			}else{
				y = 275;
			}
			enemy.scale.y = -1;
		}

		this.spawnEnemyDetails(orangeEnemyChance, enemy, direction, enemyType);

		this.game.physics.arcade.enableBody(enemy);
		enemy.reset(x, y);
		enemy.body.velocity.x = -250 - (harderOverTime/50);
		this.enemies.add(enemy);
	}

	spawnEnemyDetails(orangeEnemyChance, enemy, direction, enemyType){
		// boss
		if(enemyType === "boss"){
			enemy.lives = 4;
			enemy.loadTexture('enemy_red', null, false);
		// harder enemy
		}else if(enemyType === "orange"){
			enemy.lives = 2;
			enemy.loadTexture('enemy_orange', null, false);
		// regular enemy
		}else{
			if(direction === "up"){
				enemy.loadTexture('enemy_black', null, false);
			}else{
				enemy.loadTexture('enemy_white', null, false);
			}
			enemy.lives = 1;
		}
	}

	spawnCoin(){
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
		player.destroy();
		enemy.destroy();
		Utils.changeState(this.game, 'Gameover');
	}

	coinPlayerCollisionHandler(player, coin){
		coin.exists = false;
		Data.score++;
		Data.bullets += 5;
		this.bulletTextBox.text = Data.bullets + '\nbullets';
		let suffix = this.createSuffixForScore();
		this.updateScore(suffix);
		this.coinSound.play();
	}

	enemyBulletCollisionHandler(enemy, bullet){
		// console.log('bullet hit');

		enemy.lives--;
		if(enemy.lives === 0){
			enemy.destroy();
			if(this.keepUpWithBoss.length !== 0){
				if(this.keepUpWithBoss[0].lives === 0){
					this.keepUpWithBoss = [];
				}
			}
		}
		bullet.destroy();
		this.enemyHitSound.play();
	}

	createSuffixForScore(){
		if(Data.score === 1){
			return ' coin';
		}else{
			return ' coins';
		}
	}

	increaseDistance(){
		Data.distance++;
		this.updateDistance();
		if(Data.distance%2 === 0){
			let delay = this.enemyTimer.delay * this.gameSpeed;
			// console.log(this.gameSpeed);
			// this.enemyTimer.tick = 1449055971970 - (Phaser.Timer.SECOND / this.gameSpeed);
			this.enemyTimer.delay = delay;

			// zorg dat er niet enemies elkaar overlappen en dat de player (in principe) nog kan swappen
			if(this.enemyTimer.delay < this.minimumDistanceBetween){
				this.enemyTimer.delay = this.minimumDistanceBetween;
			}
		}
	}

	spaceBarHandler(){
		// shoot
		if(Data.bullets >= 1){
			let bullet = this.bullets.getFirstExists(false);
			if(!bullet){
				bullet = new BulletGroup(this.game, this.bullets, this.player.x, this.player.y);
			}
			let x = this.player.body.x - 10;
			let y = this.player.body.y - 105;
			// console.log(x, y);
			bullet.reset(x, y);
			Data.bullets--;
			this.bulletTextBox.text = Data.bullets + '\nbullets';
			// console.log('shoot');
		}
	}
	updateScore(suffix){
		this.scoreTextBox.text = Data.score + suffix;
	}
	updateDistance(){
		this.distanceTextBox.text = Data.distance + ' km';
	}
}
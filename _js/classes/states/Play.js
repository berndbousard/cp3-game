import Player from '../objects/Player';
import BackgroundCity from '../objects/BackgroundCity';
import Meteor from '../objects/Meteor';

import Text from '../objects/Text';
import Coin from '../objects/Coin';
import Sound from '../objects/Sound';
import BulletGroup from '../objects/BulletGroup';
import Keyboard from '../objects/Keyboard';
import * as Utils from '../objects/Utils';
import Data from '../objects/Data';

import EnemyBlack from '../objects/EnemyBlack';
import EnemyWhite from '../objects/EnemyWhite';
import EnemyOrange from '../objects/EnemyOrange';
import EnemyRed from '../objects/EnemyRed';

export default class Play extends Phaser.State {
	preload(){
		console.log('start play');
		// we kunnen de preload functie gebruiken als een soort preload voor de sounds
		this.backgroundSound = new Sound(this.game, 'background');
		this.flipSound = new Sound(this.game, 'change_side');
		this.coinSound = new Sound(this.game, 'coin');
		this.enemyHitSound = new Sound(this.game, 'enemy_hit');
		this.playerHitSound = new Sound(this.game, 'player_hit');
		this.playerShootSound = new Sound(this.game, 'player_shoot', 0.5);
	}
	create(){

		// sound
		this.backgroundSound.play();

		// physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// controls
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.spacebar = this.game.input.keyboard.addKey(32);
		this.m = this.game.input.keyboard.addKey(77);
		this.spacebar.onDown.add(this.spaceBarHandler, this);
		this.m.onDown.add(this.mDownHandler, this);
		this.side = 'up';

		// Declarations
		if(!Data.coins){
			Data.coins = 0;
		}else{
			Data.coins = Data.coins;
		}
		if(!Data.bullets){
			Data.bullets = 5;
		}else{
			Data.bullets = Data.bullets;
		}
		if(!Data.meteor){
			Data.meteor = 5;
		}else{
			Data.meteor = Data.meteor;
		}
		Data.distance = 0;
		Data.kills = 0;
		this.gameSpeed = .95; //variable die de snelheid van de game bepaalt. hoe groter het getal hoe sneller/moeilijker. Beinvloed momenteel enkel spawnrate van enemy
		this.delay = Phaser.Timer.SECOND * 2;
		this.minimumDistanceBetween = 500;

		//this.bossTimer = 0;
		//this.keepUpWithBoss = []; // array om bij te houden welke bosses er al aangemaakt zijn. Idealiter blijft deze array op 0 of 1 entries.

		// Images
		this.city = new BackgroundCity(this.game, 0, 0, 750, 500, 'city');
		this.game.add.existing(this.city);

		// Player
		this.player = new Player(this.game, 50, this.game.height/2 - 43, this.flipSound);
		this.game.add.existing(this.player);

		// coins
		this.coins = this.game.add.group();
		this.coinTimer = this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.spawnCoin, this);

		// distance score text
		this.distanceTimer = this.game.time.events.loop(Phaser.Timer.SECOND / 1.2, this.increaseDistance, this);
		this.distanceTextBox = new Text(this.game, this.game.width/2, 50, 'gamefont', Data.distance + ' km', 30);
		this.game.add.existing(this.distanceTextBox);

		// coins score text
		this.scoreTextBox = new Text(this.game, this.game.width/2 + 300, 50, 'gamefont', Data.coins + '\ncoins', 20, 'center');
		this.game.add.existing(this.scoreTextBox);

		// bullets score text
		this.bulletTextBox = new Text(this.game, this.game.width/2 - 300, 50, 'gamefont', Data.bullets + '\nbullets', 20, 'center');
		this.game.add.existing(this.bulletTextBox);

		// kills score text
		this.killsTextBox = new Text(this.game, this.game.width/2 - 150, 50, 'gamefont', Data.kills + '\nkills', 20, 'center');
		this.game.add.existing(this.killsTextBox);

		// meteor score text
		this.meteorTextBox = new Text(this.game, this.game.width/2 + 150, 50, 'gamefont', Data.meteor + '\nmeteor', 20, 'center');
		this.game.add.existing(this.meteorTextBox);

		// bullets
		this.bullets = this.game.add.group();

		// All enemies
		this.allEnemies = this.game.add.group();
		this.enemyTimer = this.game.time.events.loop(this.delay, this.spawnEnemy, this);

		// testblack
		this.blackEnemies = this.game.add.group();
		this.blackEnemies.enableBody = true;
		this.allEnemies.add(this.blackEnemies);

		this.whiteEnemies = this.game.add.group();
		this.whiteEnemies.enableBody = true;
		this.allEnemies.add(this.whiteEnemies);

		this.orangeEnemies = this.game.add.group();
		this.orangeEnemies.enableBody = true;
		this.allEnemies.add(this.orangeEnemies);

		this.redEnemies = this.game.add.group();
		this.redEnemies.enableBody = true;
		this.allEnemies.add(this.redEnemies);

		this.meteorGroup = this.game.add.group();
		this.meteorGroup.enableBody = true;
	}

	update(){
		// movement
		this.blackEnemies.forEach(enemy => {
			enemy.body.velocity.x = -200;
		});

		this.whiteEnemies.forEach(enemy => {
			enemy.body.velocity.x = -200;
		});

		this.orangeEnemies.forEach(enemy => {
			enemy.body.velocity.x = -250;
		});

		this.redEnemies.forEach(enemy => {
			enemy.body.velocity.x = -50;
		});

		this.meteorGroup.forEach((meteor) => {
			meteor.body.velocity.y = 100;
		});

		// controls
		if(this.cursors.down.isDown){
			this.side = 'down';
			this.player.flipDown();
			this.redEnemies.forEach((oneEnemy) => {
				oneEnemy.flipDown();
			});
		}
		if(this.cursors.up.isDown){
			this.side = 'up';
			this.player.flipUp();
			this.redEnemies.forEach((oneEnemy) => {
				oneEnemy.flipUp();
			});
		}

		// collision
		this.coins.forEach((oneCoin) => {
			this.game.physics.arcade.overlap(this.player, oneCoin, this.coinPlayerCollisionHandler, null, this);
		});

		this.allEnemies.forEach((oneEnemy) => {
			this.game.physics.arcade.overlap(this.player, oneEnemy, this.enemyPlayerCollisionHandler, null, this);
			// this.game.physics.arcade.collide(this.player, oneEnemy, this.enemyPlayerCollisionHandler, null, this);
		});

		this.bullets.forEach((oneBullet) => {
			this.allEnemies.forEach((oneEnemy) => {
				this.game.physics.arcade.collide(oneBullet, oneEnemy, this.enemyBulletCollisionHandler, null, this);
			});
		});

		this.meteorGroup.forEach((oneMeteor) => {
			this.allEnemies.forEach((oneEnemy) => {
				this.game.physics.arcade.collide(oneMeteor, oneEnemy, this.meteorEnemyCollisionHandler, null, this);
			});
		});
	}

	shutdown(){
		console.log('end play');
		this.backgroundSound.destroy();
	}

	spawnEnemy(){
		let color = this.generateRandomColor();
		let enemy, x, y;
		// object pooling werkt, yes
		console.log('black ' + this.blackEnemies.length, 'white ' + this.whiteEnemies.length, 'orange ' + this.orangeEnemies.length, 'red ' + this.redEnemies.length);
		
		// this.enemyConfigs = {
		// 	'black': {
		// 		'group': this.blackEnemies,
		// 		'class': EnemyBlack,
		// 		'getY': enemy => 255,
		// 		'getScale': enemy => 1
		// 	},
		// 	'orange': {
		// 		'group': this.orangeEnemies,
		// 		'class': EnemyOrange,
		// 		'getY': enemy => {
		// 			if(enemy.scale === -1){
		// 				return 275;
		// 			}
		// 			return 225;
		// 		},
		// 		'getScale': enemy => {
		// 			if(Math.random() > .5){
		// 				return -1;
		// 			}
		// 			return 1;
		// 		}
		// 	}
		// };

		// const enemyConfig = this.enemyConfigs[color];
		// if(enemyConfig) {
		// 	enemy = enemyConfig.group.getFirstExists(false);
		// 	if(!enemy){
		// 		enemy = new enemyConfig.class(this.game, 0, 0);
		// 		enemy.body.velocity.x = -200;
		// 		enemyConfig.group.add(enemy);
		// 	}
		// 	enemy.scale.y = enemyConfig.getScale(enemy);
		// 	y = enemyConfig.getY(enemy);
		// 	x = this.randomInRange(750, 800);
		// 	enemy.reset(x, y);
		// 	console.log(x, y, enemy.scale);
		// }

		

		switch(color){
			case 'black':
				enemy = this.blackEnemies.getFirstExists(false);
				if(!enemy){
					enemy = new EnemyBlack(this.game, 0, 0);
					enemy.body.velocity.x = -200;
					this.blackEnemies.add(enemy);
				}
				y = 225;
				break;

			case 'white':
				enemy = this.whiteEnemies.getFirstExists(false);
				if(!enemy){
					enemy = new EnemyWhite(this.game, 0, 0);
					enemy.body.velocity.x = -200;
					this.whiteEnemies.add(enemy);
				}
				y = 275;
				break;

			case 'orange':
				enemy = this.orangeEnemies.getFirstExists(false);
				if(!enemy){
					enemy = new EnemyOrange(this.game, 0, 0);
					enemy.body.velocity.x = -200;
					this.orangeEnemies.add(enemy);
				}
				if(Math.random() > .5){
					enemy.scale.y = -1;
					y = 275;
				}else{
					enemy.scale.y = 1;
					y = 225;
				}
				break;

			case 'red':
				enemy = this.redEnemies.getFirstExists(false);
				if(!enemy){
					enemy = new EnemyRed(this.game, 0, 0);
					enemy.body.velocity.x = -200;
					this.redEnemies.add(enemy);
				}

				if(this.side == 'down'){
					enemy.scale.y = -1;
					y = 283;
				}else{
					enemy.scale.y = 1;
					y = 217;
				}
				break;
		}
		x = this.randomInRange(750, 800);
		enemy.reset(x, y);
		
	}

	spawnCoin(){
		let coin = this.coins.getFirstExists(false);
		// positioning
		let x = this.randomInRange(750, 800);
		let y = this.game.height/2;
		if(!coin){
			coin = new Coin(this.game, 0, 0);
		}

		coin.reset(x, y);
		coin.body.velocity.x = -100;
		this.coins.add(coin);
	}

	//collisions
	enemyPlayerCollisionHandler(player, enemy){
		// player.destroy();
		// enemy.destroy();
		player.pendingDestroy = true;
		enemy.pendingDestroy = true;
		this.playerHitSound.play();
		Utils.changeState(this.game, 'Gameover');
	}

	coinPlayerCollisionHandler(player, coin){
		coin.exists = false;
		Data.coins++;
		Data.bullets += 5;
		this.bulletTextBox.text = Data.bullets + '\nbullets';
		let suffix = this.createSuffixForScore();
		this.updateScore(suffix);
		this.coinSound.play();
	}

	enemyBulletCollisionHandler(bullet, enemy){
		// console.log(enemy.lives);
		// enemy.destroy();
		// bullet.destroy();
		enemy.lives--;
		if(enemy.lives < 1){
			//enemy.destroy();
			enemy.pendingDestroy = true;
			Data.kills++;
			this.killsTextBox.text = Data.kills + '\nkills';
		}
		
		//bullet.destroy();
		bullet.pendingDestroy = true;
		this.enemyHitSound.play();
	}

	meteorEnemyCollisionHandler(meteor, enemy){
		meteor.pendingDestroy = true;
		Data.kills++;
		this.killsTextBox.text = Data.kills + '\nkills';
		enemy.pendingDestroy = true;
		this.enemyHitSound.play();
	}

	createSuffixForScore(){
		if(Data.coins === 1){
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
			let x = this.player.x - 10;
			let y = this.player.y - 105;
			bullet.reset(x, y);

			Data.bullets--;
			this.bulletTextBox.text = Data.bullets + '\nbullets';

			this.playerShootSound.play();
		}
	}
	mDownHandler(){
		if(Data.meteor >= 1){
			Data.meteor--;
			// nog een geluid
			this.spawnMeteor();
			this.updateMeteorText();
		}
	}
	spawnMeteor(){
		if(Data.meteor >= 1){
			for(let i = 0; i < 3; i++){
				let x = this.randomInRange(0, this.game.width);
				let y = this.randomInRange(0, -75);
				let meteor = this.meteorGroup.getFirstExists(false);
				if(!meteor){
					meteor = new Meteor(this.game, x, y);
				}
				meteor.reset(x, y);
				meteor.body.velocity.y = 50;
				this.meteorGroup.add(meteor);
			}
		}
	}
	updateMeteorText(){
		this.meteorTextBox.text = Data.meteor + '\nmeteor';
	}
	updateScore(suffix){
		this.scoreTextBox.text = Data.coins + suffix;
	}
	updateDistance(){
		this.distanceTextBox.text = Data.distance + ' km';
	}

	generateRandomColor(){
		let colors = ['black', 'orange', 'red', 'white'];
		return colors[Math.round(Math.random() * (colors.length - 1))];
	}
	randomInRange(num1, num2){
		return this.game.rnd.integerInRange(num1, num2);
	}
}
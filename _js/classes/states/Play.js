import Player from '../objects/Player';
import BackgroundCity from '../objects/BackgroundCity';
import Meteor from '../objects/Meteor';

import Text from '../objects/Text';
import Coin from '../objects/Coin';
import Sound from '../objects/Sound';
import BulletGroup from '../objects/BulletGroup';
import * as Utils from '../objects/Utils';
import Data from '../objects/Data';
import Explosion from '../objects/Explosion';

import EnemyBlack from '../objects/EnemyBlack';
import EnemyWhite from '../objects/EnemyWhite';
import EnemyOrange from '../objects/EnemyOrange';
import EnemyRed from '../objects/EnemyRed';

export default class Play extends Phaser.State {
	preload(){
		console.log('start play');
	}
	create(){
		// sounds
		this.soundSetup();

		// physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// controls
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.spacebar = this.game.input.keyboard.addKey(32);
		this.m = this.game.input.keyboard.addKey(77);

		this.spacebar.onDown.add(this.spaceBarHandler, this);
		this.m.onDown.add(this.mDownHandler, this);

		// Declarations
		if(!Data.coins){
			Data.coins = 0;
		}else{
			Data.coins = Data.coins;
		}
		if(!Data.meteor){
			Data.meteor = 0;
		}else{
			Data.meteor = Data.meteor;
		}
		if(!Data.bullets){
			Data.bullets = 0;
		}else{
			Data.bullets = Data.bullets;
		}
		Data.distance = 0;
		Data.kills = 0;
		this.gameSpeed = .97; //variable die de snelheid van de game bepaalt. hoe groter het getal hoe sneller/moeilijker. Beinvloed momenteel enkel spawnrate van enemy
		this.delay = Phaser.Timer.SECOND * 2;
		this.side = 'up';

		// Images
		this.city = new BackgroundCity(this.game, 0, 0, 750, 500, 'city');
		this.game.add.existing(this.city);

		// Player
		this.player = new Player(this.game, 50, this.game.height/2 - 43, this.flipSound, Data.hasRainbow);
		this.game.add.existing(this.player);

		// coins
		this.coins = this.game.add.group();
		this.coinTimer = this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.spawnCoin, this);

		// distance score text
		this.distanceTimer = this.game.time.events.loop(Phaser.Timer.SECOND / 1.2, this.increaseDistance, this);
		this.distanceTextBox = new Text(this.game, this.game.width/2, 50, 'gamefont', Data.distance + ' km', 30);
		this.game.add.existing(this.distanceTextBox);

		// score text
		this.scoreTextBox = new Text(this.game, this.game.width/2 + 300, 50, 'gamefont', Data.coins + '\ncoins', 20, 'center');
		this.game.add.existing(this.scoreTextBox);

		this.bulletTextBox = new Text(this.game, this.game.width/2 - 300, 50, 'gamefont', Data.bullets + '\nbullets', 20, 'center');
		this.game.add.existing(this.bulletTextBox);

		this.killsTextBox = new Text(this.game, this.game.width/2 - 150, 50, 'gamefont', Data.kills + '\nkills', 20, 'center');
		this.game.add.existing(this.killsTextBox);

		this.meteorTextBox = new Text(this.game, this.game.width/2 + 150, 50, 'gamefont', Data.meteor + '\nmeteor', 20, 'center');
		this.game.add.existing(this.meteorTextBox);

		// mute
		this.soundButton = this.game.add.button(30, this.game.height - 45, 'unmuteButton', this.soundMuteToggleHandler, this);
		this.game.add.existing(this.soundButton);
 
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

		this.explosionGroup = this.game.add.group();
	}

	update(){
		// console.log('black ' + this.blackEnemies.length, 'white ' + this.whiteEnemies.length, 'orange ' + this.orangeEnemies.length, 'red ' + this.redEnemies.length);
		console.log(this.bulletGroup.length);
		
		// controls
		if(this.cursors.down.isDown && !this.cursors.up.isDown){
			this.side = 'down';
			this.player.flipDown();
			this.redEnemies.forEach((oneEnemy) => {
				oneEnemy.flipDown();
			});
		}
		if(this.cursors.up.isDown && !this.cursors.down.isDown){
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
		
		// this.enemyConfigs = {
		// 	'black': {
		// 		'group': this.blackEnemies,
		// 		'class': EnemyBlack,
		// 		'getY': enemy => 225,
		// 		'getScale': enemy => 1
		// 	},
		// 	'orange': {
		// 		'group': this.orangeEnemies,
		// 		'class': EnemyOrange,
		// 		'getScale': enemy => {
		// 			if(Math.random() > .5){
		// 				return -1;
		// 			}
		// 			return 1;
		// 		},
		// 		'getY': enemy => {
		// 			if(enemy.scale === -1){
		// 				return 275;
		// 			}
		// 			return 225;
		// 		}
		// 	},
		// 	'white': {
		// 		'group': this.whiteEnemies,
		// 		'class': EnemyWhite,
		// 		'getY': enemy => 275,
		// 		'getScale': enemy => -1
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
		let y;
		if(Math.round(Math.random()) === 1){
			y = this.game.height/2 + 30;
		}else{
			y = this.game.height/2 - 30;
		}
		if(!coin){
			coin = new Coin(this.game, 0, 0);
		}

		coin.reset(x, y);
		this.coins.add(coin);
	}

	//collisions
	enemyPlayerCollisionHandler(player, enemy){
		player.pendingDestroy = true;
		enemy.pendingDestroy = true;
		this.playerHitSound.play();
		Utils.changeState(this.game, 'Gameover');
	}

	coinPlayerCollisionHandler(player, coin){
		coin.exists = false;
		Data.coins++;
		Data.bullets += 5;
		this.updateBulletText();
		let suffix = this.createSuffixForScore();
		this.updateScore(suffix);
		this.coinSound.play();
	}

	enemyBulletCollisionHandler(bullet, enemy){
		enemy.lives--;
		if(enemy.lives < 1){
			enemy.pendingDestroy = true;
			Data.kills++;
			this.killsTextBox.text = Data.kills + '\nkills';
		}
		
		// bullet.pendingDestroy = true;
		bullet.exists = false;
		this.spawnExplosion(enemy.position.x, enemy.position.y);
		this.enemyHitSound.play();
	}

	meteorEnemyCollisionHandler(meteor, enemy){
		meteor.pendingDestroy = true;
		Data.kills++;
		this.killsTextBox.text = Data.kills + '\nkills';
		enemy.pendingDestroy = true;
		this.enemyHitSound.play();
	}

	spawnExplosion(x, y){
		let xPos = x;
		let yPos = y;
		let explosion = this.explosionGroup.getFirstExists(false);
		if(!explosion){
			explosion = new Explosion(this.game, xPos, yPos);
		}
		explosion.reset(xPos, yPos);
		this.explosionGroup.add(explosion);
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
			this.enemyTimer.delay = delay;
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
			// nog een geluid
			this.meteorSound.play();
			this.spawnMeteor();
			Data.meteor--;
			this.updateMeteorText();
		}
	}
	spawnMeteor(){
		for(let i = 0; i < 3; i++){
			let x = this.randomInRange(0, this.game.width);
			let y = this.randomInRange(0, -75);
			let meteor = this.meteorGroup.getFirstExists(false);
			if(!meteor){
				meteor = new Meteor(this.game, x, y);
			}
			meteor.reset(x, y);
			this.meteorGroup.add(meteor);
		}
	}
	updateMeteorText(){
		this.meteorTextBox.text = Data.meteor + '\nmeteors';
	}
	updateScore(suffix){
		this.scoreTextBox.text = Data.coins + suffix;
	}

	generateRandomColor(){
		let colors = ['black', 'orange', 'red', 'white', 'black', 'white', 'black', 'white', 'black', 'white', 'black', 'white', 'orange', 'orange', 'orange'];
		return colors[Math.round(Math.random() * (colors.length - 1))];
	}
	randomInRange(num1, num2){
		return this.game.rnd.integerInRange(num1, num2);
	}

	soundMuteToggleHandler(){
		if(this.backgroundSound.volume === 1){
			this.backgroundSound.volume = 0;
			this.soundButton.loadTexture('muteButton' ,null, false);
		}else{
			this.backgroundSound.volume = 1;
			this.soundButton.loadTexture('unmuteButton' ,null, false);
		}
	}
	soundSetup(){
		this.backgroundSound = new Sound(this.game, 'background');
		this.flipSound = new Sound(this.game, 'change_side');
		this.coinSound = new Sound(this.game, 'coin');
		this.enemyHitSound = new Sound(this.game, 'enemy_hit');
		this.playerHitSound = new Sound(this.game, 'player_hit');
		this.playerShootSound = new Sound(this.game, 'player_shoot');
		this.meteorSound = new Sound(this.game, 'meteor');

		this.backgroundSound.play();
	}
	updateBulletText(){
		this.bulletTextBox.text = Data.bullets + '\nbullets';
	}
	updateCoinText(){
		this.coinText.text = Data.coins + '\ncoins';
	}
	updateDistance(){
		this.distanceTextBox.text = Data.distance + ' km';
	}
}
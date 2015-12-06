import Enemy from '../objects/Enemy';

export default class EnemyGroup extends Phaser.Group {
	constructor(game, parent, color){
		super(game, parent);

		// constructor(game, x, y, color, lives, speed)
		this.enemy;
		let x = this.game.rnd.integerInRange(750, 800);
		let y = this.calculateRandom();
		switch(color){
			case 'orange':
				this.enemy = new Enemy(game, x, y, 'enemy_orange', 1, -300);
				this.enemy.position.y = 225;
				break;
			case 'black':
				this.enemy = new Enemy(game, x, y, 'enemy_black', 1, -250);
				this.enemy.position.y = 225;
				break;
			case 'white':
				this.enemy = new Enemy(game, x, y, 'enemy_white', 1, -250);
				this.enemy.scale.y = -1;
				this.enemy.position.y = 275;
				break;
			case 'red':
				this.enemy = new Enemy(game, x, y, 'enemy_red', 2, -100);
				this.enemy.position.y = 220;
				break;
		}

		this.exists = true;


		this.add(this.enemy);
	}

	update(){
		if(this.enemy.position.x < -this.enemy.width){
			this.exists = false;
		}
		this.game.debug.body(this.enemy);
	}

	reset(color){
		let y = 0;
		let x = this.game.rnd.integerInRange(750, 800);
		let v = 0;
		let l = 0;
		console.log('enemy' + color);
		switch(color){
			case 'orange':
				y = 225;
				v = -300;
				l = 1;
				break;
			case 'black':
				y = 225;
				v = -300;
				l = 1;
				break;
			case 'white':
				y = 275;
				v = -300;
				l = 1;
				break;
			case 'red':
				y = 220;
				v = -50;
				l = 2;
				break;
		}
		console.log(x, y, v, l);
		this.enemy.reset(x, y);
		this.enemy.body.velocity.x = v;
		this.enemy.lives = l;
		this.exists = true;
	}

	calculateRandom(){
		return Math.round(Math.random());
	}
}
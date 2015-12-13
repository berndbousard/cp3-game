import BackgroundCity from '../objects/BackgroundCity';
import MenuBackground from '../objects/MenuBackground';
import Text from '../objects/Text';
import * as Utils from '../objects/Utils';
import Sound from '../objects/Sound';
import Data from '../objects/Data';

let errorInfo;

export default class Shop extends Phaser.State {
	preload(){
		console.log("start shop");
		// music
		// game, key, volume, loop
		this.clickSound = new Sound(this.game, 'click');
		this.bulletPackSound = new Sound(this.game, 'bulletPackSound');
		this.errorSound = new Sound(this.game, 'error');
	}
	create(){
		// Als de gebruiker zonder te spelen naar de shop gaat
		if(!Data.bullets){
			Data.bullets = 0;
		}
		if(!Data.coins){
			Data.coins = 300;
		}
		if(!Data.meteor){
			Data.meteor = 0;
		}
		if(!Data.hasRainbow){
			Data.hasRainbow = false;
		}

		this.prices = {
			'bulletprice' : '2',
			'meteorprice' : '1',
			'rainbowprice' : '15'
		};

		// Images
		this.city = new BackgroundCity(this.game, 0, 0, 750, 500, 'city');
		this.game.add.existing(this.city);

		this.menuBackground = new MenuBackground(this.game, this.game.width/2, this.game.height/2);
		this.game.add.existing(this.menuBackground);

		// text
		this.bulletText = new Text(this.game, this.game.width/2 + 85, this.game.height/2 - 50 - 30, 'gamefont', Data.bullets + '\nbullets', 20, 'center');
		this.game.add.existing(this.bulletText);

		this.meteorText = new Text(this.game, this.game.width/2 + 85, this.game.height/2 + 20 - 20, 'gamefont', Data.meteor + '\nmeteors', 20, 'center');
		this.game.add.existing(this.meteorText);

		this.coinText = new Text(this.game, this.game.width/2, this.game.height/2 - 160, 'gamefont', Data.coins + '\ncoins', 20, 'center');
		this.game.add.existing(this.coinText);

		this.errorText = new Text(this.game, this.game.width/2 + 5, this.game.height/2 - 225, 'gamefont', '', 14, 'center');
		this.game.add.existing(this.errorText);

		let rainboxInnerText;
		if(Data.hasRainbow){
			rainboxInnerText = 'equiped';
		}else{
			rainboxInnerText = 'not\nequiped';
		}
		this.rainbowText = new Text(this.game, this.game.width/2 + 85, this.game.height/2 + 20 - 10 + 75, 'gamefont', rainboxInnerText, 20, 'center');
		this.game.add.existing(this.rainbowText);

		// prijzen/hoeveelheden
		this.priceBullets = new Text(this.game, this.game.width/2 - 80, this.game.height/2 - 82 - 30, 'gamefont', 'prijs: ' + this.prices.bulletprice, 14, 'center');
		this.game.add.existing(this.priceBullets);

		this.amountBullets = new Text(this.game, this.game.width/2 - 5, this.game.height/2 - 82 - 30, 'gamefont', 'aantal: ' + 5, 14, 'center');
		this.game.add.existing(this.amountBullets);

		this.priceMeteors = new Text(this.game, this.game.width/2 - 80, this.game.height/2 - 12  - 20, 'gamefont', 'prijs: ' + this.prices.meteorprice, 14, 'center');
		this.game.add.existing(this.priceMeteors);

		this.priceRainbow = new Text(this.game, this.game.width/2 - 80, this.game.height/2 - 12 - 10 + 75, 'gamefont', 'prijs: ' + this.prices.rainbowprice, 14, 'center');
		this.game.add.existing(this.priceRainbow);
		// this.amountRainbow = new Text(this.game, this.game.width/2 - 5, this.game.height/2 - 12 - 10 + 75, 'gamefont', 'aantal: ' + 1, 14, 'center');
		// this.game.add.existing(this.amountRainbow);

		this.amountMeteors = new Text(this.game, this.game.width/2 - 5, this.game.height/2 - 12  - 20, 'gamefont', 'aantal: ' + 1, 14, 'center');
		this.game.add.existing(this.amountMeteors);


		// buttons
		this.startButton = this.game.add.button(this.game.width/2 + 50,this.game.height/2 + 150, 'startButton', this.startClickHandler,this);
		Utils.center(this.startButton);

		this.backButton = this.game.add.button(this.game.width/2 - 50, this.game.height/2 + 150, 'backButton', this.backClickHandler, this);
		Utils.center(this.backButton);

		this.meteorButton = this.game.add.button(this.game.width/2 - 45, this.game.height/2 + 20  - 20, 'meteorButton', this.meteorButtonClickHandler, this);
		Utils.center(this.meteorButton);

		this.rainbowButton = this.game.add.button(this.game.width/2 - 45, this.game.height/2 + 20 - 10 + 75, 'rainbowButton', this.rainbowButtonClickHandler, this);
		Utils.center(this.rainbowButton);

		this.bulletButton = this.game.add.button(this.game.width/2 - 45, this.game.height/2 - 50 - 30, 'bulletButton', this.bulletButtonClickHandler, this);
		Utils.center(this.bulletButton);
	}

	update(){
	}

	bulletButtonClickHandler(){
		if(Data.coins >= this.prices.bulletprice){
			this.bulletPackSound.play();
			Data.bullets += 5;
			Data.coins -= this.prices.bulletprice;
			this.updateBulletText();
			this.updateCoinText();
		}else{
			this.errorSound.play();
			this.doErrorHandling('je hebt niet genoeg coins');
		}
	}

	meteorButtonClickHandler(){
		if(Data.coins >= this.prices.meteorprice){
			this.bulletPackSound.play();
			Data.meteor++;
			Data.coins -= this.prices.meteorprice;
			this.updateMeteorText();
			this.updateCoinText();
		}else{
			this.errorSound.play();
			this.doErrorHandling('je hebt niet genoeg coins');
		}
	}

	rainbowButtonClickHandler(){
		if(Data.hasRainbow){
			this.errorSound.play();
			this.doErrorHandling('je hebt al een rainbow suit');
			return;
		}

		if(Data.coins >= this.prices.rainbowprice){
			this.bulletPackSound.play();
			Data.hasRainbow = true;
			Data.coins -= this.prices.rainbowprice;
			this.updateCoinText();
			this.updateRainbowText();
		}else{
			this.errorSound.play();
			this.doErrorHandling('je hebt niet genoeg coins');
		}
	}

	startClickHandler(){
		this.clickSound.play();
		Utils.changeState(this.game, 'Play');
	}

	backClickHandler(){
		this.clickSound.play();
		Utils.changeState(this.game, 'Menu');
	}

	shutdown(){
		console.log('end preload');
	}

	doErrorHandling(error){
		this.errorText.text = error;
	}
	updateBulletText(){
		this.bulletText.text = Data.bullets + '\nbullets';
	}
	updateCoinText(){
		this.coinText.text = Data.coins + '\ncoins';
	}
	updateMeteorText(){
		this.meteorText.text = Data.meteor + '\nmeteors';
	}
	updateRainbowText(){
		this.rainbowText.text = 'equiped';
	}
}
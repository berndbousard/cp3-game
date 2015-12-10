import BackgroundCity from '../objects/BackgroundCity';
import MenuBackground from '../objects/MenuBackground';
import Text from '../objects/Text';
import Coin from '../objects/Coin';
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
	}
	create(){
		// Als de gebruiker zonder te spelen naar de shop gaat
		if(!Data.bullets){
			Data.bullets = 0;
		}
		if(!Data.coins){
			Data.coins = 0;
		}
		if(!Data.meteors){
			Data.meteors = 0;
		}

		this.prices = {
			'bulletprice' : '2',
			'meteorprice' : '1'
		};

		// Images
		this.city = new BackgroundCity(this.game, 0, 0, 750, 500, 'city');
		this.game.add.existing(this.city);

		this.menuBackground = new MenuBackground(this.game, this.game.width/2, this.game.height/2);
		this.game.add.existing(this.menuBackground);

		// text
		this.bulletText = new Text(this.game, this.game.width/2 + 85, this.game.height/2 - 50, 'gamefont', Data.bullets + '\nbullets', 20, 'center');
		this.game.add.existing(this.bulletText);

		this.meteorText = new Text(this.game, this.game.width/2 + 85, this.game.height/2 + 20, 'gamefont', Data.meteors + '\nmeteors', 20, 'center');
		this.game.add.existing(this.meteorText);

		this.coinText = new Text(this.game, this.game.width/2, this.game.height/2 - 150, 'gamefont', Data.coins + '\ncoins', 20, 'center');
		this.game.add.existing(this.coinText);

		// Buttons
		this.priceBullets = new Text(this.game, this.game.width/2 - 80, this.game.height/2 - 82, 'gamefont', 'price: ' + this.prices.bulletprice, 14, 'center');
		this.game.add.existing(this.priceBullets);

		this.bulletButton = this.game.add.button(this.game.width/2 - 45, this.game.height/2 - 50, 'bulletButton', this.bulletButtonClickHandler, this);
		Utils.center(this.bulletButton);

		this.priceMeteors = new Text(this.game, this.game.width/2 - 80, this.game.height/2 - 12, 'gamefont', 'price: ' + this.prices.meteorprice, 14, 'center');
		this.game.add.existing(this.priceMeteors);

		this.meteorButton = this.game.add.button(this.game.width/2 - 45, this.game.height/2 + 20, 'meteorButton', this.meteorButtonClickHandler, this);
		Utils.center(this.meteorButton);

		// Game State Buttons
		this.startButton = this.game.add.button(this.game.width/2 + 50,this.game.height/2 + 150, 'startButton', this.startClickHandler,this);
		Utils.center(this.startButton);

		this.backButton = this.game.add.button(this.game.width/2 - 50, this.game.height/2 + 150, 'backButton', this.backClickHandler, this);
		Utils.center(this.backButton);

	}

	update(){
	}

	bulletButtonClickHandler(){
		if(Data.coins >= this.prices.bulletprice){
			this.doErrorHandling("no error");
			errorInfo = "";

			this.bulletPackSound.play();
			Data.bullets += 5;
			Data.coins -= this.prices.bulletprice;
			this.bulletText.text = Data.bullets + '\nbullets';
			this.coinText.text = Data.coins + '\ncoins';
		}else{
			this.doErrorHandling("not enough money");
		}
	}

	meteorButtonClickHandler(){
		if(Data.coins >= this.prices.meteorprice){
			this.doErrorHandling("no error");
			errorInfo = "";

			this.bulletPackSound.play();
			Data.meteors ++;
			Data.coins -= this.prices.meteorprice;
			this.meteorText.text = Data.meteors + '\nbullets';
			this.coinText.text = Data.coins + '\ncoins';
		}else{
			this.doErrorHandling("not enough money");
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

	doErrorHandling(check){
		if(check == "no error"){
			errorInfo = "";
		}
		if(check == "not enough money"){
			errorInfo = "not enough money in store";
		}
		this.errorText = new Text(this.game, this.game.width/2 + 5, this.game.height/2 + 85, 'gamefont', errorInfo, 14, 'center');
			this.game.add.existing(this.errorText);
	}
}
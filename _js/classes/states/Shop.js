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

		// Images
		this.city = new BackgroundCity(this.game, 0, 0, 750, 500, 'city');
		this.game.add.existing(this.city);

		this.menuBackground = new MenuBackground(this.game, this.game.width/2, this.game.height/2);
		this.game.add.existing(this.menuBackground);

		// text
		// game, x, y, font, text, size, align
		this.bulletText = new Text(this.game, this.game.width/2 + 85, this.game.height/2 - 50, 'gamefont', Data.bullets + '\nbullets', 20, 'center');
		this.game.add.existing(this.bulletText);

		this.coinText = new Text(this.game, this.game.width/2, this.game.height/2 - 150, 'gamefont', Data.coins + '\ncoins', 20, 'center');
		this.game.add.existing(this.coinText);

		// Buttons
		this.startButton = this.game.add.button(this.game.width/2 + 50,this.game.height/2 + 150, 'startButton', this.startClickHandler,this);
		Utils.center(this.startButton);

		this.backButton = this.game.add.button(this.game.width/2 - 50, this.game.height/2 + 150, 'backButton', this.backClickHandler, this);
		Utils.center(this.backButton);

		this.bulletButton = this.game.add.button(this.game.width/2 - 45, this.game.height/2 - 50, 'bulletButton', this.bulletButtonClickHandler, this);
		Utils.center(this.bulletButton);

	}

	update(){
	}

	bulletButtonClickHandler(){
		if(Data.coins > 0){
			this.doErrorHandling("no error");
			errorInfo = "";

			this.bulletPackSound.play();
			Data.bullets += 5;
			Data.coins--;
			this.bulletText.text = Data.bullets + '\nbullets';
			// hij flipt nog op de coins, geen idee waarom
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
		this.errorText = new Text(this.game, this.game.width/2 + 5, this.game.height/2 - 10, 'gamefont', errorInfo, 14, 'center');
			this.game.add.existing(this.errorText);
	}
}
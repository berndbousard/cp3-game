import BackgroundCity from '../objects/BackgroundCity';
import MenuBackground from '../objects/MenuBackground';
import Text from '../objects/Text';

export default class Gameover extends Phaser.State {
	preload(){
		console.log('start gameover');
	}
	create(){

		this.score = 1; /*  voorlopig heb ik dit zo genoemd, ter testing. Zodra we werkelijk
							onze scores gebruiken moeten we een manier vinden om die uit de Play
							state naar hier te brengen */
		this.distance = 20;

		// Show/hide leaderboard
		this.setVisibilityInputName = document.getElementById("input-name");
		this.submitElement = document.getElementById("submit");
		this.inputElement = document.getElementById("text");
		this.setVisibilityInputName.style.visibility = "visible";

		// Images
		this.cityBlack = new BackgroundCity(this.game, 0, 0, 750, 250, 'cityBlack');
		this.game.add.existing(this.cityBlack);

		this.cityWhite = new BackgroundCity(this.game, 0, 500, 750, 250, 'cityWhite');
		this.game.add.existing(this.cityWhite);

		this.cityWhite.scale.y *= -1; /* flip onderste stuk */

		this.menuBackground = new MenuBackground(this.game, this.game.width/2, this.game.height/2);
		this.game.add.existing(this.menuBackground);

		// Buttons
		this.startButton = this.game.add.button(
			this.game.width/2,this.game.height/2 + 150,'startButton',this.startClickHandler,this);
		this.startButton.anchor.setTo(0.5,0.5);


		// AJAX Call

		this.submitElement.addEventListener('click', this.submitInputHandler);

			// dit dient om enters op te vangen indien de gebruiker op enter duwt in het textveld, later te implementeren
			// this.inputElement('keydown', this.keyHandler(event));

	}
	update(){
	}
	shutdown(){
		console.log('end gameover');
		this.setVisibilityInputName.style.visibility = "hidden";
	}
	submitInputHandler(e){

		e.preventDefault();

		console.log("Time for some AJAX baby");

		let req = new XMLHttpRequest();

		let PageToSendTo = 'php/postscores.php?';
		let Variable1 = "score=1";
		let Variable2 = "&distance=2";
		let UrlToSend = PageToSendTo + Variable1 + Variable2;

		req.open("POST", UrlToSend);
		req.setRequestHeader('X_REQUESTED_WITH','xmlhttprequest');
		req.send();

	}
	/*keyHandler(e){
		switch(e.keyCode){
			case "13":
			e.preventDefault();
			console.log("hoera");
			//this.submitInputHandler(e));
			break;
		}
	}*/
	startClickHandler() {
		// dit is nog niet optimaal (geen idee waarom, needs bugfixing)
		this.game.state.start('Play');
	}
}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Preload = __webpack_require__(1);

	var _Preload2 = _interopRequireDefault(_Preload);

	var _Menu = __webpack_require__(2);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Play = __webpack_require__(6);

	var _Play2 = _interopRequireDefault(_Play);

	var _Leaderboard = __webpack_require__(11);

	var _Leaderboard2 = _interopRequireDefault(_Leaderboard);

	var _Gameover = __webpack_require__(12);

	var _Gameover2 = _interopRequireDefault(_Gameover);

	var _Info = __webpack_require__(13);

	var _Info2 = _interopRequireDefault(_Info);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var init = function init() {
		var game = new Phaser.Game(750, 500, Phaser.AUTO);
		game.state.add('Preload', _Preload2.default, true);
		game.state.add('Menu', _Menu2.default, false);
		game.state.add('Play', _Play2.default, false);
		game.state.add('Leaderboard', _Leaderboard2.default, false);
		game.state.add('Gameover', _Gameover2.default, false);
		game.state.add('Info', _Info2.default, false);
	};

	init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Preload = (function (_Phaser$State) {
		_inherits(Preload, _Phaser$State);

		function Preload() {
			_classCallCheck(this, Preload);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Preload).apply(this, arguments));
		}

		_createClass(Preload, [{
			key: 'preload',
			value: function preload() {
				console.log("start preload");

				// load assets
				this.game.load.image('startButton', 'assets/startButton.png');
				this.game.load.image('leaderboardbutton', 'assets/leaderboardButton.png');
				this.game.load.image('infoButton', 'assets/instructionsButton.png');
				this.game.load.image('cityWhite', 'assets/city_white.jpg');
				this.game.load.image('cityBlack', 'assets/city_black.jpg');
				this.game.load.image('menuBackground', 'assets/menu_background.png');
				this.game.load.bitmapFont('gamefont', 'assets/font/gamefont/gamefont.png', 'assets/font/gamefont/gamefont.fnt');
				this.game.load.spritesheet('player_black', 'assets/player_black.png', 42, 44, 14);
				this.game.load.spritesheet('player_white', 'assets/player_white.png', 42, 44, 14);
				this.game.load.spritesheet('enemy_black', 'assets/enemy_black.png', 45, 45, 6);
				this.game.load.spritesheet('enemy_white', 'assets/enemy_white.png', 45, 45, 6);
				this.game.load.spritesheet('coin', 'assets/coin.png', 25, 25, 10);
			}
		}, {
			key: 'create',
			value: function create() {
				this.game.state.start('Menu');
			}
		}, {
			key: 'update',
			value: function update() {}
		}, {
			key: 'shutdown',
			value: function shutdown() {
				console.log('end preload');
			}
		}]);

		return Preload;
	})(Phaser.State);

	exports.default = Preload;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Button = __webpack_require__(3);

	var _Button2 = _interopRequireDefault(_Button);

	var _BackgroundCity = __webpack_require__(4);

	var _BackgroundCity2 = _interopRequireDefault(_BackgroundCity);

	var _MenuBackground = __webpack_require__(5);

	var _MenuBackground2 = _interopRequireDefault(_MenuBackground);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Menu = (function (_Phaser$State) {
		_inherits(Menu, _Phaser$State);

		function Menu() {
			_classCallCheck(this, Menu);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).apply(this, arguments));
		}

		_createClass(Menu, [{
			key: 'preload',
			value: function preload() {
				console.log("start menu");
			}
		}, {
			key: 'create',
			value: function create() {

				// Images
				this.cityBlack = new _BackgroundCity2.default(this.game, 0, 0, 750, 250, 'cityBlack');
				this.game.add.existing(this.cityBlack);

				this.cityWhite = new _BackgroundCity2.default(this.game, 0, 500, 750, 250, 'cityWhite');
				this.game.add.existing(this.cityWhite);

				this.cityWhite.scale.y *= -1; /* flip onderste stuk */

				this.menuBackground = new _MenuBackground2.default(this.game, this.game.width / 2, this.game.height / 2);
				this.game.add.existing(this.menuBackground);

				// Buttons
				this.startButton = this.game.add.button(this.game.width / 2, this.game.height / 2 + 150, 'startButton', this.startClickHandler, this);
				this.startButton.anchor.setTo(0.5, 0.5);

				this.leaderboardButton = this.game.add.button(this.game.width / 2 - 100, this.game.height / 2 + 150, 'leaderboardbutton', this.leaderboardClickHandler, this);
				this.leaderboardButton.anchor.setTo(0.5, 0.5);

				this.infoButton = this.game.add.button(this.game.width / 2 + 100, this.game.height / 2 + 150, 'infoButton', this.infoClickHandler, this);
				this.infoButton.anchor.setTo(0.5, 0.5);

				// new Button(game, x, y, key, callback, callbackContext)
				// this.startButtonTest = new Button(this.game, this.game.width/2 + 100, this.game.height/2 + 150, 'startButton', Button.startClickHandler, Button);
				// this.game.add.existing(this.startButtonTest);
			}
		}, {
			key: 'update',
			value: function update() {}
		}, {
			key: 'shutdown',
			value: function shutdown() {
				console.log("end menu");
			}
		}, {
			key: 'startClickHandler',
			value: function startClickHandler() {
				this.game.state.start('Play');
			}
		}, {
			key: 'leaderboardClickHandler',
			value: function leaderboardClickHandler() {
				this.game.state.start('Leaderboard');
			}
		}, {
			key: 'infoClickHandler',
			value: function infoClickHandler() {
				this.game.state.start('Info');
			}
		}]);

		return Menu;
	})(Phaser.State);

	exports.default = Menu;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Button = (function (_Phaser$Button) {
		_inherits(Button, _Phaser$Button);

		function Button(game, x, y, key, callback, callbackContext) {
			_classCallCheck(this, Button);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, game, x, y, key, callback, callbackContext));
		}

		_createClass(Button, [{
			key: 'startClickHandler',
			value: function startClickHandler() {
				// this.game.state.start('Play');
				console.log('test');
			}
		}]);

		return Button;
	})(Phaser.Button);

	exports.default = Button;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BackgroundCity = (function (_Phaser$TileSprite) {
		_inherits(BackgroundCity, _Phaser$TileSprite);

		function BackgroundCity(game, x, y, width, height, key) {
			_classCallCheck(this, BackgroundCity);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BackgroundCity).call(this, game, x, y, width, height, key));

			_this.autoScroll(-120, 0);
			return _this;
		}

		return BackgroundCity;
	})(Phaser.TileSprite);

	exports.default = BackgroundCity;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MenuBackground = (function (_Phaser$Sprite) {
		_inherits(MenuBackground, _Phaser$Sprite);

		function MenuBackground(game, x, y) {
			_classCallCheck(this, MenuBackground);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MenuBackground).call(this, game, x, y, 'menuBackground'));

			_this.anchor.setTo(.5, .5);
			return _this;
		}

		return MenuBackground;
	})(Phaser.Sprite);

	exports.default = MenuBackground;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Player = __webpack_require__(7);

	var _Player2 = _interopRequireDefault(_Player);

	var _BackgroundCity = __webpack_require__(4);

	var _BackgroundCity2 = _interopRequireDefault(_BackgroundCity);

	var _Enemy = __webpack_require__(8);

	var _Enemy2 = _interopRequireDefault(_Enemy);

	var _Text = __webpack_require__(9);

	var _Text2 = _interopRequireDefault(_Text);

	var _Coin = __webpack_require__(10);

	var _Coin2 = _interopRequireDefault(_Coin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Play = (function (_Phaser$State) {
		_inherits(Play, _Phaser$State);

		function Play() {
			_classCallCheck(this, Play);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Play).apply(this, arguments));
		}

		_createClass(Play, [{
			key: 'preload',
			value: function preload() {
				console.log('start play');
			}
		}, {
			key: 'create',
			value: function create() {
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
				this.cityBlack = new _BackgroundCity2.default(this.game, 0, 0, 750, 250, 'cityBlack');
				this.game.add.existing(this.cityBlack);

				this.cityWhite = new _BackgroundCity2.default(this.game, 0, 500, 750, 250, 'cityWhite');
				this.game.add.existing(this.cityWhite);
				this.cityWhite.scale.y *= -1; /* flip onderste stuk */

				// Player
				this.player = new _Player2.default(this.game, 50, this.game.height / 2 - 43);
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
				this.distanceTextBox = new _Text2.default(this.game, this.game.width / 2, 50, 'gamefont', this.game.state.distance.toString() + ' km', 30);
				this.game.add.existing(this.distanceTextBox);

				// coins score text
				this.scoreTextBox = new _Text2.default(this.game, this.game.width / 2 + 300, 50, 'gamefont', this.game.state.score + ' coins', 20);
				this.game.add.existing(this.scoreTextBox);
			}
		}, {
			key: 'update',
			value: function update() {
				var _this2 = this;

				if (this.cursors.down.isDown) {
					this.player.flipDown();
				}
				if (this.cursors.up.isDown) {
					this.player.flipUp();
				}

				// console.log(this.game.input.x, this.game.input.y);
				// makkelijk om te meten

				// collision
				// console.log('aantal coins' + this.coins.children.length); //zo zie je hoeveel er in enemies group zitten, zit nog geen pooling op

				this.enemies.forEach(function (oneEnemy) {
					_this2.game.physics.arcade.overlap(_this2.player, oneEnemy, _this2.enemyPlayerCollisionHandler, null, _this2);
					_this2.game.physics.arcade.collide(_this2.player, oneEnemy, _this2.enemyPlayerCollisionHandler, null, _this2);
				});

				this.coins.forEach(function (oneCoin) {
					_this2.game.physics.arcade.overlap(_this2.player, oneCoin, _this2.coinPlayerCollisionHandler, null, _this2);
				});

				// console.log('score ' + this.game.state.score);
				// console.log(this.gameSpeed);
			}
		}, {
			key: 'shutdown',
			value: function shutdown() {
				console.log('end play');
			}

			// eigen functies

		}, {
			key: 'spawnEnemy',
			value: function spawnEnemy() {
				var enemy = this.enemies.getFirstExists(false);
				if (!enemy) {
					enemy = new _Enemy2.default(this.game, 0, 0, 'black');
				}
				// positioning
				var x = this.game.rnd.integerInRange(750, 800);
				var lot = Math.round(Math.random() * 1);
				var y = undefined;
				if (lot == 0) {
					// boven
					y = 225;
					if (enemy.scale.y = -1) {
						enemy.scale.y = 1;
					}
					enemy.loadTexture('enemy_black', null, false);
				}
				if (lot == 1) {
					// onder
					y = 275;
					if (enemy.scale.y = 1) {
						enemy.scale.y = -1;
					}
					enemy.loadTexture('enemy_white', null, false);
				}
				this.game.physics.arcade.enableBody(enemy);
				enemy.reset(x, y);
				enemy.body.velocity.x = -250;
				this.enemies.add(enemy);
			}
		}, {
			key: 'spawnCoin',
			value: function spawnCoin() {
				// console.log('spawn een coin');
				var coin = this.coins.getFirstExists(false);
				if (!coin) {
					coin = new _Coin2.default(this.game, 0, 0);
				}

				// positioning
				var x = this.game.rnd.integerInRange(750, 800);
				var lot = Math.round(Math.random() * 1);
				var y = this.game.height / 2;

				this.game.physics.arcade.enableBody(coin);
				coin.reset(x, y);
				coin.body.velocity.x = -100;
				this.coins.add(coin);
			}
		}, {
			key: 'enemyPlayerCollisionHandler',
			value: function enemyPlayerCollisionHandler(player, enemy) {
				enemy.destroy();
				this.cityBlack.autoScroll(0, 0);
				this.cityWhite.autoScroll(0, 0);
				this.enemyTimer.timer.destroy();
				player.destroy();

				console.log('dead');

				this.game.state.start('Gameover');
				//this.game.time.events.add(200, this.doGameover, this);
			}
		}, {
			key: 'coinPlayerCollisionHandler',
			value: function coinPlayerCollisionHandler(player, coin) {
				coin.exists = false;
				this.game.state.score++;
				var suffix = this.createSuffixForScore();
				this.scoreTextBox.text = this.game.state.score + suffix;
			}
		}, {
			key: 'doGameover',
			value: function doGameover() {
				this.game.state.start('Gameover');
			}
		}, {
			key: 'createSuffixForScore',
			value: function createSuffixForScore() {
				if (this.game.state.score === 1) {
					return ' coin';
				} else {
					return ' coins';
				}
			}
		}, {
			key: 'increaseDistance',
			value: function increaseDistance() {
				this.game.state.distance++;
				this.distanceTextBox.text = this.game.state.distance + ' km';
				if (this.game.state.distance % 2 === 0) {
					var delay = this.enemyTimer.delay * this.gameSpeed;
					// console.log(this.gameSpeed);
					// this.enemyTimer.tick = 1449055971970 - (Phaser.Timer.SECOND / this.gameSpeed);
					this.enemyTimer.delay = delay;
					// console.log(this.enemyTimer.delay);
				}
			}
		}]);

		return Play;
	})(Phaser.State);

	exports.default = Play;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Player = (function (_Phaser$Sprite) {
		_inherits(Player, _Phaser$Sprite);

		function Player(game, x, y) {
			_classCallCheck(this, Player);

			// collide

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, game, x, y, 'player_black'));

			_this.game.physics.arcade.enableBody(_this);
			_this.body.immovable = true;
			_this.body.allowGravity = false;

			// animation
			_this.animations.add('run');
			_this.animations.play('run', 20, true);
			return _this;
		}

		_createClass(Player, [{
			key: 'update',
			value: function update() {
				// om de hitbox te zien
				this.game.debug.body(this);
			}
		}, {
			key: 'flipDown',
			value: function flipDown() {
				// console.log('player staat nu beneden');
				// http://phaser.io/examples/v2/animation/change-texture-on-click
				// Phaser.Sprite.loadTexture(key, frame, stopAnimation) : void;
				this.loadTexture('player_white', null, false);
				//if(this.body.position.y < this.game.height/2){
				this.body.y = this.game.height / 2;
				//}
			}
		}, {
			key: 'flipUp',
			value: function flipUp() {
				// console.log('player staat nu boven');
				this.loadTexture('player_black', null, false);
				//if(this.body.position.y > this.game.height/2){
				this.body.y = this.game.height / 2 - 43;
				//}
			}
		}]);

		return Player;
	})(Phaser.Sprite);

	exports.default = Player;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Enemy = (function (_Phaser$Sprite) {
		_inherits(Enemy, _Phaser$Sprite);

		function Enemy(game, x, y, color) {
			_classCallCheck(this, Enemy);

			var key = undefined;
			if (color == 'black') {
				key = 'enemy_black';
			} else if (color == 'white') {
				key = 'enemy_white';
			}

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Enemy).call(this, game, x, y, key));

			_this.anchor.setTo(.5, .5);

			// collide
			_this.game.physics.arcade.enableBody(_this);

			// pooling
			_this.exists = true;

			// animation
			_this.animations.add('walk');
			_this.animations.play('walk', 8, true);

			// movement
			_this.body.velocity.x = -250;
			return _this;
		}

		_createClass(Enemy, [{
			key: 'update',
			value: function update() {
				this.game.debug.body(this);
				if (this.body.position.x < 0 - this.width) {
					this.exists = false;
				}
			}
		}]);

		return Enemy;
	})(Phaser.Sprite);

	exports.default = Enemy;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Text = (function (_Phaser$BitmapText) {
		_inherits(Text, _Phaser$BitmapText);

		function Text(game, x, y, font, text, size, align) {
			_classCallCheck(this, Text);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Text).call(this, game, x, y, font, text, size, align));

			_this.anchor.setTo(.5, .5);
			return _this;
		}

		return Text;
	})(Phaser.BitmapText);

	exports.default = Text;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Coin = (function (_Phaser$Sprite) {
		_inherits(Coin, _Phaser$Sprite);

		function Coin(game, x, y) {
			_classCallCheck(this, Coin);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Coin).call(this, game, x, y, 'coin'));

			_this.game.physics.arcade.enableBody(_this);
			_this.anchor.setTo(.5, .5);

			var amplitude = 200;

			_this.position.y = _this.game.height / 2 - amplitude;
			_this.body.velocity.x = -150;

			// Phaser.Tween.to(properties(moet object zijn), duration, ease, autoStart, delay, repeat, yoyo) : Phaser.Tween;
			_this.game.add.tween(_this).to({ y: _this.game.height / 2 + amplitude }, 5000, Phaser.Easing.Linear.In, true, 0, 1000, true);

			_this.exists = true;
			return _this;
		}

		_createClass(Coin, [{
			key: 'update',
			value: function update() {
				this.game.debug.body(this);
				if (this.body.position.x < 0 - this.width) {
					this.exists = false;
				}
			}
		}]);

		return Coin;
	})(Phaser.Sprite);

	exports.default = Coin;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _BackgroundCity = __webpack_require__(4);

	var _BackgroundCity2 = _interopRequireDefault(_BackgroundCity);

	var _MenuBackground = __webpack_require__(5);

	var _MenuBackground2 = _interopRequireDefault(_MenuBackground);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var leaderboardTabel = undefined;

	var Leaderboard = (function (_Phaser$State) {
		_inherits(Leaderboard, _Phaser$State);

		function Leaderboard() {
			_classCallCheck(this, Leaderboard);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Leaderboard).apply(this, arguments));
		}

		_createClass(Leaderboard, [{
			key: 'preload',
			value: function preload() {
				console.log('start leaderboard');
			}
		}, {
			key: 'create',
			value: function create() {

				// Show/hide DOM elements
				leaderboardTabel = document.getElementById("table");
				leaderboardTabel.style.visibility = "visible";

				// Images
				this.cityBlack = new _BackgroundCity2.default(this.game, 0, 0, 750, 250, 'cityBlack');
				this.game.add.existing(this.cityBlack);

				this.cityWhite = new _BackgroundCity2.default(this.game, 0, 500, 750, 250, 'cityWhite');
				this.game.add.existing(this.cityWhite);

				this.cityWhite.scale.y *= -1; /* flip onderste stuk */

				this.menuBackground = new _MenuBackground2.default(this.game, this.game.width / 2, this.game.height / 2);
				this.game.add.existing(this.menuBackground);

				// Buttons
				this.startButton = this.game.add.button(this.game.width / 2, this.game.height / 2 + 150, 'startButton', this.startClickHandler, this);
				this.startButton.anchor.setTo(0.5, 0.5);
			}
		}, {
			key: 'update',
			value: function update() {}
		}, {
			key: 'shutdown',
			value: function shutdown() {
				console.log('end leaderboard');
				leaderboardTabel.style.visibility = "hidden";
			}
		}, {
			key: 'startClickHandler',
			value: function startClickHandler() {
				this.game.state.start('Play');
			}
		}]);

		return Leaderboard;
	})(Phaser.State);

	exports.default = Leaderboard;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _BackgroundCity = __webpack_require__(4);

	var _BackgroundCity2 = _interopRequireDefault(_BackgroundCity);

	var _MenuBackground = __webpack_require__(5);

	var _MenuBackground2 = _interopRequireDefault(_MenuBackground);

	var _Text = __webpack_require__(9);

	var _Text2 = _interopRequireDefault(_Text);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var leaderboard = undefined;
	var leaderboardNameInput = undefined;
	var leaderboardSubmit = undefined;

	var Gameover = (function (_Phaser$State) {
		_inherits(Gameover, _Phaser$State);

		function Gameover() {
			_classCallCheck(this, Gameover);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Gameover).apply(this, arguments));
		}

		_createClass(Gameover, [{
			key: 'preload',
			value: function preload() {
				console.log('start gameover');
			}
		}, {
			key: 'create',
			value: function create() {
				var _this2 = this;

				// Waarden zijn in play opgeslaan in this.game.state.score/distance
				this.score = this.game.state.score;
				this.distance = this.game.state.distance;

				// Show/hide leaderboard
				leaderboard = document.getElementById('form');
				leaderboardNameInput = document.getElementById("text");
				leaderboardSubmit = document.getElementById("submit");
				this.showElement(leaderboard);

				// Images
				this.cityBlack = new _BackgroundCity2.default(this.game, 0, 0, 750, 250, 'cityBlack');
				this.game.add.existing(this.cityBlack);

				this.cityWhite = new _BackgroundCity2.default(this.game, 0, 500, 750, 250, 'cityWhite');
				this.game.add.existing(this.cityWhite);

				this.cityWhite.scale.y *= -1; /* flip onderste stuk */

				this.menuBackground = new _MenuBackground2.default(this.game, this.game.width / 2, this.game.height / 2);
				this.game.add.existing(this.menuBackground);

				// Buttons
				this.startButton = this.game.add.button(this.game.width / 2, this.game.height / 2 + 150, 'startButton', this.startClickHandler, this);
				this.startButton.anchor.setTo(0.5, 0.5);

				// score and distance
				this.visibleScore = new _Text2.default(this.game, this.game.width / 2 - 50, 200, 'gamefont', 'Your score\n' + this.score.toString(), 20, 'center');
				this.game.add.existing(this.visibleScore);
				this.visibleDistance = new _Text2.default(this.game, this.game.width / 2 + 80, 200, 'gamefont', 'You ran\n' + this.distance.toString() + ' km', 20, 'center');
				this.game.add.existing(this.visibleDistance);

				// AJAX Call
				leaderboardSubmit.addEventListener('click', function (e) {
					e.preventDefault();
					if (!_this2.isEmpty(leaderboardNameInput)) {
						var score = _this2.score;
						var distance = _this2.distance;
						_this2.submitInputHandler(score, distance, leaderboardNameInput.value);
					}
				});

				// dit dient om enters op te vangen indien de gebruiker op enter duwt in het textveld, later te implementeren
				// this.inputElement('keydown', this.keyHandler(event));
			}
		}, {
			key: 'update',
			value: function update() {
				// console.log(this.score, this.distance);
			}
		}, {
			key: 'shutdown',
			value: function shutdown() {
				console.log('end gameover');
				this.hideElement(leaderboard);
			}

			// eigen functies

		}, {
			key: 'submitInputHandler',
			value: function submitInputHandler(score, distance, name) {

				console.log("AJAX called");

				var req = new XMLHttpRequest();

				var url = 'php/postscores.php' + '?name=' + name + '&score=' + score + '&distance=' + distance;
				console.log(url);

				req.open("POST", url);
				req.setRequestHeader('X_REQUESTED_WITH', 'xmlhttprequest');
				req.send();
			}
			/*keyHandler(e){
	  	switch(e.keyCode){
	  		case "13": // enter
	  		e.preventDefault();
	  		this.submitInputHandler(e));
	  		break;
	  	}
	  }*/

		}, {
			key: 'startClickHandler',
			value: function startClickHandler() {
				// dit is nog niet optimaal (geen idee waarom, needs bugfixing)
				this.game.state.start('Play');
			}
		}, {
			key: 'isEmpty',
			value: function isEmpty(input) {
				// Als de lengte gelijk is aan 0, returnt dit true;
				// Checht gewoon of het empty is of niet
				return input.value.length === 0;
			}
		}, {
			key: 'hideElement',
			value: function hideElement(el) {
				el.style.visibility = 'hidden';
			}
		}, {
			key: 'showElement',
			value: function showElement(el) {
				el.style.visibility = 'visible';
			}
		}]);

		return Gameover;
	})(Phaser.State);

	exports.default = Gameover;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Text = __webpack_require__(9);

	var _Text2 = _interopRequireDefault(_Text);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Info = (function (_Phaser$State) {
		_inherits(Info, _Phaser$State);

		function Info() {
			_classCallCheck(this, Info);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Info).apply(this, arguments));
		}

		_createClass(Info, [{
			key: 'preload',
			value: function preload() {
				console.log('start info');
			}
		}, {
			key: 'create',
			value: function create() {
				// To create multi-line text insert \r, \n or \r\n escape codes into the text string.
				// dit font heeft geen . tekens dus als je een punt typt komt er een error, geen punten dus ;)
				// new BitmapText(game, x, y, font, text, size)`
				var text = "het doel\nhet doel van het spel is van zo ver mogelijk te raken\ndit doe je door zoveel mogelijk enemies te ontwijken\n\ncontrols\nDoor de pijltjestoesten te gebruiken kan je\nwisselen tussen bovenaan of onderaan te lopen";
				this.textBox = new _Text2.default(this.game, this.game.width / 2, this.game.height / 2, 'gamefont', text, 20);
				this.textBox.anchor.setTo(.5, .5);
				this.game.add.existing(this.textBox);

				this.startButton = this.game.add.button(this.game.width / 2, this.game.height / 2 + 175, 'startButton', this.startClickHandler, this);
				this.startButton.anchor.setTo(0.5, 0.5);
			}
		}, {
			key: 'update',
			value: function update() {}
		}, {
			key: 'shutdown',
			value: function shutdown() {
				console.log('end info');
			}
		}, {
			key: 'startClickHandler',
			value: function startClickHandler() {
				this.game.state.start('Play');
			}
		}]);

		return Info;
	})(Phaser.State);

	exports.default = Info;

/***/ }
/******/ ]);
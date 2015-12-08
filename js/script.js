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

	var _Play = __webpack_require__(9);

	var _Play2 = _interopRequireDefault(_Play);

	var _Leaderboard = __webpack_require__(10);

	var _Leaderboard2 = _interopRequireDefault(_Leaderboard);

	var _Gameover = __webpack_require__(11);

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
				this.game.load.image('leaderboardButton', 'assets/leaderboardButton.png');
				this.game.load.image('infoButton', 'assets/instructionsButton.png');
				this.game.load.image('backButton', 'assets/backButton.png');
				this.game.load.image('city', 'assets/city.jpg');
				this.game.load.image('menuBackground', 'assets/menu_background.png');
				this.game.load.image('bullet', 'assets/bullet.png');
				this.game.load.image('player_menu', 'assets/player_menu.png');

				this.game.load.bitmapFont('gamefont', 'assets/font/extra/gamefont.png', 'assets/font/extra/gamefont.fnt');

				this.game.load.spritesheet('player_black', 'assets/player_black.png', 42, 44, 14);
				this.game.load.spritesheet('player_white', 'assets/player_white.png', 42, 44, 14);
				this.game.load.spritesheet('enemy_black', 'assets/enemy_black.png', 45, 45, 6);
				this.game.load.spritesheet('enemy_white', 'assets/enemy_white.png', 45, 45, 6);
				this.game.load.spritesheet('enemy_orange', 'assets/enemy_orange.png', 45, 45, 6);
				this.game.load.spritesheet('enemy_red', 'assets/enemy_red.png', 60, 60, 6);
				this.game.load.spritesheet('coin', 'assets/coin.png', 25, 25, 10);

				this.game.load.audio('change_side', 'assets/sound/change_side.mp3');
				this.game.load.audio('coin', 'assets/sound/coin.mp3');
				this.game.load.audio('enemy_hit', 'assets/sound/enemy_hit.wav');
				this.game.load.audio('step', 'assets/sound/step.mp3');
				this.game.load.audio('player_hit', 'assets/sound/player_hit.mp3');
				this.game.load.audio('player_shoot', 'assets/sound/shot.mp3');
				this.game.load.audio('click', 'assets/sound/click.mp3');
				this.game.load.audio('background', 'assets/sound/background2.mp3');
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

	var _Sound = __webpack_require__(6);

	var _Sound2 = _interopRequireDefault(_Sound);

	var _Text = __webpack_require__(7);

	var _Text2 = _interopRequireDefault(_Text);

	var _Utils = __webpack_require__(8);

	var Utils = _interopRequireWildcard(_Utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
				// music
				this.clickSound = new _Sound2.default(this.game, 'click');

				// Images
				this.city = new _BackgroundCity2.default(this.game, 0, 0, 750, 500, 'city');
				this.game.add.existing(this.city);

				this.menuBackground = new _MenuBackground2.default(this.game, this.game.width / 2, this.game.height / 2);
				this.game.add.existing(this.menuBackground);

				this.playerImg = this.game.add.sprite(this.game.width / 2, this.game.height / 2 - 90, 'player_menu');
				Utils.center(this.playerImg);

				var title = "CITYFLIP";
				this.titleBox = new _Text2.default(this.game, this.game.width / 2 + 5, this.game.height / 2 - 22, 'gamefont', title, 60);
				Utils.center(this.titleBox);
				this.game.add.existing(this.titleBox);

				// Buttons
				this.startButton = this.game.add.button(this.game.width / 2, this.game.height / 2 + 150, 'startButton', this.startClickHandler, this);
				Utils.center(this.startButton);

				this.leaderboardButton = this.game.add.button(this.game.width / 2 - 100, this.game.height / 2 + 150, 'leaderboardButton', this.leaderboardClickHandler, this);
				Utils.center(this.leaderboardButton);

				this.infoButton = this.game.add.button(this.game.width / 2 + 100, this.game.height / 2 + 150, 'infoButton', this.infoClickHandler, this);
				Utils.center(this.infoButton);

				// game, x, y, font, text, size, align
				//this.logo = new Text(this.game, this.game.width/2, this.game.height/2, 'gamefont', 'CityFlip', 50, 'center');;
				//this.game.add.existing(this.logo);

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
				this.clickSound.play();
				Utils.changeState(this.game, 'Play');
			}
		}, {
			key: 'leaderboardClickHandler',
			value: function leaderboardClickHandler() {
				this.clickSound.play();
				Utils.changeState(this.game, 'Leaderboard');
			}
		}, {
			key: 'infoClickHandler',
			value: function infoClickHandler() {
				this.clickSound.play();
				Utils.changeState(this.game, 'Info');
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
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Sound = (function (_Phaser$Sound) {
		_inherits(Sound, _Phaser$Sound);

		function Sound(game, key, volume, loop) {
			_classCallCheck(this, Sound);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Sound).call(this, game, key, 1, false));
		}

		return Sound;
	})(Phaser.Sound);

	exports.default = Sound;

/***/ },
/* 7 */
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
			_this.tint = 0xFFFFFF;
			return _this;
		}

		return Text;
	})(Phaser.BitmapText);

	exports.default = Text;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var changeState = exports.changeState = function changeState(game, state) {
		game.state.start(state);
	};

	var showElement = exports.showElement = function showElement(el) {
		el.style.visibility = 'visible';
	};

	var hideElement = exports.hideElement = function hideElement(el) {
		el.style.visibility = 'hidden';
	};

	var isEmpty = exports.isEmpty = function isEmpty(input) {
		return input.value.length === 0;
	};

	var center = exports.center = function center(el) {
		return el.anchor.setTo(.5, .5);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Player = __webpack_require__(14);

	var _Player2 = _interopRequireDefault(_Player);

	var _BackgroundCity = __webpack_require__(4);

	var _BackgroundCity2 = _interopRequireDefault(_BackgroundCity);

	var _Enemy = __webpack_require__(16);

	var _Enemy2 = _interopRequireDefault(_Enemy);

	var _EnemyGroup = __webpack_require__(17);

	var _EnemyGroup2 = _interopRequireDefault(_EnemyGroup);

	var _Text = __webpack_require__(7);

	var _Text2 = _interopRequireDefault(_Text);

	var _Coin = __webpack_require__(18);

	var _Coin2 = _interopRequireDefault(_Coin);

	var _Sound = __webpack_require__(6);

	var _Sound2 = _interopRequireDefault(_Sound);

	var _BulletGroup = __webpack_require__(19);

	var _BulletGroup2 = _interopRequireDefault(_BulletGroup);

	var _Keyboard = __webpack_require__(20);

	var _Keyboard2 = _interopRequireDefault(_Keyboard);

	var _Utils = __webpack_require__(8);

	var Utils = _interopRequireWildcard(_Utils);

	var _Data = __webpack_require__(12);

	var _Data2 = _interopRequireDefault(_Data);

	var _EnemyBlack = __webpack_require__(21);

	var _EnemyBlack2 = _interopRequireDefault(_EnemyBlack);

	var _EnemyWhite = __webpack_require__(23);

	var _EnemyWhite2 = _interopRequireDefault(_EnemyWhite);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var harderOverTime = 0;

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
				this.backgroundSound = new _Sound2.default(this.game, 'background');
			}
		}, {
			key: 'create',
			value: function create() {

				this.flipSound = new _Sound2.default(this.game, 'change_side');
				this.coinSound = new _Sound2.default(this.game, 'coin');
				this.enemyHitSound = new _Sound2.default(this.game, 'enemy_hit');
				this.playerHitSound = new _Sound2.default(this.game, 'player_hit');
				this.playerShootSound = new _Sound2.default(this.game, 'player_shoot');
				this.backgroundSound.volume = .4;
				this.backgroundSound.play();

				// physics
				this.game.physics.startSystem(Phaser.Physics.ARCADE);

				// controls
				this.cursors = this.game.input.keyboard.createCursorKeys();
				this.spacebar = this.game.input.keyboard.addKey(32);
				this.spacebar.onDown.add(this.spaceBarHandler, this);

				// Declarations
				this.side = 'up'; //Nu kunnen we weten of hij bovenaan of onderaan loopt
				_Data2.default.score = 0;
				_Data2.default.distance = 0;
				_Data2.default.bullets = 20;
				this.gameSpeed = .95; //variable die de snelheid van de game bepaalt. hoe groter het getal hoe sneller/moeilijker. Beinvloed momenteel enkel spawnrate van enemy
				this.delay = Phaser.Timer.SECOND * 2;
				this.minimumDistanceBetween = 500;

				this.bossTimer = 0;
				this.keepUpWithBoss = []; // array om bij te houden welke bosses er al aangemaakt zijn. Idealiter blijft deze array op 0 of 1 entries.

				// Images
				this.city = new _BackgroundCity2.default(this.game, 0, 0, 750, 500, 'city');
				this.game.add.existing(this.city);

				// Player
				this.player = new _Player2.default(this.game, 50, this.game.height / 2 - 43, this.flipSound);
				this.game.add.existing(this.player);

				// enemy
				this.enemies = this.game.add.group();
				this.enemyTimer = this.game.time.events.loop(this.delay, this.spawnEnemyTest2, this);

				// coins
				this.coins = this.game.add.group();
				this.coinTimer = this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.spawnCoin, this);

				// distance score text
				this.distanceTimer = this.game.time.events.loop(Phaser.Timer.SECOND / 1.2, this.increaseDistance, this);
				this.distanceTextBox = new _Text2.default(this.game, this.game.width / 2, 50, 'gamefont', _Data2.default.distance + ' km', 30);
				this.game.add.existing(this.distanceTextBox);

				// coins score text
				this.scoreTextBox = new _Text2.default(this.game, this.game.width / 2 + 300, 50, 'gamefont', _Data2.default.score + '\ncoins', 20, 'center');
				this.game.add.existing(this.scoreTextBox);

				// bullets score text
				this.bulletTextBox = new _Text2.default(this.game, this.game.width / 2 - 300, 50, 'gamefont', _Data2.default.bullets + '\nbullets', 20, 'center');
				this.game.add.existing(this.bulletTextBox);

				// bullets
				this.bullets = this.game.add.group();

				// testEnemies
				this.enemiesTest = this.game.add.group();

				// All enemies
				this.allEnemies = this.game.add.group();

				// testblack
				this.blackEnemies = this.game.add.group();
				this.blackEnemies.enableBody = true;
				this.allEnemies.add(this.blackEnemies);

				this.whiteEnemies = this.game.add.group();
				this.whiteEnemies.enableBody = true;
				this.allEnemies.add(this.whiteEnemies);
			}
		}, {
			key: 'update',
			value: function update() {
				var _this2 = this;

				this.blackEnemies.forEach(function (enemy) {
					enemy.body.velocity.x = -200;
				});

				this.whiteEnemies.forEach(function (enemy) {
					enemy.body.velocity.x = -200;
				});

				harderOverTime++;

				if (this.cursors.down.isDown) {
					this.player.flipDown();
					if (this.keepUpWithBoss.length != 0) {
						this.keepUpWithBoss[0].flipDown();
					}
				}
				if (this.cursors.up.isDown) {
					this.player.flipUp();
					if (this.keepUpWithBoss.length != 0) {
						this.keepUpWithBoss[0].flipUp();
					}
				}

				// console.log(Data.bullets);

				// collision
				this.enemies.forEach(function (oneEnemy) {
					_this2.game.physics.arcade.overlap(_this2.player, oneEnemy, _this2.enemyPlayerCollisionHandler, null, _this2);
					_this2.game.physics.arcade.collide(_this2.player, oneEnemy, _this2.enemyPlayerCollisionHandler, null, _this2);
				});

				this.coins.forEach(function (oneCoin) {
					_this2.game.physics.arcade.overlap(_this2.player, oneCoin, _this2.coinPlayerCollisionHandler, null, _this2);
				});

				this.bullets.forEach(function (oneBullet) {
					_this2.enemies.forEach(function (oneEnemy) {
						_this2.game.physics.arcade.overlap(oneBullet, oneEnemy, _this2.enemyBulletCollisionHandler, null, _this2);
						_this2.game.physics.arcade.collide(oneBullet, oneEnemy, _this2.enemyBulletCollisionHandler, null, _this2);
					});
				});

				// testen
				this.bullets.forEach(function (oneBullet) {
					_this2.enemiesTest.forEach(function (oneEnemy) {
						_this2.game.physics.arcade.overlap(oneBullet, oneEnemy, _this2.enemyBulletCollisionHandler, null, _this2);
						_this2.game.physics.arcade.collide(oneBullet, oneEnemy, _this2.enemyBulletCollisionHandler, null, _this2);
					});
				});
				// this.enemiesTest.forEach((oneEnemy) => {
				// 	this.game.physics.arcade.overlap(this.player, oneEnemy, this.enemyPlayerCollisionHandler, null, this);
				// 	this.game.physics.arcade.collide(this.player, oneEnemy, this.enemyPlayerCollisionHandler, null, this);
				// });

				// nieuwe code
				this.allEnemies.forEach(function (oneEnemy) {
					_this2.game.physics.arcade.overlap(_this2.player, oneEnemy, _this2.enemyPlayerCollisionHandler, null, _this2);
					_this2.game.physics.arcade.collide(_this2.player, oneEnemy, _this2.enemyPlayerCollisionHandler, null, _this2);
				});

				this.bullets.forEach(function (oneBullet) {
					_this2.allEnemies.forEach(function (oneEnemy) {
						_this2.game.physics.arcade.overlap(oneBullet, oneEnemy, _this2.enemyBulletCollisionHandler, null, _this2);
						// this.game.physics.arcade.collide(oneBullet, oneEnemy, this.enemyBulletCollisionHandler, null, this);
					});
				});
			}
		}, {
			key: 'shutdown',
			value: function shutdown() {
				console.log('end play');
				this.backgroundSound.destroy();
			}

			// eigen functies

		}, {
			key: 'spawnEnemy',
			value: function spawnEnemy() {
				var bossChance = Math.random();
				var orangeEnemyChance = Math.random() * (0.6 + harderOverTime / 10000);
				// console.log(bossChance, orangeEnemyChance);

				var direction = undefined;
				var enemyType = "normal";

				var enemy = this.enemies.getFirstExists(false);

				if (!enemy) {
					if (bossChance < 0.2 + harderOverTime / 10000 && bossChance > 0 && this.keepUpWithBoss.length === 0) {
						// console.log("spawn a boss");
						enemy = new _Enemy2.default(this.game, 0, 0, 'enemy_red');
						enemyType = "boss";

						// geef hem mee aan this.keepUpWithBoss zodat je later er nog veranderingen op kan uitvoeren
						// (buiten deze functie om)
						this.keepUpWithBoss.push(enemy);
					} else if (orangeEnemyChance < 0.4) {
						// console.log("spawn an orange guy");
						enemy = new _Enemy2.default(this.game, 0, 0, 'enemy_orange');
						enemyType = "orange";
					} else {
						enemy = new _Enemy2.default(this.game, 0, 0, 'enemy_black');
						enemyType = "normal";
					}
				}

				// positioning
				var x = this.game.rnd.integerInRange(750, 800);
				var lot = Math.round(Math.random() * 1);
				var y = undefined;
				if (lot == 0) {
					direction = "up";
					if (enemyType === "boss") {
						y = this.game.height / 2 - 29;
					} else {
						y = 225;
					}
					enemy.scale.y = 1;
				}
				if (lot == 1) {
					direction = "down";
					if (enemyType === "boss") {
						y = this.game.height / 2 + 31;
					} else {
						y = 275;
					}
					enemy.scale.y = -1;
				}

				this.spawnEnemyDetails(orangeEnemyChance, enemy, direction, enemyType);

				this.game.physics.arcade.enableBody(enemy);
				enemy.reset(x, y);
				enemy.body.velocity.x = -250 - harderOverTime / 50;
				this.enemies.add(enemy);
			}
		}, {
			key: 'spawnEnemyDetails',
			value: function spawnEnemyDetails(orangeEnemyChance, enemy, direction, enemyType) {
				// boss
				if (enemyType === "boss") {
					enemy.lives = 4;
					enemy.loadTexture('enemy_red', null, false);
					// harder enemy
				} else if (enemyType === "orange") {
						enemy.lives = 2;
						enemy.loadTexture('enemy_orange', null, false);
						// regular enemy
					} else {
							if (direction === "up") {
								enemy.loadTexture('enemy_black', null, false);
							} else {
								enemy.loadTexture('enemy_white', null, false);
							}
							enemy.lives = 1;
						}
			}
		}, {
			key: 'spawnCoin',
			value: function spawnCoin() {
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
				player.destroy();
				enemy.destroy();
				this.playerHitSound.play();
				Utils.changeState(this.game, 'Gameover');
			}
		}, {
			key: 'coinPlayerCollisionHandler',
			value: function coinPlayerCollisionHandler(player, coin) {
				coin.exists = false;
				_Data2.default.score++;
				_Data2.default.bullets += 5;
				this.bulletTextBox.text = _Data2.default.bullets + '\nbullets';
				var suffix = this.createSuffixForScore();
				this.updateScore(suffix);
				this.coinSound.play();
			}
		}, {
			key: 'enemyBulletCollisionHandler',
			value: function enemyBulletCollisionHandler(bullet, enemy) {
				enemy.lives--;
				if (enemy.lives === 0) {
					enemy.destroy();
				}
				bullet.destroy();
				this.enemyHitSound.play();
			}
		}, {
			key: 'createSuffixForScore',
			value: function createSuffixForScore() {
				if (_Data2.default.score === 1) {
					return ' coin';
				} else {
					return ' coins';
				}
			}
		}, {
			key: 'increaseDistance',
			value: function increaseDistance() {
				_Data2.default.distance++;
				this.updateDistance();
				if (_Data2.default.distance % 2 === 0) {
					var delay = this.enemyTimer.delay * this.gameSpeed;
					// console.log(this.gameSpeed);
					// this.enemyTimer.tick = 1449055971970 - (Phaser.Timer.SECOND / this.gameSpeed);
					this.enemyTimer.delay = delay;

					// zorg dat er niet enemies elkaar overlappen en dat de player (in principe) nog kan swappen
					if (this.enemyTimer.delay < this.minimumDistanceBetween) {
						this.enemyTimer.delay = this.minimumDistanceBetween;
					}
				}
			}
		}, {
			key: 'spaceBarHandler',
			value: function spaceBarHandler() {
				// shoot
				if (_Data2.default.bullets >= 1) {
					var bullet = this.bullets.getFirstExists(false);
					if (!bullet) {
						bullet = new _BulletGroup2.default(this.game, this.bullets, this.player.x, this.player.y);
					}
					var x = this.player.body.x - 10;
					var y = this.player.body.y - 105;
					// console.log(x, y);
					bullet.reset(x, y);
					_Data2.default.bullets--;
					this.bulletTextBox.text = _Data2.default.bullets + '\nbullets';
					// console.log('shoot');
					this.playerShootSound.play();
				}
			}
		}, {
			key: 'updateScore',
			value: function updateScore(suffix) {
				this.scoreTextBox.text = _Data2.default.score + suffix;
			}
		}, {
			key: 'updateDistance',
			value: function updateDistance() {
				this.distanceTextBox.text = _Data2.default.distance + ' km';
			}
		}, {
			key: 'spawnEnemyTest',
			value: function spawnEnemyTest() {
				var color = this.generateRandomColor();
				console.log('spawn er een');
				var enemy = this.enemiesTest.getFirstExists(false);
				if (!enemy) {
					enemy = new _EnemyGroup2.default(this.game, this.enemiesTest, this.generateRandomColor());
				}
				enemy.reset(color);
				console.log(this.enemiesTest.length);
			}
		}, {
			key: 'generateRandomColor',
			value: function generateRandomColor() {
				var colors = ['black', 'orange', 'red', 'white'];
				return colors[Math.round(Math.random() * (colors.length - 1))];
			}
		}, {
			key: 'spawnEnemyTest2',
			value: function spawnEnemyTest2() {
				var color = this.generateRandomColor();
				var enemy = undefined,
				    x = undefined,
				    y = undefined;
				console.log('color ' + color);
				switch (color) {
					case 'black':
						enemy = this.blackEnemies.getFirstExists(false);
						if (!enemy) {
							enemy = new _EnemyBlack2.default(this.game, 0, 0);
							enemy.body.velocity.x = -200;
							this.blackEnemies.add(enemy);
						}
						x = this.game.rnd.integerInRange(750, 800);
						y = 225;
						console.log('x ' + x, 'y ' + y);
						enemy.reset(x, y);
						enemy.lives = 1;
						break;

					case 'white':
						enemy = this.whiteEnemies.getFirstExists(false);
						if (!enemy) {
							enemy = new _EnemyWhite2.default(this.game, 0, 0);
							enemy.body.velocity.x = -200;
							this.whiteEnemies.add(enemy);
						}
						x = this.game.rnd.integerInRange(750, 800);
						y = 275;
						console.log('x ' + x, 'y ' + y);
						enemy.reset(x, y);
						enemy.lives = 1;
						break;

					// to do: red, orange	
				}

				// object pooling werkt, yes
				console.log('black ' + this.blackEnemies.length, 'white ' + this.whiteEnemies.length);
			}
		}]);

		return Play;
	})(Phaser.State);

	exports.default = Play;

/***/ },
/* 10 */
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

	var _Sound = __webpack_require__(6);

	var _Sound2 = _interopRequireDefault(_Sound);

	var _Utils = __webpack_require__(8);

	var Utils = _interopRequireWildcard(_Utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
				// music
				this.clickSound = new _Sound2.default(this.game, 'click');

				// Build table with results
				this.getJSON('http://student.howest.be/bernd.bousard/20152016/CPIII/CITYFLIP/index.php?page=getScores');

				// Images
				this.city = new _BackgroundCity2.default(this.game, 0, 0, 750, 500, 'city');
				this.game.add.existing(this.city);

				this.menuBackground = new _MenuBackground2.default(this.game, this.game.width / 2, this.game.height / 2);
				this.game.add.existing(this.menuBackground);

				// Buttons
				this.startButton = this.game.add.button(this.game.width / 2 + 50, this.game.height / 2 + 150, 'startButton', this.startClickHandler, this);
				Utils.center(this.startButton);
				this.backButton = this.game.add.button(this.game.width / 2 - 50, this.game.height / 2 + 150, 'backButton', this.backClickHandler, this);
				Utils.center(this.backButton);
			}
		}, {
			key: 'update',
			value: function update() {}
		}, {
			key: 'shutdown',
			value: function shutdown() {
				console.log('end leaderboard');
				if (leaderboardTabel) {
					Utils.hideElement(leaderboardTabel);
				}
			}

			// eigen functies

		}, {
			key: 'buildLeaderboard',
			value: function buildLeaderboard(scores) {

				var userScores = scores;
				leaderboardTabel = document.createElement('table');
				leaderboardTabel.id = 'table';

				var topRowTr = document.createElement('tr');
				var topRowThForScore = document.createElement('th');
				var topRowThForDistance = document.createElement('th');
				var topRowThForName = document.createElement('th');

				topRowThForScore.innerText = "Score";
				topRowThForName.innerText = "Name";
				topRowThForDistance.innerText = "Distance";

				topRowThForScore.classList.add('score');

				topRowTr.appendChild(topRowThForScore);
				topRowTr.appendChild(topRowThForName);
				topRowTr.appendChild(topRowThForDistance);

				leaderboardTabel.appendChild(topRowTr);

				userScores.forEach(function (data) {
					var tr = document.createElement('tr');

					var nameHTML = document.createElement('td');
					var scoreHTML = document.createElement('td');
					var distanceHTML = document.createElement('td');

					nameHTML.innerText = data.name;
					scoreHTML.innerText = data.score;
					scoreHTML.classList.add('score');
					distanceHTML.innerText = data.distance;

					tr.appendChild(scoreHTML);
					tr.appendChild(nameHTML);
					tr.appendChild(distanceHTML);
					leaderboardTabel.appendChild(tr);
				});

				document.querySelector('body').appendChild(leaderboardTabel);
				Utils.showElement(leaderboardTabel);
			}
		}, {
			key: 'getJSON',
			value: function getJSON(url) {
				var _this2 = this;

				fetch(url).then(function (response) {
					return response.json();
				}).then(function (response) {
					_this2.buildLeaderboard(response);
				}).catch(function (error) {
					console.log('no scores yet');
				});
			}
		}, {
			key: 'startClickHandler',
			value: function startClickHandler() {
				this.clickSound.play();
				Utils.changeState(this.game, 'Play');
			}
		}, {
			key: 'backClickHandler',
			value: function backClickHandler() {
				this.clickSound.play();
				Utils.changeState(this.game, 'Menu');
			}
		}]);

		return Leaderboard;
	})(Phaser.State);

	exports.default = Leaderboard;

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

	var _Sound = __webpack_require__(6);

	var _Sound2 = _interopRequireDefault(_Sound);

	var _Text = __webpack_require__(7);

	var _Text2 = _interopRequireDefault(_Text);

	var _Utils = __webpack_require__(8);

	var Utils = _interopRequireWildcard(_Utils);

	var _Data = __webpack_require__(12);

	var _Data2 = _interopRequireDefault(_Data);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var confirm = undefined;
	var inputField = undefined;
	var leaderboardNameInput = undefined;
	var leaderboardSubmit = undefined;
	var leaderboard = undefined;

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

				// music
				this.clickSound = new _Sound2.default(this.game, 'click');

				this.createForm();
				leaderboardNameInput = document.getElementById("text");
				leaderboardSubmit = document.getElementById("submit");
				leaderboard = document.getElementById("form");
				leaderboard.addEventListener('submit', function (event) {
					event.preventDefault();
					_this2.leaderboardSubmitHandler();
				});
				// not sure about this
				leaderboardSubmit.addEventListener('submit', function (event) {
					event.preventDefault();
					_this2.leaderboardSubmitHandler();
				});

				// Images
				this.city = new _BackgroundCity2.default(this.game, 0, 0, 750, 500, 'city');
				this.game.add.existing(this.city);

				this.menuBackground = new _MenuBackground2.default(this.game, this.game.width / 2, this.game.height / 2);
				this.game.add.existing(this.menuBackground);

				// Buttons
				this.startButton = this.game.add.button(this.game.width / 2, this.game.height / 2 + 150, 'startButton', this.startClickHandler, this);
				Utils.center(this.startButton);

				// score and distance
				this.visibleScore = new _Text2.default(this.game, this.game.width / 2 - 50, 200, 'gamefont', 'Your score\n' + _Data2.default.score, 20, 'center');
				this.game.add.existing(this.visibleScore);
				this.visibleDistance = new _Text2.default(this.game, this.game.width / 2 + 80, 200, 'gamefont', 'You ran\n' + _Data2.default.distance + ' km', 20, 'center');
				this.game.add.existing(this.visibleDistance);
			}
		}, {
			key: 'update',
			value: function update() {}
		}, {
			key: 'shutdown',
			value: function shutdown() {
				console.log('end gameover');
				leaderboard.remove();
			}
		}, {
			key: 'createForm',
			value: function createForm() {

				inputField = document.createElement('form');
				inputField.id = 'form';

				var formNameInput = document.createElement('input');
				formNameInput.setAttribute('type', 'text');
				formNameInput.setAttribute('name', 'name');
				formNameInput.setAttribute('placeholder', 'username');
				formNameInput.setAttribute('maxlength', '10');
				formNameInput.id = 'text';

				var formSubmit = document.createElement('input');
				formSubmit.setAttribute('type', 'submit');
				formSubmit.setAttribute('name', 'action');
				formSubmit.setAttribute('value', 'post score');
				formSubmit.id = 'submit';

				inputField.appendChild(formNameInput);
				inputField.appendChild(formSubmit);

				document.querySelector('body').appendChild(inputField);
				Utils.showElement(inputField);
			}
		}, {
			key: 'submitInputHandler',
			value: function submitInputHandler(name) {
				var _this3 = this;

				this.clickSound.play();
				var req = new XMLHttpRequest();
				var url = 'http://student.howest.be/bernd.bousard/20152016/CPIII/CITYFLIP/index.php?page=postScores&name=' + name + '' + '&score=' + _Data2.default.score + '' + '&distance=' + _Data2.default.distance;
				req.open("POST", url);
				req.setRequestHeader('X_REQUESTED_WITH', 'xmlhttprequest');
				req.send();
				// Het lijkt dat hij 2x pusht naar de DDB maar als ik een event listener eraan
				// Koppen dan zien we het maar 1 keer maar zit wel 2x id DDB
				req.addEventListener('load', function () {
					Utils.hideElement(inputField);
					Utils.changeState(_this3.game, 'Leaderboard');
				});
			}
		}, {
			key: 'leaderboardSubmitHandler',
			value: function leaderboardSubmitHandler() {
				if (!Utils.isEmpty(leaderboardNameInput)) {
					var name = leaderboardNameInput.value;
					this.submitInputHandler(name);
				}
			}
		}, {
			key: 'startClickHandler',
			value: function startClickHandler() {
				this.clickSound.play();
				Utils.hideElement(inputField);
				Utils.changeState(this.game, 'Play');
			}
		}]);

		return Gameover;
	})(Phaser.State);

	exports.default = Gameover;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Data = function Data(game) {
		_classCallCheck(this, Data);

		game.data = {};
		this.score = 0;
		this.distance = 0;
		this.bullets = 5;
	};

	exports.default = Data;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Text = __webpack_require__(7);

	var _Text2 = _interopRequireDefault(_Text);

	var _Sound = __webpack_require__(6);

	var _Sound2 = _interopRequireDefault(_Sound);

	var _Utils = __webpack_require__(8);

	var Utils = _interopRequireWildcard(_Utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
				// music
				this.clickSound = new _Sound2.default(this.game, 'click');
				// To create multi-line text insert \r, \n or \r\n escape codes into the text string.
				// dit font heeft geen . tekens dus als je een punt typt komt er een error, geen punten dus ;)
				// new BitmapText(game, x, y, font, text, size)`
				var text = "Het doel\nHet doel van het spel is om zo ver mogelijk te raken\nDit doe je door zoveel mogelijk enemies te ontwijken\n\nControls\nDoor de pijltjestoesten te gebruiken kan je\nwisselen tussen bovenaan en onderaan\nGebruik de spatiebalk om te schieten";
				this.textBox = new _Text2.default(this.game, this.game.width / 2, this.game.height / 2, 'gamefont', text, 20);
				this.textBox.anchor.setTo(.5, .5);
				this.game.add.existing(this.textBox);

				this.startButton = this.game.add.button(this.game.width / 2 + 50, this.game.height / 2 + 175, 'startButton', this.startClickHandler, this);
				Utils.center(this.startButton);
				this.backButton = this.game.add.button(this.game.width / 2 - 50, this.game.height / 2 + 175, 'backButton', this.backClickHandler, this);
				Utils.center(this.backButton);
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
				this.clickSound.play();
				Utils.changeState(this.game, 'Play');
			}
		}, {
			key: 'backClickHandler',
			value: function backClickHandler() {
				this.clickSound.play();
				Utils.changeState(this.game, 'Menu');
			}
		}]);

		return Info;
	})(Phaser.State);

	exports.default = Info;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Bullet = __webpack_require__(15);

	var _Bullet2 = _interopRequireDefault(_Bullet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Player = (function (_Phaser$Sprite) {
		_inherits(Player, _Phaser$Sprite);

		function Player(game, x, y, flipSound) {
			_classCallCheck(this, Player);

			// collide

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, game, x, y, 'player_black'));

			_this.game.physics.arcade.enableBody(_this);
			_this.body.immovable = true;
			_this.body.allowGravity = false;

			// sound
			_this.flipSound = flipSound;

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
				if (this.body.position.y === this.game.height / 2 - 43) {
					this.loadTexture('player_white', null, false);
					this.body.y = this.game.height / 2;
					this.flipSound.play();
				}
			}
		}, {
			key: 'flipUp',
			value: function flipUp() {
				// console.log('player staat nu boven');
				if (this.body.position.y === this.game.height / 2) {
					this.loadTexture('player_black', null, false);
					this.body.y = this.game.height / 2 - 43;
					this.flipSound.play();
				}
			}
		}, {
			key: 'shoot',
			value: function shoot(game, bullets) {
				if (this.enoughBullets(bullets)) {
					var bullet = new _Bullet2.default(game, this.body.x, this.body.y);
					game.add.existing(bullet);
				}
			}
		}, {
			key: 'enoughBullets',
			value: function enoughBullets(bullets) {
				return bullets > 0;
			}
		}]);

		return Player;
	})(Phaser.Sprite);

	exports.default = Player;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Bullet = (function (_Phaser$Sprite) {
		_inherits(Bullet, _Phaser$Sprite);

		function Bullet(game, x, y) {
			_classCallCheck(this, Bullet);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Bullet).call(this, game, x, y, 'bullet'));
			// new Group(game, parent, name, addToStage, enableBody, physicsBodyType)

			_this.anchor.setTo(.5, .5);

			_this.game.physics.arcade.enableBody(_this);
			_this.body.allowGravity = false;
			_this.body.immovable = true;
			return _this;
		}

		_createClass(Bullet, [{
			key: 'update',
			value: function update() {
				this.game.debug.body(this);
			}
		}]);

		return Bullet;
	})(Phaser.Sprite);

	exports.default = Bullet;

/***/ },
/* 16 */
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

		function Enemy(game, x, y, color, lives, speed) {
			_classCallCheck(this, Enemy);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Enemy).call(this, game, x, y, color));

			_this.anchor.setTo(.5, .5);

			// collide
			_this.game.physics.arcade.enable(_this);
			_this.immovable = true;
			_this.allowGravity = false;

			// pooling
			_this.exists = true;

			// animation
			_this.animations.add('walk');
			_this.animations.play('walk', 8, true);

			// movement
			// this.body.velocity.x = -250;

			// standaard 1, tenzij anders meegegeven in Play state
			_this.lives = 1;
			_this.body.velocity.x = -250;
			return _this;
		}

		_createClass(Enemy, [{
			key: 'update',
			value: function update() {
				this.game.debug.body(this);
				if (this.position.x < -this.width) {
					this.exists = false;
				}
			}
		}, {
			key: 'flipDown',
			value: function flipDown() {
				this.body.y = this.game.height / 2;
				this.scale.y = -1;
			}
		}, {
			key: 'flipUp',
			value: function flipUp() {
				this.body.y = this.game.height / 2 - 60;
				this.scale.y = 1;
			}
		}]);

		return Enemy;
	})(Phaser.Sprite);

	exports.default = Enemy;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Enemy = __webpack_require__(16);

	var _Enemy2 = _interopRequireDefault(_Enemy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EnemyGroup = (function (_Phaser$Group) {
		_inherits(EnemyGroup, _Phaser$Group);

		function EnemyGroup(game, parent, color) {
			_classCallCheck(this, EnemyGroup);

			// constructor(game, x, y, color, lives, speed)

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EnemyGroup).call(this, game, parent));

			_this.enemy;
			var x = _this.game.rnd.integerInRange(750, 800);
			var y = _this.calculateRandom();
			switch (color) {
				case 'orange':
					_this.enemy = new _Enemy2.default(game, x, y, 'enemy_orange', 1, -300);
					_this.enemy.position.y = 225;
					break;
				case 'black':
					_this.enemy = new _Enemy2.default(game, x, y, 'enemy_black', 1, -250);
					_this.enemy.position.y = 225;
					break;
				case 'white':
					_this.enemy = new _Enemy2.default(game, x, y, 'enemy_white', 1, -250);
					_this.enemy.scale.y = -1;
					_this.enemy.position.y = 275;
					break;
				case 'red':
					_this.enemy = new _Enemy2.default(game, x, y, 'enemy_red', 2, -100);
					_this.enemy.position.y = 220;
					break;
			}

			_this.exists = true;

			_this.add(_this.enemy);
			return _this;
		}

		_createClass(EnemyGroup, [{
			key: 'update',
			value: function update() {
				if (this.enemy.position.x < -this.enemy.width) {
					this.exists = false;
				}
				this.game.debug.body(this.enemy);
			}
		}, {
			key: 'reset',
			value: function reset(color) {
				var y = 0;
				var x = this.game.rnd.integerInRange(750, 800);
				var v = 0;
				var l = 0;
				console.log('enemy' + color);
				switch (color) {
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
		}, {
			key: 'calculateRandom',
			value: function calculateRandom() {
				return Math.round(Math.random());
			}
		}]);

		return EnemyGroup;
	})(Phaser.Group);

	exports.default = EnemyGroup;

/***/ },
/* 18 */
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

			_this.animations.add('rotate');
			_this.animations.play('rotate', 15, true);

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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Bullet = __webpack_require__(15);

	var _Bullet2 = _interopRequireDefault(_Bullet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BulletGroup = (function (_Phaser$Group) {
		_inherits(BulletGroup, _Phaser$Group);

		function BulletGroup(game, parent, x, y) {
			_classCallCheck(this, BulletGroup);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BulletGroup).call(this, game, parent));

			_this.bullet = new _Bullet2.default(_this.game, 0, 0);
			_this.bullet.anchor.setTo(.5, .5);
			_this.add(_this.bullet);

			_this.setAll('body.velocity.x', 200);

			_this.exists = true;
			return _this;
		}

		_createClass(BulletGroup, [{
			key: 'update',
			value: function update() {
				this.game.debug.body(this);
			}
		}, {
			key: 'reset',
			value: function reset(x, y) {
				this.bullet.position.x = x;
				this.bullet.position.y = y;

				this.x = x;
				this.y = y;
				this.exists = true;
			}
		}]);

		return BulletGroup;
	})(Phaser.Group);

	exports.default = BulletGroup;

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Keyboard = (function (_Phaser$Key) {
		_inherits(Keyboard, _Phaser$Key);

		function Keyboard(game, keycode) {
			_classCallCheck(this, Keyboard);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Keyboard).call(this, game, keycode));
		}

		return Keyboard;
	})(Phaser.Key);

	exports.default = Keyboard;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _EnemyTest2 = __webpack_require__(22);

	var _EnemyTest3 = _interopRequireDefault(_EnemyTest2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EnemyBlack = (function (_EnemyTest) {
		_inherits(EnemyBlack, _EnemyTest);

		function EnemyBlack(game, x, y) {
			_classCallCheck(this, EnemyBlack);

			// pooling

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EnemyBlack).call(this, game, x, y, 'enemy_black'));

			_this.exists = true;

			_this.game.physics.arcade.enable(_this);

			_this.lives = 1;
			_this.body.velocity.x = -250;
			return _this;
		}

		return EnemyBlack;
	})(_EnemyTest3.default);

	exports.default = EnemyBlack;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EnemyTest = (function (_Phaser$Sprite) {
		_inherits(EnemyTest, _Phaser$Sprite);

		function EnemyTest(game, x, y, key) {
			_classCallCheck(this, EnemyTest);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EnemyTest).call(this, game, x, y, key));

			_this.anchor.setTo(.5, .5);

			// collide
			_this.game.physics.arcade.enable(_this);
			_this.immovable = true;
			_this.allowGravity = false;

			// animation
			_this.animations.add('walk');
			_this.animations.play('walk', 8, true);
			return _this;
		}

		_createClass(EnemyTest, [{
			key: 'update',
			value: function update() {
				this.game.debug.body(this);
				if (this.position.x < -this.width) {
					this.exists = false;
				}
			}
		}, {
			key: 'flipDown',
			value: function flipDown() {
				this.body.y = this.game.height / 2;
				this.scale.y = -1;
			}
		}, {
			key: 'flipUp',
			value: function flipUp() {
				this.body.y = this.game.height / 2 - 60;
				this.scale.y = 1;
			}
		}]);

		return EnemyTest;
	})(Phaser.Sprite);

	exports.default = EnemyTest;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _EnemyTest2 = __webpack_require__(22);

	var _EnemyTest3 = _interopRequireDefault(_EnemyTest2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EnemyWhite = (function (_EnemyTest) {
		_inherits(EnemyWhite, _EnemyTest);

		function EnemyWhite(game, x, y) {
			_classCallCheck(this, EnemyWhite);

			// pooling

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EnemyWhite).call(this, game, x, y, 'enemy_white'));

			_this.exists = true;

			_this.game.physics.arcade.enable(_this);

			_this.position.y = 275;
			_this.scale.y = -1;
			_this.lives = 3;
			_this.body.velocity.x = -250;
			return _this;
		}

		return EnemyWhite;
	})(_EnemyTest3.default);

	exports.default = EnemyWhite;

/***/ }
/******/ ]);
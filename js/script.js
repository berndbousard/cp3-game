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

	var _Menu = __webpack_require__(4);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Play = __webpack_require__(10);

	var _Play2 = _interopRequireDefault(_Play);

	var _Leaderboard = __webpack_require__(21);

	var _Leaderboard2 = _interopRequireDefault(_Leaderboard);

	var _Gameover = __webpack_require__(22);

	var _Gameover2 = _interopRequireDefault(_Gameover);

	var _Info = __webpack_require__(23);

	var _Info2 = _interopRequireDefault(_Info);

	var _Shop = __webpack_require__(24);

	var _Shop2 = _interopRequireDefault(_Shop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var init = function init() {
		var game = new Phaser.Game(750, 500, Phaser.AUTO);
		game.state.add('Preload', _Preload2.default, true);
		game.state.add('Menu', _Menu2.default, false);
		game.state.add('Play', _Play2.default, false);
		game.state.add('Leaderboard', _Leaderboard2.default, false);
		game.state.add('Gameover', _Gameover2.default, false);
		game.state.add('Info', _Info2.default, false);
		game.state.add('Shop', _Shop2.default, false);
	};

	init();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Text = __webpack_require__(2);

	var _Text2 = _interopRequireDefault(_Text);

	var _Utils = __webpack_require__(3);

	var Utils = _interopRequireWildcard(_Utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

				//show percentage
				// game, x, y, font, text, size, align
				this.progressText = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%', { fill: 'white' });
				Utils.center(this.progressText);

				this.game.load.onFileComplete.add(this.onFileComplete, this);
				this.game.load.onLoadComplete.addOnce(this.onLoadComplete, this);

				// load assets
				this.game.load.image('startButton', 'assets/startButton.png');
				this.game.load.image('leaderboardButton', 'assets/leaderboardButton.png');
				this.game.load.image('infoButton', 'assets/instructionsButton.png');
				this.game.load.image('backButton', 'assets/backButton.png');
				this.game.load.image('city', 'assets/city.jpg');
				this.game.load.image('menuBackground', 'assets/menu_background.png');
				this.game.load.image('bullet', 'assets/bullet.png');
				this.game.load.image('player_menu', 'assets/player_menu.png');
				this.game.load.image('shopButton', 'assets/shopButton.png');
				this.game.load.image('bulletButton', 'assets/bulletButton.png');

				this.game.load.bitmapFont('gamefont', 'assets/font/extra/gamefont.png', 'assets/font/extra/gamefont.fnt');

				this.game.load.spritesheet('player_black', 'assets/player_black.png', 42, 44, 14);
				this.game.load.spritesheet('player_white', 'assets/player_white.png', 42, 44, 14);
				this.game.load.spritesheet('enemy_black', 'assets/enemy_black.png', 45, 45, 6);
				this.game.load.spritesheet('enemy_white', 'assets/enemy_white.png', 45, 45, 6);
				this.game.load.spritesheet('enemy_orange', 'assets/enemy_orange.png', 45, 45, 6);
				this.game.load.spritesheet('enemy_red', 'assets/enemy_red.png', 60, 60, 6);
				this.game.load.spritesheet('coin', 'assets/coin.png', 25, 25, 10);
				this.game.load.spritesheet('keysImg', 'assets/keys.png', 100, 47, 5);

				this.game.load.audio('change_side', 'assets/sound/change_side.mp3');
				this.game.load.audio('coin', 'assets/sound/coin.mp3');
				this.game.load.audio('enemy_hit', 'assets/sound/enemy_hit.wav');
				this.game.load.audio('step', 'assets/sound/step.mp3');
				this.game.load.audio('player_hit', 'assets/sound/player_hit.mp3');
				this.game.load.audio('player_shoot', 'assets/sound/shot.mp3');
				this.game.load.audio('click', 'assets/sound/click.mp3');
				this.game.load.audio('bulletPackSound', 'assets/sound/ammoSound.mp3');
				this.game.load.audio('background', 'assets/sound/background2.mp3');
			}
		}, {
			key: 'create',
			value: function create() {}
		}, {
			key: 'update',
			value: function update() {}
		}, {
			key: 'onFileComplete',
			value: function onFileComplete(progress) {
				this.progressText.text = progress + '%';
			}
		}, {
			key: 'onLoadComplete',
			value: function onLoadComplete() {
				Utils.changeState(this.game, 'Menu');
			}
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
/* 3 */
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

	var setScale = exports.setScale = function setScale(el, scale) {
		return el.scale.setTo(scale, scale);
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Button = __webpack_require__(5);

	var _Button2 = _interopRequireDefault(_Button);

	var _BackgroundCity = __webpack_require__(6);

	var _BackgroundCity2 = _interopRequireDefault(_BackgroundCity);

	var _MenuBackground = __webpack_require__(7);

	var _MenuBackground2 = _interopRequireDefault(_MenuBackground);

	var _Sound = __webpack_require__(8);

	var _Sound2 = _interopRequireDefault(_Sound);

	var _Text = __webpack_require__(2);

	var _Text2 = _interopRequireDefault(_Text);

	var _Utils = __webpack_require__(3);

	var Utils = _interopRequireWildcard(_Utils);

	var _Data = __webpack_require__(9);

	var _Data2 = _interopRequireDefault(_Data);

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
				// music
				this.clickSound = new _Sound2.default(this.game, 'click');
			}
		}, {
			key: 'create',
			value: function create() {

				if (!_Data2.default.bullets) {
					_Data2.default.bullets = 0;
				}
				if (!_Data2.default.coins) {
					_Data2.default.coins = 0;
				}

				// Images
				this.city = new _BackgroundCity2.default(this.game, 0, 0, 750, 500, 'city');
				this.game.add.existing(this.city);

				this.menuBackground = new _MenuBackground2.default(this.game, this.game.width / 2, this.game.height / 2);
				this.game.add.existing(this.menuBackground);

				this.playerImg = this.game.add.sprite(this.game.width / 2, this.game.height / 2 - 90, 'player_menu');
				Utils.center(this.playerImg);

				// text
				var title = "CITYFLIP";
				this.titleBox = new _Text2.default(this.game, this.game.width / 2 + 5, this.game.height / 2 - 22, 'gamefont', title, 60);
				Utils.center(this.titleBox);
				this.game.add.existing(this.titleBox);

				if (_Data2.default.coins) {
					console.log(_Data2.default.coins);
					var coinsText = new _Text2.default(this.game, this.game.width / 2, this.game.height / 2 - 150, 'gamefont', _Data2.default.coins + '\ncoins', 20, 'center');
					this.game.add.existing(coinsText);
				}

				// Buttons
				this.startButton = this.game.add.button(this.game.width / 2, this.game.height / 2 + 75, 'startButton', this.startClickHandler, this);
				Utils.center(this.startButton);

				this.leaderboardButton = this.game.add.button(this.game.width / 2 - 100, this.game.height / 2 + 150, 'leaderboardButton', this.leaderboardClickHandler, this);
				Utils.center(this.leaderboardButton);

				this.infoButton = this.game.add.button(this.game.width / 2 + 100, this.game.height / 2 + 150, 'infoButton', this.infoClickHandler, this);
				Utils.center(this.infoButton);

				this.startButton = this.game.add.button(this.game.width / 2, this.game.height / 2 + 150, 'shopButton', this.shopClickHandler, this);
				Utils.center(this.startButton);
			}
		}, {
			key: 'update',
			value: function update() {
				console.log(_Data2.default.coins);
			}
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
		}, {
			key: 'shopClickHandler',
			value: function shopClickHandler() {
				this.clickSound.play();
				Utils.changeState(this.game, 'Shop');
			}
		}]);

		return Menu;
	})(Phaser.State);

	exports.default = Menu;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

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
			key: "startClickHandler",
			value: function startClickHandler() {}
		}]);

		return Button;
	})(Phaser.Button);

	exports.default = Button;

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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Data = function Data(game) {
		_classCallCheck(this, Data);

		game.data = {};
		this.coins;
		this.distance;
		this.bullets;
		this.kills;
	};

	exports.default = Data;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Player = __webpack_require__(11);

	var _Player2 = _interopRequireDefault(_Player);

	var _BackgroundCity = __webpack_require__(6);

	var _BackgroundCity2 = _interopRequireDefault(_BackgroundCity);

	var _Text = __webpack_require__(2);

	var _Text2 = _interopRequireDefault(_Text);

	var _Coin = __webpack_require__(13);

	var _Coin2 = _interopRequireDefault(_Coin);

	var _Sound = __webpack_require__(8);

	var _Sound2 = _interopRequireDefault(_Sound);

	var _BulletGroup = __webpack_require__(14);

	var _BulletGroup2 = _interopRequireDefault(_BulletGroup);

	var _Keyboard = __webpack_require__(15);

	var _Keyboard2 = _interopRequireDefault(_Keyboard);

	var _Utils = __webpack_require__(3);

	var Utils = _interopRequireWildcard(_Utils);

	var _Data = __webpack_require__(9);

	var _Data2 = _interopRequireDefault(_Data);

	var _EnemyBlack = __webpack_require__(16);

	var _EnemyBlack2 = _interopRequireDefault(_EnemyBlack);

	var _EnemyWhite = __webpack_require__(18);

	var _EnemyWhite2 = _interopRequireDefault(_EnemyWhite);

	var _EnemyOrange = __webpack_require__(19);

	var _EnemyOrange2 = _interopRequireDefault(_EnemyOrange);

	var _EnemyRed = __webpack_require__(20);

	var _EnemyRed2 = _interopRequireDefault(_EnemyRed);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
				// we kunnen de preload functie gebruiken als een soort preload voor de sounds
				this.backgroundSound = new _Sound2.default(this.game, 'background');
				this.flipSound = new _Sound2.default(this.game, 'change_side');
				this.coinSound = new _Sound2.default(this.game, 'coin');
				this.enemyHitSound = new _Sound2.default(this.game, 'enemy_hit');
				this.playerHitSound = new _Sound2.default(this.game, 'player_hit');
				this.playerShootSound = new _Sound2.default(this.game, 'player_shoot', 0.5);
			}
		}, {
			key: 'create',
			value: function create() {

				// sound
				this.backgroundSound.play();

				// physics
				this.game.physics.startSystem(Phaser.Physics.ARCADE);

				// controls
				this.cursors = this.game.input.keyboard.createCursorKeys();
				this.spacebar = this.game.input.keyboard.addKey(32);
				this.spacebar.onDown.add(this.spaceBarHandler, this);
				this.side = 'up';

				// Declarations
				if (!_Data2.default.coins) {
					_Data2.default.coins = 0;
				} else {
					_Data2.default.coins = _Data2.default.coins;
				}
				if (!_Data2.default.bullets) {
					_Data2.default.bullets = 5;
				} else {
					_Data2.default.bullets = _Data2.default.bullets;
				}
				_Data2.default.distance = 0;
				_Data2.default.kills = 0;
				this.gameSpeed = .95; //variable die de snelheid van de game bepaalt. hoe groter het getal hoe sneller/moeilijker. Beinvloed momenteel enkel spawnrate van enemy
				this.delay = Phaser.Timer.SECOND * 2;
				this.minimumDistanceBetween = 500;

				//this.bossTimer = 0;
				//this.keepUpWithBoss = []; // array om bij te houden welke bosses er al aangemaakt zijn. Idealiter blijft deze array op 0 of 1 entries.

				// Images
				this.city = new _BackgroundCity2.default(this.game, 0, 0, 750, 500, 'city');
				this.game.add.existing(this.city);

				// Player
				this.player = new _Player2.default(this.game, 50, this.game.height / 2 - 43, this.flipSound);
				this.game.add.existing(this.player);

				// coins
				this.coins = this.game.add.group();
				this.coinTimer = this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.spawnCoin, this);

				// distance score text
				this.distanceTimer = this.game.time.events.loop(Phaser.Timer.SECOND / 1.2, this.increaseDistance, this);
				this.distanceTextBox = new _Text2.default(this.game, this.game.width / 2, 50, 'gamefont', _Data2.default.distance + ' km', 30);
				this.game.add.existing(this.distanceTextBox);

				// coins score text
				this.scoreTextBox = new _Text2.default(this.game, this.game.width / 2 + 300, 50, 'gamefont', _Data2.default.coins + '\ncoins', 20, 'center');
				this.game.add.existing(this.scoreTextBox);

				// bullets score text
				this.bulletTextBox = new _Text2.default(this.game, this.game.width / 2 - 300, 50, 'gamefont', _Data2.default.bullets + '\nbullets', 20, 'center');
				this.game.add.existing(this.bulletTextBox);

				// kills score text
				this.killsTextBox = new _Text2.default(this.game, this.game.width / 2 - 150, 50, 'gamefont', _Data2.default.kills + '\nkills', 20, 'center');
				this.game.add.existing(this.killsTextBox);

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
			}
		}, {
			key: 'update',
			value: function update() {
				var _this2 = this;

				// movement
				this.blackEnemies.forEach(function (enemy) {
					enemy.body.velocity.x = -200;
				});

				this.whiteEnemies.forEach(function (enemy) {
					enemy.body.velocity.x = -200;
				});

				this.orangeEnemies.forEach(function (enemy) {
					enemy.body.velocity.x = -250;
				});

				this.redEnemies.forEach(function (enemy) {
					enemy.body.velocity.x = -50;
				});

				// controls
				if (this.cursors.down.isDown) {
					this.side = 'down';
					this.player.flipDown();
					this.redEnemies.forEach(function (oneEnemy) {
						oneEnemy.flipDown();
					});
				}
				if (this.cursors.up.isDown) {
					this.side = 'up';
					this.player.flipUp();
					this.redEnemies.forEach(function (oneEnemy) {
						oneEnemy.flipUp();
					});
				}

				// collision
				this.coins.forEach(function (oneCoin) {
					_this2.game.physics.arcade.overlap(_this2.player, oneCoin, _this2.coinPlayerCollisionHandler, null, _this2);
				});

				this.allEnemies.forEach(function (oneEnemy) {
					_this2.game.physics.arcade.overlap(_this2.player, oneEnemy, _this2.enemyPlayerCollisionHandler, null, _this2);
					// this.game.physics.arcade.collide(this.player, oneEnemy, this.enemyPlayerCollisionHandler, null, this);
				});

				this.bullets.forEach(function (oneBullet) {
					_this2.allEnemies.forEach(function (oneEnemy) {
						_this2.game.physics.arcade.collide(oneBullet, oneEnemy, _this2.enemyBulletCollisionHandler, null, _this2);
					});
				});
			}
		}, {
			key: 'shutdown',
			value: function shutdown() {
				console.log('end play');
				this.backgroundSound.destroy();
			}
		}, {
			key: 'spawnEnemy',
			value: function spawnEnemy() {
				var color = this.generateRandomColor();
				var enemy = undefined,
				    x = undefined,
				    y = undefined;
				// object pooling werkt, yes
				console.log('black ' + this.blackEnemies.length, 'white ' + this.whiteEnemies.length, 'orange ' + this.orangeEnemies.length, 'red ' + this.redEnemies.length);
				switch (color) {
					case 'black':
						enemy = this.blackEnemies.getFirstExists(false);
						if (!enemy) {
							enemy = new _EnemyBlack2.default(this.game, 0, 0);
							enemy.body.velocity.x = -200;
							this.blackEnemies.add(enemy);
						}
						y = 225;
						break;

					case 'white':
						enemy = this.whiteEnemies.getFirstExists(false);
						if (!enemy) {
							enemy = new _EnemyWhite2.default(this.game, 0, 0);
							enemy.body.velocity.x = -200;
							this.whiteEnemies.add(enemy);
						}
						y = 275;
						break;

					case 'orange':
						enemy = this.orangeEnemies.getFirstExists(false);
						if (!enemy) {
							enemy = new _EnemyOrange2.default(this.game, 0, 0);
							enemy.body.velocity.x = -200;
							this.orangeEnemies.add(enemy);
						}
						if (Math.random() > .5) {
							enemy.scale.y = -1;
							y = 275;
						} else {
							enemy.scale.y = 1;
							y = 225;
						}
						break;

					case 'red':
						enemy = this.redEnemies.getFirstExists(false);
						if (!enemy) {
							enemy = new _EnemyRed2.default(this.game, 0, 0);
							enemy.body.velocity.x = -200;
							this.redEnemies.add(enemy);
						}

						if (this.side == 'down') {
							enemy.scale.y = -1;
							y = 283;
						} else {
							enemy.scale.y = 1;
							y = 217;
						}
						break;
				}
				x = this.randomInRange(750, 800);
				enemy.reset(x, y);
			}
		}, {
			key: 'spawnCoin',
			value: function spawnCoin() {
				var coin = this.coins.getFirstExists(false);
				// positioning
				var x = this.randomInRange(750, 800);
				var y = this.game.height / 2;
				if (!coin) {
					coin = new _Coin2.default(this.game, 0, 0);
				}

				coin.reset(x, y);
				coin.body.velocity.x = -100;
				this.coins.add(coin);
			}

			//collisions

		}, {
			key: 'enemyPlayerCollisionHandler',
			value: function enemyPlayerCollisionHandler(player, enemy) {
				// player.destroy();
				// enemy.destroy();
				player.pendingDestroy = true;
				enemy.pendingDestroy = true;
				this.playerHitSound.play();
				Utils.changeState(this.game, 'Gameover');
			}
		}, {
			key: 'coinPlayerCollisionHandler',
			value: function coinPlayerCollisionHandler(player, coin) {
				coin.exists = false;
				_Data2.default.coins++;
				_Data2.default.bullets += 5;
				this.bulletTextBox.text = _Data2.default.bullets + '\nbullets';
				var suffix = this.createSuffixForScore();
				this.updateScore(suffix);
				this.coinSound.play();
			}
		}, {
			key: 'enemyBulletCollisionHandler',
			value: function enemyBulletCollisionHandler(bullet, enemy) {
				// console.log(enemy.lives);
				// enemy.destroy();
				// bullet.destroy();
				enemy.lives--;
				if (enemy.lives < 1) {
					//enemy.destroy();
					enemy.pendingDestroy = true;
					_Data2.default.kills++;
					this.killsTextBox.text = _Data2.default.kills + '\nkills';
				}

				//bullet.destroy();
				bullet.pendingDestroy = true;
				this.enemyHitSound.play();
			}
		}, {
			key: 'createSuffixForScore',
			value: function createSuffixForScore() {
				if (_Data2.default.coins === 1) {
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
					var x = this.player.x - 10;
					var y = this.player.y - 105;
					bullet.reset(x, y);

					_Data2.default.bullets--;
					this.bulletTextBox.text = _Data2.default.bullets + '\nbullets';

					this.playerShootSound.play();
				}
			}
		}, {
			key: 'updateScore',
			value: function updateScore(suffix) {
				this.scoreTextBox.text = _Data2.default.coins + suffix;
			}
		}, {
			key: 'updateDistance',
			value: function updateDistance() {
				this.distanceTextBox.text = _Data2.default.distance + ' km';
			}
		}, {
			key: 'generateRandomColor',
			value: function generateRandomColor() {
				var colors = ['black', 'orange', 'red', 'white'];
				return colors[Math.round(Math.random() * (colors.length - 1))];
			}
		}, {
			key: 'randomInRange',
			value: function randomInRange(num1, num2) {
				return this.game.rnd.integerInRange(num1, num2);
			}
		}]);

		return Play;
	})(Phaser.State);

	exports.default = Play;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Bullet = __webpack_require__(12);

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
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Bullet = __webpack_require__(12);

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
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Enemy2 = __webpack_require__(17);

	var _Enemy3 = _interopRequireDefault(_Enemy2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EnemyBlack = (function (_Enemy) {
		_inherits(EnemyBlack, _Enemy);

		function EnemyBlack(game, x, y) {
			_classCallCheck(this, EnemyBlack);

			// pooling

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EnemyBlack).call(this, game, x, y, 'enemy_black'));

			_this.exists = true;

			_this.game.physics.arcade.enable(_this);

			_this.lives = 1;
			return _this;
		}

		return EnemyBlack;
	})(_Enemy3.default);

	exports.default = EnemyBlack;

/***/ },
/* 17 */
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

		function Enemy(game, x, y, key) {
			_classCallCheck(this, Enemy);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Enemy).call(this, game, x, y, key));

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
				this.body.y = this.game.height / 2 + 2;
				this.scale.y = -1;
			}
		}, {
			key: 'flipUp',
			value: function flipUp() {
				this.body.y = this.game.height / 2 - 62;
				this.scale.y = 1;
			}
		}]);

		return Enemy;
	})(Phaser.Sprite);

	exports.default = Enemy;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Enemy2 = __webpack_require__(17);

	var _Enemy3 = _interopRequireDefault(_Enemy2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EnemyWhite = (function (_Enemy) {
		_inherits(EnemyWhite, _Enemy);

		function EnemyWhite(game, x, y) {
			_classCallCheck(this, EnemyWhite);

			// pooling

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EnemyWhite).call(this, game, x, y, 'enemy_white'));

			_this.exists = true;

			_this.game.physics.arcade.enable(_this);

			_this.scale.y = -1;
			_this.lives = 1;
			return _this;
		}

		return EnemyWhite;
	})(_Enemy3.default);

	exports.default = EnemyWhite;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Enemy2 = __webpack_require__(17);

	var _Enemy3 = _interopRequireDefault(_Enemy2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EnemyOrange = (function (_Enemy) {
		_inherits(EnemyOrange, _Enemy);

		function EnemyOrange(game, x, y) {
			_classCallCheck(this, EnemyOrange);

			// pooling

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EnemyOrange).call(this, game, x, y, 'enemy_orange'));

			_this.exists = true;

			_this.game.physics.arcade.enable(_this);

			_this.lives = 1;
			return _this;
		}

		return EnemyOrange;
	})(_Enemy3.default);

	exports.default = EnemyOrange;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Enemy2 = __webpack_require__(17);

	var _Enemy3 = _interopRequireDefault(_Enemy2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EnemyRed = (function (_Enemy) {
		_inherits(EnemyRed, _Enemy);

		function EnemyRed(game, x, y) {
			_classCallCheck(this, EnemyRed);

			// pooling

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EnemyRed).call(this, game, x, y, 'enemy_red'));

			_this.exists = true;

			_this.game.physics.arcade.enable(_this);

			_this.lives = 2;
			return _this;
		}

		return EnemyRed;
	})(_Enemy3.default);

	exports.default = EnemyRed;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _BackgroundCity = __webpack_require__(6);

	var _BackgroundCity2 = _interopRequireDefault(_BackgroundCity);

	var _MenuBackground = __webpack_require__(7);

	var _MenuBackground2 = _interopRequireDefault(_MenuBackground);

	var _Text = __webpack_require__(2);

	var _Text2 = _interopRequireDefault(_Text);

	var _Sound = __webpack_require__(8);

	var _Sound2 = _interopRequireDefault(_Sound);

	var _Utils = __webpack_require__(3);

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
				// music
				this.clickSound = new _Sound2.default(this.game, 'click');
			}
		}, {
			key: 'create',
			value: function create() {

				// Build table with results
				this.getJSON('http://student.howest.be/bernd.bousard/20152016/CPIII/CITYFLIP/index.php?page=getScores&t=' + Date.now());

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

				topRowThForScore.innerText = "Coins";
				topRowThForName.innerText = "Name";
				topRowThForDistance.innerText = "Distance";

				topRowThForScore.classList.add('score');

				topRowTr.appendChild(topRowThForDistance);
				topRowTr.appendChild(topRowThForName);
				topRowTr.appendChild(topRowThForScore);

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

					tr.appendChild(distanceHTML);
					tr.appendChild(nameHTML);
					tr.appendChild(scoreHTML);

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
					_this2.giveError(error);
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
		}, {
			key: 'giveError',
			value: function giveError(error) {
				// game, x, y, font, text, size, align
				var text = 'We vermoeden dat je\ngeen internet hebt\nOm topscores te laden hebben\nwe jammergenoeg internet nodig';
				var errorText = new _Text2.default(this.game, this.game.width / 2, this.game.height / 2, 'gamefont', text, 15, 'center');
				this.game.add.existing(errorText);
			}
		}]);

		return Leaderboard;
	})(Phaser.State);

	exports.default = Leaderboard;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _BackgroundCity = __webpack_require__(6);

	var _BackgroundCity2 = _interopRequireDefault(_BackgroundCity);

	var _MenuBackground = __webpack_require__(7);

	var _MenuBackground2 = _interopRequireDefault(_MenuBackground);

	var _Sound = __webpack_require__(8);

	var _Sound2 = _interopRequireDefault(_Sound);

	var _Text = __webpack_require__(2);

	var _Text2 = _interopRequireDefault(_Text);

	var _Utils = __webpack_require__(3);

	var Utils = _interopRequireWildcard(_Utils);

	var _Data = __webpack_require__(9);

	var _Data2 = _interopRequireDefault(_Data);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var confirm = undefined;
	var form = undefined;
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

				this.backButton = this.game.add.button(this.game.width / 2 - 75, this.game.height / 2 + 150, 'backButton', this.backClickHandler, this);
				Utils.center(this.backButton);

				// score and distance
				this.visibleScore = new _Text2.default(this.game, this.game.width / 2 - 50, 200, 'gamefont', 'Your score\n' + _Data2.default.coins, 20, 'center');
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

				form = document.createElement('form');
				form.setAttribute('method', 'POST');
				form.setAttribute('action', 'http://student.howest.be/bernd.bousard/20152016/CPIII/CITYFLIP/index.php?page=postScores');
				form.id = 'form';

				var formNameInput = document.createElement('input');
				formNameInput.setAttribute('type', 'text');
				formNameInput.setAttribute('name', 'name');
				formNameInput.setAttribute('placeholder', 'username');
				formNameInput.setAttribute('maxlength', '10');
				formNameInput.id = 'text';

				var formScoreInput = document.createElement('input');
				formScoreInput.setAttribute('type', 'text');
				formScoreInput.setAttribute('name', 'score');
				formScoreInput.setAttribute('value', _Data2.default.coins);
				formScoreInput.id = 'scoreInput';
				formScoreInput.classList.add('hide');

				var formDistanceInput = document.createElement('input');
				formDistanceInput.setAttribute('type', 'text');
				formDistanceInput.setAttribute('name', 'distance');
				formDistanceInput.setAttribute('value', _Data2.default.distance);
				formDistanceInput.id = 'distanceInput';
				formDistanceInput.classList.add('hide');

				var formSubmit = document.createElement('input');
				formSubmit.setAttribute('type', 'submit');
				formSubmit.setAttribute('name', 'action');
				formSubmit.setAttribute('value', 'post-score');
				formSubmit.id = 'submit';

				form.appendChild(formNameInput);
				form.appendChild(formScoreInput);
				form.appendChild(formDistanceInput);
				form.appendChild(formSubmit);

				document.querySelector('body').appendChild(form);
				Utils.showElement(form);
			}
		}, {
			key: 'submitInputHandler',
			value: function submitInputHandler(name) {
				var _this3 = this;

				this.clickSound.play();
				var req = new XMLHttpRequest();
				// req.responseType = 'json';
				req.addEventListener('load', function () {
					if (req.status === 200) {
						Utils.hideElement(form);
						Utils.changeState(_this3.game, 'Leaderboard');
					} else {
						alert('ja, lap al kapot, theeft lang geduurd');
					}
				});
				var url = form.getAttribute('action') + '&t=' + Date.now();
				req.open('post', url, true);
				req.setRequestHeader('X_REQUESTED_WITH', 'xmlhttprequest');
				req.send(new FormData(form));
				// Het lijkt dat hij 2x pusht naar de DDB maar als ik een event listener eraan
				// Koppen dan zien we het maar 1 keer maar zit wel 2x id DDB
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
				Utils.hideElement(form);
				Utils.changeState(this.game, 'Play');
			}
		}, {
			key: 'backClickHandler',
			value: function backClickHandler() {
				this.clickSound.play();
				Utils.changeState(this.game, 'Menu');
			}
		}]);

		return Gameover;
	})(Phaser.State);

	exports.default = Gameover;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Text = __webpack_require__(2);

	var _Text2 = _interopRequireDefault(_Text);

	var _Sound = __webpack_require__(8);

	var _Sound2 = _interopRequireDefault(_Sound);

	var _Utils = __webpack_require__(3);

	var Utils = _interopRequireWildcard(_Utils);

	var _KeysImage = __webpack_require__(25);

	var _KeysImage2 = _interopRequireDefault(_KeysImage);

	var _Player = __webpack_require__(11);

	var _Player2 = _interopRequireDefault(_Player);

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

				this.keysImg = new _KeysImage2.default(this.game, this.game.width / 2 + 225, this.game.height / 2 + 50);
				Utils.center(this.keysImg);
				this.game.add.existing(this.keysImg);
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _BackgroundCity = __webpack_require__(6);

	var _BackgroundCity2 = _interopRequireDefault(_BackgroundCity);

	var _MenuBackground = __webpack_require__(7);

	var _MenuBackground2 = _interopRequireDefault(_MenuBackground);

	var _Text = __webpack_require__(2);

	var _Text2 = _interopRequireDefault(_Text);

	var _Coin = __webpack_require__(13);

	var _Coin2 = _interopRequireDefault(_Coin);

	var _Utils = __webpack_require__(3);

	var Utils = _interopRequireWildcard(_Utils);

	var _Sound = __webpack_require__(8);

	var _Sound2 = _interopRequireDefault(_Sound);

	var _Data = __webpack_require__(9);

	var _Data2 = _interopRequireDefault(_Data);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var errorInfo = undefined;

	var Shop = (function (_Phaser$State) {
		_inherits(Shop, _Phaser$State);

		function Shop() {
			_classCallCheck(this, Shop);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Shop).apply(this, arguments));
		}

		_createClass(Shop, [{
			key: 'preload',
			value: function preload() {
				console.log("start shop");
				// music
				// game, key, volume, loop
				this.clickSound = new _Sound2.default(this.game, 'click');
				this.bulletPackSound = new _Sound2.default(this.game, 'bulletPackSound');
			}
		}, {
			key: 'create',
			value: function create() {
				// Als de gebruiker zonder te spelen naar de shop gaat
				if (!_Data2.default.bullets) {
					_Data2.default.bullets = 0;
				}
				if (!_Data2.default.coins) {
					_Data2.default.coins = 0;
				}

				// Images
				this.city = new _BackgroundCity2.default(this.game, 0, 0, 750, 500, 'city');
				this.game.add.existing(this.city);

				this.menuBackground = new _MenuBackground2.default(this.game, this.game.width / 2, this.game.height / 2);
				this.game.add.existing(this.menuBackground);

				// text
				// game, x, y, font, text, size, align
				this.bulletText = new _Text2.default(this.game, this.game.width / 2 + 85, this.game.height / 2 - 50, 'gamefont', _Data2.default.bullets + '\nbullets', 20, 'center');
				this.game.add.existing(this.bulletText);

				this.coinText = new _Text2.default(this.game, this.game.width / 2, this.game.height / 2 - 150, 'gamefont', _Data2.default.coins + '\ncoins', 20, 'center');
				this.game.add.existing(this.coinText);

				// Buttons
				this.startButton = this.game.add.button(this.game.width / 2 + 50, this.game.height / 2 + 150, 'startButton', this.startClickHandler, this);
				Utils.center(this.startButton);

				this.backButton = this.game.add.button(this.game.width / 2 - 50, this.game.height / 2 + 150, 'backButton', this.backClickHandler, this);
				Utils.center(this.backButton);

				this.bulletButton = this.game.add.button(this.game.width / 2 - 45, this.game.height / 2 - 50, 'bulletButton', this.bulletButtonClickHandler, this);
				Utils.center(this.bulletButton);
			}
		}, {
			key: 'update',
			value: function update() {}
		}, {
			key: 'bulletButtonClickHandler',
			value: function bulletButtonClickHandler() {
				if (_Data2.default.coins > 0) {
					this.doErrorHandling("no error");
					errorInfo = "";

					this.bulletPackSound.play();
					_Data2.default.bullets += 5;
					_Data2.default.coins--;
					this.bulletText.text = _Data2.default.bullets + '\nbullets';
					// hij flipt nog op de coins, geen idee waarom
					this.coinText.text = _Data2.default.coins + '\ncoins';
				} else {
					this.doErrorHandling("not enough money");
				}
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
		}, {
			key: 'shutdown',
			value: function shutdown() {
				console.log('end preload');
			}
		}, {
			key: 'doErrorHandling',
			value: function doErrorHandling(check) {
				if (check == "no error") {
					errorInfo = "";
				}
				if (check == "not enough money") {
					errorInfo = "not enough money in store";
				}
				this.errorText = new _Text2.default(this.game, this.game.width / 2 + 5, this.game.height / 2 - 10, 'gamefont', errorInfo, 14, 'center');
				this.game.add.existing(this.errorText);
			}
		}]);

		return Shop;
	})(Phaser.State);

	exports.default = Shop;

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var KeysImage = (function (_Phaser$Sprite) {
		_inherits(KeysImage, _Phaser$Sprite);

		function KeysImage(game, x, y) {
			_classCallCheck(this, KeysImage);

			// animation

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(KeysImage).call(this, game, x, y, 'keysImg'));

			_this.animations.add('run');
			_this.animations.play('run', 5, true);
			return _this;
		}

		return KeysImage;
	})(Phaser.Sprite);

	exports.default = KeysImage;

/***/ }
/******/ ]);
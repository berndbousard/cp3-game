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

	'use strict';

	var _Boot = __webpack_require__(1);

	var _Boot2 = _interopRequireDefault(_Boot);

	var _Preload = __webpack_require__(2);

	var _Preload2 = _interopRequireDefault(_Preload);

	var _Menu = __webpack_require__(3);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Play = __webpack_require__(5);

	var _Play2 = _interopRequireDefault(_Play);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var game = undefined;

	var init = function init() {
		game = new Phaser.Game(288, 505, Phaser.AUTO);
		game.state.add('Boot', _Boot2.default, true);
		game.state.add('Preload', _Preload2.default, false);
		game.state.add('Menu', _Menu2.default, false);
		game.state.add('Play', _Play2.default, false);
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

	var Boot = (function (_Phaser$State) {
		_inherits(Boot, _Phaser$State);

		function Boot() {
			_classCallCheck(this, Boot);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Boot).apply(this, arguments));
		}

		_createClass(Boot, [{
			key: 'preload',
			value: function preload() {
				this.game.load.image('preloader', 'assets/preloader.gif');
			}
		}, {
			key: 'create',
			value: function create() {
				this.game.state.start('Preload');
			}
		}, {
			key: 'update',
			value: function update() {}
		}, {
			key: 'shutdown',
			value: function shutdown() {}
		}]);

		return Boot;
	})(Phaser.State);

	exports.default = Boot;

/***/ },
/* 2 */
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
				this.preloader = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'preloader');
				this.preloader.anchor.setTo(.5, .5);

				this.game.load.image('background', 'assets/background.png');
				this.game.load.image('ground', 'assets/ground.png');
				this.game.load.spritesheet('pipes', 'assets/pipes.png', 108 / 2, 320);
				this.game.load.image('startButton', 'assets/start-button.png');
				this.game.load.image('title', 'assets/title.png');

				this.game.load.spritesheet('bird', 'assets/bird.png', 34, 24);

				this.game.load.bitmapFont('flappyfont', 'assets/fonts/flappyfont/flappyfont.png', 'assets/fonts/flappyfont/flappyfont.fnt');

				this.game.load.audio('score', 'assets/score.wav');
				this.game.load.audio('flap', 'assets/flap.wav');
				this.game.load.audio('pipeHit', 'assets/pipe-hit.wav');
				this.game.load.audio('groundHit', 'assets/ground-hit.wav');

				this.load.image('scoreboard', 'assets/scoreboard.png');
				this.load.image('gameover', 'assets/gameover.png');
				this.load.spritesheet('medals', 'assets/medals.png', 44, 46, 2);
				this.load.image('particle', 'assets/particle.png');
			}
		}, {
			key: 'create',
			value: function create() {
				this.game.state.start('Play');
			}
		}, {
			key: 'update',
			value: function update() {}
		}, {
			key: 'shutdown',
			value: function shutdown() {
				this.preloader.kill();
			}
		}]);

		return Preload;
	})(Phaser.State);

	exports.default = Preload;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Title = __webpack_require__(4);

	var _Title2 = _interopRequireDefault(_Title);

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
			value: function preload() {}
		}, {
			key: 'create',
			value: function create() {
				// static stuff
				this.background = this.game.add.sprite(0, 0, 'background');
				this.ground = this.game.add.tileSprite(0, 400, 335, 112, 'ground');
				this.ground.autoScroll(-200, 0);

				this.title = new _Title2.default(this.game);
				this.game.add.existing(this.title);

				// button
				this.button = this.game.add.button(this.game.width / 2, 300, 'startButton', this.startButtonClickHandler, this);
				this.button.anchor.setTo(.5, .5);
			}
		}, {
			key: 'update',
			value: function update() {}
		}, {
			key: 'shutdown',
			value: function shutdown() {
				this.background.kill();
				this.title.destroy();
				this.ground.kill();
				this.button.kill();
			}
		}, {
			key: 'startButtonClickHandler',
			value: function startButtonClickHandler() {
				this.game.state.start('Play');
			}
		}]);

		return Menu;
	})(Phaser.State);

	exports.default = Menu;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Title = (function (_Phaser$Group) {
		_inherits(Title, _Phaser$Group);

		function Title(game) {
			_classCallCheck(this, Title);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Title).call(this, game));

			_this.titleText = _this.game.add.sprite(0, 0, 'title');
			_this.add(_this.titleText);

			_this.bird = _this.game.add.sprite(200, 5, 'bird');
			_this.bird.animations.add('flap');
			_this.bird.animations.play('flap', 12, true);
			_this.add(_this.bird);

			_this.x = _this.game.width / 2 - _this.width / 2;
			_this.y = _this.game.height / 2 - _this.height / 2 - 100;

			_this.game.add.tween(_this).to({ y: 115 }, 500, Phaser.Easing.Linear.None, true, 0, -1, true);
			return _this;
		}

		return Title;
	})(Phaser.Group);

	exports.default = Title;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Bird = __webpack_require__(6);

	var _Bird2 = _interopRequireDefault(_Bird);

	var _Ground = __webpack_require__(7);

	var _Ground2 = _interopRequireDefault(_Ground);

	var _PipeGroup = __webpack_require__(8);

	var _PipeGroup2 = _interopRequireDefault(_PipeGroup);

	var _ScoreBoard = __webpack_require__(10);

	var _ScoreBoard2 = _interopRequireDefault(_ScoreBoard);

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
			value: function preload() {}
		}, {
			key: 'create',
			value: function create() {
				// sounds
				this.scoreSound = this.game.add.audio('score');
				this.flapSound = this.game.add.audio('flap');
				this.pipeHitSound = this.game.add.audio('pipeHit');
				this.groudHitSound = this.game.add.audio('groundHit');

				// vars
				this.score = 0;

				// physics
				this.game.physics.startSystem(Phaser.Physics.ARCADE);
				this.game.physics.arcade.gravity.y = 500;

				// static stuff
				this.background = this.game.add.sprite(0, 0, 'background');

				// ground
				this.ground = new _Ground2.default(this.game, 0, 400, 335, 112);
				this.game.add.existing(this.ground);

				// bird
				this.bird = new _Bird2.default(this.game, this.game.width / 2, this.game.height / 2, this.flapSound);
				this.game.add.existing(this.bird);

				// input
				this.game.input.onDown.add(this.bird.flap, this.bird);

				// pipes
				this.pipes = this.game.add.group();
				this.game.time.events.loop(Phaser.Timer.SECOND * 1.25, this.generatePipes, this);

				// score
				this.scoreText = this.game.add.bitmapText(this.game.width / 2, 10, 'flappyfont', this.score.toString(), 40);
			}
		}, {
			key: 'update',
			value: function update() {
				var _this2 = this;

				this.game.physics.arcade.collide(this.bird, this.ground, this.pipeHitHandler, null, this);
				this.pipes.forEach(function (pipe) {
					_this2.checkScore(pipe);
					_this2.game.physics.arcade.collide(_this2.bird, pipe, _this2.pipeHitHandler, null, _this2);
				});
			}
		}, {
			key: 'shutdown',
			value: function shutdown() {
				this.scoreText.destroy();
				this.score = null;
				this.pipes.destroy();
				this.bird.kill();
			}
		}, {
			key: 'generatePipes',
			value: function generatePipes() {
				var pipes = this.pipes.getFirstExists(false);
				if (!pipes) {
					// console.log('nieuwe pipe gemaakt');
					pipes = new _PipeGroup2.default(this.game, this.pipes);
				}
				var x = this.game.width + pipes.width / 2;
				var y = this.game.rnd.integerInRange(-100, 100);
				pipes.reset(x, y);

				// console.log(`er zijn ${this.pipes.length} pipes`);
			}
		}, {
			key: 'checkScore',
			value: function checkScore(pipe) {
				if (pipe.topPipe.world.x < this.bird.world.x && pipe.exists && !pipe.hasScored) {
					pipe.hasScored = true;
					this.score++;
					this.scoreText.setText(this.score);
					this.scoreSound.play();
				}
			}
		}, {
			key: 'pipeHitHandler',
			value: function pipeHitHandler() {
				this.deadHandler();
			}
		}, {
			key: 'groundHitHandler',
			value: function groundHitHandler() {
				this.deadHandler();
			}
		}, {
			key: 'deadHandler',
			value: function deadHandler() {
				console.log('dood');
				this.scoreBoard = new _ScoreBoard2.default(this.game);
				this.game.add.existing(this.scoreBoard);
				this.scoreBoard.show(this.score);
			}
		}]);

		return Play;
	})(Phaser.State);

	exports.default = Play;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Bird = (function (_Phaser$Sprite) {
		_inherits(Bird, _Phaser$Sprite);

		function Bird(game, x, y, sound) {
			_classCallCheck(this, Bird);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Bird).call(this, game, x, y, 'bird'));

			_this.sound = sound;

			_this.game.physics.arcade.enableBody(_this);
			_this.anchor.setTo(.5, .5);

			_this.animations.add('flap');
			_this.animations.play('flap', 30, true);
			return _this;
		}

		_createClass(Bird, [{
			key: 'update',
			value: function update() {
				if (this.angle < 90) {
					this.angle += 2.5;
				}
			}
		}, {
			key: 'flap',
			value: function flap() {
				this.game.add.tween(this).to({ angle: -40 }, 100).start();
				this.body.velocity.y -= 200;
				this.sound.play();
			}
		}]);

		return Bird;
	})(Phaser.Sprite);

	exports.default = Bird;

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

	var Ground = (function (_Phaser$TileSprite) {
		_inherits(Ground, _Phaser$TileSprite);

		function Ground(game, x, y, width, height, frame) {
			_classCallCheck(this, Ground);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Ground).call(this, game, x, y, width, height, 'ground', frame));

			_this.game.physics.arcade.enableBody(_this);
			_this.autoScroll(-200, 0);
			_this.body.allowGravity = false;
			_this.body.immovable = true;
			return _this;
		}

		return Ground;
	})(Phaser.TileSprite);

	exports.default = Ground;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Pipe = __webpack_require__(9);

	var _Pipe2 = _interopRequireDefault(_Pipe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PipeGroup = (function (_Phaser$Group) {
		_inherits(PipeGroup, _Phaser$Group);

		function PipeGroup(game, parent) {
			_classCallCheck(this, PipeGroup);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PipeGroup).call(this, game, parent));

			_this.topPipe = new _Pipe2.default(_this.game, 0, 0, 0);
			_this.add(_this.topPipe);

			_this.bottomPipe = new _Pipe2.default(_this.game, 0, 440, 1);
			_this.add(_this.bottomPipe);

			_this.setAll('body.velocity.x', -200);

			_this.exists = true;
			_this.hasScored = false;
			return _this;
		}

		_createClass(PipeGroup, [{
			key: 'update',
			value: function update() {
				if (!this.topPipe.inWorld) {
					this.exists = false;
				}
			}
		}, {
			key: 'reset',
			value: function reset(x, y) {
				this.topPipe.reset(0, 0);
				this.bottomPipe.reset(0, 440);

				this.setAll('body.velocity.x', -200);

				this.x = x;
				this.y = y;

				this.exists = true;
				this.hasScored = false;
			}
		}]);

		return PipeGroup;
	})(Phaser.Group);

	exports.default = PipeGroup;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Pipe = (function (_Phaser$Sprite) {
		_inherits(Pipe, _Phaser$Sprite);

		function Pipe(game, x, y, frame) {
			_classCallCheck(this, Pipe);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Pipe).call(this, game, x, y, 'pipes', frame));

			_this.game.physics.arcade.enableBody(_this);
			_this.anchor.setTo(.5, .5);
			_this.body.immovable = true;
			_this.body.allowGravity = false;
			return _this;
		}

		return Pipe;
	})(Phaser.Sprite);

	exports.default = Pipe;

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

	var ScoreBoard = (function (_Phaser$Group) {
		_inherits(ScoreBoard, _Phaser$Group);

		function ScoreBoard(game, parent) {
			_classCallCheck(this, ScoreBoard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ScoreBoard).call(this, game, parent));

			_this.gameover = _this.game.add.sprite(0, 0, 'gameover');
			_this.gameover.anchor.setTo(.5, .5);
			_this.add(_this.gameover);

			_this.scoreBoard = _this.game.add.sprite(0, 100, 'scoreboard');
			_this.scoreBoard.anchor.setTo(.5, .5);
			_this.add(_this.scoreBoard);

			_this.scoreText = _this.game.add.bitmapText(0, 120, 'flappyfont', '0', 30);
			_this.scoreText.anchor.setTo(.5, .5);
			_this.add(_this.scoreText);

			_this.x = _this.game.width / 2;
			_this.y = 100;
			return _this;
		}

		_createClass(ScoreBoard, [{
			key: 'show',
			value: function show(score) {
				// this.scoreText.setText(score.toString());
				this.scoreText.text = score.toString();
			}
		}]);

		return ScoreBoard;
	})(Phaser.Group);

	exports.default = ScoreBoard;

/***/ }
/******/ ]);
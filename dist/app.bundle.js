module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _main = __webpack_require__(/*! ./config/main */ \"./config/main.js\");\n\nvar _main2 = _interopRequireDefault(_main);\n\nvar _passport3 = __webpack_require__(/*! ./config/passport */ \"./config/passport.js\");\n\nvar _passport4 = _interopRequireDefault(_passport3);\n\nvar _auth = __webpack_require__(/*! ./routes/auth */ \"./routes/auth.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _ideas = __webpack_require__(/*! ./routes/ideas */ \"./routes/ideas.js\");\n\nvar _ideas2 = _interopRequireDefault(_ideas);\n\nvar _users = __webpack_require__(/*! ./routes/users */ \"./routes/users.js\");\n\nvar _users2 = _interopRequireDefault(_users);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _expressSession = __webpack_require__(/*! express-session */ \"express-session\");\n\nvar _expressSession2 = _interopRequireDefault(_expressSession);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _expressHandlebars = __webpack_require__(/*! express-handlebars */ \"express-handlebars\");\n\nvar _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar databaseUrl = _main2.default.databaseUrl,\n    port = _main2.default.port;\n\n\nvar app = (0, _express2.default)();\n\napp.listen(port, function () {\n    console.log('listening on ' + port);\n});\n\napp.get('/', function (req, res) {\n    res.send('index');\n});\n\n// passport\n\n(0, _passport4.default)(_passport2.default);\n\n// load routes\n\n// use routes\napp.use('/auth', _auth2.default);\napp.use('/ideas', _ideas2.default);\napp.use('/users', _users2.default);\n\n//! remove later\n\n\napp.use((0, _cookieParser2.default)());\n// session middleware\napp.use((0, _expressSession2.default)({\n    secret: 'secret',\n    resave: false,\n    saveUninitialized: false\n}));\n\napp.use(_passport2.default.initialize());\napp.use(_passport2.default.session());\n\napp.use(function (req, res, next) {\n    res.locals.user = req.user || null;\n    next();\n});\n\n// connect to mongoose\n_mongoose2.default.connect(databaseUrl).then(function () {\n    return console.log('MongoDB Connected');\n}).catch(function (err) {\n    return console.log(err);\n});\n\n// setup middleware for handlebars\napp.engine('handlebars', (0, _expressHandlebars2.default)({ defaultLayout: 'main' }));\napp.set('view engine', 'handlebars');\n\n//setup middleware for parser\napp.use(_bodyParser2.default.urlencoded({ extended: false }));\napp.use(_bodyParser2.default.json());\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./config/main.js":
/*!************************!*\
  !*** ./config/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    databaseUrl: 'mongodb://ierso:6035cp!@ds211440.mlab.com:11440/cocktails-db',\n    port: process.env.PORT || 5000,\n    googleClientID: '21187341593-lc5go41k600chrj3rkm57hqjumjbao3j.apps.googleusercontent.com',\n    googleClientSecret: '7yOiDOH1Ah8XUztgkUahE7md'\n};\n\n//# sourceURL=webpack:///./config/main.js?");

/***/ }),

/***/ "./config/passport.js":
/*!****************************!*\
  !*** ./config/passport.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (passport) {\n    passport.use(new GoogleStrategy({\n        clientID: googleClientID,\n        clientSecret: googleClientSecret,\n        callbackURL: '/auth/google/callback',\n        proxy: true\n    }, function (accessToken, refreshToken, profile, done) {\n        console.log(accessToken);\n        console.log(profile);\n    }));\n};\n\nvar _passportGoogleOauth = __webpack_require__(/*! passport-google-oauth20 */ \"passport-google-oauth20\");\n\nvar _passportGoogleOauth2 = _interopRequireDefault(_passportGoogleOauth);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _main = __webpack_require__(/*! ./main */ \"./config/main.js\");\n\nvar _main2 = _interopRequireDefault(_main);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar googleClientID = _main2.default.googleClientID,\n    googleClientSecret = _main2.default.googleClientSecret;\n\nvar GoogleStrategy = _passportGoogleOauth2.default.Strategy;\n\n//# sourceURL=webpack:///./config/passport.js?");

/***/ }),

/***/ "./models/idea.js":
/*!************************!*\
  !*** ./models/idea.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//create schema\nvar IdeaSchema = new _mongoose.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    details: {\n        type: String,\n        required: true\n    },\n    date: {\n        type: Date,\n        default: Date.now\n    },\n    _user: {\n        type: _mongoose.Schema.Types.ObjectId,\n        ref: 'users'\n    }\n});\n\nexports.default = _mongoose2.default.model('ideas', IdeaSchema);\n\n//# sourceURL=webpack:///./models/idea.js?");

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//create schema\nvar UserSchema = new _mongoose.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    date: {\n        type: Date,\n        default: Date.now\n    }\n});\n\nexports.default = _mongoose2.default.model('users', UserSchema);\n\n//# sourceURL=webpack:///./models/user.js?");

/***/ }),

/***/ "./routes/auth.js":
/*!************************!*\
  !*** ./routes/auth.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.get('/google', _passport2.default.authenticate('google', { scope: ['profile', 'email'] }));\n\nrouter.get('/google/callback', _passport2.default.authenticate('google', { failureRedirect: '/login' }), function (req, res) {\n    // Successful authentication, redirect home.\n    res.redirect('/');\n});\n\nexports.default = router;\n\n//# sourceURL=webpack:///./routes/auth.js?");

/***/ }),

/***/ "./routes/ideas.js":
/*!*************************!*\
  !*** ./routes/ideas.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _idea = __webpack_require__(/*! ../models/idea */ \"./models/idea.js\");\n\nvar _idea2 = _interopRequireDefault(_idea);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\n// load idea model\n\n\n// idea index\nrouter.get('/', function (req, res) {\n    //grab all of the objects in db\n\n    _idea2.default.find({}).sort({ date: 'desc' }).then(function (ideas) {\n        res.render('ideas/index', {\n            ideas: ideas\n        });\n    });\n\n    // send json \n    // Idea.find({})\n    //     .sort({date: 'desc'})\n    //     .then(ideas => {\n    //         res.send(ideas)\n    //     })\n});\n\nrouter.get('/add', function (req, res) {\n    res.render('ideas/add');\n});\n\n// delete \nrouter.delete('/:id', function (req, res) {\n    _idea2.default.remove({ _id: req.params.id }).then(function () {\n        res.redirect('/');\n    });\n});\n\n// process form \nrouter.post('/', function (req, res) {\n    var errors = [];\n    if (!req.body.title) {\n        errors.push({ text: 'Please add a title' });\n    }\n    if (!req.body.details) {\n        errors.push({ text: 'Please add a title' });\n    }\n    if (errors.length > 0) {\n        res.render('ideas/add', {\n            errors: errors,\n            title: req.body.title,\n            details: req.body.details\n        });\n    } else {\n        console.log(req.user);\n        var newIdea = {\n            title: req.body.title,\n            details: req.body.details\n        };\n        new _idea2.default(newIdea).save().then(function (idea) {\n            res.redirect('/ideas');\n        });\n    }\n});\n\nexports.default = router;\n\n//# sourceURL=webpack:///./routes/ideas.js?");

/***/ }),

/***/ "./routes/users.js":
/*!*************************!*\
  !*** ./routes/users.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bcryptjs = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nvar _bcryptjs2 = _interopRequireDefault(_bcryptjs);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _user = __webpack_require__(/*! ../models/user */ \"./models/user.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\n// user login route\nrouter.get('/login', function (req, res) {\n    res.render('users/login');\n});\n\n// user login POST\nrouter.post('/login', _passport2.default.authenticate('local'), function (req, res) {\n    res.redirect('/ideas');\n});\n\n// user register\nrouter.get('/register', function (req, res) {\n    res.render('users/register');\n});\n\n// register form POST\nrouter.post('/register', function (req, res) {\n    var errors = [];\n\n    if (req.body.password.length < 4) {\n        errors.push({ text: 'Password must be at least 4 characters' });\n    }\n\n    if (errors.length > 0) {\n        res.render('users/register', {\n            errors: errors,\n            name: req.body.name,\n            email: req.body.email,\n            password: req.body.password\n        });\n    } else {\n        _user2.default.findOne({ email: req.body.email }).then(function (user) {\n            if (user) {\n                res.send({ text: 'Email already exists' });\n                errors.push({ text: 'Email already exists' });\n            } else {\n                var newUser = new _user2.default({\n                    name: req.body.name,\n                    email: req.body.email,\n                    password: req.body.password\n                });\n                _bcryptjs2.default.genSalt(10, function (err, salt) {\n                    _bcryptjs2.default.hash(newUser.password, salt, function (err, hash) {\n                        if (err) throw err;\n                        newUser.password = hash;\n                        newUser.save().then(function (user) {\n                            res.redirect('/users/login');\n                        }).catch(function (err) {\n                            console.log(err);\n                            return;\n                        });\n                    });\n                });\n            }\n        });\n    }\n});\n\n//log out\nrouter.get('/logout', function (req, res) {\n    req.logout();\n    res.send({\n        text: 'You have logged out'\n    });\n});\n\nexports.default = router;\n\n//# sourceURL=webpack:///./routes/users.js?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-handlebars":
/*!*************************************!*\
  !*** external "express-handlebars" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-handlebars\");\n\n//# sourceURL=webpack:///external_%22express-handlebars%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-google-oauth20\");\n\n//# sourceURL=webpack:///external_%22passport-google-oauth20%22?");

/***/ })

/******/ });
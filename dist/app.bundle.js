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
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _expressSession = __webpack_require__(/*! express-session */ \"express-session\");\n\nvar _expressSession2 = _interopRequireDefault(_expressSession);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _main = __webpack_require__(/*! ./config/main */ \"./config/main.js\");\n\nvar _main2 = _interopRequireDefault(_main);\n\nvar _auth = __webpack_require__(/*! ./routes/auth */ \"./routes/auth.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _cocktails = __webpack_require__(/*! ./routes/cocktails */ \"./routes/cocktails.js\");\n\nvar _cocktails2 = _interopRequireDefault(_cocktails);\n\nvar _passport3 = __webpack_require__(/*! ./config/passport */ \"./config/passport.js\");\n\nvar _passport4 = _interopRequireDefault(_passport3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar databaseUrl = _main2.default.databaseUrl,\n    port = _main2.default.port;\n\n\nvar app = (0, _express2.default)();\napp.use(_bodyParser2.default.urlencoded({ extended: false }));\napp.use(_bodyParser2.default.json());\n\napp.use((0, _cookieParser2.default)());\napp.use((0, _expressSession2.default)({\n    secret: 'secret',\n    resave: false,\n    saveUninitialized: false\n}));\n\napp.use(_passport2.default.initialize());\napp.use(_passport2.default.session());\n\napp.use(function (req, res, next) {\n    res.locals.user = req.user || null;\n    next();\n});\n\n_mongoose2.default.connect(databaseUrl).then(function () {\n    return console.log('mongoDb connected');\n}).catch(function (err) {\n    return console.log(err);\n});\n\n_mongoose2.default.Promise = global.Promise;\n\n// passport\n\n(0, _passport4.default)(_passport2.default);\n\n// use routes\napp.use('/auth', _auth2.default);\napp.use('/cocktails', _cocktails2.default);\n\nif (false) { var path; }\n\napp.listen(port);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./config/main.js":
/*!************************!*\
  !*** ./config/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar config = {\n    port: process.env.PORT || 5000,\n    databaseUrl: 'mongodb://ierso:6035cp!@ds211440.mlab.com:11440/cocktails-db',\n    googleClientID: '21187341593-lc5go41k600chrj3rkm57hqjumjbao3j.apps.googleusercontent.com',\n    googleClientSecret: '7yOiDOH1Ah8XUztgkUahE7md'\n};\n\nexports.default = config;\n\n//# sourceURL=webpack:///./config/main.js?");

/***/ }),

/***/ "./config/passport.js":
/*!****************************!*\
  !*** ./config/passport.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (passport) {\n    passport.use(new GoogleStrategy({\n        clientID: googleClientID,\n        clientSecret: googleClientSecret,\n        callbackURL: '/auth/google/callback',\n        proxy: true\n    }, function (accessToken, refreshToken, profile, done) {\n        var newUser = {\n            googleID: profile.id,\n            firstName: profile.name.givenName,\n            lastName: profile.name.familyName,\n            email: profile.emails[0].value\n        };\n        _user2.default.findOne({\n            googleID: profile.id\n        }).then(function (user) {\n            if (user) {\n                done(null, user);\n            } else {\n                new _user2.default(newUser).save().then(function (user) {\n                    return done(null, user);\n                });\n            }\n        });\n    }));\n    passport.serializeUser(function (user, done) {\n        done(null, user.id);\n    });\n    passport.deserializeUser(function (id, done) {\n        _user2.default.findById(id).then(function (user) {\n            return done(null, user);\n        });\n    });\n};\n\nvar _passportGoogleOauth = __webpack_require__(/*! passport-google-oauth20 */ \"passport-google-oauth20\");\n\nvar _passportGoogleOauth2 = _interopRequireDefault(_passportGoogleOauth);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _main = __webpack_require__(/*! ./main */ \"./config/main.js\");\n\nvar _main2 = _interopRequireDefault(_main);\n\nvar _user = __webpack_require__(/*! ../models/user */ \"./models/user.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar googleClientID = _main2.default.googleClientID,\n    googleClientSecret = _main2.default.googleClientSecret;\n\nvar GoogleStrategy = _passportGoogleOauth2.default.Strategy;\n\n//# sourceURL=webpack:///./config/passport.js?");

/***/ }),

/***/ "./helpers/requireLogin.js":
/*!*********************************!*\
  !*** ./helpers/requireLogin.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (req, res, next) {\n    if (!req.user) {\n        return res.status(401).send({ error: \"You must log in\" });\n    }\n    next();\n};\n\n//# sourceURL=webpack:///./helpers/requireLogin.js?");

/***/ }),

/***/ "./models/cocktail.js":
/*!****************************!*\
  !*** ./models/cocktail.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//create schema\nvar CocktailSchema = new _mongoose.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    drinkID: {\n        type: Number,\n        required: true\n    },\n    rating: {\n        type: Number,\n        required: true\n    },\n    date: {\n        type: Date,\n        default: Date.now\n    },\n    user: {\n        type: _mongoose.Schema.Types.ObjectId,\n        ref: 'users'\n    }\n});\n\nexports.default = _mongoose2.default.model('cocktails', CocktailSchema);\n\n//# sourceURL=webpack:///./models/cocktail.js?");

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//create schema\nvar UserSchema = new _mongoose.Schema({\n    googleID: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    firstName: {\n        type: String\n    },\n    lastName: {\n        type: String\n    }\n});\n\nexports.default = _mongoose2.default.model('users', UserSchema);\n\n//# sourceURL=webpack:///./models/user.js?");

/***/ }),

/***/ "./routes/auth.js":
/*!************************!*\
  !*** ./routes/auth.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.get('/google', _passport2.default.authenticate('google', { scope: ['profile', 'email'] }));\n\nrouter.get('/google/callback', _passport2.default.authenticate('google', { failureRedirect: '/' }), function (req, res) {\n    // Successful authentication, redirect home.\n    res.redirect('/');\n});\n\nrouter.get('/verify', function (req, res) {\n    res.send(req.user);\n});\n\nrouter.get('/logout', function (req, res) {\n    req.logout();\n    res.redirect('/');\n});\n\nexports.default = router;\n\n//# sourceURL=webpack:///./routes/auth.js?");

/***/ }),

/***/ "./routes/cocktails.js":
/*!*****************************!*\
  !*** ./routes/cocktails.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _requireLogin = __webpack_require__(/*! ../helpers/requireLogin */ \"./helpers/requireLogin.js\");\n\nvar _requireLogin2 = _interopRequireDefault(_requireLogin);\n\nvar _cocktail = __webpack_require__(/*! ../models/cocktail */ \"./models/cocktail.js\");\n\nvar _cocktail2 = _interopRequireDefault(_cocktail);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\n\n// get all\nrouter.get('/', _requireLogin2.default, function (req, res) {\n    //grab all of the objects in db\n    _cocktail2.default.find({ user: req.user.id }).sort({ date: 'desc' }).then(function (cocktails) {\n        res.send(cocktails);\n    });\n});\n\n// get extra cocktail data by id\nrouter.get('/:id', function (req, res) {\n    //grab all of the objects in db\n    _cocktail2.default.find({ drinkID: req.params.id }).then(function (cocktails) {\n        res.send(cocktails);\n    });\n});\n\n// delete\nrouter.delete('/:id', function (req, res) {\n    _cocktail2.default.remove({ _id: req.params.id }).then(function () {\n        res.send({ message: \"Deleted\" });\n    });\n});\n\n// post\nrouter.post('/', _requireLogin2.default, function (req, res) {\n    var _req$body = req.body,\n        name = _req$body.name,\n        drinkID = _req$body.drinkID,\n        rating = _req$body.rating,\n        user = _req$body.user;\n\n    var newCocktail = {\n        name: name,\n        drinkID: drinkID,\n        rating: rating,\n        user: req.user._id\n    };\n    new _cocktail2.default(newCocktail).save().then(function (cocktail) {\n        res.send(cocktail);\n    });\n});\n\n// update\nrouter.put('/:id', _requireLogin2.default, function (req, res) {\n    _cocktail2.default.findById(req.params.id).then(function (cocktail) {\n        var _req$body2 = req.body,\n            name = _req$body2.name,\n            drinkID = _req$body2.drinkID,\n            rating = _req$body2.rating,\n            date = _req$body2.date,\n            user = _req$body2.user;\n\n        cocktail.name = name || cocktail.name;\n        cocktail.drinkID = drinkID || cocktail.drinkID;\n        cocktail.rating = rating || cocktail.rating;\n        cocktail.user = user || cocktail.user;\n        cocktail.date = Date.now();\n        cocktail.save().then(function (cocktail, err) {\n            if (err) {\n                res.status(500).send(err);\n            }\n            res.status(200).send(cocktail);\n        });\n    });\n});\n\nexports.default = router;\n\n//# sourceURL=webpack:///./routes/cocktails.js?");

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
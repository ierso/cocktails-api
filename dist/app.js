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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/main.js":
/*!************************!*\
  !*** ./config/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    port: process.env.PORT || 5000,\n    databaseUrl: 'mongodb://ierso:6035cp!@ds211440.mlab.com:11440/cocktails-db',\n    googleClientID: '21187341593-lc5go41k600chrj3rkm57hqjumjbao3j.apps.googleusercontent.com',\n    googleClientSecret: '7yOiDOH1Ah8XUztgkUahE7md'\n};\n\n//# sourceURL=webpack:///./config/main.js?");

/***/ }),

/***/ "./config/passport.js":
/*!****************************!*\
  !*** ./config/passport.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (passport) {\n    passport.use(new GoogleStrategy({\n        clientID: googleClientID,\n        clientSecret: googleClientSecret,\n        callbackURL: '/auth/google/callback',\n        proxy: true\n    }, function (accessToken, refreshToken, profile, done) {\n        var newUser = {\n            googleID: profile.id,\n            firstName: profile.name.givenName,\n            lastName: profile.name.familyName,\n            email: profile.emails[0].value\n        };\n        User.findOne({\n            googleID: profile.id\n        }).then(function (user) {\n            if (user) {\n                done(null, user);\n            } else {\n                new User(newUser).save().then(function (user) {\n                    return done(null, user);\n                });\n            }\n        });\n    }));\n    passport.serializeUser(function (user, done) {\n        done(null, user.id);\n    });\n    passport.deserializeUser(function (id, done) {\n        User.findById(id).then(function (user) {\n            return done(null, user);\n        });\n    });\n};\n\nvar passportGoogleAuth = __webpack_require__(/*! passport-google-oauth20 */ \"passport-google-oauth20\");\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar config = __webpack_require__(/*! ./main */ \"./config/main.js\");\nvar User = __webpack_require__(/*! ../models/user */ \"./models/user.js\");\n\n// import passportGoogleAuth from 'passport-google-oauth20';\n// import mongoose from 'mongoose';\n// import config from './main';\n// import User from '../models/user';\n\nvar googleClientID = config.googleClientID,\n    googleClientSecret = config.googleClientSecret;\n\nvar GoogleStrategy = passportGoogleAuth.Strategy;\n\n//# sourceURL=webpack:///./config/passport.js?");

/***/ }),

/***/ "./helpers/requireLogin.js":
/*!*********************************!*\
  !*** ./helpers/requireLogin.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (req, res, next) {\n    if (!req.user) {\n        return res.status(401).send({ error: \"You must log in\" });\n    }\n    next();\n};\n\n//# sourceURL=webpack:///./helpers/requireLogin.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _passport = __webpack_require__(/*! ./config/passport */ \"./config/passport.js\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar cookieParser = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"cookieParser\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar session = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"session\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar bodyParser = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"bodyParser\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar config = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./config\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar auth = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"auth\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar cocktails = __webpack_require__(/*! ./routes/cocktails */ \"./routes/cocktails.js\");\n\n// import express from 'express';\n// import mongoose from 'mongoose';\n// import passport from 'passport';\n// import cookieParser from 'cookie-parser';\n// import session from 'express-session';\n// import bodyParser from 'body-parser';\n// import config from './config/main';\n// import auth from './routes/auth';\n// import cocktails from './routes/cocktails';\nvar databaseUrl = config.databaseUrl,\n    port = config.port;\n\n\nvar app = express();\napp.use(bodyParser.urlencoded({ extended: false }));\napp.use(bodyParser.json());\n\napp.use(cookieParser());\napp.use(session({\n    secret: 'secret',\n    resave: false,\n    saveUninitialized: false\n}));\n\napp.use(passport.initialize());\napp.use(passport.session());\n\napp.use(function (req, res, next) {\n    res.locals.user = req.user || null;\n    next();\n});\n\nmongoose.connect(databaseUrl).then(function () {\n    return console.log('mongoDb connected');\n}).catch(function (err) {\n    return console.log(err);\n});\n\nmongoose.Promise = global.Promise;\n\n// passport\n\n(0, _passport2.default)(passport);\n\n// use routes\napp.use('/auth', auth);\napp.use('/cocktails', cocktails);\n\nif (false) { var path; }\n\napp.listen(port);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./models/cocktail.js":
/*!****************************!*\
  !*** ./models/cocktail.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar Schema = mongoose.Schema;\n// import mongoose, { Schema } from 'mongoose';\n\n//create schema\n\nvar CocktailSchema = new Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    drinkID: {\n        type: Number,\n        required: true\n    },\n    rating: {\n        type: Number,\n        required: true\n    },\n    date: {\n        type: Date,\n        default: Date.now\n    },\n    user: {\n        type: Schema.Types.ObjectId,\n        ref: 'users'\n    }\n});\n\nexports.default = mongoose.model('cocktails', CocktailSchema);\n\n//# sourceURL=webpack:///./models/cocktail.js?");

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar Schema = mongoose.Schema;\n// import mongoose, { Schema } from 'mongoose';\n\n//create schema\n\nvar UserSchema = new Schema({\n    googleID: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    firstName: {\n        type: String\n    },\n    lastName: {\n        type: String\n    }\n});\n\nexports.default = mongoose.model('users', UserSchema);\n\n//# sourceURL=webpack:///./models/user.js?");

/***/ }),

/***/ "./routes/cocktails.js":
/*!*****************************!*\
  !*** ./routes/cocktails.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar express = __webpack_require__(/*! express */ \"express\");\nvar requireLogin = __webpack_require__(/*! ../helpers/requireLogin */ \"./helpers/requireLogin.js\");\nvar Cocktail = __webpack_require__(/*! ../models/cocktail */ \"./models/cocktail.js\");\n\n// import express from 'express';\n// import requireLogin from '../helpers/requireLogin';\n// import Cocktail from '../models/cocktail';\nvar router = express.Router();\n\n// get all\nrouter.get('/', requireLogin, function (req, res) {\n    //grab all of the objects in db\n    Cocktail.find({ user: req.user.id }).sort({ date: 'desc' }).then(function (cocktails) {\n        res.send(cocktails);\n    });\n});\n\n// get extra cocktail data by id\nrouter.get('/:id', function (req, res) {\n    //grab all of the objects in db\n    Cocktail.find({ drinkID: req.params.id }).then(function (cocktails) {\n        res.send(cocktails);\n    });\n});\n\n// delete\nrouter.delete('/:id', function (req, res) {\n    Cocktail.remove({ _id: req.params.id }).then(function () {\n        res.send({ message: \"Deleted\" });\n    });\n});\n\n// post\nrouter.post('/', requireLogin, function (req, res) {\n    var _req$body = req.body,\n        name = _req$body.name,\n        drinkID = _req$body.drinkID,\n        rating = _req$body.rating,\n        user = _req$body.user;\n\n    var newCocktail = {\n        name: name,\n        drinkID: drinkID,\n        rating: rating,\n        user: req.user._id\n    };\n    new Cocktail(newCocktail).save().then(function (cocktail) {\n        res.send(cocktail);\n    });\n});\n\n// update\nrouter.put('/:id', requireLogin, function (req, res) {\n    Cocktail.findById(req.params.id).then(function (cocktail) {\n        var _req$body2 = req.body,\n            name = _req$body2.name,\n            drinkID = _req$body2.drinkID,\n            rating = _req$body2.rating,\n            date = _req$body2.date,\n            user = _req$body2.user;\n\n        cocktail.name = name || cocktail.name;\n        cocktail.drinkID = drinkID || cocktail.drinkID;\n        cocktail.rating = rating || cocktail.rating;\n        cocktail.user = user || cocktail.user;\n        cocktail.date = Date.now();\n        cocktail.save().then(function (cocktail, err) {\n            if (err) {\n                res.status(500).send(err);\n            }\n            res.status(200).send(cocktail);\n        });\n    });\n});\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./routes/cocktails.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

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
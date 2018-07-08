<<<<<<< HEAD
module.exports=function(e){var t={};function n(u){if(t[u])return t[u].exports;var r=t[u]={i:u,l:!1,exports:{}};return e[u].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,u){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:u})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.w={},n(n.s=15)}([function(e,t){e.exports=require("mongoose")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";e.exports={port:process.env.PORT||5e3,databaseUrl:"mongodb://ierso:6035cp!@ds211440.mlab.com:11440/cocktails-db",googleClientID:"21187341593-lc5go41k600chrj3rkm57hqjumjbao3j.apps.googleusercontent.com",googleClientSecret:"7yOiDOH1Ah8XUztgkUahE7md"}},function(e,t){e.exports=require("passport")},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u,r=n(0),o=(u=r)&&u.__esModule?u:{default:u};var a=new r.Schema({googleID:{type:String,required:!0},email:{type:String,required:!0},firstName:{type:String},lastName:{type:String}});t.default=o.default.model("users",a)},function(e,t){e.exports=require("passport-google-oauth20")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.use(new s({clientID:i,clientSecret:l,callbackURL:"/auth/google/callback",proxy:!0},function(e,t,n,u){var r={googleID:n.id,firstName:n.name.givenName,lastName:n.name.familyName,email:n.emails[0].value};o.default.findOne({googleID:n.id}).then(function(e){e?u(null,e):new o.default(r).save().then(function(e){return u(null,e)})})})),e.serializeUser(function(e,t){t(null,e.id)}),e.deserializeUser(function(e,t){o.default.findById(e).then(function(e){return t(null,e)})})};var u=a(n(6)),r=(a(n(0)),a(n(2))),o=a(n(5));function a(e){return e&&e.__esModule?e:{default:e}}var i=r.default.googleClientID,l=r.default.googleClientSecret,s=u.default.Strategy},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u,r=n(0),o=(u=r)&&u.__esModule?u:{default:u};var a=new r.Schema({name:{type:String,required:!0},drinkID:{type:Number,required:!0},rating:{type:Number,required:!0},date:{type:Date,default:Date.now},user:{type:r.Schema.Types.ObjectId,ref:"users"}});t.default=o.default.model("cocktails",a)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if(!e.user)return t.status(401).send({error:"You must log in"});n()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=a(n(1)),r=a(n(9)),o=a(n(8));function a(e){return e&&e.__esModule?e:{default:e}}var i=u.default.Router();i.get("/",r.default,function(e,t){o.default.find({user:e.user.id}).sort({date:"desc"}).then(function(e){t.send(e)})}),i.get("/:id",function(e,t){o.default.find({drinkID:e.params.id}).then(function(e){t.send(e)})}),i.delete("/:id",function(e,t){o.default.remove({_id:e.params.id}).then(function(){t.send({message:"Deleted"})})}),i.post("/",r.default,function(e,t){var n=e.body,u=n.name,r=n.drinkID,a=n.rating,i=(n.user,{name:u,drinkID:r,rating:a,user:e.user._id});new o.default(i).save().then(function(e){t.send(e)})}),i.put("/:id",r.default,function(e,t){o.default.findById(e.params.id).then(function(n){var u=e.body,r=u.name,o=u.drinkID,a=u.rating,i=(u.date,u.user);n.name=r||n.name,n.drinkID=o||n.drinkID,n.rating=a||n.rating,n.user=i||n.user,n.date=Date.now(),n.save().then(function(e,n){n&&t.status(500).send(n),t.status(200).send(e)})})}),t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=o(n(1)),r=o(n(3));function o(e){return e&&e.__esModule?e:{default:e}}var a=u.default.Router();a.get("/google",r.default.authenticate("google",{scope:["profile","email"]})),a.get("/google/callback",r.default.authenticate("google",{failureRedirect:"/"}),function(e,t){t.redirect("/")}),a.get("/verify",function(e,t){t.send(e.user)}),a.get("/logout",function(e,t){e.logout(),t.redirect("/")}),t.default=a},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("express-session")},function(e,t){e.exports=require("cookie-parser")},function(e,t,n){"use strict";var u=g(n(1)),r=g(n(0)),o=g(n(3)),a=g(n(14)),i=g(n(13)),l=g(n(12)),s=g(n(2)),d=g(n(11)),c=g(n(10)),f=g(n(7));function g(e){return e&&e.__esModule?e:{default:e}}var p=s.default.databaseUrl,m=s.default.port,v=(0,u.default)();v.use(function(e,t,n){t.setHeader("Cache-Control","no-cache"),n()}),v.use(l.default.urlencoded({extended:!1})),v.use(l.default.json()),v.use((0,a.default)()),v.use((0,i.default)({secret:"secret",resave:!1,saveUninitialized:!1})),v.use(o.default.initialize()),v.use(o.default.session()),v.use(function(e,t,n){t.locals.user=e.user||null,n()}),r.default.connect(p).then(function(){return console.log("mongoDb connected")}).catch(function(e){return console.log(e)}),r.default.Promise=global.Promise,(0,f.default)(o.default),v.use("/auth",d.default),v.use("/cocktails",c.default),v.disable("x-powered-by"),v.use(u.default.static("client/build"));var b=n(4);v.get("*",function(e,t){t.sendFile(b.resolve("../client/build/index.html"))}),v.listen(m)}]);
=======
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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _expressSession = __webpack_require__(/*! express-session */ \"express-session\");\n\nvar _expressSession2 = _interopRequireDefault(_expressSession);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _main = __webpack_require__(/*! ./config/main */ \"./config/main.js\");\n\nvar _main2 = _interopRequireDefault(_main);\n\nvar _auth = __webpack_require__(/*! ./routes/auth */ \"./routes/auth.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _cocktails = __webpack_require__(/*! ./routes/cocktails */ \"./routes/cocktails.js\");\n\nvar _cocktails2 = _interopRequireDefault(_cocktails);\n\nvar _passport3 = __webpack_require__(/*! ./config/passport */ \"./config/passport.js\");\n\nvar _passport4 = _interopRequireDefault(_passport3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar databaseUrl = _main2.default.databaseUrl,\n    port = _main2.default.port;\n\n\nvar app = (0, _express2.default)();\n\napp.use(function (req, res, next) {\n    res.setHeader('Cache-Control', 'no-cache');\n    next();\n});\n\napp.use(_bodyParser2.default.urlencoded({ extended: false }));\napp.use(_bodyParser2.default.json());\n\napp.use((0, _cookieParser2.default)());\napp.use((0, _expressSession2.default)({\n    secret: 'secret',\n    resave: false,\n    saveUninitialized: false\n}));\n\napp.use(_passport2.default.initialize());\napp.use(_passport2.default.session());\n\napp.use(function (req, res, next) {\n    res.locals.user = req.user || null;\n    next();\n});\n\n_mongoose2.default.connect(databaseUrl).then(function () {\n    return console.log('mongoDb connected');\n}).catch(function (err) {\n    return console.log(err);\n});\n\n_mongoose2.default.Promise = global.Promise;\n\n// passport\n\n(0, _passport4.default)(_passport2.default);\n\n// use routes\napp.use('/auth', _auth2.default);\napp.use('/cocktails', _cocktails2.default);\n\nif (false) { var path; }\n\napp.listen(port);\n\n//# sourceURL=webpack:///./index.js?");

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
>>>>>>> development

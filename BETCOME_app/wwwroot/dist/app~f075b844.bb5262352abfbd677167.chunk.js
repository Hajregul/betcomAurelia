(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~f075b844"],{

/***/ 0:
/*!*****************************************************************************************************************************!*\
  !*** multi aurelia-webpack-plugin/runtime/empty-entry aurelia-webpack-plugin/runtime/pal-loader-entry aurelia-bootstrapper ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! aurelia-webpack-plugin/runtime/empty-entry */"GAND");
__webpack_require__(/*! aurelia-webpack-plugin/runtime/pal-loader-entry */"GmYv");
module.exports = __webpack_require__(/*! aurelia-bootstrapper */"b9nV");


/***/ }),

/***/ "BEPO":
/*!*********************************!*\
  !*** ./config/environment.json ***!
  \*********************************/
/*! exports provided: debug, testing, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"debug\\\":true,\\\"testing\\\":true}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkVQTy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///BEPO\n");

/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var aurelia_fetch_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-fetch-client */ \"qQke\");\n\nvar httpClient = new aurelia_fetch_client__WEBPACK_IMPORTED_MODULE_0__[\"HttpClient\"]();\nvar App = /*#__PURE__*/function () {\n  function App() {\n    this.fetchValues = null;\n    this.fetchValue();\n  }\n\n  var _proto = App.prototype;\n\n  _proto.fetchValue = function fetchValue() {\n    var _this = this;\n\n    var baseUrl = 'https://localhost:54894/api/Home';\n    httpClient.fetch(baseUrl, {\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      }\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      _this.fetchValues = data;\n      console.log(_this.fetchValues);\n      _this.message = _this.fetchValues;\n    });\n  };\n\n  return App;\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xubGV0IGh0dHBDbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcblxuIFxuICBjb25zdHJ1Y3RvcigpIHsgXG5cbiAgICB0aGlzLmZldGNoVmFsdWVzID0gbnVsbDtcbiAgICB0aGlzLmZldGNoVmFsdWUoKVxuICAgIH0gXG4gICAgZmV0Y2hWYWx1ZSgpXG4gICAge1xuICAgICAgY29uc3QgYmFzZVVybCA9ICAnaHR0cHM6Ly9sb2NhbGhvc3Q6NTQ4OTQvYXBpL0hvbWUnXG4gICAgICAgICAgICAgIGh0dHBDbGllbnQuZmV0Y2goYmFzZVVybCxcbiAgICAgICAgICAgICAge2hlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hWYWx1ZXMgPSBkYXRhOyAgICBcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmV0Y2hWYWx1ZXMpOyAgIFxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlPXRoaXMuZmV0Y2hWYWx1ZXM7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFEQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUF6QkE7QUFBQTtBQTRCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///app\n");

/***/ }),

/***/ "app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"JPst\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"*\\n{\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Poppins',sans-serif;\\n  \\n}\\nbody {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  min-height: 100vh;\\n}\\nh2{\\n  font-size: 4em;\\n  font-weight: 900;\\n  color: #ffffff;\\n  z-index: 1;\\n  overflow: hidden;\\n  position: absolute;\\n  margin: auto;\\n  padding: 20px 0px 0px 30px;\\n  height: 30vh;\\n  width: 30vw;\\n\\n  background-position: 50% 50%;\\n\\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);\\n  top: 50%;\\n  transform: translateY(-50%);\\n  z-index: 2;\\n  animation: dd1 10s 1, dd12 10s 1;\\n  animation-delay: 4s, 14s;\\n}\\n\\n.main {\\n  height: 100vh;\\n  width: 100vw;\\n  position: relative;\\n}\\n.d1 {\\n  position: absolute;\\n  background-image: url(https://newevolutiondesigns.com/images/freebies/4k-wallpaper-9.jpg);\\n  background-size: 2700px 1500px;\\n\\n  height: 30vh;\\n  width: 15vw;\\n\\n  background-position: 0 50%;\\n\\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);\\n  top: 50%;\\n  transform: translateY(-50%);\\n  z-index: 2;\\n  animation: dd1 10s 1, dd12 10s 1;\\n  animation-delay: 4s, 14s;\\n}\\n.d2 {\\n  position: absolute;\\n  background-image: url(https://newevolutiondesigns.com/images/freebies/4k-wallpaper-9.jpg);\\n  background-size: 2700px 1500px;\\n\\n  height: 50vh;\\n  width: 25vw;\\n\\n  background-position: -10vw 50%;\\n  left: 10vw;\\n\\n  top: 50%;\\n  transform: translateY(-50%);\\n  z-index: 1;\\n  animation: dd2 10s 2;\\n  animation-delay: 4s;\\n}\\n.d3 {\\n  position: absolute;\\n  background-image: url(https://newevolutiondesigns.com/images/freebies/4k-wallpaper-9.jpg);\\n  background-size: 2700px 1500px;\\n  overflow: hidden;\\n\\n  height: 100vh;\\n  width: 40vw;\\n  left: 25vw;\\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);\\n  background-position: -35vw 50%;\\n\\n  top: 50%;\\n  transform: translateY(-50%);\\n  z-index: 3;\\n  animation: dd3 10s 2;\\n  animation-delay: 4s;\\n}\\n.d4 {\\n  position: absolute;\\n  overflow: hidden;\\n  background-image: url(https://newevolutiondesigns.com/images/freebies/4k-wallpaper-9.jpg);\\n  background-size: 2700px 1500px;\\n\\n  height: 80vh;\\n  width: 25vw;\\n  left: 60vw;\\n  background-position: -70vw 50%;\\n\\n  top: 50%;\\n  transform: translateY(-50%);\\n  z-index: 1;\\n  animation: dd4 10s 2;\\n  animation-delay: 4s;\\n}\\n\\n@keyframes dd1 {\\n  0% {\\n  }\\n  50% {\\n    width: 95vw;\\n  }\\n}\\n@keyframes dd12 {\\n  0% {\\n  }\\n  50% {\\n    background-position: Calc(0vw - 40px) 50%;\\n  }\\n}\\n@keyframes dd2 {\\n  0% {\\n  }\\n  50% {\\n    background-position: Calc(-10vw - 40px) 50%;\\n  }\\n}\\n@keyframes dd3 {\\n  0% {\\n  }\\n  50% {\\n    background-position: Calc(-35vw - 40px) 50%;\\n  }\\n}\\n@keyframes dd4 {\\n  0% {\\n  }\\n  50% {\\n    background-position: Calc(-70vw - 40px) 50%;\\n  }\\n}\\n\\n\\n.container .welcome {\\n  font-family: sans-serif;\\n  text-transform: uppercase;\\n  display: block;\\n}\\n\\n.container {\\n  text-align: center;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%,-50%); /*隐藏作用：如果没有用transform方式进行居中显示，则width：100%会向右侧延申，左侧为空*/\\n  width: 100%;\\n}\\n\\n.welcome {\\n  font-size: 60px;\\n  font-weight: 700;\\n  color: #fff;\\n  letter-spacing: 8px;\\n  margin-bottom: 20px;\\n  position: relative;\\n  animation: text 3s 1;\\n}\\n\\n\\n@keyframes text {\\n  0%{\\n      color: #000;\\n      margin-bottom: -40px;\\n  }\\n\\n  30%{\\n      letter-spacing: 25px;\\n      margin-bottom: -40px;\\n  }\\n\\n  85%{\\n      letter-spacing: 8px;\\n      margin-bottom: -40px;\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/app.css\"],\"names\":[],\"mappings\":\"AACA;;EAEE,SAAS;EACT,UAAU;EACV,iCAAiC;;AAEnC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;AACnB;AACA;EACE,cAAc;EACd,gBAAgB;EAChB,cAAc;EACd,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,0BAA0B;EAC1B,YAAY;EACZ,WAAW;;EAEX,4BAA4B;;EAE5B,2CAA2C;EAC3C,QAAQ;EACR,2BAA2B;EAC3B,UAAU;EACV,gCAAgC;EAChC,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,yFAAyF;EACzF,8BAA8B;;EAE9B,YAAY;EACZ,WAAW;;EAEX,0BAA0B;;EAE1B,2CAA2C;EAC3C,QAAQ;EACR,2BAA2B;EAC3B,UAAU;EACV,gCAAgC;EAChC,wBAAwB;AAC1B;AACA;EACE,kBAAkB;EAClB,yFAAyF;EACzF,8BAA8B;;EAE9B,YAAY;EACZ,WAAW;;EAEX,8BAA8B;EAC9B,UAAU;;EAEV,QAAQ;EACR,2BAA2B;EAC3B,UAAU;EACV,oBAAoB;EACpB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,yFAAyF;EACzF,8BAA8B;EAC9B,gBAAgB;;EAEhB,aAAa;EACb,WAAW;EACX,UAAU;EACV,2CAA2C;EAC3C,8BAA8B;;EAE9B,QAAQ;EACR,2BAA2B;EAC3B,UAAU;EACV,oBAAoB;EACpB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,yFAAyF;EACzF,8BAA8B;;EAE9B,YAAY;EACZ,WAAW;EACX,UAAU;EACV,8BAA8B;;EAE9B,QAAQ;EACR,2BAA2B;EAC3B,UAAU;EACV,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE;EACA;EACA;IACE,WAAW;EACb;AACF;AACA;EACE;EACA;EACA;IACE,yCAAyC;EAC3C;AACF;AACA;EACE;EACA;EACA;IACE,2CAA2C;EAC7C;AACF;AACA;EACE;EACA;EACA;IACE,2CAA2C;EAC7C;AACF;AACA;EACE;EACA;EACA;IACE,2CAA2C;EAC7C;AACF;;;AAGA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,+BAA+B,EAAE,qDAAqD;EACtF,WAAW;AACb;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;AACtB;;;AAGA;EACE;MACI,WAAW;MACX,oBAAoB;EACxB;;EAEA;MACI,oBAAoB;MACpB,oBAAoB;EACxB;;EAEA;MACI,mBAAmB;MACnB,oBAAoB;EACxB;AACF\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900&display=swap\\\");\\n*\\n{\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Poppins',sans-serif;\\n  \\n}\\nbody {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  min-height: 100vh;\\n}\\nh2{\\n  font-size: 4em;\\n  font-weight: 900;\\n  color: #ffffff;\\n  z-index: 1;\\n  overflow: hidden;\\n  position: absolute;\\n  margin: auto;\\n  padding: 20px 0px 0px 30px;\\n  height: 30vh;\\n  width: 30vw;\\n\\n  background-position: 50% 50%;\\n\\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);\\n  top: 50%;\\n  transform: translateY(-50%);\\n  z-index: 2;\\n  animation: dd1 10s 1, dd12 10s 1;\\n  animation-delay: 4s, 14s;\\n}\\n\\n.main {\\n  height: 100vh;\\n  width: 100vw;\\n  position: relative;\\n}\\n.d1 {\\n  position: absolute;\\n  background-image: url(https://newevolutiondesigns.com/images/freebies/4k-wallpaper-9.jpg);\\n  background-size: 2700px 1500px;\\n\\n  height: 30vh;\\n  width: 15vw;\\n\\n  background-position: 0 50%;\\n\\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);\\n  top: 50%;\\n  transform: translateY(-50%);\\n  z-index: 2;\\n  animation: dd1 10s 1, dd12 10s 1;\\n  animation-delay: 4s, 14s;\\n}\\n.d2 {\\n  position: absolute;\\n  background-image: url(https://newevolutiondesigns.com/images/freebies/4k-wallpaper-9.jpg);\\n  background-size: 2700px 1500px;\\n\\n  height: 50vh;\\n  width: 25vw;\\n\\n  background-position: -10vw 50%;\\n  left: 10vw;\\n\\n  top: 50%;\\n  transform: translateY(-50%);\\n  z-index: 1;\\n  animation: dd2 10s 2;\\n  animation-delay: 4s;\\n}\\n.d3 {\\n  position: absolute;\\n  background-image: url(https://newevolutiondesigns.com/images/freebies/4k-wallpaper-9.jpg);\\n  background-size: 2700px 1500px;\\n  overflow: hidden;\\n\\n  height: 100vh;\\n  width: 40vw;\\n  left: 25vw;\\n  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);\\n  background-position: -35vw 50%;\\n\\n  top: 50%;\\n  transform: translateY(-50%);\\n  z-index: 3;\\n  animation: dd3 10s 2;\\n  animation-delay: 4s;\\n}\\n.d4 {\\n  position: absolute;\\n  overflow: hidden;\\n  background-image: url(https://newevolutiondesigns.com/images/freebies/4k-wallpaper-9.jpg);\\n  background-size: 2700px 1500px;\\n\\n  height: 80vh;\\n  width: 25vw;\\n  left: 60vw;\\n  background-position: -70vw 50%;\\n\\n  top: 50%;\\n  transform: translateY(-50%);\\n  z-index: 1;\\n  animation: dd4 10s 2;\\n  animation-delay: 4s;\\n}\\n\\n@keyframes dd1 {\\n  0% {\\n  }\\n  50% {\\n    width: 95vw;\\n  }\\n}\\n@keyframes dd12 {\\n  0% {\\n  }\\n  50% {\\n    background-position: Calc(0vw - 40px) 50%;\\n  }\\n}\\n@keyframes dd2 {\\n  0% {\\n  }\\n  50% {\\n    background-position: Calc(-10vw - 40px) 50%;\\n  }\\n}\\n@keyframes dd3 {\\n  0% {\\n  }\\n  50% {\\n    background-position: Calc(-35vw - 40px) 50%;\\n  }\\n}\\n@keyframes dd4 {\\n  0% {\\n  }\\n  50% {\\n    background-position: Calc(-70vw - 40px) 50%;\\n  }\\n}\\n\\n\\n.container .welcome {\\n  font-family: sans-serif;\\n  text-transform: uppercase;\\n  display: block;\\n}\\n\\n.container {\\n  text-align: center;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%,-50%); /*隐藏作用：如果没有用transform方式进行居中显示，则width：100%会向右侧延申，左侧为空*/\\n  width: 100%;\\n}\\n\\n.welcome {\\n  font-size: 60px;\\n  font-weight: 700;\\n  color: #fff;\\n  letter-spacing: 8px;\\n  margin-bottom: 20px;\\n  position: relative;\\n  animation: text 3s 1;\\n}\\n\\n\\n@keyframes text {\\n  0%{\\n      color: #000;\\n      margin-bottom: -40px;\\n  }\\n\\n  30%{\\n      letter-spacing: 25px;\\n      margin-bottom: -40px;\\n  }\\n\\n  85%{\\n      letter-spacing: 8px;\\n      margin-bottom: -40px;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuY3NzPzM2YmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjQwMCw1MDAsNjAwLDcwMCw4MDAsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIipcXG57XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xcbiAgXFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5oMntcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgei1pbmRleDogMTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4IDBweCAwcHggMzBweDtcXG4gIGhlaWdodDogMzB2aDtcXG4gIHdpZHRoOiAzMHZ3O1xcblxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG5cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHotaW5kZXg6IDI7XFxuICBhbmltYXRpb246IGRkMSAxMHMgMSwgZGQxMiAxMHMgMTtcXG4gIGFuaW1hdGlvbi1kZWxheTogNHMsIDE0cztcXG59XFxuXFxuLm1haW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmQxIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL25ld2V2b2x1dGlvbmRlc2lnbnMuY29tL2ltYWdlcy9mcmVlYmllcy80ay13YWxscGFwZXItOS5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyNzAwcHggMTUwMHB4O1xcblxcbiAgaGVpZ2h0OiAzMHZoO1xcbiAgd2lkdGg6IDE1dnc7XFxuXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDUwJTtcXG5cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHotaW5kZXg6IDI7XFxuICBhbmltYXRpb246IGRkMSAxMHMgMSwgZGQxMiAxMHMgMTtcXG4gIGFuaW1hdGlvbi1kZWxheTogNHMsIDE0cztcXG59XFxuLmQyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL25ld2V2b2x1dGlvbmRlc2lnbnMuY29tL2ltYWdlcy9mcmVlYmllcy80ay13YWxscGFwZXItOS5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyNzAwcHggMTUwMHB4O1xcblxcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgd2lkdGg6IDI1dnc7XFxuXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTB2dyA1MCU7XFxuICBsZWZ0OiAxMHZ3O1xcblxcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB6LWluZGV4OiAxO1xcbiAgYW5pbWF0aW9uOiBkZDIgMTBzIDI7XFxuICBhbmltYXRpb24tZGVsYXk6IDRzO1xcbn1cXG4uZDMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vbmV3ZXZvbHV0aW9uZGVzaWducy5jb20vaW1hZ2VzL2ZyZWViaWVzLzRrLXdhbGxwYXBlci05LmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDI3MDBweCAxNTAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiA0MHZ3O1xcbiAgbGVmdDogMjV2dztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzV2dyA1MCU7XFxuXFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHotaW5kZXg6IDM7XFxuICBhbmltYXRpb246IGRkMyAxMHMgMjtcXG4gIGFuaW1hdGlvbi1kZWxheTogNHM7XFxufVxcbi5kNCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vbmV3ZXZvbHV0aW9uZGVzaWducy5jb20vaW1hZ2VzL2ZyZWViaWVzLzRrLXdhbGxwYXBlci05LmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDI3MDBweCAxNTAwcHg7XFxuXFxuICBoZWlnaHQ6IDgwdmg7XFxuICB3aWR0aDogMjV2dztcXG4gIGxlZnQ6IDYwdnc7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzB2dyA1MCU7XFxuXFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHotaW5kZXg6IDE7XFxuICBhbmltYXRpb246IGRkNCAxMHMgMjtcXG4gIGFuaW1hdGlvbi1kZWxheTogNHM7XFxufVxcblxcbkBrZXlmcmFtZXMgZGQxIHtcXG4gIDAlIHtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHdpZHRoOiA5NXZ3O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGRkMTIge1xcbiAgMCUge1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogQ2FsYygwdncgLSA0MHB4KSA1MCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZGQyIHtcXG4gIDAlIHtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IENhbGMoLTEwdncgLSA0MHB4KSA1MCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZGQzIHtcXG4gIDAlIHtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IENhbGMoLTM1dncgLSA0MHB4KSA1MCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZGQ0IHtcXG4gIDAlIHtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IENhbGMoLTcwdncgLSA0MHB4KSA1MCU7XFxuICB9XFxufVxcblxcblxcbi5jb250YWluZXIgLndlbGNvbWUge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpOyAvKumakOiXj+S9nOeUqO+8muWmguaenOayoeacieeUqHRyYW5zZm9ybeaWueW8j+i/m+ihjOWxheS4reaYvuekuu+8jOWImXdpZHRo77yaMTAwJeS8muWQkeWPs+S+p+W7tueUs++8jOW3puS+p+S4uuepuiovXFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLndlbGNvbWUge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhbmltYXRpb246IHRleHQgM3MgMTtcXG59XFxuXFxuXFxuQGtleWZyYW1lcyB0ZXh0IHtcXG4gIDAle1xcbiAgICAgIGNvbG9yOiAjMDAwO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IC00MHB4O1xcbiAgfVxcblxcbiAgMzAle1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAyNXB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IC00MHB4O1xcbiAgfVxcblxcbiAgODUle1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlDQUFpQzs7QUFFbkM7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osV0FBVzs7RUFFWCw0QkFBNEI7O0VBRTVCLDJDQUEyQztFQUMzQyxRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixnQ0FBZ0M7RUFDaEMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5RkFBeUY7RUFDekYsOEJBQThCOztFQUU5QixZQUFZO0VBQ1osV0FBVzs7RUFFWCwwQkFBMEI7O0VBRTFCLDJDQUEyQztFQUMzQyxRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixnQ0FBZ0M7RUFDaEMsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUZBQXlGO0VBQ3pGLDhCQUE4Qjs7RUFFOUIsWUFBWTtFQUNaLFdBQVc7O0VBRVgsOEJBQThCO0VBQzlCLFVBQVU7O0VBRVYsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlGQUF5RjtFQUN6Riw4QkFBOEI7RUFDOUIsZ0JBQWdCOztFQUVoQixhQUFhO0VBQ2IsV0FBVztFQUNYLFVBQVU7RUFDViwyQ0FBMkM7RUFDM0MsOEJBQThCOztFQUU5QixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlGQUF5RjtFQUN6Riw4QkFBOEI7O0VBRTlCLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLDhCQUE4Qjs7RUFFOUIsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBQ0E7RUFDRTtFQUNBO0VBQ0E7SUFDRSx5Q0FBeUM7RUFDM0M7QUFDRjtBQUNBO0VBQ0U7RUFDQTtFQUNBO0lBQ0UsMkNBQTJDO0VBQzdDO0FBQ0Y7QUFDQTtFQUNFO0VBQ0E7RUFDQTtJQUNFLDJDQUEyQztFQUM3QztBQUNGO0FBQ0E7RUFDRTtFQUNBO0VBQ0E7SUFDRSwyQ0FBMkM7RUFDN0M7QUFDRjs7O0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsK0JBQStCLEVBQUUscURBQXFEO0VBQ3RGLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7O0FBR0E7RUFDRTtNQUNJLFdBQVc7TUFDWCxvQkFBb0I7RUFDeEI7O0VBRUE7TUFDSSxvQkFBb0I7TUFDcEIsb0JBQW9CO0VBQ3hCOztFQUVBO01BQ0ksbUJBQW1CO01BQ25CLG9CQUFvQjtFQUN4QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczo0MDAsNTAwLDYwMCw3MDAsODAwLDkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qXFxue1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcXG4gIFxcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuaDJ7XFxuICBmb250LXNpemU6IDRlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHotaW5kZXg6IDE7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMjBweCAwcHggMHB4IDMwcHg7XFxuICBoZWlnaHQ6IDMwdmg7XFxuICB3aWR0aDogMzB2dztcXG5cXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB6LWluZGV4OiAyO1xcbiAgYW5pbWF0aW9uOiBkZDEgMTBzIDEsIGRkMTIgMTBzIDE7XFxuICBhbmltYXRpb24tZGVsYXk6IDRzLCAxNHM7XFxufVxcblxcbi5tYWluIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5kMSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9uZXdldm9sdXRpb25kZXNpZ25zLmNvbS9pbWFnZXMvZnJlZWJpZXMvNGstd2FsbHBhcGVyLTkuanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjcwMHB4IDE1MDBweDtcXG5cXG4gIGhlaWdodDogMzB2aDtcXG4gIHdpZHRoOiAxNXZ3O1xcblxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XFxuXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB6LWluZGV4OiAyO1xcbiAgYW5pbWF0aW9uOiBkZDEgMTBzIDEsIGRkMTIgMTBzIDE7XFxuICBhbmltYXRpb24tZGVsYXk6IDRzLCAxNHM7XFxufVxcbi5kMiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9uZXdldm9sdXRpb25kZXNpZ25zLmNvbS9pbWFnZXMvZnJlZWJpZXMvNGstd2FsbHBhcGVyLTkuanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjcwMHB4IDE1MDBweDtcXG5cXG4gIGhlaWdodDogNTB2aDtcXG4gIHdpZHRoOiAyNXZ3O1xcblxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwdncgNTAlO1xcbiAgbGVmdDogMTB2dztcXG5cXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgei1pbmRleDogMTtcXG4gIGFuaW1hdGlvbjogZGQyIDEwcyAyO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiA0cztcXG59XFxuLmQzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL25ld2V2b2x1dGlvbmRlc2lnbnMuY29tL2ltYWdlcy9mcmVlYmllcy80ay13YWxscGFwZXItOS5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyNzAwcHggMTUwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogNDB2dztcXG4gIGxlZnQ6IDI1dnc7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTM1dncgNTAlO1xcblxcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB6LWluZGV4OiAzO1xcbiAgYW5pbWF0aW9uOiBkZDMgMTBzIDI7XFxuICBhbmltYXRpb24tZGVsYXk6IDRzO1xcbn1cXG4uZDQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL25ld2V2b2x1dGlvbmRlc2lnbnMuY29tL2ltYWdlcy9mcmVlYmllcy80ay13YWxscGFwZXItOS5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyNzAwcHggMTUwMHB4O1xcblxcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgd2lkdGg6IDI1dnc7XFxuICBsZWZ0OiA2MHZ3O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTcwdncgNTAlO1xcblxcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB6LWluZGV4OiAxO1xcbiAgYW5pbWF0aW9uOiBkZDQgMTBzIDI7XFxuICBhbmltYXRpb24tZGVsYXk6IDRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRkMSB7XFxuICAwJSB7XFxuICB9XFxuICA1MCUge1xcbiAgICB3aWR0aDogOTV2dztcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBkZDEyIHtcXG4gIDAlIHtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IENhbGMoMHZ3IC0gNDBweCkgNTAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGRkMiB7XFxuICAwJSB7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBDYWxjKC0xMHZ3IC0gNDBweCkgNTAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGRkMyB7XFxuICAwJSB7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBDYWxjKC0zNXZ3IC0gNDBweCkgNTAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGRkNCB7XFxuICAwJSB7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBDYWxjKC03MHZ3IC0gNDBweCkgNTAlO1xcbiAgfVxcbn1cXG5cXG5cXG4uY29udGFpbmVyIC53ZWxjb21lIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTsgLyrpmpDol4/kvZznlKjvvJrlpoLmnpzmsqHmnInnlKh0cmFuc2Zvcm3mlrnlvI/ov5vooYzlsYXkuK3mmL7npLrvvIzliJl3aWR0aO+8mjEwMCXkvJrlkJHlj7Pkvqflu7bnlLPvvIzlt6bkvqfkuLrnqboqL1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53ZWxjb21lIHtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGxldHRlci1zcGFjaW5nOiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYW5pbWF0aW9uOiB0ZXh0IDNzIDE7XFxufVxcblxcblxcbkBrZXlmcmFtZXMgdGV4dCB7XFxuICAwJXtcXG4gICAgICBjb2xvcjogIzAwMDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAtNDBweDtcXG4gIH1cXG5cXG4gIDMwJXtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMjVweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAtNDBweDtcXG4gIH1cXG5cXG4gIDg1JXtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IC00MHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///app.css\n");

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Module\nvar code = \"<template>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n    <meta charset=utf-8>\\n  \\n    <title>Betcom</title>\\n    <require from=\\\"app.css\\\"></require>\\n</head>\\n\\n<body>\\n  <div class=\\\"main\\\">\\n    <div class=\\\"d1\\\"></div>\\n    <div class=\\\"d2\\\"></div>\\n    <div class=\\\"d3\\\">\\n      <div class=\\\"container\\\">\\n        <h2><span class=\\\"welcome\\\">${message}</span></h2>\\n      </div>\\n    </div>\\n    <div class=\\\"d4\\\"></div>\\n    \\n  </div>\\n</body>\\n\\n</html>\\n\\n </template>\\n\";\n// Exports\nmodule.exports = code;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmh0bWw/MmY0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8dGVtcGxhdGU+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcblxcbjxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PXV0Zi04PlxcbiAgXFxuICAgIDx0aXRsZT5CZXRjb208L3RpdGxlPlxcbiAgICA8cmVxdWlyZSBmcm9tPVxcXCJhcHAuY3NzXFxcIj48L3JlcXVpcmU+XFxuPC9oZWFkPlxcblxcbjxib2R5PlxcbiAgPGRpdiBjbGFzcz1cXFwibWFpblxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImQxXFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZDJcXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkM1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxoMj48c3BhbiBjbGFzcz1cXFwid2VsY29tZVxcXCI+JHttZXNzYWdlfTwvc3Bhbj48L2gyPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZDRcXFwiPjwvZGl2PlxcbiAgICBcXG4gIDwvZGl2PlxcbjwvYm9keT5cXG5cXG48L2h0bWw+XFxuXFxuIDwvdGVtcGxhdGU+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///app.html\n");

/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony import */ var _config_environment_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/environment.json */ \"BEPO\");\nvar _config_environment_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/environment.json */ \"BEPO\", 1);\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ \"70NS\");\n\n\nfunction configure(aurelia) {\n  aurelia.use.standardConfiguration().feature('resources/index');\n  aurelia.use.developmentLogging(_config_environment_json__WEBPACK_IMPORTED_MODULE_0__[\"debug\"] ? 'debug' : 'warn');\n\n  if (_config_environment_json__WEBPACK_IMPORTED_MODULE_0__[\"testing\"]) {\n    aurelia.use.plugin('aurelia-testing');\n  }\n\n  aurelia.start().then(function () {\n    return aurelia.setRoot('app');\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZW52aXJvbm1lbnQgZnJvbSAnLi4vY29uZmlnL2Vudmlyb25tZW50Lmpzb24nO1xuaW1wb3J0IHtQTEFURk9STX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZmVhdHVyZShQTEFURk9STS5tb2R1bGVOYW1lKCdyZXNvdXJjZXMvaW5kZXgnKSk7XG5cbiAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKGVudmlyb25tZW50LmRlYnVnID8gJ2RlYnVnJyA6ICd3YXJuJyk7XG5cbiAgaWYgKGVudmlyb25tZW50LnRlc3RpbmcpIHtcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oUExBVEZPUk0ubW9kdWxlTmFtZSgnYXVyZWxpYS10ZXN0aW5nJykpO1xuICB9XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KFBMQVRGT1JNLm1vZHVsZU5hbWUoJ2FwcCcpKSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///main\n");

/***/ }),

/***/ "resources/index":
/*!********************************!*\
  !*** ./src/resources/index.js ***!
  \********************************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\nfunction configure(config) {//config.globalResources([]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9pbmRleC5qcz85NzVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnKSB7XG4gIC8vY29uZmlnLmdsb2JhbFJlc291cmNlcyhbXSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///resources/index\n");

/***/ })

},[[0,"runtime~app","vendors~2a42e354","vendors~0ba1d959","vendors~556c66f2","vendors~bdd45853","vendors~72fdf3f2","vendors~50e8d500","vendors~ecff2e3d","vendors~9e0f4621"]]]);
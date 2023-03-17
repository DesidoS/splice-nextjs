"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/socials";
exports.ids = ["pages/api/socials"];
exports.modules = {

/***/ "(api)/./pages/api/data/socials.js":
/*!***********************************!*\
  !*** ./pages/api/data/socials.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"socials\": () => (/* binding */ socials)\n/* harmony export */ });\nconst socials = [\n    {\n        id: 1,\n        icon: \"youtube\",\n        path: \"https://youtube.com/YauhenKavalchuk\"\n    },\n    {\n        id: 2,\n        icon: \"instagram\",\n        path: \"https://instagram.com/YauhenKavalchuk\"\n    },\n    {\n        id: 3,\n        icon: \"linkedin\",\n        path: \"https://linkedin.com/in/YauhenKavalchuk\"\n    },\n    {\n        id: 4,\n        icon: \"vk\",\n        path: \"https://vk.com/YauhenKavalchuk\"\n    },\n    {\n        id: 5,\n        icon: \"twitter\",\n        path: \"https://twitter.com/YauhenKavalchuk\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGF0YS9zb2NpYWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxVQUFVO0lBQ3JCO1FBQ0VDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0NBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtc2Vjb25kLXByb2plY3QvLi9wYWdlcy9hcGkvZGF0YS9zb2NpYWxzLmpzP2RmOTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNvY2lhbHMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBpY29uOiBcInlvdXR1YmVcIixcbiAgICBwYXRoOiBcImh0dHBzOi8veW91dHViZS5jb20vWWF1aGVuS2F2YWxjaHVrXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBpY29uOiBcImluc3RhZ3JhbVwiLFxuICAgIHBhdGg6IFwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL1lhdWhlbkthdmFsY2h1a1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaWNvbjogXCJsaW5rZWRpblwiLFxuICAgIHBhdGg6IFwiaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vWWF1aGVuS2F2YWxjaHVrXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBpY29uOiBcInZrXCIsXG4gICAgcGF0aDogXCJodHRwczovL3ZrLmNvbS9ZYXVoZW5LYXZhbGNodWtcIixcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIGljb246IFwidHdpdHRlclwiLFxuICAgIHBhdGg6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9ZYXVoZW5LYXZhbGNodWtcIixcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsic29jaWFscyIsImlkIiwiaWNvbiIsInBhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/data/socials.js\n");

/***/ }),

/***/ "(api)/./pages/api/socials.js":
/*!******************************!*\
  !*** ./pages/api/socials.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_socials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/socials */ \"(api)/./pages/api/data/socials.js\");\n\nfunction handler(req, res) {\n    console.log(req);\n    if (req.method === \"GET\") {\n        res.status(200).json(_data_socials__WEBPACK_IMPORTED_MODULE_0__.socials);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc29jaWFscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QztBQUUxQixTQUFTQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4Q0MsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLElBQUlBLElBQUlJLE1BQU0sS0FBSyxPQUFPO1FBQ3hCSCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUixrREFBT0E7SUFDOUIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWpzLXNlY29uZC1wcm9qZWN0Ly4vcGFnZXMvYXBpL3NvY2lhbHMuanM/Y2U1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzb2NpYWxzIH0gZnJvbSBcIi4vZGF0YS9zb2NpYWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc29sZS5sb2cocmVxKTtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihzb2NpYWxzKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInNvY2lhbHMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/socials.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/socials.js"));
module.exports = __webpack_exports__;

})();
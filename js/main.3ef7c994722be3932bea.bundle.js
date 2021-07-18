(self["webpackChunksurvey_kits"] = self["webpackChunksurvey_kits"] || []).push([[179],{

/***/ 785:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

;// CONCATENATED MODULE: ./src/js/data.js
/* harmony default export */ const data = ([{
  feature: "Virtual Click",
  status: "done",
  detail: "Use the keyboard instead of the left mouse button to click, which will save a lot of time in large surveys"
}, {
  feature: "Trap Detector",
  status: "done",
  detail: "Highlight Trap Question and increase survey pass rate"
}, {
  feature: "Prime-game Auto Play",
  status: "done",
  detail: "autoplay the Sentientprime"
}, {
  feature: "Virtual Webcam",
  status: "none",
  detail: "Some surveys require a webcam, if you don’t want to use your own webcam, this Feature can replace it"
}, {
  feature: "Auto fill it up",
  status: "none",
  detail: "auto fill up some of base information, like \"age\", \"liveing state\", \"DOB\"..."
}, {
  feature: "Surveys Filter",
  status: "none",
  detail: "Filter out some long-term and low credit surveys, such as 0.30 cents for 20 minutes"
}, {
  feature: "HSCN",
  status: "none",
  detail: "High-credit surveys notifications, set up notifications for some high-credit investigations about \"swagbucks\" and \"qmee\"..."
}]);
;// CONCATENATED MODULE: ./src/index.js



var bannerImage = __webpack_require__(291);

document.getElementById('bannerImage').src = bannerImage; //  添加features list

var $TBody = document.getElementById('featuresTBody');
var html = "";
data.map(function (item) {
  var color = item.status === 'done' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  html += "\n  <tr>\n    <td class=\"px-6 py-4 whitespace-no-wrap border-b border-gray-200\">".concat(item.feature, "</td>\n    <td class=\"px-6 py-4 whitespace-no-wrap border-b border-gray-200\">\n      <span class=\"px-2 inline-flex text-xs leading-5 font-semibold rounded-full ").concat(color, "\">").concat(item.status === 'done' ? 'done' : 'developing', "</span>\n    </td>\n    <td class=\"px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium\">").concat(item.detail, "</td>\n</tr>\n  ");
});
$TBody.innerHTML = html;

/***/ }),

/***/ 291:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/9f218e429ccda3ca0f88.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(785));
/******/ }
]);
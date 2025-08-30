/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("global", [], factory);
	else if(typeof exports === 'object')
		exports["global"] = factory();
	else
		root["global"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./animations/cms-buttons.js":
/*!***********************************!*\
  !*** ./animations/cms-buttons.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonHoverAnimationIn: () => (/* binding */ buttonHoverAnimationIn),\n/* harmony export */   buttonHoverAnimationOut: () => (/* binding */ buttonHoverAnimationOut),\n/* harmony export */   buttonsTextAnimation: () => (/* binding */ buttonsTextAnimation),\n/* harmony export */   cmsButtonsFunction: () => (/* binding */ cmsButtonsFunction),\n/* harmony export */   currentButton: () => (/* binding */ currentButton),\n/* harmony export */   currentButtonText: () => (/* binding */ currentButtonText),\n/* harmony export */   nextButton: () => (/* binding */ nextButton),\n/* harmony export */   nextButtonText: () => (/* binding */ nextButtonText)\n/* harmony export */ });\n\nlet currentButton = null;\nlet nextButton = null;\nlet currentButtonText = null;\nlet nextButtonText = null;\n// export let buttonHoverWrap = null;\n// export let buttonHoverEl = null;\n\nconst cmsButtonsFunction = function (activeIndex, nextIndex){\ncurrentButton = document.querySelector(`.button.slider[data-attribute=slide-0${activeIndex}]`)\nnextButton = document.querySelector(`.button.slider[data-attribute=slide-0${nextIndex}]`);\ncurrentButtonText = currentButton?.querySelector(\".button-text\") || null;\nnextButtonText = nextButton?.querySelector(\".button-text\") || null;\n}\n\nconst buttonsTextAnimation = function (activeIndex,nextIndex){\nconst tl4 = gsap.timeline({defaults: {duration: 0.8, ease: \"power2.inOut\"}});\ntl4.to(currentButtonText, {\n    y: -50,\n});\ntl4.fromTo(nextButtonText, {\n    visibility: \"visible\",\n    y:50\n}, {\n    y:0\n},\"<\")\n}\n//button hover trigger\n\n//button hover animation\nfunction buttonHoverAnimationIn (timeline, button){\n\nconst buttonHoverTL = gsap.timeline();\ntimeline.pause();\nbuttonHoverTL.fromTo(button.querySelector(\".button-hover\"), {visibility:\"visible\",y:\"150%\", scale:1}, {y:\"0%\", scale: 10},\"<\");\nbuttonHoverTL.to(document.querySelectorAll(\".button-text\"), {color: \"white\", duration:0.2}, \"<\");\n}\n\nfunction buttonHoverAnimationOut (timeline, button){\nconst buttonHoverTL = gsap.timeline();\ntimeline.play();\nbuttonHoverTL.to(button.querySelector(\".button-hover\"), {y:\"150%\", scale: 1});\nbuttonHoverTL.to(document.querySelectorAll(\".button-text\"), {color: \"black\", duration:0.2}, \"-=0.3\");\n}\n\n//# sourceURL=webpack://mask-slider/./animations/cms-buttons.js?\n}");

/***/ }),

/***/ "./animations/cursor.js":
/*!******************************!*\
  !*** ./animations/cursor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonElement: () => (/* binding */ buttonElement),\n/* harmony export */   setupMouse: () => (/* binding */ setupMouse)\n/* harmony export */ });\nlet buttonElement = document.querySelector(\".btn-element\");\nconst speed = 0.1;\n\n// Hover sticky elements\nfunction setupMouse(buttonWrap, buttonText){\n\nbuttonWrap.forEach(wrap => {\n    wrap.addEventListener(\"mouseleave\", ()=>{\n        if(buttonElement) buttonElement.style.visibility = \"hidden\";\n            target.x = current.x;\n            target.y = current.y;\n    })\nwrap.addEventListener(\"mousemove\", (e)=>{\n   //e - to track current mouse position\n    if(wrap.classList.contains(\"is-next\")){\n        mouseWrapHover(wrap,e,buttonText, \"Next\")\n    }\n    else {\n        mouseWrapHover(wrap,e,buttonText, \"Prev\")\n    };\n    \n})});\n\n}\n \n//mouse hover function\nconst target = {x:0,y:0};\nlet current = {x:0,y:0};\n const mouseWrapHover = function (wrap,e,buttonText,content){\n        buttonElement.style.visibility = \"visible\";\n        const elementWidth = buttonElement.offsetWidth; //offsetWidth - width of the element with all paddings and margins\n        const elementHeight = buttonElement.offsetHeight;    \n        // const rect = wrap.getBoundingClientRect();\n        target.x = e.clientX - elementWidth/2;\n        target.y = e.clientY - elementHeight/2;\n        if(buttonText.textContent !== content){\n            buttonText.textContent = content;\n        }\n        \n    }\n\n    function animate(){\n        current.x += (target.x - current.x)* speed;\n        current.y += (target.y - current.y)* speed;\n        buttonElement.style.left = current.x + \"px\";\n        buttonElement.style.top = current.y + \"px\";\n        requestAnimationFrame(animate);\n        }\n        animate();\n\n    // //we also need to get the whole size of each wrapper\n        // const wrapperWidth = rect.width;\n        // const wrapperHeight = rect.height;\n        // /*we need to compare if our value is greater than 0 and less than 1\n        // 1>num>0\n        // Math.max(num,0) - num>0?\n        // Math.min(num,1) - num<1?\n        // and get either our number if its insie the approved values, or max if the mouse goes to far right, or min if it overflows left wrapper\n        // */\n        // const clamp = (num,min,max) => Math.min(Math.max(num, min), max);\n        // //now we want to have a scale from 0 to 1, not pixels sizes\n        // const scaleLineX = clamp(targetX / wrapperWidth, 0,1);\n        // const scaleLineY = clamp(targetY / wrapperHeight, 0,1);\n\n//# sourceURL=webpack://mask-slider/./animations/cursor.js?\n}");

/***/ }),

/***/ "./animations/page-load.js":
/*!*********************************!*\
  !*** ./animations/page-load.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Load: () => (/* binding */ Load),\n/* harmony export */   pageLoadAnimation: () => (/* binding */ pageLoadAnimation)\n/* harmony export */ });\nconst loader = document.querySelector(\".loader\");\nconst loaderBG = loader.querySelector(\".loader-bg\");\nconst logoName = loader.querySelector(\".heading.m\");\nconst loaderText = loader.querySelectorAll(\".loader-content-text\")\n\nfunction pageLoadAnimation(onCompleteCallBack){\n    loader.style.visibility = \"visible\"\n    const pageLoadTL = gsap.timeline({defaults: {duration:1,ease: \"power1.out\"}});\npageLoadTL.fromTo(logoName,{opacity:0, x:\"-10%\"}, {opacity:1, x:\"0%\"});\npageLoadTL.fromTo(loaderText,{opacity:0, x:\"-10%\"}, {opacity:1, x:\"0%\"}, \"0.3\");\npageLoadTL.addLabel(\"fadeStart\", \"+=0.5\")\npageLoadTL.to(logoName, {opacity:0, x:\"10%\"}, \"fadeStart\" );\npageLoadTL.to(loaderText, {opacity:0, x:\"10%\"}, \"fadeStart+=0.2\" );\npageLoadTL.to(loaderBG,{y:\"100%\", duration: 1, ease: \"power4.inOut\", onComplete: ()=> {\n    loader.style.visibility = \"hidden\"\n}},\"-=0.3\"\n);\n\nif(onCompleteCallBack){\n    pageLoadTL.eventCallback(\"onComplete\", onCompleteCallBack);\n}\n}\n\nconst Load = {\n    loader,\n    loaderBG,\n    logoName,\n    loaderText,\n    pageLoadAnimation\n}\n\n//# sourceURL=webpack://mask-slider/./animations/page-load.js?\n}");

/***/ }),

/***/ "./animations/slide-index-state.js":
/*!*****************************************!*\
  !*** ./animations/slide-index-state.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GeneralIndex: () => (/* binding */ GeneralIndex)\n/* harmony export */ });\nlet generalActiveIndex = 0;\nlet generalNextIndex = 1;\nfunction updateSlideState(active, next){\ngeneralActiveIndex = active;\ngeneralNextIndex = next;\n}\nconst GeneralIndex = {\n    get generalActiveIndex(){\n        return generalActiveIndex;\n    },\n    get generalNextIndex(){\n        return generalNextIndex;\n    },\n    updateSlideState\n}\n\n//# sourceURL=webpack://mask-slider/./animations/slide-index-state.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.btn-wrap { cursor: pointer; }\n\n\n\n/*The mask is anchored at C (at 0% 100%).\n\n0deg starts along the positive X direction from C → towards D.\n\nThe wedge 0° to 90° is fully opaque (black) → slide visible here.\n\nAt 90° the mask suddenly becomes transparent, so anything beyond the diagonal toward A disappears.\n\nVisually:\n\nStart angle = 0°: The visible area is along C → D (bottom edge).\n\nAs it grows to 90°: The visible wedge sweeps C → D → B (right edge).\n\nAt exactly 90°: Everything up to C → B diagonal is visible.\n\nPast 90°: Nothing new is visible (the rest of the square stays masked out).\n\nSo you can imagine it like a rotating triangular “page reveal” with its pivot at C (bottom-left).*/`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mask-slider/./style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://mask-slider/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://mask-slider/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mask-slider/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mask-slider/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mask-slider/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mask-slider/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mask-slider/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mask-slider/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animations_cursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations/cursor.js */ \"./animations/cursor.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _animations_cms_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/cms-buttons.js */ \"./animations/cms-buttons.js\");\n/* harmony import */ var _animations_page_load_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations/page-load.js */ \"./animations/page-load.js\");\n/* harmony import */ var _animations_slide_index_state_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animations/slide-index-state.js */ \"./animations/slide-index-state.js\");\n // executes code in cursor.js\n\n\n\n\n\n//pageLoad animation\nwindow.addEventListener(\"load\", ()=> {\n  _animations_page_load_js__WEBPACK_IMPORTED_MODULE_3__.Load.pageLoadAnimation();\n})\n\nfunction initSlider (){\n\nlet buttonElement = document.querySelector(\".btn-element\");\nlet splitType = new SplitType(\".slider_cms_title\", {\n  types: \"lines\",\n  tagName: \"span\"\n});\n\n\n\n\ndocument.querySelectorAll(\".slider_cms_title .line\").forEach(line => {\n  let wrapper = document.createElement(\"div\");\n  wrapper.style.overflow = \"hidden\";\n  line.parentNode.insertBefore(wrapper,line);//line.parentNode - finds the parent of line element, insertbefore puts wrapper before the line element\n  wrapper.appendChild(line); // puts line element inside wrapper\n})\n// Select all .slider_wrap elements and iterate over them\ndocument.querySelectorAll(\".slider_wrap\").forEach(sliderWrap => {\n  let childArrow = sliderWrap.querySelectorAll(\".slider_btn\");\n  let childItems = sliderWrap.querySelectorAll(\".slider_cms_item\");\n  let childImage = sliderWrap.querySelectorAll(\".slider_cms_content\");\n  let childDots = sliderWrap.querySelectorAll(\".slider_dot_item\");\n  let childDotsClick = sliderWrap.querySelectorAll(\".slider_dot_click\");\n  let totalSlides = childItems.length;\n  let activeIndex = 0;\n  let buttonWrap = sliderWrap.querySelectorAll(\".btn-wrap\")\n  let buttonText = sliderWrap.querySelector(\".btn-text\")\n  const cmsButtons = document.querySelectorAll(\".button.slider\");\n  const backgroundVideo = document.querySelectorAll(\".slider_cms_video\");\n  // const buttonHoverWrap = document.querySelector(\".button-hover-wrap\");\n  // const buttonHoverEl = document.querySelector(\".button-hover\");\n  //button hover animation\n  // Hide all childItems initially\n  childItems.forEach(item => item.style.display = \"none\");\n  // Show first item\n  if (childItems[0]) childItems[0].style.display = \"flex\";\n  cmsButtons[0].style.visibility = \"visible\";\n//mouse animation\n(0,_animations_cursor_js__WEBPACK_IMPORTED_MODULE_0__.setupMouse)(buttonWrap,buttonText);\n\n  // gsap set for first dot line\n  if (childDots[0]) {\n    gsap.set(childDots[0].querySelector(\".slider_dot_line\"), { x: \"0%\" });\n    gsap.set(childDots[0], { width:\"5rem\",height:\"0.3rem\",borderRadius:\"15%\" });\n  }\n\n  // DOT LINES\n  let tl2 = gsap.timeline({ repeat: -1});\n  childDots.forEach((dot, index) => {\n    tl2.addLabel(`step${index}`);\n    tl2.to(dot.querySelector(\".slider_dot_line\"), {\n      scaleX: \"1.0\",\n      ease: \"none\",\n      duration: 5,\n      onComplete: () => {\n        goNext(index + 1);\n      }\n    });\n  });\n\n//button hover event listeners\ncmsButtons.forEach(button => {\n  button.addEventListener(\"mouseenter\", (e)=> {\n    const buttonHoverEl = e.currentTarget\n    ;(0,_animations_cms_buttons_js__WEBPACK_IMPORTED_MODULE_2__.buttonHoverAnimationIn)(tl2, buttonHoverEl);\n  }\n);\n});\ncmsButtons.forEach(button => {\n  button.addEventListener(\"mouseleave\", (e)=> {\n    const buttonHoverEl = e.currentTarget\n  ;(0,_animations_cms_buttons_js__WEBPACK_IMPORTED_MODULE_2__.buttonHoverAnimationOut)(tl2, buttonHoverEl);\n  });});\n\n//function to reset video\nconst resetVideo = function (index){\nconst currentVideo = backgroundVideo[index]?.querySelector(\"video\")\nif(currentVideo){\n    currentVideo.currentTime = 0;\n}\n}\n\n  // MAIN SLIDER CODE\n    let animating = false;  \n    function moveSlide(nextIndex, forwards) {\n    //genereal index update for button hover animation\n    _animations_slide_index_state_js__WEBPACK_IMPORTED_MODULE_4__.GeneralIndex.updateSlideState(activeIndex, nextIndex);\n    //button text animation\n    (0,_animations_cms_buttons_js__WEBPACK_IMPORTED_MODULE_2__.cmsButtonsFunction)(activeIndex, nextIndex);\n    if (animating) return;\n    animating = true;\n    //animation for dots\n    let tl3 = gsap.timeline();\n    tl3.set(childDots[nextIndex].querySelector(\".slider_dot_line\"), { x: \"0%\" });\n    tl3.to(childDots[nextIndex], { width: \"5rem\", height: \"0.3rem\", borderRadius: \"15%\"},);\n    tl3.to(childDots[activeIndex], {width:\"0.75rem\",height:\"0.75rem\", borderRadius: \"100%\"},\"<\")\n    tl3.fromTo(childDots[activeIndex].querySelector(\".slider_dot_line\"), { x: \"0%\" }, { x: \"100%\" },\"<\");\n    tl2.seek(`step${nextIndex}`);\n    let titleFrom = -400;\n    let titleDelay = \"<\";\n    if (forwards) {\n      titleFrom = 400;\n      titleDelay = \"<50%\";\n    }\n\n    //resetting all positions\n    childItems.forEach((item, i) => {\n        item.style.display = \"none\";\n        let img = item.querySelector(\".slider_cms_content\");\n        if (img) gsap.set(img, { scale: 1, transformOrigin: \"left bottom\",x:0,y:0,rotate:0,skewY:0 });\n        gsap.set(item, { x:0, skewY:0 });\n        \n    });\n    \n    \n    childItems[activeIndex].style.display = \"flex\";\n    childItems[nextIndex].style.display = \"flex\";\n    let tl = gsap.timeline({ defaults: { duration: 1, ease: \"power2.inOut\" } });\n    let nextItem = childItems[nextIndex];\n    let prevItem = childItems[activeIndex];\n    let prevImage = childItems[activeIndex].querySelector(\".slider_cms_content\");\n    let nextImage = childItems[nextIndex].querySelector(\".slider_cms_content\");\n    buttonElement.style.zIndex = 4;\n    \n\n    if (forwards) {\n    // Forward animation\n    prevItem.style.zIndex = 1;\n    nextItem.style.zIndex = 2;\n    (0,_animations_cms_buttons_js__WEBPACK_IMPORTED_MODULE_2__.buttonsTextAnimation)(activeIndex, nextIndex);\n    \n    // Set transform origins\n    prevItem.style.transformOrigin = \"bottom right\"; // current pivot\n    nextItem.style.transformOrigin = \"bottom left\"; // next slide pivot aligns diagonal\n    tl.call(()=> resetVideo(activeIndex));\n      tl.fromTo(nextImage,\n      { scale: 1.8,},\n      { scale: 1, duration: 0.8, ease: \"power1.inOut\",\n        },\n      \"<\"\n    );\n    // Animate the next slide mask\n     tl.fromTo(nextImage,\n      { scale: 1.8,  x: nextItem.offsetWidth, y: 0, rotate: 15 },\n      { scale: 1, x: 0, y: 0, rotate: 0, duration: 0.9, ease: \"power2.inOut\",\n      },\n      \"<\"\n    );\n\n    // Animate the previous image with fan effect\n    tl.fromTo(prevImage,\n      { scale: 1,},\n      { scale: 1.4,\n        duration: 0.8, ease: \"power2.inOut\" },\"<\"\n    );\n    \n     tl.fromTo(prevImage,\n      { x: 0, y:0},\n      { x: -prevItem.offsetWidth, y: \"10%\",\n        duration: 0.8, ease: \"power2.inOut\", \n      onComplete: () => { animating = false; }  },\"-=0.8\"\n    );\n    \n   \n\n} else {\n(0,_animations_cms_buttons_js__WEBPACK_IMPORTED_MODULE_2__.buttonsTextAnimation)(activeIndex, nextIndex);\n  prevItem.style.zIndex = 1;\n  nextItem.style.zIndex = 2;\n  nextImage.style.transformOrigin = \"bottom right\"; // next slide pivot aligns diagonal\n  prevImage.style.transformOrigin = \"bottom right\";\n  tl.call(()=> resetVideo(activeIndex));\n    tl.fromTo(nextImage,\n      { scale: 1.8,},\n      { scale: 1, duration: 0.8, ease: \"power1.inOut\",\n       },\n      \"<\"\n    );\n    // Animate the next slide mask\n     tl.fromTo(nextImage,\n      {  scale: 1.8,x: -nextItem.offsetWidth, y: 0,rotate: -15,},\n      {  scale:1,x: 0, y: 0, rotate: 0, duration: 0.9, ease: \"power2.inOut\",\n      },\n      \n      \"<\"\n    );\n    \n\n    // Animate the previous image with fan effect\n    tl.fromTo(prevImage,\n      { scale: 1,},\n      { scale: 1.4,\n        duration: 0.8, ease: \"power2.inOut\" },\"<\"\n    );\n    \n     tl.fromTo(prevImage,\n      { x: 0, y:0},\n      { x: prevItem.offsetWidth, y: \"10%\",\n        duration: 0.8, ease: \"power2.inOut\",\n       onComplete: () => { animating = false; } },\"-=0.8\"\n    );\n\n    \n}\n\n\n    // Animate characters inside slider_cms_title\n    let lines = nextItem.querySelectorAll(\".slider_cms_title .line\");\n    gsap.fromTo(\n  lines,\n  { \n    yPercent: titleFrom, \n    opacity: 0, \n    skewY: 20,\n  }, \n  { \n    yPercent: 0, \n    opacity: 1, \n    skewY: 0, \n    duration: 1.2, \n    ease: \"power3.out\" \n  },\"-=0.4\"\n);\n\n    activeIndex = nextIndex;\n  }\n\n  // ARROWS navigation\n  function goNext(num) {\n    let nextIndex = num;\n    if (nextIndex > totalSlides - 1) nextIndex = 0;\n    moveSlide(nextIndex, true);\n  }\n\n  buttonWrap.forEach(arrow => {\n    if (arrow.classList.contains(\"is-next\")) {\n      arrow.addEventListener(\"click\", () => {\n        goNext(activeIndex + 1);\n      });\n    }\n    if (arrow.classList.contains(\"is-prev\")) {\n      arrow.addEventListener(\"click\", () => {\n        let nextIndex = activeIndex - 1;\n        if (nextIndex < 0) nextIndex = totalSlides - 1;\n        moveSlide(nextIndex, false);\n      });\n    }\n  });\n\n  // CLICK OF DOTS\n  childDotsClick.forEach(dotClick => {\n    dotClick.addEventListener(\"click\", () => {\n      // find index of clicked dotClick relative to all dots\n      let dotIndex = Array.from(childDotsClick).indexOf(dotClick);\n      if (activeIndex > dotIndex) {\n        moveSlide(dotIndex, false);\n      } else if (activeIndex < dotIndex) {\n        moveSlide(dotIndex, true);\n      }\n    });\n  });\n});\n}\nwindow.addEventListener(\"load\", ()=> {\n  setTimeout(()=> {\n    initSlider();\n  }, 2900);\n})\n\n//# sourceURL=webpack://mask-slider/./script.js?\n}");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mask-slider/./style.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
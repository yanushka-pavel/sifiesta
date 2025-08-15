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
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("{let splitType = new SplitType(\".slider_cms_title\", {\n  types: \"words, chars\",\n  tagName: \"span\"\n});\n\n// Select all .slider_wrap elements and iterate over them\ndocument.querySelectorAll(\".slider_wrap\").forEach(sliderWrap => {\n  let childArrow = sliderWrap.querySelectorAll(\".slider_btn\");\n  let childItems = sliderWrap.querySelectorAll(\".slider_cms_item\");\n  let childDots = sliderWrap.querySelectorAll(\".slider_dot_item\");\n  let childDotsClick = sliderWrap.querySelectorAll(\".slider_dot_click\");\n  let totalSlides = childItems.length;\n  let activeIndex = 0;\n  let buttonWrap = sliderWrap.querySelectorAll(\".btn-wrap\")\n\n\n  // Hide all childItems initially\n  childItems.forEach(item => item.style.display = \"none\");\n  // Show first item\n  if (childItems[0]) childItems[0].style.display = \"flex\";\n\n\n// Hover sticky elements\n buttonWrap.forEach(wrap => {\nwrap.addEventListener(\"mousemove\", (e)=>{\n    let buttonElement;\n    if(wrap.classList.contains(\"is-next\")){\n        buttonElement = wrap.querySelector(\".is-next\");\n        buttonElement.style.visibility = \"visible\";\n        const elementWidth = buttonElement.offsetWidth; //offsetWidth - width of the element with all paddings and margins\n        const elementHeight = buttonElement.offsetHeight;    \n        const rect = wrap.getBoundingClientRect();\n        const Mx = e.clientX - rect.left - elementWidth/2;\n        const My = e.clientY - rect.top - elementHeight/2;\n        //we also need to get the whole size of each wrapper\n        const wrapperWidth = rect.width;\n        const wrapperHeight = rect.height;\n        /*we need to compare if our value is greater than 0 and less than 1\n        1>num>0\n        Math.max(num,0) - num>0?\n        Math.min(num,1) - num<1?\n        and get either our number if its insie the approved values, or max if the mouse goes to far right, or min if it overflows left wrapper\n        */\n        const clamp = (num,min,max) => Math.min(Math.max(num, min), max);\n        //now we want to have a scale from 0 to 1, not pixels sizes\n        const scaleLineX = clamp(Mx / wrapperWidth, 0,1);\n        const scaleLineY = clamp(My / wrapperHeight, 0,1);\n        buttonElement.style.left = scaleLineX * 100 + \"%\";\n        buttonElement.style.top = scaleLineY * 100 + \"%\";\n        wrap.addEventListener(\"mouseleave\", ()=>{\n            buttonElement.style.visibility = \"hidden\";\n        })\n    }\n})});\n\n  // gsap set for first dot line\n  if (childDots[0]) {\n    gsap.set(childDots[0].querySelector(\".slider_dot_line\"), { x: \"0%\" });\n  }\n\n  // DOT LINES\n  let tl2 = gsap.timeline({ repeat: -1 });\n  childDots.forEach((dot, index) => {\n    tl2.addLabel(`step${index}`);\n    tl2.to(dot.querySelector(\".slider_dot_line\"), {\n      scaleX: \"1.0\",\n      ease: \"none\",\n      duration: 5,\n      onComplete: () => {\n        goNext(index + 1);\n      }\n    });\n  });\n\n  // MAIN SLIDER CODE\n  function moveSlide(nextIndex, forwards) {\n    let tl3 = gsap.timeline();\n    tl3.set(childDots[nextIndex].querySelector(\".slider_dot_line\"), { x: \"0%\" });\n    tl3.fromTo(childDots[activeIndex].querySelector(\".slider_dot_line\"), { x: \"0%\" }, { x: \"100%\" });\n\n    tl2.seek(`step${nextIndex}`);\n\n    let titleFrom = -100;\n    let titleDelay = \"<\";\n    if (forwards) {\n      titleFrom = 100;\n      titleDelay = \"<50%\";\n    }\n\n    childItems.forEach(item => item.style.display = \"none\");\n    childItems[activeIndex].style.display = \"flex\";\n    childItems[nextIndex].style.display = \"flex\";\n\n    let tl = gsap.timeline({ defaults: { duration: 1, ease: \"power2.inOut\" } });\n    let nextItem = childItems[nextIndex];\n    let prevItem = childItems[activeIndex];\n\n    if (forwards) {\n      tl.fromTo(nextItem, \n        { clipPath: \"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)\" }, \n        { clipPath: \"polygon(0% 0%, 100% 0%, 100% 100%, -30% 100%)\" });\n      tl.fromTo(prevItem, \n        { clipPath: \"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)\" }, \n        { clipPath: \"polygon(0% 0%, 0% 0%, -30% 100%, 0% 100%)\" }, \"<\");\n    } else {\n      tl.fromTo(nextItem, \n        { clipPath: \"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)\" }, \n        { clipPath: \"polygon(0% 0%, 100% 0%, 130% 100%, 0% 100%)\" });\n      tl.fromTo(prevItem, \n        { clipPath: \"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)\" }, \n        { clipPath: \"polygon(100% 0%, 100% 0%, 100% 100%, 130% 100%)\" }, \"<\");\n    }\n\n    // Animate characters inside slider_cms_title\n    let chars = nextItem.querySelectorAll(\".slider_cms_title .char\");\n    gsap.fromTo(chars, { yPercent: titleFrom }, { yPercent: 0, stagger: 0.08 });\n\n    activeIndex = nextIndex;\n  }\n\n  // ARROWS navigation\n  function goNext(num) {\n    let nextIndex = num;\n    if (nextIndex > totalSlides - 1) nextIndex = 0;\n    moveSlide(nextIndex, true);\n  }\n\n//   buttonWrap(arrow => {\n//     if (arrow.classList.contains(\"is-next\")) {\n//       arrow.addEventListener(\"click\", () => {\n//         goNext(activeIndex + 1);\n//       });\n//     }\n//     if (arrow.classList.contains(\"is-prev\")) {\n//       arrow.addEventListener(\"click\", () => {\n//         let nextIndex = activeIndex - 1;\n//         if (nextIndex < 0) nextIndex = totalSlides - 1;\n//         moveSlide(nextIndex, false);\n//       });\n//     }\n//   });\n\n  // CLICK OF DOTS\n  childDotsClick.forEach(dotClick => {\n    dotClick.addEventListener(\"click\", () => {\n      // find index of clicked dotClick relative to all dots\n      let dotIndex = Array.from(childDotsClick).indexOf(dotClick);\n      if (activeIndex > dotIndex) {\n        moveSlide(dotIndex, false);\n      } else if (activeIndex < dotIndex) {\n        moveSlide(dotIndex, true);\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://mask-slider/./script.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
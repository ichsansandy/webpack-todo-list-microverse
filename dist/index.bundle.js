"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_todo_list_microverse"] = self["webpackChunkwebpack_todo_list_microverse"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Prompt&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --primary-color: #f0edd4;\r\n  --secondary-color: #f9fbe7;\r\n  --dark-color: #7d1515;\r\n  --highlight-color: #fea1a1;\r\n  --font-size: 17px;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: var(--dark-color);\r\n  font-family: 'Prompt', sans-serif;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  justify-items: center;\r\n  background-color: var(--primary-color);\r\n  padding: 20px;\r\n  user-select: none;\r\n}\r\n\r\n.container {\r\n  background-color: var(--secondary-color);\r\n  border-radius: 20px;\r\n  overflow: hidden;\r\n}\r\n\r\n.wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  font-size: var(--font-size);\r\n  padding: 20px 25px;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  box-sizing: border-box;\r\n  border: none;\r\n  border-bottom: 1px solid var(--primary-color);\r\n}\r\n\r\n.wrapper:hover {\r\n  outline: 1px solid var(--highlight-color);\r\n}\r\n\r\n.button {\r\n  justify-content: center;\r\n  background-color: var(--highlight-color);\r\n  color: var(--secondary-color);\r\n}\r\n\r\n.button:hover {\r\n  background-color: var(--dark-color);\r\n  cursor: pointer;\r\n}\r\n\r\n.list {\r\n  display: grid;\r\n  grid-template-columns: 1em auto;\r\n  gap: 0.5em;\r\n  margin-right: 12px;\r\n}\r\n\r\n.grab {\r\n  cursor: grab;\r\n}\r\n\r\n#task-input {\r\n  background-color: transparent;\r\n  font-style: italic;\r\n}\r\n\r\n#task-input:focus {\r\n  outline: none;\r\n}\r\n\r\n.icon {\r\n  color: var(--dark-color);\r\n  padding: 10px;\r\n}\r\n\r\n.icon:hover {\r\n  color: var(--highlight-color);\r\n}\r\n\r\n.dragging {\r\n  opacity: 0.5;\r\n  cursor: grabbing;\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n  color: gray;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n  z-index: -1;\r\n}\r\n\r\n.input {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: var(--font-size);\r\n  height: 25px;\r\n  padding: 10px;\r\n  resize: none;\r\n}\r\n\r\n.input::-webkit-scrollbar {\r\n  width: 0;\r\n}\r\n\r\n.fa-trash:hover {\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_loadTodoListCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadTodoListCard.js */ \"./src/modules/loadTodoListCard.js\");\n/* harmony import */ var _modules_savingData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/savingData.js */ \"./src/modules/savingData.js\");\n/* harmony import */ var _modules_addingFavico_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addingFavico.js */ \"./src/modules/addingFavico.js\");\n/* harmony import */ var _modules_reorderArrayBasedOnIndex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/reorderArrayBasedOnIndex.js */ \"./src/modules/reorderArrayBasedOnIndex.js\");\n/* harmony import */ var _modules_addNewTask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/addNewTask.js */ \"./src/modules/addNewTask.js\");\n\n\n\n\n\n\n\nlet todoList = [];\n\n// checked local storage\nconst savedData = JSON.parse(localStorage.getItem('todolist'));\n\nif (savedData) {\n  todoList = savedData;\n}\n\n//  render to html\n(0,_modules_loadTodoListCard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todoList);\n\n// clear all completed\nconst clearAllCompleted = document.querySelector('#clear-completed');\n\nclearAllCompleted.addEventListener('click', () => {\n  const savedData = JSON.parse(localStorage.getItem('todolist'));\n  if (savedData) {\n    todoList = savedData;\n  }\n  todoList = todoList.filter((list) => list.completed !== true);\n  (0,_modules_reorderArrayBasedOnIndex_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(todoList, todoList.length);\n  (0,_modules_savingData_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todoList);\n  (0,_modules_loadTodoListCard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todoList);\n});\n\n(0,_modules_addingFavico_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('https://cdn-icons-png.flaticon.com/512/1024/1024824.png');\n\nconst taskInput = document.querySelector('#task-input');\n\ntaskInput.addEventListener('keypress', (e) => {\n  if (e.key === 'Enter') {\n    // function add the input to the array\n    const savedData = JSON.parse(localStorage.getItem('todolist'));\n    if (savedData) {\n      todoList = savedData;\n    }\n    (0,_modules_addNewTask_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(taskInput.value, todoList);\n    taskInput.value = '';\n    (0,_modules_savingData_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todoList);\n    (0,_modules_loadTodoListCard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todoList);\n  }\n});\n\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./src/index.js?");

/***/ }),

/***/ "./src/modules/addNewTask.js":
/*!***********************************!*\
  !*** ./src/modules/addNewTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addNewTask)\n/* harmony export */ });\nfunction addNewTask(newTaskDesc, array) {\n  const newTask = {\n    description: newTaskDesc,\n    completed: false,\n    index: array.length + 1,\n  };\n\n  array.push(newTask);\n}\n\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./src/modules/addNewTask.js?");

/***/ }),

/***/ "./src/modules/addingFavico.js":
/*!*************************************!*\
  !*** ./src/modules/addingFavico.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setFavicons)\n/* harmony export */ });\nfunction setFavicons(favImg) {\n  const headTitle = document.querySelector('head');\n  const setFavicon = document.createElement('link');\n  setFavicon.setAttribute('rel', 'shortcut icon');\n  setFavicon.setAttribute('href', favImg);\n  headTitle.appendChild(setFavicon);\n}\n\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./src/modules/addingFavico.js?");

/***/ }),

/***/ "./src/modules/editTaskDescription.js":
/*!********************************************!*\
  !*** ./src/modules/editTaskDescription.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ editTaskDesc)\n/* harmony export */ });\nfunction editTaskDesc(newValue, array, index) {\n  array[index].description = newValue;\n}\n\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./src/modules/editTaskDescription.js?");

/***/ }),

/***/ "./src/modules/loadTodoListCard.js":
/*!*****************************************!*\
  !*** ./src/modules/loadTodoListCard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadTodoListCard)\n/* harmony export */ });\n/* harmony import */ var _savingData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savingData.js */ \"./src/modules/savingData.js\");\n/* harmony import */ var _updateCompleted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateCompleted.js */ \"./src/modules/updateCompleted.js\");\n/* harmony import */ var _reorderArrayBasedOnIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reorderArrayBasedOnIndex.js */ \"./src/modules/reorderArrayBasedOnIndex.js\");\n/* harmony import */ var _editTaskDescription_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTaskDescription.js */ \"./src/modules/editTaskDescription.js\");\n/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeTask.js */ \"./src/modules/removeTask.js\");\n\n\n\n\n\n\nfunction loadTodoListCard(arrayTodoList) {\n  function loopTodoElement(item) {\n    return `<li id=\"${item.index}\" class=\"wrapper task-item\" >\n                <span class=\"list ${item.completed === false ? '' : 'checked'}\"><input class=\"checkbox\" type=\"checkbox\" data-id=\"${item.index}\" ${item.completed === false ? '' : 'checked'} />\n                  <textarea class=\"input\" data-id=\"${item.index}\">${item.description}</textarea>\n                </span>\n                <span id=\"${item.index}-grab-icon\" class=\"grab\" draggable=\"true\"><i class=\"icon fas fa-grip-vertical\"></i></span>\n                <span id=\"${item.index}-delete-icon\" class=\"hidden remove-button\" data-id=\"${item.index}\" ><i class=\"icon fas fa-trash\"></i></span>\n            </li>`;\n  }\n\n  const listContainer = document.querySelector('.list-container');\n\n  listContainer.innerHTML = arrayTodoList.map((list) => loopTodoElement(list)).join('');\n\n  const textareaInputs = document.querySelectorAll('.input');\n\n  textareaInputs.forEach((input) => {\n    if (input.scrollHeight > 50) {\n      const height = input.scrollHeight;\n      input.style.height = `${height - 10}px`;\n    }\n\n    input.addEventListener('keyup', (e) => {\n      e.target.style.height = 'auto';\n      const height = e.target.scrollHeight;\n      e.target.style.height = `${height - 20}px`;\n      if (e.key === 'Enter') {\n        input.value = input.value.replace(/\\n/g, '');\n        const index = Number(input.getAttribute('data-id')) - 1;\n        (0,_editTaskDescription_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(input.value, arrayTodoList, index);\n        (0,_savingData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayTodoList);\n        loadTodoListCard(arrayTodoList);\n      }\n    });\n\n    const inputId = input.getAttribute('data-id');\n    const grabIcon = document.getElementById(`${inputId}-grab-icon`);\n    const deleteIcon = document.getElementById(`${inputId}-delete-icon`);\n\n    input.addEventListener('focusin', () => {\n      grabIcon.classList.add('hidden');\n      deleteIcon.classList.remove('hidden');\n    });\n\n    input.addEventListener('focusout', () => {\n      setTimeout(() => {\n        grabIcon.classList.remove('hidden');\n        deleteIcon.classList.add('hidden');\n      }, 400);\n    });\n  });\n\n  const removeButtons = document.querySelectorAll('.remove-button');\n\n  removeButtons.forEach((button) => {\n    button.addEventListener('click', () => {\n      const id = Number(button.getAttribute('data-id'));\n      arrayTodoList = (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(id, arrayTodoList);\n      (0,_reorderArrayBasedOnIndex_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arrayTodoList, arrayTodoList.length);\n      (0,_savingData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayTodoList);\n      loadTodoListCard(arrayTodoList);\n    });\n  });\n\n  const taskList = document.querySelectorAll('.task-item');\n  taskList.forEach((task) => {\n    task.addEventListener('dragstart', () => {\n      setTimeout(() => {\n        task.classList.add('dragging');\n      }, 0);\n    });\n\n    task.addEventListener('dragend', () => {\n      task.classList.remove('dragging');\n      (0,_reorderArrayBasedOnIndex_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arrayTodoList, arrayTodoList.length);\n      (0,_savingData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayTodoList);\n      loadTodoListCard(arrayTodoList);\n    });\n\n    const initSortableList = (e) => {\n      e.preventDefault();\n      document.body.style.cursor = 'grabbing';\n      const draggingItem = document.querySelector('.dragging');\n      const siblings = [...listContainer.querySelectorAll('.task-item:not(.dragging)')];\n      // eslint-disable-next-line max-len\n      const nextSibling = siblings.find((sibling) => e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2);\n      listContainer.insertBefore(draggingItem, nextSibling);\n    };\n\n    task.addEventListener('dragover', initSortableList);\n  });\n\n  // update array if checkbox checked\n  const checkboxes = document.querySelectorAll('.checkbox');\n\n  checkboxes.forEach((box) => {\n    box.addEventListener('change', () => {\n      const id = Number(box.getAttribute('data-id'));\n      (0,_updateCompleted_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id, arrayTodoList);\n      (0,_savingData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arrayTodoList);\n      loadTodoListCard(arrayTodoList);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./src/modules/loadTodoListCard.js?");

/***/ }),

/***/ "./src/modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeTask)\n/* harmony export */ });\nfunction removeTask(id, array) {\n  return array.filter((item) => item.index !== id);\n}\n\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./src/modules/removeTask.js?");

/***/ }),

/***/ "./src/modules/reorderArrayBasedOnIndex.js":
/*!*************************************************!*\
  !*** ./src/modules/reorderArrayBasedOnIndex.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reorder)\n/* harmony export */ });\nfunction reorder(arr, n) {\n  const taskList = document.querySelectorAll('.task-item');\n  const index = [];\n  taskList.forEach((task) => {\n    index.push(Number(task.id) - 1);\n  });\n\n  const temp = [...Array(n)];\n\n  // arr[i] should be present at index[i] index\n  for (let i = 0; i < n; i += 1) {\n    temp[i] = arr[index[i]];\n  }\n\n  // Copy temp[] to arr[]\n  for (let i = 0; i < n; i += 1) {\n    arr[i] = temp[i];\n    arr[i].index = i + 1;\n  }\n}\n\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./src/modules/reorderArrayBasedOnIndex.js?");

/***/ }),

/***/ "./src/modules/savingData.js":
/*!***********************************!*\
  !*** ./src/modules/savingData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ savingData)\n/* harmony export */ });\nfunction savingData(data) {\n  localStorage.setItem('todolist', JSON.stringify(data));\n}\n\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./src/modules/savingData.js?");

/***/ }),

/***/ "./src/modules/updateCompleted.js":
/*!****************************************!*\
  !*** ./src/modules/updateCompleted.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateCompleted)\n/* harmony export */ });\nfunction updateCompleted(inputId, array) {\n  array.map((item) => {\n    if (item.index === inputId) {\n      if (item.completed === false) {\n        item.completed = true;\n      } else {\n        item.completed = false;\n      }\n    }\n    return item;\n  });\n}\n\n\n//# sourceURL=webpack://webpack-todo-list-microverse/./src/modules/updateCompleted.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
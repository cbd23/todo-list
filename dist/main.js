/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 1rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nhtml, body {\n    height: 100%; \n    overflow: hidden;\n}\n\n#main-container {\n    height: 100vh;\n    display: flex;\n}\n\n#menu {\n    background-color: #373c3f;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n.projects-heading {\n    background-color: #373c3f;\n    color: whitesmoke;\n\n    border-radius: 8px;\n    margin: 20px 14px;\n    padding: 10px 20px;\n    font-size: 2rem;\n    font-weight: 700;\n\n    max-height: 50px;\n    flex: 1;\n}\n\nhr {\n    width: 90%;\n    align-self: center;\n}\n\n.project-list-item {\n    display: flex;\n    align-items: center;\n}\n\n.project-list-item-name {\n    background-color: #373c3f;\n    color: whitesmoke;\n\n    border-radius: 8px;\n    margin: 4px 14px;\n    padding: 10px 20px;\n    font-size: 1.3rem;\n\n    max-height: 50px;\n    flex: 3;\n    cursor: pointer;\n}\n\n.project-list-item-name:hover {\n    background-color: #444a4d;\n}\n\n.project-list-item-delete {\n    flex: 1;\n    height: 25px;\n\n    background-image: url(https://pret3nti0u5.github.io/To-Do-List/imgs/icons8-trash-1-dark.912351d015e21b5e38469d33950ebd1b.svg);\n    background-position: 50% 50%;\n    background-size: 25px;\n    background-repeat: no-repeat;\n\n    cursor: pointer;\n}\n\n.project-list-item-delete:hover {\n    transform: scale(1.5);\n    transition: .1s;\n}\n\n.add-project {\n    max-height: 50px;\n    border-radius: 8px;\n    margin: 20px 14px 20px auto;\n    padding: 10px 20px;\n\n    color: whitesmoke;\n    font-size: 1.2rem;\n    font-weight: 700;\n\n    display: flex;\n    justify-content: flex-end;\n    flex: 1;\n    cursor: pointer;\n}\n\n.plus-icon {\n    color: #ff2c4b;\n    font-size: 1.2rem;\n}\n\n.add-project:hover {\n    background-color: #444a4d;\n}\n\n.modal-one {\n    border: none;\n    background-color: #3f4447;\n    border-radius: 8px;\n    box-shadow: 0px 0px 2px whitesmoke;\n\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);  \n\n    width: 800px;\n    height: 500px;\n    padding: 50px;\n}\n\n.form-one {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 10px;\n    gap: 40px;\n}\n\n.project-name-container,\n.project-description-container {\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n}\n\nlabel,\ninput {\n    flex: 1;\n}\n\nlabel {\n    background-color: #3f4447;\n\n    font-size: 3.2rem;\n    font-weight: 700;\n    color: #d9dada;\n}\n\ninput[type='text'] {\n    all: unset;\n    background-color: hsl(200deg 6.21% 28.43%);\n\n    padding-left: 10px;\n    border-radius: 8px;\n    height: 3rem;\n    font-size: 2rem;\n    color: white;\n}\n\n.project-buttons-container {\n    min-width: fit-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n}\n\np.create-project,\np.cancel-project {\n    border-radius: 8px;\n    font-size: 1.5rem;\n    font-weight: 700;\n    color: white;\n\n    padding: 16px 20px;\n    min-width: fit-content;\n\n    text-align: center;\n    flex: 1;\n    cursor: pointer;\n}\n\np.create-project {\n    background-color: #00cd00;\n}\n\np.cancel-project {\n    background-color: #ff2c4b;\n}\n\n#content {\n    background-color: #2f3437;\n    flex: 3;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.selected-project-container {\n    display: flex;\n    flex-direction: row;\n\n    max-height: fit-content;\n    padding: 14px;\n    flex: 1;\n\n}\n.selected-project-leftside {\n    flex: 10\n}\n\n.selected-project-name {\n    background-color: #2f3437;\n\n    border-radius: 8px;\n    margin: 4px 14px;\n    padding: 6px 0px;\n\n    font-size: 3.2rem;\n    font-weight: 700;\n    color: #d9dada;\n}\n\n.selected-project-description {\n    background-color: #2f3437;\n    color: whitesmoke;\n\n    border-radius: 8px;\n    margin: 4px 14px;\n    padding: 10px 0px;\n    font-size: 1.3rem;\n\n    max-height: 50px;\n    flex: 1;\n    cursor: pointer;\n}\n\n.selected-project-rightside {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    \n    flex: 1\n}\n\n.selected-project-edit-text {    \n    color: whitesmoke;\n    font-size: 1rem;\n    height: fit-content;\n    flex: 1;\n    cursor: pointer;\n    margin-right: -26px;\n}\n\n.selected-project-edit-icon {\n    flex: 1;\n    height: 50px;\n\n    background-image: url(https://pret3nti0u5.github.io/To-Do-List/imgs/pen.f143f2542420df9040ba2f60576c01b4.svg);\n    background-position: 50% 50%;\n    background-size: 15px;\n    background-repeat: no-repeat;\n    cursor: pointer;\n}\n\n.selected-project-edit-icon:hover {\n    transform: scale(1.5);\n    transition: .1s;\n}\n\n.selected-project-todos {\n    /* border: 1px solid whitesmoke; */\n    padding: 14px;\n    flex: 8;\n}\n\n.todo-container {\n    border: 1px solid hsla(0,0%,100%,.4);\n\n    background-color: #2f3437;\n    color: whitesmoke;\n\n    border-radius: 8px;\n    margin: 14px;\n    padding: 20px;\n    gap: 10px;\n    font-size: 1.3rem;\n\n    max-height: 50px;\n    flex: 1;\n    cursor: pointer;\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.todo-checkbox {\n    width: 25px;\n    height: 25px;\n    border: 1px solid hsla(0,0%,100%,.4);\n    border-radius: 50%;\n    cursor: pointer;\n}\n\n.todo-name {\n    flex: 10;\n    width: 90%;\n    height: 25px;\n    padding: 2px;\n    border-radius: 8px;\n    cursor: pointer;\n}\n\n.todo-due-date {\n    width: fit-content;\n    flex: 1;\n}\n\n.todo-edit-icon {\n    flex: 1;\n    height: 25px;\n\n    background-image: url(https://pret3nti0u5.github.io/To-Do-List/imgs/pen.f143f2542420df9040ba2f60576c01b4.svg);\n    background-position: 50% 50%;\n    background-size: 15px;\n    background-repeat: no-repeat;\n}\n\n.todo-edit-icon:hover {\n    transform: scale(1.5);\n    transition: .1s;\n}\n\n.todo-delete-icon {\n    flex: 1;\n    height: 25px;\n\n    background-image: url(https://pret3nti0u5.github.io/To-Do-List/imgs/icons8-trash-1-dark.912351d015e21b5e38469d33950ebd1b.svg);\n    background-position: 50% 50%;\n    background-size: 25px;\n    background-repeat: no-repeat;\n}\n\n.todo-delete-icon:hover {\n    transform: scale(1.5);\n    transition: .1s;\n}\n\n.checked {\n    background-color: #7af76e;\n    background-image: url(https://pret3nti0u5.github.io/To-Do-List/imgs/tick.b899c6a3b2f518f6f26913e0336a903a.svg);\n    background-position: 50% 50%;\n    background-size: 15px;\n    background-repeat: no-repeat;\n}\n\n.add-task {    \n    max-width: fit-content;\n    max-height: 50px;\n    border-radius: 8px;\n    margin: 20px 14px 20px auto;\n    padding: 10px 20px;\n\n    color: whitesmoke;\n    font-size: 1.2rem;\n    font-weight: 700;\n\n    display: flex;\n    justify-content: flex-end;\n    flex: 1;\n    cursor: pointer;\n}\n\n.add-task:hover {\n    background-color: #444a4d;\n}\n\n.modal-two {\n    border: none;\n    background-color: #3f4447;\n    border-radius: 8px;\n    box-shadow: 0px 0px 2px whitesmoke;\n\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);  \n\n    width: 800px;\n    height: 500px;\n    padding: 50px;\n}\n\n.form-two {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 10px;\n    gap: 40px;\n}\n\n.todo-name-container,\n.todo-description-container {\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n}\n\ninput[type='date'] {\n    all: unset;\n    background-color: hsl(200deg 6.21% 28.43%);\n\n    padding: 10px;\n    border-radius: 8px;\n\n    width: fit-content;\n    height: 3rem;\n\n    font-size: 2rem;\n    color: #757575;\n    align-items: center;\n}\n\n.todo-buttons-container {\n    min-width: fit-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n}\n\np.create-todo,\np.cancel-todo {\n    border-radius: 8px;\n    font-size: 1.5rem;\n    font-weight: 700;\n    color: white;\n\n    padding: 16px 20px;\n    min-width: fit-content;\n\n    text-align: center;\n    flex: 1;\n    cursor: pointer;\n}\n\np.create-todo {\n    background-color: #00cd00;\n}\n\np.cancel-todo {\n    background-color: #ff2c4b;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_class_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/class-project.js */ \"./src/modules/class-project.js\");\n/* harmony import */ var _modules_class_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/class-todo */ \"./src/modules/class-todo.js\");\n\n\n\n\n\n// use an array to store all the projects displayed on the menu\nlet projectsListArr = [];\n\nlet projectName = document.getElementById('project-name');\nlet projectDescription = document.getElementById('project-description');\n\n\n// store the form-one in a let\nlet formOne = document.querySelector('.form-one');\n// store the modal-one in a let\nlet modalOne = document.querySelector('.modal-one');\n\n// event listener for the '+ Add project' btn that opens modal one\nconst addProject = document.querySelector('.add-project');\naddProject.addEventListener('pointerdown', () => {\n    modalOne.showModal();\n});\n\n// event listener for the 'Add project' btn that submits the form inside modal one\nlet createProjectBtn = document.querySelector('.create-project');\ncreateProjectBtn.addEventListener('pointerdown', () => {\n    console.log('createProjectBtn was pressed');\n    createProject();\n});\n\n// cancel modal one & reset the form\nconst cancelProject = document.querySelector('.cancel-project');\ncancelProject.addEventListener('pointerdown', () => {\n    modalOne.close();\n    formOne.reset();\n});\n\n\n// store the form-two in a let\nlet formTwo = document.querySelector('.form-two');\n//store the modal-two in a let\nlet modalTwo = document.querySelector('.modal-two');\n\n// event listener for the '+ Add task' btn that opens modal two\nconst addTask = document.querySelector('.add-task');\naddTask.addEventListener('pointerdown', () => {\n    modalTwo.showModal();\n});\n\n// cancel modal two & reset the form\nconst cancelTodo = document.querySelector('.cancel-todo');\ncancelTodo.addEventListener('pointerdown', () => {\n    modalTwo.close();\n    formTwo.reset();\n});\n\n// this fn creates the projects \n// (it pushes each obj to the array and appends the needed elements to the DOM)\n// it is called everytime the form one is submitted\nfunction createProject() {\n    let project = new _modules_class_project_js__WEBPACK_IMPORTED_MODULE_1__.Project(projectName.value, projectDescription.value, []);\n    projectsListArr.push(project);\n\n    // append elements needed to the DOM\n    let projectsList = document.querySelector('.projects-list');\n\n    let proejctListItem = document.createElement('div');\n    proejctListItem.classList.add('project-list-item');\n\n    let projectListItemName = document.createElement('div');\n    projectListItemName.classList.add('project-list-item-name');\n    projectListItemName.innerText = projectName.value;\n\n    let projectListItemDelete = document.createElement('div');\n    projectListItemDelete.classList.add('project-list-item-delete');\n\n    // each time a new project is created, the 'REMOVE PROJECT btn' gets an id \n    // equal to the project's index number in the projectsListArr\n    projectListItemDelete.id = projectsListArr.indexOf(project);\n\n    proejctListItem.appendChild(projectListItemName);\n    proejctListItem.appendChild(projectListItemDelete);\n    projectsList.appendChild(proejctListItem);\n\n    console.log(projectsListArr);\n    console.log(project);\n\n    modalOne.close();\n    formOne.reset();\n\n    // event listener for every 'REMOVE' btn from the menu\n    // it removes an object from the array that stores all projects & calls removeParent()\n    projectListItemDelete.addEventListener('pointerdown', () => {\n        projectsListArr.splice(projectListItemDelete.id, 1);\n\n        projectListItemDelete.id = 'badChild';\n\n        removeParent();\n    });\n};\n\n// this fn removes the div that displays the project's name on the menu from the DOM\nfunction removeParent() {\n    const badChild = document.getElementById('badChild');\n\n    if (badChild) {\n        const badParentElement = badChild.parentNode;\n        badParentElement.remove();\n    }\n};\n\n// each time a div Project is pressed, append the right elements to the DOM\n\n\n\n\n\n\n\n\n// date picker default\nconst today = new Date().toISOString().split('T')[0];\n\n// Set the default value of the date input to today's date\ndocument.getElementById('todo-due-date').value = today;\n\n// Set the minimum selectable date to today's date\ndocument.getElementById('todo-due-date').min = today;\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/class-project.js":
/*!**************************************!*\
  !*** ./src/modules/class-project.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n// class Project creates project objects\n\nclass Project {\n    constructor(name, description, todoList) {\n        this.name = name;\n        this.description = description;\n        this.todoList = todoList;\n    };\n};\n\n\n//# sourceURL=webpack://todo-list/./src/modules/class-project.js?");

/***/ }),

/***/ "./src/modules/class-todo.js":
/*!***********************************!*\
  !*** ./src/modules/class-todo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToDo: () => (/* binding */ ToDo)\n/* harmony export */ });\n // class Todo creates todo objects\n \n class ToDo {\n    constructor(name, dueDate, checked = false) {\n        this.name = name;\n        this.dueDate = dueDate;\n        this.checked = checked;\n    };\n};\n\n//# sourceURL=webpack://todo-list/./src/modules/class-todo.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
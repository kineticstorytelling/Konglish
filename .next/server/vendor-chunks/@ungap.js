"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@ungap";
exports.ids = ["vendor-chunks/@ungap"];
exports.modules = {

/***/ "(ssr)/./node_modules/@ungap/structured-clone/esm/deserialize.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/esm/deserialize.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deserialize: () => (/* binding */ deserialize)\n/* harmony export */ });\n/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ \"(ssr)/./node_modules/@ungap/structured-clone/esm/types.js\");\n\n\nconst env = typeof self === 'object' ? self : globalThis;\n\nconst deserializer = ($, _) => {\n  const as = (out, index) => {\n    $.set(index, out);\n    return out;\n  };\n\n  const unpair = index => {\n    if ($.has(index))\n      return $.get(index);\n\n    const [type, value] = _[index];\n    switch (type) {\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.PRIMITIVE:\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.VOID:\n        return as(value, index);\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY: {\n        const arr = as([], index);\n        for (const index of value)\n          arr.push(unpair(index));\n        return arr;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT: {\n        const object = as({}, index);\n        for (const [key, index] of value)\n          object[unpair(key)] = unpair(index);\n        return object;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.DATE:\n        return as(new Date(value), index);\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.REGEXP: {\n        const {source, flags} = value;\n        return as(new RegExp(source, flags), index);\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.MAP: {\n        const map = as(new Map, index);\n        for (const [key, index] of value)\n          map.set(unpair(key), unpair(index));\n        return map;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.SET: {\n        const set = as(new Set, index);\n        for (const index of value)\n          set.add(unpair(index));\n        return set;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.ERROR: {\n        const {name, message} = value;\n        return as(new env[name](message), index);\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.BIGINT:\n        return as(BigInt(value), index);\n      case 'BigInt':\n        return as(Object(BigInt(value)), index);\n    }\n    return as(new env[type](value), index);\n  };\n\n  return unpair;\n};\n\n/**\n * @typedef {Array<string,any>} Record a type representation\n */\n\n/**\n * Returns a deserialized value from a serialized array of Records.\n * @param {Record[]} serialized a previously serialized value.\n * @returns {any}\n */\nconst deserialize = serialized => deserializer(new Map, serialized)(0);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUvZXNtL2Rlc2VyaWFsaXplLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBS29COztBQUVwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxnREFBUztBQUNwQixXQUFXLDJDQUFJO0FBQ2Y7QUFDQSxXQUFXLDRDQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZDQUFNO0FBQ2pCLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkNBQUk7QUFDZjtBQUNBLFdBQVcsNkNBQU07QUFDakIsZUFBZSxlQUFlO0FBQzlCO0FBQ0E7QUFDQSxXQUFXLDBDQUFHO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMENBQUc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0Q0FBSztBQUNoQixlQUFlLGVBQWU7QUFDOUI7QUFDQTtBQUNBLFdBQVcsNkNBQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQzs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLGFBQWE7QUFDYjtBQUNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29uZ2xpc2gvLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUvZXNtL2Rlc2VyaWFsaXplLmpzPzJiYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgVk9JRCwgUFJJTUlUSVZFLFxuICBBUlJBWSwgT0JKRUNULFxuICBEQVRFLCBSRUdFWFAsIE1BUCwgU0VULFxuICBFUlJPUiwgQklHSU5UXG59IGZyb20gJy4vdHlwZXMuanMnO1xuXG5jb25zdCBlbnYgPSB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgPyBzZWxmIDogZ2xvYmFsVGhpcztcblxuY29uc3QgZGVzZXJpYWxpemVyID0gKCQsIF8pID0+IHtcbiAgY29uc3QgYXMgPSAob3V0LCBpbmRleCkgPT4ge1xuICAgICQuc2V0KGluZGV4LCBvdXQpO1xuICAgIHJldHVybiBvdXQ7XG4gIH07XG5cbiAgY29uc3QgdW5wYWlyID0gaW5kZXggPT4ge1xuICAgIGlmICgkLmhhcyhpbmRleCkpXG4gICAgICByZXR1cm4gJC5nZXQoaW5kZXgpO1xuXG4gICAgY29uc3QgW3R5cGUsIHZhbHVlXSA9IF9baW5kZXhdO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBQUklNSVRJVkU6XG4gICAgICBjYXNlIFZPSUQ6XG4gICAgICAgIHJldHVybiBhcyh2YWx1ZSwgaW5kZXgpO1xuICAgICAgY2FzZSBBUlJBWToge1xuICAgICAgICBjb25zdCBhcnIgPSBhcyhbXSwgaW5kZXgpO1xuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIHZhbHVlKVxuICAgICAgICAgIGFyci5wdXNoKHVucGFpcihpbmRleCkpO1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgfVxuICAgICAgY2FzZSBPQkpFQ1Q6IHtcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gYXMoe30sIGluZGV4KTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBpbmRleF0gb2YgdmFsdWUpXG4gICAgICAgICAgb2JqZWN0W3VucGFpcihrZXkpXSA9IHVucGFpcihpbmRleCk7XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICB9XG4gICAgICBjYXNlIERBVEU6XG4gICAgICAgIHJldHVybiBhcyhuZXcgRGF0ZSh2YWx1ZSksIGluZGV4KTtcbiAgICAgIGNhc2UgUkVHRVhQOiB7XG4gICAgICAgIGNvbnN0IHtzb3VyY2UsIGZsYWdzfSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gYXMobmV3IFJlZ0V4cChzb3VyY2UsIGZsYWdzKSwgaW5kZXgpO1xuICAgICAgfVxuICAgICAgY2FzZSBNQVA6IHtcbiAgICAgICAgY29uc3QgbWFwID0gYXMobmV3IE1hcCwgaW5kZXgpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIGluZGV4XSBvZiB2YWx1ZSlcbiAgICAgICAgICBtYXAuc2V0KHVucGFpcihrZXkpLCB1bnBhaXIoaW5kZXgpKTtcbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgIH1cbiAgICAgIGNhc2UgU0VUOiB7XG4gICAgICAgIGNvbnN0IHNldCA9IGFzKG5ldyBTZXQsIGluZGV4KTtcbiAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiB2YWx1ZSlcbiAgICAgICAgICBzZXQuYWRkKHVucGFpcihpbmRleCkpO1xuICAgICAgICByZXR1cm4gc2V0O1xuICAgICAgfVxuICAgICAgY2FzZSBFUlJPUjoge1xuICAgICAgICBjb25zdCB7bmFtZSwgbWVzc2FnZX0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIGFzKG5ldyBlbnZbbmFtZV0obWVzc2FnZSksIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGNhc2UgQklHSU5UOlxuICAgICAgICByZXR1cm4gYXMoQmlnSW50KHZhbHVlKSwgaW5kZXgpO1xuICAgICAgY2FzZSAnQmlnSW50JzpcbiAgICAgICAgcmV0dXJuIGFzKE9iamVjdChCaWdJbnQodmFsdWUpKSwgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gYXMobmV3IGVudlt0eXBlXSh2YWx1ZSksIGluZGV4KTtcbiAgfTtcblxuICByZXR1cm4gdW5wYWlyO1xufTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7QXJyYXk8c3RyaW5nLGFueT59IFJlY29yZCBhIHR5cGUgcmVwcmVzZW50YXRpb25cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBkZXNlcmlhbGl6ZWQgdmFsdWUgZnJvbSBhIHNlcmlhbGl6ZWQgYXJyYXkgb2YgUmVjb3Jkcy5cbiAqIEBwYXJhbSB7UmVjb3JkW119IHNlcmlhbGl6ZWQgYSBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdmFsdWUuXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5leHBvcnQgY29uc3QgZGVzZXJpYWxpemUgPSBzZXJpYWxpemVkID0+IGRlc2VyaWFsaXplcihuZXcgTWFwLCBzZXJpYWxpemVkKSgwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@ungap/structured-clone/esm/deserialize.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@ungap/structured-clone/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   deserialize: () => (/* reexport safe */ _deserialize_js__WEBPACK_IMPORTED_MODULE_0__.deserialize),\n/* harmony export */   serialize: () => (/* reexport safe */ _serialize_js__WEBPACK_IMPORTED_MODULE_1__.serialize)\n/* harmony export */ });\n/* harmony import */ var _deserialize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deserialize.js */ \"(ssr)/./node_modules/@ungap/structured-clone/esm/deserialize.js\");\n/* harmony import */ var _serialize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serialize.js */ \"(ssr)/./node_modules/@ungap/structured-clone/esm/serialize.js\");\n\n\n\n/**\n * @typedef {Array<string,any>} Record a type representation\n */\n\n/**\n * Returns an array of serialized Records.\n * @param {any} any a serializable value.\n * @param {{transfer?: any[], json?: boolean, lossy?: boolean}?} options an object with\n * a transfer option (ignored when polyfilled) and/or non standard fields that\n * fallback to the polyfill if present.\n * @returns {Record[]}\n */\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof structuredClone === \"function\" ?\n  /* c8 ignore start */\n  (any, options) => (\n    options && ('json' in options || 'lossy' in options) ?\n      (0,_deserialize_js__WEBPACK_IMPORTED_MODULE_0__.deserialize)((0,_serialize_js__WEBPACK_IMPORTED_MODULE_1__.serialize)(any, options)) : structuredClone(any)\n  ) :\n  (any, options) => (0,_deserialize_js__WEBPACK_IMPORTED_MODULE_0__.deserialize)((0,_serialize_js__WEBPACK_IMPORTED_MODULE_1__.serialize)(any, options)));\n  /* c8 ignore stop */\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBQ0o7O0FBRXpDO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixZQUFZLGtEQUFrRCxHQUFHO0FBQ2pFO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQVcsQ0FBQyx3REFBUztBQUMzQjtBQUNBLG9CQUFvQiw0REFBVyxDQUFDLHdEQUFTLGVBQWUsRUFBQztBQUN6RDs7QUFFZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb25nbGlzaC8uL25vZGVfbW9kdWxlcy9AdW5nYXAvc3RydWN0dXJlZC1jbG9uZS9lc20vaW5kZXguanM/ZDRjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Rlc2VyaWFsaXplfSBmcm9tICcuL2Rlc2VyaWFsaXplLmpzJztcbmltcG9ydCB7c2VyaWFsaXplfSBmcm9tICcuL3NlcmlhbGl6ZS5qcyc7XG5cbi8qKlxuICogQHR5cGVkZWYge0FycmF5PHN0cmluZyxhbnk+fSBSZWNvcmQgYSB0eXBlIHJlcHJlc2VudGF0aW9uXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIHNlcmlhbGl6ZWQgUmVjb3Jkcy5cbiAqIEBwYXJhbSB7YW55fSBhbnkgYSBzZXJpYWxpemFibGUgdmFsdWUuXG4gKiBAcGFyYW0ge3t0cmFuc2Zlcj86IGFueVtdLCBqc29uPzogYm9vbGVhbiwgbG9zc3k/OiBib29sZWFufT99IG9wdGlvbnMgYW4gb2JqZWN0IHdpdGhcbiAqIGEgdHJhbnNmZXIgb3B0aW9uIChpZ25vcmVkIHdoZW4gcG9seWZpbGxlZCkgYW5kL29yIG5vbiBzdGFuZGFyZCBmaWVsZHMgdGhhdFxuICogZmFsbGJhY2sgdG8gdGhlIHBvbHlmaWxsIGlmIHByZXNlbnQuXG4gKiBAcmV0dXJucyB7UmVjb3JkW119XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBzdHJ1Y3R1cmVkQ2xvbmUgPT09IFwiZnVuY3Rpb25cIiA/XG4gIC8qIGM4IGlnbm9yZSBzdGFydCAqL1xuICAoYW55LCBvcHRpb25zKSA9PiAoXG4gICAgb3B0aW9ucyAmJiAoJ2pzb24nIGluIG9wdGlvbnMgfHwgJ2xvc3N5JyBpbiBvcHRpb25zKSA/XG4gICAgICBkZXNlcmlhbGl6ZShzZXJpYWxpemUoYW55LCBvcHRpb25zKSkgOiBzdHJ1Y3R1cmVkQ2xvbmUoYW55KVxuICApIDpcbiAgKGFueSwgb3B0aW9ucykgPT4gZGVzZXJpYWxpemUoc2VyaWFsaXplKGFueSwgb3B0aW9ucykpO1xuICAvKiBjOCBpZ25vcmUgc3RvcCAqL1xuXG5leHBvcnQge2Rlc2VyaWFsaXplLCBzZXJpYWxpemV9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@ungap/structured-clone/esm/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@ungap/structured-clone/esm/serialize.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/esm/serialize.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   serialize: () => (/* binding */ serialize)\n/* harmony export */ });\n/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ \"(ssr)/./node_modules/@ungap/structured-clone/esm/types.js\");\n\n\nconst EMPTY = '';\n\nconst {toString} = {};\nconst {keys} = Object;\n\nconst typeOf = value => {\n  const type = typeof value;\n  if (type !== 'object' || !value)\n    return [_types_js__WEBPACK_IMPORTED_MODULE_0__.PRIMITIVE, type];\n\n  const asString = toString.call(value).slice(8, -1);\n  switch (asString) {\n    case 'Array':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY, EMPTY];\n    case 'Object':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT, EMPTY];\n    case 'Date':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.DATE, EMPTY];\n    case 'RegExp':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.REGEXP, EMPTY];\n    case 'Map':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.MAP, EMPTY];\n    case 'Set':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.SET, EMPTY];\n  }\n\n  if (asString.includes('Array'))\n    return [_types_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY, asString];\n\n  if (asString.includes('Error'))\n    return [_types_js__WEBPACK_IMPORTED_MODULE_0__.ERROR, asString];\n\n  return [_types_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT, asString];\n};\n\nconst shouldSkip = ([TYPE, type]) => (\n  TYPE === _types_js__WEBPACK_IMPORTED_MODULE_0__.PRIMITIVE &&\n  (type === 'function' || type === 'symbol')\n);\n\nconst serializer = (strict, json, $, _) => {\n\n  const as = (out, value) => {\n    const index = _.push(out) - 1;\n    $.set(value, index);\n    return index;\n  };\n\n  const pair = value => {\n    if ($.has(value))\n      return $.get(value);\n\n    let [TYPE, type] = typeOf(value);\n    switch (TYPE) {\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.PRIMITIVE: {\n        let entry = value;\n        switch (type) {\n          case 'bigint':\n            TYPE = _types_js__WEBPACK_IMPORTED_MODULE_0__.BIGINT;\n            entry = value.toString();\n            break;\n          case 'function':\n          case 'symbol':\n            if (strict)\n              throw new TypeError('unable to serialize ' + type);\n            entry = null;\n            break;\n          case 'undefined':\n            return as([_types_js__WEBPACK_IMPORTED_MODULE_0__.VOID], value);\n        }\n        return as([TYPE, entry], value);\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY: {\n        if (type)\n          return as([type, [...value]], value);\n  \n        const arr = [];\n        const index = as([TYPE, arr], value);\n        for (const entry of value)\n          arr.push(pair(entry));\n        return index;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT: {\n        if (type) {\n          switch (type) {\n            case 'BigInt':\n              return as([type, value.toString()], value);\n            case 'Boolean':\n            case 'Number':\n            case 'String':\n              return as([type, value.valueOf()], value);\n          }\n        }\n\n        if (json && ('toJSON' in value))\n          return pair(value.toJSON());\n\n        const entries = [];\n        const index = as([TYPE, entries], value);\n        for (const key of keys(value)) {\n          if (strict || !shouldSkip(typeOf(value[key])))\n            entries.push([pair(key), pair(value[key])]);\n        }\n        return index;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.DATE:\n        return as([TYPE, value.toISOString()], value);\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.REGEXP: {\n        const {source, flags} = value;\n        return as([TYPE, {source, flags}], value);\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.MAP: {\n        const entries = [];\n        const index = as([TYPE, entries], value);\n        for (const [key, entry] of value) {\n          if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry))))\n            entries.push([pair(key), pair(entry)]);\n        }\n        return index;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.SET: {\n        const entries = [];\n        const index = as([TYPE, entries], value);\n        for (const entry of value) {\n          if (strict || !shouldSkip(typeOf(entry)))\n            entries.push(pair(entry));\n        }\n        return index;\n      }\n    }\n\n    const {message} = value;\n    return as([TYPE, {name: type, message}], value);\n  };\n\n  return pair;\n};\n\n/**\n * @typedef {Array<string,any>} Record a type representation\n */\n\n/**\n * Returns an array of serialized Records.\n * @param {any} value a serializable value.\n * @param {{json?: boolean, lossy?: boolean}?} options an object with a `lossy` or `json` property that,\n *  if `true`, will not throw errors on incompatible types, and behave more\n *  like JSON stringify would behave. Symbol and Function will be discarded.\n * @returns {Record[]}\n */\n const serialize = (value, {json, lossy} = {}) => {\n  const _ = [];\n  return serializer(!(json || lossy), !!json, new Map, _)(value), _;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUvZXNtL3NlcmlhbGl6ZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUtvQjs7QUFFcEI7O0FBRUEsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sTUFBTTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdEQUFTOztBQUVyQjtBQUNBO0FBQ0E7QUFDQSxjQUFjLDRDQUFLO0FBQ25CO0FBQ0EsY0FBYyw2Q0FBTTtBQUNwQjtBQUNBLGNBQWMsMkNBQUk7QUFDbEI7QUFDQSxjQUFjLDZDQUFNO0FBQ3BCO0FBQ0EsY0FBYywwQ0FBRztBQUNqQjtBQUNBLGNBQWMsMENBQUc7QUFDakI7O0FBRUE7QUFDQSxZQUFZLDRDQUFLOztBQUVqQjtBQUNBLFlBQVksNENBQUs7O0FBRWpCLFVBQVUsNkNBQU07QUFDaEI7O0FBRUE7QUFDQSxXQUFXLGdEQUFTO0FBQ3BCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsZ0RBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQ0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLDRDQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNkNBQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywyQ0FBSTtBQUNmO0FBQ0EsV0FBVyw2Q0FBTTtBQUNqQixlQUFlLGVBQWU7QUFDOUIsMEJBQTBCLGNBQWM7QUFDeEM7QUFDQSxXQUFXLDBDQUFHO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMENBQUc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxTQUFTO0FBQ3BCLHNCQUFzQixvQkFBb0I7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsWUFBWSxnQ0FBZ0MsR0FBRztBQUMvQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsQ0FBUSwyQkFBMkIsYUFBYSxJQUFJO0FBQ3BEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tvbmdsaXNoLy4vbm9kZV9tb2R1bGVzL0B1bmdhcC9zdHJ1Y3R1cmVkLWNsb25lL2VzbS9zZXJpYWxpemUuanM/Nzk5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBWT0lELCBQUklNSVRJVkUsXG4gIEFSUkFZLCBPQkpFQ1QsXG4gIERBVEUsIFJFR0VYUCwgTUFQLCBTRVQsXG4gIEVSUk9SLCBCSUdJTlRcbn0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbmNvbnN0IEVNUFRZID0gJyc7XG5cbmNvbnN0IHt0b1N0cmluZ30gPSB7fTtcbmNvbnN0IHtrZXlzfSA9IE9iamVjdDtcblxuY29uc3QgdHlwZU9mID0gdmFsdWUgPT4ge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSAhPT0gJ29iamVjdCcgfHwgIXZhbHVlKVxuICAgIHJldHVybiBbUFJJTUlUSVZFLCB0eXBlXTtcblxuICBjb25zdCBhc1N0cmluZyA9IHRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKTtcbiAgc3dpdGNoIChhc1N0cmluZykge1xuICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgIHJldHVybiBbQVJSQVksIEVNUFRZXTtcbiAgICBjYXNlICdPYmplY3QnOlxuICAgICAgcmV0dXJuIFtPQkpFQ1QsIEVNUFRZXTtcbiAgICBjYXNlICdEYXRlJzpcbiAgICAgIHJldHVybiBbREFURSwgRU1QVFldO1xuICAgIGNhc2UgJ1JlZ0V4cCc6XG4gICAgICByZXR1cm4gW1JFR0VYUCwgRU1QVFldO1xuICAgIGNhc2UgJ01hcCc6XG4gICAgICByZXR1cm4gW01BUCwgRU1QVFldO1xuICAgIGNhc2UgJ1NldCc6XG4gICAgICByZXR1cm4gW1NFVCwgRU1QVFldO1xuICB9XG5cbiAgaWYgKGFzU3RyaW5nLmluY2x1ZGVzKCdBcnJheScpKVxuICAgIHJldHVybiBbQVJSQVksIGFzU3RyaW5nXTtcblxuICBpZiAoYXNTdHJpbmcuaW5jbHVkZXMoJ0Vycm9yJykpXG4gICAgcmV0dXJuIFtFUlJPUiwgYXNTdHJpbmddO1xuXG4gIHJldHVybiBbT0JKRUNULCBhc1N0cmluZ107XG59O1xuXG5jb25zdCBzaG91bGRTa2lwID0gKFtUWVBFLCB0eXBlXSkgPT4gKFxuICBUWVBFID09PSBQUklNSVRJVkUgJiZcbiAgKHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gJ3N5bWJvbCcpXG4pO1xuXG5jb25zdCBzZXJpYWxpemVyID0gKHN0cmljdCwganNvbiwgJCwgXykgPT4ge1xuXG4gIGNvbnN0IGFzID0gKG91dCwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IF8ucHVzaChvdXQpIC0gMTtcbiAgICAkLnNldCh2YWx1ZSwgaW5kZXgpO1xuICAgIHJldHVybiBpbmRleDtcbiAgfTtcblxuICBjb25zdCBwYWlyID0gdmFsdWUgPT4ge1xuICAgIGlmICgkLmhhcyh2YWx1ZSkpXG4gICAgICByZXR1cm4gJC5nZXQodmFsdWUpO1xuXG4gICAgbGV0IFtUWVBFLCB0eXBlXSA9IHR5cGVPZih2YWx1ZSk7XG4gICAgc3dpdGNoIChUWVBFKSB7XG4gICAgICBjYXNlIFBSSU1JVElWRToge1xuICAgICAgICBsZXQgZW50cnkgPSB2YWx1ZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSAnYmlnaW50JzpcbiAgICAgICAgICAgIFRZUEUgPSBCSUdJTlQ7XG4gICAgICAgICAgICBlbnRyeSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgICAgICAgIGlmIChzdHJpY3QpXG4gICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuYWJsZSB0byBzZXJpYWxpemUgJyArIHR5cGUpO1xuICAgICAgICAgICAgZW50cnkgPSBudWxsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgIHJldHVybiBhcyhbVk9JRF0sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXMoW1RZUEUsIGVudHJ5XSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgY2FzZSBBUlJBWToge1xuICAgICAgICBpZiAodHlwZSlcbiAgICAgICAgICByZXR1cm4gYXMoW3R5cGUsIFsuLi52YWx1ZV1dLCB2YWx1ZSk7XG4gIFxuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcyhbVFlQRSwgYXJyXSwgdmFsdWUpO1xuICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHZhbHVlKVxuICAgICAgICAgIGFyci5wdXNoKHBhaXIoZW50cnkpKTtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgICAgY2FzZSBPQkpFQ1Q6IHtcbiAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0JpZ0ludCc6XG4gICAgICAgICAgICAgIHJldHVybiBhcyhbdHlwZSwgdmFsdWUudG9TdHJpbmcoKV0sIHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ0Jvb2xlYW4nOlxuICAgICAgICAgICAgY2FzZSAnTnVtYmVyJzpcbiAgICAgICAgICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICAgICAgICAgIHJldHVybiBhcyhbdHlwZSwgdmFsdWUudmFsdWVPZigpXSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqc29uICYmICgndG9KU09OJyBpbiB2YWx1ZSkpXG4gICAgICAgICAgcmV0dXJuIHBhaXIodmFsdWUudG9KU09OKCkpO1xuXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcyhbVFlQRSwgZW50cmllc10sIHZhbHVlKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cyh2YWx1ZSkpIHtcbiAgICAgICAgICBpZiAoc3RyaWN0IHx8ICFzaG91bGRTa2lwKHR5cGVPZih2YWx1ZVtrZXldKSkpXG4gICAgICAgICAgICBlbnRyaWVzLnB1c2goW3BhaXIoa2V5KSwgcGFpcih2YWx1ZVtrZXldKV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICAgIGNhc2UgREFURTpcbiAgICAgICAgcmV0dXJuIGFzKFtUWVBFLCB2YWx1ZS50b0lTT1N0cmluZygpXSwgdmFsdWUpO1xuICAgICAgY2FzZSBSRUdFWFA6IHtcbiAgICAgICAgY29uc3Qge3NvdXJjZSwgZmxhZ3N9ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBhcyhbVFlQRSwge3NvdXJjZSwgZmxhZ3N9XSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgY2FzZSBNQVA6IHtcbiAgICAgICAgY29uc3QgZW50cmllcyA9IFtdO1xuICAgICAgICBjb25zdCBpbmRleCA9IGFzKFtUWVBFLCBlbnRyaWVzXSwgdmFsdWUpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIGVudHJ5XSBvZiB2YWx1ZSkge1xuICAgICAgICAgIGlmIChzdHJpY3QgfHwgIShzaG91bGRTa2lwKHR5cGVPZihrZXkpKSB8fCBzaG91bGRTa2lwKHR5cGVPZihlbnRyeSkpKSlcbiAgICAgICAgICAgIGVudHJpZXMucHVzaChbcGFpcihrZXkpLCBwYWlyKGVudHJ5KV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICAgIGNhc2UgU0VUOiB7XG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcyhbVFlQRSwgZW50cmllc10sIHZhbHVlKTtcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiB2YWx1ZSkge1xuICAgICAgICAgIGlmIChzdHJpY3QgfHwgIXNob3VsZFNraXAodHlwZU9mKGVudHJ5KSkpXG4gICAgICAgICAgICBlbnRyaWVzLnB1c2gocGFpcihlbnRyeSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7bWVzc2FnZX0gPSB2YWx1ZTtcbiAgICByZXR1cm4gYXMoW1RZUEUsIHtuYW1lOiB0eXBlLCBtZXNzYWdlfV0sIHZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gcGFpcjtcbn07XG5cbi8qKlxuICogQHR5cGVkZWYge0FycmF5PHN0cmluZyxhbnk+fSBSZWNvcmQgYSB0eXBlIHJlcHJlc2VudGF0aW9uXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIHNlcmlhbGl6ZWQgUmVjb3Jkcy5cbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBhIHNlcmlhbGl6YWJsZSB2YWx1ZS5cbiAqIEBwYXJhbSB7e2pzb24/OiBib29sZWFuLCBsb3NzeT86IGJvb2xlYW59P30gb3B0aW9ucyBhbiBvYmplY3Qgd2l0aCBhIGBsb3NzeWAgb3IgYGpzb25gIHByb3BlcnR5IHRoYXQsXG4gKiAgaWYgYHRydWVgLCB3aWxsIG5vdCB0aHJvdyBlcnJvcnMgb24gaW5jb21wYXRpYmxlIHR5cGVzLCBhbmQgYmVoYXZlIG1vcmVcbiAqICBsaWtlIEpTT04gc3RyaW5naWZ5IHdvdWxkIGJlaGF2ZS4gU3ltYm9sIGFuZCBGdW5jdGlvbiB3aWxsIGJlIGRpc2NhcmRlZC5cbiAqIEByZXR1cm5zIHtSZWNvcmRbXX1cbiAqL1xuIGV4cG9ydCBjb25zdCBzZXJpYWxpemUgPSAodmFsdWUsIHtqc29uLCBsb3NzeX0gPSB7fSkgPT4ge1xuICBjb25zdCBfID0gW107XG4gIHJldHVybiBzZXJpYWxpemVyKCEoanNvbiB8fCBsb3NzeSksICEhanNvbiwgbmV3IE1hcCwgXykodmFsdWUpLCBfO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@ungap/structured-clone/esm/serialize.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@ungap/structured-clone/esm/types.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/esm/types.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ARRAY: () => (/* binding */ ARRAY),\n/* harmony export */   BIGINT: () => (/* binding */ BIGINT),\n/* harmony export */   DATE: () => (/* binding */ DATE),\n/* harmony export */   ERROR: () => (/* binding */ ERROR),\n/* harmony export */   MAP: () => (/* binding */ MAP),\n/* harmony export */   OBJECT: () => (/* binding */ OBJECT),\n/* harmony export */   PRIMITIVE: () => (/* binding */ PRIMITIVE),\n/* harmony export */   REGEXP: () => (/* binding */ REGEXP),\n/* harmony export */   SET: () => (/* binding */ SET),\n/* harmony export */   VOID: () => (/* binding */ VOID)\n/* harmony export */ });\nconst VOID       = -1;\nconst PRIMITIVE  = 0;\nconst ARRAY      = 1;\nconst OBJECT     = 2;\nconst DATE       = 3;\nconst REGEXP     = 4;\nconst MAP        = 5;\nconst SET        = 6;\nconst ERROR      = 7;\nconst BIGINT     = 8;\n// export const SYMBOL = 9;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUvZXNtL3R5cGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29uZ2xpc2gvLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUvZXNtL3R5cGVzLmpzP2UwMjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFZPSUQgICAgICAgPSAtMTtcbmV4cG9ydCBjb25zdCBQUklNSVRJVkUgID0gMDtcbmV4cG9ydCBjb25zdCBBUlJBWSAgICAgID0gMTtcbmV4cG9ydCBjb25zdCBPQkpFQ1QgICAgID0gMjtcbmV4cG9ydCBjb25zdCBEQVRFICAgICAgID0gMztcbmV4cG9ydCBjb25zdCBSRUdFWFAgICAgID0gNDtcbmV4cG9ydCBjb25zdCBNQVAgICAgICAgID0gNTtcbmV4cG9ydCBjb25zdCBTRVQgICAgICAgID0gNjtcbmV4cG9ydCBjb25zdCBFUlJPUiAgICAgID0gNztcbmV4cG9ydCBjb25zdCBCSUdJTlQgICAgID0gODtcbi8vIGV4cG9ydCBjb25zdCBTWU1CT0wgPSA5O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@ungap/structured-clone/esm/types.js\n");

/***/ })

};
;
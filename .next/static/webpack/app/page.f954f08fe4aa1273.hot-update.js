"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/AnimatedTitle.tsx":
/*!******************************************!*\
  !*** ./src/components/AnimatedTitle.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AnimatedTitle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AnimatedTitle() {\n    _s();\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            if (step < 4) {\n                setStep(step + 1);\n            }\n        }, 1500);\n        return ()=>clearTimeout(timer);\n    }, [\n        step\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-24 flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative w-[600px]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                children: [\n                    step === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"text-5xl font-bold absolute\",\n                        style: {\n                            left: \"200px\"\n                        },\n                        initial: {\n                            opacity: 0\n                        },\n                        animate: {\n                            opacity: 1\n                        },\n                        exit: {\n                            x: -200,\n                            opacity: 0\n                        },\n                        transition: {\n                            duration: 0.8\n                        },\n                        children: \"Korean\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this),\n                    step >= 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-5xl font-bold absolute\",\n                        style: {\n                            left: \"150px\"\n                        },\n                        children: \"Ko\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this),\n                    step === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-5xl font-bold absolute\",\n                        style: {\n                            left: \"190px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                            initial: {\n                                opacity: 1\n                            },\n                            animate: {\n                                opacity: 0\n                            },\n                            transition: {\n                                duration: 0.5\n                            },\n                            children: \"rean\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this),\n                    step === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"text-5xl font-bold absolute\",\n                        style: {\n                            left: \"350px\"\n                        },\n                        initial: {\n                            opacity: 0,\n                            x: 100\n                        },\n                        animate: {\n                            opacity: 1,\n                            x: 0\n                        },\n                        transition: {\n                            duration: 0.5\n                        },\n                        children: \"English\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this),\n                    step === 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-5xl font-bold absolute\",\n                        style: {\n                            left: \"350px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                initial: {\n                                    opacity: 1\n                                },\n                                animate: {\n                                    opacity: 0\n                                },\n                                transition: {\n                                    duration: 0.5\n                                },\n                                children: \"E\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, this),\n                            \"nglish\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, this),\n                    step === 4 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"text-5xl font-bold absolute\",\n                        style: {\n                            left: \"350px\"\n                        },\n                        initial: {\n                            x: 0\n                        },\n                        animate: {\n                            x: -175\n                        },\n                        transition: {\n                            duration: 0.8,\n                            ease: \"easeInOut\"\n                        },\n                        children: \"nglish\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimatedTitle, \"NrA/6fXDv8xclF3w9SjbVQPSnu8=\");\n_c = AnimatedTitle;\nvar _c;\n$RefreshReg$(_c, \"AnimatedTitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkVGl0bGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dEO0FBQ1o7QUFFN0IsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVqQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNSSxRQUFRQyxXQUFXO1lBQ3ZCLElBQUlILE9BQU8sR0FBRztnQkFDWkMsUUFBUUQsT0FBTztZQUNqQjtRQUNGLEdBQUc7UUFFSCxPQUFPLElBQU1JLGFBQWFGO0lBQzVCLEdBQUc7UUFBQ0Y7S0FBSztJQUVULHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDViwwREFBZUE7O29CQUViSSxTQUFTLG1CQUNSLDhEQUFDTCxpREFBTUEsQ0FBQ1UsR0FBRzt3QkFDVEMsV0FBVTt3QkFDVkMsT0FBTzs0QkFBRUMsTUFBTTt3QkFBUTt3QkFDdkJDLFNBQVM7NEJBQUVDLFNBQVM7d0JBQUU7d0JBQ3RCQyxTQUFTOzRCQUFFRCxTQUFTO3dCQUFFO3dCQUN0QkUsTUFBTTs0QkFBRUMsR0FBRyxDQUFDOzRCQUFLSCxTQUFTO3dCQUFFO3dCQUM1QkksWUFBWTs0QkFBRUMsVUFBVTt3QkFBSTtrQ0FDN0I7Ozs7OztvQkFNRmYsUUFBUSxtQkFDUCw4REFBQ0s7d0JBQ0NDLFdBQVU7d0JBQ1ZDLE9BQU87NEJBQUVDLE1BQU07d0JBQVE7a0NBQ3hCOzs7Ozs7b0JBTUZSLFNBQVMsbUJBQ1IsOERBQUNLO3dCQUNDQyxXQUFVO3dCQUNWQyxPQUFPOzRCQUFFQyxNQUFNO3dCQUFRO2tDQUV2Qiw0RUFBQ2IsaURBQU1BLENBQUNxQixJQUFJOzRCQUNWUCxTQUFTO2dDQUFFQyxTQUFTOzRCQUFFOzRCQUN0QkMsU0FBUztnQ0FBRUQsU0FBUzs0QkFBRTs0QkFDdEJJLFlBQVk7Z0NBQUVDLFVBQVU7NEJBQUk7c0NBQzdCOzs7Ozs7Ozs7OztvQkFPSmYsU0FBUyxtQkFDUiw4REFBQ0wsaURBQU1BLENBQUNVLEdBQUc7d0JBQ1RDLFdBQVU7d0JBQ1ZDLE9BQU87NEJBQUVDLE1BQU07d0JBQVE7d0JBQ3ZCQyxTQUFTOzRCQUFFQyxTQUFTOzRCQUFHRyxHQUFHO3dCQUFJO3dCQUM5QkYsU0FBUzs0QkFBRUQsU0FBUzs0QkFBR0csR0FBRzt3QkFBRTt3QkFDNUJDLFlBQVk7NEJBQUVDLFVBQVU7d0JBQUk7a0NBQzdCOzs7Ozs7b0JBTUZmLFNBQVMsbUJBQ1IsOERBQUNLO3dCQUNDQyxXQUFVO3dCQUNWQyxPQUFPOzRCQUFFQyxNQUFNO3dCQUFROzswQ0FFdkIsOERBQUNiLGlEQUFNQSxDQUFDcUIsSUFBSTtnQ0FDVlAsU0FBUztvQ0FBRUMsU0FBUztnQ0FBRTtnQ0FDdEJDLFNBQVM7b0NBQUVELFNBQVM7Z0NBQUU7Z0NBQ3RCSSxZQUFZO29DQUFFQyxVQUFVO2dDQUFJOzBDQUM3Qjs7Ozs7OzRCQUVhOzs7Ozs7O29CQU1qQmYsU0FBUyxtQkFDUiw4REFBQ0wsaURBQU1BLENBQUNVLEdBQUc7d0JBQ1RDLFdBQVU7d0JBQ1ZDLE9BQU87NEJBQUVDLE1BQU07d0JBQVE7d0JBQ3ZCQyxTQUFTOzRCQUFFSSxHQUFHO3dCQUFFO3dCQUNoQkYsU0FBUzs0QkFBRUUsR0FBRyxDQUFDO3dCQUFJO3dCQUNuQkMsWUFBWTs0QkFBRUMsVUFBVTs0QkFBS0UsTUFBTTt3QkFBWTtrQ0FDaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQXZHd0JsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRpdGxlLnRzeD9jMGRkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRlZFRpdGxlKCkge1xuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoc3RlcCA8IDQpIHtcbiAgICAgICAgc2V0U3RlcChzdGVwICsgMSk7XG4gICAgICB9XG4gICAgfSwgMTUwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW3N0ZXBdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0yNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LVs2MDBweF1cIj5cbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICB7LyogU3RlcCAwOiBTaG93IFwiS29yZWFuXCIgKi99XG4gICAgICAgICAge3N0ZXAgPT09IDAgJiYgKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCBhYnNvbHV0ZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6ICcyMDBweCcgfX1cbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICBleGl0PXt7IHg6IC0yMDAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEtvcmVhblxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogS28gc3RheXMgZml4ZWQgKi99XG4gICAgICAgICAge3N0ZXAgPj0gMSAmJiAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgYWJzb2x1dGVcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiAnMTUwcHgnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEtvXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIFN0ZXAgMTogcmVhbiBmYWRlcyAqL31cbiAgICAgICAgICB7c3RlcCA9PT0gMSAmJiAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgYWJzb2x1dGVcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiAnMTkwcHgnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtb3Rpb24uc3BhblxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgcmVhblxuICAgICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHsvKiBTdGVwIDI6IFNob3cgRW5nbGlzaCAqL31cbiAgICAgICAgICB7c3RlcCA9PT0gMiAmJiAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgYWJzb2x1dGVcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiAnMzUwcHgnIH19XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogMTAwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRW5nbGlzaFxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogU3RlcCAzOiBFIGZhZGVzICovfVxuICAgICAgICAgIHtzdGVwID09PSAzICYmIChcbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCBhYnNvbHV0ZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6ICczNTBweCcgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFXG4gICAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgICAgICAgIG5nbGlzaFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHsvKiBTdGVwIDQ6IG5nbGlzaCBjb21iaW5lcyAqL31cbiAgICAgICAgICB7c3RlcCA9PT0gNCAmJiAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgYWJzb2x1dGVcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiAnMzUwcHgnIH19XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgeDogMCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IHg6IC0xNzUgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44LCBlYXNlOiBcImVhc2VJbk91dFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIG5nbGlzaFxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBbmltYXRlZFRpdGxlIiwic3RlcCIsInNldFN0ZXAiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImxlZnQiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJleGl0IiwieCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInNwYW4iLCJlYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AnimatedTitle.tsx\n"));

/***/ })

});
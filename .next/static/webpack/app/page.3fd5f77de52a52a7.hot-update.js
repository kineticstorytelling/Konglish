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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AnimatedTitle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AnimatedTitle() {\n    _s();\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            if (step < 4) {\n                setStep(step + 1);\n            }\n        }, 1500);\n        return ()=>clearTimeout(timer);\n    }, [\n        step\n    ]);\n    const KO_POSITION = \"calc(50% - 120px)\";\n    const ENGLISH_POSITION = \"calc(50% + 40px)\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n            mode: \"wait\",\n            children: [\n                step === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    className: \"text-5xl font-bold absolute\",\n                    style: {\n                        left: \"calc(50% - 70px)\"\n                    },\n                    initial: {\n                        opacity: 0\n                    },\n                    animate: {\n                        opacity: 1\n                    },\n                    exit: {\n                        opacity: 0\n                    },\n                    transition: {\n                        duration: 0.8,\n                        ease: \"easeInOut\"\n                    },\n                    children: \"Korean\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this),\n                step >= 1 && step <= 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    className: \"text-5xl font-bold absolute\",\n                    style: {\n                        left: KO_POSITION\n                    },\n                    initial: {\n                        opacity: step === 1 ? 0 : 1\n                    },\n                    animate: {\n                        opacity: 1\n                    },\n                    transition: {\n                        duration: 0.5\n                    },\n                    children: \"Ko\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this),\n                step === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    className: \"text-5xl font-bold absolute\",\n                    style: {\n                        left: \"calc(50% - 70px + 32px)\"\n                    },\n                    initial: {\n                        opacity: 1\n                    },\n                    animate: {\n                        opacity: 0\n                    },\n                    transition: {\n                        duration: 0.5\n                    },\n                    children: \"rean\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, this),\n                step === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    className: \"text-5xl font-bold absolute\",\n                    style: {\n                        left: ENGLISH_POSITION\n                    },\n                    initial: {\n                        opacity: 0\n                    },\n                    animate: {\n                        opacity: 1\n                    },\n                    transition: {\n                        duration: 0.5\n                    },\n                    children: \"English\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this),\n                step === 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-5xl font-bold absolute\",\n                    style: {\n                        left: ENGLISH_POSITION\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                            initial: {\n                                opacity: 1\n                            },\n                            animate: {\n                                opacity: 0\n                            },\n                            transition: {\n                                duration: 0.5\n                            },\n                            children: \"E\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this),\n                        \"nglish\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, this),\n                step === 4 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-5xl font-bold absolute\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                            className: \"flex\",\n                            style: {\n                                position: \"absolute\",\n                                left: KO_POSITION\n                            },\n                            children: \"Ko\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                            className: \"flex\",\n                            initial: {\n                                left: ENGLISH_POSITION\n                            },\n                            animate: {\n                                left: \"calc(50% - 70px + 32px)\"\n                            },\n                            transition: {\n                                duration: 0.8,\n                                ease: \"easeInOut\"\n                            },\n                            style: {\n                                position: \"absolute\"\n                            },\n                            children: \"nglish\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimatedTitle, \"NrA/6fXDv8xclF3w9SjbVQPSnu8=\");\n_c = AnimatedTitle;\nvar _c;\n$RefreshReg$(_c, \"AnimatedTitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkVGl0bGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dEO0FBQ1o7QUFFN0IsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVqQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNSSxRQUFRQyxXQUFXO1lBQ3ZCLElBQUlILE9BQU8sR0FBRztnQkFDWkMsUUFBUUQsT0FBTztZQUNqQjtRQUNGLEdBQUc7UUFFSCxPQUFPLElBQU1JLGFBQWFGO0lBQzVCLEdBQUc7UUFBQ0Y7S0FBSztJQUVULE1BQU1LLGNBQWM7SUFDcEIsTUFBTUMsbUJBQW1CO0lBRXpCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDWiwwREFBZUE7WUFBQ2EsTUFBSzs7Z0JBRW5CVCxTQUFTLG1CQUNSLDhEQUFDTCxpREFBTUEsQ0FBQ1ksR0FBRztvQkFDVEMsV0FBVTtvQkFDVkUsT0FBTzt3QkFBRUMsTUFBTTtvQkFBbUI7b0JBQ2xDQyxTQUFTO3dCQUFFQyxTQUFTO29CQUFFO29CQUN0QkMsU0FBUzt3QkFBRUQsU0FBUztvQkFBRTtvQkFDdEJFLE1BQU07d0JBQUVGLFNBQVM7b0JBQUU7b0JBQ25CRyxZQUFZO3dCQUFFQyxVQUFVO3dCQUFLQyxNQUFNO29CQUFZOzhCQUNoRDs7Ozs7O2dCQU1EbEIsUUFBUSxLQUFLQSxRQUFRLG1CQUNyQiw4REFBQ0wsaURBQU1BLENBQUNZLEdBQUc7b0JBQ1RDLFdBQVU7b0JBQ1ZFLE9BQU87d0JBQUVDLE1BQU1OO29CQUFZO29CQUMzQk8sU0FBUzt3QkFBRUMsU0FBU2IsU0FBUyxJQUFJLElBQUk7b0JBQUU7b0JBQ3ZDYyxTQUFTO3dCQUFFRCxTQUFTO29CQUFFO29CQUN0QkcsWUFBWTt3QkFBRUMsVUFBVTtvQkFBSTs4QkFDN0I7Ozs7OztnQkFNRmpCLFNBQVMsbUJBQ1IsOERBQUNMLGlEQUFNQSxDQUFDWSxHQUFHO29CQUNUQyxXQUFVO29CQUNWRSxPQUFPO3dCQUFFQyxNQUFNO29CQUEwQjtvQkFDekNDLFNBQVM7d0JBQUVDLFNBQVM7b0JBQUU7b0JBQ3RCQyxTQUFTO3dCQUFFRCxTQUFTO29CQUFFO29CQUN0QkcsWUFBWTt3QkFBRUMsVUFBVTtvQkFBSTs4QkFDN0I7Ozs7OztnQkFNRmpCLFNBQVMsbUJBQ1IsOERBQUNMLGlEQUFNQSxDQUFDWSxHQUFHO29CQUNUQyxXQUFVO29CQUNWRSxPQUFPO3dCQUFFQyxNQUFNTDtvQkFBaUI7b0JBQ2hDTSxTQUFTO3dCQUFFQyxTQUFTO29CQUFFO29CQUN0QkMsU0FBUzt3QkFBRUQsU0FBUztvQkFBRTtvQkFDdEJHLFlBQVk7d0JBQUVDLFVBQVU7b0JBQUk7OEJBQzdCOzs7Ozs7Z0JBTUZqQixTQUFTLG1CQUNSLDhEQUFDTztvQkFBSUMsV0FBVTtvQkFBOEJFLE9BQU87d0JBQUVDLE1BQU1MO29CQUFpQjs7c0NBQzNFLDhEQUFDWCxpREFBTUEsQ0FBQ3dCLElBQUk7NEJBQ1ZQLFNBQVM7Z0NBQUVDLFNBQVM7NEJBQUU7NEJBQ3RCQyxTQUFTO2dDQUFFRCxTQUFTOzRCQUFFOzRCQUN0QkcsWUFBWTtnQ0FBRUMsVUFBVTs0QkFBSTtzQ0FDN0I7Ozs7Ozt3QkFFYTs7Ozs7OztnQkFNakJqQixTQUFTLG1CQUNSLDhEQUFDTztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNiLGlEQUFNQSxDQUFDWSxHQUFHOzRCQUNUQyxXQUFVOzRCQUNWRSxPQUFPO2dDQUFFVSxVQUFVO2dDQUFZVCxNQUFNTjs0QkFBWTtzQ0FDbEQ7Ozs7OztzQ0FHRCw4REFBQ1YsaURBQU1BLENBQUNZLEdBQUc7NEJBQ1RDLFdBQVU7NEJBQ1ZJLFNBQVM7Z0NBQUVELE1BQU1MOzRCQUFpQjs0QkFDbENRLFNBQVM7Z0NBQUVILE1BQU07NEJBQTBCOzRCQUMzQ0ssWUFBWTtnQ0FBRUMsVUFBVTtnQ0FBS0MsTUFBTTs0QkFBWTs0QkFDL0NSLE9BQU87Z0NBQUVVLFVBQVU7NEJBQVc7c0NBQy9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBN0d3QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkVGl0bGUudHN4P2MwZGQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hdGVkVGl0bGUoKSB7XG4gIGNvbnN0IFtzdGVwLCBzZXRTdGVwXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChzdGVwIDwgNCkge1xuICAgICAgICBzZXRTdGVwKHN0ZXAgKyAxKTtcbiAgICAgIH1cbiAgICB9LCAxNTAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbc3RlcF0pO1xuXG4gIGNvbnN0IEtPX1BPU0lUSU9OID0gJ2NhbGMoNTAlIC0gMTIwcHgpJztcbiAgY29uc3QgRU5HTElTSF9QT1NJVElPTiA9ICdjYWxjKDUwJSArIDQwcHgpJztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0yNFwiPlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPVwid2FpdFwiPlxuICAgICAgICB7LyogU3RlcCAwOiBTaG93IEtvcmVhbiAqL31cbiAgICAgICAge3N0ZXAgPT09IDAgJiYgKFxuICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1ib2xkIGFic29sdXRlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6ICdjYWxjKDUwJSAtIDcwcHgpJyB9fVxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44LCBlYXNlOiBcImVhc2VJbk91dFwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgS29yZWFuXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBLbyBzdGF5cyBmaXhlZCAqL31cbiAgICAgICAgeyhzdGVwID49IDEgJiYgc3RlcCA8PSAzKSAmJiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgYWJzb2x1dGVcIlxuICAgICAgICAgICAgc3R5bGU9e3sgbGVmdDogS09fUE9TSVRJT04gfX1cbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogc3RlcCA9PT0gMSA/IDAgOiAxIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEtvXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBTdGVwIDE6IHJlYW4gZmFkZXMgKi99XG4gICAgICAgIHtzdGVwID09PSAxICYmIChcbiAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCBhYnNvbHV0ZVwiXG4gICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiAnY2FsYyg1MCUgLSA3MHB4ICsgMzJweCknIH19XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgcmVhblxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogU3RlcCAyOiBTaG93IEVuZ2xpc2ggKi99XG4gICAgICAgIHtzdGVwID09PSAyICYmIChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1ib2xkIGFic29sdXRlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IEVOR0xJU0hfUE9TSVRJT04gfX1cbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBFbmdsaXNoXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBTdGVwIDM6IEUgZmFkZXMgKi99XG4gICAgICAgIHtzdGVwID09PSAzICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCBhYnNvbHV0ZVwiIHN0eWxlPXt7IGxlZnQ6IEVOR0xJU0hfUE9TSVRJT04gfX0+XG4gICAgICAgICAgICA8bW90aW9uLnNwYW5cbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRVxuICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgIG5nbGlzaFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBTdGVwIDQ6IEZpbmFsIEtvbmdsaXNoICovfVxuICAgICAgICB7c3RlcCA9PT0gNCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgYWJzb2x1dGVcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXhcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogS09fUE9TSVRJT04gfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgS29cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXhcIlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IGxlZnQ6IEVOR0xJU0hfUE9TSVRJT04gfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBsZWZ0OiAnY2FsYyg1MCUgLSA3MHB4ICsgMzJweCknIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCwgZWFzZTogXCJlYXNlSW5PdXRcIiB9fVxuICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBuZ2xpc2hcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQW5pbWF0ZWRUaXRsZSIsInN0ZXAiLCJzZXRTdGVwIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiS09fUE9TSVRJT04iLCJFTkdMSVNIX1BPU0lUSU9OIiwiZGl2IiwiY2xhc3NOYW1lIiwibW9kZSIsInN0eWxlIiwibGVmdCIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwic3BhbiIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AnimatedTitle.tsx\n"));

/***/ })

});
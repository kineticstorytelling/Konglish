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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AnimatedTitle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AnimatedTitle() {\n    _s();\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            if (step < 4) {\n                setStep(step + 1);\n            }\n        }, 1500);\n        return ()=>clearTimeout(timer);\n    }, [\n        step\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-24 flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n            mode: \"wait\",\n            children: [\n                step === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    className: \"text-5xl font-bold absolute\",\n                    initial: {\n                        opacity: 0\n                    },\n                    animate: {\n                        opacity: 1\n                    },\n                    exit: {\n                        opacity: 0\n                    },\n                    transition: {\n                        duration: 0.8,\n                        ease: \"easeInOut\"\n                    },\n                    children: \"Korean\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, this),\n                step >= 1 && step <= 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-5xl font-bold absolute flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                width: \"120px\",\n                                display: \"flex\",\n                                justifyContent: \"flex-end\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                initial: step === 1 ? {\n                                    x: 60\n                                } : {\n                                    x: 0\n                                },\n                                animate: {\n                                    x: 0\n                                },\n                                transition: {\n                                    duration: 0.8,\n                                    ease: \"easeInOut\"\n                                },\n                                children: \"Ko\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this),\n                        step === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                            initial: {\n                                opacity: 1\n                            },\n                            animate: {\n                                opacity: 0\n                            },\n                            transition: {\n                                duration: 0.5\n                            },\n                            children: \"rean\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        }, this),\n                        step === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                            initial: {\n                                opacity: 0,\n                                x: 0\n                            },\n                            animate: {\n                                opacity: 1,\n                                x: 60\n                            },\n                            transition: {\n                                duration: 0.8,\n                                ease: \"easeInOut\"\n                            },\n                            style: {\n                                marginLeft: \"20px\"\n                            },\n                            children: \"English\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, this),\n                        step === 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                            style: {\n                                marginLeft: \"80px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                    initial: {\n                                        opacity: 1\n                                    },\n                                    animate: {\n                                        opacity: 0\n                                    },\n                                    transition: {\n                                        duration: 0.5\n                                    },\n                                    children: \"E\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 17\n                                }, this),\n                                \"nglish\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, this),\n                step === 4 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    className: \"text-5xl font-bold absolute\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                            initial: {\n                                x: -60\n                            },\n                            animate: {\n                                x: 0\n                            },\n                            transition: {\n                                duration: 0.8,\n                                ease: \"easeInOut\"\n                            },\n                            children: \"Ko\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                            initial: {\n                                opacity: 1,\n                                x: 60\n                            },\n                            animate: {\n                                x: 0\n                            },\n                            transition: {\n                                duration: 0.8,\n                                ease: \"easeInOut\"\n                            },\n                            children: \"nglish\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimatedTitle, \"NrA/6fXDv8xclF3w9SjbVQPSnu8=\");\n_c = AnimatedTitle;\nvar _c;\n$RefreshReg$(_c, \"AnimatedTitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkVGl0bGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dEO0FBQ1o7QUFFN0IsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVqQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNSSxRQUFRQyxXQUFXO1lBQ3ZCLElBQUlILE9BQU8sR0FBRztnQkFDWkMsUUFBUUQsT0FBTztZQUNqQjtRQUNGLEdBQUc7UUFFSCxPQUFPLElBQU1JLGFBQWFGO0lBQzVCLEdBQUc7UUFBQ0Y7S0FBSztJQUVULHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDViwwREFBZUE7WUFBQ1csTUFBSzs7Z0JBRW5CUCxTQUFTLG1CQUNSLDhEQUFDTCxpREFBTUEsQ0FBQ1UsR0FBRztvQkFDVEMsV0FBVTtvQkFDVkUsU0FBUzt3QkFBRUMsU0FBUztvQkFBRTtvQkFDdEJDLFNBQVM7d0JBQUVELFNBQVM7b0JBQUU7b0JBQ3RCRSxNQUFNO3dCQUFFRixTQUFTO29CQUFFO29CQUNuQkcsWUFBWTt3QkFBRUMsVUFBVTt3QkFBS0MsTUFBTTtvQkFBWTs4QkFDaEQ7Ozs7OztnQkFNRGQsUUFBUSxLQUFLQSxRQUFRLG1CQUNyQiw4REFBQ0s7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSVUsT0FBTztnQ0FBRUMsT0FBTztnQ0FBU0MsU0FBUztnQ0FBUUMsZ0JBQWdCOzRCQUFXO3NDQUN4RSw0RUFBQ3ZCLGlEQUFNQSxDQUFDVSxHQUFHO2dDQUNURyxTQUFTUixTQUFTLElBQUk7b0NBQUVtQixHQUFHO2dDQUFHLElBQUk7b0NBQUVBLEdBQUc7Z0NBQUU7Z0NBQ3pDVCxTQUFTO29DQUFFUyxHQUFHO2dDQUFFO2dDQUNoQlAsWUFBWTtvQ0FBRUMsVUFBVTtvQ0FBS0MsTUFBTTtnQ0FBWTswQ0FDaEQ7Ozs7Ozs7Ozs7O3dCQUtGZCxTQUFTLG1CQUNSLDhEQUFDTCxpREFBTUEsQ0FBQ1UsR0FBRzs0QkFDVEcsU0FBUztnQ0FBRUMsU0FBUzs0QkFBRTs0QkFDdEJDLFNBQVM7Z0NBQUVELFNBQVM7NEJBQUU7NEJBQ3RCRyxZQUFZO2dDQUFFQyxVQUFVOzRCQUFJO3NDQUM3Qjs7Ozs7O3dCQUtGYixTQUFTLG1CQUNSLDhEQUFDTCxpREFBTUEsQ0FBQ1UsR0FBRzs0QkFDVEcsU0FBUztnQ0FBRUMsU0FBUztnQ0FBR1UsR0FBRzs0QkFBRTs0QkFDNUJULFNBQVM7Z0NBQUVELFNBQVM7Z0NBQUdVLEdBQUc7NEJBQUc7NEJBQzdCUCxZQUFZO2dDQUFFQyxVQUFVO2dDQUFLQyxNQUFNOzRCQUFZOzRCQUMvQ0MsT0FBTztnQ0FBRUssWUFBWTs0QkFBTztzQ0FDN0I7Ozs7Ozt3QkFLRnBCLFNBQVMsbUJBQ1IsOERBQUNMLGlEQUFNQSxDQUFDVSxHQUFHOzRCQUNUVSxPQUFPO2dDQUFFSyxZQUFZOzRCQUFPOzs4Q0FFNUIsOERBQUN6QixpREFBTUEsQ0FBQzBCLElBQUk7b0NBQ1ZiLFNBQVM7d0NBQUVDLFNBQVM7b0NBQUU7b0NBQ3RCQyxTQUFTO3dDQUFFRCxTQUFTO29DQUFFO29DQUN0QkcsWUFBWTt3Q0FBRUMsVUFBVTtvQ0FBSTs4Q0FDN0I7Ozs7OztnQ0FFYTs7Ozs7Ozs7Ozs7OztnQkFRckJiLFNBQVMsbUJBQ1IsOERBQUNMLGlEQUFNQSxDQUFDVSxHQUFHO29CQUNUQyxXQUFVOztzQ0FFViw4REFBQ1gsaURBQU1BLENBQUMwQixJQUFJOzRCQUNWYixTQUFTO2dDQUFFVyxHQUFHLENBQUM7NEJBQUc7NEJBQ2xCVCxTQUFTO2dDQUFFUyxHQUFHOzRCQUFFOzRCQUNoQlAsWUFBWTtnQ0FBRUMsVUFBVTtnQ0FBS0MsTUFBTTs0QkFBWTtzQ0FDaEQ7Ozs7OztzQ0FHRCw4REFBQ25CLGlEQUFNQSxDQUFDMEIsSUFBSTs0QkFDVmIsU0FBUztnQ0FBRUMsU0FBUztnQ0FBR1UsR0FBRzs0QkFBRzs0QkFDN0JULFNBQVM7Z0NBQUVTLEdBQUc7NEJBQUU7NEJBQ2hCUCxZQUFZO2dDQUFFQyxVQUFVO2dDQUFLQyxNQUFNOzRCQUFZO3NDQUNoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQXhHd0JmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkVGl0bGUudHN4P2MwZGQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hdGVkVGl0bGUoKSB7XG4gIGNvbnN0IFtzdGVwLCBzZXRTdGVwXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChzdGVwIDwgNCkge1xuICAgICAgICBzZXRTdGVwKHN0ZXAgKyAxKTtcbiAgICAgIH1cbiAgICB9LCAxNTAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbc3RlcF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTI0IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlIG1vZGU9XCJ3YWl0XCI+XG4gICAgICAgIHsvKiBTdGVwIDA6IFNob3cgS29yZWFuICovfVxuICAgICAgICB7c3RlcCA9PT0gMCAmJiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgYWJzb2x1dGVcIlxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44LCBlYXNlOiBcImVhc2VJbk91dFwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgS29yZWFuXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBLbyBzdGF5cyBmaXhlZCBhZnRlciBtb3ZpbmcgbGVmdCAqL31cbiAgICAgICAgeyhzdGVwID49IDEgJiYgc3RlcCA8PSAzKSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgYWJzb2x1dGUgZmxleFwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMjBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiB9fT5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBpbml0aWFsPXtzdGVwID09PSAxID8geyB4OiA2MCB9IDogeyB4OiAwIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB4OiAwIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44LCBlYXNlOiBcImVhc2VJbk91dFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBLb1xuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge3N0ZXAgPT09IDEgJiYgKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgcmVhblxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7c3RlcCA9PT0gMiAmJiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAwIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiA2MCB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCwgZWFzZTogXCJlYXNlSW5PdXRcIiB9fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFbmdsaXNoXG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtzdGVwID09PSAzICYmIChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI4MHB4XCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uc3BhblxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEVcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgICAgIG5nbGlzaFxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBTdGVwIDQ6IEZpbmFsIEtvbmdsaXNoICovfVxuICAgICAgICB7c3RlcCA9PT0gNCAmJiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgYWJzb2x1dGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtb3Rpb24uc3BhblxuICAgICAgICAgICAgICBpbml0aWFsPXt7IHg6IC02MCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IHg6IDAgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44LCBlYXNlOiBcImVhc2VJbk91dFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEtvXG4gICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMSwgeDogNjAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyB4OiAwIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCwgZWFzZTogXCJlYXNlSW5PdXRcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBuZ2xpc2hcbiAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBbmltYXRlZFRpdGxlIiwic3RlcCIsInNldFN0ZXAiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJtb2RlIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJzdHlsZSIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwieCIsIm1hcmdpbkxlZnQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AnimatedTitle.tsx\n"));

/***/ })

});
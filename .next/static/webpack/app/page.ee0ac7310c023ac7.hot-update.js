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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AnimatedTitle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AnimatedTitle() {\n    _s();\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            if (step < 4) {\n                setStep(step + 1);\n            }\n        }, 1500);\n        return ()=>clearTimeout(timer);\n    }, [\n        step\n    ]);\n    const KO_POSITION = \"calc(50% - 120px)\";\n    const ENGLISH_POSITION = \"calc(50% + 40px)\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n            children: [\n                step <= 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-5xl font-bold absolute\",\n                    style: {\n                        left: KO_POSITION\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                            children: \"Ko\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, this),\n                        step === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                            initial: {\n                                opacity: 1\n                            },\n                            animate: {\n                                opacity: 1\n                            },\n                            exit: {\n                                opacity: 0\n                            },\n                            transition: {\n                                duration: 0.5\n                            },\n                            children: \"rean\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this),\n                step === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    className: \"text-5xl font-bold absolute\",\n                    style: {\n                        left: ENGLISH_POSITION\n                    },\n                    initial: {\n                        opacity: 0\n                    },\n                    animate: {\n                        opacity: 1\n                    },\n                    transition: {\n                        duration: 0.5\n                    },\n                    children: \"English\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, this),\n                step === 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-5xl font-bold absolute\",\n                    style: {\n                        left: ENGLISH_POSITION\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                            initial: {\n                                opacity: 1\n                            },\n                            animate: {\n                                opacity: 0\n                            },\n                            transition: {\n                                duration: 0.5\n                            },\n                            children: \"E\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this),\n                        \"nglish\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this),\n                step === 4 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    className: \"text-5xl font-bold absolute\",\n                    style: {\n                        left: ENGLISH_POSITION\n                    },\n                    initial: {\n                        x: 0\n                    },\n                    animate: {\n                        x: -160\n                    },\n                    transition: {\n                        duration: 0.8,\n                        ease: \"easeInOut\"\n                    },\n                    children: \"nglish\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\luken\\\\Desktop\\\\Coding\\\\01_React\\\\Konglish\\\\src\\\\components\\\\AnimatedTitle.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimatedTitle, \"NrA/6fXDv8xclF3w9SjbVQPSnu8=\");\n_c = AnimatedTitle;\nvar _c;\n$RefreshReg$(_c, \"AnimatedTitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkVGl0bGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dEO0FBQ1o7QUFFN0IsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVqQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNSSxRQUFRQyxXQUFXO1lBQ3ZCLElBQUlILE9BQU8sR0FBRztnQkFDWkMsUUFBUUQsT0FBTztZQUNqQjtRQUNGLEdBQUc7UUFFSCxPQUFPLElBQU1JLGFBQWFGO0lBQzVCLEdBQUc7UUFBQ0Y7S0FBSztJQUVULE1BQU1LLGNBQWM7SUFDcEIsTUFBTUMsbUJBQW1CO0lBRXpCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDWiwwREFBZUE7O2dCQUViSSxRQUFRLG1CQUNQLDhEQUFDTztvQkFBSUMsV0FBVTtvQkFBOEJDLE9BQU87d0JBQUVDLE1BQU1MO29CQUFZOztzQ0FDdEUsOERBQUNWLGlEQUFNQSxDQUFDZ0IsSUFBSTtzQ0FBQzs7Ozs7O3dCQUdaWCxTQUFTLG1CQUNSLDhEQUFDTCxpREFBTUEsQ0FBQ2dCLElBQUk7NEJBQ1ZDLFNBQVM7Z0NBQUVDLFNBQVM7NEJBQUU7NEJBQ3RCQyxTQUFTO2dDQUFFRCxTQUFTOzRCQUFFOzRCQUN0QkUsTUFBTTtnQ0FBRUYsU0FBUzs0QkFBRTs0QkFDbkJHLFlBQVk7Z0NBQUVDLFVBQVU7NEJBQUk7c0NBQzdCOzs7Ozs7Ozs7Ozs7Z0JBUU5qQixTQUFTLG1CQUNSLDhEQUFDTCxpREFBTUEsQ0FBQ1ksR0FBRztvQkFDVEMsV0FBVTtvQkFDVkMsT0FBTzt3QkFBRUMsTUFBTUo7b0JBQWlCO29CQUNoQ00sU0FBUzt3QkFBRUMsU0FBUztvQkFBRTtvQkFDdEJDLFNBQVM7d0JBQUVELFNBQVM7b0JBQUU7b0JBQ3RCRyxZQUFZO3dCQUFFQyxVQUFVO29CQUFJOzhCQUM3Qjs7Ozs7O2dCQU1GakIsU0FBUyxtQkFDUiw4REFBQ087b0JBQUlDLFdBQVU7b0JBQThCQyxPQUFPO3dCQUFFQyxNQUFNSjtvQkFBaUI7O3NDQUMzRSw4REFBQ1gsaURBQU1BLENBQUNnQixJQUFJOzRCQUNWQyxTQUFTO2dDQUFFQyxTQUFTOzRCQUFFOzRCQUN0QkMsU0FBUztnQ0FBRUQsU0FBUzs0QkFBRTs0QkFDdEJHLFlBQVk7Z0NBQUVDLFVBQVU7NEJBQUk7c0NBQzdCOzs7Ozs7d0JBRWE7Ozs7Ozs7Z0JBTWpCakIsU0FBUyxtQkFDUiw4REFBQ0wsaURBQU1BLENBQUNZLEdBQUc7b0JBQ1RDLFdBQVU7b0JBQ1ZDLE9BQU87d0JBQUVDLE1BQU1KO29CQUFpQjtvQkFDaENNLFNBQVM7d0JBQUVNLEdBQUc7b0JBQUU7b0JBQ2hCSixTQUFTO3dCQUFFSSxHQUFHLENBQUM7b0JBQUk7b0JBQ25CRixZQUFZO3dCQUFFQyxVQUFVO3dCQUFLRSxNQUFNO29CQUFZOzhCQUNoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQWhGd0JwQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRpdGxlLnRzeD9jMGRkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRlZFRpdGxlKCkge1xuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoc3RlcCA8IDQpIHtcbiAgICAgICAgc2V0U3RlcChzdGVwICsgMSk7XG4gICAgICB9XG4gICAgfSwgMTUwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW3N0ZXBdKTtcblxuICBjb25zdCBLT19QT1NJVElPTiA9ICdjYWxjKDUwJSAtIDEyMHB4KSc7XG4gIGNvbnN0IEVOR0xJU0hfUE9TSVRJT04gPSAnY2FsYyg1MCUgKyA0MHB4KSc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMjRcIj5cbiAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIHsvKiBTdGVwcyAwLTE6IEtvcmVhbiB0byBLbyB0cmFuc2l0aW9uICovfVxuICAgICAgICB7c3RlcCA8PSAxICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCBhYnNvbHV0ZVwiIHN0eWxlPXt7IGxlZnQ6IEtPX1BPU0lUSU9OIH19PlxuICAgICAgICAgICAgPG1vdGlvbi5zcGFuPlxuICAgICAgICAgICAgICBLb1xuICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgIHtzdGVwID09PSAwICYmIChcbiAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICByZWFuXG4gICAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBTdGVwIDI6IFNob3cgRW5nbGlzaCAqL31cbiAgICAgICAge3N0ZXAgPT09IDIgJiYgKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgYWJzb2x1dGVcIlxuICAgICAgICAgICAgc3R5bGU9e3sgbGVmdDogRU5HTElTSF9QT1NJVElPTiB9fVxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEVuZ2xpc2hcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFN0ZXAgMzogRSBmYWRlcyAqL31cbiAgICAgICAge3N0ZXAgPT09IDMgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1ib2xkIGFic29sdXRlXCIgc3R5bGU9e3sgbGVmdDogRU5HTElTSF9QT1NJVElPTiB9fT5cbiAgICAgICAgICAgIDxtb3Rpb24uc3BhblxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBFXG4gICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgbmdsaXNoXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFN0ZXAgNDogbmdsaXNoIGNvbWJpbmVzICovfVxuICAgICAgICB7c3RlcCA9PT0gNCAmJiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCBhYnNvbHV0ZVwiXG4gICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBFTkdMSVNIX1BPU0lUSU9OIH19XG4gICAgICAgICAgICBpbml0aWFsPXt7IHg6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeDogLTE2MCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44LCBlYXNlOiBcImVhc2VJbk91dFwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgbmdsaXNoXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBbmltYXRlZFRpdGxlIiwic3RlcCIsInNldFN0ZXAiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJLT19QT1NJVElPTiIsIkVOR0xJU0hfUE9TSVRJT04iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImxlZnQiLCJzcGFuIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIngiLCJlYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AnimatedTitle.tsx\n"));

/***/ })

});
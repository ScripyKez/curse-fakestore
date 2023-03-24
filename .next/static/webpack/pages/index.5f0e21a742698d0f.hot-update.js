"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./app/components/screens/home/ProductItem.tsx":
/*!*****************************************************!*\
  !*** ./app/components/screens/home/ProductItem.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useActions */ \"./app/hooks/useActions.ts\");\n/* harmony import */ var _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useTypedSelector */ \"./app/hooks/useTypedSelector.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductItem = function(param) {\n    var product = param.product;\n    _s();\n    var ref = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_2__.useActions)(), addItem = ref.addItem, removeItem = ref.removeItem;\n    var cart = (0,_hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3__.useTypedSelector)(function(state) {\n        return state;\n    }).cart;\n    var isExistsInCart = cart.some();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '48%',\n            backgroundColor: '#E5F0EA'\n        },\n        className: \"rounded-xl mb-5 p-3 shadow-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: product.image,\n                    alt: product.title,\n                    width: \"100\",\n                    height: \"143\",\n                    className: \"rounded-xl\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between mt-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-green-900 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap mr-5\",\n                        children: product.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm text-green-600\",\n                        children: [\n                            \"$\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-sm mt-3 bg-white rounded-xl w-3/4 mx-auto block p-1 hover:bg-green-200\",\n                onClick: function() {\n                    return addItem(product);\n                },\n                children: \"Add to cart\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\ProductItem.tsx\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, _this));\n};\n_s(ProductItem, \"WLNG7c9M1pG9uKfjSYTfIMsRpgk=\", false, function() {\n    return [\n        _hooks_useActions__WEBPACK_IMPORTED_MODULE_2__.useActions,\n        _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_3__.useTypedSelector\n    ];\n});\n_c = ProductItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);\nvar _c;\n$RefreshReg$(_c, \"ProductItem\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2hvbWUvUHJvZHVjdEl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUV3QjtBQUNZOzs7QUFFbEUsR0FBSyxDQUFDRyxXQUFXLEdBQXlCLFFBQVEsUUFBUyxDQUFDO1FBQWZDLE9BQU8sU0FBUEEsT0FBTzs7SUFDbkQsR0FBSyxDQUF5QkgsR0FBWSxHQUFaQSw2REFBVSxJQUFqQ0ksT0FBTyxHQUFnQkosR0FBWSxDQUFuQ0ksT0FBTyxFQUFFQyxVQUFVLEdBQUlMLEdBQVksQ0FBMUJLLFVBQVU7SUFFMUIsR0FBSyxDQUFFQyxJQUFJLEdBQUlMLHlFQUFnQixDQUFDTSxRQUFRLENBQVJBLEtBQUs7UUFBSUEsTUFBTSxDQUFOQSxLQUFLO09BQXZDRCxJQUFJO0lBRVgsR0FBSyxDQUFDRSxjQUFjLEdBQUdGLElBQUksQ0FBQ0csSUFBSTtJQUNoQyxNQUFNLDZFQUNKQyxDQUFHO1FBQ0hDLEtBQUssRUFBRSxDQUFDO1lBQUNDLEtBQUssRUFBRSxDQUFLO1lBQUVDLGVBQWUsRUFBRSxDQUFTO1FBQUMsQ0FBQztRQUNuREMsU0FBUyxFQUFDLENBQStCOzt3RkFFeENKLENBQUc7Z0JBQUNJLFNBQVMsRUFBQyxDQUFhO3NHQUMxQmYsbURBQUs7b0JBQ0xnQixHQUFHLEVBQUVaLE9BQU8sQ0FBQ2EsS0FBSztvQkFDbEJDLEdBQUcsRUFBRWQsT0FBTyxDQUFDZSxLQUFLO29CQUNsQk4sS0FBSyxFQUFDLENBQUs7b0JBQ1hPLE1BQU0sRUFBQyxDQUFLO29CQUNaTCxTQUFTLEVBQUMsQ0FBWTs7Ozs7Ozs7Ozs7d0ZBR3ZCSixDQUFHO2dCQUFDSSxTQUFTLEVBQUMsQ0FBd0M7O2dHQUNyREosQ0FBRzt3QkFBQ0ksU0FBUyxFQUFDLENBQXlGO2tDQUN0R1gsT0FBTyxDQUFDZSxLQUFLOzs7Ozs7Z0dBRWRSLENBQUc7d0JBQUNJLFNBQVMsRUFBQyxDQUF3Qjs7NEJBQUMsQ0FBQzs0QkFBQ1gsT0FBTyxDQUFDaUIsS0FBSzs7Ozs7Ozs7Ozs7Ozt3RkFFdkRDLENBQU07Z0JBQUNQLFNBQVMsRUFBQyxDQUE2RTtnQkFBQ1EsT0FBTyxFQUFFLFFBQVE7b0JBQUhsQixNQUFNLENBQU5BLE9BQU8sQ0FBQ0QsT0FBTzs7MEJBQUcsQ0FFaEk7Ozs7Ozs7Ozs7OztBQUdILENBQUM7R0EvQktELFdBQVc7O1FBQ2NGLHlEQUFVO1FBRXpCQyxxRUFBZ0I7OztLQUgxQkMsV0FBVztBQWlDakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2NyZWVucy9ob21lL1Byb2R1Y3RJdGVtLnRzeD85NDYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VBY3Rpb25zJ1xuaW1wb3J0IHsgdXNlVHlwZWRTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVR5cGVkU2VsZWN0b3InXG5cbmNvbnN0IFByb2R1Y3RJdGVtOiBGQzx7IHByb2R1Y3Q6IGFueSB9PiA9ICh7IHByb2R1Y3QgfSkgPT4ge1xuXHRjb25zdCB7YWRkSXRlbSwgcmVtb3ZlSXRlbX0gPSB1c2VBY3Rpb25zKClcblxuXHRjb25zdCB7Y2FydH0gPSB1c2VUeXBlZFNlbGVjdG9yKHN0YXRlID0+IHN0YXRlKVxuXG5cdGNvbnN0IGlzRXhpc3RzSW5DYXJ0ID0gY2FydC5zb21lKClcblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRzdHlsZT17eyB3aWR0aDogJzQ4JScsIGJhY2tncm91bmRDb2xvcjogJyNFNUYwRUEnIH19XG5cdFx0XHRjbGFzc05hbWU9J3JvdW5kZWQteGwgbWItNSBwLTMgc2hhZG93LXNtJ1xuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG5cdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdHNyYz17cHJvZHVjdC5pbWFnZX1cblx0XHRcdFx0XHRhbHQ9e3Byb2R1Y3QudGl0bGV9XG5cdFx0XHRcdFx0d2lkdGg9JzEwMCdcblx0XHRcdFx0XHRoZWlnaHQ9JzE0Mydcblx0XHRcdFx0XHRjbGFzc05hbWU9J3JvdW5kZWQteGwnXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtMyc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWdyZWVuLTkwMCBmb250LW1lZGl1bSB0ZXh0LXNtIG92ZXJmbG93LWhpZGRlbiB0ZXh0LWVsbGlwc2lzIHdoaXRlc3BhY2Utbm93cmFwIG1yLTUnPlxuXHRcdFx0XHRcdHtwcm9kdWN0LnRpdGxlfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtc20gdGV4dC1ncmVlbi02MDAnPiR7cHJvZHVjdC5wcmljZX08L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J3RleHQtc20gbXQtMyBiZy13aGl0ZSByb3VuZGVkLXhsIHctMy80IG14LWF1dG8gYmxvY2sgcC0xIGhvdmVyOmJnLWdyZWVuLTIwMCcgb25DbGljaz17KCk9PiBhZGRJdGVtKHByb2R1Y3QpfT5cblx0XHRcdFx0QWRkIHRvIGNhcnRcblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VBY3Rpb25zIiwidXNlVHlwZWRTZWxlY3RvciIsIlByb2R1Y3RJdGVtIiwicHJvZHVjdCIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwiY2FydCIsInN0YXRlIiwiaXNFeGlzdHNJbkNhcnQiLCJzb21lIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsInNyYyIsImltYWdlIiwiYWx0IiwidGl0bGUiLCJoZWlnaHQiLCJwcmljZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/components/screens/home/ProductItem.tsx\n");

/***/ })

});
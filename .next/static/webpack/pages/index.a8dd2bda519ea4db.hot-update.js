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

/***/ "./app/components/screens/home/Home.tsx":
/*!**********************************************!*\
  !*** ./app/components/screens/home/Home.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_product_product_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/product/product.api */ \"./app/store/product/product.api.ts\");\n/* harmony import */ var _cart_dropdown_CartDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-dropdown/CartDropdown */ \"./app/components/screens/home/cart-dropdown/CartDropdown.tsx\");\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductItem */ \"./app/components/screens/home/ProductItem.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar data = [\n    {\n        id: 1,\n        title: \"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops\",\n        price: 109.95,\n        description: \"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday\",\n        category: \"men's clothing\",\n        image: \"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg\",\n        rating: {\n            rate: 3.9,\n            count: 120\n        }\n    },\n    {\n        id: 2,\n        title: \"Mens Casual Premium Slim Fit T-Shirts \",\n        price: 22.3,\n        description: \"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.\",\n        category: \"men's clothing\",\n        image: \"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg\",\n        rating: {\n            rate: 4.1,\n            count: 259\n        }\n    }, \n];\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_store_product_product_api__WEBPACK_IMPORTED_MODULE_1__.useGetProductsQuery)(6), data1 = ref.data, isLoading = ref.isLoading, error = ref.error;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl text-green-900 font-medium\",\n                        children: \"Let's find your products!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cart_dropdown_CartDropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-between\",\n                children: data1 === null || data1 === void 0 ? void 0 : data1.map(function(product) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        product: product\n                    }, product.id, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, \"Qbw1SAyKrp3aXfUhBGmCbvuuGRQ=\", false, function() {\n    return [\n        _store_product_product_api__WEBPACK_IMPORTED_MODULE_1__.useGetProductsQuery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2hvbWUvSG9tZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDd0U7QUFDakI7QUFDaEI7OztBQUV2QyxHQUFLLENBQUNHLElBQUksR0FBUSxDQUFDO0lBQ2pCLENBQUM7UUFDQ0MsRUFBRSxFQUFFLENBQUM7UUFDTEMsS0FBSyxFQUFFLENBQXVEO1FBQzlEQyxLQUFLLEVBQUUsTUFBTTtRQUNiQyxXQUFXLEVBQ1QsQ0FBcUk7UUFDdklDLFFBQVEsRUFBRSxDQUFnQjtRQUMxQkMsS0FBSyxFQUFFLENBQTBEO1FBQ2pFQyxNQUFNLEVBQUUsQ0FBQztZQUFDQyxJQUFJLEVBQUUsR0FBRztZQUFFQyxLQUFLLEVBQUUsR0FBRztRQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELENBQUM7UUFDQ1IsRUFBRSxFQUFFLENBQUM7UUFDTEMsS0FBSyxFQUFFLENBQXdDO1FBQy9DQyxLQUFLLEVBQUUsSUFBSTtRQUNYQyxXQUFXLEVBQ1QsQ0FBb1Y7UUFDdFZDLFFBQVEsRUFBRSxDQUFnQjtRQUMxQkMsS0FBSyxFQUNILENBQXlFO1FBQzNFQyxNQUFNLEVBQUUsQ0FBQztZQUFDQyxJQUFJLEVBQUUsR0FBRztZQUFFQyxLQUFLLEVBQUUsR0FBRztRQUFDLENBQUM7SUFDbkMsQ0FBQztBQUNILENBQUM7QUFFRCxHQUFLLENBQUNDLElBQUksR0FBTyxRQUNqQixHQUR1QixDQUFDOzs7SUFDdEIsR0FBSyxDQUE4QmIsR0FBc0IsR0FBdEJBLCtFQUFtQixDQUFDLENBQUMsR0FBaERHLEtBQUksR0FBdUJILEdBQXNCLENBQWpERyxJQUFJLEVBQUVXLFNBQVMsR0FBWWQsR0FBc0IsQ0FBM0NjLFNBQVMsRUFBRUMsS0FBSyxHQUFLZixHQUFzQixDQUFoQ2UsS0FBSztJQUU5QixNQUFNLDZFQUNIQyxDQUFHOzt3RkFDREEsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXlDOztnR0FDckRDLENBQUU7d0JBQUNELFNBQVMsRUFBQyxDQUFxQztrQ0FBQyxDQUVwRDs7Ozs7O2dHQUNDaEIsbUVBQVk7Ozs7Ozs7Ozs7O3dGQUtkZSxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBZ0M7MEJBQzVDZCxLQUFJLGFBQUpBLEtBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFTLEdBQVRBLElBQUksQ0FBSkEsQ0FBUyxHQUFUQSxLQUFJLENBQUVnQixHQUFHLENBQUMsUUFBUSxDQUFQQyxPQUFZO2tDQUN0QixNQUFNLCtEQUFMbEIsb0RBQVc7d0JBQWtCa0IsT0FBTyxFQUFFQSxPQUFPO3VCQUE1QkEsT0FBTyxDQUFDaEIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEMsQ0FBQztHQXJCS1MsSUFBSTs7UUFDMkJiLDJFQUFtQjs7O0tBRGxEYSxJQUFJO0FBdUJWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2NyZWVucy9ob21lL0hvbWUudHN4P2RlZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUdldFByb2R1Y3RzUXVlcnkgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvcHJvZHVjdC9wcm9kdWN0LmFwaVwiO1xuaW1wb3J0IENhcnREcm9wZG93biBmcm9tIFwiLi9jYXJ0LWRyb3Bkb3duL0NhcnREcm9wZG93blwiO1xuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gXCIuL1Byb2R1Y3RJdGVtXCI7XG5cbmNvbnN0IGRhdGE6IGFueSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIkZqYWxscmF2ZW4gLSBGb2xkc2FjayBOby4gMSBCYWNrcGFjaywgRml0cyAxNSBMYXB0b3BzXCIsXG4gICAgcHJpY2U6IDEwOS45NSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiWW91ciBwZXJmZWN0IHBhY2sgZm9yIGV2ZXJ5ZGF5IHVzZSBhbmQgd2Fsa3MgaW4gdGhlIGZvcmVzdC4gU3Rhc2ggeW91ciBsYXB0b3AgKHVwIHRvIDE1IGluY2hlcykgaW4gdGhlIHBhZGRlZCBzbGVldmUsIHlvdXIgZXZlcnlkYXlcIixcbiAgICBjYXRlZ29yeTogXCJtZW4ncyBjbG90aGluZ1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9pbWcvODFmUEtkLTJBWUwuX0FDX1NMMTUwMF8uanBnXCIsXG4gICAgcmF0aW5nOiB7IHJhdGU6IDMuOSwgY291bnQ6IDEyMCB9LFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6IFwiTWVucyBDYXN1YWwgUHJlbWl1bSBTbGltIEZpdCBULVNoaXJ0cyBcIixcbiAgICBwcmljZTogMjIuMyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiU2xpbS1maXR0aW5nIHN0eWxlLCBjb250cmFzdCByYWdsYW4gbG9uZyBzbGVldmUsIHRocmVlLWJ1dHRvbiBoZW5sZXkgcGxhY2tldCwgbGlnaHQgd2VpZ2h0ICYgc29mdCBmYWJyaWMgZm9yIGJyZWF0aGFibGUgYW5kIGNvbWZvcnRhYmxlIHdlYXJpbmcuIEFuZCBTb2xpZCBzdGl0Y2hlZCBzaGlydHMgd2l0aCByb3VuZCBuZWNrIG1hZGUgZm9yIGR1cmFiaWxpdHkgYW5kIGEgZ3JlYXQgZml0IGZvciBjYXN1YWwgZmFzaGlvbiB3ZWFyIGFuZCBkaWVoYXJkIGJhc2ViYWxsIGZhbnMuIFRoZSBIZW5sZXkgc3R5bGUgcm91bmQgbmVja2xpbmUgaW5jbHVkZXMgYSB0aHJlZS1idXR0b24gcGxhY2tldC5cIixcbiAgICBjYXRlZ29yeTogXCJtZW4ncyBjbG90aGluZ1wiLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vaW1nLzcxLTNIakdORFVMLl9BQ19TWTg3OS5fU1guX1VYLl9TWS5fVVlfLmpwZ1wiLFxuICAgIHJhdGluZzogeyByYXRlOiA0LjEsIGNvdW50OiAyNTkgfSxcbiAgfSxcbl07XG5cbmNvbnN0IEhvbWU6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgZXJyb3IgfSA9IHVzZUdldFByb2R1Y3RzUXVlcnkoNik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMTBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JlZW4tOTAwIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgTGV0JmFwb3M7cyBmaW5kIHlvdXIgcHJvZHVjdHMhXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxDYXJ0RHJvcGRvd24gLz5cbiAgICAgIDwvZGl2PlxuXG5cdFx0e31cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAge2RhdGE/Lm1hcCgocHJvZHVjdDogYW55KSA9PiAoXG4gICAgICAgICAgPFByb2R1Y3RJdGVtIGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlR2V0UHJvZHVjdHNRdWVyeSIsIkNhcnREcm9wZG93biIsIlByb2R1Y3RJdGVtIiwiZGF0YSIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsInJhdGluZyIsInJhdGUiLCJjb3VudCIsIkhvbWUiLCJpc0xvYWRpbmciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwicHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/screens/home/Home.tsx\n");

/***/ })

});
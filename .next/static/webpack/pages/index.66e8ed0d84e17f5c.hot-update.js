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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_product_product_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/product/product.api */ \"./app/store/product/product.api.ts\");\n/* harmony import */ var _cart_dropdown_CartDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-dropdown/CartDropdown */ \"./app/components/screens/home/cart-dropdown/CartDropdown.tsx\");\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductItem */ \"./app/components/screens/home/ProductItem.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar data = [\n    {\n        id: 1,\n        title: \"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops\",\n        price: 109.95,\n        description: \"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday\",\n        category: \"men's clothing\",\n        image: \"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg\",\n        rating: {\n            rate: 3.9,\n            count: 120\n        }\n    },\n    {\n        id: 2,\n        title: \"Mens Casual Premium Slim Fit T-Shirts \",\n        price: 22.3,\n        description: \"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.\",\n        category: \"men's clothing\",\n        image: \"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg\",\n        rating: {\n            rate: 4.1,\n            count: 259\n        }\n    }, \n];\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_store_product_product_api__WEBPACK_IMPORTED_MODULE_1__.useGetProductsQuery)(6), data1 = ref.data, isLoading = ref.isLoading, error = ref.error;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl text-green-900 font-medium\",\n                        children: \"Let's find your products!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cart_dropdown_CartDropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            isLoading ? \"Loading...\" : error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-red-500\",\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-between\",\n                children: data1 === null || data1 === void 0 ? void 0 : data1.map(function(product) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        product: product\n                    }, product.id, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\app\\\\components\\\\screens\\\\home\\\\Home.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, \"Qbw1SAyKrp3aXfUhBGmCbvuuGRQ=\", false, function() {\n    return [\n        _store_product_product_api__WEBPACK_IMPORTED_MODULE_1__.useGetProductsQuery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2hvbWUvSG9tZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDd0U7QUFDakI7QUFDaEI7OztBQUV2QyxHQUFLLENBQUNHLElBQUksR0FBUSxDQUFDO0lBQ2pCLENBQUM7UUFDQ0MsRUFBRSxFQUFFLENBQUM7UUFDTEMsS0FBSyxFQUFFLENBQXVEO1FBQzlEQyxLQUFLLEVBQUUsTUFBTTtRQUNiQyxXQUFXLEVBQ1QsQ0FBcUk7UUFDdklDLFFBQVEsRUFBRSxDQUFnQjtRQUMxQkMsS0FBSyxFQUFFLENBQTBEO1FBQ2pFQyxNQUFNLEVBQUUsQ0FBQztZQUFDQyxJQUFJLEVBQUUsR0FBRztZQUFFQyxLQUFLLEVBQUUsR0FBRztRQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELENBQUM7UUFDQ1IsRUFBRSxFQUFFLENBQUM7UUFDTEMsS0FBSyxFQUFFLENBQXdDO1FBQy9DQyxLQUFLLEVBQUUsSUFBSTtRQUNYQyxXQUFXLEVBQ1QsQ0FBb1Y7UUFDdFZDLFFBQVEsRUFBRSxDQUFnQjtRQUMxQkMsS0FBSyxFQUNILENBQXlFO1FBQzNFQyxNQUFNLEVBQUUsQ0FBQztZQUFDQyxJQUFJLEVBQUUsR0FBRztZQUFFQyxLQUFLLEVBQUUsR0FBRztRQUFDLENBQUM7SUFDbkMsQ0FBQztBQUNILENBQUM7QUFFRCxHQUFLLENBQUNDLElBQUksR0FBTyxRQUNqQixHQUR1QixDQUFDOzs7SUFDdEIsR0FBSyxDQUE4QmIsR0FBc0IsR0FBdEJBLCtFQUFtQixDQUFDLENBQUMsR0FBaERHLEtBQUksR0FBdUJILEdBQXNCLENBQWpERyxJQUFJLEVBQUVXLFNBQVMsR0FBWWQsR0FBc0IsQ0FBM0NjLFNBQVMsRUFBRUMsS0FBSyxHQUFLZixHQUFzQixDQUFoQ2UsS0FBSztJQUU5QixNQUFNLDZFQUNIQyxDQUFHOzt3RkFDREEsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXlDOztnR0FDckRDLENBQUU7d0JBQUNELFNBQVMsRUFBQyxDQUFxQztrQ0FBQyxDQUVwRDs7Ozs7O2dHQUNDaEIsbUVBQVk7Ozs7Ozs7Ozs7O1lBR2RhLFNBQVMsR0FDUixDQUFZLGNBQ1ZDLEtBQUssK0VBQ05DLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFjOzBCQUFFRixLQUFLOzs7OztvR0FFbkNDLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFnQzswQkFDNUNkLEtBQUksYUFBSkEsS0FBSSxLQUFKQSxJQUFJLENBQUpBLENBQVMsR0FBVEEsSUFBSSxDQUFKQSxDQUFTLEdBQVRBLEtBQUksQ0FBRWdCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQVk7a0NBQ3RCLE1BQU0sK0RBQUxsQixvREFBVzt3QkFBa0JrQixPQUFPLEVBQUVBLE9BQU87dUJBQTVCQSxPQUFPLENBQUNoQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQU14QyxDQUFDO0dBekJLUyxJQUFJOztRQUMyQmIsMkVBQW1COzs7S0FEbERhLElBQUk7QUEyQlYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2hvbWUvSG9tZS50c3g/ZGVmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlR2V0UHJvZHVjdHNRdWVyeSB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9wcm9kdWN0L3Byb2R1Y3QuYXBpXCI7XG5pbXBvcnQgQ2FydERyb3Bkb3duIGZyb20gXCIuL2NhcnQtZHJvcGRvd24vQ2FydERyb3Bkb3duXCI7XG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSBcIi4vUHJvZHVjdEl0ZW1cIjtcblxuY29uc3QgZGF0YTogYW55ID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6IFwiRmphbGxyYXZlbiAtIEZvbGRzYWNrIE5vLiAxIEJhY2twYWNrLCBGaXRzIDE1IExhcHRvcHNcIixcbiAgICBwcmljZTogMTA5Ljk1LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJZb3VyIHBlcmZlY3QgcGFjayBmb3IgZXZlcnlkYXkgdXNlIGFuZCB3YWxrcyBpbiB0aGUgZm9yZXN0LiBTdGFzaCB5b3VyIGxhcHRvcCAodXAgdG8gMTUgaW5jaGVzKSBpbiB0aGUgcGFkZGVkIHNsZWV2ZSwgeW91ciBldmVyeWRheVwiLFxuICAgIGNhdGVnb3J5OiBcIm1lbidzIGNsb3RoaW5nXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL2ltZy84MWZQS2QtMkFZTC5fQUNfU0wxNTAwXy5qcGdcIixcbiAgICByYXRpbmc6IHsgcmF0ZTogMy45LCBjb3VudDogMTIwIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogXCJNZW5zIENhc3VhbCBQcmVtaXVtIFNsaW0gRml0IFQtU2hpcnRzIFwiLFxuICAgIHByaWNlOiAyMi4zLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJTbGltLWZpdHRpbmcgc3R5bGUsIGNvbnRyYXN0IHJhZ2xhbiBsb25nIHNsZWV2ZSwgdGhyZWUtYnV0dG9uIGhlbmxleSBwbGFja2V0LCBsaWdodCB3ZWlnaHQgJiBzb2Z0IGZhYnJpYyBmb3IgYnJlYXRoYWJsZSBhbmQgY29tZm9ydGFibGUgd2VhcmluZy4gQW5kIFNvbGlkIHN0aXRjaGVkIHNoaXJ0cyB3aXRoIHJvdW5kIG5lY2sgbWFkZSBmb3IgZHVyYWJpbGl0eSBhbmQgYSBncmVhdCBmaXQgZm9yIGNhc3VhbCBmYXNoaW9uIHdlYXIgYW5kIGRpZWhhcmQgYmFzZWJhbGwgZmFucy4gVGhlIEhlbmxleSBzdHlsZSByb3VuZCBuZWNrbGluZSBpbmNsdWRlcyBhIHRocmVlLWJ1dHRvbiBwbGFja2V0LlwiLFxuICAgIGNhdGVnb3J5OiBcIm1lbidzIGNsb3RoaW5nXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9pbWcvNzEtM0hqR05EVUwuX0FDX1NZODc5Ll9TWC5fVVguX1NZLl9VWV8uanBnXCIsXG4gICAgcmF0aW5nOiB7IHJhdGU6IDQuMSwgY291bnQ6IDI1OSB9LFxuICB9LFxuXTtcblxuY29uc3QgSG9tZTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBlcnJvciB9ID0gdXNlR2V0UHJvZHVjdHNRdWVyeSg2KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi0xMFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmVlbi05MDAgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICBMZXQmYXBvcztzIGZpbmQgeW91ciBwcm9kdWN0cyFcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPENhcnREcm9wZG93biAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgIFwiTG9hZGluZy4uLlwiXG4gICAgICApIDogZXJyb3IgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+e2Vycm9yfTwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICB7ZGF0YT8ubWFwKChwcm9kdWN0OiBhbnkpID0+IChcbiAgICAgICAgICAgIDxQcm9kdWN0SXRlbSBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlR2V0UHJvZHVjdHNRdWVyeSIsIkNhcnREcm9wZG93biIsIlByb2R1Y3RJdGVtIiwiZGF0YSIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsInJhdGluZyIsInJhdGUiLCJjb3VudCIsIkhvbWUiLCJpc0xvYWRpbmciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwicHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/screens/home/Home.tsx\n");

/***/ })

});
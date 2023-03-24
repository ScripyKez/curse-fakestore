/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./app/store/cart/cart.slice.ts":
/*!**************************************!*\
  !*** ./app/store/cart/cart.slice.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cartSlice\": () => (/* binding */ cartSlice),\n/* harmony export */   \"cartReducer\": () => (/* binding */ cartReducer),\n/* harmony export */   \"cartActions\": () => (/* binding */ cartActions)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = [];\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState,\n    reducers: {\n        addItem: (state, action)=>{\n            state.push(action.payload);\n        },\n        removeItem: (state, action)=>{\n            return state.filter((item)=>item.id !== action.payload.id\n            );\n        }\n    }\n});\nconst cartReducer = cartSlice.reducer;\nconst cartActions = cartSlice.actions;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvY2FydC9jYXJ0LnNsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZEO0FBRzdELEtBQUssQ0FBQ0MsWUFBWSxHQUFlLENBQUMsQ0FBQztBQUU1QixLQUFLLENBQUNDLFNBQVMsR0FBR0YsNkRBQVcsQ0FBQyxDQUFDO0lBQ3BDRyxJQUFJLEVBQUUsQ0FBTTtJQUNaRixZQUFZO0lBQ1pHLFFBQVEsRUFBRSxDQUFDO1FBQ1RDLE9BQU8sR0FBR0MsS0FBSyxFQUFFQyxNQUErQixHQUFLLENBQUM7WUFDcERELEtBQUssQ0FBQ0UsSUFBSSxDQUFDRCxNQUFNLENBQUNFLE9BQU87UUFDM0IsQ0FBQztRQUNEQyxVQUFVLEdBQUdKLEtBQUssRUFBRUMsTUFBcUMsR0FBSyxDQUFDO1lBQzdELE1BQU0sQ0FBQ0QsS0FBSyxDQUFDSyxNQUFNLEVBQUNDLElBQUksR0FBSUEsSUFBSSxDQUFDQyxFQUFFLEtBQUtOLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDSSxFQUFFOztRQUMzRCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFTSxLQUFLLENBQUNDLFdBQVcsR0FBR1osU0FBUyxDQUFDYSxPQUFPO0FBQ3JDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHZCxTQUFTLENBQUNlLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWR1eC10b29sa2l0LWNyYXNoLWNvdXJzZS8uL2FwcC9zdG9yZS9jYXJ0L2NhcnQuc2xpY2UudHM/NDdmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSBcIi4uL3Byb2R1Y3QvcHJvZHVjdC50eXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJUHJvZHVjdFtdID0gW107XHJcblxyXG5leHBvcnQgY29uc3QgY2FydFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiY2FydFwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgYWRkSXRlbTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248SVByb2R1Y3Q+KSA9PiB7XHJcbiAgICAgIHN0YXRlLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUl0ZW06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgaWQ6IG51bWJlciB9PikgPT4ge1xyXG4gICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJ0UmVkdWNlciA9IGNhcnRTbGljZS5yZWR1Y2VyO1xyXG5leHBvcnQgY29uc3QgY2FydEFjdGlvbnMgPSBjYXJ0U2xpY2UuYWN0aW9ucztcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiY2FydFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkSXRlbSIsInN0YXRlIiwiYWN0aW9uIiwicHVzaCIsInBheWxvYWQiLCJyZW1vdmVJdGVtIiwiZmlsdGVyIiwiaXRlbSIsImlkIiwiY2FydFJlZHVjZXIiLCJyZWR1Y2VyIiwiY2FydEFjdGlvbnMiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/store/cart/cart.slice.ts\n");

/***/ }),

/***/ "./app/store/product/product.api.ts":
/*!******************************************!*\
  !*** ./app/store/product/product.api.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productApi\": () => (/* binding */ productApi),\n/* harmony export */   \"useGetProductsQuery\": () => (/* binding */ useGetProductsQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"api/product\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: \"https://fakestoreapi.com/\"\n    }),\n    endpoints: (builder)=>({\n            getProducts: builder.query({\n                query: (limit = 5)=>`/products?limit=${limit}`\n            })\n        })\n});\nconst { useGetProductsQuery  } = productApi;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvcHJvZHVjdC9wcm9kdWN0LmFwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdFO0FBR2pFLEtBQUssQ0FBQ0UsVUFBVSxHQUFHRix1RUFBUyxDQUFDLENBQUM7SUFDbkNHLFdBQVcsRUFBRSxDQUFhO0lBQzFCQyxTQUFTLEVBQUVILDRFQUFjLENBQUMsQ0FBQztRQUFDSSxPQUFPLEVBQUUsQ0FBMkI7SUFBQyxDQUFDO0lBQ2xFQyxTQUFTLEdBQUVDLE9BQU8sSUFBSyxDQUFDO1lBQ3RCQyxXQUFXLEVBQUVELE9BQU8sQ0FBQ0UsS0FBSyxDQUFxQixDQUFDO2dCQUM5Q0EsS0FBSyxHQUFHQyxLQUFLLEdBQUcsQ0FBQyxJQUFNLGdCQUFnQixFQUFFQSxLQUFLO1lBQ2hELENBQUM7UUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVNLEtBQUssQ0FBQyxDQUFDLENBQUNDLG1CQUFtQixFQUFDLENBQUMsR0FBR1QsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZHV4LXRvb2xraXQtY3Jhc2gtY291cnNlLy4vYXBwL3N0b3JlL3Byb2R1Y3QvcHJvZHVjdC5hcGkudHM/MmIwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3RcIjtcclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tIFwiLi9wcm9kdWN0LnR5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdEFwaSA9IGNyZWF0ZUFwaSh7XHJcbiAgcmVkdWNlclBhdGg6IFwiYXBpL3Byb2R1Y3RcIixcclxuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHsgYmFzZVVybDogXCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vXCIgfSksXHJcbiAgZW5kcG9pbnRzOiBidWlsZGVyID0+ICh7XHJcbiAgICBnZXRQcm9kdWN0czogYnVpbGRlci5xdWVyeTxJUHJvZHVjdFtdLCBudW1iZXI+KHtcclxuICAgICAgcXVlcnk6IChsaW1pdCA9IDUpID0+IGAvcHJvZHVjdHM/bGltaXQ9JHtsaW1pdH1gLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgdXNlR2V0UHJvZHVjdHNRdWVyeSB9ID0gcHJvZHVjdEFwaTsiXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJwcm9kdWN0QXBpIiwicmVkdWNlclBhdGgiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwiZW5kcG9pbnRzIiwiYnVpbGRlciIsImdldFByb2R1Y3RzIiwicXVlcnkiLCJsaW1pdCIsInVzZUdldFByb2R1Y3RzUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/store/product/product.api.ts\n");

/***/ }),

/***/ "./app/store/store.ts":
/*!****************************!*\
  !*** ./app/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cart_cart_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/cart.slice */ \"./app/store/cart/cart.slice.ts\");\n/* harmony import */ var _product_product_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.api */ \"./app/store/product/product.api.ts\");\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        [_product_product_api__WEBPACK_IMPORTED_MODULE_2__.productApi.reducerPath]: _product_product_api__WEBPACK_IMPORTED_MODULE_2__.productApi.reducer,\n        cart: _cart_cart_slice__WEBPACK_IMPORTED_MODULE_1__.cartReducer\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_product_product_api__WEBPACK_IMPORTED_MODULE_2__.productApi.middleware)\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUQ7QUFDRjtBQUNHO0FBRTNDLEtBQUssQ0FBQ0csS0FBSyxHQUFHSCxnRUFBYyxDQUFDLENBQUM7SUFDbkNJLE9BQU8sRUFBRSxDQUFDO1NBQUVGLHdFQUFzQixHQUFHQSxvRUFBa0I7UUFBRUksSUFBSSxFQUFFTCx5REFBVztJQUFDLENBQUM7SUFDNUVNLFVBQVUsR0FBRUMsb0JBQW9CLEdBQzlCQSxvQkFBb0IsR0FBR0MsTUFBTSxDQUFDUCx1RUFBcUI7QUFDdkQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZHV4LXRvb2xraXQtY3Jhc2gtY291cnNlLy4vYXBwL3N0b3JlL3N0b3JlLnRzPzZjY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBjYXJ0UmVkdWNlciB9IGZyb20gXCIuL2NhcnQvY2FydC5zbGljZVwiO1xyXG5pbXBvcnQgeyBwcm9kdWN0QXBpIH0gZnJvbSBcIi4vcHJvZHVjdC9wcm9kdWN0LmFwaVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHsgW3Byb2R1Y3RBcGkucmVkdWNlclBhdGhdOiBwcm9kdWN0QXBpLnJlZHVjZXIsIGNhcnQ6IGNhcnRSZWR1Y2VyIH0sXHJcbiAgbWlkZGxld2FyZTogZ2V0RGVmYXVsdE1pZGRsZXdhcmUgPT5cclxuICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KHByb2R1Y3RBcGkubWlkZGxld2FyZSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgVHlwZVJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjsiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjYXJ0UmVkdWNlciIsInByb2R1Y3RBcGkiLCJzdG9yZSIsInJlZHVjZXIiLCJyZWR1Y2VyUGF0aCIsImNhcnQiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/store/store.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/store/store */ \"./app/store/store.ts\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _app_store_store__WEBPACK_IMPORTED_MODULE_3__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-7 px-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\reactn\\\\fake-shop\\\\redux-toolkit-crash-course\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEI7QUFFUTtBQUNJO1NBRWpDRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxNQUFNLDZFQUNISixpREFBUTtRQUFDQyxLQUFLLEVBQUVBLG1EQUFLOzhGQUNuQkksQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBVztrR0FDdkJILFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWR1eC10b29sa2l0LWNyYXNoLWNvdXJzZS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vYXBwL3N0b3JlL3N0b3JlXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNyBweC01XCI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
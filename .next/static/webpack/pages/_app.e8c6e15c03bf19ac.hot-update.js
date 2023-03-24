"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./app/store/cart/cart.slice.ts":
/*!**************************************!*\
  !*** ./app/store/cart/cart.slice.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cartSlice\": function() { return /* binding */ cartSlice; },\n/* harmony export */   \"cartReducer\": function() { return /* binding */ cartReducer; },\n/* harmony export */   \"cartActions\": function() { return /* binding */ cartActions; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar initialState = [];\nvar cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState: initialState,\n    reducers: {\n        addItem: function(state, action) {\n            state.push(action.payload);\n        },\n        removeItem: function(state, action) {\n            return state.filter(function(item) {\n                return item.id !== action.payload.id;\n            });\n        }\n    }\n});\nvar cartReducer = cartSlice.reducer;\nvar cartActions = cartSlice.actions;\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvY2FydC9jYXJ0LnNsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZEO0FBRzdELEdBQUssQ0FBQ0MsWUFBWSxHQUFlLENBQUMsQ0FBQztBQUU1QixHQUFLLENBQUNDLFNBQVMsR0FBR0YsNkRBQVcsQ0FBQyxDQUFDO0lBQ3BDRyxJQUFJLEVBQUUsQ0FBTTtJQUNaRixZQUFZLEVBQVpBLFlBQVk7SUFDWkcsUUFBUSxFQUFFLENBQUM7UUFDVEMsT0FBTyxFQUFFLFFBQVFDLENBQVBDLEtBQUssRUFBRUQsTUFBK0IsRUFBSyxDQUFDO1lBQ3BEQyxLQUFLLENBQUNDLElBQUksQ0FBQ0YsTUFBTSxDQUFDRyxPQUFPO1FBQzNCLENBQUM7UUFDREMsVUFBVSxFQUFFLFFBQVFKLENBQVBDLEtBQUssRUFBRUQsTUFBbUMsRUFBSyxDQUFDO1lBQy9ELE1BQU0sQ0FBQ0MsS0FBSyxDQUFDSSxNQUFNLENBQUNDLFFBQVFBLENBQVJBLElBQUk7Z0JBQUlBLE1BQU0sQ0FBTkEsSUFBSSxDQUFDQyxFQUFFLEtBQUlQLE1BQU0sQ0FBQ0csT0FBTyxDQUFDSSxFQUFFOztRQUN4RCxDQUFDO0lBQ0QsQ0FBQztBQUNILENBQUM7QUFFTSxHQUFLLENBQUNDLFdBQVcsR0FBR1osU0FBUyxDQUFDYSxPQUFPO0FBQ3JDLEdBQUssQ0FBQ0MsV0FBVyxHQUFHZCxTQUFTLENBQUNlLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3N0b3JlL2NhcnQvY2FydC5zbGljZS50cz80N2Y1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tIFwiLi4vcHJvZHVjdC9wcm9kdWN0LnR5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IElQcm9kdWN0W10gPSBbXTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJjYXJ0XCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBhZGRJdGVtOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJUHJvZHVjdD4pID0+IHtcclxuICAgICAgc3RhdGUucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlSXRlbTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248e2lkOiBudW1iZXJ9PikgPT4ge1xyXG5cdFx0cmV0dXJuIHN0YXRlLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQhPT0gYWN0aW9uLnBheWxvYWQuaWQpO1xyXG5cdCB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhcnRSZWR1Y2VyID0gY2FydFNsaWNlLnJlZHVjZXI7XHJcbmV4cG9ydCBjb25zdCBjYXJ0QWN0aW9ucyA9IGNhcnRTbGljZS5hY3Rpb25zOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImNhcnRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZEl0ZW0iLCJhY3Rpb24iLCJzdGF0ZSIsInB1c2giLCJwYXlsb2FkIiwicmVtb3ZlSXRlbSIsImZpbHRlciIsIml0ZW0iLCJpZCIsImNhcnRSZWR1Y2VyIiwicmVkdWNlciIsImNhcnRBY3Rpb25zIiwiYWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/store/cart/cart.slice.ts\n");

/***/ })

});
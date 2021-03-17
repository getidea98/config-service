(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-v-data-v-module"],{

/***/ "22OH":
/*!********************************************************!*\
  !*** ./src/app/routes/data-v/data-v-routing.module.ts ***!
  \********************************************************/
/*! exports provided: DataVRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataVRoutingModule", function() { return DataVRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _relation_relation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relation/relation.component */ "sYl0");




const routes = [{ path: 'relation', component: _relation_relation_component__WEBPACK_IMPORTED_MODULE_3__["RelationComponent"] }];
let DataVRoutingModule = class DataVRoutingModule {
};
DataVRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DataVRoutingModule);



/***/ }),

/***/ "U7pw":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/data-v/relation/relation.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header [title]=\"'asdf'\"></page-header>\n");

/***/ }),

/***/ "gkWZ":
/*!************************************************!*\
  !*** ./src/app/routes/data-v/data-v.module.ts ***!
  \************************************************/
/*! exports provided: DataVModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataVModule", function() { return DataVModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _data_v_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-v-routing.module */ "22OH");
/* harmony import */ var _relation_relation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relation/relation.component */ "sYl0");





const COMPONENTS = [_relation_relation_component__WEBPACK_IMPORTED_MODULE_4__["RelationComponent"]];
let DataVModule = class DataVModule {
};
DataVModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _data_v_routing_module__WEBPACK_IMPORTED_MODULE_3__["DataVRoutingModule"]],
        declarations: [...COMPONENTS],
    })
], DataVModule);



/***/ }),

/***/ "sYl0":
/*!**************************************************************!*\
  !*** ./src/app/routes/data-v/relation/relation.component.ts ***!
  \**************************************************************/
/*! exports provided: RelationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationComponent", function() { return RelationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_relation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./relation.component.html */ "U7pw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let RelationComponent = class RelationComponent {
};
RelationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-data-v-relation',
        template: _raw_loader_relation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], RelationComponent);



/***/ })

}]);
//# sourceMappingURL=data-v-data-v-module.js.map
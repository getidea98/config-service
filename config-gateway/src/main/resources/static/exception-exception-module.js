(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exception-exception-module"],{

/***/ "0O26":
/*!********************************************************************!*\
  !*** ./node_modules/@delon/abc/__ivy_ngcc__/fesm2015/exception.js ***!
  \********************************************************************/
/*! exports provided: ExceptionComponent, ExceptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionComponent", function() { return ExceptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionModule", function() { return ExceptionModule; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");











/**
 * @fileoverview added by tsickle
 * Generated from: exception.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */










const _c0 = ["conTpl"];
const _c1 = function () { return ["/"]; };
function ExceptionComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1))("nzType", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.locale.backToHome);
} }
const _c2 = ["*"];
class ExceptionComponent {
    /**
     * @param {?} i18n
     * @param {?} dom
     * @param {?} directionality
     */
    constructor(i18n, dom, directionality) {
        this.i18n = i18n;
        this.dom = dom;
        this.directionality = directionality;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.locale = {};
        this.hasCon = false;
        this.dir = 'ltr';
        this._img = '';
        this._title = '';
        this._desc = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        /** @type {?} */
        const item = {
            403: {
                img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
                title: '403',
            },
            404: {
                img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
                title: '404',
            },
            500: {
                img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
                title: '500',
            },
        }[value];
        if (!item)
            return;
        this.fixImg(item.img);
        this._type = value;
        this._title = item.title;
        this._desc = '';
    }
    /**
     * @private
     * @param {?} src
     * @return {?}
     */
    fixImg(src) {
        this._img = this.dom.bypassSecurityTrustStyle(`url('${src}')`);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set img(value) {
        this.fixImg(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        this._title = this.dom.bypassSecurityTrustHtml(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set desc(value) {
        this._desc = this.dom.bypassSecurityTrustHtml(value);
    }
    /**
     * @return {?}
     */
    checkContent() {
        this.hasCon = !Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(this.conTpl.nativeElement);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((/**
         * @param {?} direction
         * @return {?}
         */
        (direction) => {
            this.dir = direction;
        }));
        this.i18n.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => (this.locale = this.i18n.getData('exception'))));
        this.checkContent();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
ExceptionComponent.ɵfac = function ExceptionComponent_Factory(t) { return new (t || ExceptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_delon_theme__WEBPACK_IMPORTED_MODULE_3__["DelonLocaleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8)); };
ExceptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExceptionComponent, selectors: [["exception"]], viewQuery: function ExceptionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.conTpl = _t.first);
    } }, hostVars: 4, hostBindings: function ExceptionComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("exception", true)("exception-rtl", ctx.dir === "rtl");
    } }, inputs: { type: "type", img: "img", title: "title", desc: "desc" }, exportAs: ["exception"], ngContentSelectors: _c2, decls: 10, vars: 5, consts: [[1, "exception__img-block"], [1, "exception__img"], [1, "exception__cont"], [1, "exception__cont-title", 3, "innerHTML"], [1, "exception__cont-desc", 3, "innerHTML"], [1, "exception__cont-actions"], [3, "cdkObserveContent"], ["conTpl", ""], ["nz-button", "", 3, "routerLink", "nzType", 4, "ngIf"], ["nz-button", "", 3, "routerLink", "nzType"]], template: function ExceptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function ExceptionComponent_Template_div_cdkObserveContent_6_listener() { return ctx.checkContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ExceptionComponent_button_9_Template, 2, 4, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", ctx._img);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx._title, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx._desc || ctx.locale[ctx._type], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hasCon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
ExceptionComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["DelonLocaleService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
ExceptionComponent.propDecorators = {
    conTpl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['conTpl', { static: true },] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    img: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    desc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExceptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'exception',
                exportAs: 'exception',
                template: "<div class=\"exception__img-block\">\n  <div class=\"exception__img\" [style.backgroundImage]=\"_img\"></div>\n</div>\n<div class=\"exception__cont\">\n  <h1 class=\"exception__cont-title\" [innerHTML]=\"_title\"></h1>\n  <div class=\"exception__cont-desc\" [innerHTML]=\"_desc || locale[_type]\"></div>\n  <div class=\"exception__cont-actions\">\n    <div (cdkObserveContent)=\"checkContent()\" #conTpl>\n      <ng-content></ng-content>\n    </div>\n    <button *ngIf=\"!hasCon\" nz-button [routerLink]=\"['/']\" [nzType]=\"'primary'\">{{ locale.backToHome }}</button>\n  </div>\n</div>\n",
                host: {
                    '[class.exception]': 'true',
                    '[class.exception-rtl]': `dir === 'rtl'`
                },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["DelonLocaleService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], img: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], desc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], conTpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['conTpl', { static: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: exception.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [ExceptionComponent];
class ExceptionModule {
}
ExceptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExceptionModule });
ExceptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExceptionModule_Factory(t) { return new (t || ExceptionModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _delon_util__WEBPACK_IMPORTED_MODULE_4__["DelonUtilModule"], _delon_theme__WEBPACK_IMPORTED_MODULE_3__["DelonLocaleModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExceptionModule, { declarations: function () { return [ExceptionComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _delon_util__WEBPACK_IMPORTED_MODULE_4__["DelonUtilModule"], _delon_theme__WEBPACK_IMPORTED_MODULE_3__["DelonLocaleModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonModule"]]; }, exports: function () { return [ExceptionComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExceptionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _delon_util__WEBPACK_IMPORTED_MODULE_4__["DelonUtilModule"], _delon_theme__WEBPACK_IMPORTED_MODULE_3__["DelonLocaleModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonModule"]],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: exception.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=exception.js.map

/***/ }),

/***/ "KAcd":
/*!***************************************************!*\
  !*** ./src/app/routes/exception/404.component.ts ***!
  \***************************************************/
/*! exports provided: Exception404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception404Component", function() { return Exception404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let Exception404Component = class Exception404Component {
};
Exception404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'exception-404',
        template: ` <exception type="404" style="min-height: 500px; height: 80%;"></exception> `,
    })
], Exception404Component);



/***/ }),

/***/ "NRFk":
/*!******************************************************!*\
  !*** ./src/app/routes/exception/exception.module.ts ***!
  \******************************************************/
/*! exports provided: ExceptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionModule", function() { return ExceptionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_abc_exception__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/abc/exception */ "0O26");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _exception_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exception-routing.module */ "vNZU");
/* harmony import */ var _403_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./403.component */ "WRKX");
/* harmony import */ var _404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./404.component */ "KAcd");
/* harmony import */ var _500_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./500.component */ "l9M9");
/* harmony import */ var _trigger_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trigger.component */ "joH7");











const COMPONENTS = [_403_component__WEBPACK_IMPORTED_MODULE_7__["Exception403Component"], _404_component__WEBPACK_IMPORTED_MODULE_8__["Exception404Component"], _500_component__WEBPACK_IMPORTED_MODULE_9__["Exception500Component"], _trigger_component__WEBPACK_IMPORTED_MODULE_10__["ExceptionTriggerComponent"]];
let ExceptionModule = class ExceptionModule {
};
ExceptionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _delon_abc_exception__WEBPACK_IMPORTED_MODULE_3__["ExceptionModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"], _exception_routing_module__WEBPACK_IMPORTED_MODULE_6__["ExceptionRoutingModule"]],
        declarations: [...COMPONENTS],
    })
], ExceptionModule);



/***/ }),

/***/ "WRKX":
/*!***************************************************!*\
  !*** ./src/app/routes/exception/403.component.ts ***!
  \***************************************************/
/*! exports provided: Exception403Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception403Component", function() { return Exception403Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let Exception403Component = class Exception403Component {
};
Exception403Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'exception-403',
        template: ` <exception type="403" style="min-height: 500px; height: 80%;"></exception> `,
    })
], Exception403Component);



/***/ }),

/***/ "joH7":
/*!*******************************************************!*\
  !*** ./src/app/routes/exception/trigger.component.ts ***!
  \*******************************************************/
/*! exports provided: ExceptionTriggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionTriggerComponent", function() { return ExceptionTriggerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/auth */ "0bRG");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "Ac7g");




let ExceptionTriggerComponent = class ExceptionTriggerComponent {
    constructor(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.types = [401, 403, 404, 500];
    }
    go(type) {
        this.http.get(`/api/${type}`).subscribe();
    }
    refresh() {
        this.tokenService.set({ token: 'invalid-token' });
        // 必须提供一个后端地址，无法通过 Mock 来模拟
        this.http.post(`https://localhost:5001/auth`).subscribe((res) => console.warn('成功', res), (err) => {
            console.log('最后结果失败', err);
        });
    }
};
ExceptionTriggerComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_delon_auth__WEBPACK_IMPORTED_MODULE_2__["DA_SERVICE_TOKEN"],] }] }
];
ExceptionTriggerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'exception-trigger',
        template: `
    <div class="pt-lg">
      <nz-card>
        <button *ngFor="let t of types" (click)="go(t)" nz-button nzDanger>触发{{ t }}</button>
        <button nz-button nzType="link" (click)="refresh()">触发刷新Token</button>
      </nz-card>
    </div>
  `,
    })
], ExceptionTriggerComponent);



/***/ }),

/***/ "l9M9":
/*!***************************************************!*\
  !*** ./src/app/routes/exception/500.component.ts ***!
  \***************************************************/
/*! exports provided: Exception500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception500Component", function() { return Exception500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let Exception500Component = class Exception500Component {
};
Exception500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'exception-500',
        template: ` <exception type="500" style="min-height: 500px; height: 80%;"></exception> `,
    })
], Exception500Component);



/***/ }),

/***/ "vNZU":
/*!**************************************************************!*\
  !*** ./src/app/routes/exception/exception-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ExceptionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionRoutingModule", function() { return ExceptionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _403_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./403.component */ "WRKX");
/* harmony import */ var _404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./404.component */ "KAcd");
/* harmony import */ var _500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./500.component */ "l9M9");
/* harmony import */ var _trigger_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trigger.component */ "joH7");







const routes = [
    { path: '403', component: _403_component__WEBPACK_IMPORTED_MODULE_3__["Exception403Component"] },
    { path: '404', component: _404_component__WEBPACK_IMPORTED_MODULE_4__["Exception404Component"] },
    { path: '500', component: _500_component__WEBPACK_IMPORTED_MODULE_5__["Exception500Component"] },
    { path: 'trigger', component: _trigger_component__WEBPACK_IMPORTED_MODULE_6__["ExceptionTriggerComponent"] },
];
let ExceptionRoutingModule = class ExceptionRoutingModule {
};
ExceptionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExceptionRoutingModule);



/***/ })

}]);
//# sourceMappingURL=exception-exception-module.js.map
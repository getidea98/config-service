(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "1LdW":
/*!*******************************************************************!*\
  !*** ./src/app/routes/dashboard/workplace/workplace.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardWorkplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardWorkplaceComponent", function() { return DashboardWorkplaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_workplace_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./workplace.component.html */ "T2h6");
/* harmony import */ var _workplace_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workplace.component.less */ "DqyN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");







let DashboardWorkplaceComponent = class DashboardWorkplaceComponent {
    // endregion
    constructor(http, msg, cdr) {
        this.http = http;
        this.msg = msg;
        this.cdr = cdr;
        this.notice = [];
        this.activities = [];
        this.loading = true;
        // region: mock data
        this.links = [
            {
                title: '操作一',
                href: '',
            },
            {
                title: '操作二',
                href: '',
            },
            {
                title: '操作三',
                href: '',
            },
            {
                title: '操作四',
                href: '',
            },
            {
                title: '操作五',
                href: '',
            },
            {
                title: '操作六',
                href: '',
            },
        ];
        this.members = [
            {
                id: 'members-1',
                title: '科学搬砖组',
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                link: '',
            },
            {
                id: 'members-2',
                title: '程序员日常',
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
                link: '',
            },
            {
                id: 'members-3',
                title: '设计天团',
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
                link: '',
            },
            {
                id: 'members-4',
                title: '中二少女团',
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
                link: '',
            },
            {
                id: 'members-5',
                title: '骗你学计算机',
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
                link: '',
            },
        ];
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["zip"])(this.http.get('/chart'), this.http.get('/api/notice'), this.http.get('/api/activities')).subscribe(([chart, notice, activities]) => {
            this.radarData = chart.radarData;
            this.notice = notice;
            this.activities = activities.map((item) => {
                item.template = item.template.split(/@\{([^{}]*)\}/gi).map((key) => {
                    if (item[key]) {
                        return `<a>${item[key].name}</a>`;
                    }
                    return key;
                });
                return item;
            });
            this.loading = false;
            this.cdr.detectChanges();
        });
    }
};
DashboardWorkplaceComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["_HttpClient"] },
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
DashboardWorkplaceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard-workplace',
        template: _raw_loader_workplace_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_workplace_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardWorkplaceComponent);



/***/ }),

/***/ "4qHX":
/*!*****************************************************!*\
  !*** ./src/app/routes/dashboard/v1/v1.component.ts ***!
  \*****************************************************/
/*! exports provided: DashboardV1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardV1Component", function() { return DashboardV1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_v1_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./v1.component.html */ "RBYa");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_abc_onboarding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/abc/onboarding */ "KLE5");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "Ac7g");






let DashboardV1Component = class DashboardV1Component {
    constructor(http, cdr, obSrv, platform) {
        this.http = http;
        this.cdr = cdr;
        this.obSrv = obSrv;
        this.platform = platform;
        this.todoData = [
            {
                completed: true,
                avatar: '1',
                name: '苏先生',
                content: `请告诉我，我应该说点什么好？`,
            },
            {
                completed: false,
                avatar: '2',
                name: 'はなさき',
                content: `ハルカソラトキヘダツヒカリ`,
            },
            {
                completed: false,
                avatar: '3',
                name: 'cipchk',
                content: `this world was never meant for one as beautiful as you.`,
            },
            {
                completed: false,
                avatar: '4',
                name: 'Kent',
                content: `my heart is beating with hers`,
            },
            {
                completed: false,
                avatar: '5',
                name: 'Are you',
                content: `They always said that I love beautiful girl than my friends`,
            },
            {
                completed: false,
                avatar: '6',
                name: 'Forever',
                content: `Walking through green fields ，sunshine in my eyes.`,
            },
        ];
        // TODO: Wait for the page to load
        setTimeout(() => this.genOnboarding(), 1000);
    }
    ngOnInit() {
        this.http.get('/chart').subscribe((res) => {
            this.webSite = res.visitData.slice(0, 10);
            this.salesData = res.salesData;
            this.offlineChartData = res.offlineChartData;
            this.cdr.detectChanges();
        });
    }
    genOnboarding() {
        const KEY = 'on-boarding';
        if (!this.platform.isBrowser || localStorage.getItem(KEY) === '1') {
            return;
        }
        this.http.get(`./assets/tmp/on-boarding.json`).subscribe((res) => {
            this.obSrv.start(res);
            localStorage.setItem(KEY, '1');
        });
    }
};
DashboardV1Component.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["_HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _delon_abc_onboarding__WEBPACK_IMPORTED_MODULE_4__["OnboardingService"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
DashboardV1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard-v1',
        template: _raw_loader_v1_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
    })
], DashboardV1Component);



/***/ }),

/***/ "69OU":
/*!********************************************************************!*\
  !*** ./node_modules/@delon/abc/__ivy_ngcc__/fesm2015/quickMenu.js ***!
  \********************************************************************/
/*! exports provided: QuickMenuComponent, QuickMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickMenuComponent", function() { return QuickMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickMenuModule", function() { return QuickMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");







/**
 * @fileoverview added by tsickle
 * Generated from: quick-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





function QuickMenuComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx_r0.icon);
} }
const _c0 = ["*"];
class QuickMenuComponent {
    /**
     * @param {?} cdr
     * @param {?} el
     * @param {?} render
     */
    constructor(cdr, el, render) {
        this.cdr = cdr;
        this.el = el;
        this.render = render;
        this.ctrlStyle = {};
        this.icon = 'question-circle';
        this.top = 120;
        this.width = 200;
        this.expand = false;
        this.expandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.show = false;
        this.initFlag = false;
    }
    /**
     * @return {?}
     */
    _click() {
        this.show = !this.show;
        this.expandChange.emit(this.show);
        this.setStyle();
    }
    /**
     * @private
     * @return {?}
     */
    setStyle() {
        this.ctrlStyle = {
            'background-color': this.bgColor,
            'border-color': this.borderColor,
        };
        /** @type {?} */
        const res = [`top:${this.top}px`, `width:${this.width}px`, `margin-right:-${this.show ? 0 : this.width}px`];
        if (this.bgColor) {
            res.push(`background-color:${this.bgColor}`);
        }
        if (this.borderColor) {
            res.push(`border-color:${this.borderColor}`);
        }
        this.render.setAttribute(this.el.nativeElement, 'style', res.join(';'));
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initFlag = true;
        this.setStyle();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.show = this.expand;
        if (this.initFlag) {
            this.setStyle();
        }
    }
}
QuickMenuComponent.ɵfac = function QuickMenuComponent_Factory(t) { return new (t || QuickMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
QuickMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuickMenuComponent, selectors: [["quick-menu"]], hostVars: 2, hostBindings: function QuickMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuickMenuComponent_click_HostBindingHandler() { return ctx._click(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("quick-menu", true);
    } }, inputs: { icon: "icon", top: "top", width: "width", expand: "expand", bgColor: "bgColor", borderColor: "borderColor" }, outputs: { expandChange: "expandChange" }, exportAs: ["quickMenu"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[1, "quick-menu__inner"], [1, "quick-menu__ctrl", 3, "ngStyle"], [1, "quick-menu__ctrl-icon"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]], template: function QuickMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, QuickMenuComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.ctrlStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.icon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
QuickMenuComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
QuickMenuComponent.propDecorators = {
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    top: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    bgColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    borderColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    expand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    expandChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_2__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], QuickMenuComponent.prototype, "top", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_2__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], QuickMenuComponent.prototype, "width", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], QuickMenuComponent.prototype, "expand", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuickMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'quick-menu',
                exportAs: 'quickMenu',
                template: "<div class=\"quick-menu__inner\">\n  <div class=\"quick-menu__ctrl\" [ngStyle]=\"ctrlStyle\">\n    <div class=\"quick-menu__ctrl-icon\">\n      <ng-container *nzStringTemplateOutlet=\"icon\">\n        <i nz-icon [nzType]=\"icon\"></i>\n      </ng-container>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                host: {
                    '[class.quick-menu]': 'true',
                    '(click)': '_click()'
                },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], top: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], expand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], expandChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], bgColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], borderColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: quick-menu.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [QuickMenuComponent];
class QuickMenuModule {
}
QuickMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: QuickMenuModule });
QuickMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function QuickMenuModule_Factory(t) { return new (t || QuickMenuModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], _delon_util__WEBPACK_IMPORTED_MODULE_2__["DelonUtilModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QuickMenuModule, { declarations: function () { return [QuickMenuComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], _delon_util__WEBPACK_IMPORTED_MODULE_2__["DelonUtilModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]]; }, exports: function () { return [QuickMenuComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuickMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], _delon_util__WEBPACK_IMPORTED_MODULE_2__["DelonUtilModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]],
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
 * Generated from: quickMenu.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=quickMenu.js.map

/***/ }),

/***/ "DqyN":
/*!*********************************************************************!*\
  !*** ./src/app/routes/dashboard/workplace/workplace.component.less ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host ::ng-deep .content {\n  display: flex;\n}\n:host ::ng-deep .content .avatar {\n  flex: 0 1 72px;\n  margin-bottom: 8px;\n}\n:host ::ng-deep .content .avatar .ant-avatar {\n  display: block;\n  width: 72px;\n  height: 72px;\n  border-radius: 72px;\n}\n:host ::ng-deep .content .desc {\n  position: relative;\n  top: 4px;\n  flex: 1 1 auto;\n  margin-left: 24px;\n  color: rgba(0, 0, 0, 0.45);\n  line-height: 22px;\n}\n:host ::ng-deep .content .desc .desc-title {\n  margin-bottom: 12px;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 28px;\n}\n:host ::ng-deep .page-extra {\n  float: right;\n  white-space: nowrap;\n}\n:host ::ng-deep .page-extra::before {\n  display: table;\n  content: '';\n}\n:host ::ng-deep .page-extra::after {\n  display: table;\n  clear: both;\n  content: '';\n}\n:host ::ng-deep .page-extra > div {\n  position: relative;\n  display: inline-block;\n  padding: 0 32px;\n}\n:host ::ng-deep .page-extra > div > p:first-child {\n  margin-bottom: 4px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n  line-height: 22px;\n}\n:host ::ng-deep .page-extra > div > p {\n  margin: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 30px;\n  line-height: 38px;\n}\n:host ::ng-deep .page-extra > div > p > span {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 20px;\n}\n:host ::ng-deep .page-extra > div::after {\n  position: absolute;\n  top: 8px;\n  right: 0;\n  width: 1px;\n  height: 40px;\n  background-color: #f0f0f0;\n  content: '';\n}\n:host ::ng-deep .page-extra > div:last-child {\n  padding-right: 0;\n}\n:host ::ng-deep .page-extra > div:last-child::after {\n  display: none;\n}\n:host ::ng-deep .project-list .ant-card-meta-description {\n  height: 44px;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.45);\n  line-height: 22px;\n}\n:host ::ng-deep .project-list .card-title {\n  font-size: 0;\n}\n:host ::ng-deep .project-list .card-title a {\n  display: inline-block;\n  height: 24px;\n  margin-left: 12px;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  line-height: 24px;\n  vertical-align: top;\n}\n:host ::ng-deep .project-list .card-title a:hover {\n  color: #1890ff;\n}\n:host ::ng-deep .project-list .project-grid {\n  width: 33.33%;\n}\n:host ::ng-deep .project-list .project-item {\n  display: flex;\n  height: 20px;\n  margin-top: 8px;\n  font-size: 12px;\n  line-height: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  word-break: break-all;\n}\n:host ::ng-deep .project-list .project-item a {\n  display: inline-block;\n  flex: 1 1 0;\n  color: rgba(0, 0, 0, 0.45);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  word-break: break-all;\n}\n:host ::ng-deep .project-list .project-item a:hover {\n  color: #1890ff;\n}\n:host ::ng-deep .project-list .project-item .datetime {\n  flex: 0 0 auto;\n  float: right;\n  color: rgba(0, 0, 0, 0.25);\n}\n:host ::ng-deep .activities {\n  padding: 0 24px 8px;\n}\n:host ::ng-deep .activities .username {\n  color: rgba(0, 0, 0, 0.85);\n}\n:host ::ng-deep .activities .event {\n  font-weight: normal;\n}\n:host ::ng-deep .members a {\n  display: block;\n  height: 24px;\n  margin: 12px 0;\n  line-height: 24px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  word-break: break-all;\n}\n:host ::ng-deep .members a .member {\n  display: inline-block;\n  max-width: 100px;\n  margin-left: 12px;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  line-height: 24px;\n  vertical-align: top;\n  transition: all 0.3s;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  word-break: break-all;\n}\n:host ::ng-deep .members a:hover span {\n  color: #1890ff;\n}\n:host ::ng-deep .datetime {\n  color: rgba(0, 0, 0, 0.25);\n}\n:host ::ng-deep .links {\n  padding: 20px 0 8px 24px;\n  font-size: 0;\n}\n:host ::ng-deep .links > a {\n  display: inline-block;\n  width: 25%;\n  margin-bottom: 13px;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n}\n:host ::ng-deep .links > a:hover {\n  color: #1890ff;\n}\n@media screen and (max-width: 1200px) and (min-width: 992px) {\n  :host ::ng-deep .active-card {\n    margin-bottom: 24px;\n  }\n  :host ::ng-deep .members {\n    margin-bottom: 0;\n  }\n  :host ::ng-deep .page-extra {\n    margin-left: -44px;\n  }\n  :host ::ng-deep .page-extra > div {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 992px) {\n  :host ::ng-deep .active-card {\n    margin-bottom: 24px;\n  }\n  :host ::ng-deep .members {\n    margin-bottom: 0;\n  }\n  :host ::ng-deep .page-extra {\n    float: none;\n    margin-right: 0;\n  }\n  :host ::ng-deep .page-extra > div {\n    padding: 0 16px;\n    text-align: left;\n  }\n  :host ::ng-deep .page-extra > div::after {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) {\n  :host ::ng-deep .page-extra {\n    margin-left: -16px;\n  }\n  :host ::ng-deep .project-list .project-grid {\n    width: 50%;\n  }\n}\n@media screen and (max-width: 576px) {\n  :host ::ng-deep .content {\n    display: block;\n  }\n  :host ::ng-deep .content .desc {\n    margin-left: 0;\n  }\n  :host ::ng-deep .page-extra > div {\n    float: none;\n  }\n}\n@media screen and (max-width: 480px) {\n  :host ::ng-deep .project-list .project-grid {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtwbGFjZS5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZy16b3Jyby1hbnRkL3NyYy9zdHlsZS9taXhpbnMvY2xlYXJmaXgubGVzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGVsb24vdGhlbWUvc3lzdGVtL21peGlucy9fdGV4dC10cnVuY2F0ZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1Riw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQUY3RjtFQUVJLGFBQUE7QUFHSjtBQUxBO0VBSU0sY0FBQTtFQUNBLGtCQUFBO0FBSU47QUFUQTtFQU9RLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBS1I7QUFmQTtFQWNNLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUFJTjtBQXZCQTtFQXFCUSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFLUjtBQTlCQTtFQWdDSSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQy9CRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FEaUNKO0FDL0JFO0VBRUUsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FEZ0NKO0FBVEk7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQVdOO0FBVk07RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBWVI7QUFWTTtFQUNFLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVlSO0FBWFE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUFhVjtBQVZNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBWVI7QUFUSTtFQUNFLGdCQUFBO0FBV047QUFWTTtFQUNFLGFBQUE7QUFZUjtBQS9FQTtFQXlFTSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBU047QUFyRkE7RUErRU0sWUFBQTtBQVNOO0FBeEZBO0VBaUZRLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVVSO0FBVFE7RUFDRSxjQUFBO0FBV1Y7QUFwR0E7RUE4Rk0sYUFBQTtBQVNOO0FBdkdBO0VBaUdNLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFRWhHSixnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBRnlHRjtBQWxIQTtFQXlHUSxxQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFRXJHTixnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBRmtIRjtBQWRRO0VBQ0UsY0FBQTtBQWdCVjtBQTlIQTtFQWtIUSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBZVI7QUFuSUE7RUF5SEksbUJBQUE7QUFhSjtBQXRJQTtFQTJITSwwQkFBQTtBQWNOO0FBeklBO0VBOEhNLG1CQUFBO0FBY047QUE1SUE7RUFtSU0sY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUVoSUosZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUY2SUY7QUF0SkE7RUF5SVEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VFMUlOLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FGMkpGO0FBakJNO0VBRUksY0FBQTtBQWtCVjtBQXZLQTtFQTJKSSwwQkFBQTtBQWVKO0FBMUtBO0VBOEpJLHdCQUFBO0VBQ0EsWUFBQTtBQWVKO0FBOUtBO0VBaUtNLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBZ0JOO0FBZk07RUFDRSxjQUFBO0FBaUJSO0FBWkU7RUFBQTtJQUVJLG1CQUFBO0VBY0o7RUFoQkE7SUFLSSxnQkFBQTtFQWNKO0VBbkJBO0lBUUksa0JBQUE7RUFjSjtFQWJJO0lBQ0UsZUFBQTtFQWVOO0FBQ0Y7QUFYRTtFQUFBO0lBRUksbUJBQUE7RUFhSjtFQWZBO0lBS0ksZ0JBQUE7RUFhSjtFQWxCQTtJQVFJLFdBQUE7SUFDQSxlQUFBO0VBYUo7RUFaSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQWNOO0VBYk07SUFDRSxhQUFBO0VBZVI7QUFDRjtBQVZFO0VBQUE7SUFFSSxrQkFBQTtFQVlKO0VBZEE7SUFNTSxVQUFBO0VBV047QUFDRjtBQVBFO0VBQUE7SUFFSSxjQUFBO0VBU0o7RUFYQTtJQUlNLGNBQUE7RUFVTjtFQU5JO0lBQ0UsV0FBQTtFQVFOO0FBQ0Y7QUFKRTtFQUFBO0lBR00sV0FBQTtFQUtOO0FBQ0YiLCJmaWxlIjoid29ya3BsYWNlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfkBkZWxvbi90aGVtZS9pbmRleCc7XG46aG9zdCA6Om5nLWRlZXAge1xuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAuYXZhdGFyIHtcbiAgICAgIGZsZXg6IDAgMSA3MnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgLmFudC1hdmF0YXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDcycHg7XG4gICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNzJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmRlc2Mge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiA0cHg7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgICAgY29sb3I6IEB0ZXh0LWNvbG9yLXNlY29uZGFyeTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgLmRlc2MtdGl0bGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBjb2xvcjogQGhlYWRpbmctY29sb3I7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5wYWdlLWV4dHJhIHtcbiAgICAuY2xlYXJmaXgoKTtcblxuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICYgPiBkaXYge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogMCAzMnB4O1xuICAgICAgJiA+IHA6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIGNvbG9yOiBAdGV4dC1jb2xvci1zZWNvbmRhcnk7XG4gICAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIH1cbiAgICAgICYgPiBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogQGhlYWRpbmctY29sb3I7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgICAgICYgPiBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogOHB4O1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYm9yZGVyLWNvbG9yLXNwbGl0O1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgJiA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5wcm9qZWN0LWxpc3Qge1xuICAgIC5hbnQtY2FyZC1tZXRhLWRlc2NyaXB0aW9uIHtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBjb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgfVxuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMDtcbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgIGNvbG9yOiBAaGVhZGluZy1jb2xvcjtcbiAgICAgICAgZm9udC1zaXplOiBAZm9udC1zaXplLWJhc2U7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogQHByaW1hcnktY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnByb2plY3QtZ3JpZCB7XG4gICAgICB3aWR0aDogMzMuMzMlO1xuICAgIH1cbiAgICAucHJvamVjdC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAudGV4dE92ZXJmbG93KCk7XG4gICAgICBhIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgY29sb3I6IEB0ZXh0LWNvbG9yLXNlY29uZGFyeTtcbiAgICAgICAgLnRleHRPdmVyZmxvdygpO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogQHByaW1hcnktY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5kYXRldGltZSB7XG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGNvbG9yOiBAZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5hY3Rpdml0aWVzIHtcbiAgICBwYWRkaW5nOiAwIDI0cHggOHB4O1xuICAgIC51c2VybmFtZSB7XG4gICAgICBjb2xvcjogQHRleHQtY29sb3I7XG4gICAgfVxuICAgIC5ldmVudCB7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cbiAgfVxuICAubWVtYmVycyB7XG4gICAgYSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIG1hcmdpbjogMTJweCAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAudGV4dE92ZXJmbG93KCk7XG4gICAgICAubWVtYmVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgY29sb3I6IEB0ZXh0LWNvbG9yO1xuICAgICAgICBmb250LXNpemU6IEBmb250LXNpemUtYmFzZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAudGV4dE92ZXJmbG93KCk7XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5kYXRldGltZSB7XG4gICAgY29sb3I6IEBkaXNhYmxlZC1jb2xvcjtcbiAgfVxuICAubGlua3Mge1xuICAgIHBhZGRpbmc6IDIwcHggMCA4cHggMjRweDtcbiAgICBmb250LXNpemU6IDA7XG4gICAgPiBhIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICAgICAgY29sb3I6IEB0ZXh0LWNvbG9yO1xuICAgICAgZm9udC1zaXplOiBAZm9udC1zaXplLWJhc2U7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBzY3JlZW4teGwpIGFuZCAobWluLXdpZHRoOiBAc2NyZWVuLWxnKSB7XG4gICAgLmFjdGl2ZS1jYXJkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICAgIC5tZW1iZXJzIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIC5wYWdlLWV4dHJhIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNDRweDtcbiAgICAgICYgPiBkaXYge1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQHNjcmVlbi1sZykge1xuICAgIC5hY3RpdmUtY2FyZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cbiAgICAubWVtYmVycyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgICAucGFnZS1leHRyYSB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICYgPiBkaXYge1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQHNjcmVlbi1tZCkge1xuICAgIC5wYWdlLWV4dHJhIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICB9XG4gICAgLnByb2plY3QtbGlzdCB7XG4gICAgICAucHJvamVjdC1ncmlkIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAc2NyZWVuLXNtKSB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAuZGVzYyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgICAucGFnZS1leHRyYSB7XG4gICAgICAmID4gZGl2IHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQHNjcmVlbi14cykge1xuICAgIC5wcm9qZWN0LWxpc3Qge1xuICAgICAgLnByb2plY3QtZ3JpZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gbWl4aW5zIGZvciBjbGVhcmZpeFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4uY2xlYXJmaXgoKSB7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzIxMzAxI2lzc3VlY29tbWVudC01ODM5NTUyMjlcbiAgJjo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjb250ZW50OiAnJztcbiAgfVxuICAmOjphZnRlciB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMjE4NjRcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBjb250ZW50OiAnJztcbiAgfVxufVxuIiwiLnRleHQtdHJ1bmNhdGUoKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGV4dE92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4udGV4dE92ZXJmbG93TXVsdGkoQGxpbmU6IDMsIEBiZzogI2ZmZikge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IEBsaW5lICogMS41ZW07XG4gIG1hcmdpbi1yaWdodDogLTFlbTtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICY6OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNHB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAwIDFweDtcbiAgICBiYWNrZ3JvdW5kOiBAYmc7XG4gICAgY29udGVudDogJy4uLic7XG4gIH1cbiAgJjo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTRweDtcbiAgICB3aWR0aDogMWVtO1xuICAgIGhlaWdodDogMWVtO1xuICAgIG1hcmdpbi10b3A6IDAuMmVtO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "ED7h":
/*!**************************************************************************!*\
  !*** ./node_modules/@delon/chart/__ivy_ngcc__/fesm2015/mini-progress.js ***!
  \**************************************************************************/
/*! exports provided: G2MiniProgressComponent, G2MiniProgressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2MiniProgressComponent", function() { return G2MiniProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2MiniProgressModule", function() { return G2MiniProgressModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");







/**
 * @fileoverview added by tsickle
 * Generated from: mini-progress.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





const _c0 = function (a0) { return { "left.%": a0 }; };
const _c1 = function (a0) { return { "background-color": a0 }; };
const _c2 = function (a0, a1, a2) { return { "background-color": a0, "width.%": a1, "height.px": a2 }; };
class G2MiniProgressComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     */
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.color = '#1890FF';
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    fixNum(value) {
        return Math.min(Math.max(Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["toNumber"])(value), 0), 100);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.target = this.fixNum(this.target);
        this.percent = this.fixNum(this.percent);
        this.cdr.detectChanges();
    }
}
G2MiniProgressComponent.ɵfac = function G2MiniProgressComponent_Factory(t) { return new (t || G2MiniProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_delon_theme__WEBPACK_IMPORTED_MODULE_2__["DelonLocaleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
G2MiniProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: G2MiniProgressComponent, selectors: [["g2-mini-progress"]], hostVars: 2, hostBindings: function G2MiniProgressComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("g2-mini-progress", true);
    } }, inputs: { color: "color", target: "target", percent: "percent", strokeWidth: "strokeWidth" }, exportAs: ["g2MiniProgress"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 15, consts: [["nz-tooltip", "", 1, "g2-mini-progress__target", 3, "nzTooltipTitle", "ngStyle"], [1, "g2-mini-progress__target-item", 3, "ngStyle"], [1, "g2-mini-progress__wrap"], [1, "g2-mini-progress__value", 3, "ngStyle"]], template: function G2MiniProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTooltipTitle", ctx.i18n.getData("miniProgress").target + ctx.target + "%")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.target));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx.color));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, ctx.color));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](11, _c2, ctx.color, ctx.percent, ctx.strokeWidth));
    } }, directives: [ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzTooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
G2MiniProgressComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["DelonLocaleService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
G2MiniProgressComponent.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    target: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    percent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], G2MiniProgressComponent.prototype, "target", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], G2MiniProgressComponent.prototype, "percent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], G2MiniProgressComponent.prototype, "strokeWidth", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2MiniProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'g2-mini-progress',
                exportAs: 'g2MiniProgress',
                template: "<div nz-tooltip [nzTooltipTitle]=\"i18n.getData('miniProgress').target + target + '%'\" class=\"g2-mini-progress__target\" [ngStyle]=\"{ 'left.%': target }\">\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n</div>\n<div class=\"g2-mini-progress__wrap\">\n  <div class=\"g2-mini-progress__value\" [ngStyle]=\"{ 'background-color': color, 'width.%': percent, 'height.px': strokeWidth }\"></div>\n</div>\n",
                host: { '[class.g2-mini-progress]': 'true' },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["DelonLocaleService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], target: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], percent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: mini-progress.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2MiniProgressComponent];
class G2MiniProgressModule {
}
G2MiniProgressModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: G2MiniProgressModule });
G2MiniProgressModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function G2MiniProgressModule_Factory(t) { return new (t || G2MiniProgressModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], _delon_theme__WEBPACK_IMPORTED_MODULE_2__["DelonLocaleModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzToolTipModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](G2MiniProgressModule, { declarations: function () { return [G2MiniProgressComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], _delon_theme__WEBPACK_IMPORTED_MODULE_2__["DelonLocaleModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzToolTipModule"]]; }, exports: function () { return [G2MiniProgressComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2MiniProgressModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], _delon_theme__WEBPACK_IMPORTED_MODULE_2__["DelonLocaleModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzToolTipModule"]],
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
 * Generated from: mini-progress.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=mini-progress.js.map

/***/ }),

/***/ "HSe5":
/*!*********************************************************************!*\
  !*** ./node_modules/@delon/chart/__ivy_ngcc__/fesm2015/timeline.js ***!
  \*********************************************************************/
/*! exports provided: G2TimelineComponent, G2TimelineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2TimelineComponent", function() { return G2TimelineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2TimelineModule", function() { return G2TimelineModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_chart_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/chart/core */ "LLZf");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/format */ "sWYD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");









/**
 * @fileoverview added by tsickle
 * Generated from: timeline.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */





function G2TimelineComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function G2TimelineComponent_nz_skeleton_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-skeleton");
} }
function G2TimelineData() { }
if (false) {}
/**
 * @record
 */
function G2TimelineMap() { }
if (false) {}
/**
 * @record
 */
function G2TimelineClickItem() { }
if (false) {}
class G2TimelineComponent extends _delon_chart_core__WEBPACK_IMPORTED_MODULE_2__["G2BaseComponent"] {
    constructor() {
        super(...arguments);
        this.maxAxis = 2;
        this.data = [];
        this.colorMap = { y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' };
        this.mask = 'HH:mm';
        this.maskSlider = 'HH:mm';
        this.position = 'top';
        this.height = 450;
        this.padding = [40, 8, 64, 40];
        this.borderWidth = 2;
        this.slider = true;
        this.clickItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // #endregion
    /**
     * @return {?}
     */
    install() {
        const { node, height, padding, slider, maxAxis, theme, maskSlider } = this;
        /** @type {?} */
        const chart = (this._chart = new ((/** @type {?} */ (window))).G2.Chart({
            container: node.nativeElement,
            autoFit: true,
            height,
            padding,
            theme,
        }));
        chart.axis('time', { title: null });
        chart.axis('y1', { title: null });
        for (let i = 2; i <= maxAxis; i++) {
            chart.axis(`y${i}`, false);
        }
        chart.line().position('time*y1');
        for (let i = 2; i <= maxAxis; i++) {
            chart.line().position(`time*y${i}`);
        }
        chart.tooltip({
            showCrosshairs: true,
            shared: true,
        });
        /** @type {?} */
        const sliderPadding = Object.assign(Object.assign({}, []), padding);
        sliderPadding[0] = 0;
        if (slider) {
            chart.option('slider', {
                height: 26,
                start: 0,
                end: 1,
                trendCfg: {
                    isArea: false,
                },
                minLimit: 2,
                formatter: (/**
                 * @param {?} val
                 * @return {?}
                 */
                (val) => Object(date_fns_format__WEBPACK_IMPORTED_MODULE_4__["default"])(val, maskSlider)),
            });
        }
        chart.on(`plot:click`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            /** @type {?} */
            const records = this._chart.getSnapRecords({ x: ev.x, y: ev.y });
            this.ngZone.run((/**
             * @return {?}
             */
            () => this.clickItem.emit({ item: records[0]._origin, ev })));
        }));
        chart.on(`legend-item:click`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            var _a;
            /** @type {?} */
            const item = (_a = ev === null || ev === void 0 ? void 0 : ev.target) === null || _a === void 0 ? void 0 : _a.get('delegateObject').item;
            /** @type {?} */
            const id = item === null || item === void 0 ? void 0 : item.id;
            /** @type {?} */
            const line = chart.geometries.find((/**
             * @param {?} w
             * @return {?}
             */
            w => w.getAttribute('position').getFields()[1] === id));
            if (line) {
                line.changeVisible(!item.unchecked);
            }
        }));
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { _chart, height, padding, mask, titleMap, position, colorMap, borderWidth, maxAxis } = this;
        /** @type {?} */
        let data = [...this.data];
        if (!_chart || !data || data.length <= 0)
            return;
        /** @type {?} */
        const arrAxis = [...Array(maxAxis)].map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        (_, index) => index + 1));
        _chart.legend({
            position,
            custom: true,
            items: arrAxis.map((/**
             * @param {?} id
             * @return {?}
             */
            id => {
                /** @type {?} */
                const key = `y${id}`;
                return (/** @type {?} */ ({ id: key, name: titleMap[key], value: key, marker: { style: { fill: colorMap[key] } } }));
            })),
        });
        // border
        _chart.geometries.forEach((/**
         * @param {?} v
         * @param {?} idx
         * @return {?}
         */
        (v, idx) => {
            v.color(((/** @type {?} */ (colorMap)))[`y${idx + 1}`]).size(borderWidth);
        }));
        _chart.height = height;
        _chart.padding = padding;
        // 转换成日期类型
        data = data
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item.time = Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["toDate"])((/** @type {?} */ (item.time)));
            item._time = +item.time;
            return item;
        }))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a._time - b._time));
        /** @type {?} */
        const max = Math.max(...arrAxis.map((/**
         * @param {?} id
         * @return {?}
         */
        id => [...data].sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => b[`y${id}`] - a[`y${id}`]))[0][`y${id}`])));
        /** @type {?} */
        const scaleOptions = {};
        arrAxis.forEach((/**
         * @param {?} id
         * @return {?}
         */
        id => {
            /** @type {?} */
            const key = `y${id}`;
            scaleOptions[key] = {
                alias: titleMap[key],
                max,
                min: 0,
            };
        }));
        _chart.scale(Object.assign({ time: {
                type: 'time',
                mask,
                range: [0, 1],
            } }, scaleOptions));
        /** @type {?} */
        const initialRange = {
            start: data[0]._time,
            end: data[data.length - 1]._time,
        };
        /** @type {?} */
        const filterData = data.filter((/**
         * @param {?} val
         * @return {?}
         */
        val => val._time >= initialRange.start && val._time <= initialRange.end));
        _chart.changeData(filterData);
        _chart.render();
    }
}
G2TimelineComponent.ɵfac = function G2TimelineComponent_Factory(t) { return ɵG2TimelineComponent_BaseFactory(t || G2TimelineComponent); };
G2TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: G2TimelineComponent, selectors: [["g2-timeline"]], inputs: { maxAxis: "maxAxis", data: "data", colorMap: "colorMap", mask: "mask", maskSlider: "maskSlider", position: "position", height: "height", padding: "padding", borderWidth: "borderWidth", slider: "slider", title: "title", titleMap: "titleMap" }, outputs: { clickItem: "clickItem" }, exportAs: ["g2Timeline"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 2, consts: [[4, "nzStringTemplateOutlet"], [4, "ngIf"], ["container", ""]], template: function G2TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, G2TimelineComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, G2TimelineComponent_nz_skeleton_1_Template, 1, 0, "nz-skeleton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", null, 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loaded);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonComponent"]], encapsulation: 2, changeDetection: 0 });
G2TimelineComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    titleMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    colorMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    mask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maskSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    borderWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clickItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2TimelineComponent.prototype, "maxAxis", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2TimelineComponent.prototype, "height", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2TimelineComponent.prototype, "borderWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2TimelineComponent.prototype, "slider", void 0);
const ɵG2TimelineComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](G2TimelineComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'g2-timeline',
                exportAs: 'g2Timeline',
                template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4>{{ title }}</h4>
    </ng-container>
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container></div>
  `,
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], null, { maxAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], colorMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maskSlider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], borderWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], clickItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], titleMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: timeline.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2TimelineComponent];
class G2TimelineModule {
}
G2TimelineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: G2TimelineModule });
G2TimelineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function G2TimelineModule_Factory(t) { return new (t || G2TimelineModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzOutletModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](G2TimelineModule, { declarations: function () { return [G2TimelineComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzOutletModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonModule"]]; }, exports: function () { return [G2TimelineComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2TimelineModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzOutletModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonModule"]],
                declarations: COMPONENTS,
                exports: COMPONENTS
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: timeline.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ "J09d":
/*!****************************************************************!*\
  !*** ./node_modules/@delon/chart/__ivy_ngcc__/fesm2015/pie.js ***!
  \****************************************************************/
/*! exports provided: G2PieComponent, G2PieModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2PieComponent", function() { return G2PieComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2PieModule", function() { return G2PieModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_chart_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/chart/core */ "LLZf");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");









/**
 * @fileoverview added by tsickle
 * Generated from: pie.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */






function G2PieComponent_nz_skeleton_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-skeleton");
} }
function G2PieComponent_div_4_h4_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r6.subTitle, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function G2PieComponent_div_4_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, G2PieComponent_div_4_h4_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.subTitle);
} }
function G2PieComponent_div_4_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r7.total, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function G2PieComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, G2PieComponent_div_4_div_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r5.total);
} }
function G2PieComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, G2PieComponent_div_4_h4_1_Template, 2, 1, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, G2PieComponent_div_4_div_2_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.total);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function G2PieComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function G2PieComponent_ul_5_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const index_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11._click(index_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "nz-divider", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, !item_r9.checked ? "#aaa" : item_r9.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.x);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r9.percent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r8.valueFormat ? ctx_r8.valueFormat(item_r9.y) : item_r9.y, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function G2PieComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, G2PieComponent_ul_5_li_1_Template, 8, 6, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.legendData);
} }
function G2PieData() { }
if (false) {}
/**
 * @record
 */
function G2PieClickItem() { }
if (false) {}
class G2PieComponent extends _delon_chart_core__WEBPACK_IMPORTED_MODULE_2__["G2BaseComponent"] {
    constructor() {
        super(...arguments);
        this.legendData = [];
        // #region fields
        this.animate = true;
        this.color = 'rgba(24, 144, 255, 0.85)';
        this.height = 0;
        this.hasLegend = false;
        this.inner = 0.75;
        this.padding = [12, 0, 12, 0];
        this.tooltip = true;
        this.lineWidth = 0;
        this.blockMaxWidth = 380;
        this.select = true;
        this.data = [];
        this.interaction = 'none';
        this.clickItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // #endregion
    /**
     * @return {?}
     */
    get block() {
        return this.hasLegend && this.el.nativeElement.clientWidth <= this.blockMaxWidth;
    }
    /**
     * @private
     * @return {?}
     */
    fixData() {
        const { percent, color } = this;
        this.isPercent = percent != null;
        if (this.isPercent) {
            this.select = false;
            this.tooltip = false;
            this.percentColor = (/**
             * @param {?} value
             * @return {?}
             */
            (value) => (value === '占比' ? color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5'));
            this.data = [
                {
                    x: '占比',
                    y: percent,
                },
                {
                    x: '反比',
                    y: 100 - percent,
                },
            ];
        }
    }
    /**
     * @return {?}
     */
    install() {
        const { node, height, padding, tooltip, inner, hasLegend, interaction, theme } = this;
        /** @type {?} */
        const chart = (this._chart = new ((/** @type {?} */ (window))).G2.Chart({
            container: node.nativeElement,
            autoFit: true,
            height,
            padding,
            theme,
        }));
        if (!tooltip) {
            chart.tooltip(false);
        }
        else {
            chart.tooltip({
                showTitle: false,
                showMarkers: false,
            });
        }
        if (interaction !== 'none') {
            chart.interaction(interaction);
        }
        chart.axis(false).legend(false).coordinate('theta', { innerRadius: inner });
        chart.filter('x', (/**
         * @param {?} _val
         * @param {?} item
         * @return {?}
         */
        (_val, item) => item.checked !== false));
        chart
            .interval()
            .adjust('stack')
            .position('y')
            .tooltip('x*percent', (/**
         * @param {?} name
         * @param {?} p
         * @return {?}
         */
        (name, p) => ({
            name,
            value: `${hasLegend ? p : (p * 100).toFixed(2)} %`,
        })))
            .state({});
        chart.on(`interval:click`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => { var _a; return this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev }); }));
        }));
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { _chart, height, padding, animate, data, lineWidth, isPercent, percentColor, colors } = this;
        if (!_chart)
            return;
        _chart.height = height;
        _chart.padding = padding;
        _chart.animate(animate);
        _chart.geometries[0].style({ lineWidth, stroke: '#fff' }).color('x', isPercent ? percentColor : colors);
        _chart.scale({
            x: {
                type: 'cat',
                range: [0, 1],
            },
        });
        // 转化 percent
        /** @type {?} */
        const totalSum = data.reduce((/**
         * @param {?} cur
         * @param {?} item
         * @return {?}
         */
        (cur, item) => cur + item.y), 0);
        for (const item of data) {
            item.percent = totalSum === 0 ? 0 : item.y / totalSum;
        }
        _chart.changeData(data);
        _chart.render();
        this.ngZone.run((/**
         * @return {?}
         */
        () => this.genLegend()));
    }
    /**
     * @private
     * @return {?}
     */
    genLegend() {
        const { hasLegend, isPercent, cdr, _chart } = this;
        if (!hasLegend || isPercent)
            return;
        this.legendData = _chart.geometries[0].dataArray.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            const origin = item[0]._origin;
            origin.color = item[0].color;
            origin.checked = true;
            origin.percent = (origin.percent * 100).toFixed(2);
            return origin;
        }));
        cdr.detectChanges();
    }
    /**
     * @param {?} i
     * @return {?}
     */
    _click(i) {
        const { legendData, _chart } = this;
        legendData[i].checked = !legendData[i].checked;
        _chart.render();
    }
    /**
     * @return {?}
     */
    onChanges() {
        this.fixData();
    }
}
G2PieComponent.ɵfac = function G2PieComponent_Factory(t) { return ɵG2PieComponent_BaseFactory(t || G2PieComponent); };
G2PieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: G2PieComponent, selectors: [["g2-pie"]], hostVars: 8, hostBindings: function G2PieComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("g2-pie", true)("g2-pie__legend-has", ctx.hasLegend)("g2-pie__legend-block", ctx.block)("g2-pie__mini", ctx.isPercent);
    } }, inputs: { animate: "animate", color: "color", height: "height", hasLegend: "hasLegend", inner: "inner", padding: "padding", tooltip: "tooltip", lineWidth: "lineWidth", blockMaxWidth: "blockMaxWidth", select: "select", data: "data", interaction: "interaction", subTitle: "subTitle", total: "total", percent: "percent", valueFormat: "valueFormat", colors: "colors" }, outputs: { clickItem: "clickItem" }, exportAs: ["g2Pie"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 3, consts: [[4, "ngIf"], [1, "g2-pie__chart"], ["container", ""], ["class", "g2-pie__total", 4, "ngIf"], ["class", "g2-pie__legend", 4, "ngIf"], [1, "g2-pie__total"], ["class", "g2-pie__total-title", 4, "ngIf"], ["class", "g2-pie__total-stat", 4, "ngIf"], [1, "g2-pie__total-title"], [4, "nzStringTemplateOutlet"], [3, "innerHTML"], [1, "g2-pie__total-stat"], [1, "g2-pie__legend"], ["class", "g2-pie__legend-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "g2-pie__legend-item", 3, "click"], [1, "g2-pie__legend-dot", 3, "ngStyle"], [1, "g2-pie__legend-title"], ["nzType", "vertical"], [1, "g2-pie__legend-percent"], [1, "g2-pie__legend-value", 3, "innerHTML"]], template: function G2PieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, G2PieComponent_nz_skeleton_0_Template, 1, 0, "nz-skeleton", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, G2PieComponent_div_4_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, G2PieComponent_ul_5_Template, 2, 1, "ul", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.subTitle || ctx.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasLegend && (ctx.legendData == null ? null : ctx.legendData.length));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonComponent"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerComponent"]], encapsulation: 2, changeDetection: 0 });
G2PieComponent.propDecorators = {
    animate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    subTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    total: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    hasLegend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    percent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    lineWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    blockMaxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    valueFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    colors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    interaction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clickItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2PieComponent.prototype, "animate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2PieComponent.prototype, "height", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2PieComponent.prototype, "hasLegend", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], G2PieComponent.prototype, "percent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2PieComponent.prototype, "tooltip", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2PieComponent.prototype, "lineWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2PieComponent.prototype, "blockMaxWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2PieComponent.prototype, "select", void 0);
const ɵG2PieComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](G2PieComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2PieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'g2-pie',
                exportAs: 'g2Pie',
                template: "<nz-skeleton *ngIf=\"!loaded\"></nz-skeleton>\n<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\">\n      <ng-container *nzStringTemplateOutlet=\"subTitle\">\n        <div [innerHTML]=\"subTitle\"></div>\n      </ng-container>\n    </h4>\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\">\n      <ng-container *nzStringTemplateOutlet=\"total\">\n        <div [innerHTML]=\"total\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n    <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n",
                host: {
                    '[class.g2-pie]': 'true',
                    '[class.g2-pie__legend-has]': 'hasLegend',
                    '[class.g2-pie__legend-block]': 'block',
                    '[class.g2-pie__mini]': 'isPercent'
                },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], null, { animate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hasLegend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], lineWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], blockMaxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], interaction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], clickItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], subTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], percent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], valueFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: pie.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2PieComponent];
class G2PieModule {
}
G2PieModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: G2PieModule });
G2PieModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function G2PieModule_Factory(t) { return new (t || G2PieModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](G2PieModule, { declarations: function () { return [G2PieComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonModule"]]; }, exports: function () { return [G2PieComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2PieModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonModule"]],
                declarations: COMPONENTS,
                exports: COMPONENTS
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: pie.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=pie.js.map

/***/ }),

/***/ "KLE5":
/*!*********************************************************************!*\
  !*** ./node_modules/@delon/abc/__ivy_ngcc__/fesm2015/onboarding.js ***!
  \*********************************************************************/
/*! exports provided: OnboardingComponent, OnboardingModule, OnboardingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingComponent", function() { return OnboardingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingModule", function() { return OnboardingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingService", function() { return OnboardingService; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "YF2q");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");














/**
 * @fileoverview added by tsickle
 * Generated from: onboarding.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */













function OnboardingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnboardingComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.handleMask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "max-width.px": a0, direction: a1 }; };
function OnboardingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("onboarding__light-hide", ctx_r1.running);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzPopoverTitle", ctx_r1.item.title)("nzPopoverContent", _r2)("nzPopoverVisible", !ctx_r1.running)("nzPopoverTrigger", null)("nzPopoverPlacement", ctx_r1.item.position)("nzPopoverOverlayClassName", ctx_r1.item.className)("nzPopoverOverlayStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c0, ctx_r1.item.width, ctx_r1.dir))("nzNoAnimation", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("style", ctx_r1.item.lightStyle, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeStyle"]);
} }
function OnboardingComponent_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r6.item.content, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function OnboardingComponent_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r7.active + 1, "/", ctx_r7.max, "");
} }
function OnboardingComponent_ng_template_2_a_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r12.item.skip);
} }
function OnboardingComponent_ng_template_2_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnboardingComponent_ng_template_2_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r13.to("skip"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OnboardingComponent_ng_template_2_a_5_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r8.item.skip);
} }
function OnboardingComponent_ng_template_2_a_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r15.item.prev);
} }
function OnboardingComponent_ng_template_2_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnboardingComponent_ng_template_2_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r16.to("prev"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OnboardingComponent_ng_template_2_a_6_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r9.item.prev);
} }
function OnboardingComponent_ng_template_2_a_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r18.item.next);
} }
function OnboardingComponent_ng_template_2_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnboardingComponent_ng_template_2_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.to("next"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OnboardingComponent_ng_template_2_a_7_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r10.item.next);
} }
function OnboardingComponent_ng_template_2_a_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r21.item.done);
} }
function OnboardingComponent_ng_template_2_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnboardingComponent_ng_template_2_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r22.to("done"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OnboardingComponent_ng_template_2_a_8_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r11.item.done);
} }
function OnboardingComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, OnboardingComponent_ng_template_2_ng_container_0_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OnboardingComponent_ng_template_2_ng_container_3_Template, 2, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OnboardingComponent_ng_template_2_a_5_Template, 2, 1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, OnboardingComponent_ng_template_2_a_6_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, OnboardingComponent_ng_template_2_a_7_Template, 2, 1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, OnboardingComponent_ng_template_2_a_8_Template, 2, 1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.item.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.config.showTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.last && ctx_r3.item.skip !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.first && ctx_r3.item.prev !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.last && ctx_r3.item.next !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.last && ctx_r3.item.done !== null);
} }
function OnboardingLightData() { }
if (false) {}
class OnboardingComponent {
    /**
     * @param {?} el
     * @param {?} doc
     * @param {?} platform
     * @param {?} cdr
     */
    constructor(el, doc, platform, cdr) {
        this.el = el;
        this.doc = doc;
        this.platform = platform;
        this.cdr = cdr;
        this.active = 0;
        this.max = 0;
        this.op = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.running = false;
        this.dir = 'ltr';
    }
    /**
     * @return {?}
     */
    get first() {
        return this.active === 0;
    }
    /**
     * @return {?}
     */
    get last() {
        return this.active === this.max - 1;
    }
    /**
     * @private
     * @return {?}
     */
    _getDoc() {
        return this.doc;
    }
    /**
     * @private
     * @return {?}
     */
    _getWin() {
        return this._getDoc().defaultView || window;
    }
    /**
     * @private
     * @return {?}
     */
    getLightData() {
        /** @type {?} */
        const doc = this._getDoc();
        /** @type {?} */
        const win = this._getWin();
        /** @type {?} */
        const el = (/** @type {?} */ (doc.querySelector(this.item.selectors)));
        if (!el) {
            return null;
        }
        /** @type {?} */
        const scrollTop = win.pageYOffset || doc.documentElement.scrollTop || doc.body.scrollTop;
        /** @type {?} */
        const scrollLeft = win.pageXOffset || doc.documentElement.scrollLeft || doc.body.scrollLeft;
        /** @type {?} */
        const rect = el.getBoundingClientRect();
        /** @type {?} */
        const top = rect.top + scrollTop;
        /** @type {?} */
        const left = rect.left + scrollLeft;
        /** @type {?} */
        const padding = 8;
        /** @type {?} */
        const needPadding = top > padding && left > padding;
        /** @type {?} */
        const offsetPos = needPadding ? padding : 0;
        /** @type {?} */
        const offsetWH = needPadding ? padding * 2 : 0;
        return {
            top: top - offsetPos,
            left: left - offsetPos,
            width: rect.width + offsetWH,
            height: rect.height + offsetWH,
            el,
            clientWidth: doc.body.clientWidth,
            clientHeight: doc.body.clientHeight,
        };
    }
    /**
     * @private
     * @param {?} pos
     * @return {?}
     */
    scroll(pos) {
        this.prevSelectorEl = pos.el;
        /** @type {?} */
        const scrollY = pos.top - (pos.clientHeight - pos.height) / 2;
        this._getWin().scrollTo({ top: scrollY });
        this.updatePrevElStatus(true);
    }
    /**
     * @param {?} status
     * @return {?}
     */
    updateRunning(status) {
        this.running = status;
        this.cdr.detectChanges();
        if (!status) {
            this.updatePosition();
        }
    }
    /**
     * @private
     * @return {?}
     */
    updatePosition() {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const pos = this.getLightData();
        if (pos == null) {
            console.warn(`Did not matches selectors [${this.item.selectors}]`);
            return;
        }
        /** @type {?} */
        const lightStyle = ((/** @type {?} */ (this.el.nativeElement.querySelector('.onboarding__light')))).style;
        lightStyle.top = `${pos.top}px`;
        lightStyle.left = `${pos.left}px`;
        lightStyle.width = `${pos.width}px`;
        lightStyle.height = `${pos.height}px`;
        this.updatePrevElStatus(false);
        this.scroll(pos);
    }
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    updatePrevElStatus(status) {
        if (this.prevSelectorEl) {
            this.prevSelectorEl.classList[status ? 'add' : 'remove']('onboarding__light-el');
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    to(type) {
        this.op.emit(type);
    }
    /**
     * @return {?}
     */
    handleMask() {
        if (this.config.maskClosable === true) {
            this.to('done');
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearTimeout(this.time);
        this.updatePrevElStatus(false);
    }
}
OnboardingComponent.ɵfac = function OnboardingComponent_Factory(t) { return new (t || OnboardingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
OnboardingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OnboardingComponent, selectors: [["onboarding"]], hostVars: 5, hostBindings: function OnboardingComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-onboarding-active", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("onboarding", true)("onboarding-rtl", ctx.dir === "rtl");
    } }, decls: 4, vars: 2, consts: [["class", "onboarding__mask", 3, "click", 4, "ngIf"], ["class", "onboarding__light", "nz-popover", "", 3, "onboarding__light-hide", "nzPopoverTitle", "nzPopoverContent", "nzPopoverVisible", "nzPopoverTrigger", "nzPopoverPlacement", "nzPopoverOverlayClassName", "nzPopoverOverlayStyle", "nzNoAnimation", 4, "ngIf"], ["content", ""], [1, "onboarding__mask", 3, "click"], ["nz-popover", "", 1, "onboarding__light", 3, "nzPopoverTitle", "nzPopoverContent", "nzPopoverVisible", "nzPopoverTrigger", "nzPopoverPlacement", "nzPopoverOverlayClassName", "nzPopoverOverlayStyle", "nzNoAnimation"], [4, "nzStringTemplateOutlet"], [1, "flex-center-between", "onboarding__footer"], [1, "onboarding__total"], [4, "ngIf"], [1, "onboarding__btns"], ["nz-button", "", "nzType", "link", "nzSize", "small", "data-btnType", "skip", 3, "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", "data-btnType", "prev", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "data-btnType", "next", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "data-btnType", "done", 3, "click", 4, "ngIf"], [3, "innerHTML"], ["nz-button", "", "nzType", "link", "nzSize", "small", "data-btnType", "skip", 3, "click"], ["nz-button", "", "nzSize", "small", "data-btnType", "prev", 3, "click"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "data-btnType", "next", 3, "click"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "data-btnType", "done", 3, "click"]], template: function OnboardingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, OnboardingComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OnboardingComponent_div_1_Template, 1, 14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OnboardingComponent_ng_template_2_Template, 9, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.running && ctx.config.mask);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_12__["NzPopoverDirective"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_10__["NzNoAnimationDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_11__["NzStringTemplateOutletDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
OnboardingComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OnboardingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'onboarding',
                template: "<div *ngIf=\"!running && config.mask\" class=\"onboarding__mask\" (click)=\"handleMask()\"></div>\n<div\n  *ngIf=\"item\"\n  class=\"onboarding__light\"\n  [class.onboarding__light-hide]=\"running\"\n  [attr.style]=\"item.lightStyle\"\n  nz-popover\n  [nzPopoverTitle]=\"item.title\"\n  [nzPopoverContent]=\"content\"\n  [nzPopoverVisible]=\"!running\"\n  [nzPopoverTrigger]=\"null\"\n  [nzPopoverPlacement]=\"item.position\"\n  [nzPopoverOverlayClassName]=\"item.className\"\n  [nzPopoverOverlayStyle]=\"{ 'max-width.px': item.width, direction: dir }\"\n  [nzNoAnimation]=\"true\"\n></div>\n<ng-template #content>\n  <ng-container *nzStringTemplateOutlet=\"item.content\">\n    <div [innerHTML]=\"item.content\"></div>\n  </ng-container>\n  <div class=\"flex-center-between onboarding__footer\">\n    <span class=\"onboarding__total\">\n      <ng-container *ngIf=\"config.showTotal\">{{ active + 1 }}/{{ max }}</ng-container>\n    </span>\n    <div class=\"onboarding__btns\">\n      <a *ngIf=\"!last && item.skip !== null\" nz-button nzType=\"link\" (click)=\"to('skip')\" nzSize=\"small\" data-btnType=\"skip\">\n        <ng-container *nzStringTemplateOutlet=\"item.skip\">{{ item.skip }}</ng-container>\n      </a>\n      <a *ngIf=\"!first && item.prev !== null\" nz-button (click)=\"to('prev')\" nzSize=\"small\" data-btnType=\"prev\">\n        <ng-container *nzStringTemplateOutlet=\"item.prev\">{{ item.prev }}</ng-container>\n      </a>\n      <a *ngIf=\"!last && item.next !== null\" nz-button (click)=\"to('next')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"next\">\n        <ng-container *nzStringTemplateOutlet=\"item.next\">{{ item.next }}</ng-container>\n      </a>\n      <a *ngIf=\"last && item.done !== null\" nz-button (click)=\"to('done')\" nzType=\"primary\" nzSize=\"small\" data-btnType=\"done\">\n        <ng-container *nzStringTemplateOutlet=\"item.done\">{{ item.done }}</ng-container>\n      </a>\n    </div>\n  </div>\n</ng-template>\n",
                host: {
                    '[class.onboarding]': `true`,
                    '[class.onboarding-rtl]': `dir === 'rtl'`,
                    '[attr.data-onboarding-active]': `active`
                },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: onboarding.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OnboardingService {
    /**
     * @param {?} i18n
     * @param {?} appRef
     * @param {?} resolver
     * @param {?} router
     * @param {?} injector
     * @param {?} doc
     * @param {?} configSrv
     * @param {?} directionality
     */
    constructor(i18n, appRef, resolver, router, injector, doc, configSrv, directionality) {
        this.i18n = i18n;
        this.appRef = appRef;
        this.resolver = resolver;
        this.router = router;
        this.injector = injector;
        this.doc = doc;
        this.configSrv = configSrv;
        this.directionality = directionality;
        this.active = 0;
        this.running$ = null;
        this._running = false;
        this.type = null;
    }
    /**
     * @private
     * @return {?}
     */
    _getDoc() {
        return this.doc;
    }
    /**
     * Get whether it is booting
     *
     * 获取是否正在引导中
     * @return {?}
     */
    get running() {
        return this._running;
    }
    /**
     * @private
     * @return {?}
     */
    attach() {
        /** @type {?} */
        const compRef = (this.compRef = this.resolver.resolveComponentFactory(OnboardingComponent).create(this.injector));
        this.appRef.attachView(compRef.hostView);
        /** @type {?} */
        const compNode = ((/** @type {?} */ (compRef.hostView))).rootNodes[0];
        /** @type {?} */
        const doc = this._getDoc();
        /** @type {?} */
        const cdk = (/** @type {?} */ (doc.querySelector('.cdk-overlay-container')));
        if (cdk) {
            doc.body.insertBefore(compNode, cdk);
        }
        else {
            doc.body.appendChild(compNode);
        }
        this.op$ = this.compRef.instance.op.subscribe((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            switch (type) {
                case 'next':
                    this.next();
                    break;
                case 'prev':
                    this.prev();
                    break;
                default:
                    this.done();
                    break;
            }
        }));
    }
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    cancelRunning() {
        if ((/** @type {?} */ (this)).running$) {
            (/** @type {?} */ (this)).running$.unsubscribe();
            (/** @type {?} */ (this)).running$ = null;
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} status
     * @return {THIS}
     */
    updateRunning(status) {
        (/** @type {?} */ (this))._running = status;
        (/** @type {?} */ ((/** @type {?} */ (this)).compRef)).instance.updateRunning(status);
        return (/** @type {?} */ (this));
    }
    /**
     * @private
     * @return {?}
     */
    destroy() {
        this.cancelRunning();
        if (this.compRef) {
            this.appRef.detachView(this.compRef.hostView);
            this.compRef.destroy();
            this.op$.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?=} isStart
     * @return {?}
     */
    showItem(isStart = false) {
        /** @type {?} */
        const items = (/** @type {?} */ (this.config.items));
        /** @type {?} */
        const item = (/** @type {?} */ (Object.assign(Object.assign({ position: 'bottomLeft', before: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(true), after: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(true) }, this.i18n.getData('onboarding')), items[this.active])));
        /** @type {?} */
        const dir = (/** @type {?} */ (this.configSrv.get('onboarding'))).direction || this.directionality.value;
        Object.assign(this.compRef.instance, { item, config: this.config, active: this.active, max: items.length, dir });
        /** @type {?} */
        const pipes = [
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((/**
             * @return {?}
             */
            () => (item.url ? this.router.navigateByUrl(item.url) : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(true)))),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const obs = this.type === 'prev' ? (/** @type {?} */ (item.after)) : (/** @type {?} */ (item.before));
                return typeof obs === 'number' ? Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(obs)) : obs;
            })),
        ];
        if (!isStart) {
            pipes.push(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1));
        }
        this.updateRunning(true);
        this.running$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(true)
            .pipe(rxjs__WEBPACK_IMPORTED_MODULE_6__["pipe"].apply(this, pipes))
            .subscribe((/**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        () => this.cancelRunning().updateRunning(false)), (/**
         * @return {?}
         */
        () => this.done()));
    }
    /**
     * Start a new user guidance
     *
     * 开启新的用户引导流程
     * @param {?} config
     * @return {?}
     */
    start(config) {
        if (this.running) {
            return;
        }
        this.destroy();
        this.config = Object.assign({ items: [], mask: true, maskClosable: true, showTotal: false }, config);
        this.active = 0;
        this.type = null;
        this.attach();
        this.showItem(true);
    }
    /**
     * Next
     *
     * 下一步
     * @return {?}
     */
    next() {
        if (this._running || this.active + 1 >= (/** @type {?} */ (this.config.items)).length) {
            this.done();
            return;
        }
        this.type = 'next';
        ++this.active;
        this.showItem();
    }
    /**
     * Prev
     *
     * 上一步
     * @return {?}
     */
    prev() {
        if (this._running || this.active - 1 < 0) {
            return;
        }
        this.type = 'prev';
        --this.active;
        this.showItem();
    }
    /**
     * Done
     *
     * 完成
     * @return {?}
     */
    done() {
        this.type = 'done';
        this.destroy();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy();
    }
}
OnboardingService.ɵfac = function OnboardingService_Factory(t) { return new (t || OnboardingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_delon_theme__WEBPACK_IMPORTED_MODULE_4__["DelonLocaleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_delon_util__WEBPACK_IMPORTED_MODULE_5__["AlainConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8)); };
/** @nocollapse */
OnboardingService.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["DelonLocaleService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _delon_util__WEBPACK_IMPORTED_MODULE_5__["AlainConfigService"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
/** @nocollapse */ OnboardingService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function OnboardingService_Factory() { return new OnboardingService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_delon_theme__WEBPACK_IMPORTED_MODULE_4__["DelonLocaleService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_delon_util__WEBPACK_IMPORTED_MODULE_5__["AlainConfigService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8)); }, token: OnboardingService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OnboardingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["DelonLocaleService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _delon_util__WEBPACK_IMPORTED_MODULE_5__["AlainConfigService"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: onboarding.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function OnboardingConfig() { }
if (false) {}
/**
 * @record
 */
function OnboardingItem() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: onboarding.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [OnboardingComponent];
class OnboardingModule {
}
OnboardingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OnboardingModule });
OnboardingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function OnboardingModule_Factory(t) { return new (t || OnboardingModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _delon_theme__WEBPACK_IMPORTED_MODULE_4__["DelonLocaleModule"], _delon_util__WEBPACK_IMPORTED_MODULE_5__["DelonUtilModule"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_12__["NzPopoverModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_11__["NzOutletModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_10__["NzNoAnimationModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OnboardingModule, { declarations: function () { return [OnboardingComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _delon_theme__WEBPACK_IMPORTED_MODULE_4__["DelonLocaleModule"], _delon_util__WEBPACK_IMPORTED_MODULE_5__["DelonUtilModule"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_12__["NzPopoverModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_11__["NzOutletModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_10__["NzNoAnimationModule"]]; }, exports: function () { return [OnboardingComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OnboardingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _delon_theme__WEBPACK_IMPORTED_MODULE_4__["DelonLocaleModule"], _delon_util__WEBPACK_IMPORTED_MODULE_5__["DelonUtilModule"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_12__["NzPopoverModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_11__["NzOutletModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_10__["NzNoAnimationModule"]],
                declarations: COMPONENTS,
                entryComponents: COMPONENTS,
                exports: COMPONENTS
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: onboarding.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=onboarding.js.map

/***/ }),

/***/ "MZk3":
/*!*****************************************************************!*\
  !*** ./src/app/routes/dashboard/monitor/monitor.component.less ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host ::ng-deep .map-chart {\n  height: 457px;\n  padding-top: 24px;\n  text-align: center;\n}\n:host ::ng-deep .map-chart img {\n  display: inline-block;\n  max-width: 100%;\n  max-height: 437px;\n}\n:host ::ng-deep .pie-card .pie-stat {\n  font-size: 24px !important;\n}\n:host ::ng-deep .active-chart {\n  position: relative;\n}\n:host ::ng-deep .active-chart g2-mini-area {\n  margin-top: 32px;\n}\n:host ::ng-deep .active-chart .active-grid p {\n  position: absolute;\n  top: 80px;\n  width: 100%;\n  padding-bottom: 4px;\n  border-bottom: 1px dashed #e9e9e9;\n}\n:host ::ng-deep .active-chart .active-grid p:last-child {\n  top: 115px;\n}\n:host ::ng-deep .active-chart .active-legend {\n  position: relative;\n  height: 20px;\n  margin-top: 8px;\n  font-size: 0;\n  line-height: 20px;\n}\n:host ::ng-deep .active-chart .active-legend span {\n  display: inline-block;\n  width: 33.33%;\n  font-size: 12px;\n  text-align: center;\n}\n:host ::ng-deep .active-chart .active-legend span:first-child {\n  text-align: left;\n}\n:host ::ng-deep .active-chart .active-legend span:last-child {\n  text-align: right;\n}\n@media screen and (max-width: 992px) {\n  :host ::ng-deep .map-chart {\n    height: auto;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbml0b3IuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEZBQTRGO0FBQzVGLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FBRjdGO0VBRUksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHSjtBQVBBO0VBTU0scUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFJTjtBQVpBO0VBYU0sMEJBQUE7QUFFTjtBQWZBO0VBaUJJLGtCQUFBO0FBQ0o7QUFsQkE7RUFtQk0sZ0JBQUE7QUFFTjtBQXJCQTtFQXVCUSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQUNSO0FBNUJBO0VBOEJRLFVBQUE7QUFDUjtBQS9CQTtFQWtDTSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQU47QUF0Q0E7RUF3Q1EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ1I7QUE1Q0E7RUE4Q1EsZ0JBQUE7QUFDUjtBQS9DQTtFQWlEUSxpQkFBQTtBQUNSO0FBSUU7RUFBQTtJQUVJLFlBQUE7RUFGSjtBQUNGIiwiZmlsZSI6Im1vbml0b3IuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+QGRlbG9uL3RoZW1lL2luZGV4Jztcbjpob3N0IDo6bmctZGVlcCB7XG4gIC5tYXAtY2hhcnQge1xuICAgIGhlaWdodDogNDU3cHg7XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGltZyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiA0MzdweDtcbiAgICB9XG4gIH1cbiAgLnBpZS1jYXJkIHtcbiAgICAucGllLXN0YXQge1xuICAgICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5hY3RpdmUtY2hhcnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBnMi1taW5pLWFyZWEge1xuICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB9XG4gICAgLmFjdGl2ZS1ncmlkIHtcbiAgICAgIHAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogODBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2U5ZTllOTtcbiAgICAgIH1cbiAgICAgIHA6bGFzdC1jaGlsZCB7XG4gICAgICAgIHRvcDogMTE1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5hY3RpdmUtbGVnZW5kIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDMzLjMzJTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICAgIHNwYW46bGFzdC1jaGlsZCB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBzY3JlZW4tbGcpIHtcbiAgICAubWFwLWNoYXJ0IHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "NBwf":
/*!****************************************************************!*\
  !*** ./node_modules/@delon/chart/__ivy_ngcc__/fesm2015/bar.js ***!
  \****************************************************************/
/*! exports provided: G2BarComponent, G2BarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2BarComponent", function() { return G2BarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2BarModule", function() { return G2BarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_chart_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/chart/core */ "LLZf");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");










/**
 * @fileoverview added by tsickle
 * Generated from: bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */





function G2BarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function G2BarComponent_nz_skeleton_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-skeleton");
} }
const TITLE_HEIGHT = 41;
/**
 * @record
 */
function G2BarData() { }
if (false) {}
/**
 * @record
 */
function G2BarClickItem() { }
if (false) {}
class G2BarComponent extends _delon_chart_core__WEBPACK_IMPORTED_MODULE_2__["G2BaseComponent"] {
    constructor() {
        super(...arguments);
        this.color = 'rgba(24, 144, 255, 0.85)';
        this.height = 0;
        this.padding = 'auto';
        this.data = [];
        this.autoLabel = true;
        this.interaction = 'none';
        this.clickItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // #endregion
    /**
     * @private
     * @return {?}
     */
    getHeight() {
        return this.title ? this.height - TITLE_HEIGHT : this.height;
    }
    /**
     * @return {?}
     */
    install() {
        const { node, padding, interaction, theme } = this;
        /** @type {?} */
        const container = (/** @type {?} */ (node.nativeElement));
        /** @type {?} */
        const chart = (this._chart = new ((/** @type {?} */ (window))).G2.Chart({
            container,
            autoFit: true,
            height: this.getHeight(),
            padding,
            theme,
        }));
        this.updatelabel();
        chart.axis('y', {
            title: null,
            line: null,
            tickLine: null,
        });
        chart.scale({
            x: {
                type: 'cat',
            },
            y: {
                min: 0,
            },
        });
        chart.tooltip({
            showTitle: false,
        });
        if (interaction !== 'none') {
            chart.interaction(interaction);
        }
        chart.legend(false);
        chart
            .interval()
            .position('x*y')
            .color('x*y', (/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => {
            /** @type {?} */
            const colorItem = this.data.find((/**
             * @param {?} w
             * @return {?}
             */
            w => w.x === x && w.y === y));
            return colorItem && colorItem.color ? colorItem.color : this.color;
        }))
            .tooltip('x*y', (/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => ({ name: x, value: y })));
        chart.on(`interval:click`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => { var _a; return this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev }); }));
        }));
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { _chart, padding, data } = this;
        if (!_chart || !data || data.length <= 0)
            return;
        this.installResizeEvent();
        /** @type {?} */
        const height = this.getHeight();
        if (_chart.height !== height) {
            _chart.height = height;
        }
        _chart.padding = padding;
        _chart.data(data);
        _chart.render();
    }
    /**
     * @private
     * @return {?}
     */
    updatelabel() {
        const { node, data, _chart } = this;
        /** @type {?} */
        const canvasWidth = node.nativeElement.clientWidth;
        /** @type {?} */
        const minWidth = data.length * 30;
        _chart.axis('x', canvasWidth > minWidth).render();
    }
    /**
     * @private
     * @return {?}
     */
    installResizeEvent() {
        if (!this.autoLabel || this.resize$)
            return;
        this.resize$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'resize')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
         * @return {?}
         */
        () => !!this._chart)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200))
            .subscribe((/**
         * @return {?}
         */
        () => this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.updatelabel()))));
    }
}
G2BarComponent.ɵfac = function G2BarComponent_Factory(t) { return ɵG2BarComponent_BaseFactory(t || G2BarComponent); };
G2BarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: G2BarComponent, selectors: [["g2-bar"]], hostVars: 2, hostBindings: function G2BarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.height, "px");
    } }, inputs: { color: "color", height: "height", padding: "padding", data: "data", autoLabel: "autoLabel", interaction: "interaction", title: "title" }, outputs: { clickItem: "clickItem" }, exportAs: ["g2Bar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 2, consts: [[4, "nzStringTemplateOutlet"], [4, "ngIf"], ["container", ""], [2, "margin-bottom", "20px"]], template: function G2BarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, G2BarComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, G2BarComponent_nz_skeleton_1_Template, 1, 0, "nz-skeleton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", null, 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loaded);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_8__["NzSkeletonComponent"]], encapsulation: 2, changeDetection: 0 });
G2BarComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    autoLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    interaction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clickItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2BarComponent.prototype, "height", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2BarComponent.prototype, "autoLabel", void 0);
const ɵG2BarComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](G2BarComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2BarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'g2-bar',
                exportAs: 'g2Bar',
                template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4 style="margin-bottom: 20px;">{{ title }}</h4>
    </ng-container>
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container></div>
  `,
                host: {
                    '[style.height.px]': 'height'
                },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], null, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autoLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], interaction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], clickItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: bar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2BarComponent];
class G2BarModule {
}
G2BarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: G2BarModule });
G2BarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function G2BarModule_Factory(t) { return new (t || G2BarModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_8__["NzSkeletonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](G2BarModule, { declarations: function () { return [G2BarComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_8__["NzSkeletonModule"]]; }, exports: function () { return [G2BarComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2BarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_8__["NzSkeletonModule"]],
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
 * Generated from: bar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=bar.js.map

/***/ }),

/***/ "OF4q":
/*!*****************************************************************!*\
  !*** ./src/app/routes/dashboard/analysis/analysis.component.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAnalysisComponent", function() { return DashboardAnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_analysis_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./analysis.component.html */ "ekBg");
/* harmony import */ var _analysis_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analysis.component.less */ "qB5D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core */ "ey9i");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");









let DashboardAnalysisComponent = class DashboardAnalysisComponent {
    constructor(http, msg, i18n, cdr) {
        this.http = http;
        this.msg = msg;
        this.i18n = i18n;
        this.cdr = cdr;
        this.data = {};
        this.loading = true;
        this.date_range = [];
        this.rankingListData = Array(7)
            .fill({})
            .map((_, i) => {
            return {
                title: this.i18n.fanyi('app.analysis.test', { no: i }),
                total: 323234,
            };
        });
        this.titleMap = {
            y1: this.i18n.fanyi('app.analysis.traffic'),
            y2: this.i18n.fanyi('app.analysis.payments'),
        };
        this.searchColumn = [
            { title: { text: '排名', i18n: 'app.analysis.table.rank' }, index: 'index' },
            {
                title: { text: '搜索关键词', i18n: 'app.analysis.table.search-keyword' },
                index: 'keyword',
                click: (item) => this.msg.success(item.keyword),
            },
            {
                type: 'number',
                title: { text: '用户数', i18n: 'app.analysis.table.users' },
                index: 'count',
                sort: {
                    compare: (a, b) => a.count - b.count,
                },
            },
            {
                type: 'number',
                title: { text: '周涨幅', i18n: 'app.analysis.table.weekly-range' },
                index: 'range',
                render: 'range',
                sort: {
                    compare: (a, b) => a.range - b.range,
                },
            },
        ];
        this.salesType = 'all';
        this.salesTotal = 0;
        this.saleTabs = [{ key: 'sales', show: true }, { key: 'visits' }];
        this.offlineIdx = 0;
    }
    ngOnInit() {
        this.http.get('/chart').subscribe((res) => {
            res.offlineData.forEach((item, idx) => {
                item.show = idx === 0;
                item.chart = Object(_delon_util__WEBPACK_IMPORTED_MODULE_6__["deepCopy"])(res.offlineChartData);
            });
            this.data = res;
            this.loading = false;
            this.changeSaleType();
        });
    }
    setDate(type) {
        this.date_range = Object(_delon_util__WEBPACK_IMPORTED_MODULE_6__["getTimeDistance"])(type);
        setTimeout(() => this.cdr.detectChanges());
    }
    changeSaleType() {
        this.salesPieData =
            this.salesType === 'all'
                ? this.data.salesTypeData
                : this.salesType === 'online'
                    ? this.data.salesTypeDataOnline
                    : this.data.salesTypeDataOffline;
        if (this.salesPieData) {
            this.salesTotal = this.salesPieData.reduce((pre, now) => now.y + pre, 0);
        }
        this.cdr.detectChanges();
    }
    handlePieValueFormat(value) {
        return Object(_shared__WEBPACK_IMPORTED_MODULE_7__["yuan"])(value);
    }
    salesChange(idx) {
        if (this.saleTabs[idx].show !== true) {
            this.saleTabs[idx].show = true;
            this.cdr.detectChanges();
        }
    }
    offlineChange(idx) {
        if (this.data.offlineData[idx].show !== true) {
            this.data.offlineData[idx].show = true;
            this.cdr.detectChanges();
        }
    }
};
DashboardAnalysisComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["_HttpClient"] },
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__["NzMessageService"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_4__["I18NService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
DashboardAnalysisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard-analysis',
        template: _raw_loader_analysis_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_analysis_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardAnalysisComponent);



/***/ }),

/***/ "RBYa":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/dashboard/v1/v1.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\n  <h1>\n    Dashboard\n    <small>Welcome !</small>\n  </h1>\n</div>\n<quick-menu>\n  <nz-list [nzBordered]=\"false\" [nzSplit]=\"false\">\n    <nz-list-item>\n      <a routerLink=\"/\">Home</a>\n    </nz-list-item>\n    <nz-list-item>\n      <a routerLink=\"/widgets\">Widgets</a>\n    </nz-list-item>\n    <nz-list-item>\n      <a routerLink=\"/style/typography\">typography</a>\n    </nz-list-item>\n    <nz-list-item>\n      <a routerLink=\"/style/gridmasonry\">gridmasonry</a>\n    </nz-list-item>\n    <nz-list-item>\n      <a routerLink=\"/pro/result/success\">success result</a>\n    </nz-list-item>\n  </nz-list>\n</quick-menu>\n<div nz-row nzGutter=\"16\">\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-primary rounded-md\">\n      <div nz-col nzSpan=\"12\" class=\"p-md text-white\">\n        <div class=\"h2 mt0\">123,456</div>\n        <p class=\"text-nowrap mb0\">Website Traffics</p>\n      </div>\n      <div nz-col nzSpan=\"12\">\n        <g2-mini-bar\n          *ngIf=\"webSite\"\n          height=\"35\"\n          color=\"#fff\"\n          borderWidth=\"3\"\n          [padding]=\"[5, 30]\"\n          [data]=\"webSite\"\n          tooltipType=\"mini\"\n        ></g2-mini-bar>\n      </div>\n    </div>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-success rounded-md\">\n      <div nz-col nzSpan=\"12\" class=\"p-md text-white\">\n        <div class=\"h2 mt0\">234,567K</div>\n        <p class=\"text-nowrap mb0\">Website Impressions</p>\n      </div>\n      <div nz-col nzSpan=\"12\">\n        <g2-mini-bar\n          *ngIf=\"webSite\"\n          height=\"35\"\n          color=\"#fff\"\n          borderWidth=\"3\"\n          [padding]=\"[5, 30]\"\n          [data]=\"webSite\"\n          tooltipType=\"mini\"\n        ></g2-mini-bar>\n      </div>\n    </div>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-orange rounded-md\">\n      <div nz-col nzSpan=\"12\" class=\"p-md text-white\">\n        <div class=\"h2 mt0\">$458,778</div>\n        <p class=\"text-nowrap mb0\">Total Sales</p>\n      </div>\n      <div nz-col nzSpan=\"12\">\n        <g2-mini-bar\n          *ngIf=\"webSite\"\n          height=\"35\"\n          color=\"#fff\"\n          borderWidth=\"3\"\n          [padding]=\"[5, 30]\"\n          [data]=\"webSite\"\n          tooltipType=\"mini\"\n        ></g2-mini-bar>\n      </div>\n    </div>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\" class=\"mb-md\">\n    <div nz-row nzType=\"flex\" nzAlign=\"middle\" class=\"bg-magenta rounded-md\">\n      <div nz-col nzSpan=\"12\" class=\"p-md text-white\">\n        <div class=\"h2 mt0\">456</div>\n        <p class=\"text-nowrap mb0\">Support Tickets</p>\n      </div>\n      <div nz-col nzSpan=\"12\">\n        <g2-mini-bar\n          *ngIf=\"webSite\"\n          height=\"35\"\n          color=\"#fff\"\n          borderWidth=\"3\"\n          [padding]=\"[5, 30]\"\n          [data]=\"webSite\"\n          tooltipType=\"mini\"\n        ></g2-mini-bar>\n      </div>\n    </div>\n  </div>\n</div>\n<div nz-row nzGutter=\"16\">\n  <div nz-col nzXs=\"24\" nzMd=\"12\">\n    <nz-card [nzBordered]=\"false\" [nzTitle]=\"salesTitle\">\n      <ng-template #salesTitle>\n        Sales Statistics\n        <small class=\"text-sm font-weight-normal\">Business Expectations & Retail Sales Statistics</small>\n      </ng-template>\n      <g2-bar *ngIf=\"salesData\" height=\"275\" [data]=\"salesData\"></g2-bar>\n    </nz-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzMd=\"12\">\n    <nz-card [nzTitle]=\"growthTitle\" [nzBordered]=\"false\">\n      <ng-template #growthTitle>\n        Growth Rate\n        <small class=\"text-sm font-weight-normal\">Business Expectations & Retail Sales Statistics</small>\n      </ng-template>\n      <g2-timeline\n        *ngIf=\"offlineChartData\"\n        [data]=\"offlineChartData\"\n        [height]=\"289\"\n        [titleMap]=\"{ y1: '客流量', y2: '支付笔数' }\"\n      ></g2-timeline>\n    </nz-card>\n  </div>\n</div>\n<div nz-row nzGutter=\"16\">\n  <div nz-col nzXs=\"24\" nzMd=\"12\">\n    <nz-card [nzBordered]=\"false\" [nzCover]=\"coverTpl\">\n      <ng-template #coverTpl>\n        <img class=\"img\" src=\"//os.alipayobjects.com/rmsportal/GhjqstwSgxBXrZS.png\" />\n      </ng-template>\n      <h3>ANT DESIGN</h3>\n      <p class=\"text-grey\">A UI Design Language</p>\n      <ol class=\"list-styled text-lg pt-md\">\n        <li>Designed by experienced team, and showcase dozens of inspiring projects.</li>\n        <li>Provide solutions for usual problems that may be encountered while developing enterprise-like complex UIs.</li>\n        <li>Dozens of flexible and practical reusable components that increase your productivity.</li>\n      </ol>\n      <p class=\"pt-md mb0\">\n        <a class=\"text-grey\" href=\"//ng.ant.design\" target=\"_blank\">View Site...</a>\n      </p>\n    </nz-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzMd=\"12\">\n    <nz-card [nzTitle]=\"recentTitle\" [nzBordered]=\"false\" class=\"ant-card__body-nopadding\">\n      <ng-template #recentTitle>\n        Recent Posts\n        <small class=\"text-sm font-weight-normal\">Venenatis portauam Inceptos ameteiam</small>\n      </ng-template>\n      <div nz-row [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm pr-md bg-grey-lighter-h point\" *ngFor=\"let item of todoData\">\n        <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n          <nz-avatar [nzSrc]=\"'./assets/tmp/img/' + item.avatar + '.png'\"></nz-avatar>\n        </div>\n        <div nz-col [nzSpan]=\"20\">\n          <strong>{{ item.name }}</strong>\n          <p class=\"mb0\">{{ item.content }}</p>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzMd=\"12\">\n    <nz-card nzTitle=\"Todo lists\" [nzBordered]=\"false\" class=\"ant-card__body-nopadding\">\n      <div nz-row [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm pr-md bg-grey-lighter-h point\" *ngFor=\"let item of todoData\">\n        <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n          <nz-avatar [nzSrc]=\"'./assets/tmp/img/' + item.avatar + '.png'\"></nz-avatar>\n        </div>\n        <div nz-col [nzSpan]=\"18\">\n          <strong>{{ item.name }}</strong>\n          <p [class.text-deleted]=\"item.completed\" class=\"mb0\">{{ item.content }}</p>\n        </div>\n        <div nz-col [nzSpan]=\"2\" class=\"text-right pr-md\">\n          <i nz-dropdown [nzDropdownMenu]=\"todoMenus\" nzPlacement=\"topRight\" nz-icon nzType=\"ellipsis\" class=\"rotate-90\"></i>\n          <nz-dropdown-menu #todoMenus=\"nzDropdownMenu\">\n            <ul nz-menu>\n              <li nz-menu-item *ngIf=\"item.completed\" (click)=\"item.completed = false\">Active</li>\n              <li nz-menu-item *ngIf=\"!item.completed\" (click)=\"item.completed = true\">Completed</li>\n              <li nz-menu-item (click)=\"todoData.splice(todoData.indexOf(item), 1)\">Delted</li>\n            </ul>\n          </nz-dropdown-menu>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "T2h6":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/dashboard/workplace/workplace.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header [breadcrumb]=\"breadcrumb\" [content]=\"content\" [extra]=\"extra\">\n  <ng-template #breadcrumb>\n    <nz-breadcrumb>\n      <nz-breadcrumb-item>\n        <a [routerLink]=\"['/']\">首页</a>\n      </nz-breadcrumb-item>\n      <nz-breadcrumb-item>\n        <a [routerLink]=\"['/']\">Dashboard</a>\n      </nz-breadcrumb-item>\n      <nz-breadcrumb-item>工作台</nz-breadcrumb-item>\n    </nz-breadcrumb>\n  </ng-template>\n  <ng-template #content>\n    <div class=\"content\">\n      <div class=\"avatar\">\n        <nz-avatar nzSrc=\"https://gw.alipayobjects.com/zos/rmsportal/lctvVCLfRpYCkYxAsiVQ.png\"></nz-avatar>\n      </div>\n      <div class=\"desc\">\n        <div class=\"desc-title\">早安，山治，我要吃肉！</div>\n        <div>假砖家 | 地球－伟大航道－黄金梅丽号－厨房－小强部门</div>\n      </div>\n    </div>\n  </ng-template>\n  <ng-template #extra>\n    <div class=\"page-extra\">\n      <div>\n        <p>项目数</p>\n        <p>56</p>\n      </div>\n      <div>\n        <p>团队内排名</p>\n        <p>\n          8\n          <span> / 24</span>\n        </p>\n      </div>\n      <div>\n        <p>项目访问</p>\n        <p>2,223</p>\n      </div>\n    </div>\n  </ng-template>\n</page-header>\n<div nz-row [nzGutter]=\"24\">\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"16\">\n    <nz-card\n      nzTitle=\"进行中的项目\"\n      [nzExtra]=\"ingExtra\"\n      [nzBordered]=\"false\"\n      [nzLoading]=\"loading\"\n      class=\"ant-card__body-nopadding mb-lg project-list\"\n    >\n      <ng-template #ingExtra>\n        <a (click)=\"msg.success('to')\">全部项目</a>\n      </ng-template>\n      <div *ngFor=\"let item of notice\" nz-card-grid class=\"project-grid\">\n        <nz-card [nzBordered]=\"false\" class=\"ant-card__body-nopadding mb0\">\n          <nz-card-meta [nzTitle]=\"noticeTitle\" [nzDescription]=\"item.description\">\n            <ng-template #noticeTitle>\n              <div class=\"card-title\">\n                <nz-avatar [nzSrc]=\"item.logo\" [nzSize]=\"'small'\"></nz-avatar>\n                <a (click)=\"msg.info('to' + item.href)\">{{ item.title }}</a>\n              </div>\n            </ng-template>\n          </nz-card-meta>\n          <div class=\"project-item\">\n            <a (click)=\"msg.info('show user: ' + item.member)\">{{ item.member }}</a>\n            <span *ngIf=\"item.updatedAt\" class=\"datetime\" title=\"{{ item.updatedAt }}\">\n              {{ item.updatedAt | _date: 'fn' }}\n            </span>\n          </div>\n        </nz-card>\n      </div>\n    </nz-card>\n    <nz-card\n      nzTitle=\"动态\"\n      [nzBordered]=\"false\"\n      [nzLoading]=\"loading\"\n      class=\"ant-card__body-nopadding mb-lg active-card\"\n    >\n      <nz-list nzSize=\"large\" class=\"activities\">\n        <nz-list-item *ngFor=\"let item of activities\">\n          <nz-list-item-meta [nzAvatar]=\"item.user.avatar\" [nzTitle]=\"activeTitle\" [nzDescription]=\"activeDescription\">\n            <ng-template #activeTitle>\n              <a (click)=\"msg.success(item.user.name)\" class=\"username\">{{ item.user.name }}</a>\n              &nbsp;\n              <span class=\"event\" [innerHTML]=\"item.template\"></span>\n            </ng-template>\n            <ng-template #activeDescription>\n              <span class=\"datetime\" title=\"{{ item.updatedAt }}\">{{ item.updatedAt | _date: 'fn' }}</span>\n            </ng-template>\n          </nz-list-item-meta>\n        </nz-list-item>\n      </nz-list>\n    </nz-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"8\">\n    <nz-card nzTitle=\"快速开始 / 便捷导航\" [nzBordered]=\"false\" class=\"ant-card__body-nopadding mb-lg\">\n      <div class=\"links\">\n        <a *ngFor=\"let item of links\" (click)=\"msg.success(item.title)\">{{ item.title }}</a>\n        <button\n          nz-button\n          (click)=\"links.push({ title: 'new titel', href: 'href' })\"\n          [nzType]=\"'dashed'\"\n          [nzSize]=\"'small'\"\n        >\n          <i nz-icon nzType=\"plus\"></i>\n          <span>添加</span>\n        </button>\n      </div>\n    </nz-card>\n    <nz-card nzTitle=\"XX 指数\" [nzBordered]=\"false\" [nzLoading]=\"loading\" class=\"mb-lg\">\n      <g2-radar *ngIf=\"radarData\" [data]=\"radarData\" [height]=\"343\" [hasLegend]=\"true\"></g2-radar>\n    </nz-card>\n    <nz-card\n      nzTitle=\"团队\"\n      [nzBordered]=\"false\"\n      [nzBodyStyle]=\"{ 'padding-top.px': 12, 'padding-bottom.px': 12 }\"\n      class=\"mb-lg\"\n    >\n      <div class=\"members\">\n        <div nz-row [nzGutter]=\"48\">\n          <div nz-col [nzSpan]=\"12\" *ngFor=\"let i of members\">\n            <a (click)=\"msg.success(i.title)\">\n              <nz-avatar [nzSrc]=\"i.logo\" [nzSize]=\"'small'\"></nz-avatar>\n              <span class=\"member\">{{ i.title }}</span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "TNWX":
/*!******************************************************************!*\
  !*** ./node_modules/@delon/chart/__ivy_ngcc__/fesm2015/radar.js ***!
  \******************************************************************/
/*! exports provided: G2RadarComponent, G2RadarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2RadarComponent", function() { return G2RadarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2RadarModule", function() { return G2RadarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_chart_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/chart/core */ "LLZf");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");









/**
 * @fileoverview added by tsickle
 * Generated from: radar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */






function G2RadarComponent_nz_skeleton_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-skeleton");
} }
function G2RadarComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.title);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function G2RadarComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function G2RadarComponent_div_4_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const idx_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7._click(idx_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24 / ctx_r4.legendData.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, !i_r5.checked ? "#aaa" : i_r5.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5.value);
} }
function G2RadarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, G2RadarComponent_div_4_div_1_Template, 5, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.legendData);
} }
function G2RadarData() { }
if (false) {}
/**
 * @record
 */
function G2RadarClickItem() { }
if (false) {}
class G2RadarComponent extends _delon_chart_core__WEBPACK_IMPORTED_MODULE_2__["G2BaseComponent"] {
    constructor() {
        super(...arguments);
        this.legendData = [];
        this.height = 0;
        this.padding = [44, 30, 16, 30];
        this.hasLegend = true;
        this.tickCount = 4;
        this.data = [];
        this.colors = ['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911'];
        this.clickItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // #endregion
    /**
     * @private
     * @return {?}
     */
    getHeight() {
        return this.height - (this.hasLegend ? 80 : 22);
    }
    /**
     * @return {?}
     */
    install() {
        const { node, padding, theme } = this;
        /** @type {?} */
        const chart = (this._chart = new ((/** @type {?} */ (window))).G2.Chart({
            container: node.nativeElement,
            autoFit: true,
            height: this.getHeight(),
            padding,
            theme,
        }));
        chart.coordinate('polar');
        chart.legend(false);
        chart.axis('label', {
            line: null,
            label: {
                offset: 8,
            },
            grid: {
                line: {
                    style: {
                        stroke: '#e9e9e9',
                        lineWidth: 1,
                        lineDash: [0, 0],
                    },
                },
            },
        });
        chart.axis('value', {
            grid: {
                line: {
                    type: 'polygon',
                    style: {
                        stroke: '#e9e9e9',
                        lineWidth: 1,
                        lineDash: [0, 0],
                    },
                },
            },
        });
        chart.filter('name', (/**
         * @param {?} name
         * @return {?}
         */
        (name) => {
            /** @type {?} */
            const legendItem = this.legendData.find((/**
             * @param {?} w
             * @return {?}
             */
            w => w.name === name));
            return legendItem ? legendItem.checked !== false : true;
        }));
        chart.line().position('label*value');
        chart.point().position('label*value').shape('circle').size(3);
        chart.render();
        chart.on(`point:click`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => { var _a; return this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev }); }));
        }));
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { _chart, padding, data, colors, tickCount } = this;
        if (!_chart || !data || data.length <= 0)
            return;
        _chart.height = this.getHeight();
        _chart.padding = padding;
        _chart.scale({
            value: {
                min: 0,
                tickCount,
            },
        });
        _chart.geometries.forEach((/**
         * @param {?} g
         * @return {?}
         */
        g => g.color('name', colors)));
        _chart.changeData(data);
        _chart.render();
        this.ngZone.run((/**
         * @return {?}
         */
        () => this.genLegend()));
    }
    /**
     * @private
     * @return {?}
     */
    genLegend() {
        const { hasLegend, cdr, _chart } = this;
        if (!hasLegend)
            return;
        this.legendData = _chart.geometries[0].dataArray.map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const origin = item[0]._origin;
            /** @type {?} */
            const result = {
                name: origin.name,
                color: item[0].color,
                checked: true,
                value: item.reduce((/**
                 * @param {?} p
                 * @param {?} n
                 * @return {?}
                 */
                (p, n) => p + n._origin.value), 0),
            };
            return result;
        }));
        cdr.detectChanges();
    }
    /**
     * @param {?} i
     * @return {?}
     */
    _click(i) {
        const { legendData, _chart } = this;
        legendData[i].checked = !legendData[i].checked;
        _chart.render();
    }
    /**
     * @return {?}
     */
    onChanges() {
        this.legendData.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => (i.checked = true)));
    }
}
G2RadarComponent.ɵfac = function G2RadarComponent_Factory(t) { return ɵG2RadarComponent_BaseFactory(t || G2RadarComponent); };
G2RadarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: G2RadarComponent, selectors: [["g2-radar"]], hostVars: 4, hostBindings: function G2RadarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.height, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("g2-radar", true);
    } }, inputs: { height: "height", padding: "padding", hasLegend: "hasLegend", tickCount: "tickCount", data: "data", colors: "colors", title: "title" }, outputs: { clickItem: "clickItem" }, exportAs: ["g2Radar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 3, consts: [[4, "ngIf"], [4, "nzStringTemplateOutlet"], ["container", ""], ["nz-row", "", "class", "g2-radar__legend", 4, "ngIf"], ["nz-row", "", 1, "g2-radar__legend"], ["nz-col", "", "class", "g2-radar__legend-item", 3, "nzSpan", "click", 4, "ngFor", "ngForOf"], ["nz-col", "", 1, "g2-radar__legend-item", 3, "nzSpan", "click"], [1, "g2-radar__legend-dot", 3, "ngStyle"], [1, "g2-radar__legend-title"]], template: function G2RadarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, G2RadarComponent_nz_skeleton_0_Template, 1, 0, "nz-skeleton", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, G2RadarComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, G2RadarComponent_div_4_Template, 2, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasLegend);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzStringTemplateOutletDirective"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], encapsulation: 2, changeDetection: 0 });
G2RadarComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    hasLegend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    tickCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    colors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clickItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2RadarComponent.prototype, "height", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2RadarComponent.prototype, "hasLegend", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2RadarComponent.prototype, "tickCount", void 0);
const ɵG2RadarComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](G2RadarComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2RadarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'g2-radar',
                exportAs: 'g2Radar',
                template: "<nz-skeleton *ngIf=\"!loaded\"></nz-skeleton>\n<ng-container *nzStringTemplateOutlet=\"title\">\n  <h4>{{ title }}</h4>\n</ng-container>\n<div #container></div>\n<div nz-row class=\"g2-radar__legend\" *ngIf=\"hasLegend\">\n  <div nz-col [nzSpan]=\"24 / legendData.length\" *ngFor=\"let i of legendData; let idx = index\" (click)=\"_click(idx)\" class=\"g2-radar__legend-item\">\n    <i class=\"g2-radar__legend-dot\" [ngStyle]=\"{ 'background-color': !i.checked ? '#aaa' : i.color }\"></i>\n    {{ i.name }}\n    <h6 class=\"g2-radar__legend-title\">{{ i.value }}</h6>\n  </div>\n</div>\n",
                host: {
                    '[style.height.px]': 'height',
                    '[class.g2-radar]': 'true'
                },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], null, { height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hasLegend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tickCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], clickItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: radar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2RadarComponent];
class G2RadarModule {
}
G2RadarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: G2RadarModule });
G2RadarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function G2RadarModule_Factory(t) { return new (t || G2RadarModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](G2RadarModule, { declarations: function () { return [G2RadarComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonModule"]]; }, exports: function () { return [G2RadarComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2RadarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonModule"]],
                declarations: COMPONENTS,
                exports: COMPONENTS
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: radar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=radar.js.map

/***/ }),

/***/ "b3am":
/*!******************************************************************!*\
  !*** ./node_modules/@delon/chart/__ivy_ngcc__/fesm2015/gauge.js ***!
  \******************************************************************/
/*! exports provided: G2GaugeComponent, G2GaugeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2GaugeComponent", function() { return G2GaugeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2GaugeModule", function() { return G2GaugeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_chart_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/chart/core */ "LLZf");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");







/**
 * @fileoverview added by tsickle
 * Generated from: gauge.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function G2GaugeComponent_nz_skeleton_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-skeleton");
} }
class G2GaugeComponent extends _delon_chart_core__WEBPACK_IMPORTED_MODULE_2__["G2BaseComponent"] {
    constructor() {
        super(...arguments);
        this.color = '#2f9cff';
        this.padding = [10, 10, 30, 10];
    }
    // #endregion
    /**
     * @return {?}
     */
    install() {
        // 自定义Shape 部分
        ((/** @type {?} */ (window))).G2.registerShape('point', 'pointer', {
            // tslint:disable-next-line: typedef
            /**
             * @param {?} cfg
             * @param {?} container
             * @return {?}
             */
            draw(cfg, container) {
                /** @type {?} */
                const group = container.addGroup({});
                // 获取极坐标系下画布中心点
                /** @type {?} */
                const center = ((/** @type {?} */ (this))).parsePoint({ x: 0, y: 0 });
                // 绘制指针
                group.addShape('line', {
                    attrs: {
                        x1: center.x,
                        y1: center.y,
                        x2: cfg.x,
                        y2: cfg.y,
                        stroke: cfg.color,
                        lineWidth: 2.5,
                        lineCap: 'round',
                    },
                });
                group.addShape('circle', {
                    attrs: {
                        x: center.x,
                        y: center.y,
                        r: 5.75,
                        stroke: cfg.color,
                        lineWidth: 2,
                        fill: '#fff',
                    },
                });
                return group;
            },
        });
        const { el, height, padding, format, theme } = this;
        /** @type {?} */
        const chart = (this._chart = new ((/** @type {?} */ (window))).G2.Chart({
            container: el.nativeElement,
            autoFit: true,
            height,
            padding,
            theme,
        }));
        chart.legend(false);
        chart.animate(false);
        chart.tooltip(false);
        chart.coordinate('polar', {
            startAngle: (-9 / 8) * Math.PI,
            endAngle: (1 / 8) * Math.PI,
            radius: 0.75,
        });
        chart.scale('value', {
            min: 0,
            max: 100,
            nice: true,
            tickCount: 6,
        });
        chart.axis('1', false);
        chart.axis('value', {
            line: null,
            label: {
                offset: -14,
                formatter: format,
            },
            tickLine: null,
            grid: null,
        });
        chart.point().position('value*1').shape('pointer');
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { _chart, percent, color, bgColor, title } = this;
        if (!_chart)
            return;
        /** @type {?} */
        const data = [{ name: title, value: percent }];
        /** @type {?} */
        const val = data[0].value;
        _chart.annotation().clear(true);
        _chart.geometries[0].color(color);
        // 绘制仪表盘背景
        _chart.annotation().arc({
            top: false,
            start: [0, 0.95],
            end: [100, 0.95],
            style: {
                stroke: bgColor,
                lineWidth: 12,
                lineDash: null,
            },
        });
        _chart.annotation().arc({
            start: [0, 0.95],
            end: [data[0].value, 0.95],
            style: {
                stroke: color,
                lineWidth: 12,
                lineDash: null,
            },
        });
        _chart.annotation().text({
            position: ['50%', '85%'],
            content: title,
            style: {
                fontSize: 12,
                fill: 'rgba(0, 0, 0, 0.43)',
                textAlign: 'center',
            },
        });
        _chart.annotation().text({
            position: ['50%', '90%'],
            content: `${val} %`,
            style: {
                fontSize: 20,
                fill: 'rgba(0, 0, 0, 0.85)',
                textAlign: 'center',
            },
            offsetY: 15,
        });
        _chart.changeData(data);
        _chart.render();
    }
}
G2GaugeComponent.ɵfac = function G2GaugeComponent_Factory(t) { return ɵG2GaugeComponent_BaseFactory(t || G2GaugeComponent); };
G2GaugeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: G2GaugeComponent, selectors: [["g2-gauge"]], hostVars: 2, hostBindings: function G2GaugeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("g2-gauge", true);
    } }, inputs: { color: "color", padding: "padding", title: "title", height: "height", bgColor: "bgColor", format: "format", percent: "percent" }, exportAs: ["g2Gauge"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function G2GaugeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, G2GaugeComponent_nz_skeleton_0_Template, 1, 0, "nz-skeleton", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_5__["NzSkeletonComponent"]], encapsulation: 2, changeDetection: 0 });
G2GaugeComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    bgColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    percent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], G2GaugeComponent.prototype, "height", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], G2GaugeComponent.prototype, "percent", void 0);
const ɵG2GaugeComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](G2GaugeComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2GaugeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'g2-gauge',
                exportAs: 'g2Gauge',
                template: `<nz-skeleton *ngIf="!loaded"></nz-skeleton>`,
                host: {
                    '[class.g2-gauge]': 'true'
                },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], null, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bgColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], percent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: gauge.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2GaugeComponent];
class G2GaugeModule {
}
G2GaugeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: G2GaugeModule });
G2GaugeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function G2GaugeModule_Factory(t) { return new (t || G2GaugeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_5__["NzSkeletonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](G2GaugeModule, { declarations: function () { return [G2GaugeComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_5__["NzSkeletonModule"]]; }, exports: function () { return [G2GaugeComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2GaugeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_5__["NzSkeletonModule"]],
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
 * Generated from: gauge.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=gauge.js.map

/***/ }),

/***/ "csJi":
/*!***********************************************************************!*\
  !*** ./node_modules/@delon/chart/__ivy_ngcc__/fesm2015/single-bar.js ***!
  \***********************************************************************/
/*! exports provided: G2SingleBarComponent, G2SingleBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2SingleBarComponent", function() { return G2SingleBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2SingleBarModule", function() { return G2SingleBarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_chart_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/chart/core */ "LLZf");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






/**
 * @fileoverview added by tsickle
 * Generated from: single-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

class G2SingleBarComponent extends _delon_chart_core__WEBPACK_IMPORTED_MODULE_2__["G2BaseComponent"] {
    constructor() {
        super(...arguments);
        // #region fields
        this.plusColor = '#40a9ff';
        this.minusColor = '#ff4d4f';
        this.height = 60;
        this.barSize = 30;
        this.min = 0;
        this.max = 100;
        this.value = 0;
        this.line = false;
        this.padding = 0;
        this.textStyle = { fontSize: 12, color: '#595959' };
    }
    // #endregion
    /**
     * @return {?}
     */
    install() {
        const { el, height, padding, textStyle, line, format, theme } = this;
        /** @type {?} */
        const chart = (this._chart = new ((/** @type {?} */ (window))).G2.Chart({
            container: el.nativeElement,
            autoFit: true,
            height,
            padding,
            theme,
        }));
        chart.legend(false);
        chart.axis(false);
        chart.tooltip(false);
        chart.coordinate().transpose();
        chart
            .interval()
            .position('1*value')
            .label('value', (/**
         * @return {?}
         */
        () => ({
            formatter: format,
            style: Object.assign({}, textStyle),
        })));
        if (line) {
            chart.annotation().line({
                start: ['50%', '0%'],
                end: ['50%', '100%'],
                style: {
                    stroke: '#e8e8e8',
                    lineDash: [0, 0],
                },
            });
        }
        chart.render();
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { _chart, height, padding, value, min, max, plusColor, minusColor, barSize } = this;
        if (!_chart)
            return;
        _chart.scale({ value: { max, min } });
        _chart.height = height;
        _chart.padding = padding;
        _chart.geometries[0].color('value', (/**
         * @param {?} val
         * @return {?}
         */
        (val) => (val > 0 ? plusColor : minusColor))).size(barSize);
        _chart.changeData([{ value }]);
        _chart.render();
    }
}
G2SingleBarComponent.ɵfac = function G2SingleBarComponent_Factory(t) { return ɵG2SingleBarComponent_BaseFactory(t || G2SingleBarComponent); };
G2SingleBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: G2SingleBarComponent, selectors: [["g2-single-bar"]], hostVars: 2, hostBindings: function G2SingleBarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.height, "px");
    } }, inputs: { plusColor: "plusColor", minusColor: "minusColor", height: "height", barSize: "barSize", min: "min", max: "max", value: "value", line: "line", padding: "padding", textStyle: "textStyle", format: "format" }, exportAs: ["g2SingleBar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function G2SingleBarComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
G2SingleBarComponent.propDecorators = {
    plusColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    minusColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    barSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    line: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    textStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2SingleBarComponent.prototype, "height", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2SingleBarComponent.prototype, "barSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2SingleBarComponent.prototype, "min", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2SingleBarComponent.prototype, "max", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2SingleBarComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2SingleBarComponent.prototype, "line", void 0);
const ɵG2SingleBarComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](G2SingleBarComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2SingleBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'g2-single-bar',
                exportAs: 'g2SingleBar',
                template: ``,
                host: {
                    '[style.height.px]': 'height'
                },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], null, { plusColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minusColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], barSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], line: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], textStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: single-bar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2SingleBarComponent];
class G2SingleBarModule {
}
G2SingleBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: G2SingleBarModule });
G2SingleBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function G2SingleBarModule_Factory(t) { return new (t || G2SingleBarModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](G2SingleBarModule, { declarations: function () { return [G2SingleBarComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"]]; }, exports: function () { return [G2SingleBarComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2SingleBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"]],
                declarations: COMPONENTS,
                exports: COMPONENTS
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: single-bar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=single-bar.js.map

/***/ }),

/***/ "eLR1":
/*!******************************************************!*\
  !*** ./src/app/routes/dashboard/dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_abc_count_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/abc/count-down */ "uKX0");
/* harmony import */ var _delon_abc_onboarding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/abc/onboarding */ "KLE5");
/* harmony import */ var _delon_abc_quick_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/abc/quick-menu */ "69OU");
/* harmony import */ var _delon_chart_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/chart/bar */ "NBwf");
/* harmony import */ var _delon_chart_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/chart/card */ "ngc+");
/* harmony import */ var _delon_chart_gauge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/chart/gauge */ "b3am");
/* harmony import */ var _delon_chart_mini_area__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/chart/mini-area */ "G9gJ");
/* harmony import */ var _delon_chart_mini_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/chart/mini-bar */ "DOVM");
/* harmony import */ var _delon_chart_mini_progress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @delon/chart/mini-progress */ "ED7h");
/* harmony import */ var _delon_chart_number_info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @delon/chart/number-info */ "vKrn");
/* harmony import */ var _delon_chart_pie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @delon/chart/pie */ "J09d");
/* harmony import */ var _delon_chart_radar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @delon/chart/radar */ "TNWX");
/* harmony import */ var _delon_chart_single_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @delon/chart/single-bar */ "csJi");
/* harmony import */ var _delon_chart_tag_cloud__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @delon/chart/tag-cloud */ "obyP");
/* harmony import */ var _delon_chart_timeline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @delon/chart/timeline */ "HSe5");
/* harmony import */ var _delon_chart_trend__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @delon/chart/trend */ "jfYz");
/* harmony import */ var _delon_chart_water_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @delon/chart/water-wave */ "oeRH");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-countdown */ "z+xu");
/* harmony import */ var _analysis_analysis_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./analysis/analysis.component */ "OF4q");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard-routing.module */ "tXNQ");
/* harmony import */ var _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./monitor/monitor.component */ "uOn2");
/* harmony import */ var _v1_v1_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./v1/v1.component */ "4qHX");
/* harmony import */ var _workplace_workplace_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./workplace/workplace.component */ "1LdW");


























const COMPONENTS = [_v1_v1_component__WEBPACK_IMPORTED_MODULE_24__["DashboardV1Component"], _analysis_analysis_component__WEBPACK_IMPORTED_MODULE_21__["DashboardAnalysisComponent"], _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_23__["DashboardMonitorComponent"], _workplace_workplace_component__WEBPACK_IMPORTED_MODULE_25__["DashboardWorkplaceComponent"]];
let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_22__["DashboardRoutingModule"],
            _delon_abc_count_down__WEBPACK_IMPORTED_MODULE_2__["CountDownModule"],
            ngx_countdown__WEBPACK_IMPORTED_MODULE_20__["CountdownModule"],
            _delon_chart_bar__WEBPACK_IMPORTED_MODULE_5__["G2BarModule"],
            _delon_chart_card__WEBPACK_IMPORTED_MODULE_6__["G2CardModule"],
            _delon_chart_gauge__WEBPACK_IMPORTED_MODULE_7__["G2GaugeModule"],
            _delon_chart_mini_area__WEBPACK_IMPORTED_MODULE_8__["G2MiniAreaModule"],
            _delon_chart_mini_bar__WEBPACK_IMPORTED_MODULE_9__["G2MiniBarModule"],
            _delon_chart_mini_progress__WEBPACK_IMPORTED_MODULE_10__["G2MiniProgressModule"],
            _delon_chart_pie__WEBPACK_IMPORTED_MODULE_12__["G2PieModule"],
            _delon_chart_radar__WEBPACK_IMPORTED_MODULE_13__["G2RadarModule"],
            _delon_chart_single_bar__WEBPACK_IMPORTED_MODULE_14__["G2SingleBarModule"],
            _delon_chart_tag_cloud__WEBPACK_IMPORTED_MODULE_15__["G2TagCloudModule"],
            _delon_chart_timeline__WEBPACK_IMPORTED_MODULE_16__["G2TimelineModule"],
            _delon_chart_water_wave__WEBPACK_IMPORTED_MODULE_18__["G2WaterWaveModule"],
            _delon_chart_number_info__WEBPACK_IMPORTED_MODULE_11__["NumberInfoModule"],
            _delon_chart_trend__WEBPACK_IMPORTED_MODULE_17__["TrendModule"],
            _delon_abc_quick_menu__WEBPACK_IMPORTED_MODULE_4__["QuickMenuModule"],
            _delon_abc_onboarding__WEBPACK_IMPORTED_MODULE_3__["OnboardingModule"],
        ],
        declarations: [...COMPONENTS],
    })
], DashboardModule);



/***/ }),

/***/ "ekBg":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/dashboard/analysis/analysis.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div nz-row [nzGutter]=\"24\" class=\"pt-lg\">\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"12\" nzLg=\"6\">\n    <g2-card [title]=\"'app.analysis.total-sales' | translate\" total=\"¥ 126,560\" contentHeight=\"44px\" [action]=\"action1\" [footer]=\"footer1\">\n      <ng-template #action1>\n        <i nz-tooltip [nzTooltipTitle]=\"'app.analysis.introduce' | translate\" nz-icon nzType=\"info-circle\"></i>\n      </ng-template>\n      <trend flag=\"up\" style=\"display: block; margin-top: 2px;\">\n        {{ 'app.analysis.week' | translate }}\n        <span class=\"pl-sm\">12%</span>\n      </trend>\n      <trend flag=\"down\">\n        {{ 'app.analysis.day' | translate }}\n        <span class=\"pl-sm\">11%</span>\n      </trend>\n      <ng-template #footer1>\n        <p class=\"text-truncate mb0\">\n          {{ 'app.analysis.day-sales' | translate }}\n          <span class=\"ml-sm\">￥12,423</span>\n        </p>\n      </ng-template>\n    </g2-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"12\" nzLg=\"6\">\n    <g2-card [title]=\"'app.analysis.visits' | translate\" total=\"8,848\" contentHeight=\"46px\" [action]=\"action2\" [footer]=\"footer2\">\n      <ng-template #action2>\n        <i nz-tooltip [nzTooltipTitle]=\"'app.analysis.introduce' | translate\" nz-icon nzType=\"info-circle\"></i>\n      </ng-template>\n      <g2-mini-area *ngIf=\"data.visitData\" color=\"#975FE4\" height=\"46\" [data]=\"data.visitData\"></g2-mini-area>\n      <ng-template #footer2>\n        <p class=\"text-truncate mb0\">\n          {{ 'app.analysis.day-visits' | translate }}\n          <span class=\"ml-sm\">1,234</span>\n        </p>\n      </ng-template>\n    </g2-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"12\" nzLg=\"6\">\n    <g2-card [title]=\"'app.analysis.payments' | translate\" total=\"6,560\" contentHeight=\"46px\" [action]=\"action3\" [footer]=\"footer3\">\n      <ng-template #action3>\n        <i nz-tooltip [nzTooltipTitle]=\"'app.analysis.introduce' | translate\" nz-icon nzType=\"info-circle\"></i>\n      </ng-template>\n      <g2-mini-bar *ngIf=\"data.visitData\" height=\"46\" [data]=\"data.visitData\"></g2-mini-bar>\n      <ng-template #footer3>\n        <p class=\"text-truncate mb0\">\n          {{ 'app.analysis.conversion-rate' | translate }}\n          <span class=\"ml-sm\">60%</span>\n        </p>\n      </ng-template>\n    </g2-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"12\" nzLg=\"6\">\n    <g2-card [title]=\"'app.analysis.operational-effect' | translate\" total=\"78%\" contentHeight=\"46px\" [action]=\"action4\" [footer]=\"footer4\">\n      <ng-template #action4>\n        <i nz-tooltip [nzTooltipTitle]=\"'app.analysis.introduce' | translate\" nz-icon nzType=\"info-circle\"></i>\n      </ng-template>\n      <g2-mini-progress height=\"46\" percent=\"78\" strokeWidth=\"8\" target=\"80\" color=\"#13C2C2\"></g2-mini-progress>\n      <ng-template #footer4>\n        <div class=\"d-flex justify-content-between text-truncate\">\n          <trend flag=\"up\">\n            {{ 'app.analysis.week' | translate }}\n            <span class=\"pl-sm\">12%</span>\n          </trend>\n          <trend flag=\"down\">\n            {{ 'app.analysis.day' | translate }}\n            <span class=\"pl-sm\">11%</span>\n          </trend>\n        </div>\n      </ng-template>\n    </g2-card>\n  </div>\n</div>\n<nz-card [nzLoading]=\"loading\" [nzBordered]=\"false\" class=\"ant-card__body-nopadding sales-card\">\n  <nz-tabset [nzTabBarExtraContent]=\"extraTemplate\" *ngIf=\"data.salesData\" (nzSelectedIndexChange)=\"salesChange($event)\">\n    <nz-tab *ngFor=\"let tab of saleTabs\" [nzTitle]=\"'app.analysis.' + tab.key | translate\">\n      <div nz-row>\n        <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"12\" nzLg=\"16\">\n          <div class=\"bar\">\n            <g2-bar\n              *ngIf=\"tab.show\"\n              height=\"295\"\n              style=\"width: 100%;\"\n              [title]=\"'app.analysis.' + tab.key + '-trend' | translate\"\n              [data]=\"data.salesData\"\n            ></g2-bar>\n          </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"12\" nzLg=\"8\">\n          <div class=\"rank\">\n            <h4 class=\"ranking-title\">{{ 'app.analysis.' + tab.key + '-ranking' | translate }}</h4>\n            <ul class=\"rank-list\">\n              <li *ngFor=\"let i of rankingListData; let idx = index\">\n                <span class=\"number\" [ngClass]=\"{ active: idx < 3 }\">{{ idx + 1 }}</span>\n                <span class=\"title\">{{ i.title }}</span>\n                <span class=\"value\">{{ i.total | number: '3.0' }}</span>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nz-tab>\n    <ng-template #extraTemplate>\n      <div class=\"sales-extra-wrap\">\n        <div class=\"sales-extra\">\n          <span (click)=\"setDate('today')\">{{ 'app.analysis.all-day' | translate }}</span>\n          <span (click)=\"setDate('week')\">{{ 'app.analysis.all-week' | translate }}</span>\n          <span (click)=\"setDate('month')\">{{ 'app.analysis.all-month' | translate }}</span>\n          <span (click)=\"setDate('year')\">{{ 'app.analysis.all-year' | translate }}</span>\n        </div>\n        <nz-range-picker [(ngModel)]=\"date_range\"></nz-range-picker>\n      </div>\n    </ng-template>\n  </nz-tabset>\n</nz-card>\n<div nz-row [nzGutter]=\"24\">\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"24\" nzLg=\"12\">\n    <nz-card\n      [nzLoading]=\"loading\"\n      [nzBordered]=\"false\"\n      [nzTitle]=\"'app.analysis.online-top-search' | translate\"\n      [nzExtra]=\"extraOp\"\n      class=\"mb-0\"\n    >\n      <ng-template #extraOp>\n        <i nz-dropdown [nzDropdownMenu]=\"extraOpMenu\" nz-icon nzType=\"ellipsis\" class=\"icon-group\"></i>\n        <nz-dropdown-menu #extraOpMenu=\"nzDropdownMenu\">\n          <ul nz-menu>\n            <li nz-menu-item>操作一</li>\n            <li nz-menu-item>操作二</li>\n          </ul>\n        </nz-dropdown-menu>\n      </ng-template>\n      <div nz-row [nzGutter]=\"64\">\n        <div nz-col nzXs=\"24\" nzSm=\"12\" class=\"mb-md\">\n          <number-info total=\"12,321\" subTotal=\"17.1\" status=\"up\" [subTitle]=\"subTitle\">\n            <ng-template #subTitle>\n              {{ 'app.analysis.search-users' | translate }}\n              <i nz-tooltip [nzTooltipTitle]=\"'app.analysis.introduce' | translate\" nz-icon nzType=\"info-circle\" class=\"ml-sm\"></i>\n            </ng-template>\n          </number-info>\n          <g2-mini-area *ngIf=\"data.visitData2\" [line]=\"true\" height=\"45\" [data]=\"data.visitData2\"></g2-mini-area>\n        </div>\n        <div nz-col nzXs=\"24\" nzSm=\"12\" class=\"mb-md\">\n          <number-info [subTitle]=\"'app.analysis.per-capita-search' | translate\" total=\"2.7\" subTotal=\"26.2\" status=\"down\"></number-info>\n          <g2-mini-area *ngIf=\"data.visitData2\" [line]=\"true\" height=\"45\" [data]=\"data.visitData2\"></g2-mini-area>\n        </div>\n      </div>\n      <st [data]=\"data.searchData\" [columns]=\"searchColumn\" size=\"small\" ps=\"5\" [page]=\"{ toTopInChange: false }\">\n        <ng-template st-row=\"range\" let-i>\n          <trend [flag]=\"i.status === 1 ? 'down' : 'up'\">\n            <span>{{ i.range }}%</span>\n          </trend>\n        </ng-template>\n      </st>\n    </nz-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"24\" nzLg=\"12\">\n    <nz-card\n      [nzLoading]=\"loading\"\n      [nzBordered]=\"false\"\n      [nzTitle]=\"'app.analysis.the-proportion-of-sales' | translate\"\n      [nzBodyStyle]=\"{ 'padding.px': 24 }\"\n      [nzExtra]=\"extra\"\n      class=\"sales-card mb-0\"\n      style=\"min-height: 502.5px;\"\n    >\n      <ng-template #extra>\n        <nz-radio-group [(ngModel)]=\"salesType\" (ngModelChange)=\"changeSaleType()\">\n          <label nz-radio-button [nzValue]=\"'all'\">\n            {{ 'app.analysis.channel.all' | translate }}\n          </label>\n          <label nz-radio-button [nzValue]=\"'online'\">\n            {{ 'app.analysis.channel.online' | translate }}\n          </label>\n          <label nz-radio-button [nzValue]=\"'offline'\">\n            {{ 'app.analysis.channel.stores' | translate }}\n          </label>\n        </nz-radio-group>\n        <i nz-dropdown [nzDropdownMenu]=\"salesExtraMenu\" nzPlacement=\"bottomLeft\" nz-icon nzType=\"ellipsis\" class=\"icon-group\"></i>\n        <nz-dropdown-menu #salesExtraMenu=\"nzDropdownMenu\">\n          <ul nz-menu>\n            <li nz-menu-item>操作一</li>\n            <li nz-menu-item>操作二</li>\n          </ul>\n        </nz-dropdown-menu>\n      </ng-template>\n      <h4 class=\"margin:8px 0 32px 0;\">{{ 'app.analysis.sales' | translate }}</h4>\n      <g2-pie\n        *ngIf=\"salesPieData\"\n        [data]=\"salesPieData\"\n        [hasLegend]=\"true\"\n        [subTitle]=\"'app.analysis.sales' | translate\"\n        [height]=\"248\"\n        [lineWidth]=\"4\"\n        [total]=\"salesTotal\"\n        [valueFormat]=\"handlePieValueFormat\"\n      >\n      </g2-pie>\n    </nz-card>\n  </div>\n</div>\n<nz-card [nzLoading]=\"loading\" [nzBordered]=\"false\" [nzBodyStyle]=\"{ padding: '0 0 32px' }\" class=\"offline-card mt-lg\">\n  <nz-tabset *ngIf=\"data.offlineData\" [(nzSelectedIndex)]=\"offlineIdx\" (nzSelectedIndexChange)=\"offlineChange($event)\">\n    <nz-tab *ngFor=\"let tab of data.offlineData; let i = index\" [nzTitle]=\"nzTabHeading\">\n      <ng-template #nzTabHeading>\n        <div nz-row [nzGutter]=\"8\" style=\"width: 138px; margin: 8px 0;\">\n          <div nz-col [nzSpan]=\"12\">\n            <number-info\n              [title]=\"tab.name\"\n              [subTitle]=\"'app.analysis.conversion-rate' | translate\"\n              gap=\"2\"\n              [total]=\"tab.cvr * 100 + '%'\"\n              [theme]=\"i !== offlineIdx && 'light'\"\n            ></number-info>\n          </div>\n          <div nz-col [nzSpan]=\"12\" style=\"padding-top: 36px;\">\n            <g2-pie\n              [animate]=\"false\"\n              [color]=\"i !== offlineIdx && '#BDE4FF'\"\n              [inner]=\"0.55\"\n              [tooltip]=\"false\"\n              [padding]=\"[0, 0, 0, 0]\"\n              [percent]=\"tab.cvr * 100\"\n              [height]=\"64\"\n            >\n            </g2-pie>\n          </div>\n        </div>\n      </ng-template>\n      <div class=\"px-lg\">\n        <g2-timeline *ngIf=\"tab.show\" [data]=\"tab.chart\" [titleMap]=\"titleMap\"></g2-timeline>\n      </div>\n    </nz-tab>\n  </nz-tabset>\n</nz-card>\n");

/***/ }),

/***/ "ixxl":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/dashboard/monitor/monitor.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div nz-row [nzGutter]=\"24\" class=\"pt-lg\">\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"24\" nzLg=\"18\">\n    <nz-card [nzTitle]=\"'app.monitor.trading-activity' | translate\" [nzBordered]=\"false\" class=\"mb-lg\">\n      <div nz-row>\n        <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\">\n          <number-info [subTitle]=\"'app.monitor.total-transactions' | translate\" [total]=\"'124,543,233'\" suffix=\"元\"></number-info>\n        </div>\n        <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\">\n          <number-info [subTitle]=\"'app.monitor.sales-target' | translate\" [total]=\"'92%'\"></number-info>\n        </div>\n        <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\">\n          <number-info [subTitle]=\"'app.monitor.remaining-time' | translate\" [total]=\"lastTotalTime\">\n            <ng-template #lastTotalTime>\n              <count-down [target]=\"30\"></count-down>\n            </ng-template>\n          </number-info>\n        </div>\n        <div nz-col nzXs=\"24\" nzSm=\"12\" nzMd=\"6\">\n          <number-info [subTitle]=\"'app.monitor.total-transactions-per-second' | translate\" [total]=\"234\" suffix=\"元\"></number-info>\n        </div>\n      </div>\n      <div class=\"map-chart\">\n        <img\n          nz-tooltip\n          [nzTooltipTitle]=\"'app.monitor.waiting-for-implementation' | translate\"\n          nzTooltipPlacement=\"top\"\n          src=\"https://gw.alipayobjects.com/zos/rmsportal/HBWnDEUXCnGnGrRfrpKa.png\"\n          alt=\"map\"\n        />\n      </div>\n    </nz-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzMd=\"24\" nzLg=\"6\">\n    <nz-card [nzTitle]=\"'app.monitor.activity-forecast' | translate\" [nzBordered]=\"false\" class=\"mb-lg\">\n      <div class=\"active-chart\" *ngIf=\"activeData\">\n        <number-info subTitle=\"目标评估\" total=\"有望达到预期\"></number-info>\n        <g2-mini-area [animate]=\"false\" line [borderWidth]=\"2\" [height]=\"84\" padding=\"0\" [data]=\"activeData\"></g2-mini-area>\n        <div class=\"active-grid\">\n          <p>{{ activeStat.max }} 亿元</p>\n          <p>{{ activeStat.min }} 亿元</p>\n        </div>\n        <div class=\"active-legend\">\n          <span>00:00</span>\n          <span>{{ activeStat.t1 }}</span>\n          <span>{{ activeStat.t2 }}</span>\n        </div>\n      </div>\n    </nz-card>\n    <nz-card [nzTitle]=\"'app.monitor.efficiency' | translate\" [nzBordered]=\"false\" [nzBodyStyle]=\"{ 'text-align': 'center' }\" class=\"mb-lg\">\n      <g2-gauge\n        *ngIf=\"percent\"\n        [title]=\"'app.monitor.ratio' | translate\"\n        [height]=\"180\"\n        [percent]=\"percent\"\n        [format]=\"couponFormat\"\n      ></g2-gauge>\n    </nz-card>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"24\">\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzLg=\"12\" class=\"mb-lg\">\n    <nz-card [nzTitle]=\"'app.monitor.proportion-per-category' | translate\" [nzBordered]=\"false\" class=\"pie-card\">\n      <div nz-row [nzGutter]=\"4\" style=\"padding: 16px 0;\">\n        <div nz-col [nzSpan]=\"8\">\n          <g2-pie\n            [animate]=\"false\"\n            [percent]=\"28\"\n            [subTitle]=\"'app.monitor.fast-food' | translate\"\n            total=\"28%\"\n            [height]=\"128\"\n            [lineWidth]=\"2\"\n          ></g2-pie>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <g2-pie\n            [animate]=\"false\"\n            color=\"#5DDECF\"\n            [percent]=\"22\"\n            [subTitle]=\"'app.monitor.western-food' | translate\"\n            total=\"22%\"\n            [height]=\"128\"\n            [lineWidth]=\"2\"\n          ></g2-pie>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <g2-pie\n            [animate]=\"false\"\n            color=\"#2FC25B\"\n            [percent]=\"32\"\n            [subTitle]=\"'app.monitor.hot-pot' | translate\"\n            total=\"32%\"\n            [height]=\"128\"\n            [lineWidth]=\"2\"\n          ></g2-pie>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzLg=\"6\" class=\"mb-lg\">\n    <nz-card [nzTitle]=\"'app.monitor.popular-searches' | translate\" [nzBordered]=\"false\">\n      <g2-tag-cloud [data]=\"tags\" [height]=\"165\"></g2-tag-cloud>\n    </nz-card>\n  </div>\n  <div nz-col nzXs=\"24\" nzSm=\"24\" nzLg=\"6\" class=\"mb-lg\">\n    <nz-card [nzTitle]=\"'app.monitor.resource-surplus' | translate\" [nzBordered]=\"false\">\n      <div class=\"text-center\">\n        <g2-water-wave [title]=\"'app.monitor.fund-surplus' | translate\" [percent]=\"34\" [height]=\"165\"></g2-water-wave>\n      </div>\n    </nz-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "jfYz":
/*!******************************************************************!*\
  !*** ./node_modules/@delon/chart/__ivy_ngcc__/fesm2015/trend.js ***!
  \******************************************************************/
/*! exports provided: TrendComponent, TrendModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendComponent", function() { return TrendComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendModule", function() { return TrendModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");






/**
 * @fileoverview added by tsickle
 * Generated from: trend.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function TrendComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("trend__", ctx_r0.flag, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("nzType", "caret-", ctx_r0.flag, "");
} }
const _c0 = ["*"];
class TrendComponent {
    constructor() {
        /**
         * 是否彩色标记
         */
        this.colorful = true;
        /**
         * 颜色反转
         */
        this.reverseColor = false;
    }
}
TrendComponent.ɵfac = function TrendComponent_Factory(t) { return new (t || TrendComponent)(); };
TrendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrendComponent, selectors: [["trend"]], hostVars: 6, hostBindings: function TrendComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("trend", true)("trend__grey", !ctx.colorful)("trend__reverse", ctx.colorful && ctx.reverseColor);
    } }, inputs: { colorful: "colorful", reverseColor: "reverseColor", flag: "flag" }, exportAs: ["trend"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "class", 4, "ngIf"], ["nz-icon", "", 3, "nzType"]], template: function TrendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TrendComponent_span_1_Template, 2, 4, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.flag);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
TrendComponent.propDecorators = {
    flag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    colorful: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    reverseColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TrendComponent.prototype, "colorful", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TrendComponent.prototype, "reverseColor", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TrendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'trend',
                exportAs: 'trend',
                template: "<ng-content></ng-content>\n<span *ngIf=\"flag\" class=\"trend__{{ flag }}\"><i nz-icon nzType=\"caret-{{ flag }}\"></i></span>\n",
                host: {
                    '[class.trend]': 'true',
                    '[class.trend__grey]': '!colorful',
                    '[class.trend__reverse]': 'colorful && reverseColor'
                },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { colorful: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], reverseColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], flag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: trend.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [TrendComponent];
class TrendModule {
}
TrendModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TrendModule });
TrendModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TrendModule_Factory(t) { return new (t || TrendModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"], _delon_util__WEBPACK_IMPORTED_MODULE_2__["DelonUtilModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TrendModule, { declarations: function () { return [TrendComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"], _delon_util__WEBPACK_IMPORTED_MODULE_2__["DelonUtilModule"]]; }, exports: function () { return [TrendComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TrendModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"], _delon_util__WEBPACK_IMPORTED_MODULE_2__["DelonUtilModule"]],
                declarations: COMPONENTS,
                exports: COMPONENTS
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: trend.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=trend.js.map

/***/ }),

/***/ "ngc+":
/*!*****************************************************************!*\
  !*** ./node_modules/@delon/chart/__ivy_ngcc__/fesm2015/card.js ***!
  \*****************************************************************/
/*! exports provided: G2CardComponent, G2CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2CardComponent", function() { return G2CardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2CardModule", function() { return G2CardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");








/**
 * @fileoverview added by tsickle
 * Generated from: card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






function G2CardComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.avatar);
} }
function G2CardComponent_span_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.title);
} }
function G2CardComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, G2CardComponent_span_7_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.title);
} }
function G2CardComponent_span_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.action);
} }
function G2CardComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, G2CardComponent_span_8_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r2.action);
} }
function G2CardComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.total);
} }
function G2CardComponent_div_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.footer);
} }
function G2CardComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, G2CardComponent_div_13_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.footer);
} }
const _c0 = function () { return { padding: "20px 24px 8px 24px" }; };
const _c1 = function (a0) { return { height: a0 }; };
const _c2 = function (a0) { return { "g2-card__fixed": a0 }; };
const _c3 = ["*"];
class G2CardComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        /**
         * 是否显示边框
         */
        this.bordered = false;
        this.total = '';
        this._height = 'auto';
        /**
         * 是否显示Loading
         */
        this.loading = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set contentHeight(value) {
        this._orgHeight = value;
        this._height = typeof value === 'number' ? (this._height = `${value}px`) : value;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.cdr.detectChanges();
    }
}
G2CardComponent.ɵfac = function G2CardComponent_Factory(t) { return new (t || G2CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
G2CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: G2CardComponent, selectors: [["g2-card"]], hostVars: 2, hostBindings: function G2CardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("g2-card", true);
    } }, inputs: { bordered: "bordered", total: "total", loading: "loading", contentHeight: "contentHeight", avatar: "avatar", title: "title", action: "action", footer: "footer" }, exportAs: ["g2Card"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c3, decls: 14, vars: 15, consts: [[3, "nzBodyStyle", "nzBordered"], [3, "nzSpinning"], [1, "g2-card__top"], [1, "g2-card__avatar"], [4, "nzStringTemplateOutlet"], [1, "g2-card__meta-wrap"], [1, "g2-card__meta"], ["class", "g2-card__meta-title", 4, "ngIf"], ["class", "g2-card__meta-action", 4, "ngIf"], ["class", "g2-card__total", 4, "ngIf"], [1, "g2-card__desc", 3, "ngStyle"], [3, "ngClass"], ["class", "g2-card__footer", 4, "ngIf"], [1, "g2-card__meta-title"], [1, "g2-card__meta-action"], [1, "g2-card__total"], [1, "g2-card__footer"]], template: function G2CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-spin", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, G2CardComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, G2CardComponent_span_7_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, G2CardComponent_span_8_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, G2CardComponent_p_9_Template, 2, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, G2CardComponent_div_13_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0))("nzBordered", ctx.bordered);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpinning", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.action);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx._height));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c2, !!ctx._orgHeight));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.footer);
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardComponent"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__["NzSpinComponent"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
G2CardComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
G2CardComponent.propDecorators = {
    bordered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    total: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    contentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2CardComponent.prototype, "bordered", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2CardComponent.prototype, "loading", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'g2-card',
                exportAs: 'g2Card',
                template: "<nz-card [nzBodyStyle]=\"{ padding: '20px 24px 8px 24px' }\" [nzBordered]=\"bordered\">\n  <nz-spin [nzSpinning]=\"loading\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *nzStringTemplateOutlet=\"avatar\">{{ avatar }}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          <span class=\"g2-card__meta-title\" *ngIf=\"title\">\n            <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n          </span>\n          <span class=\"g2-card__meta-action\" *ngIf=\"action\">\n            <ng-container *nzStringTemplateOutlet=\"action\">{{ action }}</ng-container>\n          </span>\n        </div>\n        <p *ngIf=\"total\" class=\"g2-card__total\">{{ total }}</p>\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [ngStyle]=\"{ height: _height }\">\n      <div [ngClass]=\"{ 'g2-card__fixed': !!_orgHeight }\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div class=\"g2-card__footer\" *ngIf=\"footer\">\n      <ng-container *nzStringTemplateOutlet=\"footer\">{{ footer }}</ng-container>\n    </div>\n  </nz-spin>\n</nz-card>\n",
                host: { '[class.g2-card]': 'true' },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { bordered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], contentHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: card.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2CardComponent];
class G2CardModule {
}
G2CardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: G2CardModule });
G2CardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function G2CardModule_Factory(t) { return new (t || G2CardModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_2__["DelonUtilModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__["NzSpinModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](G2CardModule, { declarations: function () { return [G2CardComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_2__["DelonUtilModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__["NzSpinModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"]]; }, exports: function () { return [G2CardComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2CardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_2__["DelonUtilModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__["NzSpinModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"]],
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
 * Generated from: card.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=card.js.map

/***/ }),

/***/ "obyP":
/*!**********************************************************************!*\
  !*** ./node_modules/@delon/chart/__ivy_ngcc__/fesm2015/tag-cloud.js ***!
  \**********************************************************************/
/*! exports provided: G2TagCloudComponent, G2TagCloudModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2TagCloudComponent", function() { return G2TagCloudComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2TagCloudModule", function() { return G2TagCloudModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_chart_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/chart/core */ "LLZf");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "OtHt");









/**
 * @fileoverview added by tsickle
 * Generated from: tag-cloud.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */




function G2TagCloudComponent_nz_skeleton_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-skeleton");
} }
function G2TagCloudData() { }
if (false) {}
/**
 * @record
 */
function G2TagCloudClickItem() { }
if (false) {}
class G2TagCloudComponent extends _delon_chart_core__WEBPACK_IMPORTED_MODULE_2__["G2BaseComponent"] {
    constructor() {
        super(...arguments);
        // #region fields
        this.width = 0;
        this.height = 200;
        this.padding = 0;
        this.data = [];
        this.clickItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // #endregion
    /**
     * @private
     * @return {?}
     */
    initTagCloud() {
        ((/** @type {?} */ (window))).G2.registerShape('point', 'cloud', {
            // tslint:disable-next-line: typedef
            /**
             * @param {?} cfg
             * @param {?} container
             * @return {?}
             */
            draw(cfg, container) {
                /** @type {?} */
                const data = (/** @type {?} */ (cfg.data));
                /** @type {?} */
                const textShape = container.addShape({
                    type: 'text',
                    name: 'tag-cloud-text',
                    attrs: (/** @type {?} */ (Object.assign(Object.assign({}, cfg.style), { fontSize: data.size, text: data.text, textAlign: 'center', fontFamily: data.font, fill: cfg.color, textBaseline: 'Alphabetic', x: cfg.x, y: cfg.y }))),
                });
                if (data.rotate) {
                    ((/** @type {?} */ (window))).G2.Util.rotate(textShape, (data.rotate * Math.PI) / 180);
                }
                return textShape;
            },
        });
    }
    /**
     * @return {?}
     */
    install() {
        this.initTagCloud();
        const { el, padding, theme } = this;
        if (this.height === 0) {
            this.height = this.el.nativeElement.clientHeight;
        }
        if (this.width === 0) {
            this.width = this.el.nativeElement.clientWidth;
        }
        /** @type {?} */
        const chart = (this._chart = new ((/** @type {?} */ (window))).G2.Chart({
            container: el.nativeElement,
            autoFit: false,
            padding,
            height: this.height,
            width: this.width,
            theme,
        }));
        chart.scale({
            x: { nice: false },
            y: { nice: false },
        });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            showTitle: false,
            showMarkers: false,
        });
        ((/** @type {?} */ (chart.coordinate()))).reflect();
        chart
            .point()
            .position('x*y')
            .color('text')
            .shape('cloud')
            .state({
            active: {
                style: {
                    fillOpacity: 0.4,
                },
            },
        });
        chart.interaction('element-active');
        chart.on('tag-cloud-text:click', (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => { var _a; return this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev }); }));
        }));
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { _chart, padding, data } = this;
        if (!_chart || !data || data.length <= 0)
            return;
        _chart.height = this.height;
        _chart.width = this.width;
        _chart.padding = padding;
        /** @type {?} */
        const dv = new ((/** @type {?} */ (window))).DataSet.View().source(data);
        /** @type {?} */
        const range = dv.range('value');
        /** @type {?} */
        const min = range[0];
        /** @type {?} */
        const max = range[1];
        dv.transform((/** @type {?} */ ({
            type: 'tag-cloud',
            fields: ['name', 'value'],
            // imageMask,
            font: 'Verdana',
            size: [this.width, this.height],
            // 宽高设置最好根据 imageMask 做调整
            padding: 0,
            timeInterval: 5000,
            // max execute time
            // tslint:disable-next-line: typedef
            /**
             * @return {?}
             */
            rotate() {
                /** @type {?} */
                let random = ~~(Math.random() * 4) % 4;
                if (random === 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            },
            // tslint:disable-next-line: typedef
            /**
             * @param {?} d
             * @return {?}
             */
            fontSize(d) {
                return ((d.value - min) / (max - min)) * (32 - 8) + 8;
            },
        })));
        _chart.data(dv.rows);
        _chart.render();
    }
    /**
     * @private
     * @return {?}
     */
    _attachChart() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.attachChart()));
    }
    /**
     * @private
     * @return {?}
     */
    installResizeEvent() {
        this.resize$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'resize')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
         * @return {?}
         */
        () => !!this._chart)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200))
            .subscribe((/**
         * @return {?}
         */
        () => this._attachChart()));
    }
    /**
     * @return {?}
     */
    onInit() {
        this.installResizeEvent();
    }
}
G2TagCloudComponent.ɵfac = function G2TagCloudComponent_Factory(t) { return ɵG2TagCloudComponent_BaseFactory(t || G2TagCloudComponent); };
G2TagCloudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: G2TagCloudComponent, selectors: [["g2-tag-cloud"]], inputs: { width: "width", height: "height", padding: "padding", data: "data" }, outputs: { clickItem: "clickItem" }, exportAs: ["g2TagCloud"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function G2TagCloudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, G2TagCloudComponent_nz_skeleton_0_Template, 1, 0, "nz-skeleton", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonComponent"]], encapsulation: 2, changeDetection: 0 });
G2TagCloudComponent.propDecorators = {
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clickItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2TagCloudComponent.prototype, "width", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2TagCloudComponent.prototype, "height", void 0);
const ɵG2TagCloudComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](G2TagCloudComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2TagCloudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'g2-tag-cloud',
                exportAs: 'g2TagCloud',
                template: `<nz-skeleton *ngIf="!loaded"></nz-skeleton>`,
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], null, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], clickItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tag-cloud.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2TagCloudComponent];
class G2TagCloudModule {
}
G2TagCloudModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: G2TagCloudModule });
G2TagCloudModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function G2TagCloudModule_Factory(t) { return new (t || G2TagCloudModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](G2TagCloudModule, { declarations: function () { return [G2TagCloudComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonModule"]]; }, exports: function () { return [G2TagCloudComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2TagCloudModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_7__["NzSkeletonModule"]],
                declarations: COMPONENTS,
                exports: COMPONENTS
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: tag-cloud.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=tag-cloud.js.map

/***/ }),

/***/ "oeRH":
/*!***********************************************************************!*\
  !*** ./node_modules/@delon/chart/__ivy_ngcc__/fesm2015/water-wave.js ***!
  \***********************************************************************/
/*! exports provided: G2WaterWaveComponent, G2WaterWaveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2WaterWaveComponent", function() { return G2WaterWaveComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2WaterWaveModule", function() { return G2WaterWaveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");









/**
 * @fileoverview added by tsickle
 * Generated from: water-wave.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





const _c0 = ["container"];
function G2WaterWaveComponent_span_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.title);
} }
function G2WaterWaveComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, G2WaterWaveComponent_span_4_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.title);
} }
const _c1 = function (a0, a1) { return { "height.px": a0, "width.px": a1, overflow: "hidden" }; };
const _c2 = function (a0) { return { "width.px": a0 }; };
class G2WaterWaveComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} ngZone
     * @param {?} cdr
     * @param {?} platform
     */
    constructor(el, renderer, ngZone, cdr, platform) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.platform = platform;
        this.resize$ = null;
        // #region fields
        this.animate = true;
        this.delay = 0;
        this.color = '#1890FF';
        this.height = 160;
    }
    /**
     * @private
     * @param {?} isUpdate
     * @return {?}
     */
    renderChart(isUpdate) {
        if (!this.resize$)
            return;
        this.updateRadio();
        const { percent, color, node, animate } = this;
        /** @type {?} */
        const data = Math.min(Math.max(percent / 100, 0), 100);
        /** @type {?} */
        const self = this;
        cancelAnimationFrame(this.timer);
        /** @type {?} */
        const canvas = (/** @type {?} */ (node.nativeElement));
        /** @type {?} */
        const ctx = (/** @type {?} */ (canvas.getContext('2d')));
        /** @type {?} */
        const canvasWidth = canvas.width;
        /** @type {?} */
        const canvasHeight = canvas.height;
        /** @type {?} */
        const radius = canvasWidth / 2;
        /** @type {?} */
        const lineWidth = 2;
        /** @type {?} */
        const cR = radius - lineWidth;
        ctx.beginPath();
        ctx.lineWidth = lineWidth * 2;
        /** @type {?} */
        const axisLength = canvasWidth - lineWidth;
        /** @type {?} */
        const unit = axisLength / 8;
        /** @type {?} */
        const xOffset = lineWidth;
        /** @type {?} */
        let sp = 0;
        // 周期偏移量
        /** @type {?} */
        const range = 0.2;
        // 振幅
        /** @type {?} */
        let currRange = range;
        /** @type {?} */
        let currData = 0;
        /** @type {?} */
        const waveupsp = animate ? 0.005 : 0.015;
        // 水波上涨速度
        /** @type {?} */
        let arcStack = [];
        /** @type {?} */
        const bR = radius - lineWidth;
        /** @type {?} */
        const circleOffset = -(Math.PI / 2);
        /** @type {?} */
        let circleLock = true;
        // tslint:disable-next-line:binary-expression-operand-order
        for (let i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
            arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
        }
        /** @type {?} */
        const cStartPoint = (/** @type {?} */ (arcStack.shift()));
        ctx.strokeStyle = color;
        ctx.moveTo(cStartPoint[0], cStartPoint[1]);
        /**
         * @return {?}
         */
        function drawSin() {
            ctx.beginPath();
            ctx.save();
            /** @type {?} */
            const sinStack = [];
            for (let i = xOffset; i <= xOffset + axisLength; i += 20 / axisLength) {
                /** @type {?} */
                const x = sp + (xOffset + i) / unit;
                /** @type {?} */
                const y = Math.sin(x) * currRange;
                /** @type {?} */
                const dx = i;
                // tslint:disable-next-line:binary-expression-operand-order
                /** @type {?} */
                const dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;
                ctx.lineTo(dx, dy);
                sinStack.push([dx, dy]);
            }
            /** @type {?} */
            const startPoint = (/** @type {?} */ (sinStack.shift()));
            ctx.lineTo(xOffset + axisLength, canvasHeight);
            ctx.lineTo(xOffset, canvasHeight);
            ctx.lineTo(startPoint[0], startPoint[1]);
            /** @type {?} */
            const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(1, color);
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
        }
        /**
         * @return {?}
         */
        function render() {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            if (circleLock && !isUpdate) {
                if ((/** @type {?} */ (arcStack)).length) {
                    if (animate) {
                        /** @type {?} */
                        const temp = (/** @type {?} */ ((/** @type {?} */ (arcStack)).shift()));
                        ctx.lineTo(temp[0], temp[1]);
                        ctx.stroke();
                    }
                    else {
                        for (const temp of (/** @type {?} */ (arcStack))) {
                            ctx.lineTo((/** @type {?} */ (temp))[0], (/** @type {?} */ (temp))[1]);
                            ctx.stroke();
                        }
                        arcStack = [];
                    }
                }
                else {
                    circleLock = false;
                    ctx.lineTo(cStartPoint[0], cStartPoint[1]);
                    ctx.stroke();
                    arcStack = null;
                    ctx.globalCompositeOperation = 'destination-over';
                    ctx.beginPath();
                    ctx.lineWidth = lineWidth;
                    // tslint:disable-next-line:binary-expression-operand-order
                    ctx.arc(radius, radius, bR, 0, 2 * Math.PI, true);
                    ctx.beginPath();
                    ctx.save();
                    // tslint:disable-next-line:binary-expression-operand-order
                    ctx.arc(radius, radius, radius - 3 * lineWidth, 0, 2 * Math.PI, true);
                    ctx.restore();
                    ctx.clip();
                    ctx.fillStyle = color;
                }
            }
            else {
                if (data >= 0.85) {
                    if (currRange > range / 4) {
                        /** @type {?} */
                        const t = range * 0.01;
                        currRange -= t;
                    }
                }
                else if (data <= 0.1) {
                    if (currRange < range * 1.5) {
                        /** @type {?} */
                        const t = range * 0.01;
                        currRange += t;
                    }
                }
                else {
                    if (currRange <= range) {
                        /** @type {?} */
                        const t = range * 0.01;
                        currRange += t;
                    }
                    if (currRange >= range) {
                        /** @type {?} */
                        const t = range * 0.01;
                        currRange -= t;
                    }
                }
                if (data - currData > 0) {
                    currData += waveupsp;
                }
                if (data - currData < 0) {
                    currData -= waveupsp;
                }
                sp += 0.07;
                drawSin();
            }
            self.timer = requestAnimationFrame(render);
        }
        render();
        // drawSin();
    }
    /**
     * @private
     * @return {?}
     */
    updateRadio() {
        const { offsetWidth } = this.el.nativeElement.parentNode;
        /** @type {?} */
        const radio = offsetWidth < this.height ? offsetWidth / this.height : 1;
        this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${radio})`);
    }
    /**
     * @return {?}
     */
    render() {
        this.renderChart(false);
    }
    /**
     * @private
     * @return {?}
     */
    installResizeEvent() {
        this.resize$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'resize')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200))
            .subscribe((/**
         * @return {?}
         */
        () => this.updateRadio()));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.installResizeEvent();
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout((/**
         * @return {?}
         */
        () => this.render()), this.delay)));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.renderChart(true)));
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.timer) {
            cancelAnimationFrame(this.timer);
        }
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
    }
}
G2WaterWaveComponent.ɵfac = function G2WaterWaveComponent_Factory(t) { return new (t || G2WaterWaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"])); };
G2WaterWaveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: G2WaterWaveComponent, selectors: [["g2-water-wave"]], viewQuery: function G2WaterWaveComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.node = _t.first);
    } }, hostVars: 2, hostBindings: function G2WaterWaveComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("g2-water-wave", true);
    } }, inputs: { animate: "animate", delay: "delay", color: "color", height: "height", title: "title", percent: "percent" }, exportAs: ["g2WaterWave"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 11, consts: [[3, "ngStyle"], [1, "g2-water-wave__canvas", 3, "width", "height"], ["container", ""], [1, "g2-water-wave__desc", 3, "ngStyle"], ["class", "g2-water-wave__desc-title", 4, "ngIf"], [1, "g2-water-wave__desc-percent"], [1, "g2-water-wave__desc-title"], [4, "nzStringTemplateOutlet"]], template: function G2WaterWaveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, G2WaterWaveComponent_span_4_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](6, _c1, ctx.height, ctx.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("width", ctx.height * 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("height", ctx.height * 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c2, ctx.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.percent, "%");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
G2WaterWaveComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }
];
G2WaterWaveComponent.propDecorators = {
    node: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['container', { static: true },] }],
    animate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    percent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2WaterWaveComponent.prototype, "animate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2WaterWaveComponent.prototype, "delay", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2WaterWaveComponent.prototype, "height", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], G2WaterWaveComponent.prototype, "percent", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](G2WaterWaveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'g2-water-wave',
                exportAs: 'g2WaterWave',
                template: "<div [ngStyle]=\"{ 'height.px': height, 'width.px': height, overflow: 'hidden' }\">\n  <canvas #container class=\"g2-water-wave__canvas\" width=\"{{ height * 2 }}\" height=\"{{ height * 2 }}\"></canvas>\n</div>\n<div class=\"g2-water-wave__desc\" [ngStyle]=\"{ 'width.px': height }\">\n  <span *ngIf=\"title\" class=\"g2-water-wave__desc-title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </span>\n  <h4 class=\"g2-water-wave__desc-percent\">{{ percent }}%</h4>\n</div>\n",
                host: { '[class.g2-water-wave]': 'true' },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }]; }, { animate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['container', { static: true }]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], percent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: water-wave.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2WaterWaveComponent];
class G2WaterWaveModule {
}
G2WaterWaveModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: G2WaterWaveModule });
G2WaterWaveModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function G2WaterWaveModule_Factory(t) { return new (t || G2WaterWaveModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](G2WaterWaveModule, { declarations: function () { return [G2WaterWaveComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"]]; }, exports: function () { return [G2WaterWaveComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](G2WaterWaveModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"]],
                declarations: COMPONENTS,
                exports: COMPONENTS
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: water-wave.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=water-wave.js.map

/***/ }),

/***/ "qB5D":
/*!*******************************************************************!*\
  !*** ./src/app/routes/dashboard/analysis/analysis.component.less ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host ::ng-deep .icon-group i {\n  margin-left: 16px;\n  color: rgba(0, 0, 0, 0.45);\n  cursor: pointer;\n  transition: color 0.32s;\n}\n:host ::ng-deep .icon-group i:hover {\n  color: rgba(0, 0, 0, 0.85);\n}\n:host ::ng-deep .rank-list {\n  margin: 25px 0 0;\n  padding: 0;\n  list-style: none;\n}\n:host ::ng-deep .rank-list li {\n  display: flex;\n  align-items: center;\n  margin-top: 16px;\n}\n:host ::ng-deep .rank-list li::before {\n  display: table;\n  content: '';\n}\n:host ::ng-deep .rank-list li::after {\n  display: table;\n  clear: both;\n  content: '';\n}\n:host ::ng-deep .rank-list li span {\n  font-size: 14px;\n  line-height: 22px;\n}\n:host ::ng-deep .rank-list li .number {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-top: 1.5px;\n  margin-right: 16px;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  text-align: center;\n  background-color: #f5f5f5;\n  border-radius: 20px;\n}\n:host ::ng-deep .rank-list li .number.active {\n  color: #fff;\n  background-color: #314659;\n}\n:host ::ng-deep .rank-list li .title {\n  flex: 1;\n  margin-right: 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n:host ::ng-deep .sales-extra {\n  display: inline-block;\n  margin-right: 24px;\n}\n:host ::ng-deep .sales-extra a {\n  margin-left: 24px;\n}\n:host ::ng-deep .sales-extra a:hover {\n  color: #1890ff;\n}\n:host ::ng-deep .sales-extra a.currentDate {\n  color: #1890ff;\n}\n:host ::ng-deep .sales-card .bar {\n  padding: 0 0 32px 32px;\n}\n:host ::ng-deep .sales-card .rank {\n  padding: 0 32px 32px 72px;\n}\n:host ::ng-deep .sales-card .ant-tabs-bar {\n  padding-left: 16px;\n}\n:host ::ng-deep .sales-card .ant-tabs-bar .ant-tabs-nav .ant-tabs-tab {\n  padding-top: 16px;\n  padding-bottom: 14px;\n  line-height: 24px;\n}\n:host ::ng-deep .sales-card .ant-tabs-extra-content {\n  padding-right: 24px;\n  line-height: 55px;\n}\n:host ::ng-deep .sales-card .ant-card-head {\n  position: relative;\n}\n:host ::ng-deep .sales-card .ant-card-head-title {\n  align-items: normal;\n}\n:host ::ng-deep .offline-card .ant-tabs-ink-bar {\n  bottom: auto;\n}\n:host ::ng-deep .offline-card .ant-tabs-bar {\n  border-bottom: none;\n}\n:host ::ng-deep .offline-card .ant-tabs-nav-container-scrolling {\n  padding-right: 40px;\n  padding-left: 40px;\n}\n:host ::ng-deep .offline-card .ant-tabs-tab-prev-icon::before {\n  position: relative;\n  left: 6px;\n}\n:host ::ng-deep .offline-card .ant-tabs-tab-next-icon::before {\n  position: relative;\n  right: 6px;\n}\n:host ::ng-deep .offline-card .ant-tabs-tab-active h4 {\n  color: #1890ff;\n}\n:host ::ng-deep .trend-text {\n  margin-left: 8px;\n  color: rgba(0, 0, 0, 0.85);\n}\n@media screen and (max-width: 992px) {\n  :host ::ng-deep .sales-extra {\n    display: none;\n  }\n  :host ::ng-deep .rank-list li span:first-child {\n    margin-right: 8px;\n  }\n}\n@media screen and (max-width: 768px) {\n  :host ::ng-deep .rank-title {\n    margin-top: 16px;\n  }\n  :host ::ng-deep .sales-card .bar {\n    padding: 16px;\n  }\n}\n@media screen and (max-width: 576px) {\n  :host ::ng-deep .sales-extra-wrap {\n    display: none;\n  }\n  :host ::ng-deep .sales-card .ant-tabs-content {\n    padding-top: 30px;\n  }\n}\n:host ::ng-deep .ant-table-pagination {\n  margin-bottom: 0;\n}\n:host ::ng-deep .g2-pie__legend-block .g2-pie__chart {\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWx5c2lzLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25nLXpvcnJvLWFudGQvc3JjL3N0eWxlL21peGlucy9jbGVhcmZpeC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1Riw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQUY3RjtFQUdNLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFFTjtBQURNO0VBQ0UsMEJBQUE7QUFHUjtBQVhBO0VBYUksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQWhCQTtFQW1CTSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFOO0FDbEJFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QURvQko7QUNsQkU7RUFFRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURtQko7QUE5QkE7RUF1QlEsZUFBQTtFQUNBLGlCQUFBO0FBVVI7QUFsQ0E7RUEyQlEscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQVVSO0FBVFE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFXVjtBQW5EQTtFQTRDUSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFVUjtBQTFEQTtFQXFESSxxQkFBQTtFQUNBLGtCQUFBO0FBUUo7QUE5REE7RUF3RE0saUJBQUE7QUFTTjtBQVJNO0VBQ0UsY0FBQTtBQVVSO0FBUk07RUFDRSxjQUFBO0FBVVI7QUF2RUE7RUFtRU0sc0JBQUE7QUFPTjtBQTFFQTtFQXNFTSx5QkFBQTtBQU9OO0FBN0VBO0VBeUVNLGtCQUFBO0FBT047QUFoRkE7RUEyRVEsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBUVI7QUFyRkE7RUFpRk0sbUJBQUE7RUFDQSxpQkFBQTtBQU9OO0FBekZBO0VBcUZNLGtCQUFBO0FBT047QUE1RkE7RUF3Rk0sbUJBQUE7QUFPTjtBQS9GQTtFQTZGTSxZQUFBO0FBS047QUFsR0E7RUFnR00sbUJBQUE7QUFLTjtBQXJHQTtFQW1HTSxtQkFBQTtFQUNBLGtCQUFBO0FBS047QUF6R0E7RUF1R00sa0JBQUE7RUFDQSxTQUFBO0FBS047QUE3R0E7RUEyR00sa0JBQUE7RUFDQSxVQUFBO0FBS047QUFqSEE7RUErR00sY0FBQTtBQUtOO0FBcEhBO0VBbUhJLGdCQUFBO0VBQ0EsMEJBQUE7QUFJSjtBQURFO0VBQUE7SUFFSSxhQUFBO0VBR0o7RUFMQTtJQU9RLGlCQUFBO0VBQ1I7QUFDRjtBQUlFO0VBQUE7SUFFSSxnQkFBQTtFQUZKO0VBQUE7SUFLSSxhQUFBO0VBRko7QUFDRjtBQUtFO0VBQUE7SUFFSSxhQUFBO0VBSEo7RUFDQTtJQU1NLGlCQUFBO0VBSk47QUFDRjtBQWhKQTtFQTBKSSxnQkFBQTtBQVBKO0FBbkpBO0VBOEpJLFNBQUE7QUFSSiIsImZpbGUiOiJhbmFseXNpcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35AZGVsb24vdGhlbWUvaW5kZXgnO1xuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLmljb24tZ3JvdXAge1xuICAgIGkge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICBjb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zMnM7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IEB0ZXh0LWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAucmFuay1saXN0IHtcbiAgICBtYXJnaW46IDI1cHggMCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBsaSB7XG4gICAgICAuY2xlYXJmaXgoKTtcblxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICB9XG4gICAgICAubnVtYmVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBiYWNrZ3JvdW5kLWNvbG9yLWJhc2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE0NjU5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5zYWxlcy1leHRyYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICBhIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcbiAgICAgIH1cbiAgICAgICYuY3VycmVudERhdGUge1xuICAgICAgICBjb2xvcjogQHByaW1hcnktY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5zYWxlcy1jYXJkIHtcbiAgICAuYmFyIHtcbiAgICAgIHBhZGRpbmc6IDAgMCAzMnB4IDMycHg7XG4gICAgfVxuICAgIC5yYW5rIHtcbiAgICAgIHBhZGRpbmc6IDAgMzJweCAzMnB4IDcycHg7XG4gICAgfVxuICAgIC5hbnQtdGFicy1iYXIge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgLmFudC10YWJzLW5hdiAuYW50LXRhYnMtdGFiIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmFudC10YWJzLWV4dHJhLWNvbnRlbnQge1xuICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICAgIH1cbiAgICAuYW50LWNhcmQtaGVhZCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5hbnQtY2FyZC1oZWFkLXRpdGxlIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XG4gICAgfVxuICB9XG4gIC5vZmZsaW5lLWNhcmQge1xuICAgIC5hbnQtdGFicy1pbmstYmFyIHtcbiAgICAgIGJvdHRvbTogYXV0bztcbiAgICB9XG4gICAgLmFudC10YWJzLWJhciB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgICAuYW50LXRhYnMtbmF2LWNvbnRhaW5lci1zY3JvbGxpbmcge1xuICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICB9XG4gICAgLmFudC10YWJzLXRhYi1wcmV2LWljb246OmJlZm9yZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBsZWZ0OiA2cHg7XG4gICAgfVxuICAgIC5hbnQtdGFicy10YWItbmV4dC1pY29uOjpiZWZvcmUge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcmlnaHQ6IDZweDtcbiAgICB9XG4gICAgLmFudC10YWJzLXRhYi1hY3RpdmUgaDQge1xuICAgICAgY29sb3I6IEBwcmltYXJ5LWNvbG9yO1xuICAgIH1cbiAgfVxuICAudHJlbmQtdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBjb2xvcjogQGhlYWRpbmctY29sb3I7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAc2NyZWVuLWxnKSB7XG4gICAgLnNhbGVzLWV4dHJhIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5yYW5rLWxpc3Qge1xuICAgICAgbGkge1xuICAgICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBzY3JlZW4tbWQpIHtcbiAgICAucmFuay10aXRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cbiAgICAuc2FsZXMtY2FyZCAuYmFyIHtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQHNjcmVlbi1zbSkge1xuICAgIC5zYWxlcy1leHRyYS13cmFwIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5zYWxlcy1jYXJkIHtcbiAgICAgIC5hbnQtdGFicy1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gZml4IHBhZ2luYXRpb24gYm90dG9tXG4gIC5hbnQtdGFibGUtcGFnaW5hdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5nMi1waWVfX2xlZ2VuZC1ibG9jayAuZzItcGllX19jaGFydCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iLCIvLyBtaXhpbnMgZm9yIGNsZWFyZml4XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5jbGVhcmZpeCgpIHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMjEzMDEjaXNzdWVjb21tZW50LTU4Mzk1NTIyOVxuICAmOjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8yMTg2NFxuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGNvbnRlbnQ6ICcnO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "tXNQ":
/*!**************************************************************!*\
  !*** ./src/app/routes/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _analysis_analysis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analysis/analysis.component */ "OF4q");
/* harmony import */ var _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monitor/monitor.component */ "uOn2");
/* harmony import */ var _v1_v1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./v1/v1.component */ "4qHX");
/* harmony import */ var _workplace_workplace_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workplace/workplace.component */ "1LdW");







const routes = [
    { path: '', redirectTo: 'v1', pathMatch: 'full' },
    { path: 'v1', component: _v1_v1_component__WEBPACK_IMPORTED_MODULE_5__["DashboardV1Component"] },
    { path: 'analysis', component: _analysis_analysis_component__WEBPACK_IMPORTED_MODULE_3__["DashboardAnalysisComponent"] },
    { path: 'monitor', component: _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_4__["DashboardMonitorComponent"] },
    { path: 'workplace', component: _workplace_workplace_component__WEBPACK_IMPORTED_MODULE_6__["DashboardWorkplaceComponent"] },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardRoutingModule);



/***/ }),

/***/ "uKX0":
/*!*********************************************************************!*\
  !*** ./node_modules/@delon/abc/__ivy_ngcc__/fesm2015/count-down.js ***!
  \*********************************************************************/
/*! exports provided: CountDownComponent, CountDownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountDownComponent", function() { return CountDownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountDownModule", function() { return CountDownModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/addSeconds */ "Ctv7");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/format */ "sWYD");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-countdown */ "z+xu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






/**
 * @fileoverview added by tsickle
 * Generated from: count-down.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




const _c0 = ["cd"];
function CountDownComponent_countdown_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "countdown", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("event", function CountDownComponent_countdown_0_Template_countdown_event_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.handleEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r0.config);
} }
class CountDownComponent {
    constructor() {
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * 目标时间
     * @param {?} value
     * @return {?}
     */
    set target(value) {
        this.config = {
            format: `HH:mm:ss`,
            stopTime: typeof value === 'number' ? Object(date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(), value).valueOf() : +Object(date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(value, 't'),
        };
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleEvent(e) {
        this.event.emit(e);
    }
}
CountDownComponent.ɵfac = function CountDownComponent_Factory(t) { return new (t || CountDownComponent)(); };
CountDownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountDownComponent, selectors: [["count-down"]], viewQuery: function CountDownComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.instance = _t.first);
    } }, inputs: { target: "target", config: "config" }, outputs: { event: "event" }, exportAs: ["countDown"], decls: 1, vars: 1, consts: [[3, "config", "event", 4, "ngIf"], [3, "config", "event"], ["cd", ""]], template: function CountDownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CountDownComponent_countdown_0_Template, 2, 1, "countdown", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_countdown__WEBPACK_IMPORTED_MODULE_3__["CountdownComponent"]], encapsulation: 2, changeDetection: 0 });
CountDownComponent.propDecorators = {
    instance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['cd', { static: false },] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    target: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountDownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'count-down',
                exportAs: 'countDown',
                template: ` <countdown #cd *ngIf="config" [config]="config" (event)="handleEvent($event)"></countdown> `,
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], target: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], instance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cd', { static: false }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: count-down.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [CountDownComponent];
class CountDownModule {
}
CountDownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CountDownModule });
CountDownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CountDownModule_Factory(t) { return new (t || CountDownModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_3__["CountdownModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CountDownModule, { declarations: function () { return [CountDownComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_3__["CountdownModule"]]; }, exports: function () { return [CountDownComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountDownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_3__["CountdownModule"]],
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
 * Generated from: count-down.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=count-down.js.map

/***/ }),

/***/ "uOn2":
/*!***************************************************************!*\
  !*** ./src/app/routes/dashboard/monitor/monitor.component.ts ***!
  \***************************************************************/
/*! exports provided: DashboardMonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMonitorComponent", function() { return DashboardMonitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_monitor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./monitor.component.html */ "ixxl");
/* harmony import */ var _monitor_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitor.component.less */ "MZk3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");







let DashboardMonitorComponent = class DashboardMonitorComponent {
    constructor(http, msg, cdr) {
        this.http = http;
        this.msg = msg;
        this.cdr = cdr;
        this.data = {};
        this.tags = [];
        this.loading = true;
        this.q = {
            start: null,
            end: null,
        };
        this.percent = null;
        this.activeStat = {
            max: 0,
            min: 0,
            t1: '',
            t2: '',
        };
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["zip"])(this.http.get('/chart'), this.http.get('/chart/tags')).subscribe(([res, tags]) => {
            this.data = res;
            tags.list[Math.floor(Math.random() * tags.list.length) + 1].value = 1000;
            this.tags = tags.list;
            this.loading = false;
            this.cdr.detectChanges();
        });
        // active chart
        this.refData();
        this.activeTime$ = setInterval(() => this.refData(), 1000 * 2);
    }
    refData() {
        const activeData = [];
        for (let i = 0; i < 24; i += 1) {
            activeData.push({
                x: `${i.toString().padStart(2, '0')}:00`,
                y: i * 50 + Math.floor(Math.random() * 200),
            });
        }
        this.activeData = activeData;
        // stat
        this.activeStat.max = [...activeData].sort()[activeData.length - 1].y + 200;
        this.activeStat.min = [...activeData].sort()[Math.floor(activeData.length / 2)].y;
        this.activeStat.t1 = activeData[Math.floor(activeData.length / 2)].x;
        this.activeStat.t2 = activeData[activeData.length - 1].x;
        // percent
        this.percent = Math.floor(Math.random() * 100);
        this.cdr.detectChanges();
    }
    // endregion
    couponFormat(val) {
        switch (parseInt(val, 10)) {
            case 20:
                return '差';
            case 40:
                return '中';
            case 60:
                return '良';
            case 80:
                return '优';
            default:
                return '';
        }
    }
    ngOnDestroy() {
        if (this.activeTime$) {
            clearInterval(this.activeTime$);
        }
    }
};
DashboardMonitorComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["_HttpClient"] },
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
DashboardMonitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard-monitor',
        template: _raw_loader_monitor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_monitor_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardMonitorComponent);



/***/ }),

/***/ "vKrn":
/*!************************************************************************!*\
  !*** ./node_modules/@delon/chart/__ivy_ngcc__/fesm2015/number-info.js ***!
  \************************************************************************/
/*! exports provided: NumberInfoComponent, NumberInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberInfoComponent", function() { return NumberInfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberInfoModule", function() { return NumberInfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");







/**
 * @fileoverview added by tsickle
 * Generated from: number-info.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





function NumberInfoComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.title);
} }
function NumberInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NumberInfoComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.title);
} }
function NumberInfoComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.subTitle);
} }
function NumberInfoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NumberInfoComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.subTitle);
} }
function NumberInfoComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.total);
} }
function NumberInfoComponent_em_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "em", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.suffix);
} }
function NumberInfoComponent_span_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.subTotal);
} }
function NumberInfoComponent_span_6_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 12);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("nzType", "caret-", ctx_r8.status, "");
} }
function NumberInfoComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NumberInfoComponent_span_6_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NumberInfoComponent_span_6_i_2_Template, 1, 1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.subTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.status);
} }
const _c0 = function (a0) { return { "margin-top.px": a0 }; };
class NumberInfoComponent {
    constructor() {
        /**
         * 状态样式
         */
        this.theme = 'light';
        /**
         * 设置数字和描述直接的间距（像素）
         */
        this.gap = 8;
    }
}
NumberInfoComponent.ɵfac = function NumberInfoComponent_Factory(t) { return new (t || NumberInfoComponent)(); };
NumberInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NumberInfoComponent, selectors: [["number-info"]], hostVars: 6, hostBindings: function NumberInfoComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("number-info", true)("number-info__light", ctx.theme === "light")("number-info__default", ctx.theme === "default");
    } }, inputs: { theme: "theme", gap: "gap", title: "title", subTitle: "subTitle", total: "total", subTotal: "subTotal", suffix: "suffix", status: "status" }, exportAs: ["numberInfo"], decls: 7, vars: 8, consts: [["class", "number-info__title", 4, "ngIf"], ["class", "number-info__title-sub", 4, "ngIf"], [1, "number-info__value", 3, "ngStyle"], [1, "number-info__value-text"], [4, "nzStringTemplateOutlet"], ["class", "number-info__value-suffix", 4, "ngIf"], ["class", "number-info__value-text number-info__value-sub", 4, "ngIf"], [1, "number-info__title"], [1, "number-info__title-sub"], [1, "number-info__value-suffix"], [1, "number-info__value-text", "number-info__value-sub"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"]], template: function NumberInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NumberInfoComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NumberInfoComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NumberInfoComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NumberInfoComponent_em_5_Template, 2, 1, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NumberInfoComponent_span_6_Template, 3, 2, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.subTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.gap));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.suffix);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status || ctx.subTotal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
NumberInfoComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    subTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    total: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    subTotal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    suffix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    status: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    gap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_2__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NumberInfoComponent.prototype, "gap", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NumberInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'number-info',
                exportAs: 'numberInfo',
                template: "<div *ngIf=\"title\" class=\"number-info__title\">\n  <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n</div>\n<div *ngIf=\"subTitle\" class=\"number-info__title-sub\">\n  <ng-container *nzStringTemplateOutlet=\"subTitle\">{{ subTitle }}</ng-container>\n</div>\n<div class=\"number-info__value\" [ngStyle]=\"{ 'margin-top.px': gap }\">\n  <span class=\"number-info__value-text\">\n    <ng-container *nzStringTemplateOutlet=\"total\">{{ total }}</ng-container>\n    <em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{ suffix }}</em>\n  </span>\n  <span *ngIf=\"status || subTotal\" class=\"number-info__value-text number-info__value-sub\">\n    <ng-container *nzStringTemplateOutlet=\"subTotal\">{{ subTotal }}</ng-container>\n    <i *ngIf=\"status\" nz-icon nzType=\"caret-{{ status }}\"></i>\n  </span>\n</div>\n",
                host: {
                    '[class.number-info]': `true`,
                    '[class.number-info__light]': `theme === 'light'`,
                    '[class.number-info__default]': `theme === 'default'`
                },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], gap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], subTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], subTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], suffix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: number-info.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [NumberInfoComponent];
class NumberInfoModule {
}
NumberInfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NumberInfoModule });
NumberInfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NumberInfoModule_Factory(t) { return new (t || NumberInfoModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], _delon_util__WEBPACK_IMPORTED_MODULE_2__["DelonUtilModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NumberInfoModule, { declarations: function () { return [NumberInfoComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], _delon_util__WEBPACK_IMPORTED_MODULE_2__["DelonUtilModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]]; }, exports: function () { return [NumberInfoComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NumberInfoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], _delon_util__WEBPACK_IMPORTED_MODULE_2__["DelonUtilModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]],
                declarations: COMPONENTS,
                exports: COMPONENTS
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: number-info.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=number-info.js.map

/***/ }),

/***/ "z+xu":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js ***!
  \***************************************************************************/
/*! exports provided: CountdownComponent, CountdownGlobalConfig, CountdownModule, CountdownStatus, CountdownTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownComponent", function() { return CountdownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownGlobalConfig", function() { return CountdownGlobalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownModule", function() { return CountdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownStatus", function() { return CountdownStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownTimer", function() { return CountdownTimer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CountdownComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.i.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function CountdownComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
var CountdownStatus;
(function (CountdownStatus) {
    CountdownStatus[CountdownStatus["ing"] = 0] = "ing";
    CountdownStatus[CountdownStatus["pause"] = 1] = "pause";
    CountdownStatus[CountdownStatus["stop"] = 2] = "stop";
    CountdownStatus[CountdownStatus["done"] = 3] = "done";
})(CountdownStatus || (CountdownStatus = {}));

class CountdownTimer {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.fns = [];
        this.commands = [];
        this.ing = false;
    }
    start() {
        if (this.ing === true) {
            return;
        }
        this.ing = true;
        this.nextTime = +new Date();
        this.ngZone.runOutsideAngular(() => {
            this.process();
        });
    }
    process() {
        while (this.commands.length) {
            this.commands.shift()();
        }
        let diff = +new Date() - this.nextTime;
        const count = 1 + Math.floor(diff / 100);
        diff = 100 - (diff % 100);
        this.nextTime += 100 * count;
        for (let i = 0, len = this.fns.length; i < len; i += 2) {
            let frequency = this.fns[i + 1];
            // 100/s
            if (0 === frequency) {
                this.fns[i](count);
                // 1000/s
            }
            else {
                // 先把末位至0，再每次加2
                frequency += 2 * count - 1;
                const step = Math.floor(frequency / 20);
                if (step > 0) {
                    this.fns[i](step);
                }
                // 把末位还原成1
                this.fns[i + 1] = (frequency % 20) + 1;
            }
        }
        if (!this.ing) {
            return;
        }
        setTimeout(() => this.process(), diff);
    }
    add(fn, frequency) {
        this.commands.push(() => {
            this.fns.push(fn);
            this.fns.push(frequency === 1000 ? 1 : 0);
            this.ing = true;
        });
        return this;
    }
    remove(fn) {
        this.commands.push(() => {
            const i = this.fns.indexOf(fn);
            if (i !== -1) {
                this.fns.splice(i, 2);
            }
            this.ing = this.fns.length > 0;
        });
        return this;
    }
}
CountdownTimer.ɵfac = function CountdownTimer_Factory(t) { return new (t || CountdownTimer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
CountdownTimer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountdownTimer, factory: CountdownTimer.ɵfac });
CountdownTimer.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownTimer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();

// tslint:disable: no-inferrable-types
class CountdownGlobalConfig {
    constructor(locale) {
        this.locale = locale;
        this.demand = false;
        this.leftTime = 0;
        this.format = 'HH:mm:ss';
        this.timezone = '+0000';
        this.formatDate = ({ date, formatStr, timezone }) => {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(date), formatStr, this.locale, timezone || this.timezone || '+0000');
        };
    }
}
CountdownGlobalConfig.ɵfac = function CountdownGlobalConfig_Factory(t) { return new (t || CountdownGlobalConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); };
CountdownGlobalConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function CountdownGlobalConfig_Factory() { return new CountdownGlobalConfig(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); }, token: CountdownGlobalConfig, providedIn: "root" });
CountdownGlobalConfig.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownGlobalConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }]; }, null); })();

class CountdownComponent {
    constructor(locale, timer, defCog, cdr, ngZone) {
        this.locale = locale;
        this.timer = timer;
        this.defCog = defCog;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.frequency = 1000;
        this._notify = {};
        this.status = CountdownStatus.ing;
        this.isDestroy = false;
        this.i = {};
        this.left = 0;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Start countdown, you must manually call when `demand: false`
     */
    begin() {
        this.status = CountdownStatus.ing;
        this.callEvent('start');
    }
    /**
     * Restart countdown
     */
    restart() {
        if (this.status !== CountdownStatus.stop) {
            this.destroy();
        }
        this.init();
        this.callEvent('restart');
    }
    /**
     * Stop countdown, must call `restart` when stopped, it's different from pause, unable to recover
     */
    stop() {
        if (this.status === CountdownStatus.stop) {
            return;
        }
        this.status = CountdownStatus.stop;
        this.destroy();
        this.callEvent('stop');
    }
    /**
     * Pause countdown, you can use `resume` to recover again
     */
    pause() {
        if (this.status === CountdownStatus.stop || this.status === CountdownStatus.pause) {
            return;
        }
        this.status = CountdownStatus.pause;
        this.callEvent('pause');
    }
    /**
     * Resume countdown
     */
    resume() {
        if (this.status === CountdownStatus.stop || this.status !== CountdownStatus.pause) {
            return;
        }
        this.status = CountdownStatus.ing;
        this.callEvent('resume');
    }
    callEvent(action) {
        this.event.emit({ action, left: this.left, status: this.status, text: this.i.text });
    }
    init() {
        const { locale, defCog } = this;
        const config = (this.config = Object.assign(Object.assign(Object.assign({}, new CountdownGlobalConfig(locale)), defCog), this.config));
        // tslint:disable-next-line: no-bitwise
        const frq = (this.frequency = ~config.format.indexOf('S') ? 100 : 1000);
        this.status = config.demand ? CountdownStatus.pause : CountdownStatus.ing;
        this.getLeft();
        // bind reflow to me
        const _reflow = this.reflow;
        this.reflow = (count = 0, force = false) => _reflow.apply(this, [count, force]);
        if (Array.isArray(config.notify)) {
            config.notify.forEach((time) => {
                if (time < 1) {
                    throw new Error(`The notify config must be a positive integer.`);
                }
                time = time * 1000;
                time = time - (time % frq);
                this._notify[time] = true;
            });
        }
        this.timer.add(this.reflow, frq).start();
        this.reflow(0, true);
    }
    destroy() {
        this.timer.remove(this.reflow);
        return this;
    }
    /**
     * 更新时钟
     */
    reflow(count = 0, force = false) {
        if (this.isDestroy) {
            return;
        }
        const { status, config, _notify } = this;
        if (!force && status !== CountdownStatus.ing) {
            return;
        }
        let value = (this.left = this.left - this.frequency * count);
        if (value < 1) {
            value = 0;
        }
        this.i = {
            value,
            text: config.formatDate({ date: value, formatStr: config.format, timezone: config.timezone }),
        };
        if (typeof config.prettyText === 'function') {
            this.i.text = config.prettyText(this.i.text);
        }
        this.cdr.detectChanges();
        if (config.notify === 0 || _notify[value]) {
            this.ngZone.run(() => {
                this.callEvent('notify');
            });
        }
        if (value === 0) {
            this.ngZone.run(() => {
                this.status = CountdownStatus.done;
                this.callEvent('done');
                this.destroy();
            });
        }
    }
    /**
     * 获取倒计时剩余帧数
     */
    getLeft() {
        const { config, frequency } = this;
        let left = config.leftTime * 1000;
        const end = config.stopTime;
        if (!left && end) {
            left = end - new Date().getTime();
        }
        this.left = left - (left % frequency);
    }
    ngOnInit() {
        this.init();
        if (!this.config.demand) {
            this.begin();
        }
    }
    ngOnDestroy() {
        this.isDestroy = true;
        this.destroy();
    }
    ngOnChanges(changes) {
        if (!changes.config.firstChange) {
            this.restart();
        }
    }
}
CountdownComponent.ɵfac = function CountdownComponent_Factory(t) { return new (t || CountdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CountdownTimer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CountdownGlobalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
CountdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountdownComponent, selectors: [["countdown"]], hostVars: 2, hostBindings: function CountdownComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("count-down", true);
    } }, inputs: { config: "config", render: "render" }, outputs: { event: "event" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 5, consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]], template: function CountdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CountdownComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CountdownComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.render);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.render)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.i));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
CountdownComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] },
    { type: CountdownTimer },
    { type: CountdownGlobalConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
CountdownComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    render: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'countdown',
                template: `
    <ng-container *ngIf="!render">
      <span [innerHTML]="i.text"></span>
    </ng-container>
    <ng-container *ngTemplateOutlet="render; context: { $implicit: i }"></ng-container>
  `,
                host: { '[class.count-down]': 'true' },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }, { type: CountdownTimer }, { type: CountdownGlobalConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], render: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class CountdownModule {
}
CountdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CountdownModule });
CountdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CountdownModule_Factory(t) { return new (t || CountdownModule)(); }, providers: [CountdownTimer], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CountdownModule, { declarations: function () { return [CountdownComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [CountdownComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: [CountdownTimer],
                declarations: [CountdownComponent],
                exports: [CountdownComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-countdown.js.map

/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map
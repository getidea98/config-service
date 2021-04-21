(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~widgets-widgets-module"],{

/***/ "G9gJ":
/*!**********************************************************************!*\
  !*** ./node_modules/@delon/chart/__ivy_ngcc__/fesm2015/mini-area.js ***!
  \**********************************************************************/
/*! exports provided: G2MiniAreaComponent, G2MiniAreaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2MiniAreaComponent", function() { return G2MiniAreaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G2MiniAreaModule", function() { return G2MiniAreaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_chart_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/chart/core */ "LLZf");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






/**
 * @fileoverview added by tsickle
 * Generated from: mini-area.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */

function G2MiniAreaData() { }
if (false) {}
/**
 * @record
 */
function G2MiniAreaClickItem() { }
if (false) {}
class G2MiniAreaComponent extends _delon_chart_core__WEBPACK_IMPORTED_MODULE_2__["G2BaseComponent"] {
    constructor() {
        super(...arguments);
        // #region fields
        this.color = 'rgba(24, 144, 255, 0.2)';
        this.borderColor = '#1890FF';
        this.borderWidth = 2;
        this.height = 56;
        this.fit = true;
        this.line = false;
        this.animate = true;
        this.padding = [8, 8, 8, 8];
        this.data = [];
        this.yTooltipSuffix = '';
        this.tooltipType = 'default';
        this.clickItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // #endregion
    /**
     * @return {?}
     */
    install() {
        const { el, fit, height, padding, xAxis, yAxis, yTooltipSuffix, tooltipType, line, theme } = this;
        /** @type {?} */
        const chart = (this._chart = new ((/** @type {?} */ (window))).G2.Chart({
            container: el.nativeElement,
            autoFit: fit,
            height,
            padding,
            theme,
        }));
        if (!xAxis && !yAxis) {
            chart.axis(false);
        }
        if (xAxis) {
            chart.axis('x', xAxis);
        }
        else {
            chart.axis('x', false);
        }
        if (yAxis) {
            chart.axis('y', yAxis);
        }
        else {
            chart.axis('y', false);
        }
        chart.legend(false);
        /** @type {?} */
        const tooltipOption = {
            showTitle: false,
            showMarkers: true,
            enterable: true,
            domStyles: {
                'g2-tooltip': { padding: '0px' },
                'g2-tooltip-title': { display: 'none' },
                'g2-tooltip-list-item': { margin: '4px' },
            },
        };
        if (tooltipType === 'mini') {
            tooltipOption.position = 'top';
            (/** @type {?} */ (tooltipOption.domStyles))['g2-tooltip'] = { padding: '0px', backgroundColor: 'transparent', boxShadow: 'none' };
            tooltipOption.itemTpl = `<li>{value}</li>`;
            tooltipOption.offset = 0;
        }
        chart.tooltip(tooltipOption);
        chart
            .area()
            .position('x*y')
            .tooltip('x*y', (/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => ({ name: x, value: y + yTooltipSuffix })))
            .shape('smooth');
        if (line) {
            chart.line().position('x*y').shape('smooth').tooltip(false);
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
        chart.render();
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { _chart, line, fit, height, animate, padding, data, color, borderColor, borderWidth } = this;
        if (!_chart || !data || data.length <= 0) {
            return;
        }
        /** @type {?} */
        const geoms = _chart.geometries;
        geoms.forEach((/**
         * @param {?} g
         * @return {?}
         */
        g => g.color(color)));
        if (line) {
            geoms[1].color(borderColor).size(borderWidth);
        }
        _chart.autoFit = fit;
        _chart.height = height;
        _chart.animate(animate);
        _chart.padding = padding;
        _chart.changeData(data);
        _chart.render();
    }
}
G2MiniAreaComponent.ɵfac = function G2MiniAreaComponent_Factory(t) { return ɵG2MiniAreaComponent_BaseFactory(t || G2MiniAreaComponent); };
G2MiniAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: G2MiniAreaComponent, selectors: [["g2-mini-area"]], hostVars: 2, hostBindings: function G2MiniAreaComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.height, "px");
    } }, inputs: { color: "color", borderColor: "borderColor", borderWidth: "borderWidth", height: "height", fit: "fit", line: "line", animate: "animate", padding: "padding", data: "data", yTooltipSuffix: "yTooltipSuffix", tooltipType: "tooltipType", xAxis: "xAxis", yAxis: "yAxis" }, outputs: { clickItem: "clickItem" }, exportAs: ["g2MiniArea"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function G2MiniAreaComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
G2MiniAreaComponent.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    borderColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    borderWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    line: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    animate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    xAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    yAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    yTooltipSuffix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    tooltipType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clickItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2MiniAreaComponent.prototype, "borderWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2MiniAreaComponent.prototype, "height", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2MiniAreaComponent.prototype, "fit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2MiniAreaComponent.prototype, "line", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], G2MiniAreaComponent.prototype, "animate", void 0);
const ɵG2MiniAreaComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](G2MiniAreaComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2MiniAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'g2-mini-area',
                exportAs: 'g2MiniArea',
                template: ``,
                host: {
                    '[style.height.px]': 'height'
                },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], null, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], borderColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], borderWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], line: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], animate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], yTooltipSuffix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tooltipType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], clickItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], xAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], yAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: mini-area.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2MiniAreaComponent];
class G2MiniAreaModule {
}
G2MiniAreaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: G2MiniAreaModule });
G2MiniAreaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function G2MiniAreaModule_Factory(t) { return new (t || G2MiniAreaModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](G2MiniAreaModule, { declarations: function () { return [G2MiniAreaComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"]]; }, exports: function () { return [G2MiniAreaComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](G2MiniAreaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"]],
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
 * Generated from: mini-area.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=mini-area.js.map

/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~widgets-widgets-module.js.map
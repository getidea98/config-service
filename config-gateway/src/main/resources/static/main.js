(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+VE9":
/*!*****************************************************************!*\
  !*** ./src/app/layout/basic/widgets/clear-storage.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderClearStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderClearStorageComponent", function() { return HeaderClearStorageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");




let HeaderClearStorageComponent = class HeaderClearStorageComponent {
    constructor(modalSrv, messageSrv) {
        this.modalSrv = modalSrv;
        this.messageSrv = messageSrv;
    }
    _click() {
        this.modalSrv.confirm({
            nzTitle: 'Make sure clear all local storage?',
            nzOnOk: () => {
                localStorage.clear();
                this.messageSrv.success('Clear Finished!');
            },
        });
    }
};
HeaderClearStorageComponent.ctorParameters = () => [
    { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] },
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }
];
HeaderClearStorageComponent.propDecorators = {
    _click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] }]
};
HeaderClearStorageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-clear-storage',
        template: `
    <i nz-icon nzType="tool"></i>
    {{ 'menu.clear.local.storage' | translate }}
  `,
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.d-block]': 'true',
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    })
], HeaderClearStorageComponent);



/***/ }),

/***/ "/Jab":
/*!************************!*\
  !*** ./_mock/_pois.ts ***!
  \************************/
/*! exports provided: POIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POIS", function() { return POIS; });
const POIS = {
    '/pois': {
        total: 2,
        list: [
            {
                id: 10000,
                user_id: 1,
                name: '测试品牌',
                branch_name: '测试分店',
                geo: 310105,
                country: '中国',
                province: '上海',
                city: '上海市',
                district: '长宁区',
                address: '中山公园',
                tel: '15900000000',
                categories: '美食,粤菜,湛江菜',
                lng: 121.41707989151003,
                lat: 31.218656214644792,
                recommend: '推荐品',
                special: '特色服务',
                introduction: '商户简介',
                open_time: '营业时间',
                avg_price: 260,
                reason: null,
                status: 1,
                status_str: '待审核',
                status_wx: 1,
                modified: 1505826527288,
                created: 1505826527288,
            },
            {
                id: 10001,
                user_id: 2,
                name: '测试品牌2',
                branch_name: '测试分店2',
                geo: 310105,
                country: '中国',
                province: '上海',
                city: '上海市',
                district: '长宁区',
                address: '中山公园',
                tel: '15900000000',
                categories: '美食,粤菜,湛江菜',
                lng: 121.41707989151003,
                lat: 31.218656214644792,
                recommend: '推荐品',
                special: '特色服务',
                introduction: '商户简介',
                open_time: '营业时间',
                avg_price: 260,
                reason: null,
                status: 1,
                status_str: '待审核',
                status_wx: 1,
                modified: 1505826527288,
                created: 1505826527288,
            },
        ],
    },
};


/***/ }),

/***/ "/XSn":
/*!*******************************************************!*\
  !*** ./src/app/layout/passport/passport.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutPassportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPassportComponent", function() { return LayoutPassportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_passport_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./passport.component.html */ "7N9V");
/* harmony import */ var _passport_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passport.component.less */ "2Y3b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/auth */ "0bRG");





let LayoutPassportComponent = class LayoutPassportComponent {
    constructor(tokenService) {
        this.tokenService = tokenService;
        this.links = [
            {
                title: '帮助',
                href: '',
            },
            {
                title: '隐私',
                href: '',
            },
            {
                title: '条款',
                href: '',
            },
        ];
    }
    ngOnInit() {
        this.tokenService.clear();
    }
};
LayoutPassportComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_delon_auth__WEBPACK_IMPORTED_MODULE_4__["DA_SERVICE_TOKEN"],] }] }
];
LayoutPassportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'layout-passport',
        template: _raw_loader_passport_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_passport_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LayoutPassportComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/miaoyimin/ideaProject/my-project/src/main.ts */"zUnb");


/***/ }),

/***/ "2Y3b":
/*!*********************************************************!*\
  !*** ./src/app/layout/passport/passport.component.less ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host ::ng-deep .container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  background: #f0f2f5;\n}\n:host ::ng-deep .langs {\n  width: 100%;\n  height: 40px;\n  line-height: 44px;\n  text-align: right;\n}\n:host ::ng-deep .langs .anticon {\n  margin-top: 24px;\n  margin-right: 24px;\n  font-size: 14px;\n  vertical-align: top;\n  cursor: pointer;\n}\n:host ::ng-deep .wrap {\n  flex: 1;\n  padding: 32px 0;\n}\n:host ::ng-deep .ant-form-item {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n  :host ::ng-deep .container {\n    background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');\n    background-repeat: no-repeat;\n    background-position: center 110px;\n    background-size: 100%;\n  }\n  :host ::ng-deep .wrap {\n    padding: 32px 0 24px;\n  }\n}\n:host ::ng-deep .top {\n  text-align: center;\n}\n:host ::ng-deep .header {\n  height: 44px;\n  line-height: 44px;\n}\n:host ::ng-deep .header a {\n  text-decoration: none;\n}\n:host ::ng-deep .logo {\n  height: 44px;\n  margin-right: 16px;\n}\n:host ::ng-deep .title {\n  position: relative;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 600;\n  font-size: 33px;\n  font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n}\n:host ::ng-deep .desc {\n  margin-top: 12px;\n  margin-bottom: 40px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n[data-theme='dark'] :host ::ng-deep .container {\n  background: #141414;\n}\n[data-theme='dark'] :host ::ng-deep .title {\n  color: rgba(255, 255, 255, 0.85);\n}\n[data-theme='dark'] :host ::ng-deep .desc {\n  color: rgba(255, 255, 255, 0.45);\n}\n@media (min-width: 768px) {\n  [data-theme='dark'] :host ::ng-deep .container {\n    background-image: none;\n  }\n}\n[data-theme='compact'] :host ::ng-deep .ant-form-item {\n  margin-bottom: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3Nwb3J0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1Riw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQUY3RjtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQVJBO0VBUUksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBR0o7QUFkQTtFQWFNLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSU47QUFyQkE7RUFxQkksT0FBQTtFQUNBLGVBQUE7QUFHSjtBQXpCQTtFQXlCSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUdKO0FBQUU7RUFBQTtJQUVJLDRGQUFBO0lBQ0EsNEJBQUE7SUFDQSxpQ0FBQTtJQUNBLHFCQUFBO0VBRUo7RUFQQTtJQVFJLG9CQUFBO0VBRUo7QUFDRjtBQXpDQTtFQTBDSSxrQkFBQTtBQUVKO0FBNUNBO0VBNkNJLFlBQUE7RUFDQSxpQkFBQTtBQUVKO0FBaERBO0VBZ0RNLHFCQUFBO0FBR047QUFuREE7RUFvREksWUFBQTtFQUNBLGtCQUFBO0FBRUo7QUF2REE7RUF3REksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlFQUFBO0VBQ0Esc0JBQUE7QUFFSjtBQS9EQTtFQWdFSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBRUo7QUFFQTtFQUdNLG1CQUFBO0FBRk47QUFEQTtFQU1NLGdDQUFBO0FBRk47QUFKQTtFQVNNLGdDQUFBO0FBRk47QUFJSTtFQUFBO0lBRUksc0JBQUE7RUFGTjtBQUNGO0FBT0E7RUFHTSxtQkFBQTtBQVBOIiwiZmlsZSI6InBhc3Nwb3J0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfkBkZWxvbi90aGVtZS9pbmRleCc7XG46aG9zdCA6Om5nLWRlZXAge1xuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMmY1O1xuICB9XG4gIC5sYW5ncyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIC5hbnRpY29uIHtcbiAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuICAud3JhcCB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAzMnB4IDA7XG4gIH1cbiAgLmFudC1mb3JtLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogQHNjcmVlbi1tZC1taW4pIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL1RWWVRiQVhXaGVRcFJjV0RhRE11LnN2ZycpO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAxMTBweDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICB9XG4gICAgLndyYXAge1xuICAgICAgcGFkZGluZzogMzJweCAwIDI0cHg7XG4gICAgfVxuICB9XG4gIC50b3Age1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB9XG4gIC50aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiBAaGVhZGluZy1jb2xvcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICBmb250LWZhbWlseTogJ015cmlhZCBQcm8nLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmRlc2Mge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBjb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1iYXNlO1xuICB9XG59XG5cbltkYXRhLXRoZW1lPSdkYXJrJ10ge1xuICA6aG9zdCA6Om5nLWRlZXAge1xuICAgIC5jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogIzE0MTQxNDtcbiAgICB9XG4gICAgLnRpdGxlIHtcbiAgICAgIGNvbG9yOiBmYWRlKEB3aGl0ZSwgODUlKTtcbiAgICB9XG4gICAgLmRlc2Mge1xuICAgICAgY29sb3I6IGZhZGUoQHdoaXRlLCA0NSUpO1xuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogQHNjcmVlbi1tZC1taW4pIHtcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5bZGF0YS10aGVtZT0nY29tcGFjdCddIHtcbiAgOmhvc3QgOjpuZy1kZWVwIHtcbiAgICAuYW50LWZvcm0taXRlbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "3QV4":
/*!******************************************************!*\
  !*** ./src/app/shared/st-widget/st-widget.module.ts ***!
  \******************************************************/
/*! exports provided: STWIDGET_COMPONENTS, STWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STWIDGET_COMPONENTS", function() { return STWIDGET_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STWidgetModule", function() { return STWidgetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.module */ "PCNd");


// import { STWidgetRegistry } from '@delon/abc/st';

const STWIDGET_COMPONENTS = [];
let STWidgetModule = class STWidgetModule {
};
STWidgetModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: STWIDGET_COMPONENTS,
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
        exports: [...STWIDGET_COMPONENTS],
    })
], STWidgetModule);



/***/ }),

/***/ "4xgS":
/*!**********************************************************!*\
  !*** ./src/app/shared/json-schema/json-schema.module.ts ***!
  \**********************************************************/
/*! exports provided: SCHEMA_THIRDS_COMPONENTS, JsonSchemaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEMA_THIRDS_COMPONENTS", function() { return SCHEMA_THIRDS_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaModule", function() { return JsonSchemaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/form */ "ok2U");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.module */ "PCNd");




// import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
// import { UeditorWidget } from './widgets/ueditor/ueditor.widget';
const SCHEMA_THIRDS_COMPONENTS = [
// TinymceWidget,
// UeditorWidget
];
let JsonSchemaModule = class JsonSchemaModule {
    constructor(widgetRegistry) {
        // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
        // widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
    }
};
JsonSchemaModule.ctorParameters = () => [
    { type: _delon_form__WEBPACK_IMPORTED_MODULE_2__["WidgetRegistry"] }
];
JsonSchemaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: SCHEMA_THIRDS_COMPONENTS,
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _delon_form__WEBPACK_IMPORTED_MODULE_2__["DelonFormModule"].forRoot()],
        exports: [...SCHEMA_THIRDS_COMPONENTS],
    })
], JsonSchemaModule);



/***/ }),

/***/ "6sqv":
/*!************************!*\
  !*** ./_mock/_rule.ts ***!
  \************************/
/*! exports provided: RULES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULES", function() { return RULES; });
const list = [];
for (let i = 0; i < 46; i += 1) {
    list.push({
        key: i,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: `TradeCode ${i}`,
        title: `一个任务名称 ${i}`,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date(`2017-07-${i < 18 ? '0' + (Math.floor(i / 2) + 1) : Math.floor(i / 2) + 1}`),
        createdAt: new Date(`2017-07-${i < 18 ? '0' + (Math.floor(i / 2) + 1) : Math.floor(i / 2) + 1}`),
        progress: Math.ceil(Math.random() * 100),
    });
}
function getRule(params) {
    let ret = [...list];
    if (params.sorter) {
        const s = params.sorter.split('_');
        ret = ret.sort((prev, next) => {
            if (s[1] === 'descend') {
                return next[s[0]] - prev[s[0]];
            }
            return prev[s[0]] - next[s[0]];
        });
    }
    if (params.statusList && params.statusList.length > 0) {
        ret = ret.filter((data) => params.statusList.indexOf(data.status) > -1);
    }
    if (params.no) {
        ret = ret.filter((data) => data.no.indexOf(params.no) > -1);
    }
    return ret;
}
function removeRule(nos) {
    nos.split(',').forEach((no) => {
        const idx = list.findIndex((w) => w.no === no);
        if (idx !== -1) {
            list.splice(idx, 1);
        }
    });
    return true;
}
function saveRule(description) {
    const i = Math.ceil(Math.random() * 10000);
    list.unshift({
        key: i,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: `TradeCode ${i}`,
        title: `一个任务名称 ${i}`,
        owner: '曲丽丽',
        description,
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 2,
        updatedAt: new Date(),
        createdAt: new Date(),
        progress: Math.ceil(Math.random() * 100),
    });
}
const RULES = {
    '/rule': (req) => getRule(req.queryString),
    'DELETE /rule': (req) => removeRule(req.queryString.nos),
    'POST /rule': (req) => saveRule(req.body.description),
};


/***/ }),

/***/ "7N9V":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/layout/passport/passport.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <header-i18n showLangText=\"false\" class=\"langs\"></header-i18n>\n  <div class=\"wrap\">\n    <div class=\"top\">\n      <div class=\"head\">\n        <img class=\"logo\" src=\"./assets/logo-color.svg\" />\n        <span class=\"title\">ng-alain</span>\n      </div>\n      <div class=\"desc\">武林中最有影响力的《葵花宝典》；欲练神功，挥刀自宫</div>\n    </div>\n    <router-outlet></router-outlet>\n    <global-footer [links]=\"links\">\n      Copyright\n      <i nz-icon nzType=\"copyright\"></i> 2017 <a href=\"//github.com/cipchk\" target=\"_blank\">卡色</a>出品\n    </global-footer>\n  </div>\n</div>\n<theme-btn></theme-btn>\n");

/***/ }),

/***/ "7pTB":
/*!****************************!*\
  !*** ./src/style-icons.ts ***!
  \****************************/
/*! exports provided: ICONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return ICONS; });
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "kVq8");
// Custom icon static resources

const ICONS = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["InfoOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["BulbOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ProfileOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ExceptionOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LinkOutline"]];


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    SERVER_URL: `http://tx.getidea.top:8888`,
    production: false,
    useHash: true,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B41o":
/*!********************************************************!*\
  !*** ./src/app/layout/basic/widgets/user.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderUserComponent", function() { return HeaderUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/auth */ "0bRG");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "Ac7g");





let HeaderUserComponent = class HeaderUserComponent {
    constructor(settings, router, tokenService) {
        this.settings = settings;
        this.router = router;
        this.tokenService = tokenService;
    }
    get user() {
        return this.settings.user;
    }
    logout() {
        this.tokenService.clear();
        this.router.navigateByUrl(this.tokenService.login_url);
    }
};
HeaderUserComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_delon_auth__WEBPACK_IMPORTED_MODULE_3__["DA_SERVICE_TOKEN"],] }] }
];
HeaderUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-user',
        template: `
    <div class="alain-default__nav-item d-flex align-items-center px-sm" nz-dropdown nzPlacement="bottomRight" [nzDropdownMenu]="userMenu">
      <nz-avatar [nzSrc]="user.avatar" nzSize="small" class="mr-sm"></nz-avatar>
      {{ user.name }}
    </div>
    <nz-dropdown-menu #userMenu="nzDropdownMenu">
      <div nz-menu class="width-sm">
        <div nz-menu-item routerLink="/pro/account/center">
          <i nz-icon nzType="user" class="mr-sm"></i>
          {{ 'menu.account.center' | translate }}
        </div>
        <div nz-menu-item routerLink="/pro/account/settings">
          <i nz-icon nzType="setting" class="mr-sm"></i>
          {{ 'menu.account.settings' | translate }}
        </div>
        <div nz-menu-item routerLink="/exception/trigger">
          <i nz-icon nzType="close-circle" class="mr-sm"></i>
          {{ 'menu.account.trigger' | translate }}
        </div>
        <li nz-menu-divider></li>
        <div nz-menu-item (click)="logout()">
          <i nz-icon nzType="logout" class="mr-sm"></i>
          {{ 'menu.account.logout' | translate }}
        </div>
      </div>
    </nz-dropdown-menu>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    })
], HeaderUserComponent);



/***/ }),

/***/ "Bk68":
/*!***********************!*\
  !*** ./_mock/_geo.ts ***!
  \***********************/
/*! exports provided: GEOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEOS", function() { return GEOS; });
const DATA = [
    {
        name: '上海',
        id: '310000',
    },
    {
        name: '市辖区',
        id: '310100',
    },
    {
        name: '北京',
        id: '110000',
    },
    {
        name: '市辖区',
        id: '110100',
    },
    {
        name: '浙江省',
        id: '330000',
    },
    {
        name: '杭州市',
        id: '330100',
    },
    {
        name: '宁波市',
        id: '330200',
    },
    {
        name: '温州市',
        id: '330300',
    },
    {
        name: '嘉兴市',
        id: '330400',
    },
    {
        name: '湖州市',
        id: '330500',
    },
    {
        name: '绍兴市',
        id: '330600',
    },
    {
        name: '金华市',
        id: '330700',
    },
    {
        name: '衢州市',
        id: '330800',
    },
    {
        name: '舟山市',
        id: '330900',
    },
    {
        name: '台州市',
        id: '331000',
    },
    {
        name: '丽水市',
        id: '331100',
    },
];
const GEOS = {
    '/geo/province': () => DATA.filter(w => w.id.endsWith('0000')),
    '/geo/:id': (req) => {
        const pid = (req.params.id || '310000').slice(0, 2);
        return DATA.filter(w => w.id.slice(0, 2) === pid && !w.id.endsWith('0000'));
    },
};


/***/ }),

/***/ "Bx0U":
/*!*************************************************!*\
  !*** ./src/app/layout/basic/basic.component.ts ***!
  \*************************************************/
/*! exports provided: LayoutBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutBasicComponent", function() { return LayoutBasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "AytR");




let LayoutBasicComponent = class LayoutBasicComponent {
    constructor(settings) {
        this.settings = settings;
        this.options = {
            logoExpanded: `./assets/logo-full.svg`,
            logoCollapsed: `./assets/logo.svg`,
        };
        this.searchToggleStatus = false;
        this.showSettingDrawer = !_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production;
    }
    get user() {
        return this.settings.user;
    }
};
LayoutBasicComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
];
LayoutBasicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'layout-basic',
        template: `
    <layout-default [options]="options" [asideUser]="asideUserTpl" [content]="contentTpl">
      <layout-default-header-item direction="right" hidden="mobile">
        <header-task></header-task>
      </layout-default-header-item>
      <layout-default-header-item direction="right">
        <header-user></header-user>
      </layout-default-header-item>
      <ng-template #asideUserTpl>
        <div nz-dropdown nzTrigger="click" [nzDropdownMenu]="userMenu" class="alain-default__aside-user">
          <nz-avatar class="alain-default__aside-user-avatar" [nzSrc]="user.avatar"></nz-avatar>
          <div class="alain-default__aside-user-info">
            <strong>{{ user.name }}</strong>
            <p class="mb0">{{ user.email }}</p>
          </div>
        </div>
        <nz-dropdown-menu #userMenu="nzDropdownMenu">
          <ul nz-menu>
            <li nz-menu-item routerLink="/pro/account/center">{{ 'menu.account.center' | translate }}</li>
            <li nz-menu-item routerLink="/pro/account/settings">{{ 'menu.account.settings' | translate }}</li>
          </ul>
        </nz-dropdown-menu>
      </ng-template>
      <ng-template #contentTpl>
        <router-outlet></router-outlet>
      </ng-template>
    </layout-default>
    <setting-drawer *ngIf="showSettingDrawer"></setting-drawer>
    <theme-btn></theme-btn>
  `,
    })
], LayoutBasicComponent);



/***/ }),

/***/ "DG78":
/*!***********************************************!*\
  !*** ./src/app/shared/shared-delon.module.ts ***!
  \***********************************************/
/*! exports provided: SHARED_DELON_MODULES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARED_DELON_MODULES", function() { return SHARED_DELON_MODULES; });
/* harmony import */ var _delon_abc_page_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @delon/abc/page-header */ "SdXu");
/* harmony import */ var _delon_abc_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/abc/result */ "PFPK");
/* harmony import */ var _delon_abc_se__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/abc/se */ "O3k0");
/* harmony import */ var _delon_abc_st__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/abc/st */ "DGaY");
/* harmony import */ var _delon_abc_sv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/abc/sv */ "0lRi");





const SHARED_DELON_MODULES = [_delon_abc_st__WEBPACK_IMPORTED_MODULE_3__["STModule"], _delon_abc_sv__WEBPACK_IMPORTED_MODULE_4__["SVModule"], _delon_abc_se__WEBPACK_IMPORTED_MODULE_2__["SEModule"], _delon_abc_page_header__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"], _delon_abc_result__WEBPACK_IMPORTED_MODULE_1__["ResultModule"]];


/***/ }),

/***/ "DHVr":
/*!************************!*\
  !*** ./_mock/_user.ts ***!
  \************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
const list = [];
const total = 50;
for (let i = 0; i < total; i += 1) {
    list.push({
        id: i + 1,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: `TradeCode ${i}`,
        title: `一个任务名称 ${i}`,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
        createdAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
        progress: Math.ceil(Math.random() * 100),
    });
}
function genData(params) {
    let ret = [...list];
    const pi = +params.pi;
    const ps = +params.ps;
    const start = (pi - 1) * ps;
    if (params.no) {
        ret = ret.filter((data) => data.no.indexOf(params.no) > -1);
    }
    return { total: ret.length, list: ret.slice(start, ps * pi) };
}
function saveData(id, value) {
    const item = list.find((w) => w.id === id);
    if (!item) {
        return { msg: '无效用户信息' };
    }
    Object.assign(item, value);
    return { msg: 'ok' };
}
const USERS = {
    '/user': (req) => genData(req.queryString),
    '/user/:id': (req) => list.find((w) => w.id === +req.params.id),
    'POST /user/:id': (req) => saveData(+req.params.id, req.body),
    '/user/current': {
        name: 'Cipchk',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'cipchk@qq.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
            {
                key: '0',
                label: '很有想法的',
            },
            {
                key: '1',
                label: '专注撩妹',
            },
            {
                key: '2',
                label: '帅~',
            },
            {
                key: '3',
                label: '通吃',
            },
            {
                key: '4',
                label: '专职后端',
            },
            {
                key: '5',
                label: '海纳百川',
            },
        ],
        notifyCount: 12,
        country: 'China',
        geographic: {
            province: {
                label: '上海',
                key: '330000',
            },
            city: {
                label: '市辖区',
                key: '330100',
            },
        },
        address: 'XX区XXX路 XX 号',
        phone: '你猜-你猜你猜猜猜',
    },
    'POST /user/avatar': 'ok',
    'POST /login/account': (req) => {
        const data = req.body;
        if (!(data.userName === 'admin' || data.userName === 'user') || data.password !== 'ng-alain.com') {
            return { msg: `Invalid username or password（admin/ng-alain.com）` };
        }
        return {
            msg: 'ok',
            user: {
                token: '123456789',
                name: data.userName,
                email: `${data.userName}@qq.com`,
                id: 10000,
                time: +new Date(),
            },
        };
    },
    'POST /register': {
        msg: 'ok',
    },
};


/***/ }),

/***/ "EC/B":
/*!*************************!*\
  !*** ./_mock/_chart.ts ***!
  \*************************/
/*! exports provided: CHARTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARTS", function() { return CHARTS; });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/format */ "sWYD");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mockjs */ "luuv");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_1__);


// region: mock data
const visitData = [];
const beginDay = new Date().getTime();
const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
    visitData.push({
        x: Object(date_fns_format__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: fakeY[i],
    });
}
const visitData2 = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
    visitData2.push({
        x: Object(date_fns_format__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: fakeY2[i],
    });
}
const salesData = [];
for (let i = 0; i < 12; i += 1) {
    salesData.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200,
    });
}
const searchData = [];
for (let i = 0; i < 50; i += 1) {
    searchData.push({
        index: i + 1,
        keyword: `搜索关键词-${i}`,
        count: Math.floor(Math.random() * 1000),
        range: Math.floor(Math.random() * 100),
        status: Math.floor((Math.random() * 10) % 2),
    });
}
const salesTypeData = [
    {
        x: '家用电器',
        y: 4544,
    },
    {
        x: '食用酒水',
        y: 3321,
    },
    {
        x: '个护健康',
        y: 3113,
    },
    {
        x: '服饰箱包',
        y: 2341,
    },
    {
        x: '母婴产品',
        y: 1231,
    },
    {
        x: '其他',
        y: 1231,
    },
];
const salesTypeDataOnline = [
    {
        x: '家用电器',
        y: 244,
    },
    {
        x: '食用酒水',
        y: 321,
    },
    {
        x: '个护健康',
        y: 311,
    },
    {
        x: '服饰箱包',
        y: 41,
    },
    {
        x: '母婴产品',
        y: 121,
    },
    {
        x: '其他',
        y: 111,
    },
];
const salesTypeDataOffline = [
    {
        x: '家用电器',
        y: 99,
    },
    {
        x: '个护健康',
        y: 188,
    },
    {
        x: '服饰箱包',
        y: 344,
    },
    {
        x: '母婴产品',
        y: 255,
    },
    {
        x: '其他',
        y: 65,
    },
];
const offlineData = [];
for (let i = 0; i < 10; i += 1) {
    offlineData.push({
        name: `门店${i}`,
        cvr: Math.ceil(Math.random() * 9) / 10,
    });
}
const offlineChartData = [];
for (let i = 0; i < 20; i += 1) {
    offlineChartData.push({
        time: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 10,
        y2: Math.floor(Math.random() * 100) + 10,
    });
}
const radarOriginData = [
    {
        name: '个人',
        ref: 10,
        koubei: 8,
        output: 4,
        contribute: 5,
        hot: 7,
    },
    {
        name: '团队',
        ref: 3,
        koubei: 9,
        output: 6,
        contribute: 3,
        hot: 1,
    },
    {
        name: '部门',
        ref: 4,
        koubei: 1,
        output: 6,
        contribute: 5,
        hot: 7,
    },
];
//
const radarData = [];
const radarTitleMap = {
    ref: '引用',
    koubei: '口碑',
    output: '产量',
    contribute: '贡献',
    hot: '热度',
};
radarOriginData.forEach((item) => {
    Object.keys(item).forEach((key) => {
        if (key !== 'name') {
            radarData.push({
                name: item.name,
                label: radarTitleMap[key],
                value: item[key],
            });
        }
    });
});
// endregion
const CHARTS = {
    '/chart': JSON.parse(JSON.stringify({
        visitData,
        visitData2,
        salesData,
        searchData,
        offlineData,
        offlineChartData,
        salesTypeData,
        salesTypeDataOnline,
        salesTypeDataOffline,
        radarData,
    })),
    '/chart/visit': JSON.parse(JSON.stringify(visitData)),
    '/chart/tags': mockjs__WEBPACK_IMPORTED_MODULE_1__["mock"]({
        'list|100': [{ name: '@city', 'value|1-100': 150 }],
    }),
};


/***/ }),

/***/ "EKSC":
/*!*****************************************!*\
  !*** ./src/app/global-config.module.ts ***!
  \*****************************************/
/*! exports provided: GlobalConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConfigModule", function() { return GlobalConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ "ey9i");
/* harmony import */ var _delon_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/mock */ "KE60");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/acl */ "atJ9");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_mock */ "hIEZ");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
var GlobalConfigModule_1;






// Please refer to: https://ng-alain.com/docs/global-config
// #region NG-ALAIN Config

const alainConfig = {
    st: { modal: { size: 'lg' } },
    pageHeader: { homeI18n: 'home' },
    lodop: {
        license: `A59B099A586B3851E0F0D7FDBF37B603`,
        licenseA: `C94CEE276DB2187AE6B65D56B3FC2848`,
    },
    auth: { login_url: '/passport/login' },
};
const alainModules = [_delon_theme__WEBPACK_IMPORTED_MODULE_4__["AlainThemeModule"].forRoot(), _delon_acl__WEBPACK_IMPORTED_MODULE_6__["DelonACLModule"].forRoot(), _delon_mock__WEBPACK_IMPORTED_MODULE_3__["DelonMockModule"].forRoot()];
const alainProvides = [{ provide: _delon_util__WEBPACK_IMPORTED_MODULE_5__["ALAIN_CONFIG"], useValue: alainConfig }];
// mock


if (!_env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production) {
    alainConfig.mock = { data: _mock__WEBPACK_IMPORTED_MODULE_8__ };
}
// #region reuse-tab
/**
 * 若需要[路由复用](https://ng-alain.com/components/reuse-tab)需要：
 * 1、在 `shared-delon.module.ts` 导入 `ReuseTabModule` 模块
 * 2、注册 `RouteReuseStrategy`
 * 3、在 `src/app/layout/default/default.component.html` 修改：
 *  ```html
 *  <section class="alain-default__content">
 *    <reuse-tab #reuseTab></reuse-tab>
 *    <router-outlet (activate)="reuseTab.activate($event)"></router-outlet>
 *  </section>
 *  ```
 */
// import { RouteReuseStrategy } from '@angular/router';
// import { ReuseTabService, ReuseTabStrategy } from '@delon/abc/reuse-tab';
// alainProvides.push({
//   provide: RouteReuseStrategy,
//   useClass: ReuseTabStrategy,
//   deps: [ReuseTabService],
// } as any);
// #endregion
// #endregion
// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
// #region NG-ZORRO Config

const ngZorroConfig = {};
const zorroProvides = [{ provide: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_9__["NZ_CONFIG"], useValue: ngZorroConfig }];
// #endregion
let GlobalConfigModule = GlobalConfigModule_1 = class GlobalConfigModule {
    constructor(parentModule) {
        Object(_core__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"])(parentModule, 'GlobalConfigModule');
    }
    static forRoot() {
        return {
            ngModule: GlobalConfigModule_1,
            providers: [...alainProvides, ...zorroProvides],
        };
    }
};
GlobalConfigModule.ctorParameters = () => [
    { type: GlobalConfigModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
GlobalConfigModule = GlobalConfigModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [...alainModules],
    })
], GlobalConfigModule);



/***/ }),

/***/ "M0ag":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: yuan, SharedModule, SCHEMA_THIRDS_COMPONENTS, JsonSchemaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_yuan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/yuan */ "XtHz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yuan", function() { return _utils_yuan__WEBPACK_IMPORTED_MODULE_0__["yuan"]; });

/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.module */ "PCNd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]; });

/* harmony import */ var _json_schema_json_schema_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json-schema/json-schema.module */ "4xgS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SCHEMA_THIRDS_COMPONENTS", function() { return _json_schema_json_schema_module__WEBPACK_IMPORTED_MODULE_2__["SCHEMA_THIRDS_COMPONENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaModule", function() { return _json_schema_json_schema_module__WEBPACK_IMPORTED_MODULE_2__["JsonSchemaModule"]; });

// Components
// Utils

// Module




/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/acl */ "atJ9");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/form */ "ok2U");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_delon_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared-delon.module */ "DG78");
/* harmony import */ var _shared_zorro_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared-zorro.module */ "ekAG");











// #region third libs
// import { NgxTinymceModule } from 'ngx-tinymce';
// import { UEditorModule } from 'ngx-ueditor';
const THIRDMODULES = [];
// #endregion
// #region your componets & directives
const COMPONENTS = [];
const DIRECTIVES = [];
// #endregion
let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_7__["AlainThemeModule"].forChild(),
            _delon_acl__WEBPACK_IMPORTED_MODULE_5__["DelonACLModule"],
            _delon_form__WEBPACK_IMPORTED_MODULE_6__["DelonFormModule"],
            ..._shared_delon_module__WEBPACK_IMPORTED_MODULE_9__["SHARED_DELON_MODULES"],
            ..._shared_zorro_module__WEBPACK_IMPORTED_MODULE_10__["SHARED_ZORRO_MODULES"],
            // third libs
            ...THIRDMODULES,
        ],
        declarations: [
            // your components
            ...COMPONENTS,
            ...DIRECTIVES,
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_7__["AlainThemeModule"],
            _delon_acl__WEBPACK_IMPORTED_MODULE_5__["DelonACLModule"],
            _delon_form__WEBPACK_IMPORTED_MODULE_6__["DelonFormModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            ..._shared_delon_module__WEBPACK_IMPORTED_MODULE_9__["SHARED_DELON_MODULES"],
            ..._shared_zorro_module__WEBPACK_IMPORTED_MODULE_10__["SHARED_ZORRO_MODULES"],
            // third libs
            ...THIRDMODULES,
            // your components
            ...COMPONENTS,
            ...DIRECTIVES,
        ],
    })
], SharedModule);



/***/ }),

/***/ "Pps4":
/*!*******************************************************!*\
  !*** ./src/app/layout/basic/widgets/rtl.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderRTLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRTLComponent", function() { return HeaderRTLComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "Ac7g");



let HeaderRTLComponent = class HeaderRTLComponent {
    constructor(rtl) {
        this.rtl = rtl;
    }
    toggleDirection() {
        this.rtl.toggle();
    }
};
HeaderRTLComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["RTLService"] }
];
HeaderRTLComponent.propDecorators = {
    toggleDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] }]
};
HeaderRTLComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-rtl',
        template: `
    <i nz-icon [nzType]="rtl.nextDir === 'rtl' ? 'border-left' : 'border-right'"></i>
    {{ rtl.nextDir | uppercase }}
  `,
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.d-block]': 'true',
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    })
], HeaderRTLComponent);



/***/ }),

/***/ "RHt1":
/*!***********************!*\
  !*** ./_mock/_api.ts ***!
  \***********************/
/*! exports provided: APIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var _delon_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @delon/mock */ "KE60");

// region: mock data
const titles = ['Alipay', 'Angular', 'Ant Design', 'Ant Design Pro', 'Bootstrap', 'React', 'Vue', 'Webpack'];
const avatars = [
    'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
];
const covers = [
    'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
    'https://gw.alipayobjects.com/zos/rmsportal/alaPpKWajEbIYEUvvVNf.png',
    'https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png',
    'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
    '那是一种内在的东西， 他们到达不了，也无法触及的',
    '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    '生命就像一盒巧克力，结果往往出人意料',
    '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    '那时候我只会想自己想要什么，从不想自己拥有什么',
];
const user = ['卡色', 'cipchk', '付小小', '曲丽丽', '林东东', '周星星', '吴加好', '朱偏右', '鱼酱', '乐哥', '谭小仪', '仲尼'];
// endregion
function getFakeList(count = 20) {
    const list = [];
    for (let i = 0; i < count; i += 1) {
        list.push({
            id: `fake-list-${i}`,
            owner: user[i % 10],
            title: titles[i % 8],
            avatar: avatars[i % 8],
            cover: parseInt((i / 4).toString(), 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
            status: ['active', 'exception', 'normal'][i % 3],
            percent: Math.ceil(Math.random() * 50) + 50,
            logo: avatars[i % 8],
            href: 'https://ant.design',
            updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
            createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
            subDescription: desc[i % 5],
            description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
            activeUser: Math.ceil(Math.random() * 100000) + 100000,
            newUser: Math.ceil(Math.random() * 1000) + 1000,
            star: Math.ceil(Math.random() * 100) + 100,
            like: Math.ceil(Math.random() * 100) + 100,
            message: Math.ceil(Math.random() * 10) + 10,
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            members: [
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
                    name: '曲丽丽',
                },
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
                    name: '王昭君',
                },
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
                    name: '董娜娜',
                },
            ],
        });
    }
    return list;
}
function getNotice() {
    return [
        {
            id: 'xxx1',
            title: titles[0],
            logo: avatars[0],
            description: '那是一种内在的东西， 他们到达不了，也无法触及的',
            updatedAt: new Date(),
            member: '科学搬砖组',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx2',
            title: titles[1],
            logo: avatars[1],
            description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
            updatedAt: new Date('2017-07-24'),
            member: '全组都是吴彦祖',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx3',
            title: titles[2],
            logo: avatars[2],
            description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
            updatedAt: new Date(),
            member: '中二少女团',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx4',
            title: titles[3],
            logo: avatars[3],
            description: '那时候我只会想自己想要什么，从不想自己拥有什么',
            updatedAt: new Date('2017-07-23'),
            member: '程序员日常',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx5',
            title: titles[4],
            logo: avatars[4],
            description: '凛冬将至',
            updatedAt: new Date('2017-07-23'),
            member: '高逼格设计天团',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx6',
            title: titles[5],
            logo: avatars[5],
            description: '生命就像一盒巧克力，结果往往出人意料',
            updatedAt: new Date('2017-07-23'),
            member: '骗你来学计算机',
            href: '',
            memberLink: '',
        },
    ];
}
function getActivities() {
    return [
        {
            id: 'trend-1',
            updatedAt: new Date(),
            user: {
                name: '林东东',
                avatar: avatars[0],
            },
            group: {
                name: '高逼格设计天团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-2',
            updatedAt: new Date(),
            user: {
                name: '付小小',
                avatar: avatars[1],
            },
            group: {
                name: '高逼格设计天团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-3',
            updatedAt: new Date(),
            user: {
                name: '曲丽丽',
                avatar: avatars[2],
            },
            group: {
                name: '中二少女团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-4',
            updatedAt: new Date(),
            user: {
                name: '周星星',
                avatar: avatars[3],
            },
            project: {
                name: '5 月日常迭代',
                link: 'http://github.com/',
            },
            template: '将 @{project} 更新至已发布状态',
        },
        {
            id: 'trend-5',
            updatedAt: new Date(),
            user: {
                name: '朱偏右',
                avatar: avatars[4],
            },
            project: {
                name: '工程效能',
                link: 'http://github.com/',
            },
            comment: {
                name: '留言',
                link: 'http://github.com/',
            },
            template: '在 @{project} 发布了 @{comment}',
        },
        {
            id: 'trend-6',
            updatedAt: new Date(),
            user: {
                name: '乐哥',
                avatar: avatars[5],
            },
            group: {
                name: '程序员日常',
                link: 'http://github.com/',
            },
            project: {
                name: '品牌迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
    ];
}
function productGetList(pageNum, pageSize) {
    const result = {
        "code": 10200,
        "message": "成功",
        "data": [
            {
                "message": desc[0],
                "modifyTime": "2021-01-27T15:55:24.000+00:00",
                "productId": 3,
                "percent": Math.ceil(Math.random() * 50) + 50,
                "codeAddress": avatars[0],
                "manager": {
                    "id": 20000,
                    "username": "lyy",
                    "realname": "林一",
                },
                "productName": "水环境监测"
            },
            {
                "message": desc[1],
                "codeAddress": avatars[0],
                "modifyTime": "2021-01-27T15:58:04.000+00:00",
                "productId": 5,
                "percent": Math.ceil(Math.random() * 50) + 50,
                "manager": {
                    "id": 20000,
                    "username": "lyy",
                    "realname": "林一",
                },
                "productName": "电量动态管控"
            }
        ]
    };
    return result;
}
function projectGetList() {
    const result = {
        "code": 10200,
        "message": "成功",
        "data": [
            {
                "createTime": "2021-01-27T15:55:24.000+00:00",
                "projectId": 3,
                "amount": 1500,
                "contractNumber": 12345678,
                "customerName": "东营市电力局",
                "progress": 2,
                "ops": [
                    {
                        'opTime': '2016-12-12 12:32',
                        "oper": {
                            "id": 20000,
                            "username": "lyy",
                            "realname": "曲丽丽",
                        },
                    },
                    {
                        'opTime': '2016-12-12 12:32',
                        "oper": {
                            "id": 20000,
                            "username": "lyy",
                            "realname": "林一",
                        },
                    },
                ],
                "manager": {
                    "id": 20000,
                    "username": "lyy",
                    "realname": "林一",
                },
                "projectName": "东营电力监控一期工程"
            },
            {
                "createTime": "2021-01-27T15:55:24.000+00:00",
                "projectId": 5,
                "amount": 1500,
                "contractNumber": 12345678,
                "customerName": "济南市水利局",
                "progress": 1,
                "ops": [
                    {
                        'opTime': '2016-12-12 12:32',
                        "oper": {
                            "id": 20000,
                            "username": "lyy",
                            "realname": "林一",
                        },
                    },
                ],
                "manager": {
                    "id": 20000,
                    "username": "lyy",
                    "realname": "林一",
                },
                "projectName": "济南黄河水位监测"
            },
        ]
    };
    return result;
}
function getProductDetails() {
    let result = {
        "code": 10200,
        "message": "成功",
        "data": {
            productName: '空气污染源检测',
            createTime: '20210204',
            meaasge: desc[3],
            productList: [
                {
                    prodVersion: '1.1.2(🐂)',
                    manager: '林一一',
                    modifyTime: '20210101',
                    description: 'assets/product-detail.md',
                    deprecated: false,
                    Assets: [
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.tar.gz',
                        },
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.zip',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (zip)',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (tar.gz)',
                        }
                    ]
                },
                {
                    prodVersion: '1.1.1(🐂)',
                    manager: '林一一',
                    modifyTime: '20210101',
                    description: 'assets/product-detail.md',
                    deprecated: false,
                    Assets: [
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.tar.gz',
                        },
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.zip',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (zip)',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (tar.gz)',
                        }
                    ]
                },
                {
                    prodVersion: '1.1.0(🐂)',
                    manager: '林一一',
                    modifyTime: '20210101',
                    description: 'assets/product-detail.md',
                    deprecated: false,
                    Assets: [
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.tar.gz',
                        },
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.zip',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (zip)',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (tar.gz)',
                        }
                    ]
                },
                {
                    prodVersion: '1.0.9(🐂)',
                    manager: '林一一',
                    modifyTime: '20210101',
                    description: 'assets/product-detail.md',
                    deprecated: false,
                    Assets: [
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.tar.gz',
                        },
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.zip',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (zip)',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (tar.gz)',
                        }
                    ]
                },
                {
                    prodVersion: '1.0.8(🐂)',
                    manager: '林一一',
                    modifyTime: '20210101',
                    description: 'assets/product-detail.md',
                    deprecated: false,
                    Assets: [
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.tar.gz',
                        },
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.zip',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (zip)',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (tar.gz)',
                        }
                    ]
                },
                {
                    prodVersion: '1.0.7(🐂)',
                    manager: '林一一',
                    modifyTime: '20210101',
                    description: 'assets/product-detail.md',
                    deprecated: false,
                    Assets: [
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.tar.gz',
                        },
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.zip',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (zip)',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (tar.gz)',
                        }
                    ]
                },
                {
                    prodVersion: '1.0.6(🐂)',
                    manager: '林一一',
                    modifyTime: '20210101',
                    description: 'assets/product-detail.md',
                    deprecated: false,
                    Assets: [
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.tar.gz',
                        },
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.zip',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (zip)',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (tar.gz)',
                        }
                    ]
                }, {
                    prodVersion: '1.0.5(🐂)',
                    manager: '林一一',
                    modifyTime: '20210101',
                    description: 'assets/product-detail.md',
                    deprecated: false,
                    Assets: [
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.tar.gz',
                        },
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.zip',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (zip)',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (tar.gz)',
                        }
                    ]
                },
                {
                    prodVersion: '1.0.4(🐂)',
                    manager: '林一一',
                    modifyTime: '20210101',
                    description: 'assets/product-detail.md',
                    deprecated: false,
                    Assets: [
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.tar.gz',
                        },
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.zip',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (zip)',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (tar.gz)',
                        }
                    ]
                },
                {
                    prodVersion: '1.0.3(🐂)',
                    manager: '林一一',
                    modifyTime: '20210101',
                    description: 'assets/product-detail.md',
                    deprecated: false,
                    Assets: [
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.tar.gz',
                        },
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.zip',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (zip)',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (tar.gz)',
                        }
                    ]
                },
                {
                    prodVersion: '1.0.2(🐂)',
                    manager: '林一一',
                    modifyTime: '20210101',
                    description: 'assets/product-detail.md',
                    deprecated: false,
                    Assets: [
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.tar.gz',
                        },
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.zip',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (zip)',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (tar.gz)',
                        }
                    ]
                },
                {
                    prodVersion: '1.0.1(🐂)',
                    manager: '林一一',
                    modifyTime: '20210101',
                    description: 'assets/product-detail.md',
                    deprecated: true,
                    Assets: [
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.tar.gz',
                        },
                        {
                            link: '',
                            assetsName: 'nacos-server-1.4.1.zip',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (zip)',
                        },
                        {
                            link: '',
                            assetsName: 'Source code (tar.gz)',
                        }
                    ]
                }
            ]
        }
    };
    return result;
}
function getProdsWithVersion() {
    const options = [
        {
            label: '水环境监测',
            children: [
                {
                    value: '1',
                    label: '1.0.1',
                    isLeaf: true
                },
                {
                    value: '2',
                    label: '1.0.2',
                    isLeaf: true
                }
            ]
        },
        {
            label: '电量动态管控',
            children: [
                {
                    value: '3',
                    label: '1.0.3',
                    isLeaf: true
                },
                {
                    value: '4',
                    label: '1.0.4',
                    isLeaf: true
                }
            ]
        }
    ];
    return {
        "code": 10200,
        "message": "成功",
        "data": options
    };
}
const APIS = {
    '/api/product/getList': (req) => productGetList(req.queryString.pageNum, req.queryString.pageSize),
    '/api/project/getList': (req) => projectGetList(),
    '/api/product/getProductDetails': (req) => getProductDetails(),
    '/api/project/getProdsWithVersion': (req) => getProdsWithVersion(),
    '/api/list': (req) => getFakeList(req.queryString.count),
    '/api/notice': () => getNotice(),
    '/api/activities': () => getActivities(),
    'POST /api/auth/refresh': { msg: 'ok', token: 'new-token-by-refresh' },
    '/api/401': () => {
        throw new _delon_mock__WEBPACK_IMPORTED_MODULE_0__["MockStatusError"](401);
    },
    '/api/403': () => {
        throw new _delon_mock__WEBPACK_IMPORTED_MODULE_0__["MockStatusError"](403);
    },
    '/api/404': () => {
        throw new _delon_mock__WEBPACK_IMPORTED_MODULE_0__["MockStatusError"](404);
    },
    '/api/500': () => {
        throw new _delon_mock__WEBPACK_IMPORTED_MODULE_0__["MockStatusError"](500);
    },
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_version__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/version */ "2aRN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







let AppComponent = class AppComponent {
    constructor(el, renderer, router, titleSrv, modalSrv) {
        this.router = router;
        this.titleSrv = titleSrv;
        this.modalSrv = modalSrv;
        renderer.setAttribute(el.nativeElement, 'ng-alain-version', _delon_theme__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full);
        renderer.setAttribute(el.nativeElement, 'ng-zorro-version', ng_zorro_antd_version__WEBPACK_IMPORTED_MODULE_5__["VERSION"].full);
    }
    ngOnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((evt) => evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe(() => {
            this.titleSrv.setTitle();
            this.modalSrv.closeAll();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["TitleService"] },
    { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: ` <router-outlet></router-outlet> `,
    })
], AppComponent);



/***/ }),

/***/ "T9tk":
/*!**********************************************************!*\
  !*** ./src/app/layout/basic/widgets/search.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSearchComponent", function() { return HeaderSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let HeaderSearchComponent = class HeaderSearchComponent {
    constructor(el, cdr) {
        this.el = el;
        this.cdr = cdr;
        this.q = '';
        this.qIpt = null;
        this.options = [];
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.loading = false;
        this.focus = false;
        this.searchToggled = false;
    }
    set toggleChange(value) {
        if (typeof value === 'undefined') {
            return;
        }
        this.searchToggled = value;
        this.focus = value;
        if (value) {
            setTimeout(() => this.qIpt.focus(), 300);
        }
    }
    ngAfterViewInit() {
        this.qIpt = this.el.nativeElement.querySelector('.ant-input');
        this.search$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])({
            complete: () => {
                this.loading = true;
            },
        }))
            .subscribe((value) => {
            this.options = value ? [value, value + value, value + value + value] : [];
            this.loading = false;
            this.cdr.detectChanges();
        });
    }
    qFocus() {
        this.focus = true;
    }
    qBlur() {
        this.focus = false;
        this.searchToggled = false;
    }
    search(ev) {
        this.search$.next(ev.target.value);
    }
    ngOnDestroy() {
        this.search$.complete();
        this.search$.unsubscribe();
    }
};
HeaderSearchComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
HeaderSearchComponent.propDecorators = {
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.alain-default__search-focus',] }],
    searchToggled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.alain-default__search-toggled',] }],
    toggleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
HeaderSearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-search',
        template: `
    <nz-input-group [nzPrefix]="iconTpl" [nzSuffix]="loadingTpl">
      <ng-template #iconTpl>
        <i nz-icon [nzType]="focus ? 'arrow-down' : 'search'"></i>
      </ng-template>
      <ng-template #loadingTpl>
        <i *ngIf="loading" nz-icon nzType="loading"></i>
      </ng-template>
      <input
        type="text"
        nz-input
        [(ngModel)]="q"
        [nzAutocomplete]="auto"
        (input)="search($event)"
        (focus)="qFocus()"
        (blur)="qBlur()"
        [attr.placeholder]="'menu.search.placeholder' | translate"
      />
    </nz-input-group>
    <nz-autocomplete nzBackfill #auto>
      <nz-auto-option *ngFor="let i of options" [nzValue]="i">{{ i }}</nz-auto-option>
    </nz-autocomplete>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    })
], HeaderSearchComponent);



/***/ }),

/***/ "TBCl":
/*!*************************************************!*\
  !*** ./src/app/core/startup/startup.service.ts ***!
  \*************************************************/
/*! exports provided: StartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return StartupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/acl */ "atJ9");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _style_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../style-icons */ "7pTB");
/* harmony import */ var _style_icons_auto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../style-icons-auto */ "zX6N");
/* harmony import */ var _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../i18n/i18n.service */ "jeCx");












/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
let StartupService = class StartupService {
    constructor(iconSrv, menuService, translate, i18n, settingService, aclService, titleService, httpClient) {
        this.menuService = menuService;
        this.translate = translate;
        this.i18n = i18n;
        this.settingService = settingService;
        this.aclService = aclService;
        this.titleService = titleService;
        this.httpClient = httpClient;
        iconSrv.addIcon(..._style_icons_auto__WEBPACK_IMPORTED_MODULE_10__["ICONS_AUTO"], ..._style_icons__WEBPACK_IMPORTED_MODULE_9__["ICONS"]);
    }
    load() {
        // only works with promises
        // https://github.com/angular/angular/issues/15088
        return new Promise((resolve) => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["zip"])(this.httpClient.get(`assets/tmp/i18n/${this.i18n.defaultLang}.json`), this.httpClient.get('assets/tmp/app-data.json'))
                .pipe(
            // 接收其他拦截器后产生的异常消息
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((res) => {
                console.warn(`StartupService.load: Network request failed`, res);
                resolve();
                return [];
            }))
                .subscribe(([langData, appData]) => {
                // setting language data
                this.translate.setTranslation(this.i18n.defaultLang, langData);
                this.translate.setDefaultLang(this.i18n.defaultLang);
                // application data
                const res = appData;
                // 应用信息：包括站点名、描述、年份
                this.settingService.setApp(res.app);
                // 用户信息：包括姓名、头像、邮箱地址
                this.settingService.setUser(res.user);
                // ACL：设置权限为全量
                this.aclService.setFull(true);
                // 初始化菜单
                this.menuService.add(res.menu);
                // 设置页面标题的后缀
                this.titleService.default = '';
                this.titleService.suffix = res.app.name;
            }, () => { }, () => {
                resolve();
            });
        });
    }
};
StartupService.ctorParameters = () => [
    { type: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["MenuService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_11__["I18NService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_delon_theme__WEBPACK_IMPORTED_MODULE_4__["ALAIN_I18N_TOKEN"],] }] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] },
    { type: _delon_acl__WEBPACK_IMPORTED_MODULE_3__["ACLService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["TitleService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
StartupService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], StartupService);



/***/ }),

/***/ "Tx//":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delon_abc_global_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/abc/global-footer */ "1M2P");
/* harmony import */ var _delon_abc_notice_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/abc/notice-icon */ "BY1P");
/* harmony import */ var _delon_theme_layout_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/theme/layout-default */ "8NUN");
/* harmony import */ var _delon_theme_setting_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/theme/setting-drawer */ "QNnA");
/* harmony import */ var _delon_theme_theme_btn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/theme/theme-btn */ "k56n");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ "Jioy");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./basic/basic.component */ "Bx0U");
/* harmony import */ var _basic_widgets_clear_storage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./basic/widgets/clear-storage.component */ "+VE9");
/* harmony import */ var _basic_widgets_fullscreen_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./basic/widgets/fullscreen.component */ "tZNp");
/* harmony import */ var _basic_widgets_i18n_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./basic/widgets/i18n.component */ "bcfo");
/* harmony import */ var _basic_widgets_icon_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./basic/widgets/icon.component */ "Yxbd");
/* harmony import */ var _basic_widgets_notify_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./basic/widgets/notify.component */ "beey");
/* harmony import */ var _basic_widgets_rtl_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./basic/widgets/rtl.component */ "Pps4");
/* harmony import */ var _basic_widgets_search_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./basic/widgets/search.component */ "T9tk");
/* harmony import */ var _basic_widgets_task_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./basic/widgets/task.component */ "hvfP");
/* harmony import */ var _basic_widgets_user_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./basic/widgets/user.component */ "B41o");
/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./blank/blank.component */ "fMZ8");
/* harmony import */ var _passport_passport_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./passport/passport.component */ "/XSn");
































const COMPONENTS = [_basic_basic_component__WEBPACK_IMPORTED_MODULE_21__["LayoutBasicComponent"], _blank_blank_component__WEBPACK_IMPORTED_MODULE_31__["LayoutBlankComponent"]];
const HEADERCOMPONENTS = [
    _basic_widgets_search_component__WEBPACK_IMPORTED_MODULE_28__["HeaderSearchComponent"],
    _basic_widgets_notify_component__WEBPACK_IMPORTED_MODULE_26__["HeaderNotifyComponent"],
    _basic_widgets_task_component__WEBPACK_IMPORTED_MODULE_29__["HeaderTaskComponent"],
    _basic_widgets_icon_component__WEBPACK_IMPORTED_MODULE_25__["HeaderIconComponent"],
    _basic_widgets_fullscreen_component__WEBPACK_IMPORTED_MODULE_23__["HeaderFullScreenComponent"],
    _basic_widgets_i18n_component__WEBPACK_IMPORTED_MODULE_24__["HeaderI18nComponent"],
    _basic_widgets_clear_storage_component__WEBPACK_IMPORTED_MODULE_22__["HeaderClearStorageComponent"],
    _basic_widgets_user_component__WEBPACK_IMPORTED_MODULE_30__["HeaderUserComponent"],
    _basic_widgets_rtl_component__WEBPACK_IMPORTED_MODULE_27__["HeaderRTLComponent"],
];
// passport

const PASSPORT = [_passport_passport_component__WEBPACK_IMPORTED_MODULE_32__["LayoutPassportComponent"]];
let LayoutModule = class LayoutModule {
};
LayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _delon_theme_theme_btn__WEBPACK_IMPORTED_MODULE_9__["ThemeBtnModule"],
            _delon_theme_setting_drawer__WEBPACK_IMPORTED_MODULE_8__["SettingDrawerModule"],
            _delon_theme_layout_default__WEBPACK_IMPORTED_MODULE_7__["LayoutDefaultModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
            _delon_abc_notice_icon__WEBPACK_IMPORTED_MODULE_6__["NoticeIconModule"],
            _delon_abc_global_footer__WEBPACK_IMPORTED_MODULE_5__["GlobalFooterModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__["NzDropDownModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__["NzInputModule"],
            ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_11__["NzAutocompleteModule"],
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__["NzGridModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__["NzFormModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_20__["NzSpinModule"],
            ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_13__["NzBadgeModule"],
            ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_12__["NzAvatarModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NzIconModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__["NzCardModule"],
        ],
        declarations: [...COMPONENTS, ...HEADERCOMPONENTS, ...PASSPORT],
        exports: [...COMPONENTS, ...PASSPORT],
    })
], LayoutModule);



/***/ }),

/***/ "Usq0":
/*!*************************************************!*\
  !*** ./src/app/routes/routes-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RouteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteRoutingModule", function() { return RouteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/auth */ "0bRG");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _layout_basic_basic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/basic/basic.component */ "Bx0U");
/* harmony import */ var _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/blank/blank.component */ "fMZ8");





// layout


const routes = [
    {
        path: '',
        component: _layout_basic_basic_component__WEBPACK_IMPORTED_MODULE_5__["LayoutBasicComponent"],
        canActivate: [_delon_auth__WEBPACK_IMPORTED_MODULE_3__["SimpleGuard"]],
        canActivateChild: [_delon_auth__WEBPACK_IMPORTED_MODULE_3__["SimpleGuard"]],
        data: {},
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~dashboard-dashboard-module~delon-delon-module~widgets-widgets-module"), __webpack_require__.e("default~dashboard-dashboard-module~widgets-widgets-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "eLR1")).then((m) => m.DashboardModule) },
            {
                path: 'widgets',
                loadChildren: () => Promise.all(/*! import() | widgets-widgets-module */[__webpack_require__.e("default~dashboard-dashboard-module~delon-delon-module~widgets-widgets-module"), __webpack_require__.e("default~dashboard-dashboard-module~widgets-widgets-module"), __webpack_require__.e("widgets-widgets-module")]).then(__webpack_require__.bind(null, /*! ./widgets/widgets.module */ "np7k")).then((m) => m.WidgetsModule),
            },
            { path: 'style', loadChildren: () => __webpack_require__.e(/*! import() | style-style-module */ "style-style-module").then(__webpack_require__.bind(null, /*! ./style/style.module */ "SNFh")).then((m) => m.StyleModule) },
            { path: 'delon', loadChildren: () => Promise.all(/*! import() | delon-delon-module */[__webpack_require__.e("default~dashboard-dashboard-module~delon-delon-module~widgets-widgets-module"), __webpack_require__.e("delon-delon-module")]).then(__webpack_require__.bind(null, /*! ./delon/delon.module */ "EjGq")).then((m) => m.DelonModule) },
            { path: 'extras', loadChildren: () => __webpack_require__.e(/*! import() | extras-extras-module */ "extras-extras-module").then(__webpack_require__.bind(null, /*! ./extras/extras.module */ "7sxs")).then((m) => m.ExtrasModule) },
            { path: 'pro', loadChildren: () => Promise.all(/*! import() | pro-pro-module */[__webpack_require__.e("default~config-config-module~pro-pro-module"), __webpack_require__.e("pro-pro-module")]).then(__webpack_require__.bind(null, /*! ./pro/pro.module */ "V9kS")).then((m) => m.ProModule) },
            { path: 'config', loadChildren: () => Promise.all(/*! import() | config-config-module */[__webpack_require__.e("default~config-config-module~pro-pro-module"), __webpack_require__.e("config-config-module")]).then(__webpack_require__.bind(null, /*! ./config/config.module */ "QEwL")).then((m) => m.ConfigModule) },
        ],
    },
    // Blak Layout 空白布局
    {
        path: 'data-v',
        component: _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_6__["LayoutBlankComponent"],
        children: [{ path: '', loadChildren: () => __webpack_require__.e(/*! import() | data-v-data-v-module */ "data-v-data-v-module").then(__webpack_require__.bind(null, /*! ./data-v/data-v.module */ "gkWZ")).then((m) => m.DataVModule) }],
    },
    // passport
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | passport-passport-module */ "passport-passport-module").then(__webpack_require__.bind(null, /*! ./passport/passport.module */ "lYtU")).then((m) => m.PassportModule) },
    { path: 'exception', loadChildren: () => __webpack_require__.e(/*! import() | exception-exception-module */ "exception-exception-module").then(__webpack_require__.bind(null, /*! ./exception/exception.module */ "NRFk")).then((m) => m.ExceptionModule) },
    { path: '**', redirectTo: 'exception/404' },
];
let RouteRoutingModule = class RouteRoutingModule {
};
RouteRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                useHash: _env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].useHash,
                // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
                // Pls refer to https://ng-alain.com/components/reuse-tab
                scrollPositionRestoration: 'top',
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RouteRoutingModule);



/***/ }),

/***/ "WctF":
/*!*************************************************!*\
  !*** ./src/app/core/net/default.interceptor.ts ***!
  \*************************************************/
/*! exports provided: DefaultInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultInterceptor", function() { return DefaultInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/auth */ "0bRG");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/notification */ "bNXi");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










const CODEMESSAGE = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};
/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
let DefaultInterceptor = class DefaultInterceptor {
    constructor(injector) {
        this.injector = injector;
        this.refreshTokenType = 'auth-refresh';
        this.refreshToking = false;
        this.refreshToken$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
        if (this.refreshTokenType === 'auth-refresh') {
            this.buildAuthRefresh();
        }
    }
    get notification() {
        return this.injector.get(ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_7__["NzNotificationService"]);
    }
    get tokenSrv() {
        return this.injector.get(_delon_auth__WEBPACK_IMPORTED_MODULE_4__["DA_SERVICE_TOKEN"]);
    }
    get http() {
        return this.injector.get(_delon_theme__WEBPACK_IMPORTED_MODULE_5__["_HttpClient"]);
    }
    goTo(url) {
        setTimeout(() => this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]).navigateByUrl(url));
    }
    checkStatus(ev) {
        if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
            return;
        }
        const errortext = CODEMESSAGE[ev.status] || ev.statusText;
        this.notification.error(`请求错误 ${ev.status}: ${ev.url}`, errortext);
    }
    /**
     * 刷新 Token 请求
     */
    refreshTokenRequest() {
        const model = this.tokenSrv.get();
        return this.http.post(`/api/auth/refresh`, null, null, { headers: { refresh_token: (model === null || model === void 0 ? void 0 : model.refresh_token) || '' } });
    }
    // #region 刷新Token方式一：使用 401 重新刷新 Token
    tryRefreshToken(ev, req, next) {
        // 1、若请求为刷新Token请求，表示来自刷新Token可以直接跳转登录页
        if ([`/api/auth/refresh`].some((url) => req.url.includes(url))) {
            this.toLogin();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(ev);
        }
        // 2、如果 `refreshToking` 为 `true` 表示已经在请求刷新 Token 中，后续所有请求转入等待状态，直至结果返回后再重新发起请求
        if (this.refreshToking) {
            return this.refreshToken$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((v) => !!v), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(() => next.handle(this.reAttachToken(req))));
        }
        // 3、尝试调用刷新 Token
        this.refreshToking = true;
        this.refreshToken$.next(null);
        return this.refreshTokenRequest().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])((res) => {
            // 通知后续请求继续执行
            this.refreshToking = false;
            this.refreshToken$.next(res);
            // 重新保存新 token
            this.tokenSrv.set(res);
            // 重新发起请求
            return next.handle(this.reAttachToken(req));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])((err) => {
            this.refreshToking = false;
            this.toLogin();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(err);
        }));
    }
    /**
     * 重新附加新 Token 信息
     *
     * > 由于已经发起的请求，不会再走一遍 `@delon/auth` 因此需要结合业务情况重新附加新的 Token
     */
    reAttachToken(req) {
        var _a;
        // 以下示例是以 NG-ALAIN 默认使用 `SimpleInterceptor`
        const token = (_a = this.tokenSrv.get()) === null || _a === void 0 ? void 0 : _a.token;
        return req.clone({
            setHeaders: {
                token: `Bearer ${token}`,
            },
        });
    }
    // #endregion
    // #region 刷新Token方式二：使用 `@delon/auth` 的 `refresh` 接口
    buildAuthRefresh() {
        this.tokenSrv.refresh
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(() => !this.refreshToking), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(() => {
            this.refreshToking = true;
            return this.refreshTokenRequest();
        }))
            .subscribe((res) => {
            // TODO: Mock expired value
            res.expired = +new Date() + 1000 * 60 * 5;
            this.refreshToking = false;
            this.tokenSrv.set(res);
        }, () => this.toLogin());
    }
    // #endregion
    toLogin() {
        this.notification.error(`未登录或登录已过期，请重新登录。`, ``);
        this.goTo('/passport/login');
    }
    handleData(ev, req, next) {
        this.checkStatus(ev);
        // 业务处理：一些通用操作
        switch (ev.status) {
            case 200:
                // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
                // 例如响应内容：
                //  错误内容：{ status: 1, msg: '非法参数' }
                //  正确内容：{ status: 0, response: {  } }
                // 则以下代码片断可直接适用
                // if (ev instanceof HttpResponse) {
                //   const body = ev.body;
                //   if (body && body.status !== 0) {
                //     this.injector.get(NzMessageService).error(body.msg);
                //     // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
                //     // this.http.get('/').subscribe() 并不会触发
                //     return throwError({});
                //   } else {
                //     // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
                //     return of(new HttpResponse(Object.assign(ev, { body: body.response })));
                //     // 或者依然保持完整的格式
                //     return of(ev);
                //   }
                // }
                break;
            case 401:
                if (this.refreshTokenType === 're-request') {
                    return this.tryRefreshToken(ev, req, next);
                }
                this.toLogin();
                break;
            case 403:
            case 404:
            case 500:
                this.goTo(`/exception/${ev.status}`);
                break;
            default:
                if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                    console.warn('未可知错误，大部分是由于后端不支持跨域CORS或无效配置引起，请参考 https://ng-alain.com/docs/server 解决跨域问题', ev);
                }
                break;
        }
        if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(ev);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(ev);
        }
    }
    intercept(req, next) {
        // 统一加上服务端前缀
        let url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://') && !url.startsWith('assets')) {
            url = _env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + url;
        }
        let username = localStorage.getItem("username");
        let token = localStorage.getItem("token");
        const newReq = req.clone({
            headers: req.headers.set('username', JSON.stringify(username)).set('token', JSON.stringify(token)),
            url,
        });
        return next.handle(newReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])((ev) => {
            // 允许统一对请求错误处理
            if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponseBase"]) {
                return this.handleData(ev, newReq, next);
            }
            // 若一切都正常，则后续操作
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(ev);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])((err) => this.handleData(err, newReq, next)));
    }
};
DefaultInterceptor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
];
DefaultInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], DefaultInterceptor);



/***/ }),

/***/ "Wf50":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
// https://angular.io/guide/styleguide#style-04-12
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "Xq4Q":
/*!***************************!*\
  !*** ./_mock/_profile.ts ***!
  \***************************/
/*! exports provided: PROFILES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILES", function() { return PROFILES; });
const basicGoods = [
    {
        id: '1234561',
        name: '矿泉水 550ml',
        barcode: '12421432143214321',
        price: '2.00',
        num: '1',
        amount: '2.00',
    },
    {
        id: '1234562',
        name: '凉茶 300ml',
        barcode: '12421432143214322',
        price: '3.00',
        num: '2',
        amount: '6.00',
    },
    {
        id: '1234563',
        name: '好吃的薯片',
        barcode: '12421432143214323',
        price: '7.00',
        num: '4',
        amount: '28.00',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
];
const basicProgress = [
    {
        key: '1',
        time: '2017-10-01 14:10',
        rate: '联系客户',
        status: 'processing',
        operator: '取货员 ID1234',
        cost: '5mins',
    },
    {
        key: '2',
        time: '2017-10-01 14:05',
        rate: '取货员出发',
        status: 'success',
        operator: '取货员 ID1234',
        cost: '1h',
    },
    {
        key: '3',
        time: '2017-10-01 13:05',
        rate: '取货员接单',
        status: 'success',
        operator: '取货员 ID1234',
        cost: '5mins',
    },
    {
        key: '4',
        time: '2017-10-01 13:00',
        rate: '申请审批通过',
        status: 'success',
        operator: '系统',
        cost: '1h',
    },
    {
        key: '5',
        time: '2017-10-01 12:00',
        rate: '发起退货申请',
        status: 'success',
        operator: '用户',
        cost: '5mins',
    },
];
const advancedOperation1 = [
    {
        key: 'op1',
        type: '订购关系生效',
        name: '曲丽丽',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
    {
        key: 'op2',
        type: '财务复审',
        name: '付小小',
        status: 'reject',
        updatedAt: '2017-10-03  19:23:12',
        memo: '不通过原因',
    },
    {
        key: 'op3',
        type: '部门初审',
        name: '周毛毛',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
    {
        key: 'op4',
        type: '提交订单',
        name: '林东东',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '很棒',
    },
    {
        key: 'op5',
        type: '创建订单',
        name: '汗牙牙',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
const advancedOperation2 = [
    {
        key: 'op1',
        type: '订购关系生效',
        name: '曲丽丽',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
const advancedOperation3 = [
    {
        key: 'op1',
        type: '创建订单',
        name: '汗牙牙',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
const PROFILES = {
    'GET /profile/progress': basicProgress,
    'GET /profile/goods': basicGoods,
    'GET /profile/advanced': {
        advancedOperation1,
        advancedOperation2,
        advancedOperation3,
    },
};


/***/ }),

/***/ "XtHz":
/*!**************************************!*\
  !*** ./src/app/shared/utils/yuan.ts ***!
  \**************************************/
/*! exports provided: yuan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yuan", function() { return yuan; });
/**
 * 转化成RMB元字符串
 * @param digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
 */
function yuan(value, digits = 2) {
    if (typeof value === 'number') {
        value = value.toFixed(digits);
    }
    return `&yen ${value}`;
}


/***/ }),

/***/ "Yxbd":
/*!********************************************************!*\
  !*** ./src/app/layout/basic/widgets/icon.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderIconComponent", function() { return HeaderIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let HeaderIconComponent = class HeaderIconComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    change() {
        setTimeout(() => {
            this.loading = false;
            this.cdr.detectChanges();
        }, 500);
    }
};
HeaderIconComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
HeaderIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-icon',
        template: `
    <div
      class="alain-default__nav-item"
      nz-dropdown
      [nzDropdownMenu]="iconMenu"
      nzTrigger="click"
      nzPlacement="bottomRight"
      (nzVisibleChange)="change()"
    >
      <i nz-icon nzType="appstore"></i>
    </div>
    <nz-dropdown-menu #iconMenu="nzDropdownMenu">
      <div nz-menu class="wd-xl animated jello">
        <nz-spin [nzSpinning]="loading" [nzTip]="'正在读取数据...'">
          <div nz-row [nzJustify]="'center'" [nzAlign]="'middle'" class="app-icons">
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="calendar" class="bg-error text-white"></i>
              <small>Calendar</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="file" class="bg-geekblue text-white"></i>
              <small>Files</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="cloud" class="bg-success text-white"></i>
              <small>Cloud</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="star" class="bg-magenta text-white"></i>
              <small>Star</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="team" class="bg-purple text-white"></i>
              <small>Team</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="scan" class="bg-warning text-white"></i>
              <small>QR</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="pay-circle" class="bg-cyan text-white"></i>
              <small>Pay</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="printer" class="bg-grey text-white"></i>
              <small>Print</small>
            </div>
          </div>
        </nz-spin>
      </div>
    </nz-dropdown-menu>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    })
], HeaderIconComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: I18nHttpLoaderFactory, StartupServiceFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nHttpLoaderFactory", function() { return I18nHttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupServiceFactory", function() { return StartupServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/notification */ "bNXi");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/zh */ "Kd/A");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/locale */ "Opvh");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core */ "ey9i");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @delon/auth */ "0bRG");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _global_config_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./global-config.module */ "EKSC");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layout/layout.module */ "Tx//");
/* harmony import */ var _routes_routes_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./routes/routes.module */ "wgao");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _shared_st_widget_st_widget_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/st-widget/st-widget.module */ "3QV4");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "kVq8");

// tslint:disable: no-duplicate-imports






// #region default language
// 参考：https://ng-alain.com/docs/i18n




const LANG = {
    abbr: 'zh',
    ng: _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_7___default.a,
    zorro: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["zh_CN"],
    date: date_fns_locale__WEBPACK_IMPORTED_MODULE_9__["zhCN"],
    delon: _delon_theme__WEBPACK_IMPORTED_MODULE_8__["zh_CN"],
};
// register angular

Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(LANG.ng, LANG.abbr);
const LANG_PROVIDES = [
    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: LANG.abbr },
    { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"], useValue: LANG.zorro },
    { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NZ_DATE_LOCALE"], useValue: LANG.date },
    { provide: _delon_theme__WEBPACK_IMPORTED_MODULE_8__["DELON_LOCALE"], useValue: LANG.delon },
];
// #endregion
// #region i18n services




// 加载i18n语言文件
function I18nHttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__["TranslateHttpLoader"](http, `assets/tmp/i18n/`, '.json');
}
const I18NSERVICE_MODULES = [
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
        loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
            useFactory: I18nHttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]],
        },
    }),
];
const I18NSERVICE_PROVIDES = [{ provide: _delon_theme__WEBPACK_IMPORTED_MODULE_8__["ALAIN_I18N_TOKEN"], useClass: _core__WEBPACK_IMPORTED_MODULE_12__["I18NService"], multi: false }];
// #endregion
// #region global third module

const GLOBAL_THIRD_MODULES = [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"]];
// #endregion
// #region JSON Schema form (using @delon/form)

const FORM_MODULES = [_shared__WEBPACK_IMPORTED_MODULE_16__["JsonSchemaModule"]];
// #endregion
// #region Http Interceptors



const INTERCEPTOR_PROVIDES = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _delon_auth__WEBPACK_IMPORTED_MODULE_17__["SimpleInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _core__WEBPACK_IMPORTED_MODULE_12__["DefaultInterceptor"], multi: true },
];
// #endregion
// #region Startup Service

function StartupServiceFactory(startupService) {
    return () => startupService.load();
}
const APPINIT_PROVIDES = [
    _core__WEBPACK_IMPORTED_MODULE_12__["StartupService"],
    {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
        useFactory: StartupServiceFactory,
        deps: [_core__WEBPACK_IMPORTED_MODULE_12__["StartupService"]],
        multi: true,
    },
];
// #endregion









const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_26__["FileMarkdownTwoTone"]];
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _global_config_module__WEBPACK_IMPORTED_MODULE_20__["GlobalConfigModule"].forRoot(),
            ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot(),
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_25__["NzIconModule"].forRoot(icons),
            _core_core_module__WEBPACK_IMPORTED_MODULE_19__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_21__["LayoutModule"],
            _routes_routes_module__WEBPACK_IMPORTED_MODULE_22__["RoutesModule"],
            _shared_st_widget_st_widget_module__WEBPACK_IMPORTED_MODULE_24__["STWidgetModule"],
            ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_5__["NzNotificationModule"],
            ...I18NSERVICE_MODULES,
            ...GLOBAL_THIRD_MODULES,
            ...FORM_MODULES,
        ],
        providers: [...LANG_PROVIDES, ...INTERCEPTOR_PROVIDES, ...I18NSERVICE_PROVIDES, ...APPINIT_PROVIDES],
        // providers: [...LANG_PROVIDES, ...I18NSERVICE_PROVIDES, ...APPINIT_PROVIDES],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "bcfo":
/*!********************************************************!*\
  !*** ./src/app/layout/basic/widgets/i18n.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderI18nComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderI18nComponent", function() { return HeaderI18nComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core */ "ey9i");






let HeaderI18nComponent = class HeaderI18nComponent {
    constructor(settings, i18n, doc) {
        this.settings = settings;
        this.i18n = i18n;
        this.doc = doc;
        /** Whether to display language text */
        this.showLangText = true;
    }
    get langs() {
        return this.i18n.getLangs();
    }
    get curLangCode() {
        return this.settings.layout.lang;
    }
    change(lang) {
        const spinEl = this.doc.createElement('div');
        spinEl.setAttribute('class', `page-loading ant-spin ant-spin-lg ant-spin-spinning`);
        spinEl.innerHTML = `<span class="ant-spin-dot ant-spin-dot-spin"><i></i><i></i><i></i><i></i></span>`;
        this.doc.body.appendChild(spinEl);
        this.i18n.use(lang);
        this.settings.setLayout('lang', lang);
        setTimeout(() => this.doc.location.reload());
    }
};
HeaderI18nComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
    { type: _core__WEBPACK_IMPORTED_MODULE_5__["I18NService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["ALAIN_I18N_TOKEN"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
HeaderI18nComponent.propDecorators = {
    showLangText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])()
], HeaderI18nComponent.prototype, "showLangText", void 0);
HeaderI18nComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'header-i18n',
        template: `
    <div *ngIf="showLangText" nz-dropdown [nzDropdownMenu]="langMenu" nzPlacement="bottomRight">
      <i nz-icon nzType="global"></i>
      {{ 'menu.lang' | translate }}
      <i nz-icon nzType="down"></i>
    </div>
    <i *ngIf="!showLangText" nz-dropdown [nzDropdownMenu]="langMenu" nzPlacement="bottomRight" nz-icon nzType="global"></i>
    <nz-dropdown-menu #langMenu="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item *ngFor="let item of langs" [nzSelected]="item.code === curLangCode" (click)="change(item.code)">
          <span role="img" [attr.aria-label]="item.text" class="pr-xs">{{ item.abbr }}</span>
          {{ item.text }}
        </li>
      </ul>
    </nz-dropdown-menu>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
    })
], HeaderI18nComponent);



/***/ }),

/***/ "beey":
/*!**********************************************************!*\
  !*** ./src/app/layout/basic/widgets/notify.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderNotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNotifyComponent", function() { return HeaderNotifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var date_fns_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/add */ "IjAw");
/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/formatDistanceToNow */ "7xvl");
/* harmony import */ var date_fns_parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/parse */ "LPPQ");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");







let HeaderNotifyComponent = class HeaderNotifyComponent {
    constructor(msg, nzI18n, cdr) {
        this.msg = msg;
        this.nzI18n = nzI18n;
        this.cdr = cdr;
        this.data = [
            {
                title: '通知',
                list: [],
                emptyText: '你已查看所有通知',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
                clearText: '清空通知',
            },
            {
                title: '消息',
                list: [],
                emptyText: '您已读完所有消息',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
                clearText: '清空消息',
            },
            {
                title: '待办',
                list: [],
                emptyText: '你已完成所有待办',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
                clearText: '清空待办',
            },
        ];
        this.count = 5;
        this.loading = false;
    }
    updateNoticeData(notices) {
        const data = this.data.slice();
        data.forEach((i) => (i.list = []));
        notices.forEach((item) => {
            const newItem = Object.assign({}, item);
            if (typeof newItem.datetime === 'string') {
                newItem.datetime = Object(date_fns_parse__WEBPACK_IMPORTED_MODULE_4__["default"])(newItem.datetime, 'yyyy-MM-dd', new Date());
            }
            if (newItem.datetime) {
                newItem.datetime = Object(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_3__["default"])(newItem.datetime, { locale: this.nzI18n.getDateLocale() });
            }
            if (newItem.extra && newItem.status) {
                newItem.color = {
                    todo: undefined,
                    processing: 'blue',
                    urgent: 'red',
                    doing: 'gold',
                }[newItem.status];
            }
            data.find((w) => w.title === newItem.type).list.push(newItem);
        });
        return data;
    }
    loadData() {
        if (this.loading) {
            return;
        }
        this.loading = true;
        setTimeout(() => {
            const now = new Date();
            this.data = this.updateNoticeData([
                {
                    id: '000000001',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '你收到了 14 份新周报',
                    datetime: Object(date_fns_add__WEBPACK_IMPORTED_MODULE_2__["default"])(now, { days: 10 }),
                    type: '通知',
                },
                {
                    id: '000000002',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
                    title: '你推荐的 曲妮妮 已通过第三轮面试',
                    datetime: Object(date_fns_add__WEBPACK_IMPORTED_MODULE_2__["default"])(now, { days: -3 }),
                    type: '通知',
                },
                {
                    id: '000000003',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
                    title: '这种模板可以区分多种通知类型',
                    datetime: Object(date_fns_add__WEBPACK_IMPORTED_MODULE_2__["default"])(now, { months: -3 }),
                    read: true,
                    type: '通知',
                },
                {
                    id: '000000004',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
                    title: '左侧图标用于区分不同的类型',
                    datetime: Object(date_fns_add__WEBPACK_IMPORTED_MODULE_2__["default"])(now, { years: -1 }),
                    type: '通知',
                },
                {
                    id: '000000005',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '内容不要超过两行字，超出时自动截断',
                    datetime: '2017-08-07',
                    type: '通知',
                },
                {
                    id: '000000006',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '曲丽丽 评论了你',
                    description: '描述信息描述信息描述信息',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000007',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '朱偏右 回复了你',
                    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000008',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '标题',
                    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000009',
                    title: '任务名称',
                    description: '任务需要在 2017-01-12 20:00 前启动',
                    extra: '未开始',
                    status: 'todo',
                    type: '待办',
                },
                {
                    id: '000000010',
                    title: '第三方紧急代码变更',
                    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                    extra: '马上到期',
                    status: 'urgent',
                    type: '待办',
                },
                {
                    id: '000000011',
                    title: '信息安全考试',
                    description: '指派竹尔于 2017-01-09 前完成更新并发布',
                    extra: '已耗时 8 天',
                    status: 'doing',
                    type: '待办',
                },
                {
                    id: '000000012',
                    title: 'ABCD 版本发布',
                    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                    extra: '进行中',
                    status: 'processing',
                    type: '待办',
                },
            ]);
            this.loading = false;
            this.cdr.detectChanges();
        }, 500);
    }
    clear(type) {
        this.msg.success(`清空了 ${type}`);
    }
    select(res) {
        this.msg.success(`点击了 ${res.title} 的 ${res.item.title}`);
    }
};
HeaderNotifyComponent.ctorParameters = () => [
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] },
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
HeaderNotifyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-notify',
        template: `
    <notice-icon
      [data]="data"
      [count]="count"
      [loading]="loading"
      btnClass="alain-default__nav-item"
      btnIconClass="alain-default__nav-item-icon"
      (select)="select($event)"
      (clear)="clear($event)"
      (popoverVisibleChange)="loadData()"
    ></notice-icon>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    })
], HeaderNotifyComponent);



/***/ }),

/***/ "ekAG":
/*!***********************************************!*\
  !*** ./src/app/shared/shared-zorro.module.ts ***!
  \***********************************************/
/*! exports provided: SHARED_ZORRO_MODULES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARED_ZORRO_MODULES", function() { return SHARED_ZORRO_MODULES; });
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "yNE/");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "F6ss");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/switch */ "EGpF");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ "ix5O");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
































const SHARED_ZORRO_MODULES = [
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_17__["NzMessageModule"],
    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownModule"],
    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__["NzGridModule"],
    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxModule"],
    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_30__["NzToolTipModule"],
    ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_20__["NzPopoverModule"],
    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_23__["NzSelectModule"],
    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"],
    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_2__["NzBadgeModule"],
    ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_0__["NzAlertModule"],
    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__["NzModalModule"],
    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__["NzTableModule"],
    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_9__["NzDrawerModule"],
    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_27__["NzTabsModule"],
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__["NzInputModule"],
    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_7__["NzDatePickerModule"],
    ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_29__["NzTimePickerModule"],
    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_28__["NzTagModule"],
    ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_15__["NzInputNumberModule"],
    ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["NzBreadCrumbModule"],
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__["NzListModule"],
    ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_25__["NzSwitchModule"],
    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_22__["NzRadioModule"],
    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormModule"],
    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__["NzAvatarModule"],
    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_24__["NzSpinModule"],
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"],
    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_8__["NzDividerModule"],
    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_21__["NzProgressModule"],
    ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_19__["NzPopconfirmModule"],
    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_31__["NzUploadModule"],
];


/***/ }),

/***/ "ey9i":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: I18NService, throwIfAlreadyLoaded, DefaultInterceptor, StartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n/i18n.service */ "jeCx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18NService", function() { return _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_0__["I18NService"]; });

/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-import-guard */ "Wf50");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return _module_import_guard__WEBPACK_IMPORTED_MODULE_1__["throwIfAlreadyLoaded"]; });

/* harmony import */ var _net_default_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./net/default.interceptor */ "WctF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultInterceptor", function() { return _net_default_interceptor__WEBPACK_IMPORTED_MODULE_2__["DefaultInterceptor"]; });

/* harmony import */ var _startup_startup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startup/startup.service */ "TBCl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return _startup_startup_service__WEBPACK_IMPORTED_MODULE_3__["StartupService"]; });







/***/ }),

/***/ "fMZ8":
/*!*************************************************!*\
  !*** ./src/app/layout/blank/blank.component.ts ***!
  \*************************************************/
/*! exports provided: LayoutBlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutBlankComponent", function() { return LayoutBlankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let LayoutBlankComponent = class LayoutBlankComponent {
};
LayoutBlankComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'layout-blank',
        template: `<router-outlet></router-outlet> `,
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.alain-blank]': 'true',
        },
    })
], LayoutBlankComponent);



/***/ }),

/***/ "hIEZ":
/*!************************!*\
  !*** ./_mock/index.ts ***!
  \************************/
/*! exports provided: PROFILES, RULES, APIS, CHARTS, POIS, USERS, GEOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_profile */ "Xq4Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PROFILES", function() { return _profile__WEBPACK_IMPORTED_MODULE_0__["PROFILES"]; });

/* harmony import */ var _rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_rule */ "6sqv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RULES", function() { return _rule__WEBPACK_IMPORTED_MODULE_1__["RULES"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_api */ "RHt1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["APIS"]; });

/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_chart */ "EC/B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHARTS", function() { return _chart__WEBPACK_IMPORTED_MODULE_3__["CHARTS"]; });

/* harmony import */ var _pois__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_pois */ "/Jab");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "POIS", function() { return _pois__WEBPACK_IMPORTED_MODULE_4__["POIS"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_user */ "DHVr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return _user__WEBPACK_IMPORTED_MODULE_5__["USERS"]; });

/* harmony import */ var _geo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_geo */ "Bk68");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GEOS", function() { return _geo__WEBPACK_IMPORTED_MODULE_6__["GEOS"]; });










/***/ }),

/***/ "hvfP":
/*!********************************************************!*\
  !*** ./src/app/layout/basic/widgets/task.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTaskComponent", function() { return HeaderTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let HeaderTaskComponent = class HeaderTaskComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    change() {
        setTimeout(() => {
            this.loading = false;
            this.cdr.detectChanges();
        }, 500);
    }
};
HeaderTaskComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
HeaderTaskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-task',
        template: `
    <div
      class="alain-default__nav-item"
      nz-dropdown
      [nzDropdownMenu]="taskMenu"
      nzTrigger="click"
      nzPlacement="bottomRight"
      (nzVisibleChange)="change()"
    >
      <nz-badge [nzDot]="true">
        <i nz-icon nzType="bell" class="alain-default__nav-item-icon"></i>
      </nz-badge>
    </div>
    <nz-dropdown-menu #taskMenu="nzDropdownMenu">
      <div nz-menu class="wd-lg">
        <div *ngIf="loading" class="mx-lg p-lg"><nz-spin></nz-spin></div>
        <nz-card *ngIf="!loading" nzTitle="Notifications" nzBordered="false" class="ant-card__body-nopadding">
          <ng-template #extra><i nz-icon nzType="plus"></i></ng-template>
          <div nz-row [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm pr-md point bg-grey-lighter-h">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/1.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>cipchk</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div nz-row [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm pr-md point bg-grey-lighter-h">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/2.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>はなさき</strong>
              <p class="mb0">ハルカソラトキヘダツヒカリ</p>
            </div>
          </div>
          <div nz-row [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm pr-md point bg-grey-lighter-h">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/3.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>苏先生</strong>
              <p class="mb0">请告诉我，我应该说点什么好？</p>
            </div>
          </div>
          <div nz-row [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm pr-md point bg-grey-lighter-h">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/4.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>Kent</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div nz-row [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm pr-md point bg-grey-lighter-h">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/5.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>Jefferson</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div nz-row>
            <div nz-col [nzSpan]="24" class="pt-md border-top-1 text-center text-grey point">See All</div>
          </div>
        </nz-card>
      </div>
    </nz-dropdown-menu>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    })
], HeaderTaskComponent);



/***/ }),

/***/ "jeCx":
/*!*******************************************!*\
  !*** ./src/app/core/i18n/i18n.service.ts ***!
  \*******************************************/
/*! exports provided: I18NService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18NService", function() { return I18NService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/zh */ "Kd/A");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/zh-Hant */ "u6yn");
/* harmony import */ var _angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/locale */ "Opvh");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");

// 请参考：https://ng-alain.com/docs/i18n












const DEFAULT = 'zh-CN';
const LANGS = {
    'zh-CN': {
        text: '简体中文',
        ng: _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default.a,
        zorro: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["zh_CN"],
        date: date_fns_locale__WEBPACK_IMPORTED_MODULE_9__["zhCN"],
        delon: _delon_theme__WEBPACK_IMPORTED_MODULE_7__["zh_CN"],
        abbr: '🇨🇳',
    },
    'zh-TW': {
        text: '繁体中文',
        ng: _angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_5___default.a,
        zorro: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["zh_TW"],
        date: date_fns_locale__WEBPACK_IMPORTED_MODULE_9__["zhTW"],
        delon: _delon_theme__WEBPACK_IMPORTED_MODULE_7__["zh_TW"],
        abbr: '🇭🇰',
    },
    'en-US': {
        text: 'English',
        ng: _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_3___default.a,
        zorro: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["en_US"],
        date: date_fns_locale__WEBPACK_IMPORTED_MODULE_9__["enUS"],
        delon: _delon_theme__WEBPACK_IMPORTED_MODULE_7__["en_US"],
        abbr: '🇬🇧',
    },
};
let I18NService = class I18NService {
    constructor(settings, nzI18nService, delonLocaleService, translate, platform) {
        this.settings = settings;
        this.nzI18nService = nzI18nService;
        this.delonLocaleService = delonLocaleService;
        this.translate = translate;
        this.platform = platform;
        this._default = DEFAULT;
        this.change$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"](null);
        this._langs = Object.keys(LANGS).map((code) => {
            const item = LANGS[code];
            return { code, text: item.text, abbr: item.abbr };
        });
        // `@ngx-translate/core` 预先知道支持哪些语言
        const lans = this._langs.map((item) => item.code);
        translate.addLangs(lans);
        const defaultLan = this.getDefaultLang();
        if (lans.includes(defaultLan)) {
            this._default = defaultLan;
        }
        this.updateLangData(this._default);
    }
    getDefaultLang() {
        if (!this.platform.isBrowser) {
            return DEFAULT;
        }
        if (this.settings.layout.lang) {
            return this.settings.layout.lang;
        }
        return (navigator.languages ? navigator.languages[0] : null) || navigator.language;
    }
    updateLangData(lang) {
        const item = LANGS[lang];
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(item.ng);
        this.nzI18nService.setLocale(item.zorro);
        this.nzI18nService.setDateLocale(item.date);
        this.delonLocaleService.setLocale(item.delon);
    }
    get change() {
        return this.change$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])((w) => w != null));
    }
    use(lang) {
        lang = lang || this.translate.getDefaultLang();
        if (this.currentLang === lang) {
            return;
        }
        this.updateLangData(lang);
        this.translate.use(lang).subscribe(() => this.change$.next(lang));
    }
    /** 获取语言列表 */
    getLangs() {
        return this._langs;
    }
    /** 翻译 */
    fanyi(key, interpolateParams) {
        return this.translate.instant(key, interpolateParams);
    }
    /** 默认语言 */
    get defaultLang() {
        return this._default;
    }
    /** 当前语言 */
    get currentLang() {
        return this.translate.currentLang || this.translate.getDefaultLang() || this._default;
    }
};
I18NService.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_7__["SettingsService"] },
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NzI18nService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_7__["DelonLocaleService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }
];
I18NService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])({ providedIn: 'root' })
], I18NService);



/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-import-guard */ "Wf50");



let CoreModule = class CoreModule {
    constructor(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [],
    })
], CoreModule);



/***/ }),

/***/ "tZNp":
/*!**************************************************************!*\
  !*** ./src/app/layout/basic/widgets/fullscreen.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFullScreenComponent", function() { return HeaderFullScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "k7+O");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



let HeaderFullScreenComponent = class HeaderFullScreenComponent {
    constructor() {
        this.status = false;
    }
    get sf() {
        return screenfull__WEBPACK_IMPORTED_MODULE_2__;
    }
    _resize() {
        this.status = this.sf.isFullscreen;
    }
    _click() {
        if (this.sf.isEnabled) {
            this.sf.toggle();
        }
    }
};
HeaderFullScreenComponent.propDecorators = {
    _resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:resize',] }],
    _click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] }]
};
HeaderFullScreenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-fullscreen',
        template: `
    <i nz-icon [nzType]="status ? 'fullscreen-exit' : 'fullscreen'"></i>
    {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}
  `,
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.d-block]': 'true',
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    })
], HeaderFullScreenComponent);



/***/ }),

/***/ "wgao":
/*!*****************************************!*\
  !*** ./src/app/routes/routes.module.ts ***!
  \*****************************************/
/*! exports provided: RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return RoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _routes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes-routing.module */ "Usq0");




const COMPONENTS = [];
let RoutesModule = class RoutesModule {
};
RoutesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _routes_routing_module__WEBPACK_IMPORTED_MODULE_3__["RouteRoutingModule"]],
        declarations: [...COMPONENTS],
    })
], RoutesModule);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "AytR");





Object(_delon_theme__WEBPACK_IMPORTED_MODULE_2__["preloaderFinished"])();
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"], {
    defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
    preserveWhitespaces: false,
})
    .then((res) => {
    const win = window;
    if (win && win.appBootstrap) {
        win.appBootstrap();
    }
    return res;
})
    .catch((err) => console.error(err));


/***/ }),

/***/ "zX6N":
/*!*********************************!*\
  !*** ./src/style-icons-auto.ts ***!
  \*********************************/
/*! exports provided: ICONS_AUTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS_AUTO", function() { return ICONS_AUTO; });
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "kVq8");
/*
 * Automatically generated by 'ng g ng-alain:plugin icon'
 * @see https://ng-alain.com/cli/plugin#icon
 */

const ICONS_AUTO = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["AlipayCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ApiOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["AppstoreOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ArrowDownOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["BookOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["BorderLeftOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["BorderRightOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CloudOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CopyrightOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["CustomerServiceOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DashboardOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DatabaseOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DingdingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DislikeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["DownloadOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ForkOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FrownOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FullscreenExitOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["FullscreenOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["GithubOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["GlobalOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["HddOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LaptopOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LikeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LockOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["LogoutOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MailOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MenuFoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MenuUnfoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["MessageOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PayCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PieChartOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["PrinterOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["RocketOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ScanOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["SettingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ShareAltOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["SoundOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["StarOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TaobaoCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TaobaoOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TeamOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["ToolOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["TrophyOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["UsbOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["UserOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__["WeiboCircleOutline"],
];


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
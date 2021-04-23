(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extras-extras-module"],{

/***/ "+3eV":
/*!**************************************************************!*\
  !*** ./src/app/routes/extras/settings/settings.component.ts ***!
  \**************************************************************/
/*! exports provided: ExtrasSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasSettingsComponent", function() { return ExtrasSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.component.html */ "TIXh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");





let ExtrasSettingsComponent = class ExtrasSettingsComponent {
    constructor(fb, msg) {
        this.msg = msg;
        this.active = 1;
        this.pwd = {
            old_password: '',
            new_password: '',
            confirm_new_password: '',
        };
        // Email
        this.primary_email = 'cipchk@qq.com';
        this.profileForm = fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(`^[-_a-zA-Z0-9]{4,20}$`)])],
            email: '',
            bio: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(160)],
            url: '',
            company: '',
            location: '',
        });
    }
    get name() {
        return this.profileForm.get('name');
    }
    profileSave(value) {
        console.log('profile value', value);
    }
    pwdSave() {
        if (!this.pwd.old_password) {
            this.msg.error('invalid old password');
            return;
        }
        if (!this.pwd.new_password) {
            this.msg.error('invalid new password');
            return;
        }
        if (!this.pwd.confirm_new_password) {
            this.msg.error('invalid confirm new password');
            return;
        }
        console.log('pwd value', this.pwd);
    }
    ngOnInit() {
        this.profileForm.patchValue({
            name: 'cipchk',
            email: 'cipchk@qq.com',
        });
    }
};
ExtrasSettingsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
];
ExtrasSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-extras-settings',
        template: _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ExtrasSettingsComponent);



/***/ }),

/***/ "/boK":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/extras/helpcenter/helpcenter.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center pb-lg\">\n  <h1 class=\"py-md mt-sm\">帮助中心</h1>\n  <div>帮助用户快速找到问题答案</div>\n</div>\n<div class=\"text-center\">\n  <nz-input-group nzCompact nzSize=\"large\">\n    <input [(ngModel)]=\"q\" placeholder=\"请用关键词进行搜索，例如“服务器密码重置”\" style=\"width: 50%;\" nz-input />\n    <nz-select [(ngModel)]=\"type\" nzSize=\"large\" style=\"width:20%;\">\n      <nz-option [nzLabel]=\"'不限'\" [nzValue]=\"''\"></nz-option>\n      <nz-option [nzLabel]=\"'弹性计算'\" [nzValue]=\"'弹性计算'\"></nz-option>\n      <nz-option [nzLabel]=\"'存储与CDN'\" [nzValue]=\"'存储与CDN'\"></nz-option>\n      <nz-option [nzLabel]=\"'会员服务'\" [nzValue]=\"'会员服务'\"></nz-option>\n      <nz-option [nzLabel]=\"'数据库'\" [nzValue]=\"'数据库'\"></nz-option>\n    </nz-select>\n    <button nz-button [nzType]=\"'primary'\" (click)=\"search()\" nzSize=\"large\">\n      <span>搜索</span>\n    </button>\n  </nz-input-group>\n  <div class=\"py-sm text-grey-dark\">\n    搜索热词：\n    <a class=\"ml-sm\" (click)=\"quick('远程连接服务器')\">远程连接服务器</a>\n    <a class=\"ml-sm\" (click)=\"quick('挂载数据盘')\">挂载数据盘</a>\n    <a class=\"ml-sm\" (click)=\"quick('域名解析')\">域名解析</a>\n    <a class=\"ml-sm\" (click)=\"quick('域名实名认证')\">域名实名认证</a>\n    <a class=\"ml-sm\" (click)=\"quick('账号实名认证')\">账号实名认证</a>\n    <a class=\"ml-sm\" (click)=\"quick('忘记密码')\">忘记密码</a>\n  </div>\n</div>\n<nz-row [nzGutter]=\"16\" class=\"py-lg\">\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\n    <nz-card>\n      <a (click)=\"msg.info('弹性计算')\" class=\"d-block text-center text-primary\">\n        <i nz-icon nzType=\"rocket\" class=\"display-1 mb-md\"></i>\n        <h2 class=\"mb0\">弹性计算</h2>\n      </a>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\n    <nz-card>\n      <a (click)=\"msg.info('存储与CDN')\" class=\"d-block text-center text-red\">\n        <i nz-icon nzType=\"hdd\" class=\"display-1 mb-md\"></i>\n        <h2 class=\"mb0\">存储与CDN</h2>\n      </a>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\n    <nz-card>\n      <a (click)=\"msg.info('会员服务')\" class=\"d-block text-center text-orange\">\n        <i nz-icon nzType=\"user\" class=\"display-1 mb-md\"></i>\n        <h2 class=\"mb0\">会员服务</h2>\n      </a>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\n    <nz-card>\n      <a (click)=\"msg.info('数据库')\" class=\"d-block text-center text-purple\">\n        <i nz-icon nzType=\"database\" class=\"display-1 mb-md\"></i>\n        <h2 class=\"mb0\">数据库</h2>\n      </a>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\n    <nz-card>\n      <a (click)=\"msg.info('域名与网站')\" class=\"d-block text-center text-cyan\">\n        <i nz-icon nzType=\"api\" class=\"display-1 mb-md\"></i>\n        <h2 class=\"mb0\">域名与网站</h2>\n      </a>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\n    <nz-card>\n      <a (click)=\"msg.info('网络')\" class=\"d-block text-center text-teal\">\n        <i nz-icon nzType=\"global\" class=\"display-1 mb-md\"></i>\n        <h2 class=\"mb0\">网络</h2>\n      </a>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\n    <nz-card>\n      <a (click)=\"msg.info('应用服务')\" class=\"d-block text-center text-pink\">\n        <i nz-icon nzType=\"appstore\" class=\"display-1 mb-md\"></i>\n        <h2 class=\"mb0\">应用服务</h2>\n      </a>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\n    <nz-card>\n      <a (click)=\"msg.info('开发者工具')\" class=\"d-block text-center text-success\">\n        <i nz-icon nzType=\"tool\" class=\"display-1 mb-md\"></i>\n        <h2 class=\"mb0\">开发者工具</h2>\n      </a>\n    </nz-card>\n  </nz-col>\n</nz-row>\n");

/***/ }),

/***/ "/uYu":
/*!********************************************************!*\
  !*** ./src/app/routes/extras/extras-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ExtrasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasRoutingModule", function() { return ExtrasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _helpcenter_helpcenter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpcenter/helpcenter.component */ "YWKM");
/* harmony import */ var _poi_poi_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./poi/poi.component */ "h8l5");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ "+3eV");






const routes = [
    { path: 'helpcenter', component: _helpcenter_helpcenter_component__WEBPACK_IMPORTED_MODULE_3__["HelpCenterComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["ExtrasSettingsComponent"] },
    { path: 'poi', component: _poi_poi_component__WEBPACK_IMPORTED_MODULE_4__["ExtrasPoiComponent"] },
];
let ExtrasRoutingModule = class ExtrasRoutingModule {
};
ExtrasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExtrasRoutingModule);



/***/ }),

/***/ "7sxs":
/*!************************************************!*\
  !*** ./src/app/routes/extras/extras.module.ts ***!
  \************************************************/
/*! exports provided: ExtrasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasModule", function() { return ExtrasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _extras_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extras-routing.module */ "/uYu");
/* harmony import */ var _helpcenter_helpcenter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpcenter/helpcenter.component */ "YWKM");
/* harmony import */ var _poi_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./poi/edit/edit.component */ "8eWm");
/* harmony import */ var _poi_poi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./poi/poi.component */ "h8l5");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/settings.component */ "+3eV");








const COMPONENTS = [_helpcenter_helpcenter_component__WEBPACK_IMPORTED_MODULE_4__["HelpCenterComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["ExtrasSettingsComponent"], _poi_poi_component__WEBPACK_IMPORTED_MODULE_6__["ExtrasPoiComponent"], _poi_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["ExtrasPoiEditComponent"]];
let ExtrasModule = class ExtrasModule {
};
ExtrasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _extras_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExtrasRoutingModule"]],
        declarations: [...COMPONENTS],
    })
], ExtrasModule);



/***/ }),

/***/ "8eWm":
/*!**********************************************************!*\
  !*** ./src/app/routes/extras/poi/edit/edit.component.ts ***!
  \**********************************************************/
/*! exports provided: ExtrasPoiEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasPoiEditComponent", function() { return ExtrasPoiEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit.component.html */ "OoTi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");






let ExtrasPoiEditComponent = class ExtrasPoiEditComponent {
    constructor(modal, msgSrv, http) {
        this.modal = modal;
        this.msgSrv = msgSrv;
        this.http = http;
        this.cat = ['美食', '美食,粤菜', '美食,粤菜,湛江菜'];
    }
    ngOnInit() {
        if (this.i.id > 0) {
            this.http.get('/pois').subscribe((res) => (this.i = res.list[0]));
        }
    }
    save() {
        this.http.get('/pois').subscribe(() => {
            this.msgSrv.success('保存成功，只是模拟，实际未变更');
            this.modal.destroy(true);
        });
    }
    close() {
        this.modal.destroy();
    }
};
ExtrasPoiEditComponent.ctorParameters = () => [
    { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalRef"] },
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"] }
];
ExtrasPoiEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-extras-poi-edit',
        template: _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ExtrasPoiEditComponent);



/***/ }),

/***/ "OoTi":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/extras/poi/edit/edit.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <div class=\"modal-title\">{{ i.id > 0 ? '编辑' : '添加' }}-门店（基于HTML模板表单写法）</div>\n</div>\n<form #f=\"ngForm\" (ngSubmit)=\"save()\" nz-form>\n  <nz-form-item class=\"mb-sm\">\n    <nz-form-label nzSpan=\"4\">所属分销商</nz-form-label>\n    <nz-form-control nzSpan=\"8\">\n      {{ i.user_id }}\n      <a (click)=\"msgSrv.info('find')\">查找用户</a>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item class=\"mb-sm\">\n    <nz-form-label nzSpan=\"4\">门店名称</nz-form-label>\n    <nz-form-control nzSpan=\"8\" nzExtra=\"如：国美、麦当劳，不应包含地区、地址、分店名等信息，错误示例：北京国美\">\n      <input nz-input [(ngModel)]=\"i.name\" name=\"name\" maxlength=\"30\" required />\n    </nz-form-control>\n    <nz-form-label nzSpan=\"4\">分店名称</nz-form-label>\n    <nz-form-control nzSpan=\"8\" nzExtra=\"不应包含地区信息，不应与门店名有重复，错误示例：北京王府井店\">\n      <input nz-input [(ngModel)]=\"i.branch_name\" name=\"branch_name\" maxlength=\"20\" required />\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item class=\"mb-sm\">\n    <nz-form-label nzSpan=\"4\">所在地</nz-form-label>\n    <nz-form-control nzSpan=\"8\">\n      <input nz-input [(ngModel)]=\"i.geo\" name=\"geo\" maxlength=\"50\" required />\n    </nz-form-control>\n    <nz-form-label nzSpan=\"4\">街道地址</nz-form-label>\n    <nz-form-control nzSpan=\"8\">\n      <input nz-input [(ngModel)]=\"i.address\" name=\"address\" maxlength=\"50\" required />\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item class=\"mb-sm\">\n    <nz-form-label nzSpan=\"4\">纬度</nz-form-label>\n    <nz-form-control nzSpan=\"8\">\n      <input nz-input [(ngModel)]=\"i.lat\" name=\"lat\" required />\n    </nz-form-control>\n    <nz-form-label nzSpan=\"4\">经度</nz-form-label>\n    <nz-form-control nzSpan=\"8\">\n      <input nz-input [(ngModel)]=\"i.lng\" name=\"lng\" required />\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item class=\"mb-sm\">\n    <nz-form-label nzSpan=\"4\">电话</nz-form-label>\n    <nz-form-control nzSpan=\"8\">\n      <input nz-input [(ngModel)]=\"i.tel\" name=\"tel\" maxlength=\"30\" required />\n    </nz-form-control>\n    <nz-form-label nzSpan=\"4\">门店类型</nz-form-label>\n    <nz-form-control nzSpan=\"8\">\n      <nz-select [(ngModel)]=\"i.categories\" name=\"categories\" required [nzAllowClear]=\"false\">\n        <nz-option *ngFor=\"let i of cat\" [nzLabel]=\"i\" [nzValue]=\"i\"> </nz-option>\n      </nz-select>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item class=\"mb-sm\">\n    <nz-form-label nzSpan=\"4\">推荐品</nz-form-label>\n    <nz-form-control nzSpan=\"8\">\n      <input nz-input [(ngModel)]=\"i.recommend\" name=\"recommend\" maxlength=\"200\" placeholder=\"200字以内\" />\n    </nz-form-control>\n    <nz-form-label nzSpan=\"4\">特色服务</nz-form-label>\n    <nz-form-control nzSpan=\"8\">\n      <input nz-input [(ngModel)]=\"i.special\" name=\"special\" maxlength=\"50\" placeholder=\"50字以内\" />\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item class=\"mb-sm\">\n    <nz-form-label nzSpan=\"4\">商户简介</nz-form-label>\n    <nz-form-control nzSpan=\"8\">\n      <input nz-input [(ngModel)]=\"i.introduction\" name=\"introduction\" maxlength=\"300\" placeholder=\"300字以内\" />\n    </nz-form-control>\n    <nz-form-label nzSpan=\"4\">营业时间</nz-form-label>\n    <nz-form-control nzSpan=\"8\">\n      <input nz-input [(ngModel)]=\"i.open_time\" name=\"open_time\" maxlength=\"30\" placeholder=\"30字以内\" />\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item class=\"mb-sm\">\n    <nz-form-label nzSpan=\"4\">人均价格</nz-form-label>\n    <nz-form-control nzSpan=\"8\">\n      <nz-input-number [(ngModel)]=\"i.avg_price\" name=\"avg_price\" [nzMin]=\"0\" [nzStep]=\"10\"></nz-input-number>\n    </nz-form-control>\n  </nz-form-item>\n  <div class=\"modal-footer\">\n    <button nz-button type=\"button\" (click)=\"close()\">关闭</button>\n    <button nz-button [disabled]=\"!f.form.valid || !f.form.dirty\" [nzLoading]=\"http.loading\" [nzType]=\"'primary'\">\n      保存\n    </button>\n  </div>\n</form>\n");

/***/ }),

/***/ "QHUP":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/extras/poi/poi.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\n  <h1>门店</h1>\n  <button nz-button (click)=\"add()\" [nzType]=\"'primary'\">添加</button>\n</div>\n<form nz-form nzLayout=\"inline\" se-container>\n  <se>\n    <nz-select [(ngModel)]=\"s.s\" name=\"s\" [nzAllowClear]=\"false\">\n      <nz-option nzValue=\"\" nzLabel=\"状态不限\"></nz-option>\n      <nz-option nzValue=\"1\" nzLabel=\"正常\"></nz-option>\n      <nz-option nzValue=\"2\" nzLabel=\"已取消\"></nz-option>\n      <nz-option nzValue=\"3\" nzLabel=\"已删除\"></nz-option>\n      <nz-option nzValue=\"10\" nzLabel=\"待提交\"></nz-option>\n      <nz-option nzValue=\"11\" nzLabel=\"待审核\"></nz-option>\n    </nz-select>\n  </se>\n  <se>\n    <input nz-input [(ngModel)]=\"s.user_id\" name=\"user_id\" placeholder=\"用户编号\" />\n  </se>\n  <se>\n    <input nz-input [(ngModel)]=\"s.q\" name=\"q\" placeholder=\"门店、分店名称\" />\n  </se>\n  <se>\n    <button nz-button (click)=\"st.reset(s)\" nzType=\"primary\">搜索</button>\n  </se>\n</form>\n<st #st class=\"bg-white\" [columns]=\"columns\" [data]=\"url\" [req]=\"{ params: s }\"></st>\n");

/***/ }),

/***/ "TIXh":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/extras/settings/settings.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-row [nzGutter]=\"24\" class=\"py-lg\">\n  <nz-col [nzSpan]=\"6\">\n    <nz-card nzTitle=\"Personal settings\" class=\"ant-card__body-nopadding\">\n      <a (click)=\"active = 1\" class=\"d-block py-sm px-md\" [ngClass]=\"{ 'bg-primary-light text-white': active === 1 }\">Profile</a>\n      <a (click)=\"active = 2\" class=\"d-block py-sm px-md\" [ngClass]=\"{ 'bg-primary-light text-white': active === 2 }\">Account</a>\n      <a (click)=\"active = 3\" class=\"d-block py-sm px-md\" [ngClass]=\"{ 'bg-primary-light text-white': active === 3 }\">Emails</a>\n      <a (click)=\"active = 4\" class=\"d-block py-sm px-md\" [ngClass]=\"{ 'bg-primary-light text-white': active === 4 }\">Notifications</a>\n    </nz-card>\n    <nz-card nzTitle=\"Developer settings\" class=\"ant-card__body-nopadding\">\n      <a (click)=\"active = 5\" class=\"d-block py-sm px-md\" [ngClass]=\"{ 'bg-primary-light text-white': active === 5 }\">OAuth applications</a>\n      <a (click)=\"active = 6\" class=\"d-block py-sm px-md\" [ngClass]=\"{ 'bg-primary-light text-white': active === 6 }\"\n        >Personal access tokens</a\n      >\n    </nz-card>\n  </nz-col>\n  <nz-col [nzSpan]=\"18\">\n    <nz-card nzTitle=\"Public profile\" *ngIf=\"active === 1\">\n      <nz-row [nzGutter]=\"64\">\n        <nz-col [nzSpan]=\"16\">\n          <form nz-form [formGroup]=\"profileForm\" (ngSubmit)=\"profileSave(profileForm.value)\" [nzLayout]=\"'vertical'\">\n            <nz-form-item>\n              <nz-form-label nzFor=\"name\" nzRequired>name</nz-form-label>\n              <nz-form-control nzErrorTip=\"required, must match pattern [-_a-zA-Z0-9]\">\n                <input nz-input formControlName=\"name\" id=\"name\" />\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label nzFor=\"email\">email</nz-form-label>\n              <nz-form-control [nzExtra]=\"emailExtra\">\n                <nz-select formControlName=\"email\">\n                  <nz-option [nzLabel]=\"'Select a verified email to display'\" [nzValue]=\"''\"></nz-option>\n                  <nz-option [nzLabel]=\"'cipchk@qq.com'\" [nzValue]=\"'cipchk@qq.com'\"></nz-option>\n                </nz-select>\n                <ng-template #emailExtra>\n                  You can manage verified email addresses in your\n                  <a (click)=\"active = 3\">email settings</a>.\n                </ng-template>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label nzFor=\"bio\">Bio</nz-form-label>\n              <nz-form-control [nzExtra]=\"bioExtra\">\n                <textarea nz-input formControlName=\"bio\" id=\"bio\" placeholder=\"Tell us a little bit about yourself\"></textarea>\n                <ng-template #bioExtra> You can <strong>@mention</strong> other users and organizations to link to them. </ng-template>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label nzFor=\"url\">URL</nz-form-label>\n              <nz-form-control>\n                <input nz-input formControlName=\"url\" id=\"url\" />\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label nzFor=\"company\">Company</nz-form-label>\n              <nz-form-control>\n                <input nz-input formControlName=\"company\" id=\"company\" />\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item class=\"border-top-1 mt-md pt-md\">\n              <nz-form-label nzFor=\"location\">Location</nz-form-label>\n              <nz-form-control>\n                <input nz-input formControlName=\"location\" id=\"location\" />\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-control>\n                <button nz-button [nzType]=\"'primary'\" [disabled]=\"profileForm.invalid\">Update profile</button>\n              </nz-form-control>\n            </nz-form-item>\n          </form>\n        </nz-col>\n        <nz-col [nzSpan]=\"8\">\n          <h4>Profile picture</h4>\n          <img src=\"./assets/tmp/img/avatar.jpg\" style=\"width: 100%\" />\n          <nz-upload nzAction=\"https://jsonplaceholder.typicode.com/posts/\" class=\"d-block mt-md text-center\">\n            <button nz-button>Upload new picture</button>\n          </nz-upload>\n        </nz-col>\n      </nz-row>\n    </nz-card>\n    <nz-card nzTitle=\"Change password\" *ngIf=\"active === 2\">\n      <nz-row [nzGutter]=\"64\">\n        <nz-col [nzSpan]=\"16\">\n          <form nz-form [nzLayout]=\"'vertical'\">\n            <nz-form-item>\n              <nz-form-label nzFor=\"old_password\" nzRequired>Old password</nz-form-label>\n              <nz-form-control>\n                <input nz-input [(ngModel)]=\"pwd.old_password\" name=\"old_password\" id=\"old_password\" type=\"password\" required />\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label nzFor=\"new_password\" nzRequired>New password</nz-form-label>\n              <nz-form-control>\n                <input nz-input [(ngModel)]=\"pwd.new_password\" name=\"new_password\" id=\"new_password\" type=\"password\" required />\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label nzRequired nzFor=\"confirm_new_password\">Confirm new password</nz-form-label>\n              <nz-form-control>\n                <input\n                  nz-input\n                  [(ngModel)]=\"pwd.confirm_new_password\"\n                  name=\"confirm_new_password\"\n                  id=\"confirm_new_password\"\n                  type=\"password\"\n                  required\n                />\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-control>\n                <button nz-button (click)=\"pwdSave()\" [nzType]=\"'primary'\">Update profile</button>\n                <a class=\"pl-sm\" [routerLink]=\"['/forget']\">I forgot my password</a>\n              </nz-form-control>\n            </nz-form-item>\n          </form>\n        </nz-col>\n      </nz-row>\n      <h2 class=\"py-md mt-lg border-bottom-1\">Change username</h2>\n      <p class=\"py-sm\">Changing your username can have unintended side effects.</p>\n      <button nz-button (click)=\"msg.info('to change username page')\">\n        <span>Change username</span>\n      </button>\n    </nz-card>\n    <nz-card nzTitle=\"Email\" *ngIf=\"active === 3\">\n      <nz-row class=\"border-1 p-md rounded-sm\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\n        <nz-col [nzSpan]=\"12\">\n          cipchk@qq.com\n          <nz-tag\n            nz-tooltip\n            nzTooltipTitle=\"This email will be used for account-related notifications (e.g. account changes, password resets, billing receipts) as well as any web-based GitHub operations (e.g. edits and merges).\"\n            [nzColor]=\"'#28a745'\"\n            >Primary</nz-tag\n          >\n          <nz-tag\n            nz-tooltip\n            nzTooltipTitle=\"This email will be used as the 'from' address for web-based GitHub operations.\"\n            [nzColor]=\"'#959da5'\"\n            >Public</nz-tag\n          >\n        </nz-col>\n        <nz-col [nzSpan]=\"12\" class=\"text-right\">\n          <i nz-icon nzType=\"delete\" class=\"text-lg\"></i>\n        </nz-col>\n      </nz-row>\n      <h4 class=\"pt-md mb-sm\">Add email address</h4>\n      <input nz-input style=\"width: 200px\" class=\"mr-sm\" />\n      <button nz-button (click)=\"msg.info('add')\">Add</button>\n      <h4 class=\"border-top-1 py-md mt-md\">Primary email address</h4>\n      <p class=\"mb-md\">\n        cipchk@qq.com will be used for account-related notifications and for web-based GitHub operations (e.g. edits and merges).\n      </p>\n      <nz-select [(ngModel)]=\"primary_email\" class=\"mr-sm\">\n        <nz-option [nzLabel]=\"'cipchk@qq.com'\" [nzValue]=\"'cipchk@qq.com'\"></nz-option>\n      </nz-select>\n      <button nz-button (click)=\"msg.info('save')\">Save</button>\n    </nz-card>\n    <nz-card nzTitle=\"Notifications\" *ngIf=\"active === 4\">\n      <p class=\"pb-md\">Choose how you receive notifications. These notification settings apply to the repositories you’re watching.</p>\n      <nz-list nzBordered>\n        <nz-list-item class=\"d-block\">\n          <h4>Automatically watch repositories</h4>\n          <p class=\"py-sm\">When you’re given push access to a repository, automatically receive notifications for it.</p>\n          <label nz-checkbox [ngModel]=\"true\">Automatically watch</label>\n        </nz-list-item>\n        <nz-list-item class=\"d-block\">\n          <h4>Participating</h4>\n          <p class=\"py-sm\">Notifications for the conversations you are participating in, or if someone cites you with an @mention.</p>\n          <label nz-checkbox [ngModel]=\"true\">Email</label>\n          <label nz-checkbox [ngModel]=\"true\">Web</label>\n        </nz-list-item>\n        <nz-list-item class=\"d-block\">\n          <h4>Watching</h4>\n          <p class=\"py-sm\">Notifications for all repositories or conversations you’re watching.</p>\n          <label nz-checkbox [ngModel]=\"true\">Email</label>\n          <label nz-checkbox [ngModel]=\"true\">Web</label>\n        </nz-list-item>\n      </nz-list>\n    </nz-card>\n    <nz-card class=\"ant-card__body-nopadding\" *ngIf=\"active === 5\" [nzBordered]=\"false\">\n      <div class=\"border rounded-md text-center p-lg bg-grey-lighter\">\n        <h3>No OAuth applications</h3>\n        <p class=\"py-md\">OAuth applications are used to access the GitHub API. Read the docs to find out more.</p>\n        <button nz-button (click)=\"msg.info('Register a new application')\" [nzType]=\"'primary'\">Register a new application</button>\n      </div>\n    </nz-card>\n    <nz-card nzTitle=\"Personal access tokens\" [nzExtra]=\"extra\" *ngIf=\"active === 6\">\n      <ng-template #extra>\n        <button nz-button (click)=\"msg.info('Generate new token')\" nzSize=\"small\">Generate new token</button>\n        <button nz-button (click)=\"msg.info('Revoke all')\" nzSize=\"small\" nzDanger class=\"ml-sm\">Revoke all</button>\n      </ng-template>\n      <p>Tokens you have generated that can be used to access the GitHub API.</p>\n      <nz-list nzBordered class=\"mt-sm\">\n        <nz-list-item>\n          <nz-col [nzSpan]=\"12\"> <strong>octotree</strong> — repo </nz-col>\n          <nz-col [nzSpan]=\"12\" class=\"text-right\">\n            Last used within the last day\n            <nz-button-group>\n              <button nz-button>Edit</button>\n              <button nz-button nzDanger>Delete</button>\n            </nz-button-group>\n          </nz-col>\n        </nz-list-item>\n      </nz-list>\n    </nz-card>\n  </nz-col>\n</nz-row>\n");

/***/ }),

/***/ "YWKM":
/*!******************************************************************!*\
  !*** ./src/app/routes/extras/helpcenter/helpcenter.component.ts ***!
  \******************************************************************/
/*! exports provided: HelpCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpCenterComponent", function() { return HelpCenterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_helpcenter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./helpcenter.component.html */ "/boK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");




let HelpCenterComponent = class HelpCenterComponent {
    constructor(msg) {
        this.msg = msg;
        this.type = '';
        this.q = '';
    }
    quick(key) {
        this.q = key;
        this.search();
    }
    search() {
        this.msg.success(`搜索：${this.q}`);
    }
};
HelpCenterComponent.ctorParameters = () => [
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }
];
HelpCenterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-helpcenter',
        template: _raw_loader_helpcenter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], HelpCenterComponent);



/***/ }),

/***/ "h8l5":
/*!****************************************************!*\
  !*** ./src/app/routes/extras/poi/poi.component.ts ***!
  \****************************************************/
/*! exports provided: ExtrasPoiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasPoiComponent", function() { return ExtrasPoiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_poi_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./poi.component.html */ "QHUP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "8eWm");






let ExtrasPoiComponent = class ExtrasPoiComponent {
    constructor(msg, modal) {
        this.msg = msg;
        this.modal = modal;
        this.s = {
            pi: 1,
            ps: 10,
            user_id: '',
            s: '',
            q: '',
        };
        this.url = '/pois';
        this.columns = [
            { title: '编号', index: 'id', width: '100px' },
            { title: '门店名称', index: 'name' },
            { title: '分店名', index: 'branch_name' },
            { title: '状态', index: 'status_str', width: '100px' },
            {
                title: '操作',
                width: '180px',
                buttons: [
                    {
                        text: '编辑',
                        type: 'modal',
                        modal: {
                            component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["ExtrasPoiEditComponent"],
                            paramsName: 'i',
                        },
                        click: () => this.msg.info('回调，重新发起列表刷新'),
                    },
                    { text: '图片', click: () => this.msg.info('click photo') },
                    { text: '经营SKU', click: () => this.msg.info('click sku') },
                ],
            },
        ];
    }
    add() {
        this.modal.static(_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["ExtrasPoiEditComponent"], { i: { id: 0 } }).subscribe(() => {
            this.st.load();
            this.msg.info('回调，重新发起列表刷新');
        });
    }
};
ExtrasPoiComponent.ctorParameters = () => [
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["ModalHelper"] }
];
ExtrasPoiComponent.propDecorators = {
    st: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['st', { static: true },] }]
};
ExtrasPoiComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-extras-poi',
        template: _raw_loader_poi_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ExtrasPoiComponent);



/***/ })

}]);
//# sourceMappingURL=extras-extras-module.js.map
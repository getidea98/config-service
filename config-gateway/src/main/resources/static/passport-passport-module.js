(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["passport-passport-module"],{

/***/ "10C9":
/*!********************************************************!*\
  !*** ./src/app/routes/passport/lock/lock.component.ts ***!
  \********************************************************/
/*! exports provided: UserLockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLockComponent", function() { return UserLockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lock_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lock.component.html */ "A6pk");
/* harmony import */ var _lock_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lock.component.less */ "TQom");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/auth */ "0bRG");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/theme */ "Ac7g");








let UserLockComponent = class UserLockComponent {
    constructor(fb, tokenService, settings, router) {
        this.tokenService = tokenService;
        this.settings = settings;
        this.router = router;
        this.f = fb.group({
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    get user() {
        return this.settings.user;
    }
    submit() {
        // tslint:disable-next-line:forin
        for (const i in this.f.controls) {
            this.f.controls[i].markAsDirty();
            this.f.controls[i].updateValueAndValidity();
        }
        if (this.f.valid) {
            console.log('Valid!');
            console.log(this.f.value);
            this.tokenService.set({
                token: '123',
            });
            this.router.navigate(['dashboard']);
        }
    }
};
UserLockComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_delon_auth__WEBPACK_IMPORTED_MODULE_6__["DA_SERVICE_TOKEN"],] }] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_7__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UserLockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'passport-lock',
        template: _raw_loader_lock_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lock_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserLockComponent);



/***/ }),

/***/ "3/QT":
/*!******************************************************************************!*\
  !*** ./src/app/routes/passport/register-result/register-result.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserRegisterResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterResultComponent", function() { return UserRegisterResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_result_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register-result.component.html */ "AFYh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");





let UserRegisterResultComponent = class UserRegisterResultComponent {
    constructor(route, msg) {
        this.msg = msg;
        this.params = { email: '' };
        this.email = '';
        this.params.email = this.email = route.snapshot.queryParams.email || 'ng-alain@example.com';
    }
};
UserRegisterResultComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
];
UserRegisterResultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'passport-register-result',
        template: _raw_loader_register_result_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserRegisterResultComponent);



/***/ }),

/***/ "A6pk":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/passport/lock/lock.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ant-card width-lg\" style=\"margin: 0 auto;\">\n  <div class=\"ant-card-body\">\n    <div class=\"avatar\">\n      <nz-avatar [nzSrc]=\"user.avatar\" nzIcon=\"user\" nzSize=\"large\"></nz-avatar>\n    </div>\n    <form nz-form [formGroup]=\"f\" (ngSubmit)=\"submit()\" role=\"form\" class=\"mt-md\">\n      <nz-form-item>\n        <nz-form-control [nzErrorTip]=\"'validation.password.required' | translate\">\n          <nz-input-group nzSuffixIcon=\"lock\">\n            <input type=\"password\" nz-input formControlName=\"password\" />\n          </nz-input-group>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-row nzType=\"flex\" nzAlign=\"middle\">\n        <nz-col [nzOffset]=\"12\" [nzSpan]=\"12\" style=\"text-align: right;\">\n          <button nz-button [disabled]=\"!f.valid\" nzType=\"primary\">{{ 'app.lock' | translate }}</button>\n        </nz-col>\n      </nz-row>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "AFYh":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/passport/register-result/register-result.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<result type=\"success\" [title]=\"title\" description=\"{{ 'app.register-result.activation-email' | translate }}\">\n  <ng-template #title>\n    <div class=\"title\" style=\"font-size: 20px;\">\n      {{ 'app.register-result.msg' | translate: params }}\n    </div>\n  </ng-template>\n  <button (click)=\"msg.success('email')\" nz-button nzSize=\"large\" [nzType]=\"'primary'\">\n    {{ 'app.register-result.view-mailbox' | translate }}\n  </button>\n  <button routerLink=\"/\" nz-button nzSize=\"large\">\n    {{ 'app.register-result.back-home' | translate }}\n  </button>\n</result>\n");

/***/ }),

/***/ "BONp":
/*!******************************************************************!*\
  !*** ./src/app/routes/passport/register/register.component.less ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n:host ::ng-deep h3 {\n  margin-bottom: 20px;\n  font-size: 16px;\n}\n:host ::ng-deep .submit {\n  width: 50%;\n}\n:host ::ng-deep .login {\n  float: right;\n  line-height: 40px;\n}\n::ng-deep .register-password-cdk .success,\n::ng-deep .register-password-cdk .warning,\n::ng-deep .register-password-cdk .error {\n  transition: color 0.3s;\n}\n::ng-deep .register-password-cdk .success {\n  color: #52c41a;\n}\n::ng-deep .register-password-cdk .warning {\n  color: #faad14;\n}\n::ng-deep .register-password-cdk .error {\n  color: #ff4d4f;\n}\n::ng-deep .register-password-cdk .progress-pass > .progress .ant-progress-bg {\n  background-color: #faad14;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1Riw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQUY3RjtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUlGO0FBUEE7RUFNTSxtQkFBQTtFQUNBLGVBQUE7QUFJTjtBQVhBO0VBVU0sVUFBQTtBQUlOO0FBZEE7RUFhTSxZQUFBO0VBQ0EsaUJBQUE7QUFJTjtBQUFBOzs7RUFLTSxzQkFBQTtBQUFOO0FBTEE7RUFRTSxjQUFBO0FBQU47QUFSQTtFQVdNLGNBQUE7QUFBTjtBQVhBO0VBY00sY0FBQTtBQUFOO0FBZEE7RUFrQlEseUJBQUE7QUFEUiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35AZGVsb24vdGhlbWUvaW5kZXgnO1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDM2OHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgOjpuZy1kZWVwIHtcbiAgICBoMyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAuc3VibWl0IHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgIC5sb2dpbiB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBsaW5lLWhlaWdodDogQGJ0bi1oZWlnaHQtbGc7XG4gICAgfVxuICB9XG59XG46Om5nLWRlZXAge1xuICAucmVnaXN0ZXItcGFzc3dvcmQtY2RrIHtcbiAgICAuc3VjY2VzcyxcbiAgICAud2FybmluZyxcbiAgICAuZXJyb3Ige1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgICB9XG4gICAgLnN1Y2Nlc3Mge1xuICAgICAgY29sb3I6IEBzdWNjZXNzLWNvbG9yO1xuICAgIH1cbiAgICAud2FybmluZyB7XG4gICAgICBjb2xvcjogQHdhcm5pbmctY29sb3I7XG4gICAgfVxuICAgIC5lcnJvciB7XG4gICAgICBjb2xvcjogQGVycm9yLWNvbG9yO1xuICAgIH1cbiAgICAucHJvZ3Jlc3MtcGFzcyA+IC5wcm9ncmVzcyB7XG4gICAgICAuYW50LXByb2dyZXNzLWJnIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdhcm5pbmctY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "HLAT":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/passport/register/register.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>{{ 'app.register.register' | translate }}</h3>\n<form nz-form [formGroup]=\"form\" (ngSubmit)=\"submit()\" role=\"form\">\n  <nz-alert *ngIf=\"error\" [nzType]=\"'error'\" [nzMessage]=\"error\" [nzShowIcon]=\"true\" class=\"mb-lg\"></nz-alert>\n  <nz-form-item>\n    <nz-form-control [nzErrorTip]=\"mailErrorTip\">\n      <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"user\">\n        <input nz-input formControlName=\"mail\" placeholder=\"Email\" />\n      </nz-input-group>\n      <ng-template #mailErrorTip let-i>\n        <ng-container *ngIf=\"i.errors?.required\">{{ 'validation.email.required' | translate }}</ng-container>\n        <ng-container *ngIf=\"i.errors?.email\">{{ 'validation.email.wrong-format' | translate }}</ng-container>\n      </ng-template>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-control [nzErrorTip]=\"'validation.password.required' | translate\">\n      <nz-input-group\n        nzSize=\"large\"\n        nzAddonBeforeIcon=\"lock\"\n        nz-popover\n        nzPopoverPlacement=\"right\"\n        nzPopoverTrigger=\"focus\"\n        [(nzPopoverVisible)]=\"visible\"\n        nzPopoverOverlayClassName=\"register-password-cdk\"\n        [nzPopoverOverlayStyle]=\"{ 'width.px': 240 }\"\n        [nzPopoverContent]=\"pwdCdkTpl\"\n      >\n        <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"Password\" />\n      </nz-input-group>\n      <ng-template #pwdCdkTpl>\n        <div style=\"padding: 4px 0;\">\n          <ng-container [ngSwitch]=\"status\">\n            <div *ngSwitchCase=\"'ok'\" class=\"success\">{{ 'validation.password.strength.strong' | translate }}</div>\n            <div *ngSwitchCase=\"'pass'\" class=\"warning\">{{ 'validation.password.strength.medium' | translate }}</div>\n            <div *ngSwitchDefault class=\"error\">{{ 'validation.password.strength.short' | translate }}</div>\n          </ng-container>\n          <div class=\"progress-{{ status }}\">\n            <nz-progress\n              [nzPercent]=\"progress\"\n              [nzStatus]=\"passwordProgressMap[status]\"\n              [nzStrokeWidth]=\"6\"\n              [nzShowInfo]=\"false\"\n            ></nz-progress>\n          </div>\n          <p class=\"mt-sm\">{{ 'validation.password.strength.msg' | translate }}</p>\n        </div>\n      </ng-template>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-control [nzErrorTip]=\"confirmErrorTip\">\n      <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"lock\">\n        <input nz-input type=\"password\" formControlName=\"confirm\" placeholder=\"Confirm Password\" />\n      </nz-input-group>\n      <ng-template #confirmErrorTip let-i>\n        <ng-container *ngIf=\"i.errors?.required\">{{ 'validation.confirm-password.required' | translate }}</ng-container>\n        <ng-container *ngIf=\"i.errors?.equar\">{{ 'validation.password.twice' | translate }}</ng-container>\n      </ng-template>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-control [nzErrorTip]=\"mobileErrorTip\">\n      <nz-input-group nzSize=\"large\" [nzAddOnBefore]=\"addOnBeforeTemplate\">\n        <ng-template #addOnBeforeTemplate>\n          <nz-select formControlName=\"mobilePrefix\" style=\"width: 100px;\">\n            <nz-option [nzLabel]=\"'+86'\" [nzValue]=\"'+86'\"></nz-option>\n            <nz-option [nzLabel]=\"'+87'\" [nzValue]=\"'+87'\"></nz-option>\n          </nz-select>\n        </ng-template>\n        <input formControlName=\"mobile\" nz-input placeholder=\"Phone number\" />\n      </nz-input-group>\n      <ng-template #mobileErrorTip let-i>\n        <ng-container *ngIf=\"i.errors?.required\">{{ 'validation.phone-number.required' | translate }}</ng-container>\n        <ng-container *ngIf=\"i.errors?.pattern\">{{ 'validation.phone-number.wrong-format' | translate }}</ng-container>\n      </ng-template>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-control [nzErrorTip]=\"'validation.verification-code.required' | translate\">\n      <nz-row [nzGutter]=\"8\">\n        <nz-col [nzSpan]=\"16\">\n          <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"mail\">\n            <input nz-input formControlName=\"captcha\" placeholder=\"Captcha\" />\n          </nz-input-group>\n        </nz-col>\n        <nz-col [nzSpan]=\"8\">\n          <button type=\"button\" nz-button nzSize=\"large\" (click)=\"getCaptcha()\" [disabled]=\"count > 0\" nzBlock [nzLoading]=\"http.loading\">\n            {{ count ? count + 's' : ('app.register.get-verification-code' | translate) }}\n          </button>\n        </nz-col>\n      </nz-row>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <button nz-button nzType=\"primary\" nzSize=\"large\" type=\"submit\" [nzLoading]=\"http.loading\" class=\"submit\">\n      {{ 'app.register.register' | translate }}\n    </button>\n    <a class=\"login\" routerLink=\"/passport/login\">{{ 'app.register.sign-in' | translate }}</a>\n  </nz-form-item>\n</form>\n");

/***/ }),

/***/ "LLT2":
/*!****************************************************************!*\
  !*** ./src/app/routes/passport/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "HLAT");
/* harmony import */ var _register_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.less */ "BONp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
var UserRegisterComponent_1;








let UserRegisterComponent = UserRegisterComponent_1 = class UserRegisterComponent {
    constructor(fb, router, http, msg) {
        this.router = router;
        this.http = http;
        this.msg = msg;
        this.error = '';
        this.type = 0;
        this.visible = false;
        this.status = 'pool';
        this.progress = 0;
        this.passwordProgressMap = {
            ok: 'success',
            pass: 'normal',
            pool: 'exception',
        };
        // #endregion
        // #region get captcha
        this.count = 0;
        this.form = fb.group({
            mail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), UserRegisterComponent_1.checkPassword.bind(this)]],
            confirm: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), UserRegisterComponent_1.passwordEquar]],
            mobilePrefix: ['+86'],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^1\d{10}$/)]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    // #region fields
    get mail() {
        return this.form.controls.mail;
    }
    get password() {
        return this.form.controls.password;
    }
    get confirm() {
        return this.form.controls.confirm;
    }
    get mobile() {
        return this.form.controls.mobile;
    }
    get captcha() {
        return this.form.controls.captcha;
    }
    static checkPassword(control) {
        if (!control) {
            return null;
        }
        const self = this;
        self.visible = !!control.value;
        if (control.value && control.value.length > 9) {
            self.status = 'ok';
        }
        else if (control.value && control.value.length > 5) {
            self.status = 'pass';
        }
        else {
            self.status = 'pool';
        }
        if (self.visible) {
            self.progress = control.value.length * 10 > 100 ? 100 : control.value.length * 10;
        }
    }
    static passwordEquar(control) {
        if (!control || !control.parent) {
            return null;
        }
        if (control.value !== control.parent.get('password').value) {
            return { equar: true };
        }
        return null;
    }
    getCaptcha() {
        if (this.mobile.invalid) {
            this.mobile.markAsDirty({ onlySelf: true });
            this.mobile.updateValueAndValidity({ onlySelf: true });
            return;
        }
        this.count = 59;
        this.interval$ = setInterval(() => {
            this.count -= 1;
            if (this.count <= 0) {
                clearInterval(this.interval$);
            }
        }, 1000);
    }
    // #endregion
    submit() {
        this.error = '';
        Object.keys(this.form.controls).forEach((key) => {
            this.form.controls[key].markAsDirty();
            this.form.controls[key].updateValueAndValidity();
        });
        if (this.form.invalid) {
            return;
        }
        const data = this.form.value;
        this.http.post('/register?_allow_anonymous=true', data).subscribe(() => {
            this.router.navigate(['passport', 'register-result'], { queryParams: { email: data.mail } });
        });
    }
    ngOnDestroy() {
        if (this.interval$) {
            clearInterval(this.interval$);
        }
    }
};
UserRegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_6__["_HttpClient"] },
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"] }
];
UserRegisterComponent = UserRegisterComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'passport-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserRegisterComponent);



/***/ }),

/***/ "TQom":
/*!**********************************************************!*\
  !*** ./src/app/routes/passport/lock/lock.component.less ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .ant-card-body {\n  position: relative;\n  margin-top: 80px;\n}\n:host ::ng-deep .avatar {\n  position: absolute;\n  top: -20px;\n  left: 50%;\n  margin-left: -20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2suY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFIQTtFQU1JLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUFKIiwiZmlsZSI6ImxvY2suY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAuYW50LWNhcmQtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gIH1cbiAgLmF2YXRhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTIwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "aMv7":
/*!************************************************************!*\
  !*** ./src/app/routes/passport/passport-routing.module.ts ***!
  \************************************************************/
/*! exports provided: PassportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassportRoutingModule", function() { return PassportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_passport_passport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/passport/passport.component */ "/XSn");
/* harmony import */ var _callback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./callback.component */ "s85n");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lock/lock.component */ "10C9");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "gOpe");
/* harmony import */ var _register_result_register_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register-result/register-result.component */ "3/QT");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "LLT2");









const routes = [
    // passport
    {
        path: 'passport',
        component: _layout_passport_passport_component__WEBPACK_IMPORTED_MODULE_3__["LayoutPassportComponent"],
        children: [
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["UserLoginComponent"],
                data: { title: '登录', titleI18n: 'app.login.login' },
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["UserRegisterComponent"],
                data: { title: '注册', titleI18n: 'app.register.register' },
            },
            {
                path: 'register-result',
                component: _register_result_register_result_component__WEBPACK_IMPORTED_MODULE_7__["UserRegisterResultComponent"],
                data: { title: '注册结果', titleI18n: 'app.register.register' },
            },
            {
                path: 'lock',
                component: _lock_lock_component__WEBPACK_IMPORTED_MODULE_5__["UserLockComponent"],
                data: { title: '锁屏', titleI18n: 'app.lock' },
            },
        ],
    },
    // 单页不包裹Layout
    { path: 'passport/callback/:type', component: _callback_component__WEBPACK_IMPORTED_MODULE_4__["CallbackComponent"] },
];
let PassportRoutingModule = class PassportRoutingModule {
};
PassportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PassportRoutingModule);



/***/ }),

/***/ "gOpe":
/*!**********************************************************!*\
  !*** ./src/app/routes/passport/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "vSRR");
/* harmony import */ var _login_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.less */ "y9rM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core */ "ey9i");
/* harmony import */ var _delon_abc_reuse_tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/abc/reuse-tab */ "wdp9");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/auth */ "0bRG");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");












let UserLoginComponent = class UserLoginComponent {
    constructor(fb, router, settingsService, socialService, reuseTabService, tokenService, startupSrv, http, msg) {
        this.router = router;
        this.settingsService = settingsService;
        this.socialService = socialService;
        this.reuseTabService = reuseTabService;
        this.tokenService = tokenService;
        this.startupSrv = startupSrv;
        this.http = http;
        this.msg = msg;
        this.error = '';
        this.type = 0;
        // #region get captcha
        this.count = 0;
        this.form = fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(admin|user)$/)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(ng\-alain\.com)$/)]],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^1\d{10}$/)]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            remember: [true],
        });
    }
    // #region fields
    get userName() {
        return this.form.controls.userName;
    }
    get password() {
        return this.form.controls.password;
    }
    get mobile() {
        return this.form.controls.mobile;
    }
    get captcha() {
        return this.form.controls.captcha;
    }
    // #endregion
    switch({ index }) {
        this.type = index;
    }
    getCaptcha() {
        if (this.mobile.invalid) {
            this.mobile.markAsDirty({ onlySelf: true });
            this.mobile.updateValueAndValidity({ onlySelf: true });
            return;
        }
        this.count = 59;
        this.interval$ = setInterval(() => {
            this.count -= 1;
            if (this.count <= 0) {
                clearInterval(this.interval$);
            }
        }, 1000);
    }
    // #endregion
    submit() {
        this.error = '';
        if (this.type === 0) {
            this.userName.markAsDirty();
            this.userName.updateValueAndValidity();
            this.password.markAsDirty();
            this.password.updateValueAndValidity();
            if (this.userName.invalid || this.password.invalid) {
                return;
            }
        }
        else {
            this.mobile.markAsDirty();
            this.mobile.updateValueAndValidity();
            this.captcha.markAsDirty();
            this.captcha.updateValueAndValidity();
            if (this.mobile.invalid || this.captcha.invalid) {
                return;
            }
        }
        // 默认配置中对所有HTTP请求都会强制 [校验](https://ng-alain.com/auth/getting-started) 用户 Token
        // 然一般来说登录请求不需要校验，因此可以在请求URL加上：`/login?_allow_anonymous=true` 表示不触发用户 Token 校验
        this.http
            .post('/login/account?_allow_anonymous=true', {
            type: this.type,
            userName: this.userName.value,
            password: this.password.value,
        })
            .subscribe((res) => {
            if (res.msg !== 'ok') {
                this.error = res.msg;
                return;
            }
            // 清空路由复用信息
            this.reuseTabService.clear();
            // 设置用户Token信息
            // TODO: Mock expired value
            res.user.expired = +new Date() + 1000 * 60 * 5;
            this.tokenService.set(res.user);
            // 重新获取 StartupService 内容，我们始终认为应用信息一般都会受当前用户授权范围而影响
            this.startupSrv.load().then(() => {
                let url = this.tokenService.referrer.url || '/';
                if (url.includes('/passport')) {
                    url = '/';
                }
                this.router.navigateByUrl(url);
            });
        });
    }
    // #region social
    open(type, openType = 'href') {
        let url = ``;
        let callback = ``;
        // tslint:disable-next-line: prefer-conditional-expression
        if (_env_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production) {
            callback = 'https://ng-alain.github.io/ng-alain/#/passport/callback/' + type;
        }
        else {
            callback = 'http://localhost:4200/#/passport/callback/' + type;
        }
        switch (type) {
            case 'auth0':
                url = `//cipchk.auth0.com/login?client=8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5&redirect_uri=${decodeURIComponent(callback)}`;
                break;
            case 'github':
                url = `//github.com/login/oauth/authorize?client_id=9d6baae4b04a23fcafa2&response_type=code&redirect_uri=${decodeURIComponent(callback)}`;
                break;
            case 'weibo':
                url = `https://api.weibo.com/oauth2/authorize?client_id=1239507802&response_type=code&redirect_uri=${decodeURIComponent(callback)}`;
                break;
        }
        if (openType === 'window') {
            this.socialService
                .login(url, '/', {
                type: 'window',
            })
                .subscribe((res) => {
                if (res) {
                    this.settingsService.setUser(res);
                    this.router.navigateByUrl('/');
                }
            });
        }
        else {
            this.socialService.login(url, '/', {
                type: 'href',
            });
        }
    }
    // #endregion
    ngOnDestroy() {
        if (this.interval$) {
            clearInterval(this.interval$);
        }
    }
};
UserLoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_9__["SettingsService"] },
    { type: _delon_auth__WEBPACK_IMPORTED_MODULE_8__["SocialService"] },
    { type: _delon_abc_reuse_tab__WEBPACK_IMPORTED_MODULE_7__["ReuseTabService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_delon_abc_reuse_tab__WEBPACK_IMPORTED_MODULE_7__["ReuseTabService"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_delon_auth__WEBPACK_IMPORTED_MODULE_8__["DA_SERVICE_TOKEN"],] }] },
    { type: _core__WEBPACK_IMPORTED_MODULE_6__["StartupService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_9__["_HttpClient"] },
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__["NzMessageService"] }
];
UserLoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'passport-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_delon_auth__WEBPACK_IMPORTED_MODULE_8__["SocialService"]],
        styles: [_login_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserLoginComponent);



/***/ }),

/***/ "lYtU":
/*!****************************************************!*\
  !*** ./src/app/routes/passport/passport.module.ts ***!
  \****************************************************/
/*! exports provided: PassportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassportModule", function() { return PassportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _callback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./callback.component */ "s85n");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock/lock.component */ "10C9");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "gOpe");
/* harmony import */ var _passport_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./passport-routing.module */ "aMv7");
/* harmony import */ var _register_result_register_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register-result/register-result.component */ "3/QT");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "LLT2");









const COMPONENTS = [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["UserLoginComponent"], _register_result_register_result_component__WEBPACK_IMPORTED_MODULE_7__["UserRegisterResultComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_8__["UserRegisterComponent"], _lock_lock_component__WEBPACK_IMPORTED_MODULE_4__["UserLockComponent"], _callback_component__WEBPACK_IMPORTED_MODULE_3__["CallbackComponent"]];
let PassportModule = class PassportModule {
};
PassportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _passport_routing_module__WEBPACK_IMPORTED_MODULE_6__["PassportRoutingModule"]],
        declarations: [...COMPONENTS],
    })
], PassportModule);



/***/ }),

/***/ "s85n":
/*!*******************************************************!*\
  !*** ./src/app/routes/passport/callback.component.ts ***!
  \*******************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/auth */ "0bRG");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "Ac7g");





let CallbackComponent = class CallbackComponent {
    constructor(socialService, settingsSrv, route) {
        this.socialService = socialService;
        this.settingsSrv = settingsSrv;
        this.route = route;
        this.type = '';
    }
    ngOnInit() {
        this.type = this.route.snapshot.params.type;
        this.mockModel();
    }
    mockModel() {
        const info = {
            token: '123456789',
            name: 'cipchk',
            email: `${this.type}@${this.type}.com`,
            id: 10000,
            time: +new Date(),
        };
        this.settingsSrv.setUser(Object.assign(Object.assign({}, this.settingsSrv.user), info));
        this.socialService.callback(info);
    }
};
CallbackComponent.ctorParameters = () => [
    { type: _delon_auth__WEBPACK_IMPORTED_MODULE_3__["SocialService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CallbackComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-callback',
        template: ``,
        providers: [_delon_auth__WEBPACK_IMPORTED_MODULE_3__["SocialService"]],
    })
], CallbackComponent);



/***/ }),

/***/ "vSRR":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/passport/login/login.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form nz-form [formGroup]=\"form\" (ngSubmit)=\"submit()\" role=\"form\">\n  <nz-tabset [nzAnimated]=\"false\" class=\"tabs\" (nzSelectChange)=\"switch($event)\">\n    <nz-tab [nzTitle]=\"'app.login.tab-login-credentials' | translate\">\n      <nz-alert *ngIf=\"error\" [nzType]=\"'error'\" [nzMessage]=\"error\" [nzShowIcon]=\"true\" class=\"mb-lg\"></nz-alert>\n      <nz-form-item>\n        <nz-form-control nzErrorTip=\"Please enter mobile number, muse be: admin or user\">\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"user\">\n            <input nz-input formControlName=\"userName\" placeholder=\"username: admin or user\" />\n          </nz-input-group>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-control nzErrorTip=\"Please enter password, muse be: ng-alain.com\">\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"lock\">\n            <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"password: ng-alain.com\" />\n          </nz-input-group>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-tab>\n    <nz-tab [nzTitle]=\"'app.login.tab-login-mobile' | translate\">\n      <nz-form-item>\n        <nz-form-control [nzErrorTip]=\"mobileErrorTip\">\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"user\">\n            <input nz-input formControlName=\"mobile\" placeholder=\"mobile number\" />\n          </nz-input-group>\n          <ng-template #mobileErrorTip let-i>\n            <ng-container *ngIf=\"i.errors.required\">\n              {{ 'validation.phone-number.required' | translate }}\n            </ng-container>\n            <ng-container *ngIf=\"i.errors.pattern\">\n              {{ 'validation.phone-number.wrong-format' | translate }}\n            </ng-container>\n          </ng-template>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-control [nzErrorTip]=\"'validation.verification-code.required' | translate\">\n          <nz-row [nzGutter]=\"8\">\n            <nz-col [nzSpan]=\"16\">\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"mail\">\n                <input nz-input formControlName=\"captcha\" placeholder=\"captcha\" />\n              </nz-input-group>\n            </nz-col>\n            <nz-col [nzSpan]=\"8\">\n              <button\n                type=\"button\"\n                nz-button\n                nzSize=\"large\"\n                (click)=\"getCaptcha()\"\n                [disabled]=\"count >= 0\"\n                nzBlock\n                [nzLoading]=\"http.loading\"\n              >\n                {{ count ? count + 's' : ('app.register.get-verification-code' | translate) }}\n              </button>\n            </nz-col>\n          </nz-row>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-tab>\n  </nz-tabset>\n  <nz-form-item>\n    <nz-col [nzSpan]=\"12\">\n      <label nz-checkbox formControlName=\"remember\">{{ 'app.login.remember-me' | translate }}</label>\n    </nz-col>\n    <nz-col [nzSpan]=\"12\" class=\"text-right\">\n      <a class=\"forgot\" (click)=\"msg.error('请找欧阳锋')\">{{ 'app.login.forgot-password' | translate }}</a>\n    </nz-col>\n  </nz-form-item>\n  <nz-form-item>\n    <button nz-button type=\"submit\" nzType=\"primary\" nzSize=\"large\" [nzLoading]=\"http.loading\" nzBlock>\n      {{ 'app.login.login' | translate }}\n    </button>\n  </nz-form-item>\n</form>\n<div class=\"other\">\n  {{ 'app.login.sign-in-with' | translate }}\n  <i nz-tooltip nzTooltipTitle=\"in fact Auth0 via window\" (click)=\"open('auth0', 'window')\" nz-icon nzType=\"alipay-circle\" class=\"icon\"></i>\n  <i nz-tooltip nzTooltipTitle=\"in fact Github via redirect\" (click)=\"open('github')\" nz-icon nzType=\"taobao-circle\" class=\"icon\"></i>\n  <i (click)=\"open('weibo', 'window')\" nz-icon nzType=\"weibo-circle\" class=\"icon\"></i>\n  <a class=\"register\" routerLink=\"/passport/register\">{{ 'app.login.signup' | translate }}</a>\n</div>\n");

/***/ }),

/***/ "y9rM":
/*!************************************************************!*\
  !*** ./src/app/routes/passport/login/login.component.less ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n:host ::ng-deep .ant-tabs .ant-tabs-bar {\n  margin-bottom: 24px;\n  text-align: center;\n  border-bottom: 0;\n}\n:host ::ng-deep .ant-tabs-tab {\n  font-size: 16px;\n  line-height: 24px;\n}\n:host ::ng-deep .ant-input-affix-wrapper .ant-input:not(:first-child) {\n  padding-left: 4px;\n}\n:host ::ng-deep .icon {\n  margin-left: 16px;\n  color: rgba(0, 0, 0, 0.2);\n  font-size: 24px;\n  vertical-align: middle;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n:host ::ng-deep .icon:hover {\n  color: #1890ff;\n}\n:host ::ng-deep .other {\n  margin-top: 24px;\n  line-height: 22px;\n  text-align: left;\n}\n:host ::ng-deep .other nz-tooltip {\n  vertical-align: middle;\n}\n:host ::ng-deep .other .register {\n  float: right;\n}\n[data-theme='dark'] :host ::ng-deep .icon {\n  color: rgba(255, 255, 255, 0.2);\n}\n[data-theme='dark'] :host ::ng-deep .icon:hover {\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1Riw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLDZGQUE2RjtBQUY3RjtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUlGO0FBUEE7RUFNTSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFJTjtBQVpBO0VBV00sZUFBQTtFQUNBLGlCQUFBO0FBSU47QUFoQkE7RUFlTSxpQkFBQTtBQUlOO0FBbkJBO0VBa0JNLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFJTjtBQUhNO0VBQ0UsY0FBQTtBQUtSO0FBOUJBO0VBNkJNLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUlOO0FBbkNBO0VBaUNRLHNCQUFBO0FBS1I7QUF0Q0E7RUFvQ1EsWUFBQTtBQUtSO0FBQ0E7RUFHTSwrQkFBQTtBQUROO0FBRU07RUFDRSxXQUFBO0FBQVIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+QGRlbG9uL3RoZW1lL2luZGV4Jztcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNjhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIDo6bmctZGVlcCB7XG4gICAgLmFudC10YWJzIC5hbnQtdGFicy1iYXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuICAgIC5hbnQtdGFicy10YWIge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgfVxuICAgIC5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciAuYW50LWlucHV0Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgIH1cbiAgICAuaWNvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogQHByaW1hcnktY29sb3I7XG4gICAgICB9XG4gICAgfVxuICAgIC5vdGhlciB7XG4gICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbnotdG9vbHRpcCB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgICAucmVnaXN0ZXIge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbltkYXRhLXRoZW1lPSdkYXJrJ10ge1xuICA6aG9zdCA6Om5nLWRlZXAge1xuICAgIC5pY29uIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=passport-passport-module.js.map
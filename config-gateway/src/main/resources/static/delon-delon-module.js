(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delon-delon-module"],{

/***/ "0amb":
/*!***************************************************!*\
  !*** ./src/app/routes/delon/zip/zip.component.ts ***!
  \***************************************************/
/*! exports provided: ZipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipComponent", function() { return ZipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_zip_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./zip.component.html */ "fQwY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_abc_zip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/abc/zip */ "1RTX");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");





let ZipComponent = class ZipComponent {
    constructor(zip, msg, cdr) {
        this.zip = zip;
        this.msg = msg;
        this.cdr = cdr;
        this.instance = null;
        this.data = [
            { path: 'demo.docx', url: 'https://ng-alain.com/assets/demo.docx' },
            {
                path: '小程序标志.zip',
                url: 'https://wximg.gtimg.com/shake_tv/mina/standard_logo.zip',
            },
        ];
    }
    ngOnInit() {
        this.zip.create().then((ret) => {
            this.instance = ret;
            this.cdr.detectChanges();
        });
    }
    format(data) {
        const files = data.files;
        this.list = Object.keys(files).map((key) => {
            return {
                name: key,
                dir: files[key].dir,
                date: files[key].date,
            };
        });
        this.cdr.detectChanges();
    }
    url() {
        this.zip.read(`./assets/tmp/demo.zip`).then((res) => this.format(res));
    }
    change(e) {
        const file = e.target.files[0];
        this.zip.read(file).then((res) => this.format(res));
    }
    download() {
        const promises = [];
        this.data.forEach((item) => {
            promises.push(this.zip.pushUrl(this.instance, item.path, item.url));
        });
        Promise.all(promises).then(() => {
            this.zip.save(this.instance).then(() => {
                this.msg.success('download success');
                this.data = [];
            });
        }, (error) => {
            console.warn(error);
            this.msg.error(JSON.stringify(error));
        });
    }
};
ZipComponent.ctorParameters = () => [
    { type: _delon_abc_zip__WEBPACK_IMPORTED_MODULE_3__["ZipService"] },
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
ZipComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-zip',
        template: _raw_loader_zip_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
    })
], ZipComponent);



/***/ }),

/***/ "1RTX":
/*!**************************************************************!*\
  !*** ./node_modules/@delon/abc/__ivy_ngcc__/fesm2015/zip.js ***!
  \**************************************************************/
/*! exports provided: ZipModule, ZipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipModule", function() { return ZipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipService", function() { return ZipService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






/**
 * @fileoverview added by tsickle
 * Generated from: zip.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */



function ZipWriteOptions() { }
if (false) {}
/**
 * @record
 */
function ZipSaveOptions() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: zip.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ZipService {
    /**
     * @param {?} http
     * @param {?} lazy
     * @param {?} configSrv
     * @param {?} ngZone
     */
    constructor(http, lazy, configSrv, ngZone) {
        this.http = http;
        this.lazy = lazy;
        this.ngZone = ngZone;
        this.cog = (/** @type {?} */ (configSrv.merge('zip', {
            url: '//cdn.bootcss.com/jszip/3.3.0/jszip.min.js',
            utils: [],
        })));
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        return this.lazy.load([(/** @type {?} */ (this.cog.url))].concat((/** @type {?} */ (this.cog.utils))));
    }
    /**
     * @private
     * @param {?} zip
     * @return {?}
     */
    check(zip) {
        if (!zip)
            throw new Error('get instance via `ZipService.create()`');
    }
    /**
     * 解压
     * @param {?} fileOrUrl
     * @param {?=} options
     * @return {?}
     */
    read(fileOrUrl, options) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const resolveCallback = (/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.ngZone.run((/**
                 * @return {?}
                 */
                () => resolve(data)));
            });
            this.init().then((/**
             * @return {?}
             */
            () => {
                this.ngZone.runOutsideAngular((/**
                 * @return {?}
                 */
                () => {
                    // from url
                    if (typeof fileOrUrl === 'string') {
                        this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => {
                            JSZip.loadAsync(res, options).then((/**
                             * @param {?} ret
                             * @return {?}
                             */
                            (ret) => resolveCallback(ret)));
                        }), (/**
                         * @param {?} err
                         * @return {?}
                         */
                        (err) => {
                            reject(err);
                        }));
                        return;
                    }
                    // from file
                    /** @type {?} */
                    const reader = new FileReader();
                    reader.onload = (/**
                     * @param {?} e
                     * @return {?}
                     */
                    (e) => {
                        JSZip.loadAsync(e.target.result, options).then((/**
                         * @param {?} ret
                         * @return {?}
                         */
                        (ret) => resolveCallback(ret)));
                    });
                    reader.readAsBinaryString((/** @type {?} */ (fileOrUrl)));
                }));
            }));
        }));
    }
    /**
     * 创建 Zip 实例，用于创建压缩文件
     * @return {?}
     */
    create() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this.init().then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const zipFile = new JSZip();
                resolve(zipFile);
            }));
        }));
    }
    /**
     * 下载URL资源并写入 zip
     * @param {?} zip Zip 实例
     * @param {?} path Zip 路径，例如： `text.txt`、`txt/hi.txt`
     * @param {?} url URL 地址
     * @return {?}
     */
    pushUrl(zip, path, url) {
        this.check(zip);
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.http.request('GET', url, { responseType: 'arraybuffer' }).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                zip.file(path, res);
                resolve();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                reject({ url, error });
            }));
        }));
    }
    /**
     * 保存Zip并执行打开保存对话框
     *
     * @param {?} zip zip 对象，务必通过 `create()` 构建
     * @param {?=} options 额外参数，
     * @return {?}
     */
    save(zip, options) {
        this.check(zip);
        /** @type {?} */
        const opt = (/** @type {?} */ (Object.assign({}, options)));
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            zip.generateAsync(Object.assign({ type: 'blob' }, opt.options), opt.update).then((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                if (opt.callback)
                    opt.callback(data);
                Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(data, opt.filename || 'download.zip');
                resolve();
            }), (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                reject(err);
            }));
        }));
    }
}
ZipService.ɵfac = function ZipService_Factory(t) { return new (t || ZipService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_delon_util__WEBPACK_IMPORTED_MODULE_2__["LazyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_delon_util__WEBPACK_IMPORTED_MODULE_2__["AlainConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
/** @nocollapse */
ZipService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _delon_util__WEBPACK_IMPORTED_MODULE_2__["LazyService"] },
    { type: _delon_util__WEBPACK_IMPORTED_MODULE_2__["AlainConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
/** @nocollapse */ ZipService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ZipService_Factory() { return new ZipService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_delon_util__WEBPACK_IMPORTED_MODULE_2__["LazyService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_delon_util__WEBPACK_IMPORTED_MODULE_2__["AlainConfigService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); }, token: ZipService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ZipService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _delon_util__WEBPACK_IMPORTED_MODULE_2__["LazyService"] }, { type: _delon_util__WEBPACK_IMPORTED_MODULE_2__["AlainConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: zip.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ZipModule {
}
ZipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ZipModule });
ZipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ZipModule_Factory(t) { return new (t || ZipModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_2__["DelonUtilModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ZipModule, { imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_2__["DelonUtilModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ZipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_2__["DelonUtilModule"]]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: zip.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "2f0N":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/guard/leave.component.ts ***!
  \*******************************************************/
/*! exports provided: GuardLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardLeaveComponent", function() { return GuardLeaveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let GuardLeaveComponent = class GuardLeaveComponent {
};
GuardLeaveComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guard-leave',
        template: `
    <p>离开时需要确认</p>
    <button nz-button [nzType]="'primary'" [routerLink]="['/logics/guard']">
      <span>我要离开</span>
    </button>
  `,
    })
], GuardLeaveComponent);



/***/ }),

/***/ "2qzf":
/*!*************************************************!*\
  !*** ./src/app/routes/delon/qr/qr.component.ts ***!
  \*************************************************/
/*! exports provided: QRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRComponent", function() { return QRComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_qr_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./qr.component.html */ "Dtqw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let QRComponent = class QRComponent {
    constructor() {
        this.value = 'https://ng-alain.com/';
        this.background = '#ffffff';
        this.backgroundAlpha = 1.0;
        this.foreground = '#000000';
        this.foregroundAlpha = 1.0;
        this.level = 'L';
        this.mime = 'image/png';
        this.padding = 10;
        this.size = 220;
    }
};
QRComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-qr',
        template: _raw_loader_qr_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], QRComponent);



/***/ }),

/***/ "3mRb":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/print/print.component.ts ***!
  \*******************************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_print_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./print.component.html */ "O5wR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_abc_lodop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/abc/lodop */ "rbmV");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/notification */ "bNXi");






let PrintComponent = class PrintComponent {
    constructor(lodopSrv, msg, notify) {
        this.lodopSrv = lodopSrv;
        this.msg = msg;
        this.notify = notify;
        this.cog = {
            url: 'https://localhost:8443/CLodopfuncs.js',
            printer: '',
            paper: '',
            html: `
      <h1>Title</h1>
      <p>这~！@#￥%……&*（）——sdilfjnvn</p>
      <p>这~！@#￥%……&*（）——sdilfjnvn</p>
      <p>这~！@#￥%……&*（）——sdilfjnvn</p>
      <p>这~！@#￥%……&*（）——sdilfjnvn</p>
      <p>这~！@#￥%……&*（）——sdilfjnvn</p>
    `,
        };
        this.error = false;
        this.lodop = null;
        this.pinters = [];
        this.papers = [];
        this.printing = false;
        this.lodopSrv.lodop.subscribe(({ lodop, ok }) => {
            if (!ok) {
                this.error = true;
                return;
            }
            this.error = false;
            this.msg.success(`打印机加载成功`);
            this.lodop = lodop;
            this.pinters = this.lodopSrv.printer;
        });
    }
    reload(options = { url: 'https://localhost:8443/CLodopfuncs.js' }) {
        this.pinters = [];
        this.papers = [];
        this.cog.printer = '';
        this.cog.paper = '';
        this.lodopSrv.cog = Object.assign(Object.assign({}, this.cog), options);
        this.error = false;
        if (options === null) {
            this.lodopSrv.reset();
        }
    }
    changePinter(name) {
        if (this.lodop == null) {
            return;
        }
        this.papers = this.lodop.GET_PAGESIZES_LIST(name, '\n').split('\n');
    }
    print(isPrivew = false) {
        const LODOP = this.lodop;
        LODOP.PRINT_INITA(10, 20, 810, 610, '测试C-Lodop远程打印四步骤');
        LODOP.SET_PRINTER_INDEXA(this.cog.printer);
        LODOP.SET_PRINT_PAGESIZE(0, 0, 0, this.cog.paper);
        LODOP.ADD_PRINT_TEXT(1, 1, 300, 200, '下面输出的是本页源代码及其展现效果：');
        LODOP.ADD_PRINT_TEXT(20, 10, '90%', '95%', this.cog.html);
        LODOP.SET_PRINT_STYLEA(0, 'ItemType', 4);
        LODOP.NewPageA();
        LODOP.ADD_PRINT_HTM(20, 10, '90%', '95%', this.cog.html);
        if (isPrivew) {
            LODOP.PREVIEW();
        }
        else {
            LODOP.PRINT();
        }
    }
};
PrintComponent.ctorParameters = () => [
    { type: _delon_abc_lodop__WEBPACK_IMPORTED_MODULE_3__["LodopService"] },
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
    { type: ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"] }
];
PrintComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-print',
        template: _raw_loader_print_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], PrintComponent);



/***/ }),

/***/ "Ah5K":
/*!*******************************************************************!*\
  !*** ./node_modules/@delon/abc/__ivy_ngcc__/fesm2015/downFile.js ***!
  \*******************************************************************/
/*! exports provided: DownFileDirective, DownFileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownFileDirective", function() { return DownFileDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownFileModule", function() { return DownFileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






/**
 * @fileoverview added by tsickle
 * Generated from: down-file.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


class DownFileDirective {
    /**
     * @param {?} el
     * @param {?} _http
     */
    constructor(el, _http) {
        this.el = el;
        this._http = _http;
        this.isFileSaverSupported = true;
        this.httpMethod = 'get';
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** @type {?} */
        let isFileSaverSupported = false;
        try {
            isFileSaverSupported = !!new Blob();
        }
        catch (_a) { }
        this.isFileSaverSupported = isFileSaverSupported;
        if (!isFileSaverSupported) {
            el.nativeElement.classList.add(`down-file__not-support`);
        }
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    getDisposition(data) {
        /** @type {?} */
        const arr = (data || '')
            .split(';')
            .filter((/**
         * @param {?} i
         * @return {?}
         */
        i => i.includes('=')))
            .map((/**
         * @param {?} v
         * @return {?}
         */
        v => {
            /** @type {?} */
            const strArr = v.split('=');
            /** @type {?} */
            const utfId = `UTF-8''`;
            /** @type {?} */
            let value = strArr[1];
            if (value.startsWith(utfId))
                value = value.substr(utfId.length);
            return { [strArr[0].trim()]: value };
        }));
        return arr.reduce((/**
         * @param {?} _o
         * @param {?} item
         * @return {?}
         */
        (_o, item) => item), {});
    }
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    setDisabled(status) {
        /** @type {?} */
        const el = this.el.nativeElement;
        el.disabled = status;
        el.classList[status ? 'add' : 'remove'](`down-file__disabled`);
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    _click(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isFileSaverSupported || (typeof this.pre === 'function' && !(yield this.pre(ev)))) {
                ev.stopPropagation();
                ev.preventDefault();
                return;
            }
            this.setDisabled(true);
            this._http
                .request(this.httpMethod, this.httpUrl, {
                params: this.httpData || {},
                responseType: 'blob',
                observe: 'response',
                body: this.httpBody,
            })
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                if (res.status !== 200 || (/** @type {?} */ (res.body)).size <= 0) {
                    this.error.emit(res);
                    return;
                }
                /** @type {?} */
                const disposition = this.getDisposition(res.headers.get('content-disposition'));
                /** @type {?} */
                let fileName = this.fileName;
                if (typeof fileName === 'function')
                    fileName = fileName(res);
                fileName =
                    fileName || disposition[`filename*`] || disposition[`filename`] || res.headers.get('filename') || res.headers.get('x-filename');
                Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])((/** @type {?} */ (res.body)), decodeURI((/** @type {?} */ (fileName))));
                this.success.emit(res);
            }), (/**
             * @param {?} err
             * @return {?}
             */
            err => this.error.emit(err)), (/**
             * @return {?}
             */
            () => this.setDisabled(false)));
        });
    }
}
DownFileDirective.ɵfac = function DownFileDirective_Factory(t) { return new (t || DownFileDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"])); };
DownFileDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DownFileDirective, selectors: [["", "down-file", ""]], hostBindings: function DownFileDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DownFileDirective_click_HostBindingHandler($event) { return ctx._click($event); });
    } }, inputs: { httpMethod: ["http-method", "httpMethod"], httpData: ["http-data", "httpData"], httpBody: ["http-body", "httpBody"], httpUrl: ["http-url", "httpUrl"], fileName: ["file-name", "fileName"], pre: "pre" }, outputs: { success: "success", error: "error" }, exportAs: ["downFile"] });
/** @nocollapse */
DownFileDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"] }
];
DownFileDirective.propDecorators = {
    httpData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['http-data',] }],
    httpBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['http-body',] }],
    httpMethod: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['http-method',] }],
    httpUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['http-url',] }],
    fileName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['file-name',] }],
    pre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    success: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DownFileDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[down-file]',
                exportAs: 'downFile',
                host: {
                    '(click)': '_click($event)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"] }]; }, { httpMethod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['http-method']
        }], success: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], httpData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['http-data']
        }], httpBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['http-body']
        }], httpUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['http-url']
        }], fileName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['file-name']
        }], pre: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: down-file.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DIRECTIVES = [DownFileDirective];
class DownFileModule {
}
DownFileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DownFileModule });
DownFileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DownFileModule_Factory(t) { return new (t || DownFileModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_theme__WEBPACK_IMPORTED_MODULE_2__["AlainThemeModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DownFileModule, { declarations: function () { return [DownFileDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_theme__WEBPACK_IMPORTED_MODULE_2__["AlainThemeModule"]]; }, exports: function () { return [DownFileDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DownFileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _delon_theme__WEBPACK_IMPORTED_MODULE_2__["AlainThemeModule"]],
                declarations: [...DIRECTIVES],
                exports: [...DIRECTIVES]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: downFile.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=downFile.js.map

/***/ }),

/***/ "BCEH":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/guard/guard.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\n  <h1>\n    路由守卫\n  </h1>\n</div>\n<nz-button-group>\n  <button nz-button [routerLink]=\"['/delon/guard/leave']\">\n    <span>离开确认页</span>\n  </button>\n</nz-button-group>\n<nz-button-group class=\"ml-sm\">\n  <button nz-button (click)=\"setRole(true)\">\n    <span>设置管理员</span>\n  </button>\n  <button nz-button (click)=\"setRole('user1')\">\n    <span>设置员工1</span>\n  </button>\n  <button nz-button (click)=\"setRole('user2')\">\n    <span>设置员工2</span>\n  </button>\n</nz-button-group>\n<nz-button-group class=\"ml-sm\">\n  <button nz-button [routerLink]=\"['/delon/guard/auth']\">\n    <span>需要user1</span>\n  </button>\n  <button nz-button [routerLink]=\"['/delon/guard/admin']\">\n    <span>需要管理员</span>\n  </button>\n</nz-button-group>\n<p class=\"mb-lg\">当前ACL信息：{{ data | json }}</p>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "CNET":
/*!*****************************************************!*\
  !*** ./src/app/routes/delon/xlsx/xlsx.component.ts ***!
  \*****************************************************/
/*! exports provided: XlsxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XlsxComponent", function() { return XlsxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_xlsx_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./xlsx.component.html */ "zNRX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_abc_xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/abc/xlsx */ "updA");




let XlsxComponent = class XlsxComponent {
    constructor(xlsx) {
        this.xlsx = xlsx;
        this.users = Array(100)
            .fill(0)
            .map((_item, idx) => {
            return {
                id: idx + 1,
                name: `name ${idx + 1}`,
                age: Math.ceil(Math.random() * 10) + 20,
            };
        });
        this.columns = [
            { title: '编号', index: 'id', type: 'checkbox' },
            { title: '姓名', index: 'name' },
            { title: '年龄', index: 'age' },
        ];
    }
    url() {
        this.xlsx.import(`./assets/tmp/demo.xlsx`).then((res) => (this.data = res));
    }
    change(e) {
        const file = e.target.files[0];
        this.xlsx.import(file).then((res) => (this.data = res));
    }
    download() {
        const data = [this.columns.map((i) => i.title)];
        this.users.forEach((i) => data.push(this.columns.map((c) => i[c.index])));
        this.xlsx.export({
            sheets: [
                {
                    data,
                    name: 'sheet name',
                },
            ],
        });
    }
};
XlsxComponent.ctorParameters = () => [
    { type: _delon_abc_xlsx__WEBPACK_IMPORTED_MODULE_3__["XlsxService"] }
];
XlsxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-xlsx',
        template: _raw_loader_xlsx_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], XlsxComponent);



/***/ }),

/***/ "Dtqw":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/qr/qr.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\n  <h1>\n    二维码\n    <a href=\"//ng-alain.com/components/qr\" target=\"_blank\">Document</a>\n  </h1>\n</div>\n<nz-card>\n  <nz-row [nzGutter]=\"24\">\n    <nz-col [nzSpan]=\"8\" class=\"text-center\">\n      <qr\n        [value]=\"value\"\n        [background]=\"background\"\n        [backgroundAlpha]=\"backgroundAlpha\"\n        [foreground]=\"foreground\"\n        [foregroundAlpha]=\"foregroundAlpha\"\n        [level]=\"level\"\n        [mime]=\"mime\"\n        [padding]=\"padding\"\n        [size]=\"size\"\n        style=\"border: 1px solid #999;\"\n      ></qr>\n    </nz-col>\n    <nz-col [nzSpan]=\"16\">\n      <form nz-form>\n        <nz-form-item>\n          <nz-form-label [nzSpan]=\"8\">背景</nz-form-label>\n          <nz-form-control [nzSpan]=\"16\">\n            <nz-input-group>\n              <input nz-input type=\"color\" [(ngModel)]=\"background\" [ngModelOptions]=\"{ standalone: true }\" style=\"width: 100px;\" />\n              <nz-input-number\n                [(ngModel)]=\"backgroundAlpha\"\n                [nzMin]=\"0\"\n                [nzMax]=\"1\"\n                [nzStep]=\"0.1\"\n                [ngModelOptions]=\"{ standalone: true }\"\n              ></nz-input-number>\n            </nz-input-group>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSpan]=\"8\">前景</nz-form-label>\n          <nz-form-control [nzSpan]=\"16\">\n            <nz-input-group>\n              <input nz-input type=\"color\" [(ngModel)]=\"foreground\" [ngModelOptions]=\"{ standalone: true }\" style=\"width: 100px;\" />\n              <nz-input-number\n                [(ngModel)]=\"foregroundAlpha\"\n                [nzMin]=\"0\"\n                [nzMax]=\"1\"\n                [nzStep]=\"0.1\"\n                [ngModelOptions]=\"{ standalone: true }\"\n              ></nz-input-number>\n            </nz-input-group>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSpan]=\"8\">误差</nz-form-label>\n          <nz-form-control [nzSpan]=\"16\">\n            <nz-select [(ngModel)]=\"level\" [ngModelOptions]=\"{ standalone: true }\">\n              <nz-option nzValue=\"L\" nzLabel=\"L\"></nz-option>\n              <nz-option nzValue=\"M\" nzLabel=\"M\"></nz-option>\n              <nz-option nzValue=\"Q\" nzLabel=\"Q\"></nz-option>\n              <nz-option nzValue=\"H\" nzLabel=\"H\"></nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSpan]=\"8\">Mime</nz-form-label>\n          <nz-form-control [nzSpan]=\"16\">\n            <nz-select [(ngModel)]=\"mime\" [ngModelOptions]=\"{ standalone: true }\">\n              <nz-option nzValue=\"image/png\" nzLabel=\"image/png\"></nz-option>\n              <nz-option nzValue=\"image/jpeg\" nzLabel=\"image/jpeg\"></nz-option>\n              <nz-option nzValue=\"image/gif\" nzLabel=\"image/gif\"></nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSpan]=\"8\">内边距</nz-form-label>\n          <nz-form-control [nzSpan]=\"16\">\n            <nz-input-number [(ngModel)]=\"padding\" [ngModelOptions]=\"{ standalone: true }\" [nzMin]=\"0\" [nzMax]=\"100\"></nz-input-number>px\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSpan]=\"8\">大小</nz-form-label>\n          <nz-form-control [nzSpan]=\"16\">\n            <nz-input-number\n              [(ngModel)]=\"size\"\n              [ngModelOptions]=\"{ standalone: true }\"\n              [nzMin]=\"100\"\n              [nzMax]=\"1000\"\n              [nzStep]=\"padding\"\n            ></nz-input-number\n            >px\n          </nz-form-control>\n        </nz-form-item>\n      </form>\n    </nz-col>\n  </nz-row>\n</nz-card>\n");

/***/ }),

/***/ "EOpx":
/*!*************************************************!*\
  !*** ./src/app/routes/delon/st/st.component.ts ***!
  \*************************************************/
/*! exports provided: STDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STDemoComponent", function() { return STDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_st_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./st.component.html */ "baU0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");





let STDemoComponent = class STDemoComponent {
    constructor(http, message) {
        this.http = http;
        this.message = message;
        this.ps = 20;
        this.total = 200; // mock total
        this.args = { _allow_anonymous: true, userid: null };
        this.url = `https://api.randomuser.me/?results=20`;
        this.events = [];
        this.scroll = { y: '230px' };
        this.columns = [
            { title: 'id', index: 'id.value', type: 'checkbox' },
            { title: 'Avatar', index: 'picture.thumbnail', type: 'img', width: 80 },
            {
                title: 'Name',
                index: 'name.first',
                width: 150,
                format: (item) => `${item.name.first} ${item.name.last}`,
                type: 'link',
                click: (item) => this.message.info(`${item.name.first}`),
            },
            { title: 'Email', index: 'email' },
            {
                title: 'Gender',
                index: 'gender',
                type: 'yn',
                yn: {
                    truth: 'female',
                    yes: '男',
                    no: '女',
                    mode: 'text',
                },
                width: 120,
            },
            { title: 'Events', render: 'events', width: 90 },
            { title: 'Registered', index: 'registered.date', type: 'date', width: 170 },
            {
                title: 'Actions',
                width: 120,
                buttons: [
                    {
                        text: 'Edit',
                        click: (item) => this.message.info(`edit [${item.id.value}]`),
                        iif: (item) => item.gender === 'female',
                    },
                    {
                        text: 'Delete',
                        type: 'del',
                        click: (item) => this.message.info(`deleted [${item.id.value}]`),
                    },
                ],
            },
        ];
    }
    ngOnInit() {
        this.http.get('/chart/visit').subscribe((res) => (this.events = res.slice(0, 8)));
    }
    fullChange(val) {
        this.scroll = val ? { y: '350px' } : { y: '230px' };
    }
};
STDemoComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"] },
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
];
STDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-st',
        template: _raw_loader_st_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], STDemoComponent);



/***/ }),

/***/ "EjGq":
/*!**********************************************!*\
  !*** ./src/app/routes/delon/delon.module.ts ***!
  \**********************************************/
/*! exports provided: DelonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonModule", function() { return DelonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_abc_down_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/abc/down-file */ "Ah5K");
/* harmony import */ var _delon_abc_full_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/abc/full-content */ "T//C");
/* harmony import */ var _delon_abc_qr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/abc/qr */ "dMCN");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _delon_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delon-routing.module */ "m496");
/* harmony import */ var _delon_chart_mini_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/chart/mini-bar */ "DOVM");
/* harmony import */ var _acl_acl_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./acl/acl.component */ "Wwir");
/* harmony import */ var _cache_cache_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cache/cache.component */ "mXk7");
/* harmony import */ var _downfile_downfile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./downfile/downfile.component */ "K4PL");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form/form.component */ "NKVH");
/* harmony import */ var _guard_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guard/admin.component */ "zIGm");
/* harmony import */ var _guard_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guard/auth.component */ "j/h1");
/* harmony import */ var _guard_can_leave_provide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guard/can-leave.provide */ "Zcvf");
/* harmony import */ var _guard_guard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guard/guard.component */ "UpQ3");
/* harmony import */ var _guard_leave_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guard/leave.component */ "2f0N");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./print/print.component */ "3mRb");
/* harmony import */ var _qr_qr_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./qr/qr.component */ "2qzf");
/* harmony import */ var _st_st_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./st/st.component */ "EOpx");
/* harmony import */ var _util_util_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./util/util.component */ "NDEb");
/* harmony import */ var _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./xlsx/xlsx.component */ "CNET");
/* harmony import */ var _zip_zip_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./zip/zip.component */ "0amb");























const COMPONENTS = [
    _st_st_component__WEBPACK_IMPORTED_MODULE_19__["STDemoComponent"],
    _util_util_component__WEBPACK_IMPORTED_MODULE_20__["UtilComponent"],
    _print_print_component__WEBPACK_IMPORTED_MODULE_17__["PrintComponent"],
    _acl_acl_component__WEBPACK_IMPORTED_MODULE_8__["ACLComponent"],
    _guard_guard_component__WEBPACK_IMPORTED_MODULE_15__["GuardComponent"],
    _guard_leave_component__WEBPACK_IMPORTED_MODULE_16__["GuardLeaveComponent"],
    _guard_admin_component__WEBPACK_IMPORTED_MODULE_12__["GuardAdminComponent"],
    _guard_auth_component__WEBPACK_IMPORTED_MODULE_13__["GuardAuthComponent"],
    _cache_cache_component__WEBPACK_IMPORTED_MODULE_9__["CacheComponent"],
    _downfile_downfile_component__WEBPACK_IMPORTED_MODULE_10__["DownFileComponent"],
    _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_21__["XlsxComponent"],
    _zip_zip_component__WEBPACK_IMPORTED_MODULE_22__["ZipComponent"],
    _form_form_component__WEBPACK_IMPORTED_MODULE_11__["DelonFormComponent"],
    _qr_qr_component__WEBPACK_IMPORTED_MODULE_18__["QRComponent"],
];
let DelonModule = class DelonModule {
};
DelonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _delon_routing_module__WEBPACK_IMPORTED_MODULE_6__["DelonRoutingModule"], _delon_abc_down_file__WEBPACK_IMPORTED_MODULE_2__["DownFileModule"], _delon_abc_full_content__WEBPACK_IMPORTED_MODULE_3__["FullContentModule"], _delon_abc_qr__WEBPACK_IMPORTED_MODULE_4__["QRModule"], _delon_chart_mini_bar__WEBPACK_IMPORTED_MODULE_7__["G2MiniBarModule"]],
        providers: [_guard_can_leave_provide__WEBPACK_IMPORTED_MODULE_14__["CanLeaveProvide"]],
        declarations: COMPONENTS,
    })
], DelonModule);



/***/ }),

/***/ "K4PL":
/*!*************************************************************!*\
  !*** ./src/app/routes/delon/downfile/downfile.component.ts ***!
  \*************************************************************/
/*! exports provided: DownFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownFileComponent", function() { return DownFileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_downfile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./downfile.component.html */ "UhTn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let DownFileComponent = class DownFileComponent {
    constructor() {
        this.fileTypes = ['.xlsx', '.docx', '.pptx', '.pdf'];
        this.data = {
            otherdata: 1,
            time: new Date(),
        };
    }
};
DownFileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-down-file',
        template: _raw_loader_downfile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DownFileComponent);



/***/ }),

/***/ "NDEb":
/*!*****************************************************!*\
  !*** ./src/app/routes/delon/util/util.component.ts ***!
  \*****************************************************/
/*! exports provided: UtilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilComponent", function() { return UtilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_util_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./util.component.html */ "k4Ad");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");






let UtilComponent = class UtilComponent {
    constructor(messageSrv) {
        this.messageSrv = messageSrv;
        // region: string
        // tslint:disable-next-line: no-invalid-template-strings
        this.format_str = 'this is ${name}';
        this.format_res = '';
        this.format_obj = JSON.stringify({ name: 'asdf' });
        // endregion
        // region: other
        this.content = `time ${+new Date()}

    中文！@#￥%……&*`;
    }
    onFormat() {
        let obj = null;
        try {
            obj = JSON.parse(this.format_obj);
        }
        catch (_a) {
            this.messageSrv.error(`无法使用 JSON.parse 转换`);
            return;
        }
        this.format_res = Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["format"])(this.format_str, obj, true);
    }
    onYuan(value) {
        this.yuan_res = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["yuan"])(value);
    }
    onCopy() {
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["copy"])(`time ${+new Date()}`).then(() => this.messageSrv.success(`success`));
    }
};
UtilComponent.ctorParameters = () => [
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] }
];
UtilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-util',
        template: _raw_loader_util_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UtilComponent);



/***/ }),

/***/ "NKVH":
/*!*****************************************************!*\
  !*** ./src/app/routes/delon/form/form.component.ts ***!
  \*****************************************************/
/*! exports provided: DelonFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonFormComponent", function() { return DelonFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./form.component.html */ "xzsX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let DelonFormComponent = class DelonFormComponent {
    constructor() {
        this.params = {};
        this.url = `/user`;
        this.searchSchema = {
            properties: {
                no: {
                    type: 'string',
                    title: '编号',
                },
            },
        };
        this.columns = [
            { title: '编号', index: 'no' },
            { title: '调用次数', type: 'number', index: 'callNo' },
            { title: '头像', type: 'img', width: '50px', index: 'avatar' },
            { title: '时间', type: 'date', index: 'updatedAt' },
        ];
    }
};
DelonFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-delon-form',
        template: _raw_loader_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DelonFormComponent);



/***/ }),

/***/ "O5wR":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/print/print.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\n  <h1>\n    Lodop打印\n    <small\n      >更多体验请至\n      <a href=\"https://ng-alain.com/components/lodop\" target=\"_blank\">ng-alain.com</a>\n    </small>\n  </h1>\n</div>\n<nz-card>\n  <nz-alert *ngIf=\"error\" [nzType]=\"'warning'\" [nzMessage]=\"message\">\n    <ng-template #message>\n      请先下载\n      <a href=\"http://c-lodop.com/download.html\" target=\"_blank\">Lodop插件</a>。\n    </ng-template>\n  </nz-alert>\n  <form *ngIf=\"!error\" nz-form>\n    <nz-form-item nz-row>\n      <nz-form-label nz-col [nzSm]=\"6\">打印服务器</nz-form-label>\n      <nz-form-control nz-col [nzSm]=\"18\">\n        <nz-input-group>\n          <div nz-col [nzSpan]=\"16\">\n            <input nz-input nzPlaceHolder=\"https://localhost:8443/CLodopfuncs.js\" [(ngModel)]=\"cog.url\" name=\"url\" />\n          </div>\n          <div nz-col [nzSpan]=\"8\">\n            <button nz-button (click)=\"reload(null)\">重新加载打印机</button>\n          </div>\n        </nz-input-group>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item nz-row>\n      <nz-form-label nz-col [nzSm]=\"6\">打印机</nz-form-label>\n      <nz-form-control nz-col [nzSm]=\"18\">\n        <nz-select\n          style=\"width:90%;\"\n          nzPlaceHolder=\"请选择打印机\"\n          nzShowSearch\n          nzAllowClear\n          [(ngModel)]=\"cog.printer\"\n          name=\"printer\"\n          (ngModelChange)=\"changePinter($event)\"\n        >\n          <nz-option *ngFor=\"let name of pinters\" [nzLabel]=\"name\" [nzValue]=\"name\"> </nz-option>\n        </nz-select>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item nz-row>\n      <nz-form-label nz-col [nzSm]=\"6\">纸张类型</nz-form-label>\n      <nz-form-control nz-col [nzSm]=\"18\">\n        <nz-select\n          style=\"width:90%;\"\n          nzPlaceHolder=\"请选择纸张类型\"\n          nzShowSearch\n          nzAllowClear\n          [(ngModel)]=\"cog.paper\"\n          name=\"paper\"\n        >\n          <nz-option *ngFor=\"let name of papers\" [nzLabel]=\"name\" [nzValue]=\"name\"> </nz-option>\n        </nz-select>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item nz-row>\n      <nz-form-label nz-col [nzSm]=\"6\">打印内容</nz-form-label>\n      <nz-form-control nz-col [nzSm]=\"18\">\n        <textarea nz-input [(ngModel)]=\"cog.html\" name=\"html\" nzAutosize></textarea>\n        <div nz-form-extra>仅限HTML，更多类型支持请参考官网</div>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item nz-row>\n      <nz-form-control nz-col [nzSm]=\"18\" [nzOffset]=\"6\">\n        <button nz-button (click)=\"print(true)\" [nzLoading]=\"printing\">打印预览</button>\n        <button nz-button (click)=\"print()\" [nzLoading]=\"printing\">直接打印</button>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n</nz-card>\n");

/***/ }),

/***/ "OIiY":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/cache/cache.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\n  <h1>\n    Cache 缓存,\n    <a href=\"https://ng-alain.com/components/cache\" target=\"_blank\">Document</a>\n  </h1>\n</div>\n<nz-card nzTitle=\"Service\">\n  <button nz-button (click)=\"set()\">设置</button>\n  <button nz-button (click)=\"get()\" class=\"ml-sm\">获取</button>\n</nz-card>\n");

/***/ }),

/***/ "T//C":
/*!**********************************************************************!*\
  !*** ./node_modules/@delon/abc/__ivy_ngcc__/fesm2015/fullContent.js ***!
  \**********************************************************************/
/*! exports provided: FullContentComponent, FullContentModule, FullContentService, FullContentToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullContentComponent", function() { return FullContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullContentModule", function() { return FullContentModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullContentService", function() { return FullContentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullContentToggleDirective", function() { return FullContentToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








/**
 * @fileoverview added by tsickle
 * Generated from: full-content.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



const _c0 = ["*"];
class FullContentService {
    constructor() {
        this._change = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
    }
    /**
     * 切换全屏工作区状态
     * @return {?}
     */
    toggle() {
        this._change.next(true);
    }
    /**
     * @return {?}
     */
    get change() {
        return this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
    }
}
FullContentService.ɵfac = function FullContentService_Factory(t) { return new (t || FullContentService)(); };
/** @nocollapse */ FullContentService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function FullContentService_Factory() { return new FullContentService(); }, token: FullContentService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: full-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const wrapCls = `full-content__body`;
/** @type {?} */
const openedCls = `full-content__opened`;
/** @type {?} */
const hideTitleCls = `full-content__hidden-title`;
class FullContentComponent {
    /**
     * @param {?} el
     * @param {?} cdr
     * @param {?} srv
     * @param {?} router
     * @param {?} doc
     */
    constructor(el, cdr, srv, router, doc) {
        this.el = el;
        this.cdr = cdr;
        this.srv = srv;
        this.router = router;
        this.doc = doc;
        this.inited = false;
        this.id = `_full-content-${Math.random().toString(36).substring(2)}`;
        this.scroll$ = null;
        this._height = 0;
        this.hideTitle = true;
        this.padding = 24;
        this.fullscreenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @private
     * @return {?}
     */
    updateCls() {
        /** @type {?} */
        const clss = this.bodyEl.classList;
        if (this.fullscreen) {
            clss.add(openedCls);
            if (this.hideTitle) {
                clss.add(hideTitleCls);
            }
        }
        else {
            clss.remove(openedCls);
            if (this.hideTitle) {
                clss.remove(hideTitleCls);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    update() {
        this.updateCls();
        this.updateHeight();
        this.fullscreenChange.emit(this.fullscreen);
    }
    /**
     * @private
     * @return {?}
     */
    updateHeight() {
        this._height = this.bodyEl.getBoundingClientRect().height - this.el.nativeElement.getBoundingClientRect().top - this.padding;
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    removeInBody() {
        this.bodyEl.classList.remove(wrapCls, openedCls, hideTitleCls);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.inited = true;
        this.bodyEl = this.doc.querySelector('body');
        this.bodyEl.classList.add(wrapCls);
        this.el.nativeElement.id = this.id;
        this.updateCls();
        // when window resize
        this.scroll$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'resize')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200))
            .subscribe((/**
         * @return {?}
         */
        () => this.updateHeight()));
        // when servier changed
        this.srv$ = this.srv.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
         * @param {?} res
         * @return {?}
         */
        res => res !== null))).subscribe((/**
         * @return {?}
         */
        () => this.toggle()));
        // when router changed
        this.route$ = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivationStart"] || e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivationEnd"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (!!this.doc.querySelector('#' + this.id)) {
                this.bodyEl.classList.add(wrapCls);
                this.updateCls();
            }
            else {
                this.removeInBody();
            }
        }));
    }
    /**
     * @return {?}
     */
    toggle() {
        this.fullscreen = !this.fullscreen;
        this.update();
        this.updateHeight();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => this.updateHeight()));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.inited)
            this.update();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeInBody();
        (/** @type {?} */ (this.scroll$)).unsubscribe();
        this.srv$.unsubscribe();
        this.route$.unsubscribe();
    }
}
FullContentComponent.ɵfac = function FullContentComponent_Factory(t) { return new (t || FullContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](FullContentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
FullContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FullContentComponent, selectors: [["full-content"]], hostVars: 4, hostBindings: function FullContentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx._height, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("full-content", true);
    } }, inputs: { hideTitle: "hideTitle", padding: "padding", fullscreen: "fullscreen" }, outputs: { fullscreenChange: "fullscreenChange" }, exportAs: ["fullContent"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function FullContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
FullContentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: FullContentService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
FullContentComponent.propDecorators = {
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    hideTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    fullscreenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], FullContentComponent.prototype, "fullscreen", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], FullContentComponent.prototype, "hideTitle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], FullContentComponent.prototype, "padding", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FullContentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FullContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'full-content',
                exportAs: 'fullContent',
                template: ` <ng-content></ng-content> `,
                host: {
                    '[class.full-content]': 'true',
                    '[style.height.px]': '_height'
                },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: FullContentService }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, { hideTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], fullscreenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], fullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: full-content-toggle.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FullContentToggleDirective {
    /**
     * @param {?} parent
     */
    constructor(parent) {
        this.parent = parent;
    }
    /**
     * @return {?}
     */
    _click() {
        this.parent.toggle();
    }
}
FullContentToggleDirective.ɵfac = function FullContentToggleDirective_Factory(t) { return new (t || FullContentToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](FullContentComponent)); };
FullContentToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: FullContentToggleDirective, selectors: [["", "full-toggle", ""]], hostBindings: function FullContentToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FullContentToggleDirective_click_HostBindingHandler() { return ctx._click(); });
    } }, exportAs: ["fullToggle"] });
/** @nocollapse */
FullContentToggleDirective.ctorParameters = () => [
    { type: FullContentComponent }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FullContentToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[full-toggle]',
                exportAs: 'fullToggle',
                host: {
                    '(click)': '_click()'
                }
            }]
    }], function () { return [{ type: FullContentComponent }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: full-content.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [FullContentComponent, FullContentToggleDirective];
class FullContentModule {
}
FullContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FullContentModule });
FullContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function FullContentModule_Factory(t) { return new (t || FullContentModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_4__["DelonUtilModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FullContentModule, { declarations: function () { return [FullContentComponent, FullContentToggleDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_4__["DelonUtilModule"]]; }, exports: function () { return [FullContentComponent, FullContentToggleDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FullContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_4__["DelonUtilModule"]],
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
 * Generated from: fullContent.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=fullContent.js.map

/***/ }),

/***/ "UhTn":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/downfile/downfile.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\n  <h1>Download a file</h1>\n</div>\n<nz-card nzTitle=\"DEMO\">\n  <button\n    nz-button\n    *ngFor=\"let i of fileTypes\"\n    class=\"mr-sm\"\n    down-file\n    [http-data]=\"data\"\n    http-url=\"assets/tmp/demo{{ i }}\"\n    file-name=\"demo中文\"\n  >\n    {{ i }}\n  </button>\n</nz-card>\n");

/***/ }),

/***/ "UpQ3":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/guard/guard.component.ts ***!
  \*******************************************************/
/*! exports provided: GuardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardComponent", function() { return GuardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_guard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./guard.component.html */ "BCEH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/acl */ "atJ9");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "Ac7g");






let GuardComponent = class GuardComponent {
    constructor(aclSrv, menuSrv, router) {
        this.aclSrv = aclSrv;
        this.menuSrv = menuSrv;
        this.router = router;
    }
    get data() {
        return this.aclSrv.data;
    }
    setRole(value) {
        this.aclSrv.setFull(typeof value === 'boolean' ? value : false);
        this.aclSrv.set({ role: [value] });
        this.menuSrv.resume();
        this.router.navigate(['/delon/guard']);
    }
};
GuardComponent.ctorParameters = () => [
    { type: _delon_acl__WEBPACK_IMPORTED_MODULE_4__["ACLService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["MenuService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GuardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-guard',
        template: _raw_loader_guard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], GuardComponent);



/***/ }),

/***/ "Wwir":
/*!***************************************************!*\
  !*** ./src/app/routes/delon/acl/acl.component.ts ***!
  \***************************************************/
/*! exports provided: ACLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACLComponent", function() { return ACLComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_acl_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./acl.component.html */ "aF9H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/acl */ "atJ9");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "Ac7g");





let ACLComponent = class ACLComponent {
    constructor(aclSrv, menuSrv) {
        this.aclSrv = aclSrv;
        this.menuSrv = menuSrv;
        this.full = true;
        this.roleA = '';
        this.roleB = '';
    }
    get data() {
        return this.aclSrv.data;
    }
    reMenu() {
        this.menuSrv.resume();
    }
    toggleFull() {
        this.full = !this.full;
        this.aclSrv.setFull(this.full);
        this.reMenu();
    }
    toggleRoleA() {
        this.full = false;
        this.roleA = this.roleA === 'role-a' ? '' : 'role-a';
        this.aclSrv.setFull(this.full);
        this.aclSrv.setRole([this.roleA]);
        this.reMenu();
    }
    toggleRoleB() {
        this.full = false;
        this.roleB = this.roleB === 'role-b' ? '' : 'role-b';
        this.aclSrv.setFull(this.full);
        this.aclSrv.setRole([this.roleB]);
        this.reMenu();
    }
};
ACLComponent.ctorParameters = () => [
    { type: _delon_acl__WEBPACK_IMPORTED_MODULE_3__["ACLService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["MenuService"] }
];
ACLComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-acl',
        template: _raw_loader_acl_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ACLComponent);



/***/ }),

/***/ "Zcvf":
/*!*********************************************************!*\
  !*** ./src/app/routes/delon/guard/can-leave.provide.ts ***!
  \*********************************************************/
/*! exports provided: CanLeaveProvide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanLeaveProvide", function() { return CanLeaveProvide; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




let CanLeaveProvide = class CanLeaveProvide {
    constructor(confirmSrv) {
        this.confirmSrv = confirmSrv;
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            this.confirmSrv.confirm({
                nzTitle: '确认要离开吗？',
                nzContent: '你已经填写了部分表单离开会放弃已经填写的内容。',
                nzOkText: '离开',
                nzCancelText: '取消',
                nzOnOk: () => {
                    observer.next(true);
                    observer.complete();
                },
                nzOnCancel: () => {
                    observer.next(false);
                    observer.complete();
                },
            });
        });
    }
};
CanLeaveProvide.ctorParameters = () => [
    { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalService"] }
];
CanLeaveProvide = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CanLeaveProvide);



/***/ }),

/***/ "aF9H":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/acl/acl.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\n  <h1>\n    ACL 访问控制\n    <small\n      >注意观察左边的菜单；ACLService提供一个完整的基于角色的访问控制的服务，若需要支持路由守卫，请配合ACLService与Route\n      Guard配合简便实现。</small\n    >\n  </h1>\n</div>\n<div nz-row [nzGutter]=\"8\">\n  <div nz-col [nzSpan]=\"24\">\n    <nz-card nzTitle=\"按钮粒度\">\n      ACL原始数据：{{ data | json }}\n      <button nz-button [acl]=\"'role-a'\">role-a</button>\n      <button nz-button [acl]=\"'role-b'\" class=\"ml-sm\">role-b</button>\n    </nz-card>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"8\">\n  <div nz-col [nzSpan]=\"8\">\n    <nz-card nzTitle=\"全量\">\n      <button nz-button (click)=\"toggleFull()\">\n        <span>{{ full ? '离开' : '设置' }}权限</span>\n      </button>\n      <p class=\"pt-md\">全量类指系统管理员角色，无任何受限。</p>\n    </nz-card>\n  </div>\n  <div nz-col [nzSpan]=\"8\">\n    <nz-card nzTitle=\"角色[role-a]\">\n      <button nz-button (click)=\"toggleRoleA()\">\n        <span>{{ roleA.length > 0 ? '离开' : '设置' }}权限</span>\n      </button>\n    </nz-card>\n  </div>\n  <div nz-col [nzSpan]=\"8\">\n    <nz-card nzTitle=\"角色[role-b]\">\n      <button nz-button (click)=\"toggleRoleB()\">\n        <span>{{ roleB.length > 0 ? '离开' : '设置' }}权限</span>\n      </button>\n    </nz-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "baU0":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/st/st.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\n  <h1>\n    Fullscreen & ST\n    <small\n      >使用 <a href=\"//ng-alain.com/components/table\" target=\"_blank\">st</a>、\n      <a href=\"//ng-alain.com/components/full-content\" target=\"_blank\">full-content</a> 组合，由于 nz-table\n      固定表头暂不支持自适应，因此表格的展示的效果在响应式里面效果并不是特别好。</small\n    >\n  </h1>\n</div>\n<full-content (fullscreenChange)=\"fullChange($event)\">\n  <nz-card>\n    <div nz-row class=\"mb-md\">\n      <div nz-col nzSpan=\"12\">\n        <form nz-form nzLayout=\"inline\" se-container>\n          <se label=\"User ID\" labelWidth=\"0\">\n            <input nz-input [(ngModel)]=\"args.userid\" name=\"userid\" id=\"userid\" />\n          </se>\n          <se>\n            <button nz-button [nzType]=\"'primary'\" (click)=\"st.load()\" [nzLoading]=\"http.loading\">Search</button>\n            <button nz-button (click)=\"st.load(1, { _allow_anonymous: true })\" [disabled]=\"http.loading\">Clear</button>\n          </se>\n        </form>\n      </div>\n      <div nz-col nzSpan=\"12\">\n        <div class=\"text-right\">\n          <button nz-button nz-dropdown [nzDropdownMenu]=\"exportMenu\">\n            <span>Export</span>\n            <i nz-icon nzType=\"down\"></i>\n          </button>\n          <nz-dropdown-menu #exportMenu=\"nzDropdownMenu\">\n            <ul nz-menu>\n              <li nz-menu-item>Excel</li>\n              <li nz-menu-item>JSON</li>\n              <li nz-menu-item>PNG</li>\n            </ul>\n          </nz-dropdown-menu>\n          <button nz-button [nzType]=\"'default'\" full-toggle class=\"ml-sm\">Full</button>\n        </div>\n      </div>\n    </div>\n    <st\n      #st\n      [data]=\"url\"\n      [req]=\"{ params: args }\"\n      [res]=\"{ reName: { list: 'results' } }\"\n      [total]=\"total\"\n      [ps]=\"ps\"\n      [columns]=\"columns\"\n      [scroll]=\"scroll\"\n    >\n      <ng-template st-row=\"events\" let-item let-index=\"index\">\n        <g2-mini-bar\n          height=\"15\"\n          theme=\"mini\"\n          color=\"#999\"\n          borderWidth=\"3\"\n          [padding]=\"[0, 0, 0, 0]\"\n          [data]=\"events\"\n          tooltipType=\"mini\"\n        ></g2-mini-bar>\n      </ng-template>\n    </st>\n  </nz-card>\n</full-content>\n");

/***/ }),

/***/ "dMCN":
/*!*************************************************************!*\
  !*** ./node_modules/@delon/abc/__ivy_ngcc__/fesm2015/qr.js ***!
  \*************************************************************/
/*! exports provided: QRComponent, QRModule, QR_DEFULAT_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRComponent", function() { return QRComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRModule", function() { return QRModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_DEFULAT_CONFIG", function() { return QR_DEFULAT_CONFIG; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







/**
 * @fileoverview added by tsickle
 * Generated from: qr.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */





function QRComponent_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.dataURL, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
const QR_DEFULAT_CONFIG = {
    lib: `https://cdn.bootcdn.net/ajax/libs/qrious/4.0.2/qrious.min.js`,
    background: 'white',
    backgroundAlpha: 1,
    foreground: 'black',
    foregroundAlpha: 1,
    level: 'L',
    mime: 'image/png',
    padding: 10,
    size: 220,
    delay: 0,
};

/**
 * @fileoverview added by tsickle
 * Generated from: qr.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class QRComponent {
    /**
     * @param {?} cdr
     * @param {?} configSrv
     * @param {?} lazySrv
     * @param {?} platform
     */
    constructor(cdr, configSrv, lazySrv, platform) {
        this.cdr = cdr;
        this.lazySrv = lazySrv;
        this.platform = platform;
        this.inited = false;
        this.value = '';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cog = (/** @type {?} */ (configSrv.merge('qr', QR_DEFULAT_CONFIG)));
        Object.assign(this, this.cog);
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!this.inited) {
            return;
        }
        if (this.qr == null) {
            this.qr = new ((/** @type {?} */ (window))).QRious();
        }
        this.qr.set(this.option);
        this.dataURL = this.qr.toDataURL();
        this.change.emit(this.dataURL);
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    initDelay() {
        this.inited = true;
        setTimeout((/**
         * @return {?}
         */
        () => this.init()), this.delay);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        if (((/** @type {?} */ (window))).QRious) {
            this.initDelay();
            return;
        }
        /** @type {?} */
        const url = (/** @type {?} */ (this.cog.lib));
        this.lazy$ = this.lazySrv.change
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((/**
         * @param {?} ls
         * @return {?}
         */
        ls => ls.length === 1 && ls[0].path === url && ls[0].status === 'ok')))
            .subscribe((/**
         * @return {?}
         */
        () => this.initDelay()));
        this.lazySrv.load(url);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        /** @type {?} */
        const option = {
            background: this.background,
            backgroundAlpha: this.backgroundAlpha,
            foreground: this.foreground,
            foregroundAlpha: this.foregroundAlpha,
            level: this.level,
            mime: this.mime,
            padding: this.padding,
            size: this.size,
            value: this.toUtf8ByteArray(this.value),
        };
        this.option = option;
        this.init();
    }
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    toUtf8ByteArray(str) {
        str = encodeURI(str);
        /** @type {?} */
        const result = [];
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) !== '%') {
                result.push(str.charCodeAt(i));
            }
            else {
                result.push(parseInt(str.substr(i + 1, 2), 16));
                i += 2;
            }
        }
        return result.map((/**
         * @param {?} v
         * @return {?}
         */
        v => String.fromCharCode(v))).join('');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.lazy$) {
            this.lazy$.unsubscribe();
        }
    }
}
QRComponent.ɵfac = function QRComponent_Factory(t) { return new (t || QRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_delon_util__WEBPACK_IMPORTED_MODULE_3__["AlainConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_delon_util__WEBPACK_IMPORTED_MODULE_3__["LazyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"])); };
QRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QRComponent, selectors: [["qr"]], hostVars: 6, hostBindings: function QRComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", "inline-block")("height", ctx.size, "px")("width", ctx.size, "px");
    } }, inputs: { value: "value", background: "background", backgroundAlpha: "backgroundAlpha", foreground: "foreground", foregroundAlpha: "foregroundAlpha", level: "level", mime: "mime", padding: "padding", size: "size", delay: "delay" }, outputs: { change: "change" }, exportAs: ["qr"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["style", "max-width: 100%; max-height: 100%;", 3, "src", 4, "ngIf"], [2, "max-width", "100%", "max-height", "100%", 3, "src"]], template: function QRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, QRComponent_img_0_Template, 1, 1, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dataURL);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
QRComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _delon_util__WEBPACK_IMPORTED_MODULE_3__["AlainConfigService"] },
    { type: _delon_util__WEBPACK_IMPORTED_MODULE_3__["LazyService"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }
];
QRComponent.propDecorators = {
    background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    backgroundAlpha: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    foreground: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    foregroundAlpha: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], QRComponent.prototype, "padding", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], QRComponent.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], QRComponent.prototype, "delay", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'qr',
                exportAs: 'qr',
                template: ` <img *ngIf="dataURL" style="max-width: 100%; max-height: 100%;" [src]="dataURL" /> `,
                host: {
                    '[style.display]': `'inline-block'`,
                    '[style.height.px]': 'size',
                    '[style.width.px]': 'size'
                },
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _delon_util__WEBPACK_IMPORTED_MODULE_3__["AlainConfigService"] }, { type: _delon_util__WEBPACK_IMPORTED_MODULE_3__["LazyService"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], background: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], backgroundAlpha: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], foreground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], foregroundAlpha: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: qr.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function QROptions() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: qr.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [QRComponent];
class QRModule {
}
QRModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: QRModule });
QRModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function QRModule_Factory(t) { return new (t || QRModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QRModule, { declarations: function () { return [QRComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"]]; }, exports: function () { return [QRComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QRModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _delon_util__WEBPACK_IMPORTED_MODULE_3__["DelonUtilModule"]],
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
 * Generated from: qr.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=qr.js.map

/***/ }),

/***/ "fQwY":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/zip/zip.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\n  <h1>\n    Read & Write zip file,\n    <a href=\"//ng-alain.com/components/zip\" target=\"_blank\">Document</a>\n  </h1>\n</div>\n<nz-card nzTitle=\"解压\" *ngIf=\"instance\">\n  <button nz-button (click)=\"url()\">Via Url</button>\n  <input type=\"file\" (change)=\"change($event)\" multiple=\"false\" class=\"ml-sm\" />\n  <ol>\n    <li *ngFor=\"let i of list\">{{ i | json }}</li>\n  </ol>\n</nz-card>\n<nz-card nzTitle=\"压缩\" *ngIf=\"instance\">\n  <button nz-button (click)=\"data.push({})\" [nzType]=\"'primary'\">new</button>\n  <button nz-button (click)=\"download()\" class=\"ml-sm\">download</button>\n  <nz-table [nzData]=\"data\" [nzFrontPagination]=\"false\" [nzShowPagination]=\"false\" class=\"mt-sm\">\n    <thead>\n      <tr>\n        <th>\n          <span>path</span>\n        </th>\n        <th>\n          <span>url</span>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let i of data; let index = index\">\n        <td>\n          <input nz-input [(ngModel)]=\"i.path\" name=\"path{{ index }}\" />\n        </td>\n        <td>\n          <input nz-input [(ngModel)]=\"i.url\" name=\"url{{ index }}\" />\n        </td>\n      </tr>\n    </tbody>\n  </nz-table>\n</nz-card>\n");

/***/ }),

/***/ "j/h1":
/*!******************************************************!*\
  !*** ./src/app/routes/delon/guard/auth.component.ts ***!
  \******************************************************/
/*! exports provided: GuardAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardAuthComponent", function() { return GuardAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let GuardAuthComponent = class GuardAuthComponent {
};
GuardAuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guard-auth',
        template: `
    <p>这是一个user1页面</p>
  `,
    })
], GuardAuthComponent);



/***/ }),

/***/ "k4Ad":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/util/util.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\n  <h1>\n    工具集\n    <small>@delon/util 日常用法。</small>\n  </h1>\n</div>\n<nz-row [nzGutter]=\"16\">\n  <nz-col [nzSpan]=\"12\">\n    <nz-card nzTitle=\"字符串类\">\n      <nz-card nzType=\"inner\" nzTitle=\"format\">\n        <form nz-form>\n          <nz-form-item>\n            <nz-form-label [nzSm]=\"8\">String</nz-form-label>\n            <nz-form-control [nzSm]=\"16\">\n              <input nz-input [(ngModel)]=\"format_str\" [ngModelOptions]=\"{ standalone: true }\" />\n            </nz-form-control>\n          </nz-form-item>\n          <nz-form-item>\n            <nz-form-label [nzSm]=\"8\">Object</nz-form-label>\n            <nz-form-control [nzSm]=\"16\">\n              <input nz-input [(ngModel)]=\"format_obj\" [ngModelOptions]=\"{ standalone: true }\" />\n            </nz-form-control>\n          </nz-form-item>\n          <nz-form-item>\n            <nz-form-control [nzSpan]=\"16\" [nzOffset]=\"8\">\n              <button (click)=\"onFormat()\" nz-button>Run</button>\n            </nz-form-control>\n          </nz-form-item>\n          <nz-form-item>\n            <nz-form-label [nzSm]=\"8\">Result</nz-form-label>\n            <nz-form-control [nzSm]=\"16\">\n              {{ format_res }}\n            </nz-form-control>\n          </nz-form-item>\n        </form>\n      </nz-card>\n      <nz-card nzType=\"inner\" nzTitle=\"yuan\">\n        <nz-row [nzGutter]=\"16\">\n          <nz-col [nzSpan]=\"12\">\n            <input type=\"number\" nz-input [(ngModel)]=\"yuan_str\" (ngModelChange)=\"onYuan($event)\" />\n          </nz-col>\n          <nz-col [nzSpan]=\"12\">\n            <div [innerHTML]=\"yuan_res\"></div>\n          </nz-col>\n        </nz-row>\n      </nz-card>\n    </nz-card>\n  </nz-col>\n  <nz-col [nzSpan]=\"12\">\n    <nz-card nzTitle=\"其它类\">\n      <button nz-button (click)=\"onCopy()\">Copy</button>\n    </nz-card>\n  </nz-col>\n</nz-row>\n");

/***/ }),

/***/ "luDG":
/*!******************************************************************!*\
  !*** ./node_modules/@delon/cache/__ivy_ngcc__/fesm2015/cache.js ***!
  \******************************************************************/
/*! exports provided: CacheService, DelonCacheModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonCacheModule", function() { return DelonCacheModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DC_STORE_STORAGE_TOKEN; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/addSeconds */ "Ctv7");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");








/**
 * @fileoverview added by tsickle
 * Generated from: src/interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */



function ICache() { }
if (false) {}
/**
 * @record
 */
function ICacheStore() { }
if (false) {}
/**
 * @record
 */
function CacheNotifyResult() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/local-storage-cache.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DC_STORE_STORAGE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('DC_STORE_STORAGE_TOKEN', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    () => new LocalStorageCacheService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]))),
});
class LocalStorageCacheService {
    /**
     * @param {?} platform
     */
    constructor(platform) {
        this.platform = platform;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        if (!this.platform.isBrowser) {
            return null;
        }
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        if (!this.platform.isBrowser) {
            return true;
        }
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        if (!this.platform.isBrowser) {
            return;
        }
        localStorage.removeItem(key);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cache.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CacheService {
    /**
     * @param {?} cogSrv
     * @param {?} store
     * @param {?} http
     */
    constructor(cogSrv, store, http) {
        this.store = store;
        this.http = http;
        this.memory = new Map();
        this.notifyBuffer = new Map();
        this.meta = new Set();
        this.freqTick = 3000;
        this.cog = (/** @type {?} */ (cogSrv.merge('cache', {
            mode: 'promise',
            reName: '',
            prefix: '',
            meta_key: '__cache_meta',
        })));
        this.loadMeta();
        this.startExpireNotify();
    }
    /**
     * @private
     * @param {?} obj
     * @param {?} path
     * @param {?=} defaultValue
     * @return {?}
     */
    deepGet(obj, path, defaultValue) {
        if (!obj)
            return defaultValue;
        if (path.length <= 1) {
            /** @type {?} */
            const checkObj = path.length ? obj[path[0]] : obj;
            return typeof checkObj === 'undefined' ? defaultValue : checkObj;
        }
        return path.reduce((/**
         * @param {?} o
         * @param {?} k
         * @return {?}
         */
        (o, k) => o[k]), obj) || defaultValue;
    }
    // #region meta
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    pushMeta(key) {
        if (this.meta.has(key))
            return;
        this.meta.add(key);
        this.saveMeta();
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    removeMeta(key) {
        if (!this.meta.has(key))
            return;
        this.meta.delete(key);
        this.saveMeta();
    }
    /**
     * @private
     * @return {?}
     */
    loadMeta() {
        /** @type {?} */
        const ret = this.store.get((/** @type {?} */ (this.cog.meta_key)));
        if (ret && ret.v) {
            ((/** @type {?} */ (ret.v))).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => this.meta.add(key)));
        }
    }
    /**
     * @private
     * @return {?}
     */
    saveMeta() {
        /** @type {?} */
        const metaData = [];
        this.meta.forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => metaData.push(key)));
        this.store.set((/** @type {?} */ (this.cog.meta_key)), { v: metaData, e: 0 });
    }
    /**
     * @return {?}
     */
    getMeta() {
        return this.meta;
    }
    /**
     * 缓存对象
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    set(key, data, options = {}) {
        /** @type {?} */
        let e = 0;
        const { type, expire } = this.cog;
        options = Object.assign({ type,
            expire }, options);
        if (options.expire) {
            e = Object(date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), options.expire).valueOf();
        }
        if (!(data instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])) {
            this.save((/** @type {?} */ (options.type)), key, { v: data, e });
            return;
        }
        return data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
            this.save((/** @type {?} */ (options.type)), key, { v, e });
        })));
    }
    /**
     * @private
     * @param {?} type
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    save(type, key, value) {
        if (type === 'm') {
            this.memory.set(key, value);
        }
        else {
            this.store.set(this.cog.prefix + key, value);
            this.pushMeta(key);
        }
        this.runNotify(key, 'set');
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    get(key, options = {}) {
        /** @type {?} */
        const isPromise = options.mode !== 'none' && this.cog.mode === 'promise';
        /** @type {?} */
        const value = this.memory.has(key) ? ((/** @type {?} */ (this.memory.get(key)))) : this.store.get(this.cog.prefix + key);
        if (!value || (value.e && value.e > 0 && value.e < new Date().valueOf())) {
            if (isPromise) {
                return this.http.get(key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
                 * @param {?} ret
                 * @return {?}
                 */
                (ret) => this.deepGet(ret, (/** @type {?} */ (this.cog.reName)), null))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((/**
                 * @param {?} v
                 * @return {?}
                 */
                v => this.set(key, v, { type: (/** @type {?} */ (options.type)), expire: options.expire }))));
            }
            return null;
        }
        return isPromise ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(value.v) : value.v;
    }
    /**
     * 获取缓存数据，若 `key` 不存在或已过期则返回 null
     * @param {?} key
     * @return {?}
     */
    getNone(key) {
        return this.get(key, { mode: 'none' });
    }
    /**
     * 获取缓存，若不存在则设置缓存对象
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    tryGet(key, data, options = {}) {
        /** @type {?} */
        const ret = this.getNone(key);
        if (ret === null) {
            if (!(data instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])) {
                this.set(key, data, (/** @type {?} */ (options)));
                return data;
            }
            return this.set(key, (/** @type {?} */ (data)), (/** @type {?} */ (options)));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(ret);
    }
    // #endregion
    // #region has
    /**
     * 是否缓存 `key`
     * @param {?} key
     * @return {?}
     */
    has(key) {
        return this.memory.has(key) || this.meta.has(key);
    }
    // #endregion
    // #region remove
    /**
     * @private
     * @param {?} key
     * @param {?} needNotify
     * @return {?}
     */
    _remove(key, needNotify) {
        if (needNotify)
            this.runNotify(key, 'remove');
        if (this.memory.has(key)) {
            this.memory.delete(key);
            return;
        }
        this.store.remove(this.cog.prefix + key);
        this.removeMeta(key);
    }
    /**
     * 移除缓存
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        this._remove(key, true);
    }
    /**
     * 清空所有缓存
     * @return {?}
     */
    clear() {
        this.notifyBuffer.forEach((/**
         * @param {?} _v
         * @param {?} k
         * @return {?}
         */
        (_v, k) => this.runNotify(k, 'remove')));
        this.memory.clear();
        this.meta.forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => this.store.remove(this.cog.prefix + key)));
    }
    // #endregion
    // #region notify
    /**
     * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
     * @param {?} value
     * @return {?}
     */
    set freq(value) {
        this.freqTick = Math.max(20, value);
        this.abortExpireNotify();
        this.startExpireNotify();
    }
    /**
     * @private
     * @return {?}
     */
    startExpireNotify() {
        this.checkExpireNotify();
        this.runExpireNotify();
    }
    /**
     * @private
     * @return {?}
     */
    runExpireNotify() {
        this.freqTime = setTimeout((/**
         * @return {?}
         */
        () => {
            this.checkExpireNotify();
            this.runExpireNotify();
        }), this.freqTick);
    }
    /**
     * @private
     * @return {?}
     */
    checkExpireNotify() {
        /** @type {?} */
        const removed = [];
        this.notifyBuffer.forEach((/**
         * @param {?} _v
         * @param {?} key
         * @return {?}
         */
        (_v, key) => {
            if (this.has(key) && this.getNone(key) === null)
                removed.push(key);
        }));
        removed.forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            this.runNotify(key, 'expire');
            this._remove(key, false);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    abortExpireNotify() {
        clearTimeout(this.freqTime);
    }
    /**
     * @private
     * @param {?} key
     * @param {?} type
     * @return {?}
     */
    runNotify(key, type) {
        if (!this.notifyBuffer.has(key))
            return;
        (/** @type {?} */ (this.notifyBuffer.get(key))).next({ type, value: this.getNone(key) });
    }
    /**
     * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
     *
     * - 调用后除再次调用 `cancelNotify` 否则永远不过期
     * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
     * @param {?} key
     * @return {?}
     */
    notify(key) {
        if (!this.notifyBuffer.has(key)) {
            /** @type {?} */
            const change$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.getNone(key));
            this.notifyBuffer.set(key, change$);
        }
        return (/** @type {?} */ (this.notifyBuffer.get(key))).asObservable();
    }
    /**
     * 取消 `key` 监听
     * @param {?} key
     * @return {?}
     */
    cancelNotify(key) {
        if (!this.notifyBuffer.has(key))
            return;
        (/** @type {?} */ (this.notifyBuffer.get(key))).unsubscribe();
        this.notifyBuffer.delete(key);
    }
    /**
     * `key` 是否已经监听
     * @param {?} key
     * @return {?}
     */
    hasNotify(key) {
        return this.notifyBuffer.has(key);
    }
    /**
     * 清空所有 `key` 的监听
     * @return {?}
     */
    clearNotify() {
        this.notifyBuffer.forEach((/**
         * @param {?} v
         * @return {?}
         */
        v => v.unsubscribe()));
        this.notifyBuffer.clear();
    }
    // #endregion
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.memory.clear();
        this.abortExpireNotify();
        this.clearNotify();
    }
}
CacheService.ɵfac = function CacheService_Factory(t) { return new (t || CacheService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_delon_util__WEBPACK_IMPORTED_MODULE_2__["AlainConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DC_STORE_STORAGE_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
/** @nocollapse */
CacheService.ctorParameters = () => [
    { type: _delon_util__WEBPACK_IMPORTED_MODULE_2__["AlainConfigService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DC_STORE_STORAGE_TOKEN,] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
/** @nocollapse */ CacheService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function CacheService_Factory() { return new CacheService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_delon_util__WEBPACK_IMPORTED_MODULE_2__["AlainConfigService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(DC_STORE_STORAGE_TOKEN), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: CacheService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CacheService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _delon_util__WEBPACK_IMPORTED_MODULE_2__["AlainConfigService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [DC_STORE_STORAGE_TOKEN]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cache.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DelonCacheModule {
}
DelonCacheModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DelonCacheModule });
DelonCacheModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DelonCacheModule_Factory(t) { return new (t || DelonCacheModule)(); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DelonCacheModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{}]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: cache.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=cache.js.map

/***/ }),

/***/ "m496":
/*!******************************************************!*\
  !*** ./src/app/routes/delon/delon-routing.module.ts ***!
  \******************************************************/
/*! exports provided: DelonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonRoutingModule", function() { return DelonRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/acl */ "atJ9");
/* harmony import */ var _acl_acl_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./acl/acl.component */ "Wwir");
/* harmony import */ var _cache_cache_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cache/cache.component */ "mXk7");
/* harmony import */ var _downfile_downfile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./downfile/downfile.component */ "K4PL");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/form.component */ "NKVH");
/* harmony import */ var _guard_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guard/admin.component */ "zIGm");
/* harmony import */ var _guard_auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guard/auth.component */ "j/h1");
/* harmony import */ var _guard_can_leave_provide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guard/can-leave.provide */ "Zcvf");
/* harmony import */ var _guard_guard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guard/guard.component */ "UpQ3");
/* harmony import */ var _guard_leave_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guard/leave.component */ "2f0N");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./print/print.component */ "3mRb");
/* harmony import */ var _qr_qr_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./qr/qr.component */ "2qzf");
/* harmony import */ var _st_st_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./st/st.component */ "EOpx");
/* harmony import */ var _util_util_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./util/util.component */ "NDEb");
/* harmony import */ var _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./xlsx/xlsx.component */ "CNET");
/* harmony import */ var _zip_zip_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./zip/zip.component */ "0amb");



















const routes = [
    { path: 'st', component: _st_st_component__WEBPACK_IMPORTED_MODULE_15__["STDemoComponent"] },
    { path: 'util', component: _util_util_component__WEBPACK_IMPORTED_MODULE_16__["UtilComponent"] },
    { path: 'print', component: _print_print_component__WEBPACK_IMPORTED_MODULE_13__["PrintComponent"] },
    { path: 'acl', component: _acl_acl_component__WEBPACK_IMPORTED_MODULE_4__["ACLComponent"] },
    {
        path: 'guard',
        component: _guard_guard_component__WEBPACK_IMPORTED_MODULE_11__["GuardComponent"],
        children: [
            {
                path: 'leave',
                component: _guard_leave_component__WEBPACK_IMPORTED_MODULE_12__["GuardLeaveComponent"],
                canDeactivate: [_guard_can_leave_provide__WEBPACK_IMPORTED_MODULE_10__["CanLeaveProvide"]],
            },
            {
                path: 'auth',
                component: _guard_auth_component__WEBPACK_IMPORTED_MODULE_9__["GuardAuthComponent"],
                canActivate: [_delon_acl__WEBPACK_IMPORTED_MODULE_3__["ACLGuard"]],
                data: { guard: 'user1' },
            },
            {
                path: 'admin',
                component: _guard_admin_component__WEBPACK_IMPORTED_MODULE_8__["GuardAdminComponent"],
                canActivate: [_delon_acl__WEBPACK_IMPORTED_MODULE_3__["ACLGuard"]],
                data: { guard: 'admin' },
            },
        ],
    },
    { path: 'cache', component: _cache_cache_component__WEBPACK_IMPORTED_MODULE_5__["CacheComponent"] },
    { path: 'qr', component: _qr_qr_component__WEBPACK_IMPORTED_MODULE_14__["QRComponent"] },
    { path: 'downfile', component: _downfile_downfile_component__WEBPACK_IMPORTED_MODULE_6__["DownFileComponent"] },
    { path: 'xlsx', component: _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_17__["XlsxComponent"] },
    { path: 'zip', component: _zip_zip_component__WEBPACK_IMPORTED_MODULE_18__["ZipComponent"] },
    { path: 'form', component: _form_form_component__WEBPACK_IMPORTED_MODULE_7__["DelonFormComponent"] },
];
let DelonRoutingModule = class DelonRoutingModule {
};
DelonRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DelonRoutingModule);



/***/ }),

/***/ "mXk7":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/cache/cache.component.ts ***!
  \*******************************************************/
/*! exports provided: CacheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheComponent", function() { return CacheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cache_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cache.component.html */ "OIiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/cache */ "luDG");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");





let CacheComponent = class CacheComponent {
    constructor(cache, msg) {
        this.cache = cache;
        this.msg = msg;
        this.KEY = 'user';
    }
    set() {
        this.cache.set(this.KEY, +new Date());
    }
    get() {
        this.msg.success(this.cache.getNone(this.KEY));
    }
};
CacheComponent.ctorParameters = () => [
    { type: _delon_cache__WEBPACK_IMPORTED_MODULE_3__["CacheService"] },
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
];
CacheComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-cache',
        template: _raw_loader_cache_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CacheComponent);



/***/ }),

/***/ "rbmV":
/*!****************************************************************!*\
  !*** ./node_modules/@delon/abc/__ivy_ngcc__/fesm2015/lodop.js ***!
  \****************************************************************/
/*! exports provided: LodopModule, LodopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LodopModule", function() { return LodopModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LodopService", function() { return LodopService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/util */ "RY2A");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");




/**
 * @fileoverview added by tsickle
 * Generated from: lodop.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */


function CLodop() { }
if (false) {}
/**
 * @record
 */
function Lodop() { }
if (false) {}
/**
 * @record
 */
function LodopResult() { }
if (false) {}
/**
 * @record
 */
function LodopPrintResult() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lodop.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LodopService {
    /**
     * @param {?} scriptSrv
     * @param {?} configSrv
     */
    constructor(scriptSrv, configSrv) {
        this.scriptSrv = scriptSrv;
        this.pending = false;
        this._lodop = null;
        this._init = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._events = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.printBuffer = [];
        this.defaultConfig = (/** @type {?} */ (configSrv.merge('lodop', {
            url: '//localhost:8443/CLodopfuncs.js',
            name: 'CLODOP',
            companyName: '',
            checkMaxCount: 100,
        })));
        this.cog = this.defaultConfig;
    }
    /**
     * Get or set configuration, **Note:** Resetting will invert and reload script resources
     *
     * 获取或重新设置配置，**注：**重新设置会倒置重新加载脚本资源
     * @return {?}
     */
    get cog() {
        return this._cog;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cog(value) {
        this._cog = Object.assign(Object.assign({}, this.defaultConfig), value);
    }
    /**
     * Event change notification
     *
     * 事件变更通知
     * @return {?}
     */
    get events() {
        return this._events.asObservable();
    }
    /**
     * Get lodop object
     *
     * 获取 lodop 对象
     * @return {?}
     */
    get lodop() {
        if (this._lodop)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])((/** @type {?} */ ({ ok: true, lodop: this._lodop })));
        if (this.pending)
            return this._init.asObservable();
        this.request();
        return this._init.asObservable();
    }
    /**
     * Get printer list
     *
     * 获取打印机列表
     * @return {?}
     */
    get printer() {
        this.check();
        /** @type {?} */
        const ret = [];
        /** @type {?} */
        const count = (/** @type {?} */ (this._lodop)).GET_PRINTER_COUNT();
        for (let index = 0; index < count; index++) {
            ret.push((/** @type {?} */ (this._lodop)).GET_PRINTER_NAME(index));
        }
        return ret;
    }
    /**
     * @private
     * @return {?}
     */
    check() {
        if (!this._lodop)
            throw new Error(`请务必先调用 lodop 获取对象`);
    }
    /**
     * @private
     * @return {?}
     */
    request() {
        this.pending = true;
        /** @type {?} */
        const url = `${this.cog.url}?name=${this.cog.name}`;
        /** @type {?} */
        let checkMaxCount = (/** @type {?} */ (this.cog.checkMaxCount));
        /** @type {?} */
        const onResolve = (/**
         * @param {?} status
         * @param {?=} error
         * @return {?}
         */
        (status, error) => {
            this._init.next({
                ok: status === 'ok',
                status,
                error,
                lodop: (/** @type {?} */ (this._lodop)),
            });
        });
        /** @type {?} */
        const checkStatus = (/**
         * @return {?}
         */
        () => {
            --checkMaxCount;
            if ((/** @type {?} */ (this._lodop)).webskt && (/** @type {?} */ (this._lodop)).webskt.readyState === 1) {
                onResolve('ok');
            }
            else {
                if (checkMaxCount < 0) {
                    onResolve('check-limit');
                    return;
                }
                setTimeout((/**
                 * @return {?}
                 */
                () => checkStatus()), 100);
            }
        });
        this.scriptSrv.loadScript(url).then((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (res.status !== 'ok') {
                this.pending = false;
                onResolve('script-load-error', res[0]);
                return;
            }
            /** @type {?} */
            const win = (/** @type {?} */ (window));
            if (win.hasOwnProperty((/** @type {?} */ (this.cog.name)))) {
                this._lodop = (/** @type {?} */ (win[(/** @type {?} */ (this.cog.name))]));
            }
            if (this._lodop === null) {
                onResolve('load-variable-name-error', { name: this.cog.name });
                return;
            }
            this._lodop.SET_LICENSES((/** @type {?} */ (this.cog.companyName)), (/** @type {?} */ (this.cog.license)), this.cog.licenseA, this.cog.licenseB);
            checkStatus();
        }));
    }
    /**
     * Reset lodop object
     *
     * 重置 lodop 对象
     * @return {?}
     */
    reset() {
        this._lodop = null;
        this.pending = false;
        this.request();
    }
    /**
     * Attach code to the `lodop` object, the string class supports dynamic parameters of `{{key}}`,
     * **Note:** The code refers to the string data generated by the print design
     *
     * 附加代码至 `lodop` 对象上，字符串类支持 `{{key}}` 的动态参数，**注：** 代码是指打印设计所产生字符串数据
     * @param {?} code
     * @param {?=} contextObj
     * @param {?=} parser
     * @return {?}
     */
    attachCode(code, contextObj, parser) {
        this.check();
        if (!parser)
            parser = /LODOP\.([^(]+)\(([^\n]+)?\);/i;
        code.split('\n').forEach((/**
         * @param {?} line
         * @return {?}
         */
        line => {
            /** @type {?} */
            const res = (/** @type {?} */ (parser)).exec(line.trim());
            if (!res)
                return;
            /** @type {?} */
            const fn = (/** @type {?} */ (this._lodop))[res[1]];
            if (fn) {
                /** @type {?} */
                let arr = null;
                try {
                    // tslint:disable-next-line: function-constructor
                    /** @type {?} */
                    const fakeFn = new Function(`return [${res[2]}]`);
                    arr = fakeFn();
                }
                catch (_a) { }
                if (arr != null && Array.isArray(arr) && contextObj) {
                    for (let i = 0; i < arr.length; i++) {
                        if (typeof arr[i] === 'string') {
                            arr[i] = ((/** @type {?} */ (arr[i]))).replace(/{{(.*?)}}/g, (/**
                             * @param {?} _match
                             * @param {?} key
                             * @return {?}
                             */
                            (_match, key) => contextObj[key.trim()] || ''));
                        }
                    }
                }
                fn.apply(this._lodop, (/** @type {?} */ (arr)));
            }
        }));
    }
    /**
     * The code is automatically returned after opening the print design and closing,
     * **Note:** Automatically listen for the `On_Return` event, and it will be removed after running
     *
     * 打开打印设计关闭后自动返回代码，**注：** 自动监听 `On_Return` 事件，运行后会移除
     * @return {?}
     */
    design() {
        this.check();
        /** @type {?} */
        const tid = (/** @type {?} */ (this._lodop)).PRINT_DESIGN();
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            (/** @type {?} */ (this._lodop)).On_Return = (/**
             * @param {?} taskID
             * @param {?} value
             * @return {?}
             */
            (taskID, value) => {
                if (tid !== taskID)
                    return;
                (/** @type {?} */ (this._lodop)).On_Return = null;
                resolve('' + value);
            });
        }));
    }
    /**
     * @private
     * @return {?}
     */
    printDo() {
        /** @type {?} */
        const data = this.printBuffer.shift();
        if (!data)
            return;
        this.attachCode(data.code, data.item, data.parser);
        /** @type {?} */
        const tid = (/** @type {?} */ (this._lodop)).PRINT();
        (/** @type {?} */ (this._lodop)).On_Return = (/**
         * @param {?} taskID
         * @param {?} value
         * @return {?}
         */
        (taskID, value) => {
            if (tid !== taskID)
                return;
            (/** @type {?} */ (this._lodop)).On_Return = null;
            this._events.next(Object.assign({ ok: value === true, error: value === true ? null : value }, data));
            this.printDo();
        });
    }
    /**
     * Print immediately, generally used for batch printing
     *
     * 立即打印，一般用于批量套打
     * @param {?} code
     * @param {?} contextObj
     * @param {?=} parser
     * @return {?}
     */
    print(code, contextObj, parser) {
        this.check();
        if (contextObj) {
            this.printBuffer.push(...(Array.isArray(contextObj) ? contextObj : [contextObj]).map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return { code, parser, item };
            })));
        }
        this.printDo();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._init.unsubscribe();
        this._events.unsubscribe();
    }
}
LodopService.ɵfac = function LodopService_Factory(t) { return new (t || LodopService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_delon_util__WEBPACK_IMPORTED_MODULE_1__["LazyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_delon_util__WEBPACK_IMPORTED_MODULE_1__["AlainConfigService"])); };
/** @nocollapse */
LodopService.ctorParameters = () => [
    { type: _delon_util__WEBPACK_IMPORTED_MODULE_1__["LazyService"] },
    { type: _delon_util__WEBPACK_IMPORTED_MODULE_1__["AlainConfigService"] }
];
/** @nocollapse */ LodopService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function LodopService_Factory() { return new LodopService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_delon_util__WEBPACK_IMPORTED_MODULE_1__["LazyService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_delon_util__WEBPACK_IMPORTED_MODULE_1__["AlainConfigService"])); }, token: LodopService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LodopService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _delon_util__WEBPACK_IMPORTED_MODULE_1__["LazyService"] }, { type: _delon_util__WEBPACK_IMPORTED_MODULE_1__["AlainConfigService"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lodop.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LodopModule {
}
LodopModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LodopModule });
LodopModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LodopModule_Factory(t) { return new (t || LodopModule)(); }, imports: [[_delon_util__WEBPACK_IMPORTED_MODULE_1__["DelonUtilModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LodopModule, { imports: function () { return [_delon_util__WEBPACK_IMPORTED_MODULE_1__["DelonUtilModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LodopModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_delon_util__WEBPACK_IMPORTED_MODULE_1__["DelonUtilModule"]]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lodop.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=lodop.js.map

/***/ }),

/***/ "xzsX":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/form/form.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header [title]=\"'Page Name'\"></page-header>\n<nz-card>\n  <sf\n    mode=\"search\"\n    [schema]=\"searchSchema\"\n    [formData]=\"params\"\n    (formSubmit)=\"st.reset($event)\"\n    (formReset)=\"st.reset(params)\"\n  ></sf>\n  <st #st [data]=\"url\" [columns]=\"columns\" [req]=\"{ params: params }\"></st>\n</nz-card>\n");

/***/ }),

/***/ "zIGm":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/guard/admin.component.ts ***!
  \*******************************************************/
/*! exports provided: GuardAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardAdminComponent", function() { return GuardAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let GuardAdminComponent = class GuardAdminComponent {
};
GuardAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guard-admin',
        template: `
    <p>这是一个admin页面</p>
  `,
    })
], GuardAdminComponent);



/***/ }),

/***/ "zNRX":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/xlsx/xlsx.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\n  <h1>\n    Import & Export excel file,\n    <a href=\"//ng-alain.com/components/xlsx\" target=\"_blank\">Document</a>\n  </h1>\n</div>\n<nz-card nzTitle=\"Import\">\n  <button nz-button (click)=\"url()\">Via Url</button>\n  <input type=\"file\" (change)=\"change($event)\" multiple=\"false\" class=\"ml-sm\" />\n  <p class=\"mt-sm\">result: {{ data | json }}</p>\n</nz-card>\n<nz-card nzTitle=\"Export\">\n  <button nz-button (click)=\"download()\">Export</button>\n  <st [data]=\"users\" [ps]=\"3\" [columns]=\"columns\" class=\"mt-sm\"></st>\n</nz-card>\n");

/***/ })

}]);
//# sourceMappingURL=delon-delon-module.js.map
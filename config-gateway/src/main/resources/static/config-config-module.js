(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["config-config-module"],{

/***/ "+JPh":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/config/product/product-edit/product-edit.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header title=\"修改信息\">\n\n</page-header>\n<form nz-form [formGroup]=\"form\" [nzLayout]=\"'vertical'\">\n  <nz-card [nzBordered]=\"false\" nzTitle=\"基本信息\">\n    <nz-row nzGutter=\"16\">\n      <nz-col nzLg=\"6\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label nzFor=\"name\">产品名</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入产品名\">\n            <input nz-input formControlName=\"productName\" id=\"productName\" placeholder=\"请输入产品名\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 6, offset: 2 }\" [nzLg]=\"{ span: 8 }\" [nzMd]=\"{ span: 12 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>产品版本</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入产品版本\">\n            <input nz-input formControlName=\"prodVersion\" placeholder=\"请输入产品版本\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 8, offset: 2 }\" [nzLg]=\"{ span: 10 }\" [nzMd]=\"{ span: 24 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>产品经理</nz-form-label>\n          <nz-form-control nzErrorTip=\"请选择产品经理\">\n            <nz-select formControlName=\"manager\" [nzPlaceHolder]=\"'请选择产品经理'\" [nzShowSearch]=\"true\">\n              <nz-option *ngFor=\"let i of usersOfManager\" [nzLabel]=\"i.realname\" [nzValue]=\"i.id\"></nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n    </nz-row>\n    <nz-row nzGutter=\"16\">\n      <nz-col nzLg=\"6\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>产品地址</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入产品地址\">\n            <input nz-input formControlName=\"prodAddress\" placeholder=\"请输入产品地址\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 6, offset: 2 }\" [nzLg]=\"{ span: 8 }\" [nzMd]=\"{ span: 12 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>代码版本</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入代码版本\">\n            <input nz-input formControlName=\"codeVersion\" placeholder=\"请输入代码版本\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 8, offset: 2 }\" [nzLg]=\"{ span: 10 }\" [nzMd]=\"{ span: 24 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>测试人员</nz-form-label>\n          <nz-form-control nzErrorTip=\"请选择测试人员\">\n            <nz-select formControlName=\"tester\" [nzPlaceHolder]=\"'请选择测试人员'\" [nzShowSearch]=\"true\">\n              <nz-option *ngFor=\"let i of usersOfTester\" [nzLabel]=\"i.realname\" [nzValue]=\"i.id\"> </nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n    </nz-row>\n  </nz-card>\n  <nz-card [nzBordered]=\"false\" nzTitle=\"附件信息\">\n    <nz-upload nzType=\"drag\" [nzMultiple]=\"true\" nzAction=\"http://config-service.oss-cn-beijing.aliyuncs.com\"\n      [nzCustomRequest]=\"customUpdateProductAssets\">\n      <p class=\"ant-upload-drag-icon\">\n        <i nz-icon nzType=\"inbox\"></i>\n      </p>\n      <p class=\"ant-upload-text\">点击或拖动文件到此处用以上传</p>\n      <p class=\"ant-upload-hint\">\n        支持单次或批量上传。（若上传，会覆盖原文件）\n      </p>\n    </nz-upload>\n  </nz-card>\n  <nz-card [nzBordered]=\"false\" nzTitle=\"详细信息\">\n    <nz-upload nzType=\"drag\" [nzMultiple]=\"false\" nzAction=\"http://config-service.oss-cn-beijing.aliyuncs.com\"\n      [nzCustomRequest]=\"customUpdateProductDetail\">\n      <p class=\"ant-upload-drag-icon\">\n        <i nz-icon nzType=\"file-markdown\" nzTheme=\"twotone\"></i>\n      </p>\n      <p class=\"ant-upload-text\">点击或拖动文件到此处用以上传</p>\n      <p class=\"ant-upload-hint\">\n        支持单个md文件上传。用以说明本版本的详细信息。（若上传，会覆盖原文件）\n      </p>\n    </nz-upload>\n  </nz-card>\n  <nz-card [nzBordered]=\"false\" nzTitle=\"预览信息\">\n    <textarea nz-input formControlName=\"message\" placeholder=\"建议50字以内\"\n      nzAutosize=\"{ minRows: 3, maxRows: 5 }\"></textarea>\n  </nz-card>\n</form>\n<div style=\"float: right;\">\n  <button nz-button type=\"primary\" nzType=\"primary\" (click)=\"close()\">取消</button>\n  <button nz-button type=\"primary\" nzType=\"primary\" (click)=\"_submitForm()\">提交</button>\n</div>");

/***/ }),

/***/ "0fcn":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/config/project/project-list/project-list.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header [title]=\"null\"></page-header>\n<nz-card [nzBordered]=\"false\">\n  <div nz-row>\n    <div nz-col [nzXs]=\"24\" [nzSm]=\"8\" class=\"header-info\">\n      <span class=\"text-grey-dark\">我的项目</span>\n      <span class=\"d-block display-2\">8个项目</span>\n      <em></em>\n    </div>\n    <div nz-col [nzXs]=\"24\" [nzSm]=\"8\" class=\"header-info\">\n      <span class=\"text-grey-dark\">本周/月更新次数</span>\n      <span class=\"d-block display-2\">2/7</span>\n      <em></em>\n    </div>\n    <div nz-col [nzXs]=\"24\" [nzSm]=\"8\" class=\"header-info\">\n      <span class=\"text-grey-dark\">本周需求完成数量</span>\n      <span class=\"d-block display-2\">24个</span>\n    </div>\n  </div>\n</nz-card>\n\n<nz-card [nzHoverable]=\"false\" [nzBordered]=\"false\">\n  <div class=\"d-flex align-items-center mb-lg\">\n    <h3 class=\"flex-1 text-lg\">产品列表</h3>\n    <div>\n      <nz-radio-group [(ngModel)]=\"q.status\" class=\"mr-md\">\n        <label nz-radio-button [nzValue]=\"'all'\">\n          <span>全部</span>\n        </label>\n        <label nz-radio-button [nzValue]=\"'progress'\">\n          <span>仅看自己</span>\n        </label>\n      </nz-radio-group>\n      <nz-input-group nzSuffixIcon=\"search\" style=\"width: 270px;\">\n        <input type=\"text\" nz-input placeholder=\"请输入\" [(ngModel)]=\"q.q\" name=\"q\" />\n      </nz-input-group>\n    </div>\n  </div>\n  <button nz-button (click)=\"openAdd()\" [nzType]=\"'dashed'\" nzBlock class=\"mb-sm\">\n    <i nz-icon nzType=\"plus\"></i>\n    <span>添加</span>\n  </button>\n</nz-card>\n\n<nz-list [nzDataSource]='data' [nzRenderItem]=\"item\" [nzLoading]=\"loading\">\n  <ng-template #item let-item>\n    <nz-list-item>\n      <nz-card [nzHoverable]=\"false\" [nzBordered]=\"false\" style='width: 100%' [nzTitle]=\"item.projectName\"\n        [nzExtra]=\"extraTemplate\">\n        <sv-container size=\"large\">\n          <sv label=\"产品经理\">{{item.manager}}</sv>\n          <sv label=\"项目合同额（万元）\">{{item.amount}}</sv>\n          <sv label=\"客户名称\">{{item.customerName}}</sv>\n          <sv label=\"合同编号\">{{item.customerName}}</sv>\n        </sv-container>\n        <nz-divider></nz-divider>\n        <config-app-progress [item]=\"item\"></config-app-progress>\n        <div class=\"steps-content\"></div>\n      </nz-card>\n      <ng-template #extraTemplate>\n        <nz-list-item [nzActions]=\"[apply, edit, op]\">\n          <ng-template #apply>\n            <a *ngIf=\"item.progress == 1\" (click)=\"openApply(item.projectId)\">申请</a>\n          </ng-template>\n          <ng-template #edit>\n            <a *ngIf=\"item.progress == 1\" (click)=\"openEdit(item.projectId)\">编辑</a>\n          </ng-template>\n          <ng-template #op>\n            <a class=\"ant-dropdown-link\" nz-dropdown [nzDropdownMenu]=\"opMenu\">\n              更多\n              <i nz-icon nzType=\"down\"></i>\n            </a>\n            <nz-dropdown-menu #opMenu=\"nzDropdownMenu\">\n              <ul nz-menu>\n                <li nz-menu-item (click)=\"openDetail(item.projectId)\">查看详情</li>\n                <li nz-menu-item *ngIf=\"item.progress == 1\" (click)=\"openEdit(item.projectId)\">编辑</li>\n                <li nz-menu-item *ngIf=\"item.progress == 1\" (click)=\"openApply(item.projectId)\">申请</li>\n              </ul>\n            </nz-dropdown-menu>\n          </ng-template>\n        </nz-list-item>\n      </ng-template>\n    </nz-list-item>\n  </ng-template>\n</nz-list>");

/***/ }),

/***/ "1hOh":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/config/deployment/deployment-list/deployment-list.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header [title]=\"null\"></page-header>\n<nz-card [nzBordered]=\"false\">\n  <div nz-row>\n    <div nz-col [nzXs]=\"24\" [nzSm]=\"8\" class=\"header-info\">\n      <span class=\"text-grey-dark\">我的产品</span>\n      <span class=\"d-block display-2\">8个产品</span>\n      <em></em>\n    </div>\n    <div nz-col [nzXs]=\"24\" [nzSm]=\"8\" class=\"header-info\">\n      <span class=\"text-grey-dark\">本周/月更新次数</span>\n      <span class=\"d-block display-2\">2/7</span>\n      <em></em>\n    </div>\n    <div nz-col [nzXs]=\"24\" [nzSm]=\"8\" class=\"header-info\">\n      <span class=\"text-grey-dark\">本周需求完成数量</span>\n      <span class=\"d-block display-2\">24个</span>\n    </div>\n  </div>\n</nz-card>\n\n<nz-list [nzDataSource]='data' [nzRenderItem]=\"item\" [nzLoading]=\"loading\">\n  <ng-template #item let-item>\n    <nz-list-item>\n      <nz-card [nzHoverable]=\"false\" [nzBordered]=\"false\" style='width: 100%' [nzTitle]=\"item.projectName\"\n        [nzExtra]=\"extraTemplate\">\n        <sv-container size=\"large\">\n          <sv label=\"产品经理\">{{item.manager}}</sv>\n          <sv label=\"项目合同额（万元）\">{{item.amount}}</sv>\n          <sv label=\"客户名称\">{{item.customerName}}</sv>\n          <sv label=\"合同编号\">{{item.customerName}}</sv>\n        </sv-container>\n        <nz-divider></nz-divider>\n        <config-app-progress [item]=\"item\"></config-app-progress>\n        <div class=\"steps-content\"></div>\n      </nz-card>\n      <ng-template #extraTemplate>\n        <nz-list-item [nzActions]=\"[edit, op]\">\n          <ng-template #edit>\n            <a (click)=\"openDetail(item.projectId)\">查看详情</a>\n          </ng-template>\n          <ng-template #op>\n            <a class=\"ant-dropdown-link\" nz-dropdown [nzDropdownMenu]=\"opMenu\">\n              更多\n              <i nz-icon nzType=\"down\"></i>\n            </a>\n            <nz-dropdown-menu #opMenu=\"nzDropdownMenu\">\n              <ul nz-menu>\n                <li nz-menu-item (click)=\"openDetail(item.projectId)\">查看详情</li>\n                <li nz-menu-item (click)=\"_submitForm(item.projectId)\">部署</li>\n              </ul>\n            </nz-dropdown-menu>\n          </ng-template>\n        </nz-list-item>\n      </ng-template>\n    </nz-list-item>\n  </ng-template>\n</nz-list>");

/***/ }),

/***/ "D8sg":
/*!***************************************************************************!*\
  !*** ./src/app/routes/config/verify/verify-list/verify-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConfigVerifyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigVerifyListComponent", function() { return ConfigVerifyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verify_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verify-list.component.html */ "uUn8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _verify_detail_verify_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../verify-detail/verify-detail.component */ "sOuG");







let ConfigVerifyListComponent = class ConfigVerifyListComponent {
    constructor(http, modal, cdr) {
        this.http = http;
        this.modal = modal;
        this.cdr = cdr;
        this.q = {
            q: '',
            status: 'all',
        };
        this.loading = false;
        this.data = [];
    }
    ngOnInit() {
        this.getData();
    }
    openDetail(projectId) {
        this.modal.create(_verify_detail_verify_detail_component__WEBPACK_IMPORTED_MODULE_5__["ConfigVerifyDetailComponent"], { projectId }, { size: 1200 }).subscribe((res) => {
            this.cdr.detectChanges();
        });
    }
    getData() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_URL + '/api/administer/getList', { pageNum: 0, pageSize: 5 }).subscribe((res) => {
            this.data = res.data;
            this.loading = false;
            this.cdr.detectChanges();
        });
    }
};
ConfigVerifyListComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["ModalHelper"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
ConfigVerifyListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-config-verify-list',
        template: _raw_loader_verify_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ConfigVerifyListComponent);



/***/ }),

/***/ "E9PB":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/config/project/project-detail/project-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ConfigProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigProjectDetailComponent", function() { return ConfigProjectDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_project_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./project-detail.component.html */ "m1D6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");







let ConfigProjectDetailComponent = class ConfigProjectDetailComponent {
    constructor(http, modal, fb) {
        this.http = http;
        this.modal = modal;
        this.fb = fb;
        this.projectId = -1;
        // 所有的产品集合，相同产品归为一类。用于选定产品
        this.ProdsWithVersionOptions = [];
        // 在本次编辑中新选中的产品数组
        this.afterSelectedProduct = [];
        this.deletedProduct = [];
    }
    ngOnInit() {
        this.getProdsWithVersion();
        this.form = this.fb.group({
            projectName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            contractAmount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            projectManager: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            projectAdress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            customerName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            contractNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.getData();
    }
    getData() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_URL + '/api/project/getProjectDetail', { projectId: this.projectId }).subscribe(res => {
            this.data = res.data;
        });
    }
    _submitForm() {
        Object.keys(this.form.controls).forEach((key) => {
            this.form.controls[key].markAsDirty();
            this.form.controls[key].updateValueAndValidity();
        });
        if (this.form.invalid) {
            return;
        }
    }
    /**
     * 获取所有产品，并且将根据版本号处理
     */
    getProdsWithVersion() {
        this.http.get('/api/project/getProdsWithVersion').subscribe((res) => {
            this.ProdsWithVersionOptions = res.data;
        });
    }
    selectProd(values) {
        let item = {
            "productName": values[0].label,
            "productVersion": values[1].label,
            "productId": values[1].value
        };
        this.afterSelectedProduct.push(item);
    }
    /**
     * 在 afterSelectedProduct 数组中根据 productId 删除元素
     */
    removeAfterSelectedProduct(productId) {
        this.afterSelectedProduct = this.afterSelectedProduct.filter(item => {
            if (item.productId == productId) {
                return false;
            }
            else {
                return true;
            }
        });
    }
    /**
     * 在 data.beforeSelectedProduct 数组中根据 productId 删除元素
     */
    removeBeforeSelectedProduct(productId) {
        this.data.beforeSelectedProduct = this.data.beforeSelectedProduct.filter((item) => {
            if (item.productId == productId) {
                this.deletedProduct.push(item);
                return false;
            }
            else {
                return true;
            }
        });
    }
    close() {
        this.modal.destroy();
    }
};
ConfigProjectDetailComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["_HttpClient"] },
    { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
ConfigProjectDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-config-project-detail',
        template: _raw_loader_project_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ConfigProjectDetailComponent);



/***/ }),

/***/ "INX6":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/config/product/product-add/product-add.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header title=\"添加项目\">\n\n</page-header>\n<form nz-form [formGroup]=\"form\" [nzLayout]=\"'vertical'\">\n  <nz-card [nzBordered]=\"false\" nzTitle=\"基本信息\">\n    <nz-row nzGutter=\"16\">\n      <nz-col nzLg=\"6\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label nzFor=\"name\">产品名</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入产品名\">\n            <input nz-input formControlName=\"productName\" id=\"productName\" placeholder=\"请输入产品名\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 6, offset: 2 }\" [nzLg]=\"{ span: 8 }\" [nzMd]=\"{ span: 12 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>产品版本</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入产品版本\">\n            <input nz-input formControlName=\"prodVersion\" placeholder=\"请输入产品版本\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 8, offset: 2 }\" [nzLg]=\"{ span: 10 }\" [nzMd]=\"{ span: 24 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>产品经理</nz-form-label>\n          <nz-form-control nzErrorTip=\"请选择产品经理\">\n            <nz-select formControlName=\"productManager\" [nzPlaceHolder]=\"'请选择产品经理'\" [nzShowSearch]=\"true\">\n              <nz-option *ngFor=\"let i of usersOfManager\" [nzLabel]=\"i.realname\" [nzValue]=\"i.id\"></nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n    </nz-row>\n    <nz-row nzGutter=\"16\">\n      <nz-col nzLg=\"6\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>产品地址</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入产品地址\">\n            <input nz-input formControlName=\"productAddress\" placeholder=\"请输入产品地址\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 6, offset: 2 }\" [nzLg]=\"{ span: 8 }\" [nzMd]=\"{ span: 12 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>代码版本</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入代码版本\">\n            <input nz-input formControlName=\"codeVersion\" placeholder=\"请输入代码版本\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 8, offset: 2 }\" [nzLg]=\"{ span: 10 }\" [nzMd]=\"{ span: 24 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>测试人员</nz-form-label>\n          <nz-form-control nzErrorTip=\"请选择测试人员\">\n            <nz-select formControlName=\"tester\" [nzPlaceHolder]=\"'请选择测试人员'\" [nzShowSearch]=\"true\">\n              <nz-option *ngFor=\"let i of usersOfTester\" [nzLabel]=\"i.realname\" [nzValue]=\"i.id\"> </nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n    </nz-row>\n  </nz-card>\n  <nz-card [nzBordered]=\"false\" nzTitle=\"附件信息\">\n    <nz-upload nzType=\"drag\" [nzMultiple]=\"true\" nzAction=\"http://config-service.oss-cn-beijing.aliyuncs.com\"\n      [nzCustomRequest]=\"customUpdateProductAssets\">\n      <p class=\"ant-upload-drag-icon\">\n        <i nz-icon nzType=\"inbox\"></i>\n      </p>\n      <p class=\"ant-upload-text\">点击或拖动文件到此处用以上传</p>\n      <p class=\"ant-upload-hint\">\n        支持单次或批量上传。\n      </p>\n    </nz-upload>\n  </nz-card>\n  <nz-card [nzBordered]=\"false\" nzTitle=\"详细信息\">\n    <nz-upload nzType=\"drag\" [nzMultiple]=\"false\" nzAction=\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"\n      [nzCustomRequest]=\"customUpdateProductDetail\">\n      <p class=\"ant-upload-drag-icon\">\n        <i nz-icon nzType=\"file-markdown\" nzTheme=\"twotone\"></i>\n      </p>\n      <p class=\"ant-upload-text\">点击或拖动文件到此处用以上传</p>\n      <p class=\"ant-upload-hint\">\n        支持单个md文件上传。用以说明本版本的详细信息\n      </p>\n    </nz-upload>\n  </nz-card>\n  <nz-card [nzBordered]=\"false\" nzTitle=\"预览信息\">\n    <textarea nz-input formControlName=\"description\" placeholder=\"建议50字以内\"\n      nzAutosize=\"{ minRows: 3, maxRows: 5 }\"></textarea>\n  </nz-card>\n</form>\n<div style=\"float: right;\">\n  <button nz-button type=\"primary\" nzType=\"primary\" (click)=\"close()\">取消</button>\n  <button nz-button type=\"primary\" nzType=\"primary\" (click)=\"_submitForm()\">提交</button>\n</div>");

/***/ }),

/***/ "J/q1":
/*!******************************************************************************!*\
  !*** ./src/app/routes/config/product/product-list/product-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConfigProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigProductListComponent", function() { return ConfigProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-list.component.html */ "btRR");
/* harmony import */ var _product_list_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.component.less */ "N+rp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-edit/product-edit.component */ "o8O4");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product-add/product-add.component */ "VbdL");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product-detail/product-detail.component */ "oMEh");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _product_update_product_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product-update/product-update.component */ "KyF8");












let ConfigProductListComponent = class ConfigProductListComponent {
    constructor(http, msg, modal, cdr) {
        this.http = http;
        this.msg = msg;
        this.modal = modal;
        this.cdr = cdr;
        //分页 页码
        this.pageNum = 0;
        // 分页大小
        this.pageSize = 5;
        //总和
        this.total = 0;
        this.key = {
            key: '',
            status: 'all',
        };
        this.loading = false;
        this.data = [];
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        const params = {
            pageNum: this.pageNum,
            pageSize: 5,
            key: this.key.key
        };
        this.loading = true;
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].SERVER_URL + '/api/product/getList', params).subscribe((res) => {
            this.data = res.data;
            this.loading = false;
            this.cdr.detectChanges();
        });
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].SERVER_URL + '/api/product/productOfNumber').subscribe((res) => {
            this.total = res.data;
        });
    }
    /**
     * 分页的双向绑定
     */
    pageIndexChange(pageNum) {
        this.pageNum = pageNum;
        this.getData();
    }
    openEdit(productId, productVersion) {
        this.modal.create(_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_6__["ConfigProductEditComponent"], { productId: productId, productVersion: productVersion }, { size: 1200 }).subscribe((res) => {
            this.cdr.detectChanges();
        });
    }
    openAdd() {
        this.modal.create(_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_7__["ConfigProductAddComponent"], { isAppend: false }, { size: 1200 }).subscribe((res) => {
            this.cdr.detectChanges();
        });
    }
    openDeatil(productId) {
        this.modal.create(_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ConfigProductDetailComponent"], { productId: productId }, { size: 1200 }).subscribe((res) => {
            this.cdr.detectChanges();
        });
    }
    openUpdate(productId, productName, description) {
        this.modal.create(_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_10__["ConfigProductUpdateComponent"], { isAppend: true, productId: productId, productName: productName, description: description }, { size: 1200 }).subscribe((res) => {
            this.cdr.detectChanges();
        });
    }
};
ConfigProductListComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["_HttpClient"] },
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["ModalHelper"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
ConfigProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-config-product-list',
        template: _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_list_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConfigProductListComponent);



/***/ }),

/***/ "KyF8":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/config/product/product-update/product-update.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ConfigProductUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigProductUpdateComponent", function() { return ConfigProductUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_update_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-update.component.html */ "s1iS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "AytR");







let ConfigProductUpdateComponent = class ConfigProductUpdateComponent {
    constructor(fb, http, modal) {
        this.fb = fb;
        this.http = http;
        this.modal = modal;
        // 本次添加 创建产品还是更新版本
        this.isAppend = false;
        // 如果是更新版本，字段有效。否则字段无意义。
        this.productId = 0;
        // 如果是更新版本，字段有效。否则字段无意义。
        this.productName = '';
        // 如果是更新版本，字段有效。否则字段无意义。
        this.description = '';
        this.usersOfManager = [];
        this.usersOfTester = [];
        this.assets = [];
        this.detail = -1;
        this.OSSPolicy = {
            "accessid": "",
            "policy": "",
            "signature": "",
            "dir": "",
            "host": "",
            "expire": "",
            "callback": ""
        };
        /**
         * 自定义上传产品的附件
         */
        this.customUpdateProductAssets = (item) => {
            this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/attached/OSS/getPolicy', { type: "productAssets" }).subscribe(res => {
                this.OSSPolicy = res.data;
                const { accessid, policy, signature, callback, dir, host } = this.OSSPolicy;
                let param = new FormData();
                param.append("OSSAccessKeyId", accessid);
                param.append("key", dir + item.file.name);
                param.append("policy", policy);
                param.append("Signature", signature);
                param.append("callback", callback);
                param.append("file", item.file);
                this.http.post(host, param)
                    .subscribe(res => {
                    this.assets.push({ id: res.data });
                    item.onSuccess(item.file);
                }, (err) => {
                    item.onError(err, item.file);
                });
            });
        };
        /**
        * 自定义上传产品说明
        */
        this.customUpdateProductDetail = (item) => {
            this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/attached/OSS/getPolicy', { type: "productDetail" }).subscribe(res => {
                this.OSSPolicy = res.data;
                const { accessid, policy, signature, callback, dir, host } = this.OSSPolicy;
                let param = new FormData();
                param.append("OSSAccessKeyId", accessid);
                param.append("key", dir + item.file.name);
                param.append("policy", policy);
                param.append("Signature", signature);
                param.append("callback", callback);
                param.append("file", item.file);
                this.http.post(host, param)
                    .subscribe(res => {
                    this.detail = res.data;
                    item.onSuccess(item.file);
                }, (err) => {
                    item.onError(err, item.file);
                });
            });
        };
    }
    ngOnInit() {
        this.form = this.fb.group({
            productName: [{ value: this.productName, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],],
            prodVersion: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            productManager: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            codeVersion: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            productAddress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            tester: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            description: [{ value: this.description, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.getAllUserOfTestManager();
        this.getAllUserOfProductManager();
    }
    close() {
        this.modal.destroy();
    }
    _submitForm() {
        var _a, _b, _c, _d;
        const productMeta = {
            latestRelease: (_a = this.form.get("prodVersion")) === null || _a === void 0 ? void 0 : _a.value,
        };
        const product = {
            productId: this.productId,
            managerId: (_b = this.form.get("productManager")) === null || _b === void 0 ? void 0 : _b.value,
            prodVersion: (_c = this.form.get("prodVersion")) === null || _c === void 0 ? void 0 : _c.value,
            productAddress: (_d = this.form.get("productAddress")) === null || _d === void 0 ? void 0 : _d.value,
            assetsList: this.assets,
            message: this.detail
        };
        const param = {
            productMeta: productMeta,
            product: product
        };
        this.http.put(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/product/appendProduct', param).subscribe(res => {
            this.close;
        });
    }
    getAllUserOfProductManager() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/userManager/getAllUser', { role: 20000 }).subscribe((res) => {
            this.usersOfManager = res.data;
        });
    }
    getAllUserOfTestManager() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/userManager/getAllUser', { role: 60000 }).subscribe((res) => {
            this.usersOfTester = res.data;
        });
    }
};
ConfigProductUpdateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["_HttpClient"] },
    { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"] }
];
ConfigProductUpdateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-config-product-update',
        template: _raw_loader_product_update_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ConfigProductUpdateComponent);



/***/ }),

/***/ "N+rp":
/*!********************************************************************************!*\
  !*** ./src/app/routes/config/product/product-list/product-list.component.less ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-info {\n  position: relative;\n  text-align: center;\n}\n.header-info > em {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 1px;\n  height: 56px;\n  background-color: #e8e8e8;\n}\n@media screen and (max-width: 576px) {\n  .header-info {\n    margin-bottom: 16px;\n  }\n  .header-info > em {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUhBO0VBSU0sa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFFTjtBQUVFO0VBQ0U7SUFDRSxtQkFBQTtFQUFKO0VBREU7SUFHSSxhQUFBO0VBQ047QUFDRiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWluZm8ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgPiBlbSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAuaGVhZGVyLWluZm8ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgID4gZW0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfSJdfQ== */");

/***/ }),

/***/ "QEwL":
/*!************************************************!*\
  !*** ./src/app/routes/config/config.module.ts ***!
  \************************************************/
/*! exports provided: ConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return ConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/pagination */ "3/1E");
/* harmony import */ var _delon_abc_footer_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/abc/footer-toolbar */ "ZfEh");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/affix */ "4hBO");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "xB20");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/steps */ "OEtX");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "q0Us");
/* harmony import */ var _config_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config-routing.module */ "pHqi");
/* harmony import */ var _product_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product/product-edit/product-edit.component */ "o8O4");
/* harmony import */ var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product/product-list/product-list.component */ "J/q1");
/* harmony import */ var _product_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product/product-add/product-add.component */ "VbdL");
/* harmony import */ var _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product/product-detail/product-detail.component */ "oMEh");
/* harmony import */ var _project_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./project/project-list/project-list.component */ "dGjv");
/* harmony import */ var _project_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./project/project-edit/project-edit.component */ "RQLV");
/* harmony import */ var _project_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./project/project-detail/project-detail.component */ "E9PB");
/* harmony import */ var _project_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./project/project-add/project-add.component */ "xNdv");
/* harmony import */ var _verify_verify_list_verify_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./verify/verify-list/verify-list.component */ "D8sg");
/* harmony import */ var _verify_verify_detail_verify_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./verify/verify-detail/verify-detail.component */ "sOuG");
/* harmony import */ var _deployment_deployment_list_deployment_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./deployment/deployment-list/deployment-list.component */ "k3D0");
/* harmony import */ var _deployment_deployment_detail_deployment_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./deployment/deployment-detail/deployment-detail.component */ "hfW2");
/* harmony import */ var _product_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./product/product-update/product-update.component */ "KyF8");
/* harmony import */ var _view_progress_progress_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./view/progress/progress.component */ "s/Bp");


























const COMPONENTS = [
    _product_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_12__["ConfigProductEditComponent"],
    _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__["ConfigProductListComponent"],
    _product_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_14__["ConfigProductAddComponent"],
    _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_15__["ConfigProductDetailComponent"],
    _project_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_16__["ConfigProjectListComponent"],
    _project_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_17__["ConfigProjectEditComponent"],
    _project_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_18__["ConfigProjectDetailComponent"],
    _project_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_19__["ConfigProjectAddComponent"],
    _verify_verify_list_verify_list_component__WEBPACK_IMPORTED_MODULE_20__["ConfigVerifyListComponent"],
    _verify_verify_detail_verify_detail_component__WEBPACK_IMPORTED_MODULE_21__["ConfigVerifyDetailComponent"],
    _deployment_deployment_list_deployment_list_component__WEBPACK_IMPORTED_MODULE_22__["ConfigDeploymentListComponent"],
    _deployment_deployment_detail_deployment_detail_component__WEBPACK_IMPORTED_MODULE_23__["ConfigDeploymentDetailComponent"],
    _view_progress_progress_component__WEBPACK_IMPORTED_MODULE_25__["ConfigProgressComponent"],
    _product_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_24__["ConfigProductUpdateComponent"]
];
let ConfigModule = class ConfigModule {
};
ConfigModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _config_routing_module__WEBPACK_IMPORTED_MODULE_11__["ConfigRoutingModule"],
            ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_4__["NzPaginationModule"],
            _delon_abc_footer_toolbar__WEBPACK_IMPORTED_MODULE_5__["FooterToolbarModule"],
            ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_6__["NzAffixModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"],
            ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__["NzPageHeaderModule"],
            ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__["NzDescriptionsModule"],
            ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_9__["NzStepsModule"],
            ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_10__["NzCascaderModule"],
        ],
        declarations: COMPONENTS,
    })
], ConfigModule);



/***/ }),

/***/ "RQLV":
/*!******************************************************************************!*\
  !*** ./src/app/routes/config/project/project-edit/project-edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConfigProjectEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigProjectEditComponent", function() { return ConfigProjectEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_project_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./project-edit.component.html */ "W1hk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");







let ConfigProjectEditComponent = class ConfigProjectEditComponent {
    constructor(http, fb, modal) {
        this.http = http;
        this.fb = fb;
        this.modal = modal;
        this.projectId = -1;
        // 所有的产品集合，相同产品归为一类。用于选定产品
        this.prodsWithVersionOptions = [];
        // 在本次编辑中新选中的产品数组
        this.afterSelectedProduct = [];
        // 本次编辑中被删除的产品
        this.deletedProduct = [];
        // 所有项目经理
        this.usersOfManager = [];
        // 原本的需要的产品
        this.beforeSelectedProduct = [];
        this.assetsList = [];
        this.data = [];
        /**
        * 自定义上传产品说明
        */
        this.customUpdateProjectDetail = (item) => {
            this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + '/api/attached/OSS/getPolicy', { type: "productDetail" }).subscribe(res => {
                const { accessid, policy, signature, callback, dir, host } = res.data;
                let param = new FormData();
                param.append("OSSAccessKeyId", accessid);
                param.append("key", dir + item.file.name);
                param.append("policy", policy);
                param.append("Signature", signature);
                param.append("callback", callback);
                param.append("file", item.file);
                this.http.post(host, param)
                    .subscribe((res) => {
                    this.assetsList.push({ id: res.data });
                    item.onSuccess(item.file);
                }, (err) => {
                    item.onError(err, item.file);
                });
            });
        };
    }
    ngOnInit() {
        this.form = this.fb.group({
            projectName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            contractAmount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            projectManager: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            projectAdress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            customerName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            contractNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.getData();
        this.getAllUserOfProjectManager();
        this.getAllProductVersion();
    }
    getData() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + '/api/project/getProjectDetail', { projectId: this.projectId }).subscribe(res => {
            var _a, _b, _c, _d, _e;
            this.beforeSelectedProduct = res.data.beforeSelectedProduct;
            (_a = this.form.get("customerName")) === null || _a === void 0 ? void 0 : _a.setValue(res.data.customerName);
            (_b = this.form.get("contractNumber")) === null || _b === void 0 ? void 0 : _b.setValue(res.data.contractNumber);
            (_c = this.form.get("projectName")) === null || _c === void 0 ? void 0 : _c.setValue(res.data.projectName);
            (_d = this.form.get("contractAmount")) === null || _d === void 0 ? void 0 : _d.setValue(res.data.contractAmount);
            (_e = this.form.get("projectAdress")) === null || _e === void 0 ? void 0 : _e.setValue(res.data.projectAddress);
        });
    }
    getAllUserOfProjectManager() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + '/api/userManager/getAllUser', { role: 30000 }).subscribe((res) => {
            this.usersOfManager = res.data;
        });
    }
    /**
   * 获取所有产品（所有版本）
   */
    getAllProductVersion() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + '/api/product/getAllProductVersion').subscribe(res => {
            this.prodsWithVersionOptions = res.data;
        });
    }
    _submitForm() {
        var _a, _b, _c, _d, _e, _f;
        const param = {
            projectId: this.projectId,
            projectName: (_a = this.form.get("projectName")) === null || _a === void 0 ? void 0 : _a.value,
            projectCustomName: (_b = this.form.get("customerName")) === null || _b === void 0 ? void 0 : _b.value,
            amount: (_c = this.form.get("contractAmount")) === null || _c === void 0 ? void 0 : _c.value,
            projectAddress: (_d = this.form.get("projectAdress")) === null || _d === void 0 ? void 0 : _d.value,
            managerId: (_e = this.form.get("projectManager")) === null || _e === void 0 ? void 0 : _e.value,
            projectNumber: (_f = this.form.get("contractNumber")) === null || _f === void 0 ? void 0 : _f.value,
            appendProductList: this.afterSelectedProduct,
            deletedProductList: this.deletedProduct,
            assetsList: this.assetsList
        };
        this.http.put(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + '/api/project/editProject', param).subscribe(res => {
            console.log(res);
        });
    }
    selectProd(values) {
        let item = {
            "productName": values[1].parent.productName,
            "prodVersion": values[1].productName,
            "productId": values[1].parent.productId
        };
        this.afterSelectedProduct.push(item);
    }
    /**
     * 在 afterSelectedProduct 数组中根据 productId 删除元素
     */
    removeAfterSelectedProduct(productId) {
        this.afterSelectedProduct = this.afterSelectedProduct.filter(item => {
            if (item.productId == productId) {
                return false;
            }
            else {
                return true;
            }
        });
    }
    /**
     * 在 data.beforeSelectedProduct 数组中根据 productId 删除元素
     */
    removeBeforeSelectedProduct(productId) {
        this.beforeSelectedProduct = this.beforeSelectedProduct.filter((item) => {
            if (item.productId == productId) {
                this.deletedProduct.push(item);
                return false;
            }
            else {
                return true;
            }
        });
    }
    close() {
        this.modal.destroy();
    }
};
ConfigProjectEditComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["_HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalRef"] }
];
ConfigProjectEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-config-project-edit',
        template: _raw_loader_project_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ConfigProjectEditComponent);



/***/ }),

/***/ "VbdL":
/*!****************************************************************************!*\
  !*** ./src/app/routes/config/product/product-add/product-add.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfigProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigProductAddComponent", function() { return ConfigProductAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-add.component.html */ "INX6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "AytR");







let ConfigProductAddComponent = class ConfigProductAddComponent {
    constructor(fb, http, modal) {
        this.fb = fb;
        this.http = http;
        this.modal = modal;
        // 本次添加 创建产品还是更新版本
        this.isAppend = false;
        // 如果是更新版本，字段有效。否则字段无意义。
        this.productId = 0;
        // 如果是更新版本，字段有效。否则字段无意义。
        this.productName = '';
        // 如果是更新版本，字段有效。否则字段无意义。
        this.description = '';
        this.usersOfManager = [];
        this.usersOfTester = [];
        this.assets = [];
        this.detail = -1;
        this.OSSPolicy = {
            "accessid": "",
            "policy": "",
            "signature": "",
            "dir": "",
            "host": "",
            "expire": "",
            "callback": ""
        };
        /**
         * 自定义上传产品的附件
         */
        this.customUpdateProductAssets = (item) => {
            this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/attached/OSS/getPolicy', { type: "productAssets" }).subscribe(res => {
                this.OSSPolicy = res.data;
                const { accessid, policy, signature, callback, dir, host } = this.OSSPolicy;
                let param = new FormData();
                param.append("OSSAccessKeyId", accessid);
                param.append("key", dir + item.file.name);
                param.append("policy", policy);
                param.append("Signature", signature);
                param.append("callback", callback);
                param.append("file", item.file);
                this.http.post(host, param)
                    .subscribe(res => {
                    this.assets.push({ id: res.data });
                    item.onSuccess(item.file);
                }, (err) => {
                    item.onError(err, item.file);
                });
            });
        };
        /**
        * 自定义上传产品说明
        */
        this.customUpdateProductDetail = (item) => {
            this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/attached/OSS/getPolicy', { type: "productDetail" }).subscribe(res => {
                this.OSSPolicy = res.data;
                const { accessid, policy, signature, callback, dir, host } = this.OSSPolicy;
                let param = new FormData();
                param.append("OSSAccessKeyId", accessid);
                param.append("key", dir + item.file.name);
                param.append("policy", policy);
                param.append("Signature", signature);
                param.append("callback", callback);
                param.append("file", item.file);
                this.http.post(host, param)
                    .subscribe(res => {
                    this.detail = res.data;
                    item.onSuccess(item.file);
                }, (err) => {
                    item.onError(err, item.file);
                });
            });
        };
    }
    ngOnInit() {
        this.form = this.fb.group({
            productName: [{ value: this.productName, disabled: this.isAppend }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],],
            prodVersion: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            productManager: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            codeVersion: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            productAddress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            tester: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            description: [{ value: this.description, disabled: this.isAppend }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.getAllUserOfTestManager();
        this.getAllUserOfProductManager();
    }
    close() {
        this.modal.destroy();
    }
    _submitForm() {
        var _a, _b, _c, _d, _e, _f;
        const productMeta = {
            productName: (_a = this.form.get("productName")) === null || _a === void 0 ? void 0 : _a.value,
            description: (_b = this.form.get("description")) === null || _b === void 0 ? void 0 : _b.value,
            latestRelease: (_c = this.form.get("prodVersion")) === null || _c === void 0 ? void 0 : _c.value,
        };
        const product = {
            managerId: (_d = this.form.get("productManager")) === null || _d === void 0 ? void 0 : _d.value,
            prodVersion: (_e = this.form.get("prodVersion")) === null || _e === void 0 ? void 0 : _e.value,
            productAddress: (_f = this.form.get("productAddress")) === null || _f === void 0 ? void 0 : _f.value,
            assetsList: this.assets,
            message: this.detail
        };
        const param = {
            productMeta: productMeta,
            product: product
        };
        this.http.post(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/product/addProduct', param).subscribe(res => {
            this.close;
        });
    }
    getAllUserOfProductManager() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/userManager/getAllUser', { role: 20000 }).subscribe((res) => {
            this.usersOfManager = res.data;
        });
    }
    getAllUserOfTestManager() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/userManager/getAllUser', { role: 60000 }).subscribe((res) => {
            this.usersOfTester = res.data;
        });
    }
};
ConfigProductAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["_HttpClient"] },
    { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"] }
];
ConfigProductAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-config-product-add',
        template: _raw_loader_product_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ConfigProductAddComponent);



/***/ }),

/***/ "W1hk":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/config/project/project-edit/project-edit.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header title=\"添加项目\">\n\n</page-header>\n<form nz-form [formGroup]=\"form\" [nzLayout]=\"'vertical'\">\n  <nz-card [nzBordered]=\"false\" nzTitle=\"基本信息\">\n    <nz-row nzGutter=\"16\">\n      <nz-col nzLg=\"6\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label nzFor=\"name\">项目名</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入产品名\">\n            <input nz-input formControlName=\"projectName\" id=\"projectName\" placeholder=\"请输入项目名\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 6, offset: 2 }\" [nzLg]=\"{ span: 8 }\" [nzMd]=\"{ span: 12 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>项目合同额</nz-form-label>\n          <nz-form-control nzErrorTip=\"项目合同额\">\n            <input nz-input formControlName=\"contractAmount\" placeholder=\"项目合同额\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 8, offset: 2 }\" [nzLg]=\"{ span: 10 }\" [nzMd]=\"{ span: 24 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>项目经理</nz-form-label>\n          <nz-form-control nzErrorTip=\"请选择产品经理\">\n            <nz-select formControlName=\"projectManager\" [nzPlaceHolder]=\"'请选择产品经理'\" [nzShowSearch]=\"true\">\n              <nz-option *ngFor=\"let i of usersOfManager\" [nzLabel]=\"i.realname\" [nzValue]=\"i.id\"></nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n    </nz-row>\n    <nz-row nzGutter=\"16\">\n      <nz-col nzLg=\"6\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>项目地址</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入项目地址\">\n            <input nz-input formControlName=\"projectAdress\" placeholder=\"请输入项目地址\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 6, offset: 2 }\" [nzLg]=\"{ span: 8 }\" [nzMd]=\"{ span: 12 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>客户名称</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入客户名称\">\n            <input nz-input formControlName=\"customerName\" placeholder=\"请输入客户名称\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 8, offset: 2 }\" [nzLg]=\"{ span: 10 }\" [nzMd]=\"{ span: 24 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>合同编号</nz-form-label>\n          <nz-form-control nzErrorTip=\"请选择合同编号\">\n            <input nz-input formControlName=\"contractNumber\" placeholder=\"请输入合同编号\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n    </nz-row>\n  </nz-card>\n  <nz-card [nzBordered]=\"false\" nzTitle=\"附件信息\">\n    <nz-upload nzType=\"drag\" [nzMultiple]=\"true\" nzAction=\"https://config-service.oss-cn-beijing.aliyuncs.com\"\n      [nzCustomRequest]=\"customUpdateProjectDetail\">\n      <p class=\"ant-upload-drag-icon\">\n        <i nz-icon nzType=\"inbox\"></i>\n      </p>\n      <p class=\"ant-upload-text\">点击或拖动文件到此处用以上传</p>\n      <p class=\"ant-upload-hint\">\n        支持单次或批量上传。\n      </p>\n    </nz-upload>\n  </nz-card>\n  <nz-card [nzBordered]=\"false\" nzTitle=\"详细信息\" [nzExtra]=\"selectProduct\">\n    <nz-list nzBordered>\n      <nz-list-item *ngFor=\"let item of beforeSelectedProduct\">\n        <ul nz-list-item-actions>\n          <nz-list-item-action>\n            <a (click)=\"removeBeforeSelectedProduct(item.productId)\">删除</a>\n          </nz-list-item-action>\n        </ul>\n        <span nz-typography>{{item.productName}} v {{item.prodVersion}}</span>\n      </nz-list-item>\n      <nz-list-item *ngFor=\"let item of afterSelectedProduct\">\n        <ul nz-list-item-actions>\n          <nz-list-item-action>\n            <a (click)=\"removeAfterSelectedProduct(item.productId)\">删除</a>\n          </nz-list-item-action>\n        </ul>\n        <span nz-typography>{{item.productName}} v {{item.prodVersion}}</span>\n      </nz-list-item>\n    </nz-list>\n  </nz-card>\n  <ng-template #selectProduct>\n    <nz-cascader [nzLabelProperty]=\"'productName'\" [nzOptions]=\"prodsWithVersionOptions\" [nzAllowClear]=\"true\"\n      (nzSelectionChange)=\"selectProd($event)\">\n    </nz-cascader>\n  </ng-template>\n  <div style=\"float: right;\">\n    <button nz-button type=\"primary\" nzType=\"primary\" (click)=\"close()\">取消</button>\n    <button nz-button type=\"primary\" nzType=\"primary\" (click)=\"_submitForm()\">提交</button>\n  </div>");

/***/ }),

/***/ "Wfz8":
/*!********************************************************************************!*\
  !*** ./src/app/routes/config/project/project-list/project-list.component.less ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-info {\n  position: relative;\n  text-align: center;\n}\n.header-info > em {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 1px;\n  height: 56px;\n  background-color: #e8e8e8;\n}\n@media screen and (max-width: 576px) {\n  .header-info {\n    margin-bottom: 16px;\n  }\n  .header-info > em {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUhBO0VBSU0sa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFFTjtBQUVFO0VBQ0U7SUFDRSxtQkFBQTtFQUFKO0VBREU7SUFHSSxhQUFBO0VBQ047QUFDRiIsImZpbGUiOiJwcm9qZWN0LWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWluZm8ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgPiBlbSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAuaGVhZGVyLWluZm8ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgID4gZW0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfSJdfQ== */");

/***/ }),

/***/ "btRR":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/config/product/product-list/product-list.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header [title]=\"null\"></page-header>\n<nz-card [nzBordered]=\"false\">\n  <div nz-row>\n    <div nz-col [nzXs]=\"24\" [nzSm]=\"8\" class=\"header-info\">\n      <span class=\"text-grey-dark\">我的产品</span>\n      <span class=\"d-block display-2\">{{this.total}}个产品</span>\n      <em></em>\n    </div>\n    <div nz-col [nzXs]=\"24\" [nzSm]=\"8\" class=\"header-info\">\n      <span class=\"text-grey-dark\">本周/月更新次数</span>\n      <span class=\"d-block display-2\">2/7</span>\n      <em></em>\n    </div>\n    <div nz-col [nzXs]=\"24\" [nzSm]=\"8\" class=\"header-info\">\n      <span class=\"text-grey-dark\">本周需求完成数量</span>\n      <span class=\"d-block display-2\">24个</span>\n    </div>\n  </div>\n</nz-card>\n<nz-card [nzBordered]=\"false\">\n  <div class=\"d-flex align-items-center mb-lg\">\n    <h3 class=\"flex-1 text-lg\">产品列表</h3>\n  </div>\n  <button nz-button (click)=\"openAdd()\" [nzType]=\"'dashed'\" nzBlock class=\"mb-sm\">\n    <i nz-icon nzType=\"plus\"></i>\n    <span>添加</span>\n  </button>\n  <nz-list [nzDataSource]=\"data\" [nzLoading]=\"loading\" [nzRenderItem]=\"item\" [nzPagination]=\"pagination\">\n    <ng-template #item let-item>\n      <nz-list-item [nzContent]=\"nzContent\" [nzActions]=\"[edit, op]\">\n        <ng-template #edit>\n          <a (click)=\"openEdit(item.productId,item.productVersion)\">编辑</a>\n        </ng-template>\n        <ng-template #op>\n          <a class=\"ant-dropdown-link\" nz-dropdown [nzDropdownMenu]=\"opMenu\">\n            更多\n            <i nz-icon nzType=\"down\"></i>\n          </a>\n          <nz-dropdown-menu #opMenu=\"nzDropdownMenu\">\n            <ul nz-menu>\n              <li nz-menu-item (click)=\"openDeatil(item.productId)\">查看详情</li>\n              <li nz-menu-item (click)=\"openEdit(item.productId,item.productVersion)\">编辑</li>\n              <li nz-menu-item (click)=\"openUpdate(item.productId,item.productName,item.message)\">更新</li>\n            </ul>\n          </nz-dropdown-menu>\n        </ng-template>\n        <nz-list-item-meta [nzTitle]=\"nzTitle\" [nzDescription]=\"item.message\" [nzAvatar]=\"nzAvatar\">\n          <ng-template #nzTitle>\n            <a (click)=\"openDeatil(item)\" target=\"_blank\">{{ item.productName }}</a>\n          </ng-template>\n          <ng-template #nzAvatar>\n            <nz-avatar [nzSrc]=\"item.avatarSrc\" nzSize=\"large\" [nzShape]=\"'square'\"></nz-avatar>\n          </ng-template>\n        </nz-list-item-meta>\n        <ng-template #nzContent>\n          <div class=\"width-md\">\n            <div class=\"d-flex text-grey-dark\">\n              <div class=\"flex-1\">\n                产品经理\n                <p>{{ item.manager.realname }}</p>\n              </div>\n              <div class=\"text-right\">\n                修改时间\n                <p>{{ item.modifyTime | _date }}</p>\n              </div>\n            </div>\n            <nz-progress [nzPercent]=\"item.percent\" [nzStatus]=\"item.status\" [nzStrokeWidth]=\"6\"></nz-progress>\n          </div>\n        </ng-template>\n      </nz-list-item>\n    </ng-template>\n    <ng-template #pagination>\n      <nz-pagination [nzTotal]=\"total\" [nzPageSize]=\"5\" (nzPageIndexChange)=\"pageIndexChange($event)\"></nz-pagination>\n    </ng-template>\n  </nz-list>\n</nz-card>");

/***/ }),

/***/ "dGjv":
/*!******************************************************************************!*\
  !*** ./src/app/routes/config/project/project-list/project-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConfigProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigProjectListComponent", function() { return ConfigProjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_project_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./project-list.component.html */ "0fcn");
/* harmony import */ var _project_list_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-list.component.less */ "Wfz8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _project_add_project_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../project-add/project-add.component */ "xNdv");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../project-detail/project-detail.component */ "E9PB");
/* harmony import */ var _project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../project-edit/project-edit.component */ "RQLV");









let ConfigProjectListComponent = class ConfigProjectListComponent {
    constructor(http, modal, cdr) {
        this.http = http;
        this.modal = modal;
        this.cdr = cdr;
        this.q = {
            q: '',
            status: 'all',
        };
        this.loading = false;
        this.data = [];
    }
    ngOnInit() {
        this.getData();
    }
    openAdd() {
        this.modal.create(_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_6__["ConfigProjectAddComponent"], {}, { size: 1200 }).subscribe((res) => {
            this.cdr.detectChanges();
        });
    }
    openEdit(projectId) {
        this.modal.create(_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_8__["ConfigProjectEditComponent"], { projectId }, { size: 1200 }).subscribe((res) => {
            this.cdr.detectChanges();
        });
    }
    openDetail(projectId) {
        this.modal.create(_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_7__["ConfigProjectDetailComponent"], { projectId }, { size: 1200 }).subscribe((res) => {
            this.cdr.detectChanges();
        });
    }
    openApply(projectId) {
        this.http.put(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + '/api/project/apply', projectId).subscribe(res => {
            this.getData();
        });
    }
    getData() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL + '/api/project/getList', { pageNum: 0, pageSize: 5 }).subscribe((res) => {
            this.data = res.data;
            this.loading = false;
            this.cdr.detectChanges();
        });
    }
};
ConfigProjectListComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["_HttpClient"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["ModalHelper"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
ConfigProjectListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-config-project-list',
        template: _raw_loader_project_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_project_list_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConfigProjectListComponent);



/***/ }),

/***/ "fV6e":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/config/deployment/deployment-detail/deployment-detail.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header title=\"项目详情\">\n\n</page-header>\n<nz-card [nzBordered]=\"false\" nzTitle=\"基本信息\">\n  <nz-row nzGutter=\"16\">\n    <nz-col nzLg=\"6\" nzMd=\"12\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label nzFor=\"name\">项目名</nz-form-label>\n        <nz-form-control>\n          <span id=\"projectName\">{{data.projectName}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n    <nz-col [nzXl]=\"{ span: 6, offset: 2 }\" [nzLg]=\"{ span: 8 }\" [nzMd]=\"{ span: 12 }\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label>项目合同额</nz-form-label>\n        <nz-form-control>\n          <span>{{data.contractAmount}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n    <nz-col [nzXl]=\"{ span: 8, offset: 2 }\" [nzLg]=\"{ span: 10 }\" [nzMd]=\"{ span: 24 }\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label>项目经理</nz-form-label>\n        <nz-form-control>\n          <span>{{data.projectManager}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n  </nz-row>\n  <nz-row nzGutter=\"16\">\n    <nz-col nzLg=\"6\" nzMd=\"12\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label>项目地址</nz-form-label>\n        <nz-form-control>\n          <span>{{data.projectAddress}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n    <nz-col [nzXl]=\"{ span: 6, offset: 2 }\" [nzLg]=\"{ span: 8 }\" [nzMd]=\"{ span: 12 }\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label>客户名称</nz-form-label>\n        <nz-form-control>\n          <span>{{data.customerName}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n    <nz-col [nzXl]=\"{ span: 8, offset: 2 }\" [nzLg]=\"{ span: 10 }\" [nzMd]=\"{ span: 24 }\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label>合同编号</nz-form-label>\n        <nz-form-control>\n          <span>{{data.contractNumber}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n  </nz-row>\n  <config-app-progress [item]=\"data\"></config-app-progress>\n</nz-card>\n<nz-card [nzBordered]=\"false\" nzTitle=\"依赖产品\">\n  <nz-list nzBordered>\n    <nz-list-item *ngFor=\"let item of data.beforeSelectedProduct\">\n      <span nz-typography><a (click)=\"openProductDetail(item.productId)\">{{item.productName}} v {{item.prodVersion}}</a></span>\n    </nz-list-item>\n  </nz-list>\n</nz-card>\n<div style=\"float: right;\">\n  <button nz-button type=\"primary\" nzType=\"primary\" (click)=\"close()\">取消</button>\n</div>");

/***/ }),

/***/ "gJbj":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/config/view/progress/progress.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-steps [nzCurrent]=\"item?.progress - 1\" nzProgressDot>\n  <nz-step [nzTitle]=\"'创建项目'\" [nzDescription]=\"createDesc\">\n    <ng-template #createDesc>\n      <div class=\"desc\">\n        <div class=\"my-sm\">\n          {{item?.ops[0].oper.realname}}\n          <i nz-icon nzType=\"dingding\" class=\"ml-sm\"></i>\n        </div>\n        <div>{{item?.ops[0].opTime | date:'yyyy-MM-dd'}}</div>\n      </div>\n    </ng-template>\n  </nz-step>\n  <nz-step [nzTitle]=\"'申请产品包'\" [nzDescription]=\"checkedDesc\">\n    <ng-template #checkedDesc>\n      <div class=\"desc\">\n        <div class=\"my-sm\" *ngIf='item?.progress > 2'>\n          {{item?.ops[1].oper.realname}}\n          <i nz-icon nzType=\"dingding\" class=\"ml-sm\" style=\"color: #00a0e9;\"></i>\n        </div>\n        <div *ngIf='item?.progress > 2'>{{item?.ops[1].opTime | date:'yyyy-MM-dd'}}</div>\n        <a *ngIf='item?.progress == 2'>催一下</a>\n      </div>\n    </ng-template>\n  </nz-step>\n  <nz-step [nzTitle]=\"'校验产品包'\" [nzDescription]=\"verifyDesc\">\n    <ng-template #verifyDesc>\n      <div class=\"desc\">\n        <div class=\"my-sm\" *ngIf='item?.progress > 2'>\n          {{item?.ops[2].oper.realname}}\n          <i nz-icon nzType=\"dingding\" class=\"ml-sm\" style=\"color: #00a0e9;\"></i>\n        </div>\n        <div *ngIf='item?.progress > 3'>{{item?.ops[2].opTime | date:'yyyy-MM-dd'}}</div>\n        <a *ngIf='item?.progress === 3'>催一下</a>\n      </div>\n    </ng-template>\n  </nz-step>\n  <nz-step [nzTitle]=\"'部署中'\" [nzDescription]=\"deployDesc\">\n    <ng-template #deployDesc>\n      <div class=\"desc\">\n        <div class=\"my-sm\" *ngIf='item?.progress > 3'>\n          {{item?.ops[3].oper.realname}}\n          <i nz-icon nzType=\"dingding\" class=\"ml-sm\" style=\"color: #00a0e9;\"></i>\n        </div>\n        <div *ngIf='item?.progress > 4'>{{item?.ops[3].opTime | date:'yyyy-MM-dd'}}</div>\n        <a *ngIf='item?.progress == 4'>催一下</a>\n      </div>\n    </ng-template>\n  </nz-step>\n  <nz-step [nzTitle]=\"'完成'\" [nzDescription]=\"successDesc\">\n    <ng-template #successDesc>\n      <div class=\"desc\">\n        <div class=\"my-sm\" *ngIf='item?.progress > 4'>\n          {{item?.ops[4].oper.realname}}\n          <i nz-icon nzType=\"dingding\" class=\"ml-sm\" style=\"color: #00a0e9;\"></i>\n        </div>\n        <div *ngIf='item?.progress > 4'>{{item?.ops[4].opTime | date:'yyyy-MM-dd'}}</div>\n        <a *ngIf='item?.progress === 5'>催一下</a>\n      </div>\n    </ng-template>\n  </nz-step>\n</nz-steps>");

/***/ }),

/***/ "hfW2":
/*!*******************************************************************************************!*\
  !*** ./src/app/routes/config/deployment/deployment-detail/deployment-detail.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ConfigDeploymentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigDeploymentDetailComponent", function() { return ConfigDeploymentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_deployment_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./deployment-detail.component.html */ "fV6e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../product/product-detail/product-detail.component */ "oMEh");








let ConfigDeploymentDetailComponent = class ConfigDeploymentDetailComponent {
    constructor(http, modal, fb, model) {
        this.http = http;
        this.modal = modal;
        this.fb = fb;
        this.model = model;
        this.projectId = -1;
        this.data = [];
        this.projectPachage = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            projectName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            contractAmount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            projectManager: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            projectAdress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            customerName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            contractNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.getData();
    }
    /**
     * 获取数据
     */
    getData() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/project/getProjectDetail', { projectId: this.projectId }).subscribe(res => {
            this.data = res.data;
        });
    }
    close() {
        this.modal.destroy();
    }
    /**
     * 打开产品详情页
     */
    openProductDetail(productId) {
        this.model.create(_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ConfigProductDetailComponent"], { productId }, { size: 1200 }).subscribe((res) => {
        });
    }
};
ConfigDeploymentDetailComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["_HttpClient"] },
    { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["ModalHelper"] }
];
ConfigDeploymentDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-config-deployment-detail',
        template: _raw_loader_deployment_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ConfigDeploymentDetailComponent);



/***/ }),

/***/ "jPNr":
/*!***************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-page-header.js ***!
  \***************************************************************************************/
/*! exports provided: NzPageHeaderAvatarDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderComponent, NzPageHeaderContentDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderModule, NzPageHeaderSubtitleDirective, NzPageHeaderTagDirective, NzPageHeaderTitleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderAvatarDirective", function() { return NzPageHeaderAvatarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderBreadcrumbDirective", function() { return NzPageHeaderBreadcrumbDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderComponent", function() { return NzPageHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderContentDirective", function() { return NzPageHeaderContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderExtraDirective", function() { return NzPageHeaderExtraDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderFooterDirective", function() { return NzPageHeaderFooterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderModule", function() { return NzPageHeaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderSubtitleDirective", function() { return NzPageHeaderSubtitleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderTagDirective", function() { return NzPageHeaderTagDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPageHeaderTitleDirective", function() { return NzPageHeaderTitleDirective; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "79xS");
/* harmony import */ var ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/resize-observers */ "/Kk4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");












/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */








function NzPageHeaderComponent_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const backIcon_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", backIcon_r6 || ctx_r5.getBackIcon());
} }
function NzPageHeaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzPageHeaderComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPageHeaderComponent_div_3_ng_container_2_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzBackIcon);
} }
function NzPageHeaderComponent_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.nzTitle);
} }
function NzPageHeaderComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPageHeaderComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.nzTitle);
} }
function NzPageHeaderComponent_ng_content_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 6, ["*ngIf", "!nzTitle"]);
} }
function NzPageHeaderComponent_span_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.nzSubtitle);
} }
function NzPageHeaderComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPageHeaderComponent_span_7_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzSubtitle);
} }
function NzPageHeaderComponent_ng_content_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 7, ["*ngIf", "!nzSubtitle"]);
} }
const _c0 = [[["nz-breadcrumb", "nz-page-header-breadcrumb", ""]], [["nz-avatar", "nz-page-header-avatar", ""]], [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]], [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]], [["nz-page-header-content"], ["", "nz-page-header-content", ""]], [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]], [["nz-page-header-title"], ["", "nz-page-header-title", ""]], [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]]];
const _c1 = ["nz-breadcrumb[nz-page-header-breadcrumb]", "nz-avatar[nz-page-header-avatar]", "nz-page-header-tags, [nz-page-header-tags]", "nz-page-header-extra, [nz-page-header-extra]", "nz-page-header-content, [nz-page-header-content]", "nz-page-header-footer, [nz-page-header-footer]", "nz-page-header-title, [nz-page-header-title]", "nz-page-header-subtitle, [nz-page-header-subtitle]"];
class NzPageHeaderTitleDirective {
}
NzPageHeaderTitleDirective.ɵfac = function NzPageHeaderTitleDirective_Factory(t) { return new (t || NzPageHeaderTitleDirective)(); };
NzPageHeaderTitleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzPageHeaderTitleDirective, selectors: [["nz-page-header-title"], ["", "nz-page-header-title", ""]], hostAttrs: [1, "ant-page-header-heading-title"], exportAs: ["nzPageHeaderTitle"] });
class NzPageHeaderSubtitleDirective {
}
NzPageHeaderSubtitleDirective.ɵfac = function NzPageHeaderSubtitleDirective_Factory(t) { return new (t || NzPageHeaderSubtitleDirective)(); };
NzPageHeaderSubtitleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzPageHeaderSubtitleDirective, selectors: [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]], hostAttrs: [1, "ant-page-header-heading-sub-title"], exportAs: ["nzPageHeaderSubtitle"] });
class NzPageHeaderContentDirective {
}
NzPageHeaderContentDirective.ɵfac = function NzPageHeaderContentDirective_Factory(t) { return new (t || NzPageHeaderContentDirective)(); };
NzPageHeaderContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzPageHeaderContentDirective, selectors: [["nz-page-header-content"], ["", "nz-page-header-content", ""]], hostAttrs: [1, "ant-page-header-content"], exportAs: ["nzPageHeaderContent"] });
class NzPageHeaderTagDirective {
}
NzPageHeaderTagDirective.ɵfac = function NzPageHeaderTagDirective_Factory(t) { return new (t || NzPageHeaderTagDirective)(); };
NzPageHeaderTagDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzPageHeaderTagDirective, selectors: [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]], hostAttrs: [1, "ant-page-header-heading-tags"], exportAs: ["nzPageHeaderTags"] });
class NzPageHeaderExtraDirective {
}
NzPageHeaderExtraDirective.ɵfac = function NzPageHeaderExtraDirective_Factory(t) { return new (t || NzPageHeaderExtraDirective)(); };
NzPageHeaderExtraDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzPageHeaderExtraDirective, selectors: [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]], hostAttrs: [1, "ant-page-header-heading-extra"], exportAs: ["nzPageHeaderExtra"] });
class NzPageHeaderFooterDirective {
}
NzPageHeaderFooterDirective.ɵfac = function NzPageHeaderFooterDirective_Factory(t) { return new (t || NzPageHeaderFooterDirective)(); };
NzPageHeaderFooterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzPageHeaderFooterDirective, selectors: [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]], hostAttrs: [1, "ant-page-header-footer"], exportAs: ["nzPageHeaderFooter"] });
class NzPageHeaderBreadcrumbDirective {
}
NzPageHeaderBreadcrumbDirective.ɵfac = function NzPageHeaderBreadcrumbDirective_Factory(t) { return new (t || NzPageHeaderBreadcrumbDirective)(); };
NzPageHeaderBreadcrumbDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzPageHeaderBreadcrumbDirective, selectors: [["nz-breadcrumb", "nz-page-header-breadcrumb", ""]], exportAs: ["nzPageHeaderBreadcrumb"] });
class NzPageHeaderAvatarDirective {
}
NzPageHeaderAvatarDirective.ɵfac = function NzPageHeaderAvatarDirective_Factory(t) { return new (t || NzPageHeaderAvatarDirective)(); };
NzPageHeaderAvatarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzPageHeaderAvatarDirective, selectors: [["nz-avatar", "nz-page-header-avatar", ""]], exportAs: ["nzPageHeaderAvatar"] });

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME = 'pageHeader';
class NzPageHeaderComponent {
    constructor(location, nzConfigService, elementRef, nzResizeObserver, cdr, directionality) {
        this.location = location;
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.nzResizeObserver = nzResizeObserver;
        this.cdr = cdr;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzBackIcon = null;
        this.nzGhost = true;
        this.nzBack = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.compact = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.dir = 'ltr';
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterViewInit() {
        this.nzResizeObserver
            .observe(this.elementRef)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(([entry]) => entry.contentRect.width), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$))
            .subscribe((width) => {
            this.compact = width < 768;
            this.cdr.markForCheck();
        });
    }
    onBack() {
        if (this.nzBack.observers.length) {
            this.nzBack.emit();
        }
        else {
            if (!this.location) {
                throw new Error(`${ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_7__["PREFIX"]} you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!`);
            }
            this.location.back();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    getBackIcon() {
        if (this.dir === 'rtl') {
            return 'arrow-right';
        }
        return 'arrow-left';
    }
}
NzPageHeaderComponent.ɵfac = function NzPageHeaderComponent_Factory(t) { return new (t || NzPageHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8)); };
NzPageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzPageHeaderComponent, selectors: [["nz-page-header"]], contentQueries: function NzPageHeaderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzPageHeaderFooterDirective, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzPageHeaderBreadcrumbDirective, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nzPageHeaderFooter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nzPageHeaderBreadcrumb = _t.first);
    } }, hostAttrs: [1, "ant-page-header"], hostVars: 10, hostBindings: function NzPageHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-footer", ctx.nzPageHeaderFooter)("ant-page-header-ghost", ctx.nzGhost)("has-breadcrumb", ctx.nzPageHeaderBreadcrumb)("ant-page-header-compact", ctx.compact)("ant-page-header-rtl", ctx.dir === "rtl");
    } }, inputs: { nzBackIcon: "nzBackIcon", nzGhost: "nzGhost", nzTitle: "nzTitle", nzSubtitle: "nzSubtitle" }, outputs: { nzBack: "nzBack" }, exportAs: ["nzPageHeader"], ngContentSelectors: _c1, decls: 13, vars: 5, consts: [[1, "ant-page-header-heading"], [1, "ant-page-header-heading-left"], ["class", "ant-page-header-back", 3, "click", 4, "ngIf"], ["class", "ant-page-header-heading-title", 4, "ngIf"], [4, "ngIf"], ["class", "ant-page-header-heading-sub-title", 4, "ngIf"], [1, "ant-page-header-back", 3, "click"], ["role", "button", "tabindex", "0", 1, "ant-page-header-back-button"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], [1, "ant-page-header-heading-title"], [1, "ant-page-header-heading-sub-title"]], template: function NzPageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzPageHeaderComponent_div_3_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzPageHeaderComponent_span_5_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzPageHeaderComponent_ng_content_6_Template, 1, 0, "ng-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NzPageHeaderComponent_span_7_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NzPageHeaderComponent_ng_content_8_Template, 1, 0, "ng-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](9, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](10, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](11, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](12, 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzBackIcon !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzSubtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nzSubtitle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
NzPageHeaderComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
NzPageHeaderComponent.propDecorators = {
    nzBackIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzGhost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzPageHeaderFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [NzPageHeaderFooterDirective, { static: false },] }],
    nzPageHeaderBreadcrumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [NzPageHeaderBreadcrumbDirective, { static: false },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Boolean)
], NzPageHeaderComponent.prototype, "nzGhost", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderTitleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'nz-page-header-title, [nz-page-header-title]',
                exportAs: 'nzPageHeaderTitle',
                host: {
                    class: 'ant-page-header-heading-title'
                }
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderSubtitleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'nz-page-header-subtitle, [nz-page-header-subtitle]',
                exportAs: 'nzPageHeaderSubtitle',
                host: {
                    class: 'ant-page-header-heading-sub-title'
                }
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderContentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'nz-page-header-content, [nz-page-header-content]',
                exportAs: 'nzPageHeaderContent',
                host: {
                    class: 'ant-page-header-content'
                }
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderTagDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'nz-page-header-tags, [nz-page-header-tags]',
                exportAs: 'nzPageHeaderTags',
                host: {
                    class: 'ant-page-header-heading-tags'
                }
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderExtraDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'nz-page-header-extra, [nz-page-header-extra]',
                exportAs: 'nzPageHeaderExtra',
                host: {
                    class: 'ant-page-header-heading-extra'
                }
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderFooterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'nz-page-header-footer, [nz-page-header-footer]',
                exportAs: 'nzPageHeaderFooter',
                host: {
                    class: 'ant-page-header-footer'
                }
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderBreadcrumbDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'nz-breadcrumb[nz-page-header-breadcrumb]',
                exportAs: 'nzPageHeaderBreadcrumb'
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderAvatarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'nz-avatar[nz-page-header-avatar]',
                exportAs: 'nzPageHeaderAvatar'
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-page-header',
                exportAs: 'nzPageHeader',
                template: `
    <ng-content select="nz-breadcrumb[nz-page-header-breadcrumb]"></ng-content>

    <div class="ant-page-header-heading">
      <div class="ant-page-header-heading-left">
        <!--back-->
        <div *ngIf="nzBackIcon !== null" (click)="onBack()" class="ant-page-header-back">
          <div role="button" tabindex="0" class="ant-page-header-back-button">
            <ng-container *nzStringTemplateOutlet="nzBackIcon; let backIcon">
              <i nz-icon [nzType]="backIcon || getBackIcon()" nzTheme="outline"></i>
            </ng-container>
          </div>
        </div>
        <!--avatar-->
        <ng-content select="nz-avatar[nz-page-header-avatar]"></ng-content>
        <!--title-->
        <span class="ant-page-header-heading-title" *ngIf="nzTitle">
          <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
        </span>
        <ng-content *ngIf="!nzTitle" select="nz-page-header-title, [nz-page-header-title]"></ng-content>
        <!--subtitle-->
        <span class="ant-page-header-heading-sub-title" *ngIf="nzSubtitle">
          <ng-container *nzStringTemplateOutlet="nzSubtitle">{{ nzSubtitle }}</ng-container>
        </span>
        <ng-content *ngIf="!nzSubtitle" select="nz-page-header-subtitle, [nz-page-header-subtitle]"></ng-content>
        <ng-content select="nz-page-header-tags, [nz-page-header-tags]"></ng-content>
      </div>

      <ng-content select="nz-page-header-extra, [nz-page-header-extra]"></ng-content>
    </div>

    <ng-content select="nz-page-header-content, [nz-page-header-content]"></ng-content>
    <ng-content select="nz-page-header-footer, [nz-page-header-footer]"></ng-content>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                host: {
                    class: 'ant-page-header',
                    '[class.has-footer]': 'nzPageHeaderFooter',
                    '[class.ant-page-header-ghost]': 'nzGhost',
                    '[class.has-breadcrumb]': 'nzPageHeaderBreadcrumb',
                    '[class.ant-page-header-compact]': 'compact',
                    '[class.ant-page-header-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }]; }, { nzBackIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzGhost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzBack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSubtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzPageHeaderFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [NzPageHeaderFooterDirective, { static: false }]
        }], nzPageHeaderBreadcrumb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [NzPageHeaderBreadcrumbDirective, { static: false }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NzPageHeaderCells = [
    NzPageHeaderTitleDirective,
    NzPageHeaderSubtitleDirective,
    NzPageHeaderContentDirective,
    NzPageHeaderTagDirective,
    NzPageHeaderExtraDirective,
    NzPageHeaderFooterDirective,
    NzPageHeaderBreadcrumbDirective,
    NzPageHeaderAvatarDirective
];
class NzPageHeaderModule {
}
NzPageHeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzPageHeaderModule });
NzPageHeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzPageHeaderModule_Factory(t) { return new (t || NzPageHeaderModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzPageHeaderModule, { declarations: function () { return [NzPageHeaderComponent, NzPageHeaderTitleDirective, NzPageHeaderSubtitleDirective, NzPageHeaderContentDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderAvatarDirective]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"]]; }, exports: function () { return [NzPageHeaderComponent, NzPageHeaderTitleDirective, NzPageHeaderSubtitleDirective, NzPageHeaderContentDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderAvatarDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"]],
                exports: [NzPageHeaderComponent, NzPageHeaderCells],
                declarations: [NzPageHeaderComponent, NzPageHeaderCells]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-page-header.js.map

/***/ }),

/***/ "k3D0":
/*!***************************************************************************************!*\
  !*** ./src/app/routes/config/deployment/deployment-list/deployment-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ConfigDeploymentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigDeploymentListComponent", function() { return ConfigDeploymentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_deployment_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./deployment-list.component.html */ "1hOh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _deployment_detail_deployment_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../deployment-detail/deployment-detail.component */ "hfW2");







let ConfigDeploymentListComponent = class ConfigDeploymentListComponent {
    constructor(http, modal, cdr) {
        this.http = http;
        this.modal = modal;
        this.cdr = cdr;
        this.q = {
            q: '',
            status: 'all',
        };
        this.loading = false;
        this.data = [];
    }
    ngOnInit() {
        this.getData();
    }
    openDetail(projectId) {
        this.modal.create(_deployment_detail_deployment_detail_component__WEBPACK_IMPORTED_MODULE_5__["ConfigDeploymentDetailComponent"], { projectId }, { size: 1200 }).subscribe((res) => {
            this.cdr.detectChanges();
        });
    }
    getData() {
        this.loading = true;
        this.http.get('/api/deployment/getList', { pageNum: 0, pageSize: 5 }).subscribe((res) => {
            this.data = res.data;
            this.loading = false;
            this.cdr.detectChanges();
        });
    }
    /**
   * 提交本次 部署信息
   */
    _submitForm(projectId) {
        this.http.put(_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_URL + '/api/deployment/edit', { projectId: projectId }).subscribe(res => {
        });
    }
};
ConfigDeploymentListComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["ModalHelper"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
ConfigDeploymentListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-config-deployment-list',
        template: _raw_loader_deployment_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ConfigDeploymentListComponent);



/***/ }),

/***/ "m1D6":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/config/project/project-detail/project-detail.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header title=\"项目详情\">\n\n</page-header>\n<nz-card [nzBordered]=\"false\" nzTitle=\"基本信息\">\n  <nz-row nzGutter=\"16\">\n    <nz-col nzLg=\"6\" nzMd=\"12\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label nzFor=\"name\">项目名</nz-form-label>\n        <nz-form-control>\n          <span id=\"projectName\">{{data?.projectName}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n    <nz-col [nzXl]=\"{ span: 6, offset: 2 }\" [nzLg]=\"{ span: 8 }\" [nzMd]=\"{ span: 12 }\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label>项目合同额</nz-form-label>\n        <nz-form-control>\n          <span>{{data?.contractAmount}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n    <nz-col [nzXl]=\"{ span: 8, offset: 2 }\" [nzLg]=\"{ span: 10 }\" [nzMd]=\"{ span: 24 }\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label>项目经理</nz-form-label>\n        <nz-form-control>\n          <span>{{data?.projectManager}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n  </nz-row>\n  <nz-row nzGutter=\"16\">\n    <nz-col nzLg=\"6\" nzMd=\"12\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label>项目地址</nz-form-label>\n        <nz-form-control>\n          <span>{{data?.projectAddress}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n    <nz-col [nzXl]=\"{ span: 6, offset: 2 }\" [nzLg]=\"{ span: 8 }\" [nzMd]=\"{ span: 12 }\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label>客户名称</nz-form-label>\n        <nz-form-control>\n          <span>{{data?.customerName}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n    <nz-col [nzXl]=\"{ span: 8, offset: 2 }\" [nzLg]=\"{ span: 10 }\" [nzMd]=\"{ span: 24 }\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label>合同编号</nz-form-label>\n        <nz-form-control>\n          <span>{{data?.contractNumber}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n  </nz-row>\n  <config-app-progress [item]=\"data\"></config-app-progress>\n</nz-card>\n<nz-card [nzBordered]=\"false\" nzTitle=\"产品依赖\">\n  <nz-list nzBordered>\n    <nz-list-item *ngFor=\"let item of data?.beforeSelectedProduct\">\n      <span nz-typography>{{item.productName}} v {{item.prodVersion}}</span>\n    </nz-list-item>\n  </nz-list>\n</nz-card>\n<nz-card [nzBordered]=\"false\" nzTitle=\"附件信息\">\n  <nz-list nzBordered>\n    <nz-list-item *ngFor=\"let item of data?.assetsList\">\n      <a [href]=\"item.address\" nz-typography>{{item.assetsName}}</a>\n    </nz-list-item>\n  </nz-list>\n</nz-card>\n<nz-card [nzBordered]=\"false\" nzTitle=\"部署包\" *ngIf=\"data?.progress > 4\">\n  <nz-list nzBordered>\n    <nz-list-item *ngFor=\"let item of data?.projectPackage\">\n      <a [href]=\"item.address\" nz-typography>{{item.assetsName}}</a>\n    </nz-list-item>\n  </nz-list>\n</nz-card>\n<div style=\"float: right;\">\n  <button nz-button type=\"primary\" nzType=\"primary\" (click)=\"close()\">关闭</button>\n</div>");

/***/ }),

/***/ "o8O4":
/*!******************************************************************************!*\
  !*** ./src/app/routes/config/product/product-edit/product-edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConfigProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigProductEditComponent", function() { return ConfigProductEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-edit.component.html */ "+JPh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "AytR");







let ConfigProductEditComponent = class ConfigProductEditComponent {
    constructor(fb, http, modal) {
        this.fb = fb;
        this.http = http;
        this.modal = modal;
        // 待编辑的产品id
        this.productId = -1;
        this.productVersion = '';
        this.usersOfManager = [];
        this.usersOfTester = [];
        this.assets = [];
        this.detail = -1;
        /**
         * 自定义上传产品的附件
         */
        this.customUpdateProductAssets = (item) => {
            this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/attached/OSS/getPolicy', { type: "productAssets" }).subscribe(res => {
                const { accessid, policy, signature, callback, dir, host } = res.data;
                let param = new FormData();
                param.append("OSSAccessKeyId", accessid);
                param.append("key", dir + item.file.name);
                param.append("policy", policy);
                param.append("Signature", signature);
                param.append("callback", callback);
                param.append("file", item.file);
                console.log(item);
                this.http.post(host, param)
                    .subscribe(res => {
                    this.assets.push({ id: res.data });
                    item.onSuccess(item.file);
                }, (err) => {
                    item.onError(err, item.file);
                });
            });
        };
        /**
        * 自定义上传产品说明
        */
        this.customUpdateProductDetail = (item) => {
            this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/attached/OSS/getPolicy', { type: "productDetail" }).subscribe(res => {
                const { accessid, policy, signature, callback, dir, host } = res.data;
                let param = new FormData();
                param.append("OSSAccessKeyId", accessid);
                param.append("key", dir + item.file.name);
                param.append("policy", policy);
                param.append("Signature", signature);
                param.append("callback", callback);
                param.append("file", item.file);
                this.http.post(host, param)
                    .subscribe((res) => {
                    this.detail = res.data;
                    item.onSuccess(item.file);
                }, (err) => {
                    item.onError(err, item.file);
                });
            });
        };
    }
    ngOnInit() {
        this.form = this.fb.group({
            productName: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            prodVersion: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            manager: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            workContent: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            prodAddress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            codeVersion: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            tester: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            message: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.getData();
        this.getAllUserOfTestManager();
        this.getAllUserOfProductManager();
    }
    getData() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/product/getProductDetails', { id: this.productId, productVersion: this.productVersion }).subscribe(res => {
            var _a, _b, _c, _d, _e;
            (_a = this.form.get("productName")) === null || _a === void 0 ? void 0 : _a.setValue(res.data.productName);
            (_b = this.form.get("prodVersion")) === null || _b === void 0 ? void 0 : _b.setValue(res.data.prodVersion);
            (_c = this.form.get("prodAddress")) === null || _c === void 0 ? void 0 : _c.setValue(res.data.prodAddress);
            (_d = this.form.get("codeVersion")) === null || _d === void 0 ? void 0 : _d.setValue(res.data.codeVersion);
            (_e = this.form.get("message")) === null || _e === void 0 ? void 0 : _e.setValue(res.data.message);
        });
    }
    getAllUserOfProductManager() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/userManager/getAllUser', { role: 20000 }).subscribe((res) => {
            this.usersOfManager = res.data;
        });
    }
    getAllUserOfTestManager() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/userManager/getAllUser', { role: 60000 }).subscribe((res) => {
            this.usersOfTester = res.data;
        });
    }
    _submitForm() {
        var _a, _b, _c, _d;
        const productMeta = {
            id: this.productId,
            description: (_a = this.form.get("message")) === null || _a === void 0 ? void 0 : _a.value,
        };
        const product = {
            managerId: (_b = this.form.get("manager")) === null || _b === void 0 ? void 0 : _b.value,
            productAddress: (_c = this.form.get("prodAddress")) === null || _c === void 0 ? void 0 : _c.value,
            prodVersion: (_d = this.form.get("prodVersion")) === null || _d === void 0 ? void 0 : _d.value,
            assetsList: this.assets,
            message: this.detail
        };
        const param = {
            productMeta: productMeta,
            product: product
        };
        this.http.put(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/product/updateProduct', param).subscribe(res => {
            this.close();
        });
    }
    close() {
        this.modal.destroy();
    }
};
ConfigProductEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["_HttpClient"] },
    { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"] }
];
ConfigProductEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-config-product-edit',
        template: _raw_loader_product_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ConfigProductEditComponent);



/***/ }),

/***/ "oMEh":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/config/product/product-detail/product-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ConfigProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigProductDetailComponent", function() { return ConfigProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-detail.component.html */ "oh60");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "AytR");





let ConfigProductDetailComponent = class ConfigProductDetailComponent {
    constructor(http, modal) {
        this.http = http;
        this.modal = modal;
        this.productId = 1;
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_URL + '/api/product/getProductsDetails', { id: this.productId }).subscribe(res => {
            this.data = res.data;
        });
    }
    /**
     * 动态绑定 nz-card style
     */
    styleCardProductList(deprecated) {
        return deprecated == true ? { 'text-decoration': 'line-through', } : null;
    }
};
ConfigProductDetailComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["ModalHelper"] }
];
ConfigProductDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-config-product-detail',
        template: _raw_loader_product_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ConfigProductDetailComponent);



/***/ }),

/***/ "oh60":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/config/product/product-detail/product-detail.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"data != null\">\n  <nz-card [nzHoverable]=\"false\" [nzBordered]=\"false\">\n    <nz-page-header>\n      <nz-page-header-title style=\"margin-top: 5px;\">\n        <h2>{{data.productName}}</h2>\n      </nz-page-header-title>\n      <nz-page-header-subtitle>{{data.meaasge}}</nz-page-header-subtitle>\n      <nz-page-header-extra>\n        <h4>立项时间：{{data.createTime | date:'yyyy-MM-dd HH:mm:ss'}}</h4>\n      </nz-page-header-extra>\n    </nz-page-header>\n  </nz-card>\n\n  <nz-card [ngStyle]=\"styleCardProductList(item.deprecated)\" [nzBordered]=\"true\" *ngFor=\"let item of data.productList\">\n    <div>\n      <span nz-col style=\"color: dodgerblue; font-size: 40px;\">{{item.prodVersion}}({{item.modifyTime |\n        date:'yyyy-MM-dd'}})</span>\n      <div nz-row>\n        <nz-avatar [nzSrc]=\"item.manager.avatar\" nzSize=\"small\" [nzShape]=\"'square'\"></nz-avatar>\n        <span nz-col [nzSpan]=\"8\" style=\"font-size: 18px;\">{{item.manager.realName}} released this product</span>\n      </div>\n    </div>\n    <div style=\"padding-top: 2%; padding-bottom: 2%;\">\n      <markdown [src]=\"item.description\"></markdown>\n    </div>\n    <ul nz-list nzBordered>\n      <nz-list-header><strong>Assets</strong></nz-list-header>\n      <li nz-list-item nzNoFlex *ngFor=\"let assets of item.assets\">\n        <a [href]=\"assets.link\">{{assets.assetsName}}</a>\n      </li>\n    </ul>\n  </nz-card>\n</div>\n<div *ngIf=\"data == null\" style=\"text-align: center\">\n  <nz-spin nzSimple [nzSize]=\"'large'\"></nz-spin>\n</div>");

/***/ }),

/***/ "pHqi":
/*!********************************************************!*\
  !*** ./src/app/routes/config/config-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ConfigRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigRoutingModule", function() { return ConfigRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product-edit/product-edit.component */ "o8O4");
/* harmony import */ var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product-list/product-list.component */ "J/q1");
/* harmony import */ var _product_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product-add/product-add.component */ "VbdL");
/* harmony import */ var _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product-detail/product-detail.component */ "oMEh");
/* harmony import */ var _project_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project/project-list/project-list.component */ "dGjv");
/* harmony import */ var _project_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project/project-edit/project-edit.component */ "RQLV");
/* harmony import */ var _project_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project/project-detail/project-detail.component */ "E9PB");
/* harmony import */ var _project_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project/project-add/project-add.component */ "xNdv");
/* harmony import */ var _verify_verify_list_verify_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./verify/verify-list/verify-list.component */ "D8sg");
/* harmony import */ var _verify_verify_detail_verify_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./verify/verify-detail/verify-detail.component */ "sOuG");
/* harmony import */ var _deployment_deployment_list_deployment_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deployment/deployment-list/deployment-list.component */ "k3D0");
/* harmony import */ var _deployment_deployment_detail_deployment_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./deployment/deployment-detail/deployment-detail.component */ "hfW2");
/* harmony import */ var _product_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product/product-update/product-update.component */ "KyF8");
















const routes = [
    { path: 'product-edit', component: _product_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_3__["ConfigProductEditComponent"] },
    { path: 'product-list', component: _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ConfigProductListComponent"] },
    { path: 'product-add', component: _product_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_5__["ConfigProductAddComponent"] },
    { path: 'product-detail', component: _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__["ConfigProductDetailComponent"] },
    { path: 'project-list', component: _project_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_7__["ConfigProjectListComponent"] },
    { path: 'project-edit', component: _project_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_8__["ConfigProjectEditComponent"] },
    { path: 'project-detail', component: _project_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_9__["ConfigProjectDetailComponent"] },
    { path: 'project-add', component: _project_project_add_project_add_component__WEBPACK_IMPORTED_MODULE_10__["ConfigProjectAddComponent"] },
    { path: 'verify-list', component: _verify_verify_list_verify_list_component__WEBPACK_IMPORTED_MODULE_11__["ConfigVerifyListComponent"] },
    { path: 'verify-detail', component: _verify_verify_detail_verify_detail_component__WEBPACK_IMPORTED_MODULE_12__["ConfigVerifyDetailComponent"] },
    { path: 'deployment-list', component: _deployment_deployment_list_deployment_list_component__WEBPACK_IMPORTED_MODULE_13__["ConfigDeploymentListComponent"] },
    { path: 'deployment-detail', component: _deployment_deployment_detail_deployment_detail_component__WEBPACK_IMPORTED_MODULE_14__["ConfigDeploymentDetailComponent"] },
    { path: 'product-update', component: _product_product_update_product_update_component__WEBPACK_IMPORTED_MODULE_15__["ConfigProductUpdateComponent"] }
];
let ConfigRoutingModule = class ConfigRoutingModule {
};
ConfigRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ConfigRoutingModule);



/***/ }),

/***/ "ppEs":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/config/project/project-add/project-add.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header title=\"添加项目\">\n\n</page-header>\n<form nz-form [formGroup]=\"form\" [nzLayout]=\"'vertical'\" style=\"padding-bottom: 2%;\">\n  <nz-card [nzBordered]=\"false\" nzTitle=\"基本信息\">\n    <nz-row nzGutter=\"16\">\n      <nz-col nzLg=\"6\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label nzFor=\"name\">项目名</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入项目名\">\n            <input nz-input formControlName=\"productName\" id=\"productName\" placeholder=\"请输入项目名\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 6, offset: 2 }\" [nzLg]=\"{ span: 8 }\" [nzMd]=\"{ span: 12 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>项目合同额</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入项目合同额\">\n            <input nz-input formControlName=\"amount\" placeholder=\"请输入项目合同额\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 8, offset: 2 }\" [nzLg]=\"{ span: 10 }\" [nzMd]=\"{ span: 24 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>项目经理</nz-form-label>\n          <nz-form-control nzErrorTip=\"请选择项目经理\">\n            <nz-select formControlName=\"manager\" [nzPlaceHolder]=\"'请选择项目经理'\" [nzShowSearch]=\"true\">\n              <nz-option *ngFor=\"let i of usersOfManager\" [nzLabel]=\"i.realname\" [nzValue]=\"i.id\"></nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n    </nz-row>\n    <nz-row nzGutter=\"16\">\n      <nz-col nzLg=\"6\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>项目地址</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入项目地址\">\n            <input nz-input formControlName=\"projectAddress\" placeholder=\"请输入项目地址\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 6, offset: 2 }\" [nzLg]=\"{ span: 8 }\" [nzMd]=\"{ span: 12 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>客户名称</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入客户名称\">\n            <input nz-input formControlName=\"projectCustomName\" placeholder=\"请输入客户名称\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 8, offset: 2 }\" [nzLg]=\"{ span: 10 }\" [nzMd]=\"{ span: 24 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>合同编号</nz-form-label>\n          <nz-form-control nzErrorTip=\"请选择合同编号\">\n            <input nz-input formControlName=\"projectNumber\" placeholder=\"请输入合同编号\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n    </nz-row>\n  </nz-card>\n  <nz-card [nzBordered]=\"false\" nzTitle=\"附件信息\">\n    <nz-upload nzType=\"drag\" [nzMultiple]=\"true\" nzAction=\"http://config-service.oss-cn-beijing.aliyuncs.com\"\n      [nzCustomRequest]=\"customUpdateProjectAssets\">\n      <p class=\"ant-upload-drag-icon\">\n        <i nz-icon nzType=\"inbox\"></i>\n      </p>\n      <p class=\"ant-upload-text\">点击或拖动文件到此处用以上传</p>\n      <p class=\"ant-upload-hint\">\n        支持单次或批量上传。\n      </p>\n    </nz-upload>\n  </nz-card>\n  <nz-card [nzBordered]=\"false\" nzTitle=\"详细信息\" [nzExtra]=\"selectProduct\">\n    <nz-list nzBordered>\n      <nz-list-item *ngFor=\"let item of selectedProduct\">\n        <ul nz-list-item-actions>\n          <nz-list-item-action>\n            <a (click)=\"removeSelectedProduct(item.productId)\">删除</a>\n          </nz-list-item-action>\n        </ul>\n        <span nz-typography>{{item.productName}} v {{item.prodVersion}}</span>\n      </nz-list-item>\n    </nz-list>\n  </nz-card>\n  <ng-template #selectProduct>\n    <nz-cascader [nzLabelProperty]=\"'productName'\" [nzOptions]=\"prodsWithVersionOptions\" [nzAllowClear]=\"true\"\n      (nzSelectionChange)=\"selectProd($event)\">\n    </nz-cascader>\n  </ng-template>\n</form>\n<div style=\"float: right;\">\n  <button nz-button type=\"primary\" nzType=\"primary\" (click)=\"close()\">取消</button>\n  <button nz-button type=\"primary\" nzType=\"primary\" (click)=\"_submitForm()\">提交</button>\n</div>");

/***/ }),

/***/ "s/Bp":
/*!*******************************************************************!*\
  !*** ./src/app/routes/config/view/progress/progress.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfigProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigProgressComponent", function() { return ConfigProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_progress_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./progress.component.html */ "gJbj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ConfigProgressComponent = class ConfigProgressComponent {
    constructor() { }
    ngOnInit() {
    }
};
ConfigProgressComponent.ctorParameters = () => [];
ConfigProgressComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
ConfigProgressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'config-app-progress',
        template: _raw_loader_progress_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ConfigProgressComponent);



/***/ }),

/***/ "s1iS":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/config/product/product-update/product-update.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header title=\"添加项目\">\n\n</page-header>\n<form nz-form [formGroup]=\"form\" [nzLayout]=\"'vertical'\">\n  <nz-card [nzBordered]=\"false\" nzTitle=\"基本信息\">\n    <nz-row nzGutter=\"16\">\n      <nz-col nzLg=\"6\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label nzFor=\"name\">产品名</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入产品名\">\n            <input nz-input formControlName=\"productName\" id=\"productName\" placeholder=\"请输入产品名\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 6, offset: 2 }\" [nzLg]=\"{ span: 8 }\" [nzMd]=\"{ span: 12 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>产品版本</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入产品版本\">\n            <input nz-input formControlName=\"prodVersion\" placeholder=\"请输入产品版本\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 8, offset: 2 }\" [nzLg]=\"{ span: 10 }\" [nzMd]=\"{ span: 24 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>产品经理</nz-form-label>\n          <nz-form-control nzErrorTip=\"请选择产品经理\">\n            <nz-select formControlName=\"productManager\" [nzPlaceHolder]=\"'请选择产品经理'\" [nzShowSearch]=\"true\">\n              <nz-option *ngFor=\"let i of usersOfManager\" [nzLabel]=\"i.realname\" [nzValue]=\"i.id\"></nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n    </nz-row>\n    <nz-row nzGutter=\"16\">\n      <nz-col nzLg=\"6\" nzMd=\"12\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>产品地址</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入产品地址\">\n            <input nz-input formControlName=\"productAddress\" placeholder=\"请输入产品地址\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 6, offset: 2 }\" [nzLg]=\"{ span: 8 }\" [nzMd]=\"{ span: 12 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>代码版本</nz-form-label>\n          <nz-form-control nzErrorTip=\"请输入代码版本\">\n            <input nz-input formControlName=\"codeVersion\" placeholder=\"请输入代码版本\" />\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n      <nz-col [nzXl]=\"{ span: 8, offset: 2 }\" [nzLg]=\"{ span: 10 }\" [nzMd]=\"{ span: 24 }\" nzSm=\"24\">\n        <nz-form-item>\n          <nz-form-label>测试人员</nz-form-label>\n          <nz-form-control nzErrorTip=\"请选择测试人员\">\n            <nz-select formControlName=\"tester\" [nzPlaceHolder]=\"'请选择测试人员'\" [nzShowSearch]=\"true\">\n              <nz-option *ngFor=\"let i of usersOfTester\" [nzLabel]=\"i.realname\" [nzValue]=\"i.id\"> </nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n      </nz-col>\n    </nz-row>\n  </nz-card>\n  <nz-card [nzBordered]=\"false\" nzTitle=\"附件信息\">\n    <nz-upload nzType=\"drag\" [nzMultiple]=\"true\" nzAction=\"http://config-service.oss-cn-beijing.aliyuncs.com\"\n      [nzCustomRequest]=\"customUpdateProductAssets\">\n      <p class=\"ant-upload-drag-icon\">\n        <i nz-icon nzType=\"inbox\"></i>\n      </p>\n      <p class=\"ant-upload-text\">点击或拖动文件到此处用以上传</p>\n      <p class=\"ant-upload-hint\">\n        支持单次或批量上传。\n      </p>\n    </nz-upload>\n  </nz-card>\n  <nz-card [nzBordered]=\"false\" nzTitle=\"详细信息\">\n    <nz-upload nzType=\"drag\" [nzMultiple]=\"false\" nzAction=\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"\n      [nzCustomRequest]=\"customUpdateProductDetail\">\n      <p class=\"ant-upload-drag-icon\">\n        <i nz-icon nzType=\"file-markdown\" nzTheme=\"twotone\"></i>\n      </p>\n      <p class=\"ant-upload-text\">点击或拖动文件到此处用以上传</p>\n      <p class=\"ant-upload-hint\">\n        支持单个md文件上传。用以说明本版本的详细信息\n      </p>\n    </nz-upload>\n  </nz-card>\n  <nz-card [nzBordered]=\"false\" nzTitle=\"预览信息\">\n    <textarea nz-input formControlName=\"description\" placeholder=\"建议50字以内\"\n      nzAutosize=\"{ minRows: 3, maxRows: 5 }\"></textarea>\n  </nz-card>\n\n</form>\n<div style=\"float: right;\">\n  <button nz-button type=\"primary\" nzType=\"primary\" (click)=\"close()\">取消</button>\n  <button nz-button type=\"primary\" nzType=\"primary\" (click)=\"_submitForm()\">提交</button>\n</div>");

/***/ }),

/***/ "sOuG":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/config/verify/verify-detail/verify-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfigVerifyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigVerifyDetailComponent", function() { return ConfigVerifyDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verify_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verify-detail.component.html */ "uaXe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../product/product-detail/product-detail.component */ "oMEh");








let ConfigVerifyDetailComponent = class ConfigVerifyDetailComponent {
    constructor(http, modal, fb, model) {
        this.http = http;
        this.modal = modal;
        this.fb = fb;
        this.model = model;
        this.projectId = -1;
        this.data = [];
        this.projectPachage = [];
        /**
         * 自定义上传项目附件
         */
        this.customUpdateProjectPackage = (item) => {
            this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/attached/OSS/getPolicy', { type: "projectPackage" }).subscribe(res => {
                const { accessid, policy, signature, callback, dir, host } = res.data;
                let param = new FormData();
                param.append("OSSAccessKeyId", accessid);
                param.append("key", dir + item.file.name);
                param.append("policy", policy);
                param.append("Signature", signature);
                param.append("callback", callback);
                param.append("file", item.file);
                this.http.post(host, param)
                    .subscribe(res => {
                    this.projectPachage.push(res.data);
                    item.onSuccess(item.file);
                }, (err) => {
                    item.onError(err, item.file);
                });
            });
        };
    }
    ngOnInit() {
        this.form = this.fb.group({
            projectName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            contractAmount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            projectManager: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            projectAdress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            customerName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            contractNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.getData();
    }
    /**
     * 获取数据
     */
    getData() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/project/getProjectDetail', { projectId: this.projectId }).subscribe(res => {
            this.data = res.data;
        });
    }
    /**
     * 提交本次 发包信息
     */
    _submitForm() {
        const param = {
            projectId: this.projectId,
            ids: this.projectPachage
        };
        this.http.put(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/administer/edit', param).subscribe(res => {
            this.close();
        });
    }
    close() {
        this.modal.destroy();
    }
    /**
     * 打开产品详情页
     */
    openProductDetail(productId) {
        this.model.create(_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ConfigProductDetailComponent"], { productId }, { size: 1200 }).subscribe((res) => {
        });
    }
};
ConfigVerifyDetailComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["_HttpClient"] },
    { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["ModalHelper"] }
];
ConfigVerifyDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-config-verify-detail',
        template: _raw_loader_verify_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ConfigVerifyDetailComponent);



/***/ }),

/***/ "uUn8":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/config/verify/verify-list/verify-list.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header [title]=\"null\"></page-header>\n<nz-card [nzBordered]=\"false\">\n  <div nz-row>\n    <div nz-col [nzXs]=\"24\" [nzSm]=\"8\" class=\"header-info\">\n      <span class=\"text-grey-dark\">我的产品</span>\n      <span class=\"d-block display-2\">8个产品</span>\n      <em></em>\n    </div>\n    <div nz-col [nzXs]=\"24\" [nzSm]=\"8\" class=\"header-info\">\n      <span class=\"text-grey-dark\">本周/月更新次数</span>\n      <span class=\"d-block display-2\">2/7</span>\n      <em></em>\n    </div>\n    <div nz-col [nzXs]=\"24\" [nzSm]=\"8\" class=\"header-info\">\n      <span class=\"text-grey-dark\">本周需求完成数量</span>\n      <span class=\"d-block display-2\">24个</span>\n    </div>\n  </div>\n</nz-card>\n\n<nz-card [nzHoverable]=\"false\" [nzBordered]=\"false\">\n  <div class=\"d-flex align-items-center mb-lg\">\n    <h3 class=\"flex-1 text-lg\">产品列表</h3>\n    <div>\n      <nz-radio-group [(ngModel)]=\"q.status\" class=\"mr-md\">\n        <label nz-radio-button [nzValue]=\"'all'\">\n          <span>全部</span>\n        </label>\n        <label nz-radio-button [nzValue]=\"'progress'\">\n          <span>仅看自己</span>\n        </label>\n      </nz-radio-group>\n      <nz-input-group nzSuffixIcon=\"search\" style=\"width: 270px;\">\n        <input type=\"text\" nz-input placeholder=\"请输入\" [(ngModel)]=\"q.q\" name=\"q\" />\n      </nz-input-group>\n    </div>\n  </div>\n</nz-card>\n\n<nz-list [nzDataSource]='data' [nzRenderItem]=\"item\" [nzLoading]=\"loading\">\n  <ng-template #item let-item>\n    <nz-list-item>\n      <nz-card [nzHoverable]=\"false\" [nzBordered]=\"false\" style='width: 100%' [nzTitle]=\"item.projectName\"\n        [nzExtra]=\"extraTemplate\">\n        <sv-container size=\"large\">\n          <sv label=\"产品经理\">{{item.manager}}</sv>\n          <sv label=\"项目合同额（万元）\">{{item.amount}}</sv>\n          <sv label=\"客户名称\">{{item.customerName}}</sv>\n          <sv label=\"合同编号\">{{item.customerName}}</sv>\n        </sv-container>\n        <nz-divider></nz-divider>\n        <config-app-progress [item]=\"item\"></config-app-progress>\n        <div class=\"steps-content\"></div>\n      </nz-card>\n      <ng-template #extraTemplate>\n        <nz-list-item [nzActions]=\"[edit, op]\">\n          <ng-template #edit>\n            <a (click)=\"openDetail(item.projectId)\">查看详情</a>\n          </ng-template>\n          <ng-template #op>\n            <a class=\"ant-dropdown-link\" nz-dropdown [nzDropdownMenu]=\"opMenu\">\n              更多\n              <i nz-icon nzType=\"down\"></i>\n            </a>\n            <nz-dropdown-menu #opMenu=\"nzDropdownMenu\">\n              <ul nz-menu>\n                <li nz-menu-item (click)=\"openDetail()\">查看详情</li>\n              </ul>\n            </nz-dropdown-menu>\n          </ng-template>\n        </nz-list-item>\n      </ng-template>\n    </nz-list-item>\n  </ng-template>\n</nz-list>");

/***/ }),

/***/ "uaXe":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./src/app/routes/config/verify/verify-detail/verify-detail.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header title=\"项目详情\">\n\n</page-header>\n<nz-card [nzBordered]=\"false\" nzTitle=\"基本信息\">\n  <nz-row nzGutter=\"16\">\n    <nz-col nzLg=\"6\" nzMd=\"12\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label nzFor=\"name\">项目名</nz-form-label>\n        <nz-form-control>\n          <span id=\"projectName\">{{data.projectName}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n    <nz-col [nzXl]=\"{ span: 6, offset: 2 }\" [nzLg]=\"{ span: 8 }\" [nzMd]=\"{ span: 12 }\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label>项目合同额</nz-form-label>\n        <nz-form-control>\n          <span>{{data.contractAmount}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n    <nz-col [nzXl]=\"{ span: 8, offset: 2 }\" [nzLg]=\"{ span: 10 }\" [nzMd]=\"{ span: 24 }\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label>项目经理</nz-form-label>\n        <nz-form-control>\n          <span>{{data.projectManager}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n  </nz-row>\n  <nz-row nzGutter=\"16\">\n    <nz-col nzLg=\"6\" nzMd=\"12\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label>项目地址</nz-form-label>\n        <nz-form-control>\n          <span>{{data.projectAddress}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n    <nz-col [nzXl]=\"{ span: 6, offset: 2 }\" [nzLg]=\"{ span: 8 }\" [nzMd]=\"{ span: 12 }\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label>客户名称</nz-form-label>\n        <nz-form-control>\n          <span>{{data.customerName}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n    <nz-col [nzXl]=\"{ span: 8, offset: 2 }\" [nzLg]=\"{ span: 10 }\" [nzMd]=\"{ span: 24 }\" nzSm=\"24\">\n      <nz-form-item>\n        <nz-form-label>合同编号</nz-form-label>\n        <nz-form-control>\n          <span>{{data.contractNumber}}</span>\n        </nz-form-control>\n      </nz-form-item>\n    </nz-col>\n  </nz-row>\n  <config-app-progress [item]=\"data\"></config-app-progress>\n</nz-card>\n<nz-card [nzBordered]=\"false\" nzTitle=\"依赖产品\">\n  <nz-list nzBordered>\n    <nz-list-item *ngFor=\"let item of data.beforeSelectedProduct\">\n      <span nz-typography><a (click)=\"openProductDetail(item.productId)\">{{item.productName}} v {{item.prodVersion}}</a></span>\n    </nz-list-item>\n  </nz-list>\n</nz-card>\n<nz-card [nzBordered]=\"false\" nzTitle=\"压缩包\">\n  <nz-upload nzType=\"drag\" [nzMultiple]=\"true\" nzAction=\"http://config-service.oss-cn-beijing.aliyuncs.com\"\n    [nzCustomRequest]=\"customUpdateProjectPackage\">\n    <p class=\"ant-upload-drag-icon\">\n      <i nz-icon nzType=\"inbox\"></i>\n    </p>\n    <p class=\"ant-upload-text\">点击或拖动文件到此处用以上传</p>\n    <p class=\"ant-upload-hint\">\n      支持单次或批量上传。\n    </p>\n  </nz-upload>\n</nz-card>\n<div style=\"float: right;\">\n  <button nz-button type=\"primary\" nzType=\"primary\" (click)=\"close()\">取消</button>\n  <button nz-button type=\"primary\" nzType=\"primary\" (click)=\"_submitForm()\">提交</button>\n</div>");

/***/ }),

/***/ "xB20":
/*!****************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-descriptions.js ***!
  \****************************************************************************************/
/*! exports provided: NzDescriptionsComponent, NzDescriptionsItemComponent, NzDescriptionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDescriptionsComponent", function() { return NzDescriptionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDescriptionsItemComponent", function() { return NzDescriptionsItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDescriptionsModule", function() { return NzDescriptionsModule; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "79xS");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "JwMs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");













/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */







function NzDescriptionsItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
} }
const _c0 = ["*"];
function NzDescriptionsComponent_div_0_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.nzTitle);
} }
function NzDescriptionsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzDescriptionsComponent_div_0_div_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzTitle);
} }
function NzDescriptionsComponent_div_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.nzExtra);
} }
function NzDescriptionsComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzDescriptionsComponent_div_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzExtra);
} }
function NzDescriptionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzDescriptionsComponent_div_0_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzDescriptionsComponent_div_0_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.nzTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.nzExtra);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r11.title, " ");
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_template_6_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_container_4_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_template_6_Template, 0, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colSpan", item_r11.span);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-descriptions-item-no-colon", !ctx_r13.nzColon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStringTemplateOutlet", item_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", item_r11.content);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r11.title, " ");
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStringTemplateOutlet", item_r11.title);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_ng_template_3_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_Template, 2, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_ng_template_3_Template, 0, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStringTemplateOutlet", item_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colSpan", item_r11.span * 2 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", item_r11.content);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_Template, 7, 5, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r10.nzBordered);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.nzBordered);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r8);
} }
function NzDescriptionsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzDescriptionsComponent_ng_container_4_tr_1_Template, 2, 1, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r32.title, " ");
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colSpan", item_r32.span);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-descriptions-item-no-colon", !ctx_r30.nzColon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStringTemplateOutlet", item_r32.title);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_ng_template_3_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colSpan", item_r36.span);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", item_r36.content);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_Template, 4, 4, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_Template, 4, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r28);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_Template, 5, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r25.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r44.title, " ");
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colSpan", item_r44.span);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStringTemplateOutlet", item_r44.title);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template, 0, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colSpan", item_r48.span);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", item_r48.content);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r40);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_Template, 5, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r26.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzDescriptionsComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzDescriptionsComponent_ng_container_5_ng_container_2_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.nzBordered);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.nzBordered);
} }
class NzDescriptionsItemComponent {
    constructor() {
        this.nzSpan = 1;
        this.nzTitle = '';
        this.inputChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    ngOnChanges() {
        this.inputChange$.next();
    }
    ngOnDestroy() {
        this.inputChange$.complete();
    }
}
NzDescriptionsItemComponent.ɵfac = function NzDescriptionsItemComponent_Factory(t) { return new (t || NzDescriptionsItemComponent)(); };
NzDescriptionsItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzDescriptionsItemComponent, selectors: [["nz-descriptions-item"]], viewQuery: function NzDescriptionsItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { nzSpan: "nzSpan", nzTitle: "nzTitle" }, exportAs: ["nzDescriptionsItem"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzDescriptionsItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzDescriptionsItemComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
NzDescriptionsItemComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], { static: true },] }],
    nzSpan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Object)
], NzDescriptionsItemComponent.prototype, "nzSpan", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME = 'descriptions';
const defaultColumnMap = {
    xxl: 3,
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
};
class NzDescriptionsComponent {
    constructor(nzConfigService, cdr, breakpointService, directionality) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.breakpointService = breakpointService;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzBordered = false;
        this.nzLayout = 'horizontal';
        this.nzColumn = defaultColumnMap;
        this.nzSize = 'default';
        this.nzTitle = '';
        this.nzColon = true;
        this.itemMatrix = [];
        this.realColumn = 3;
        this.dir = 'ltr';
        this.breakpoint = ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__["NzBreakpointEnum"].md;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnChanges(changes) {
        if (changes.nzColumn) {
            this.prepareMatrix();
        }
    }
    ngAfterContentInit() {
        const contentChange$ = this.items.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(this.items), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroy$));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(contentChange$, contentChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(...this.items.map(i => i.inputChange$)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["auditTime"])(16)))), this.breakpointService.subscribe(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__["gridResponsiveMap"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(bp => (this.breakpoint = bp))))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.prepareMatrix();
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * Prepare the render matrix according to description items' spans.
     */
    prepareMatrix() {
        if (!this.items) {
            return;
        }
        let currentRow = [];
        let width = 0;
        const column = (this.realColumn = this.getColumn());
        const items = this.items.toArray();
        const length = items.length;
        const matrix = [];
        const flushRow = () => {
            matrix.push(currentRow);
            currentRow = [];
            width = 0;
        };
        for (let i = 0; i < length; i++) {
            const item = items[i];
            const { nzTitle: title, content, nzSpan: span } = item;
            width += span;
            // If the last item make the row's length exceeds `nzColumn`, the last
            // item should take all the space left. This logic is implemented in the template.
            // Warn user about that.
            if (width >= column) {
                if (width > column) {
                    Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_9__["warn"])(`"nzColumn" is ${column} but we have row length ${width}`);
                }
                currentRow.push({ title, content, span: column - (width - span) });
                flushRow();
            }
            else if (i === length - 1) {
                currentRow.push({ title, content, span: column - (width - span) });
                flushRow();
            }
            else {
                currentRow.push({ title, content, span });
            }
        }
        this.itemMatrix = matrix;
    }
    getColumn() {
        if (typeof this.nzColumn !== 'number') {
            return this.nzColumn[this.breakpoint];
        }
        return this.nzColumn;
    }
}
NzDescriptionsComponent.ɵfac = function NzDescriptionsComponent_Factory(t) { return new (t || NzDescriptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__["NzBreakpointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8)); };
NzDescriptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzDescriptionsComponent, selectors: [["nz-descriptions"]], contentQueries: function NzDescriptionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NzDescriptionsItemComponent, 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.items = _t);
    } }, hostAttrs: [1, "ant-descriptions"], hostVars: 8, hostBindings: function NzDescriptionsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-descriptions-bordered", ctx.nzBordered)("ant-descriptions-middle", ctx.nzSize === "middle")("ant-descriptions-small", ctx.nzSize === "small")("ant-descriptions-rtl", ctx.dir === "rtl");
    } }, inputs: { nzBordered: "nzBordered", nzLayout: "nzLayout", nzColumn: "nzColumn", nzSize: "nzSize", nzTitle: "nzTitle", nzColon: "nzColon", nzExtra: "nzExtra" }, exportAs: ["nzDescriptions"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 3, consts: [["class", "ant-descriptions-header", 4, "ngIf"], [1, "ant-descriptions-view"], [4, "ngIf"], [1, "ant-descriptions-header"], ["class", "ant-descriptions-title", 4, "ngIf"], ["class", "ant-descriptions-extra", 4, "ngIf"], [1, "ant-descriptions-title"], [4, "nzStringTemplateOutlet"], [1, "ant-descriptions-extra"], ["class", "ant-descriptions-row", 4, "ngFor", "ngForOf"], [1, "ant-descriptions-row"], [4, "ngFor", "ngForOf"], [1, "ant-descriptions-item", 3, "colSpan"], [1, "ant-descriptions-item-container"], [1, "ant-descriptions-item-label"], [1, "ant-descriptions-item-content"], [3, "ngTemplateOutlet"], ["class", "ant-descriptions-item-label", 4, "nzStringTemplateOutlet"], [1, "ant-descriptions-item-content", 3, "colSpan"], [1, "ant-descriptions-item-label", 3, "colSpan"]], template: function NzDescriptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzDescriptionsComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzDescriptionsComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NzDescriptionsComponent_ng_container_5_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzTitle || ctx.nzExtra);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzLayout === "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzLayout === "vertical");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
NzDescriptionsComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__["NzBreakpointService"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
NzDescriptionsComponent.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [NzDescriptionsItemComponent,] }],
    nzBordered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzExtra: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzColon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Boolean)
], NzDescriptionsComponent.prototype, "nzBordered", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Object)
], NzDescriptionsComponent.prototype, "nzColumn", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", String)
], NzDescriptionsComponent.prototype, "nzSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(),
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Boolean)
], NzDescriptionsComponent.prototype, "nzColon", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzDescriptionsItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                selector: 'nz-descriptions-item',
                template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
                exportAs: 'nzDescriptionsItem',
                preserveWhitespaces: false
            }]
    }], function () { return []; }, { nzSpan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], { static: true }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzDescriptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                selector: 'nz-descriptions',
                exportAs: 'nzDescriptions',
                preserveWhitespaces: false,
                template: `
    <div *ngIf="nzTitle || nzExtra" class="ant-descriptions-header">
      <div *ngIf="nzTitle" class="ant-descriptions-title">
        <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      </div>
      <div *ngIf="nzExtra" class="ant-descriptions-extra">
        <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
      </div>
    </div>
    <div class="ant-descriptions-view">
      <table>
        <tbody>
          <ng-container *ngIf="nzLayout === 'horizontal'">
            <tr class="ant-descriptions-row" *ngFor="let row of itemMatrix; let i = index">
              <ng-container *ngFor="let item of row; let isLast = last">
                <!-- Horizontal & NOT Bordered -->
                <ng-container *ngIf="!nzBordered">
                  <td class="ant-descriptions-item" [colSpan]="item.span">
                    <div class="ant-descriptions-item-container">
                      <span class="ant-descriptions-item-label" [class.ant-descriptions-item-no-colon]="!nzColon">
                        <ng-container *nzStringTemplateOutlet="item.title">
                          {{ item.title }}
                        </ng-container>
                      </span>
                      <span class="ant-descriptions-item-content">
                        <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                      </span>
                    </div>
                  </td>
                </ng-container>
                <!-- Horizontal & Bordered -->
                <ng-container *ngIf="nzBordered">
                  <td class="ant-descriptions-item-label" *nzStringTemplateOutlet="item.title">
                    <ng-container *nzStringTemplateOutlet="item.title">
                      {{ item.title }}
                    </ng-container>
                  </td>
                  <td class="ant-descriptions-item-content" [colSpan]="item.span * 2 - 1">
                    <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                  </td>
                </ng-container>
              </ng-container>
            </tr>
          </ng-container>

          <ng-container *ngIf="nzLayout === 'vertical'">
            <!-- Vertical & NOT Bordered -->
            <ng-container *ngIf="!nzBordered">
              <ng-container *ngFor="let row of itemMatrix; let i = index">
                <tr class="ant-descriptions-row">
                  <ng-container *ngFor="let item of row; let isLast = last">
                    <td class="ant-descriptions-item" [colSpan]="item.span">
                      <span class="ant-descriptions-item-label" [class.ant-descriptions-item-no-colon]="!nzColon">
                        <ng-container *nzStringTemplateOutlet="item.title">
                          {{ item.title }}
                        </ng-container>
                      </span>
                    </td>
                  </ng-container>
                </tr>
                <tr class="ant-descriptions-row">
                  <ng-container *ngFor="let item of row; let isLast = last">
                    <td class="ant-descriptions-item" [colSpan]="item.span">
                      <span class="ant-descriptions-item-content">
                        <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                      </span>
                    </td>
                  </ng-container>
                </tr>
              </ng-container>
            </ng-container>
            <!-- Vertical & Bordered -->
            <ng-container *ngIf="nzBordered">
              <ng-container *ngFor="let row of itemMatrix; let i = index">
                <tr class="ant-descriptions-row">
                  <ng-container *ngFor="let item of row; let isLast = last">
                    <td class="ant-descriptions-item-label" [colSpan]="item.span">
                      <ng-container *nzStringTemplateOutlet="item.title">
                        {{ item.title }}
                      </ng-container>
                    </td>
                  </ng-container>
                </tr>
                <tr class="ant-descriptions-row">
                  <ng-container *ngFor="let item of row; let isLast = last">
                    <td class="ant-descriptions-item-content" [colSpan]="item.span">
                      <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                    </td>
                  </ng-container>
                </tr>
              </ng-container>
            </ng-container>
          </ng-container>
        </tbody>
      </table>
    </div>
  `,
                host: {
                    class: 'ant-descriptions',
                    '[class.ant-descriptions-bordered]': 'nzBordered',
                    '[class.ant-descriptions-middle]': 'nzSize === "middle"',
                    '[class.ant-descriptions-small]': 'nzSize === "small"',
                    '[class.ant-descriptions-rtl]': 'dir === "rtl"'
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_10__["NzBreakpointService"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { nzBordered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzColon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [NzDescriptionsItemComponent]
        }], nzExtra: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDescriptionsModule {
}
NzDescriptionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NzDescriptionsModule });
NzDescriptionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NzDescriptionsModule_Factory(t) { return new (t || NzDescriptionsModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzDescriptionsModule, { declarations: function () { return [NzDescriptionsComponent, NzDescriptionsItemComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]]; }, exports: function () { return [NzDescriptionsComponent, NzDescriptionsItemComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzDescriptionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]],
                declarations: [NzDescriptionsComponent, NzDescriptionsItemComponent],
                exports: [NzDescriptionsComponent, NzDescriptionsItemComponent]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-descriptions.js.map

/***/ }),

/***/ "xNdv":
/*!****************************************************************************!*\
  !*** ./src/app/routes/config/project/project-add/project-add.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfigProjectAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigProjectAddComponent", function() { return ConfigProjectAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_project_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./project-add.component.html */ "ppEs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "Ac7g");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "AytR");








let ConfigProjectAddComponent = class ConfigProjectAddComponent {
    constructor(http, modal, fb) {
        this.http = http;
        this.modal = modal;
        this.fb = fb;
        // 所有的产品集合，相同产品归为一类。用于选定产品
        this.prodsWithVersionOptions = [];
        this.usersOfManager = [];
        this.selectedProduct = [];
        this.assets = [];
        /**
        * 自定义上传项目附件
        */
        this.customUpdateProjectAssets = (item) => {
            this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/attached/OSS/getPolicy', { type: "projectAssets" }).subscribe(res => {
                const { accessid, policy, signature, callback, dir, host } = res.data;
                let param = new FormData();
                param.append("OSSAccessKeyId", accessid);
                param.append("key", dir + item.file.name);
                param.append("policy", policy);
                param.append("Signature", signature);
                param.append("callback", callback);
                param.append("file", item.file);
                this.http.post(host, param)
                    .subscribe(res => {
                    this.assets.push({ id: res.data });
                    item.onSuccess(item.file);
                }, (err) => {
                    item.onError(err, item.file);
                });
            });
        };
    }
    ngOnInit() {
        this.form = this.fb.group({
            productName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            prodVersion: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            manager: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            projectAddress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            projectCustomName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            projectNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.getAllUserOfProjectManager();
        this.getAllProductVersion();
    }
    getAllUserOfProjectManager() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/userManager/getAllUser', { role: 30000 }).subscribe((res) => {
            this.usersOfManager = res.data;
        });
    }
    _submitForm() {
        var _a, _b, _c, _d, _e, _f;
        let param = {
            projectName: (_a = this.form.get("productName")) === null || _a === void 0 ? void 0 : _a.value,
            amount: (_b = this.form.get("amount")) === null || _b === void 0 ? void 0 : _b.value,
            managerId: (_c = this.form.get("manager")) === null || _c === void 0 ? void 0 : _c.value,
            projectAddress: (_d = this.form.get("projectAddress")) === null || _d === void 0 ? void 0 : _d.value,
            projectCustomName: (_e = this.form.get("projectCustomName")) === null || _e === void 0 ? void 0 : _e.value,
            projectNumber: (_f = this.form.get("projectNumber")) === null || _f === void 0 ? void 0 : _f.value,
            progress: 1,
            productList: this.selectedProduct,
            assetsList: this.assets
        };
        this.http.post(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/project/addProject', param).subscribe(res => {
            // this.close();
        });
    }
    selectProd(values) {
        let item = {
            "productName": values[1].parent.productName,
            "prodVersion": values[1].productName,
            "productId": values[1].parent.productId
        };
        this.selectedProduct.push(item);
    }
    /**
     * 在 selectedProduct 数组中根据 productId 删除元素
     */
    removeSelectedProduct(productId) {
        this.selectedProduct = this.selectedProduct.filter(item => {
            if (item.productId == productId) {
                return false;
            }
            else {
                return true;
            }
        });
    }
    close() {
        this.modal.destroy();
    }
    /**
     * 获取所有产品（所有版本）
     */
    getAllProductVersion() {
        this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SERVER_URL + '/api/product/getAllProductVersion').subscribe(res => {
            this.prodsWithVersionOptions = res.data;
        });
    }
};
ConfigProjectAddComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["_HttpClient"] },
    { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
ConfigProjectAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-config-project-add',
        template: _raw_loader_project_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ConfigProjectAddComponent);



/***/ })

}]);
//# sourceMappingURL=config-config-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notepad_classic_notepad_classic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notepad-classic/notepad-classic.component */ "./src/app/notepad-classic/notepad-classic.component.ts");





const routes = [
    { path: '', redirectTo: 'notepad', pathMatch: 'full' },
    { path: 'notepad', component: _notepad_classic_notepad_classic_component__WEBPACK_IMPORTED_MODULE_2__["NotepadClassicComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'notepad-classic';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/material.module */ "./src/shared/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _notepad_classic_notepad_classic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notepad-classic/notepad-classic.component */ "./src/app/notepad-classic/notepad-classic.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _notepad_classic_notepad_classic_component__WEBPACK_IMPORTED_MODULE_5__["NotepadClassicComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _notepad_classic_notepad_classic_component__WEBPACK_IMPORTED_MODULE_5__["NotepadClassicComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/notepad-classic/notepad-classic.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/notepad-classic/notepad-classic.component.ts ***!
  \**************************************************************/
/*! exports provided: NotepadClassicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotepadClassicComponent", function() { return NotepadClassicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");








function NotepadClassicComponent_mat_card_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NotepadClassicComponent {
    constructor() {
        this.notes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    }
    ngOnInit() {
    }
}
NotepadClassicComponent.ɵfac = function NotepadClassicComponent_Factory(t) { return new (t || NotepadClassicComponent)(); };
NotepadClassicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotepadClassicComponent, selectors: [["app-notepad-classic"]], decls: 98, vars: 1, consts: [["fullscreen", "", 1, "sidenav-container"], ["mode", "side", "opened", "", "position", "start", 1, "sidenav-panel"], ["sidenav", ""], [1, "profile-panel"], [1, "profile-picture"], ["src", "../../assets/img/demo.png"], [1, "profile-content"], [1, "profile-text", "subtitle-size-2"], [1, "profile-name", "caption-size", "active-empasis"], [1, "menu"], [1, "menu-header", "inactive-empasis"], [1, "subtitle-size-1"], ["mat-button", "", 1, "menu-button"], [1, "menu-icon"], [1, "menu-text", "body-size-1"], [1, "menu-icon", 2, "color", "#795548"], [1, "menu-icon", 2, "color", "#FF5252"], [1, "menu-icon", 2, "color", "#FFC107"], [1, "menu-icon", 2, "color", "#2196F3"], [1, "menu-icon", 2, "color", "#E91E63"], [1, "navbar"], [1, "dashboard-icons", "active-empasis"], ["mat-icon-button", "", 3, "click"], [1, "navbar-title", "heading-size-6"], [1, "navbar-right", "active-empasis"], [1, "dashboard-icons"], ["mat-icon-button", ""], [1, "sidenav-content"], [1, "top-toolbar"], [1, "body-size-2", "disabled-empasis"], [1, "notepad-cards"], ["class", "notes", 4, "ngFor", "ngForOf"], [1, "notes"], [1, "body-size-1", "active-empasis"], [1, "body-size-2", "inactive-empasis", 2, "margin-top", "16px"]], template: function NotepadClassicComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Rahulraj Nataraj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "All Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "To-do's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "My Favourites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "folder_shared");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Shared with me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Untagged");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-toolbar", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotepadClassicComponent_Template_button_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "All Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "sync");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, NotepadClassicComponent_mat_card_97_Template, 5, 0, "mat-card", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notes);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"]], styles: [".heading-size-4[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: normal;\n  letter-spacing: 0.25px;\n}\n.heading-size-5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: normal;\n  letter-spacing: 0px;\n}\n.heading-size-6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  letter-spacing: 0.15px;\n}\n.subtitle-size-1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: normal;\n  letter-spacing: 0.15px;\n}\n.subtitle-size-2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 0.1px;\n}\n.body-size-1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: normal;\n  letter-spacing: 0.5px;\n}\n.body-size-2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  letter-spacing: 0.25px;\n}\n.button-text-size[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 1.25px;\n}\n.caption-size[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: normal;\n  letter-spacing: 0.4px;\n}\n.overline-size[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 10px;\n  font-weight: normal;\n  letter-spacing: 1.5px;\n}\n.active-empasis[_ngcontent-%COMP%] {\n  opacity: 87%;\n}\n.inactive-empasis[_ngcontent-%COMP%] {\n  opacity: 60%;\n}\n.disabled-empasis[_ngcontent-%COMP%] {\n  opacity: 38%;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav-panel[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  width: 240px;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav-panel[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%] {\n  display: flex;\n  height: 96px;\n  justify-content: left;\n  margin: 0px 16px;\n  align-items: center;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav-panel[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav-panel[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 64px;\n  width: 64px;\n  border-radius: 50%;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav-panel[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%] {\n  padding-top: 6px;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav-panel[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%] {\n  background-color: #00796B;\n  padding: 8px 16px;\n  height: 24px;\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav-panel[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 4px 24px;\n  text-align: left;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav-panel[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  color: #FFFFFF;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav-panel[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   .menu-text[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n.sidenav-container[_ngcontent-%COMP%]   .mat-drawer[_ngcontent-%COMP%] {\n  background-color: #009688;\n  border-right: none;\n}\n.sidenav-container[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%] {\n  background-color: #F4F6F7;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav-content[_ngcontent-%COMP%]   .top-toolbar[_ngcontent-%COMP%] {\n  height: 48px;\n  margin: 24px 24px;\n  border-radius: 4px;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav-content[_ngcontent-%COMP%]   .notepad-cards[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0px 24px;\n  flex-wrap: wrap;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav-content[_ngcontent-%COMP%]   .notepad-cards[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%] {\n  height: 160px;\n  width: 240px;\n  background-color: #FFFFFF;\n  border-radius: 4px;\n  padding: 16px;\n  margin-right: 24px;\n  margin-bottom: 24px;\n  cursor: pointer;\n  overflow: clip;\n}\n.navbar[_ngcontent-%COMP%] {\n  background-color: #00796B;\n}\n.navbar[_ngcontent-%COMP%]   .dashboard-icons[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #FFFFFF;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-right[_ngcontent-%COMP%] {\n  justify-content: end;\n  flex-grow: 1;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZXBhZC1jbGFzc2ljL0Q6L0dpdGh1Yi9hbmd1bGFyLW5vdGVwYWQtY2xhc3NpYy9zcmMvdHlwb2dyYXBoeS5sZXNzIiwic3JjL2FwcC9ub3RlcGFkLWNsYXNzaWMvbm90ZXBhZC1jbGFzc2ljLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9ub3RlcGFkLWNsYXNzaWMvRDovR2l0aHViL2FuZ3VsYXItbm90ZXBhZC1jbGFzc2ljL3NyYy9hcHAvbm90ZXBhZC1jbGFzc2ljL25vdGVwYWQtY2xhc3NpYy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDRko7QURLQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDSEo7QURNQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDSko7QURPQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDTEo7QURRQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDTko7QURTQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDUEo7QURVQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDUko7QURXQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNUSjtBRFlBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNWSjtBRGFBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ1hKO0FEZ0JBO0VBRUksWUFBQTtBQ2ZKO0FEa0JBO0VBRUksWUFBQTtBQ2pCSjtBRG9CQTtFQUVJLFlBQUE7QUNuQko7QUN6REE7RUFFUSxjQUFBO0VBQ0EsWUFBQTtBRDBEUjtBQzdEQTtFQUtZLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FEMkRaO0FDcEVBO0VBV2dCLGlCQUFBO0FENERoQjtBQ3ZFQTtFQWFvQixZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FENkRwQjtBQzVFQTtFQW9CZ0IsZ0JBQUE7QUQyRGhCO0FDL0VBO0VBeUJnQix5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUR5RGhCO0FDdkZBO0VBaUNnQixXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRHlEaEI7QUM1RkE7RUFxQ29CLGtCQUFBO0VBQ0EsY0FBQTtBRDBEcEI7QUNoR0E7RUF5Q29CLGNBQUE7QUQwRHBCO0FDbkdBO0VBK0NRLHlCQUFBO0VBQ0Esa0JBQUE7QUR1RFI7QUN2R0E7RUFvRFEseUJBQUE7QURzRFI7QUMxR0E7RUF3RFksWUFBQTtFQUVBLGlCQUFBO0VBRUEsa0JBQUE7QURtRFo7QUMvR0E7RUErRFksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRG1EWjtBQ3BIQTtFQW1FZ0IsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRG9EaEI7QUM5Q0E7RUFDSSx5QkFBQTtBRGdESjtBQ2pEQTtFQUdRLGlCQUFBO0VBQ0EsY0FBQTtBRGlEUjtBQ3JEQTtFQU9RLGNBQUE7QURpRFI7QUN4REE7RUFVUSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FEaURSIiwiZmlsZSI6InNyYy9hcHAvbm90ZXBhZC1jbGFzc2ljL25vdGVwYWQtY2xhc3NpYy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy90eXBvZ3JhcGh5XG5cbi5oZWFkaW5nLXNpemUtNHtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xufVxuXG4uaGVhZGluZy1zaXplLTV7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbn1cblxuLmhlYWRpbmctc2l6ZS02e1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xufVxuXG4uc3VidGl0bGUtc2l6ZS0xe1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XG59XG5cbi5zdWJ0aXRsZS1zaXplLTJ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbn1cblxuLmJvZHktc2l6ZS0xe1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLmJvZHktc2l6ZS0ye1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XG59XG5cbi5idXR0b24tdGV4dC1zaXple1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XG59XG5cbi5jYXB0aW9uLXNpemV7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xufVxuXG4ub3ZlcmxpbmUtc2l6ZXtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbn1cblxuLy9lbXBhc2lzXG5cbi5hY3RpdmUtZW1wYXNpc1xue1xuICAgIG9wYWNpdHk6IDg3JTtcbn1cblxuLmluYWN0aXZlLWVtcGFzaXNcbntcbiAgICBvcGFjaXR5OiA2MCU7XG59XG5cbi5kaXNhYmxlZC1lbXBhc2lzXG57XG4gICAgb3BhY2l0eTogMzglO1xufSIsIi5oZWFkaW5nLXNpemUtNCB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbn1cbi5oZWFkaW5nLXNpemUtNSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbn1cbi5oZWFkaW5nLXNpemUtNiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XG59XG4uc3VidGl0bGUtc2l6ZS0xIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xufVxuLnN1YnRpdGxlLXNpemUtMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbn1cbi5ib2R5LXNpemUtMSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLmJvZHktc2l6ZS0yIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xufVxuLmJ1dHRvbi10ZXh0LXNpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xufVxuLmNhcHRpb24tc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xufVxuLm92ZXJsaW5lLXNpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbn1cbi5hY3RpdmUtZW1wYXNpcyB7XG4gIG9wYWNpdHk6IDg3JTtcbn1cbi5pbmFjdGl2ZS1lbXBhc2lzIHtcbiAgb3BhY2l0eTogNjAlO1xufVxuLmRpc2FibGVkLWVtcGFzaXMge1xuICBvcGFjaXR5OiAzOCU7XG59XG4uc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtcGFuZWwge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgd2lkdGg6IDI0MHB4O1xufVxuLnNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LXBhbmVsIC5wcm9maWxlLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA5NnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIG1hcmdpbjogMHB4IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtcGFuZWwgLnByb2ZpbGUtcGFuZWwgLnByb2ZpbGUtcGljdHVyZSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLnNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LXBhbmVsIC5wcm9maWxlLXBhbmVsIC5wcm9maWxlLXBpY3R1cmUgaW1nIHtcbiAgaGVpZ2h0OiA2NHB4O1xuICB3aWR0aDogNjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LXBhbmVsIC5wcm9maWxlLXBhbmVsIC5wcm9maWxlLW5hbWUge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuLnNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LXBhbmVsIC5tZW51IC5tZW51LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc5NkI7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zaWRlbmF2LWNvbnRhaW5lciAuc2lkZW5hdi1wYW5lbCAubWVudSAubWVudS1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNHB4IDI0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtcGFuZWwgLm1lbnUgLm1lbnUtYnV0dG9uIC5tZW51LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnNpZGVuYXYtY29udGFpbmVyIC5zaWRlbmF2LXBhbmVsIC5tZW51IC5tZW51LWJ1dHRvbiAubWVudS10ZXh0IHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uc2lkZW5hdi1jb250YWluZXIgLm1hdC1kcmF3ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4uc2lkZW5hdi1jb250YWluZXIgLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY2Rjc7XG59XG4uc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtY29udGVudCAudG9wLXRvb2xiYXIge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbjogMjRweCAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uc2lkZW5hdi1jb250YWluZXIgLnNpZGVuYXYtY29udGVudCAubm90ZXBhZC1jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMHB4IDI0cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5zaWRlbmF2LWNvbnRhaW5lciAuc2lkZW5hdi1jb250ZW50IC5ub3RlcGFkLWNhcmRzIC5ub3RlcyB7XG4gIGhlaWdodDogMTYwcHg7XG4gIHdpZHRoOiAyNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGNsaXA7XG59XG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzk2Qjtcbn1cbi5uYXZiYXIgLmRhc2hib2FyZC1pY29ucyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5uYXZiYXIgLm5hdmJhci10aXRsZSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLm5hdmJhciAubmF2YmFyLXJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uL2NvbW1vbi12YXJpYWJsZXMubGVzcyc7XG5AaW1wb3J0IFwiLi4vLi4vdHlwb2dyYXBoeS5sZXNzXCI7XG5cbi5zaWRlbmF2LWNvbnRhaW5lcntcbiAgICAuc2lkZW5hdi1wYW5lbCB7XG4gICAgICAgIGNvbG9yOiBAdGV4dFByaW1hcnlDb2xvcjtcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAucHJvZmlsZS1wYW5lbHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDk2cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAxNnB4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC5wcm9maWxlLXBpY3R1cmV7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvZmlsZS1uYW1leyAgXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubWVudXtcbiAgICAgICAgICAgIC5tZW51LWhlYWRlcntcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbmF2YmFyLWNvbG9yO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtYnV0dG9ue1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAyNHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgLm1lbnUtaWNvbntcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogQHRleHRQcmltYXJ5Q29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tZW51LXRleHR7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBAdGV4dFByaW1hcnlDb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1hdC1kcmF3ZXIgeyBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHByb2ZpbGUtYmFja2dyb3VuZDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cblxuICAgIC5tYXQtZHJhd2VyLWNvbnRlbnR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cbiAgICAuc2lkZW5hdi1jb250ZW50IHtcbiAgICAgICAgLnRvcC10b29sYmFye1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW46IDI0cHggMjRweDtcbiAgICAgICAgICAgIC8vIGJvcmRlcjpzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgICAgICAubm90ZXBhZC1jYXJkc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAyNHB4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgLm5vdGVze1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEB0ZXh0UHJpbWFyeUNvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzpjbGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSAgIFxufVxuXG4ubmF2YmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBuYXZiYXItY29sb3I7ICAgICBcbiAgICAuZGFzaGJvYXJkLWljb25ze1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IEB0ZXh0UHJpbWFyeUNvbG9yO1xuICAgIH1cbiAgICAubmF2YmFyLXRpdGxle1xuICAgICAgICBjb2xvcjogQHRleHRQcmltYXJ5Q29sb3I7XG4gICAgfVxuICAgIC5uYXZiYXItcmlnaHQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotepadClassicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notepad-classic',
                templateUrl: './notepad-classic.component.html',
                styleUrls: ['./notepad-classic.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/shared/material.module.ts":
/*!***************************************!*\
  !*** ./src/shared/material.module.ts ***!
  \***************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");









const materialComponentItem = [
    _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[materialComponentItem], _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]], exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [materialComponentItem],
                exports: [materialComponentItem]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Github\angular-notepad-classic\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
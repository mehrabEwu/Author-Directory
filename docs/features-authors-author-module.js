(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-authors-author-module"],{

/***/ "+4aF":
/*!*******************************************************!*\
  !*** ./src/app/common/pagination/pagination.model.ts ***!
  \*******************************************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
class Pagination {
    constructor(obj) {
        this.count = (obj === null || obj === void 0 ? void 0 : obj.count) || 0;
        this.lastItemIndex = (obj === null || obj === void 0 ? void 0 : obj.lastItemIndex) || 0;
        this.page = (obj === null || obj === void 0 ? void 0 : obj.page) || 0;
        this.totalCount = (obj === null || obj === void 0 ? void 0 : obj.totalCount) || 0;
        this.totalPages = (obj === null || obj === void 0 ? void 0 : obj.totalPages) || 0;
    }
}


/***/ }),

/***/ "0VuW":
/*!***********************************************************************!*\
  !*** ./src/app/common/author-list-item/author-list-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: AuthorListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorListItemComponent", function() { return AuthorListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_wrap_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/wrap.pipe */ "F1z3");




class AuthorListItemComponent {
    constructor() {
        this.childBtnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    ngOnInit() {
    }
    addFavourite(eventName) {
        console.log(eventName);
        this.childBtnClick.emit({
            data: this.author,
            name: eventName
        });
    }
}
AuthorListItemComponent.ɵfac = function AuthorListItemComponent_Factory(t) { return new (t || AuthorListItemComponent)(); };
AuthorListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorListItemComponent, selectors: [["app-author-list-item"]], inputs: { author: "author" }, outputs: { childBtnClick: "childBtnClick" }, decls: 25, vars: 15, consts: [[1, "card"], [1, "card-header", "text-white", "text-right", 3, "ngClass"], [1, "", 3, "click"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-link", 3, "href"]], template: function AuthorListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorListItemComponent_Template_span_click_2_listener() { return ctx.addFavourite(ctx.author.isFav ? "remove" : "add"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bio: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "wrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Link:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "wrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.author.isFav ? "bg-red" : "bg-black");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.author.isFav ? "Remove Favt" : "Add Favt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.author.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, ctx.author.dateAdded));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 9, ctx.author.bio, 60));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.author.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 12, ctx.author.link, 40));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _pipes_wrap_pipe__WEBPACK_IMPORTED_MODULE_2__["WrapPipe"]], styles: [".card[_ngcontent-%COMP%]{\r\n  box-shadow: 3px 5px 40px 4px rgba(0,0,0,0.40);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvci1saXN0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZDQUE2QztBQUMvQyIsImZpbGUiOiJhdXRob3ItbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICBib3gtc2hhZG93OiAzcHggNXB4IDQwcHggNHB4IHJnYmEoMCwwLDAsMC40MCk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "33RK":
/*!***********************************************************!*\
  !*** ./src/app/common/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PaginationComponent {
    constructor() {
        this.paginationBtn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    ngOnInit() {
    }
    onClickedPage(action) {
        switch (action) {
            case 'prev':
                if (this.pages.page > 1) {
                    this.pages.page = this.pages.page - 1;
                    this.paginationBtn.emit({
                        name: action,
                        page: this.pages
                    });
                }
                break;
            case 'next':
                if (this.pages.page < this.pages.totalPages) {
                    this.pages.page = this.pages.page + 1;
                    this.paginationBtn.emit({
                        name: action,
                        page: this.pages
                    });
                }
                break;
            default:
                break;
        }
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { pages: "pages" }, outputs: { paginationBtn: "paginationBtn" }, decls: 7, vars: 3, consts: [[1, "page", "mt-3", "text-center"], ["type", "button", 1, "btn", "btn-dark", 3, "disabled", "click"], [1, "mx-2"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_button_click_1_listener() { return ctx.onClickedPage("prev"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_button_click_5_listener() { return ctx.onClickedPage("next"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.pages.page == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Page:", ctx.pages.page, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.pages.page == ctx.pages.totalPages);
    } }, styles: [".page[_ngcontent-%COMP%] {\r\n  border : 1px solid grey;\r\n  padding: 10px 0;\r\n  box-shadow: 3px 5px 40px 4px rgba(0,0,0,0.47);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsNkNBQTZDO0FBQy9DIiwiZmlsZSI6InBhZ2luYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcclxuICBib3JkZXIgOiAxcHggc29saWQgZ3JleTtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgYm94LXNoYWRvdzogM3B4IDVweCA0MHB4IDRweCByZ2JhKDAsMCwwLDAuNDcpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Czc0":
/*!***************************************************!*\
  !*** ./src/app/features/authors/author.module.ts ***!
  \***************************************************/
/*! exports provided: AuthorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorModule", function() { return AuthorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_common_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/shared.module */ "HUga");
/* harmony import */ var _author_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./author.routing.module */ "J3b7");
/* harmony import */ var _components_author_diary_author_diary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/author-diary/author-diary.component */ "WUpI");
/* harmony import */ var _components_favorite_author_diary_favorite_author_diary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/favorite-author-diary/favorite-author-diary.component */ "lvRx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AuthorModule {
}
AuthorModule.ɵfac = function AuthorModule_Factory(t) { return new (t || AuthorModule)(); };
AuthorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AuthorModule });
AuthorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _author_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthorRoutingModule"],
            src_app_common_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthorModule, { declarations: [_components_author_diary_author_diary_component__WEBPACK_IMPORTED_MODULE_3__["AuthorDiaryComponent"], _components_favorite_author_diary_favorite_author_diary_component__WEBPACK_IMPORTED_MODULE_4__["FavoriteAuthorDiaryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _author_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthorRoutingModule"],
        src_app_common_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();


/***/ }),

/***/ "F1z3":
/*!*******************************************!*\
  !*** ./src/app/common/pipes/wrap.pipe.ts ***!
  \*******************************************/
/*! exports provided: WrapPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapPipe", function() { return WrapPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WrapPipe {
    transform(value, ...args) {
        return value.split('').slice(0, args[0]).join('') + '...';
    }
}
WrapPipe.ɵfac = function WrapPipe_Factory(t) { return new (t || WrapPipe)(); };
WrapPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "wrap", type: WrapPipe, pure: true });


/***/ }),

/***/ "HUga":
/*!*****************************************!*\
  !*** ./src/app/common/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _author_list_item_author_list_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./author-list-item/author-list-item.component */ "0VuW");
/* harmony import */ var _pipes_wrap_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/wrap.pipe */ "F1z3");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination/pagination.component */ "33RK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_author_list_item_author_list_item_component__WEBPACK_IMPORTED_MODULE_1__["AuthorListItemComponent"], _pipes_wrap_pipe__WEBPACK_IMPORTED_MODULE_2__["WrapPipe"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_author_list_item_author_list_item_component__WEBPACK_IMPORTED_MODULE_1__["AuthorListItemComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]] }); })();


/***/ }),

/***/ "J3b7":
/*!***********************************************************!*\
  !*** ./src/app/features/authors/author.routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorRoutingModule", function() { return AuthorRoutingModule; });
/* harmony import */ var _components_favorite_author_diary_favorite_author_diary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/favorite-author-diary/favorite-author-diary.component */ "lvRx");
/* harmony import */ var _components_author_diary_author_diary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/author-diary/author-diary.component */ "WUpI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', redirectTo: 'author', pathMatch: 'full' },
    { path: 'author', component: _components_author_diary_author_diary_component__WEBPACK_IMPORTED_MODULE_1__["AuthorDiaryComponent"] },
    { path: 'fav-author', component: _components_favorite_author_diary_favorite_author_diary_component__WEBPACK_IMPORTED_MODULE_0__["FavoriteAuthorDiaryComponent"] }
];
class AuthorRoutingModule {
}
AuthorRoutingModule.ɵfac = function AuthorRoutingModule_Factory(t) { return new (t || AuthorRoutingModule)(); };
AuthorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthorRoutingModule });
AuthorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "Sj/i":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/authors/components/author-diary/AuthorService/authors.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: AuthorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsService", function() { return AuthorsService; });
/* harmony import */ var src_providers_base_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/base/base */ "aejn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_providers_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/api/api */ "bLtE");



class AuthorsService extends src_providers_base_base__WEBPACK_IMPORTED_MODULE_0__["Base"] {
    constructor(api) {
        super();
        this.api = api;
    }
    getAuthorInfo(params) {
        return this.api.get('authors', params);
    }
}
AuthorsService.ɵfac = function AuthorsService_Factory(t) { return new (t || AuthorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_providers_api_api__WEBPACK_IMPORTED_MODULE_2__["Api"])); };
AuthorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthorsService, factory: AuthorsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WUpI":
/*!************************************************************************************!*\
  !*** ./src/app/features/authors/components/author-diary/author-diary.component.ts ***!
  \************************************************************************************/
/*! exports provided: AuthorDiaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorDiaryComponent", function() { return AuthorDiaryComponent; });
/* harmony import */ var _common_pagination_pagination_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../common/pagination/pagination.model */ "+4aF");
/* harmony import */ var _models_author_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/author.model */ "Xtwl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _AuthorService_authors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthorService/authors.service */ "Sj/i");
/* harmony import */ var src_providers_tempDataService_temp_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/tempDataService/temp-data.service */ "jYui");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_author_list_item_author_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/author-list-item/author-list-item.component */ "0VuW");
/* harmony import */ var _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/pagination/pagination.component */ "33RK");








function AuthorDiaryComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-author-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("childBtnClick", function AuthorDiaryComponent_ng_container_1_Template_app_author_list_item_childBtnClick_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.childComponetBtnClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const author_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("author", author_r2);
} }
function AuthorDiaryComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-pagination", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("paginationBtn", function AuthorDiaryComponent_div_2_Template_app_pagination_paginationBtn_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.paginationBtnClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pages", ctx_r1.paginationData);
} }
class AuthorDiaryComponent {
    constructor(AuthorService, localStorage) {
        this.AuthorService = AuthorService;
        this.localStorage = localStorage;
        this.fav = this.localStorage.getData("fav-auth") || {};
    }
    ngOnInit() {
        this.getData(10, 3);
    }
    childComponetBtnClick(event) {
        switch (event === null || event === void 0 ? void 0 : event.name) {
            case "add":
                event.data.isFav = true;
                this.fav[event.data._id] = event.data;
                this.localStorage.setData("fav-auth", this.fav);
                break;
            case "remove":
                if (this.fav.hasOwnProperty(event.data._id)) {
                    delete this.fav[event.data._id];
                }
                event.data.isFav = false;
                this.localStorage.setData("fav-auth", this.fav);
                break;
            default:
                break;
        }
    }
    getData(limit, pageNo) {
        const params = {
            limit: limit,
            skip: (pageNo - 1) * limit,
        };
        this.AuthorService.getAuthorInfo(params).subscribe((resp) => {
            var _a;
            this.paginationData = new _common_pagination_pagination_model__WEBPACK_IMPORTED_MODULE_0__["Pagination"](resp);
            this.authorList = (_a = resp === null || resp === void 0 ? void 0 : resp.results) === null || _a === void 0 ? void 0 : _a.map((item) => {
                if (this.fav && this.fav.hasOwnProperty(item === null || item === void 0 ? void 0 : item._id)) {
                    item["isFav"] = true;
                }
                return new _models_author_model__WEBPACK_IMPORTED_MODULE_1__["Author"](item);
            });
        }, (errorMessage) => { });
    }
    paginationBtnClick(event) {
        this.getData(10, event.page.page);
    }
}
AuthorDiaryComponent.ɵfac = function AuthorDiaryComponent_Factory(t) { return new (t || AuthorDiaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_AuthorService_authors_service__WEBPACK_IMPORTED_MODULE_3__["AuthorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_providers_tempDataService_temp_data_service__WEBPACK_IMPORTED_MODULE_4__["TempDataService"])); };
AuthorDiaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AuthorDiaryComponent, selectors: [["app-author-diary"]], decls: 3, vars: 2, consts: [[1, "row"], [4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "col-sm-12", "col-md-6", "col-lg-4", "mt-4"], [3, "author", "childBtnClick"], [1, "col-md-12"], [3, "pages", "paginationBtn"]], template: function AuthorDiaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AuthorDiaryComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AuthorDiaryComponent_div_2_Template, 3, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.authorList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.paginationData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _common_author_list_item_author_list_item_component__WEBPACK_IMPORTED_MODULE_6__["AuthorListItemComponent"], _common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3ItZGlhcnkuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Xtwl":
/*!*********************************************************************************!*\
  !*** ./src/app/features/authors/components/author-diary/models/author.model.ts ***!
  \*********************************************************************************/
/*! exports provided: Author */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
class Author {
    constructor(obj) {
        var _a;
        this._id = (obj === null || obj === void 0 ? void 0 : obj._id) || '';
        this.name = (obj === null || obj === void 0 ? void 0 : obj.name) || '';
        this.bio = (obj === null || obj === void 0 ? void 0 : obj.bio) || '';
        this.dateAdded = (obj === null || obj === void 0 ? void 0 : obj.dateAdded) ? new Date(obj === null || obj === void 0 ? void 0 : obj.dateAdded) : new Date();
        this.dateModified = (obj === null || obj === void 0 ? void 0 : obj.dateModified) ? new Date(obj === null || obj === void 0 ? void 0 : obj.dateModified)
            : new Date();
        this.description = (obj === null || obj === void 0 ? void 0 : obj.description) || '';
        this.link = (obj === null || obj === void 0 ? void 0 : obj.link) || '';
        this.quoteCount = (_a = obj === null || obj === void 0 ? void 0 : obj.quoteCount) !== null && _a !== void 0 ? _a : 0;
        this.slug = (obj === null || obj === void 0 ? void 0 : obj.slug) || '';
        this.isFav = obj.isFav || false;
    }
}


/***/ }),

/***/ "aejn":
/*!************************************!*\
  !*** ./src/providers/base/base.ts ***!
  \************************************/
/*! exports provided: Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
class Base {
    static parseErrors(errors) {
        let retVal = '';
        if (errors) {
            for (const propery in errors) {
                retVal += propery + ': ' + errors[propery] + '\r\n';
            }
        }
        return retVal;
    }
}


/***/ }),

/***/ "bLtE":
/*!**********************************!*\
  !*** ./src/providers/api/api.ts ***!
  \**********************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




/**
 * Api is a generic REST Api handler. Set your API url first.
 */
class Api {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    get(endpoint, params, options) {
        if (!options) {
            options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json;charset=utf-8' });
            options = options.append('Accept', 'application/json');
        }
        if (params) {
            const p = [];
            for (const k in params) {
                p.push(k + '=' + params[k]);
            }
            endpoint = endpoint + '?' + (p.join('&'));
        }
        return this.http.get(`${this.url}/${endpoint}`, { headers: options });
    }
    getCallbacks(endpoint, params, options, callbackParam) {
        if (!options) {
            options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json;charset=utf-8' });
            options = options.append('Accept', 'application/json');
            options = options.append('dataType', 'jsonp');
        }
        if (params) {
            const p = [];
            for (const k in params) {
                p.push(k + '=' + params[k]);
            }
            endpoint = endpoint + '?' + (p.join('&'));
        }
        return this.http.jsonp(`${this.url}/${endpoint}`, callbackParam);
    }
}
Api.BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
Api.ɵfac = function Api_Factory(t) { return new (t || Api)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
Api.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Api, factory: Api.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jYui":
/*!************************************************************!*\
  !*** ./src/providers/tempDataService/temp-data.service.ts ***!
  \************************************************************/
/*! exports provided: TempDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempDataService", function() { return TempDataService; });
/* harmony import */ var _base_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/base */ "aejn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TempDataService extends _base_base__WEBPACK_IMPORTED_MODULE_0__["Base"] {
    constructor() {
        super();
    }
    getData(index) {
        const data = localStorage.getItem(index);
        return data ? JSON.parse(data) : null;
    }
    setData(index, value) {
        localStorage.setItem(index, JSON.stringify(value));
    }
    deleteData(index) {
        localStorage.removeItem(index);
    }
    clearStorage() {
        localStorage.clear();
    }
}
TempDataService.ɵfac = function TempDataService_Factory(t) { return new (t || TempDataService)(); };
TempDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TempDataService, factory: TempDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lvRx":
/*!******************************************************************************************************!*\
  !*** ./src/app/features/authors/components/favorite-author-diary/favorite-author-diary.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: FavoriteAuthorDiaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteAuthorDiaryComponent", function() { return FavoriteAuthorDiaryComponent; });
/* harmony import */ var _author_diary_models_author_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../author-diary/models/author.model */ "Xtwl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_providers_tempDataService_temp_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/tempDataService/temp-data.service */ "jYui");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_author_list_item_author_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/author-list-item/author-list-item.component */ "0VuW");





function FavoriteAuthorDiaryComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-author-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("childBtnClick", function FavoriteAuthorDiaryComponent_ng_container_1_Template_app_author_list_item_childBtnClick_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.childComponetBtnClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const author_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("author", author_r1);
} }
class FavoriteAuthorDiaryComponent {
    constructor(localStorage) {
        this.localStorage = localStorage;
        this.fav = this.localStorage.getData("fav-auth") || {};
    }
    ngOnInit() {
        const rows = Object.values(this.fav);
        this.authorList = rows === null || rows === void 0 ? void 0 : rows.map(item => new _author_diary_models_author_model__WEBPACK_IMPORTED_MODULE_0__["Author"](item));
    }
    childComponetBtnClick(event) {
        switch (event === null || event === void 0 ? void 0 : event.name) {
            case "remove":
                if (this.fav.hasOwnProperty(event.data._id)) {
                    delete this.fav[event.data._id];
                }
                this.authorList = this.authorList.filter(item => (item === null || item === void 0 ? void 0 : item._id) !== event.data._id);
                this.localStorage.setData("fav-auth", this.fav);
                break;
            default:
                break;
        }
    }
}
FavoriteAuthorDiaryComponent.ɵfac = function FavoriteAuthorDiaryComponent_Factory(t) { return new (t || FavoriteAuthorDiaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_providers_tempDataService_temp_data_service__WEBPACK_IMPORTED_MODULE_2__["TempDataService"])); };
FavoriteAuthorDiaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FavoriteAuthorDiaryComponent, selectors: [["app-favorite-author-diary"]], decls: 2, vars: 1, consts: [[1, "row"], [4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-6", "col-lg-4", "mt-4"], [3, "author", "childBtnClick"]], template: function FavoriteAuthorDiaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FavoriteAuthorDiaryComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.authorList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _common_author_list_item_author_list_item_component__WEBPACK_IMPORTED_MODULE_4__["AuthorListItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvcml0ZS1hdXRob3ItZGlhcnkuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=features-authors-author-module.js.map
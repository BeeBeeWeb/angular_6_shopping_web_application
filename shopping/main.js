(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header role=\"header\" *ngIf=\"cartItems\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-8 col-sm-12\">\n        <h1 class=\"shopping-bag-header\">Your Shopping Bag</h1>\n      </div>\n      <div class=\"col-4 d-sm-none\">\n        <p class=\"cart-items cart-items-mobile\"><b>{{cartItems.length}}</b> Items</p>\n      </div>\n    </div>\n  </div>\n</header>\n\n<main role=\"main\" *ngIf=\"cartItems\">\n  <div class=\"container\">\n\n    <div class=\"cart-header-row-wrap d-none d-sm-block\">\n      <div class=\"row text-uppercase cart-header-row\">\n        <div class=\"col-sm-9\">\n          <p class=\"cart-items\"><b>{{cartItems.length}}</b> Items</p>\n        </div>\n        <div class=\"col-sm-1 cart-column-header text-center\"><p>size</p></div>\n        <div class=\"col-sm-1 cart-column-header text-center\"><p>qty</p></div>\n        <div class=\"col-sm-1 cart-column-header text-center\"><p>price</p></div>\n      </div>\n    </div>\n\n    <h1 class=\"cart-empty\" *ngIf=\"!(cartItems.length > 0)\">Your shopping bag is empty!</h1>\n    <div class=\"line-items-container\" *ngIf=\"cartItems.length > 0\">\n\n      <div class=\"row text-uppercase cart-line-item-row\" *ngFor=\"let item of cartItems; let i = index\">\n        <div class=\"col-12 col-sm-9\">\n\n          <div>\n\n            <div>\n              <figure class=\"float-left cart-product-image\">\n                <img [src]=\"'assets/' + item.p_image + '.jpg'\" alt=\"black t shirt\">\n              </figure>\n\n              <div class=\"cart-product-description\">\n                <h3>{{item.p_name}}</h3>\n                <p><span class=\"text-capitalize\">style</span> #: <span class=\"text-uppercase\">{{item.p_style}}</span></p>\n                <p class=\"text-capitalize\">colour: {{item.p_selected_color.name}}</p>\n                <p class=\"text-capitalize d-sm-none\">size: {{item.p_selected_size.code}}</p>\n\n                <p class=\"text-uppercase d-sm-none cart-line-item-qty-mobile\">qty: <span class=\"qty\">{{item.p_quantity}}</span></p>\n                <p class=\"text-capitalize d-sm-none original-price\" *ngIf=\"item.p_price != item.p_originalprice\">\n                  <sup>$</sup><span style=\"font-size: 18px;\"> {{item.p_quantity * item.p_originalprice}}</span></p>\n                <p class=\"text-capitalize d-sm-none price-mobile\"><sup>$</sup><span style=\"font-size: 18px;\"> {{item.p_quantity * item.p_price}}</span></p>\n              </div>\n\n              <div class=\"clearfix-mobile\">\n              </div>\n            </div>\n\n            <div class=\"text-uppercase line-item-actions float-left\">\n              <button (click)=\"onEditClick(item, i)\">edit</button>\n              <button (click)=\"onRemove(i)\">X remove</button>\n              <button>save for later</button>\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"col-sm-1 cart-column-header font-weight-bold text-uppercase d-none d-sm-block text-center\"><p>{{item.p_selected_size.code}}</p></div>\n        <div class=\"col-sm-1 cart-column-header font-weight-bold text-uppercase d-none d-sm-block text-center\"><p class=\"qty\">{{item.p_quantity}}</p></div>\n        <div class=\"col-sm-1 cart-column-header font-weight-bold text-uppercase d-none d-sm-block text-center\">\n          <p class=\"original-price\" *ngIf=\"item.p_price != item.p_originalprice\"><sup>$</sup>{{item.p_quantity * item.p_originalprice}}</p>\n          <br>\n          <p class=\"discount-price\"><sup>$</sup>{{item.p_quantity * item.p_price}}</p>\n        </div>\n      </div>\n\n    </div>\n\n\n    <div class=\"row\" style=\"margin-top: 20px;\" *ngIf=\"(cartItems.length > 0)\">\n      <div class=\"col-sm-4 d-none d-sm-block\">\n        <p style=\"font-weight: bold;\">Need Help</p>\n        <p style=\"font-weight: bold;\">or have question?</p>\n        <br>\n        <p>Call Customer Service at</p>\n        <p>1-800-555-5555</p>\n        <br>\n        <p style=\"text-decoration: underline\">Chat with one of our stylist</p>\n        <br>\n        <p style=\"text-decoration: underline\">See return & exchange policy</p>\n      </div>\n\n      <div class=\"col-12 col-sm-8\">\n\n        <div class=\"promo-code\">\n          <p style=\"margin-bottom: 8px;\">ENTER PROMOTION CODE OR GIFT CARD</p>\n          <input type=\"text\">\n          <button>APPLY</button>\n        </div>\n\n        <div class=\"subtotal\" style=\"margin-top: 20px;\">\n          <div class=\"row\" style=\"margin: 30px; margin-left: 0;\">\n            <div class=\"col-6\"><h6>SUBTOTAL</h6></div>\n            <div class=\"col-6 text-right\"><h6><SUP>$</SUP>{{getSubTotal()}}</h6></div>\n          </div>\n\n          <div class=\"row\" style=\"margin: 30px; margin-left: 0;\">\n            <div class=\"col-6\"><h6>PROMOTION CODE JF10 APPLIED</h6></div>\n            <div class=\"col-6 text-right\"><h6>-  <SUP>$</SUP>7.00 </h6></div>\n          </div>\n\n          <div class=\"row\" style=\"margin: 30px;margin-left: 0;  border-bottom: 1px solid lightgray; padding-bottom: 30px;\">\n            <div class=\"col-6\"><h6>ESTIMATED SHIPPING</h6>\n              <P>You qualify for free shiping because your order is over $50*</P>\n            </div>\n            <div class=\"col-6 text-right\">\n              <h6><sup *ngIf=\"!(getSubTotal()>50)\">$</sup>{{(getSubTotal()>50)? 'FREE' : '5'}}</h6>\n            </div>\n\n          </div>\n\n          <div class=\"row\" style=\"margin: 30px;margin-left: 0;  border-bottom: 5px solid lightgray; padding-bottom: 30px;\">\n            <div class=\"col-6\"><h6>ESTIMATED TOTAL</h6>\n            </div>\n            <div class=\"col-6 text-right\">\n              <h6><h6><SUP>$</SUP>{{getSubTotal() - 7 + (getSubTotal()>50? 0 : 5)}}</h6></h6>\n            </div>\n\n          </div>\n\n\n        </div>\n\n      </div>\n\n\n    </div>\n\n    <div class=\"row text-right\" *ngIf=\"(cartItems.length > 0)\">\n      <div class=\"col-12\">\n        <p class=\"text-uppercase\" class=\"continue-shopping\" style=\"text-decoration: underline; display: inline-block;\">Continue Shopping</p>\n        <button class=\"checkout-btn\">CHECKOUT</button>\n\n      </div>\n\n      <div class=\"lock\">\n        <img src=\"assets/lock.jpg\" alt=\"\">\n        <span>Secure Checkout. Shopping is always safe & secure</span>\n      </div>\n    </div>\n  </div>\n</main>\n\n<div *ngIf=\"isEditModalVisible\"\n     class=\"modal-overlay\">\n  <div class=\"modal-body\" *ngIf=\"editItem\">\n    <button (click)=\"onModalClose($event)\" class=\"modal-close-btn\">X</button>\n\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-6\">\n        <div class=\"text-center\" style=\"margin: 50px 0;border-top: 6px solid lightgray; padding-top: 40px;\">\n\n          <h6 class=\"text-uppercase\" style=\"margin-bottom: 15px;\">{{editItem.p_name}}</h6>\n          <h2></h2>\n          <h2 class=\"original-price\" *ngIf=\"editItem.p_price != editItem.p_originalprice\"><sup>$</sup>{{editItem.p_quantity * editItem.p_originalprice}}</h2>\n          <h2 class=\"discount-price\"><sup>$</sup>{{editItem.p_quantity * editItem.p_price}}</h2>\n\n          <p class=\"text-uppercase\">{{editItem.p_selected_color.name}}</p>\n          <div>\n            <span class=\"color-box\" (click)=\"onColorSelect(color)\"\n                  *ngFor=\"let color of editItem.p_available_options.colors\"\n                  [ngStyle]=\"{'background-color': color.hexcode}\"></span>\n          </div>\n\n          <div class=\"select-div\">\n            <select class=\"text-uppercase\" name=\"\" [value]=\"editItem.p_selected_size.code\" (change)=\"onSizeChange($event)\">\n              <option *ngFor=\"let size of editItem.p_available_options.sizes\"\n                      [value]=\"size.code\">{{size.name}}</option>\n            </select>\n\n            <select class=\"text-uppercase\" [value]=\"editItem.p_quantity\" (change)=\"onQtyChange($event)\">\n              <option class=\"text-uppercase\"\n                      *ngFor=\"let qty of qtyArray\"\n                      [value]=\"qty\">QTY: {{qty}}</option>\n            </select>\n          </div>\n\n          <Button class=\"modal-edit-btn\" (click)=\"onEditSubmit(editItem)\">Edit</Button>\n\n        </div>\n\n      </div>\n\n      <div class=\"col-12 col-sm-6\">\n\n        <figure class=\"modal-image\">\n          <img [src]=\"'assets/' + editItem.p_image + '.jpg'\" alt=\"\">\n        </figure>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.isEditModalVisible = false;
        this.qtyArray = [1, 2, 3, 4];
        this.isFreeShipping = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('assets/cart.json').subscribe(function (data) {
            console.log(data);
            _this.cartItems = data.productsInCart;
        });
    };
    AppComponent.prototype.onEditClick = function (editItem, index) {
        this.isEditModalVisible = true;
        this.editItem = editItem;
        this.editedIndex = index;
        this.oldEditItem = JSON.parse(JSON.stringify(editItem));
        console.log(editItem);
    };
    AppComponent.prototype.onModalClose = function (event) {
        event.stopPropagation();
        this.cartItems[this.editedIndex] = this.oldEditItem;
        this.isEditModalVisible = false;
    };
    AppComponent.prototype.onColorSelect = function (color) {
        this.editItem.p_selected_color = color;
    };
    AppComponent.prototype.onSizeChange = function (event) {
        this.editItem.p_selected_size.code = event.target.value;
        console.log(this.editItem.p_selected_size);
    };
    AppComponent.prototype.onQtyChange = function (event) {
        this.editItem.p_quantity = parseInt(event.target.value);
    };
    AppComponent.prototype.getSubTotal = function () {
        var subtotal = 0;
        for (var _i = 0, _a = this.cartItems; _i < _a.length; _i++) {
            var item = _a[_i];
            subtotal += (item.p_price * item.p_quantity);
        }
        if (subtotal > 50) {
            this.isFreeShipping = true;
        }
        return subtotal;
    };
    AppComponent.prototype.onEditSubmit = function () {
        this.isEditModalVisible = false;
    };
    AppComponent.prototype.onRemove = function (index) {
        var _this = this;
        this.cartItems = this.cartItems.filter(function (cartItem) {
            return cartItem != _this.cartItems[index];
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Bhushan\Interview Questions\shopping_bag_exercise_angular\shopping\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
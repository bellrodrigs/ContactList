webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_post_provider__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, navParams, PstPvdr, appCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PstPvdr = PstPvdr;
        this.appCtrl = appCtrl;
        this.http = http;
        this.nome = "";
        this.telefone = "";
        this.telefone2 = "";
        this.celular = "";
        this.email = "";
    }
    AddPage_1 = AddPage;
    AddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPage');
    };
    AddPage.prototype.backHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AddPage.prototype.add = function () {
        var _this = this;
        var body = {
            nome: this.nome,
            telefone: this.telefone,
            telefone2: this.telefone2,
            celular: this.celular,
            email: this.email,
            add: "add_contact"
        };
        this.PstPvdr.postData(body, 'index.php')
            .subscribe(function (data) {
            _this.appCtrl.getRootNav().setRoot(AddPage_1);
            alert("Cadastro realizado com sucesso");
        }, function (err) {
            console.log(err);
        });
    };
    AddPage = AddPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add',template:/*ion-inline-start:"C:\Users\isabel\Documents\Ionic\agenda\src\pages\add\add.html"*/'<!--\n  Generated template for the AddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Acionar Contato</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n        <ion-list>\n          <ion-item>\n            <ion-label>Nome</ion-label>\n            <ion-input type="text" [(ngModel)]="nome" name="nome"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Telefone</ion-label>\n            <ion-input type="text" [(ngModel)]="telefone" name="telefone" ></ion-input>\n          </ion-item>\n      \n          <ion-item *ngIf="!alive">\n            <p style="color:blue; float: right;" (click)="alive = !alive" >Adicionar outro telefone\n              <ion-icon name="add"></ion-icon>\n            </p>\n          </ion-item>\n      \n          <ion-item *ngIf="alive" >\n            <ion-label>Telefone 2</ion-label>\n            <ion-input type="text" [(ngModel)]="telefone2" name="telefone2"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Celular</ion-label>\n            <ion-input type="text" [(ngModel)]="celular" name="celular"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>E-mail</ion-label>\n            <ion-input type="text" [(ngModel)]="email" name="email"></ion-input>\n          </ion-item>\n        </ion-list>\n          <button ion-button (click)="add()" block>Salvar</button>\n          <button ion-button (click)="backHome()" color="danger" block>Cancelar</button>\n      \n</ion-content>'/*ion-inline-end:"C:\Users\isabel\Documents\Ionic\agenda\src\pages\add\add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_post_provider__["a" /* PostProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], AddPage);
    return AddPage;
    var AddPage_1;
}());

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_post_provider__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InfoContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoContactPage = /** @class */ (function () {
    function InfoContactPage(navCtrl, navParams, PstPvdr, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PstPvdr = PstPvdr;
        this.appCtrl = appCtrl;
    }
    InfoContactPage.prototype.ionViewDidLoad = function () {
        this.users = [];
        this.id = this.navParams.get('id');
        this.single();
        console.log('ionViewDidLoad InfoContactPage');
    };
    InfoContactPage.prototype.single = function () {
        var _this = this;
        var body = {
            id: this.id,
            load: "show_contact"
        };
        this.PstPvdr.postData(body, 'show.php')
            .subscribe(function (data) {
            for (var _i = 0, _a = JSON.parse(data).result; _i < _a.length; _i++) {
                var user = _a[_i];
                _this.users.push(user);
                console.log(JSON.parse(data).result);
            }
        });
    };
    InfoContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-contact',template:/*ion-inline-start:"C:\Users\isabel\Documents\Ionic\agenda\src\pages\info-contact\info-contact.html"*/'<!--\n  Generated template for the InfoContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Informações do contato</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-card *ngFor="let user of users;">\n  <ion-card-header>\n    {{ user.nome }}\n  </ion-card-header>\n  <ion-card-content>\n   Telefone: {{ user.telefone }} <br />\n   Telefone2: {{ user.telefone2 }} <br />\n   Celular: {{ user.celular }} <br />\n   Email: {{ user.email }} <br />\n  </ion-card-content>\n</ion-card>\n\n  <!--\n    <h1 style="text-align:center;" [(ngModel)]="nome" value="nome"></h1>\n    <ion-list>\n      <ion-item>\n        <h2>Nome: <h3 [(ngModel)]="nome" value="nome"></h3>\n        </h2>\n      </ion-item>\n      <ion-item>\n        <h2>Telefone: <h3 [(ngModel)]="telefone" value="telefone"></h3>\n        </h2>\n      </ion-item>\n      <ion-item>\n        <h2>Telefone 2: <h3 [(ngModel)]="telefone2" value="telefone2"></h3>\n        </h2>\n      </ion-item>\n      <ion-item>\n        <h2>Celular: <h3 [(ngModel)]="celular" value="celular"></h3>\n        </h2>\n      </ion-item>\n      <ion-item>\n        <h2>E-mail: <h3 [(ngModel)]="email" value="email"></h3>\n        </h2>\n      </ion-item>\n      \n    </ion-list>\n  -->\n</ion-content>'/*ion-inline-end:"C:\Users\isabel\Documents\Ionic\agenda\src\pages\info-contact\info-contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_post_provider__["a" /* PostProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], InfoContactPage);
    return InfoContactPage;
}());

//# sourceMappingURL=info-contact.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_post_provider__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdatePage = /** @class */ (function () {
    function UpdatePage(navCtrl, navParams, PstPvdr, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PstPvdr = PstPvdr;
        this.appCtrl = appCtrl;
    }
    UpdatePage_1 = UpdatePage;
    UpdatePage.prototype.ionViewDidLoad = function () {
        this.id = this.navParams.get('id');
        this.nome = this.navParams.get('nome');
        this.telefone = this.navParams.get('telefone');
        this.telefone2 = this.navParams.get('telefone2');
        this.celular = this.navParams.get('celular');
        this.email = this.navParams.get('email');
        console.log('ionViewDidLoad UpdatePage');
    };
    UpdatePage.prototype.editar = function () {
        var _this = this;
        var body = {
            id: this.id,
            nome: this.nome,
            telefone: this.telefone,
            telefone2: this.telefone2,
            celular: this.celular,
            email: this.email,
            add: "edit_contact"
        };
        this.PstPvdr.postData(body, 'update.php')
            .subscribe(function (data) {
            _this.appCtrl.getRootNav().setRoot(UpdatePage_1);
            alert("Contato editado com sucesso");
        }, function (err) {
            console.log(err);
        });
    };
    UpdatePage = UpdatePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update',template:/*ion-inline-start:"C:\Users\isabel\Documents\Ionic\agenda\src\pages\update\update.html"*/'<!--\n  Generated template for the UpdatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="nome" name="nome"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Telefone</ion-label>\n      <ion-input type="text" [(ngModel)]="telefone" name="telefone" ></ion-input>\n    </ion-item>\n  \n    <ion-item >\n      <ion-label>Telefone 2</ion-label>\n      <ion-input type="text" [(ngModel)]="telefone2" name="telefone2"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Celular</ion-label>\n      <ion-input type="text" [(ngModel)]="celular" name="celular"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>E-mail</ion-label>\n      <ion-input type="text" [(ngModel)]="email" name="email"></ion-input>\n    </ion-item>\n  </ion-list>\n    <button ion-button (click)="editar()" block>Salvar</button>\n    <button ion-button (click)="backHome()" color="danger" block>Cancelar</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\isabel\Documents\Ionic\agenda\src\pages\update\update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_post_provider__["a" /* PostProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], UpdatePage);
    return UpdatePage;
    var UpdatePage_1;
}());

//# sourceMappingURL=update.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add/add.module": [
		280,
		2
	],
	"../pages/info-contact/info-contact.module": [
		281,
		1
	],
	"../pages/update/update.module": [
		282,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_post_provider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_add__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_info_contact_info_contact__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_update_update__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_info_contact_info_contact__["a" /* InfoContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_update_update__["a" /* UpdatePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add/add.module#AddPageModule', name: 'AddPage', segment: 'add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-contact/info-contact.module#InfoContactPageModule', name: 'InfoContactPage', segment: 'info-contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update/update.module#UpdatePageModule', name: 'UpdatePage', segment: 'update', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_info_contact_info_contact__["a" /* InfoContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_update_update__["a" /* UpdatePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__providers_post_provider__["a" /* PostProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\isabel\Documents\Ionic\agenda\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\isabel\Documents\Ionic\agenda\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostProvider = /** @class */ (function () {
    function PostProvider(http) {
        this.http = http;
        this.server = 'http://localhost/crud/';
    }
    PostProvider.prototype.postData = function (body, file) {
        var type = "application/json; charset-UTF-8";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.server + file, JSON.stringify(body), options)
            .map(function (res) { return res.text(); });
    };
    PostProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PostProvider);
    return PostProvider;
}());

//# sourceMappingURL=post-provider.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_add__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_contact_info_contact__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_post_provider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__update_update__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, PstPvdr, appCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PstPvdr = PstPvdr;
        this.appCtrl = appCtrl;
        this.http = http;
        this.apiUrl = 'http://localhost/crud/get.php';
    }
    HomePage_1 = HomePage;
    HomePage.prototype.openAddPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_add__["a" /* AddPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.users = [];
        this.load();
    };
    HomePage.prototype.load = function () {
        var _this = this;
        var body = {
            load: "get_contact"
        };
        this.PstPvdr.postData(body, 'get.php')
            .subscribe(function (data) {
            for (var _i = 0, _a = JSON.parse(data).result; _i < _a.length; _i++) {
                var user = _a[_i];
                _this.users.push(user);
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.OpenInfoContact = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__info_contact_info_contact__["a" /* InfoContactPage */], {
            'id': id
        });
    };
    HomePage.prototype.editContact = function (id, nome, telefone, telefone2, celular, email) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__update_update__["a" /* UpdatePage */], {
            'id': id,
            'nome': nome,
            'telefone': telefone,
            'telefone2': telefone2,
            'celular': celular,
            'email': email
        });
    };
    HomePage.prototype.deleteContact = function (id) {
        var _this = this;
        var body = {
            id: id,
            add: "delete_contact"
        };
        this.PstPvdr.postData(body, 'delete.php')
            .subscribe(function (data) {
            _this.appCtrl.getRootNav().setRoot(HomePage_1);
        });
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\isabel\Documents\Ionic\agenda\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Agenda\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n\n  <ion-list>\n    <ion-item (click)="OpenInfoContact(\n      user.id,\n      user.nome,\n      user.telefone,\n      user.telefone2,\n      user.celular,\n      user.email\n    )"\n      *ngFor="let user of users;">\n      <h2>\n        <ion-icon name="contact" style="margin-right:8px;"></ion-icon>\n        {{user.nome}}\n      </h2>\n      <h3 style="margin-left:20px;">Telefone: {{user.telefone}}</h3>\n    </ion-item>\n    \n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="openAddPage()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\isabel\Documents\Ionic\agenda\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_post_provider__["a" /* PostProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map
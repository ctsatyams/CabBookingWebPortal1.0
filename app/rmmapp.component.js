"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(router, route) {
        this.router = router;
        this.route = route;
        this.title = "Rules Management Module";
        this.productLogo = "assets/images/H-Scale_logo.jpg";
        this.urlWithoutMenuNFooter = [];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.showMenuBarNFooter = function (url) {
        if (url == "" || url == "/") {
            return true;
        }
        else {
            var filter = this.urlWithoutMenuNFooter.filter(function (menuUrl) { return url.indexOf(menuUrl) != -1; });
            return !(filter && filter.length > 0);
        }
    };
    AppComponent.prototype.checkModuleActive = function (url, checkFor) {
        if (url == "" || url == "/") {
            return false;
        }
        else {
            if (url.split('/')[1] === checkFor) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    AppComponent.prototype.checkTitle = function (url) {
        if (url.indexOf('data-quality') > 0) {
            this.title = "Data Quality Module";
        }
        else {
            this.title = "Natural language processing";
        }
        return true;
    };
    AppComponent.prototype.checkLogo = function (url) {
        this.productLogo = "assets/images/CitiusTech_logo.png";
        this.classLogo = "bi_logo";
        return true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'rmmapp',
        templateUrl: 'app/view/app.component.html'
    }),
    __param(0, core_1.Inject(router_1.Router)),
    __param(1, core_1.Inject(router_1.ActivatedRoute)),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=rmmapp.component.js.map
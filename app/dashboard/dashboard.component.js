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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var cabDetails_service_1 = require("./cabDetails.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var DashboardComponent = (function () {
    function DashboardComponent(router, changeRef, appRef, cabDetailsService) {
        this.router = router;
        this.changeRef = changeRef;
        this.appRef = appRef;
        this.cabDetailsService = cabDetailsService;
        this.config = {
            //pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 4,
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 30,
        };
        this.clock = Rx_1.Observable
            .interval(1000)
            .map(function () { return new Date(); });
        this.title = "Dashboard";
        this.fetch();
        this.validationForm();
    }
    DashboardComponent.prototype.validationForm = function () {
        this.bookingForm = new forms_1.FormGroup({
            mobileNo: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            name: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-Z]*")])),
            ctid: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-Z0-9]*")])),
        });
    };
    DashboardComponent.prototype.fetch = function () {
        var _this = this;
        var param = {
            Action: 'GETAll'
        };
        this.cabDetailsService.getAllCabList(param).subscribe(function (cabTimeList) { _this.cabListMT = cabTimeList[0], _this.cabListTM = cabTimeList[1]; }, function (error) { console.error(error); });
    };
    DashboardComponent.prototype.storeCabId = function (cabId, cabTime, FromStation, ToStation) {
        this.cabDetailsService.cabId = cabId;
        this.cabDetailsService.cabTime = cabTime;
        this.cabDetailsService.route = (FromStation + " - " + ToStation);
        console.log(this.cabDetailsService.route);
    };
    DashboardComponent.prototype.getDetail = function (cabId, cabTime, FromStation, ToStation) {
        this.cabDetailsService.cabId = cabId;
        this.cabDetailsService.cabTime = cabTime;
        this.router.navigate(['/bookingDetail']);
        this.cabDetailsService.route = (FromStation + " - " + ToStation);
        console.log(this.cabDetailsService.route);
        //this.router.navigateByUrl('/dashboard');
    };
    DashboardComponent.prototype.bookCab = function () {
        var _this = this;
        var cabData = {};
        //console.log(this.travelDay);
        cabData.id = this.cabDetailsService.cabId;
        cabData.name = this.name;
        cabData.mobileNo = this.mobileNo;
        cabData.ctid = this.CTId;
        cabData.travelDay = this.travelDay;
        cabData.actionAfterRequest = 'GETAll';
        console.log(cabData);
        this.cabDetailsService.CabBooking(cabData).subscribe(function (message) { _this.message = message, _this.fetch(); }, function (error) { console.error(error); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        templateUrl: 'app/dashboard/view/dashboard.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, core_1.ChangeDetectorRef, core_1.ApplicationRef, cabDetails_service_1.CabDetailsService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map
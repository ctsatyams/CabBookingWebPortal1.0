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
var BookingDetailsComponent = (function () {
    function BookingDetailsComponent(router, changeRef, appRef, cabDetailsService) {
        this.router = router;
        this.changeRef = changeRef;
        this.appRef = appRef;
        this.cabDetailsService = cabDetailsService;
        this.fetch();
        this.date = new Date();
        this.cabTime = this.cabDetailsService.cabTime;
        this.route = this.cabDetailsService.route;
        this.validationForm();
    }
    BookingDetailsComponent.prototype.validationForm = function () {
        this.driverForm = new forms_1.FormGroup({
            mobileNo: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$")])),
            name: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-Z]*")])),
            vehicleNo: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-Z0-9-]*")]))
        });
    };
    BookingDetailsComponent.prototype.addDriverDetail = function () {
        var _this = this;
        var data = {};
        data.id = this.cabDetailsService.cabId;
        data.driverName = this.name;
        data.mobileNo = this.mobileNo;
        data.vehicleNo = this.vehicleNo;
        console.log(data);
        this.cabDetailsService.addDriver(data).subscribe(function (message) { _this.message = message, _this.fetch(); }, function (error) { console.error(error); });
    };
    BookingDetailsComponent.prototype.fetch = function () {
        var _this = this;
        var param = {
            id: this.cabDetailsService.cabId
        };
        this.cabDetailsService.getDetailById(param).subscribe(function (cabTimeList) {
            _this.cabList = cabTimeList[0], _this.driver = cabTimeList[2][0], _this.name = _this.driver.DriverName,
                _this.vehicleNo = _this.driver.VehicleNo, _this.mobileNo = _this.driver.Mobile, console.log(cabTimeList);
        }, function (error) { console.error(error); });
    };
    BookingDetailsComponent.prototype.storeCabId = function (cabId) {
        this.cabDetailsService.cabId = cabId;
    };
    BookingDetailsComponent.prototype.print = function () {
        Rx_1.Observable
            .interval(1000);
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n  \n          </style>\n\n        </head>\n\n    <body onload=\"window.print();window.close();\">\n\n\n    " + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    BookingDetailsComponent.prototype.cancelBooking = function (cabid) {
        var _this = this;
        console.log(cabid);
        this.cabDetailsService.cancelCabBooking({ Tid: cabid }).subscribe(function (cabBookedList) { _this.router.navigateByUrl('/dashboard'); }, function (error) { console.error(error); }, function () {
        });
    };
    return BookingDetailsComponent;
}());
BookingDetailsComponent = __decorate([
    core_1.Component({
        selector: 'BookingDetails',
        templateUrl: 'app/dashboard/view/bookingDetails.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, core_1.ChangeDetectorRef, core_1.ApplicationRef, cabDetails_service_1.CabDetailsService])
], BookingDetailsComponent);
exports.BookingDetailsComponent = BookingDetailsComponent;
//# sourceMappingURL=bookingDetail.component.js.map
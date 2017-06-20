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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var Observable_1 = require("rxjs/Observable");
var CabDetailsService = (function () {
    /**contructor use for injecting http dependancy to component class*/
    function CabDetailsService(http) {
        this.http = http;
        this.cabId = null;
        /**
        * this is used for extract Data in json formate for GET Methode of rest service  call
        * if rest return sucess true we forword response to component class
        * other wise if any error then we forword error message to component class
        */
        this.HostName = 'http://cabdataapi.azurewebsites.net';
    }
    CabDetailsService.prototype.extractData = function (res) {
        var body = res.json();
        return body.recordsets || {};
    };
    /**this is used for Handle error ,if any error occur during rest service call this method will handle*/
    CabDetailsService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    /**
     * this method is used for fetching OrganizationList
     */
    CabDetailsService.prototype.getCabTimeList = function (data) {
        var url = this.HostName + "/booking";
        var params = new http_1.URLSearchParams();
        for (var key in data) {
            params.set(key, data[key]);
        }
        var options = new http_1.RequestOptions({
            search: params
        });
        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ;
    CabDetailsService.prototype.getAllCabList = function (data) {
        var url = this.HostName + "/getAllBooking";
        var params = new http_1.URLSearchParams();
        for (var key in data) {
            params.set(key, data[key]);
        }
        var options = new http_1.RequestOptions({
            search: params
        });
        //let body = JSON.stringify(param);
        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ;
    CabDetailsService.prototype.getDetailById = function (data) {
        console.log(data);
        var url = this.HostName + "/getDetailById";
        var params = new http_1.URLSearchParams();
        for (var key in data) {
            params.set(key, data[key]);
        }
        var options = new http_1.RequestOptions({
            search: params
        });
        //let body = JSON.stringify(param);
        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ;
    CabDetailsService.prototype.getCabBookingList = function () {
        var url = this.HostName + "/bookingList";
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ;
    CabDetailsService.prototype.addDriver = function (data) {
        var url = this.HostName + "/addDriver";
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var Option = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(data);
        console.log(body);
        return this.http.post(url, body, { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ;
    CabDetailsService.prototype.CabBooking = function (data) {
        var url = this.HostName + "/booking";
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var Option = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(data);
        console.log(body);
        return this.http.post(url, body, { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ;
    CabDetailsService.prototype.cancelCabBooking = function (data) {
        console.log(data);
        var url = this.HostName + "/booking";
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var Option = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(data);
        debugger;
        console.log(body);
        return this.http.put(url, body, { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ;
    return CabDetailsService;
}());
CabDetailsService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(http_1.Http)),
    __metadata("design:paramtypes", [http_1.Http])
], CabDetailsService);
exports.CabDetailsService = CabDetailsService;
//# sourceMappingURL=cabDetails.service.js.map
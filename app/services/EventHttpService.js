"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/finally");
var http_1 = require("@angular/http");
var EventHttpService = (function (_super) {
    __extends(EventHttpService, _super);
    function EventHttpService(backend, defaultOptions) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.pendingRequests = 0;
        _this.showLoading = false;
        _this.opts = {
            lines: 11 // The number of lines to draw
            ,
            length: 9 // The length of each line
            ,
            width: 2 // The line thickness
            ,
            radius: 13 // The radius of the inner circle
            ,
            scale: 1 // Scales overall size of the spinner
            ,
            corners: 0.2 // Corner roundness (0..1)
            ,
            color: '#000' // #rgb or #rrggbb or array of colors
            ,
            opacity: 0.1 // Opacity of the lines
            ,
            rotate: 0 // The rotation offset
            ,
            direction: 1 // 1: clockwise, -1: counterclockwise
            ,
            speed: 1 // Rounds per second
            ,
            trail: 60 // Afterglow percentage
            ,
            fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
            ,
            zIndex: 2e9 // The z-index (defaults to 2000000000)
            ,
            className: 'spinner' // The CSS class to assign to the spinner
            ,
            top: '50%' // Top position relative to parent
            ,
            left: '50%' // Left position relative to parent
            ,
            shadow: false // Whether to render a shadow
            ,
            hwaccel: false // Whether to use hardware acceleration
            ,
            position: 'absolute' // Element positioning
        };
        return _this;
    }
    EventHttpService.prototype.request = function (url, options) {
        return this.intercept(_super.prototype.request.call(this, url, options));
    };
    EventHttpService.prototype.get = function (url, options) {
        return this.intercept(_super.prototype.get.call(this, url, options));
    };
    EventHttpService.prototype.post = function (url, body, options) {
        return this.intercept(_super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options)));
    };
    EventHttpService.prototype.put = function (url, body, options) {
        return this.intercept(_super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options)));
    };
    EventHttpService.prototype.delete = function (url, options) {
        return this.intercept(_super.prototype.delete.call(this, url, options));
    };
    EventHttpService.prototype.getRequestOptionArgs = function (options) {
        return options;
    };
    EventHttpService.prototype.intercept = function (observable) {
        var _this = this;
        console.log("In the intercept routine..");
        this.pendingRequests++;
        return observable
            .catch(function (err, caught) {
            if (err.status === 401) {
                return Observable_1.Observable.throw("401 Unauthorized");
            }
            return Observable_1.Observable.throw(caught);
        })
            .do(function (res) {
            console.log("Response: " + res);
            _this.turnOnModal();
        }, function (err) {
            _this.turnOffModal();
            console.log("Caught error: " + err);
        })
            .finally(function () {
            console.log("Finally.. delaying, though.");
            var timer = Observable_1.Observable.timer(1000);
            timer.subscribe(function (t) {
                _this.turnOffModal();
            });
        });
    };
    EventHttpService.prototype.turnOnModal = function () {
        if (!this.showLoading) {
            this.showLoading = true;
            $('body').spin("modal", this.opts);
            console.log("Turned on modal");
        }
        this.showLoading = true;
    };
    EventHttpService.prototype.turnOffModal = function () {
        this.pendingRequests--;
        if (this.pendingRequests <= 0) {
            if (this.showLoading) {
                $('body').spin("modal", this.opts);
            }
            this.showLoading = false;
        }
        console.log("Turned off modal");
    };
    return EventHttpService;
}(http_1.Http));
EventHttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.XHRBackend, http_1.RequestOptions])
], EventHttpService);
exports.EventHttpService = EventHttpService;
//# sourceMappingURL=EventHttpService.js.map
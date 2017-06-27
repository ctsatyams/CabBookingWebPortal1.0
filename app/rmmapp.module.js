"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
//module used for routing to maintain the refresh state
var common_2 = require("@angular/common");
var forms_2 = require("@angular/forms");
// rmmapp components & services
var rmmapp_component_1 = require("./rmmapp.component");
var rmmapp_route_1 = require("./rmmapp.route");
//sub modules
var EventHttpService_1 = require("./services/EventHttpService");
var api_service_1 = require("./services/api.service");
// import { DashboardModule } from './rmmapp.dashboard.module';
var angular2_useful_swiper_1 = require("angular2-useful-swiper");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var cabDetails_service_1 = require("./dashboard/cabDetails.service");
var bookingDetail_component_1 = require("./dashboard/bookingDetail.component");
//import { AuthService } from './dashboard/services/auth.service'
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            rmmapp_route_1.routing,
            forms_2.ReactiveFormsModule,
            angular2_useful_swiper_1.SwiperModule
        ],
        exports: [],
        declarations: [
            rmmapp_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            bookingDetail_component_1.BookingDetailsComponent
        ],
        entryComponents: [],
        providers: [
            api_service_1.ApiService,
            cabDetails_service_1.CabDetailsService,
            //AuthService,
            { provide: common_2.LocationStrategy, useClass: common_2.HashLocationStrategy },
            {
                provide: http_1.Http,
                useFactory: function (backend, options) {
                    return new EventHttpService_1.EventHttpService(backend, options);
                },
                deps: [http_1.XHRBackend, http_1.RequestOptions]
            }
        ],
        bootstrap: [rmmapp_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=rmmapp.module.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var bookingDetail_component_1 = require("./dashboard/bookingDetail.component");
var appRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: "full" },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'bookingDetail', component: bookingDetail_component_1.BookingDetailsComponent },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=rmmapp.route.js.map
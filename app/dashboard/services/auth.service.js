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
var cordova_1 = require("@auth0/cordova");
var auth0_js_1 = require("auth0-js");
var auth0Config = {
    // needed for auth0
    clientID: 'W0o0W3VrEmD4_ax4cqPEjbPrWy5VhEmi',
    // needed for auth0cordova
    clientId: 'W0o0W3VrEmD4_ax4cqPEjbPrWy5VhEmi',
    domain: 'satyamsoni1990.auth0.com',
    callbackURL: 'https://satyamsoni1990.auth0.com/mobile',
    packageIdentifier: 'io.ionic.starter.auth0'
};
var AuthService = (function () {
    function AuthService(zone) {
        this.zone = zone;
        this.auth0 = new auth0_js_1.default.WebAuth(auth0Config);
        this.user = this.getStorageVariable('profile');
        this.idToken = this.getStorageVariable('id_token');
    }
    AuthService.prototype.getStorageVariable = function (name) {
        return JSON.parse(window.localStorage.getItem(name));
    };
    AuthService.prototype.setStorageVariable = function (name, data) {
        window.localStorage.setItem(name, JSON.stringify(data));
    };
    AuthService.prototype.setIdToken = function (token) {
        this.idToken = token;
        this.setStorageVariable('id_token', token);
    };
    AuthService.prototype.setAccessToken = function (token) {
        this.accessToken = token;
        this.setStorageVariable('access_token', token);
    };
    AuthService.prototype.isAuthenticated = function () {
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return Date.now() < expiresAt;
    };
    AuthService.prototype.login = function () {
        var _this = this;
        var client = new cordova_1.default(auth0Config);
        var options = {
            scope: 'openid profile offline_access'
        };
        client.authorize(options, function (err, authResult) {
            if (err) {
                throw err;
            }
            _this.setIdToken(authResult.idToken);
            _this.setAccessToken(authResult.accessToken);
            var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
            _this.setStorageVariable('expires_at', expiresAt);
            _this.auth0.client.userInfo(_this.accessToken, function (err, profile) {
                if (err) {
                    throw err;
                }
                profile.user_metadata = profile.user_metadata || {};
                _this.setStorageVariable('profile', profile);
                _this.zone.run(function () {
                    _this.user = profile;
                });
            });
        });
    };
    AuthService.prototype.logout = function () {
        window.localStorage.removeItem('profile');
        window.localStorage.removeItem('access_token');
        window.localStorage.removeItem('id_token');
        window.localStorage.removeItem('expires_at');
        this.idToken = null;
        this.accessToken = null;
        this.user = null;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
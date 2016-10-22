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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var fancyText_component_1 = require('./fancyText/fancyText.component');
var fancyCheckbox_component_1 = require('./fancyCheckbox/fancyCheckbox.component');
var fancyForm_component_1 = require('./fancyForm/fancyForm.component');
var playerSubscribe_component_1 = require('./playerSubscribe/playerSubscribe.component');
var textile_component_1 = require('./textile/textile.component');
var http_1 = require('@angular/http');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
            declarations: [textile_component_1.Textile, playerSubscribe_component_1.PlayerSubscribe, fancyForm_component_1.FancyForm, fancyCheckbox_component_1.FancyCheckbox, fancyText_component_1.FancyText, app_component_1.AppComponent],
            bootstrap: [textile_component_1.Textile, playerSubscribe_component_1.PlayerSubscribe]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
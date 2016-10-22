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
var FancyForm = (function () {
    function FancyForm() {
    }
    FancyForm.prototype.ngOnInit = function () {
        console.log('fancy form on init called');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FancyForm.prototype, "interests", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FancyForm.prototype, "tester", void 0);
    FancyForm = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "fancy-form",
            //styleUrls: ["fancyCheckbox.component.css"],
            template: "\n    <fancy-checkbox name=\"something\" label=\"Something checkbox\">loading...</fancy-checkbox>\n\n    <span>{{tester}}</span>\n\n    <p *ngFor=\"let interest of interests; let i = index\">\n        <span>{{i}}</span>\n        <fancy-checkbox name=\"something\" [label]=\"interest\">loading...</fancy-checkbox>\n    </p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], FancyForm);
    return FancyForm;
}());
exports.FancyForm = FancyForm;
//# sourceMappingURL=fancyForm.component.js.map
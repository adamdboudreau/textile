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
var news_service_1 = require('./news.service'); // could import at root module instead
var Magazine = (function () {
    // newsSvc: NewsService // can use shortcut to delcare svc in constructor
    function Magazine(newsSvc) {
        this.newsSvc = newsSvc;
        this.fullName = "";
        this.editions = [
            { editionCode: 1, editionName: "US", price: "10.99 USD" },
            { editionCode: 2, editionName: "Canada", price: "14.99 CAD" },
            { editionCode: 3, editionName: "International", price: "23.99 CAD" }
        ];
        this.selectedEdition = this.editions[0];
        this.selectedShipping = "";
        this.acceptPolicy = false;
        //this.newsSvc = svc
    }
    Magazine.prototype.getAllNews = function () {
        return this.newsSvc.getNewsItems();
    };
    Magazine.prototype.ngOnInit = function () {
        console.log(this.getAllNews());
    };
    Magazine.prototype.submitForm = function () {
        var requestData = {
            customerName: this.fullName,
            productCode: this.selectedEdition.editionCode,
            acceptPolicy: this.acceptPolicy,
            shipMode: this.selectedShipping
        };
        alert(JSON.stringify(requestData));
    };
    Magazine = __decorate([
        // could import at root module instead
        core_1.Component({
            selector: "magazine",
            providers: [news_service_1.NewsService],
            template: "\n    <form>\n    Name:\n    <input type=\"text\" name=\"fullName\" [(ngModel)]=\"fullName\"\n        required #theElement />\n    Class Names: {{theElement.className}}\n    Magazine Edition\n    <select name=\"selectedEdition\" [(ngModel)]=\"selectedEdition\">\n        <option *ngFor=\"let e of editions\"\n            [ngValue]=\"e\">{{e.editionName}}</option>\n    </select>\n    Shipping\n    <input type=\"radio\" name=\"selectedShipping\"\n        [(ngModel)]=\"selectedShipping\" value=\"GROUND\"/>Ground\n    <input type=\"radio\" name=\"selectedShipping\"\n        [(ngModel)]=\"selectedShipping\" value=\"AIR\"/>Air\n    <input type=\"checkbox\" name=\"acceptPolicy\" [(ngModel)]=\"acceptPolicy\"/>\n        I accept the terms and conditions\n    Price: {{selectedEdition.price}}\n    <button (click)=\"submitForm()\">Purchase</button>\n    </form>\n    "
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService])
    ], Magazine);
    return Magazine;
}());
exports.Magazine = Magazine;
//# sourceMappingURL=magazine.component.js.map
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
var textile_service_1 = require('./textile.service');
var Textile = (function () {
    function Textile(texSvc) {
        this.texSvc = texSvc;
        this.textiles = [];
        //this.textiles = texSvc.getTextiles()
        //console.log(this.textiles)
        console.log('get textiles ');
        this.textiles = texSvc.getTextiles();
        //texSvc.getTextiles().forEach(response => {
        //    console.log(response.json())
        //})
        //console.log(texSvc.getTextiles().json())
        //texSvc.getTextiles().then(response => {
        //    this.textiles = response.json()
        //        console.log(this.textiles);
        //},
        //error => {
        //    alert("Sorry. There was an error fetching data " + error)
        //})
    }
    Textile.prototype.ngOnInit = function () {
        this.samples = ["public/samples/circles.png", "public/samples/hex.jpg", "public/samples/triangle.png"];
    };
    Textile = __decorate([
        core_1.Component({
            selector: "textile",
            providers: [textile_service_1.TextileService],
            styles: ["img { width: 50px; height: 50px; }"],
            template: "\n    <h2>Textiles</h2>\n\n    <p *ngFor=\"let imgPath of samples\">\n        <img [src]=\"imgPath\" />\n    </p>\n    <p *ngFor=\"let tex of textiles\">\n        <span>{{tex.title}}</span>, {{tex.imageUrl}}\n    </p>\n    "
        }), 
        __metadata('design:paramtypes', [textile_service_1.TextileService])
    ], Textile);
    return Textile;
}());
exports.Textile = Textile;
//# sourceMappingURL=textile.component.js.map
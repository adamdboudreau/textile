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
var PlayerSubscribe = (function () {
    function PlayerSubscribe() {
        this.testing = 'asdf';
        //players = [{name: "player1", label: "Lebron James"}, {name: "player2", label: "Micheal Jackson"}]
        this.players = ["Lebron James", "Micheal Jackson"];
    }
    PlayerSubscribe = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "player-subscribe",
            //styleUrls: ["fancyCheckbox.component.css"],
            template: "\n    <fancy-form [interests]=\"players\" [tester]=\"testing\"></fancy-form>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PlayerSubscribe);
    return PlayerSubscribe;
}());
exports.PlayerSubscribe = PlayerSubscribe;
//# sourceMappingURL=playerSubscribe.component.js.map
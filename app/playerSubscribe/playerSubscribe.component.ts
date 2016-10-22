import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "player-subscribe",
    //styleUrls: ["fancyCheckbox.component.css"],
    template: `
    <fancy-form [interests]="players" [tester]="testing"></fancy-form>
    `
})
export class PlayerSubscribe {
    testing = 'asdf'
    //players = [{name: "player1", label: "Lebron James"}, {name: "player2", label: "Micheal Jackson"}]
    players = [  "Lebron James", "Micheal Jackson"]
}
import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "fancy-form",
    //styleUrls: ["fancyCheckbox.component.css"],
    template: `
    <fancy-checkbox name="something" label="Something checkbox">loading...</fancy-checkbox>

    <span>{{tester}}</span>

    <p *ngFor="let interest of interests; let i = index">
        <span>{{i}}</span>
        <fancy-checkbox name="something" [label]="interest">loading...</fancy-checkbox>
    </p>
    `
})
//interface Interest { name: string, label: string }
export class FancyForm implements OnInit {
    @Input() interests: [string]
    @Input() tester: [string]
    ngOnInit() {
        console.log('fancy form on init called')
    }
    //this.interests = [{name: "player1", label: "Lebron James"}, {name: "player2", label: "Micheal Jackson"}]

    //this.interests = [{name: "player1", label: "Lebron James"}, {name: "player2", label: "Micheal Jackson"}]
    //this.tester = 'abcd'
    //ngOnInit() {
        //this.interests = [{name: "player1", label: "Lebron James"}, {name: "player2", label: "Micheal Jackson"}]
        //this.tester = 'abcd'
    //}
}
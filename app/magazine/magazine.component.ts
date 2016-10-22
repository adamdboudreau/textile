import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service'; // could import at root module instead

@Component({
    selector: "magazine",
    providers: [NewsService], // could import at root module instead
    template: `
    <form>
    Name:
    <input type="text" name="fullName" [(ngModel)]="fullName"
        required #theElement />
    Class Names: {{theElement.className}}
    Magazine Edition
    <select name="selectedEdition" [(ngModel)]="selectedEdition">
        <option *ngFor="let e of editions"
            [ngValue]="e">{{e.editionName}}</option>
    </select>
    Shipping
    <input type="radio" name="selectedShipping"
        [(ngModel)]="selectedShipping" value="GROUND"/>Ground
    <input type="radio" name="selectedShipping"
        [(ngModel)]="selectedShipping" value="AIR"/>Air
    <input type="checkbox" name="acceptPolicy" [(ngModel)]="acceptPolicy"/>
        I accept the terms and conditions
    Price: {{selectedEdition.price}}
    <button (click)="submitForm()">Purchase</button>
    </form>
    `
})

export class Magazine implements OnInit {
    // newsSvc: NewsService // can use shortcut to delcare svc in constructor

    constructor(private newsSvc:NewsService) {
        //this.newsSvc = svc
    }
    getAllNews() {
        return this.newsSvc.getNewsItems()
    }
    ngOnInit() {
        console.log(this.getAllNews())
    }

    submitForm() {
        let requestData = {
            customerName: this.fullName,
            productCode: this.selectedEdition.editionCode,
            acceptPolicy: this.acceptPolicy,
            shipMode: this.selectedShipping
        }
        alert(JSON.stringify(requestData))
    }
    fullName = ""
    editions = [
        {editionCode: 1, editionName: "US", price: "10.99 USD"},
        {editionCode: 2, editionName: "Canada", price: "14.99 CAD"},
        {editionCode: 3, editionName: "International", price: "23.99 CAD"}
    ]
    selectedEdition = this.editions[0]
    selectedShipping = ""
    acceptPolicy = false
}
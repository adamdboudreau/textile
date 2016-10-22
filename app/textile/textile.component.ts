import { Component, OnInit } from '@angular/core';
import { TextileService } from './textile.service';

@Component({
    selector: "textile",
    providers: [TextileService],
    styles: ["img { width: 50px; height: 50px; }"],
    template: `
    <h2>Textiles</h2>

    <p *ngFor="let imgPath of samples">
        <img [src]="imgPath" />
    </p>
    <p *ngFor="let tex of textiles">
        <span>{{tex.title}}</span>, {{tex.imageUrl}}
    </p>
    `
})

export class Textile implements OnInit {
    samples: [string]
    textiles = []
    constructor(private texSvc:TextileService) {
        //this.textiles = texSvc.getTextiles()
        //console.log(this.textiles)
        console.log('get textiles ')
        this.textiles = texSvc.getTextiles()
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

    ngOnInit() {

        this.samples = ["public/samples/circles.png", "public/samples/hex.jpg", "public/samples/triangle.png"]
    }
}
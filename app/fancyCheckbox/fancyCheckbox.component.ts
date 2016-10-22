import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "fancy-checkbox",
    styleUrls: ["fancyCheckbox.component.css"],
    template: `
    <input type="checkbox" name="{{name}}" />
    <label for="name">{{label}}</label>
    `
})
export class FancyCheckbox {
    @Input() label: string
    @Input() name: string
}
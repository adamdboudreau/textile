import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FancyText } from './fancyText/fancyText.component';
import { FancyCheckbox } from './fancyCheckbox/fancyCheckbox.component';
import { FancyForm } from './fancyForm/fancyForm.component';
import { PlayerSubscribe } from './playerSubscribe/playerSubscribe.component';
import { Textile } from './textile/textile.component';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [Textile, PlayerSubscribe, FancyForm, FancyCheckbox, FancyText, AppComponent],
    bootstrap: [Textile, PlayerSubscribe]
})

//interface Interest { name:string, label:string }

export class AppModule {

}
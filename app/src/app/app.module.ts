import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LevelComponent } from './level/level.component';

import { Spyro2Service } from "./spyro2.service";
import { StaticFileSpyro2Service } from "./static-file-spyro2.service";
import { LocalisedTextComponent } from './localised-text/localised-text.component';

@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    LocalisedTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: Spyro2Service, useClass: StaticFileSpyro2Service }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

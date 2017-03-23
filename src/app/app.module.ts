import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MtbInputComponent } from './mtb-input/mtb-input.component';
import { MtbCellComponent } from './mtb-cell/mtb-cell.component';
import { MtbStepComponent } from './mtb-step/mtb-step.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MtbCellComponent,
    MtbStepComponent,
    MtbInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

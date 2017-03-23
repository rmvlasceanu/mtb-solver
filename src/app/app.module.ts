import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MtbInputComponent } from './mtb-input/mtb-input.component';
import { MtbCellComponent } from './mtb-cell/mtb-cell.component';
import { MtbStepComponent } from './mtb-step/mtb-step.component';

@NgModule({
  declarations: [
    AppComponent,
    MtbInputComponent,
    MtbCellComponent,
    MtbStepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

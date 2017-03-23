import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'
import {MtbInputComponent} from "../mtb-input/mtb-input.component";

const routes: Routes = [
  {path: '', redirectTo: '/mtb', pathMatch: 'full'},
  {path: 'mtb', component: MtbInputComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

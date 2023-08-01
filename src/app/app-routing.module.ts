import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { TelzirComponent } from './telzir/telzir.component';

const routes: Routes = [
  {
    path: 'telzir',
    component: TelzirComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

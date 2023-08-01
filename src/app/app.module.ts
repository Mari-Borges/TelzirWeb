import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TelzirComponent } from './telzir/telzir.component';
import { AppRoutingModule } from './app-routing.module';
import { ImageModule } from 'primeng/image';
import {AccordionModule} from 'primeng/accordion';
@NgModule({
  declarations: [
    AppComponent,
    TelzirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

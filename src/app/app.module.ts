import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JaehyunComponent } from './jaehyun/jaehyun.component';
import { MikeComponent } from './mike/mike.component';
import { EthanComponent } from './ethan/ethan.component';
import { JeremiahComponent } from './jeremiah/jeremiah.component';
import { JeongComponent } from './jeong/jeong.component';

@NgModule({
  declarations: [
    AppComponent,
    JaehyunComponent,
    MikeComponent,
    EthanComponent,
    JeremiahComponent,
    JeongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    JaehyunComponent,
    MikeComponent,
    EthanComponent,
    JeremiahComponent,
    JeongComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

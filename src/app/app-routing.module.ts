import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EthanComponent } from './ethan/ethan.component';
import { JaehyunComponent } from './jaehyun/jaehyun.component';
import { JeongComponent } from './jeong/jeong.component';
import { JeremiahComponent } from './jeremiah/jeremiah.component';
import { MikeComponent } from './mike/mike.component';

const routes: Routes = [{
  path:"jaehyun",
  component:JaehyunComponent
}, {
  path:"mike",
  component:MikeComponent
}, {
  path:"jeong",
  component:JeongComponent
}, {
  path:"jeremiah",
  component:JeremiahComponent
}, {
  path:"ethan",
  component:EthanComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

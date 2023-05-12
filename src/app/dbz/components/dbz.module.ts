import {  NgModule } from '@angular/core';
import { MainPagesComponent } from '../pages/main-pages-component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,

  ],
  exports: [
    MainPagesComponent
  ],
  declarations: [
    MainPagesComponent
  ],
  providers: [],
})
export class DbzModule {
}

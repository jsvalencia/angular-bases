import {  NgModule } from '@angular/core';
import { MainPagesComponent } from '../pages/main-pages-component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    MainPagesComponent
  ],
  declarations: [
    MainPagesComponent,
    ListComponent,
    AddCharacterComponent
  ],
  providers: [],
})
export class DbzModule {
}

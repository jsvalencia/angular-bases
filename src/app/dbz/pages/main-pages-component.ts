import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-pages-component.html'
})

export class MainPagesComponent {

  constructor(private dbzService: dbzService){}

     get characters():Character[]{
          return this.dbzService.characters;
      }

      RecepcionIdDeleted(id: string):void{
    this.dbzService.RecepcionIdDeleted(id);
  }

  onNewCharacter(character: Character):void{

    this.dbzService.onNewCharacter(character);
  }




}

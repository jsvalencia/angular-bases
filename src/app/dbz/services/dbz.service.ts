import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})

export class dbzService {

  constructor() { }

  public characters:Character[]=[
    {
      id: uuid(),
      name:'krilin',
      power:1000
    },
    {
      id: uuid(),
      name:'goku',
      power:2000
    },
    {
      id: uuid(),
      name:'vegeta',
      power:5
    }
      ];

    onNewCharacter(character: Character):void{
      const newCharacter: Character ={
        id:uuid(),
        name: character.name,
        power: character.power
      }

      this.characters.push(newCharacter);
      console.log(newCharacter);
    }

    RecepcionIdDeleted(id:string):void{
    //console.log("he recibido "+index);
   // this.characters.splice(index,1);
   this.characters=this.characters.filter(character => character.id!==id)
    }


}

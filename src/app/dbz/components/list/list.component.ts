import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public onEmitCharacter: EventEmitter <string> = new EventEmitter();

  @Input()
  public characterList: Character[]=[{
  name:'Trunks',
  power:10}]

onDeletedCharacter(id: string):void{
//emitir el id del caracter

this.onEmitCharacter.emit(id);
}

}

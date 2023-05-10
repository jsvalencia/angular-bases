import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
public pantalla:number=0;
public numberuno:number=0;
public numberdos:number=0;
public operacionEstado:boolean=false;
public contadorNumeros:number=0;
public operacionRealizar?:string;

  public valorPantalla(entrada:number){
    if (this.contadorNumeros===0) {
      this.pantalla=entrada;
      this.contadorNumeros+=1;
    }
    else{
      this.pantalla=(this.pantalla*10)+entrada;
    }
  }

  public reset(){
    this.pantalla=0;

  }

  public RecibirOperador(operacionRecibida:string){
    this.numberuno=this.pantalla;
    this.pantalla=0;
    this.operacionRealizar=operacionRecibida;
    this.operacionEstado=true;
  }

  public resultado(){
    if(this.operacionRealizar==="+")
    {
      this.pantalla=this.pantalla+this.numberuno;
    }
    if(this.operacionRealizar==="-")
    {
      this.pantalla=this.pantalla-this.numberuno;
    }
    if(this.operacionRealizar==="x")
    {
      this.pantalla=this.pantalla*this.numberuno;
    }
    if(this.operacionRealizar==="%")
    {
      this.pantalla=this.numberuno/this.pantalla;
    }
  }

}

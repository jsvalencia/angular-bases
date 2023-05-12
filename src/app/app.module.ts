import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { CounterModule } from './counter/components/counter/counter.module';
import { HeroesModule } from './heroes/components/heroes.module';
import { CalculadoraComponent } from './calculadora/calculadora/calculadora.component';
import { DbzModule } from './dbz/components/dbz.module';



@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

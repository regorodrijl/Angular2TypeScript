import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  appValor:number = 3;

  eventoEscuchador(event):void{
    this.appValor=event;
  }
}

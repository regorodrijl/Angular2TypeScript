import { Component, Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
 
})
export class ContadorComponent  {
  @Input() valorContador:number;
  @Output() eventoContador = new EventEmitter();

  incremetar ():void{
    this.valorContador++;
    this.emitirEvento();
  }

  decrementar():void {
    this.valorContador--;
    this.emitirEvento();
  }
  emitirEvento(){
    this.eventoContador.emit(this.valorContador);
  }
}

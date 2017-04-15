import { Directive, HostListener ,Input} from '@angular/core';

@Directive({
  selector: '[appConfirmationPanel]'
})
export class ConfirmationPanelDirective {
  @HostListener('click', ['$event'])

  @Input('confirm') execFunction: Function;

  onclick() {
    const confirmed= window.confirm('Estas Seguro??');
    if(confirmed){
      this.execFunction();
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TwimpCardComponent],
  exports: [TwimpCardComponent]
})
export class SharedModule { }

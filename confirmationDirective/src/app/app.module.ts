import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { ConfirmationPanelDirective } from './confirmation-panel.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    ConfirmationPanelDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

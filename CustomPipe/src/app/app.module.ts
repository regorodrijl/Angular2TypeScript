import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NumberListComponent } from './number-list/number-list.component';
import { NumberPrefixPipePipe } from './number-prefix-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumberListComponent,
    NumberPrefixPipePipe
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HammerModule } from '../../projects/hammer/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HammerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

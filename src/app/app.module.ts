import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HammerModule } from './hammer/hammer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HammerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

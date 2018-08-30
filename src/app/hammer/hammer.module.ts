import { HammerDirective } from './hammer.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerComponent } from './hammer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HammerComponent, HammerDirective],
  exports: [HammerComponent, HammerDirective]
})
export class HammerModule {}

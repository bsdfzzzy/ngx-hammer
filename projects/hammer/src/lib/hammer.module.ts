import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerDirective } from './hammer.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [HammerDirective],
  exports: [HammerDirective]
})
export class HammerModule {}

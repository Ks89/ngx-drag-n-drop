import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoutingTestComponent } from './routing-test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RoutingTestComponent
  ],
  exports: [RoutingTestComponent]
})
export class RoutingTestModule {}

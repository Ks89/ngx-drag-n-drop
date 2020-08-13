import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenericBoxComponent } from './generic-box.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GenericBoxComponent],
  exports: [GenericBoxComponent]
})
export class GenericBoxModule {}

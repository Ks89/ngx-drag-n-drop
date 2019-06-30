import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDirective } from './drag-directive.directive';
import { DropDirective } from './drop-directive.directive';
import { DragDropDirectiveService } from './drag-drop-directive.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DragDirective,
    DropDirective
  ],
  providers: [
    DragDropDirectiveService
  ],
  exports: [
    DragDirective,
    DropDirective
  ]
})
export class DragDropDirectiveModule {}

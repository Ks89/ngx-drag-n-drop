import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropDirectiveModule } from '@ks89/ngx-drag-n-drop';
import { DropAreaComponent } from './drop-area/drop-area.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { GenericBoxModule } from './generic-box/generic-box.module';
import { SimpleDragComponent } from './simple-drag.component';

@NgModule({
  imports: [CommonModule, GenericBoxModule, DragDropDirectiveModule],
  declarations: [DropAreaComponent, NavigationComponent, SimpleDragComponent],
  providers: [],
  exports: [SimpleDragComponent]
})
export class SimpleDragModule {}

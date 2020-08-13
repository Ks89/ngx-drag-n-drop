import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenericBoxModule } from '../simple-drag/generic-box/generic-box.module';
import { DragDropDirectiveModule } from '@ks89/ngx-drag-n-drop';
import { TypeCheckComponent } from './type-check.component';
import { DropAreaTypeCheckComponent } from './drop-area-type-check/drop-area-type-check.component';
import { NavigationTypeCheckComponent } from './navigation-type-check/navigation-type-check.component';

@NgModule({
  imports: [CommonModule, GenericBoxModule, DragDropDirectiveModule],
  declarations: [DropAreaTypeCheckComponent, NavigationTypeCheckComponent, TypeCheckComponent],
  exports: [TypeCheckComponent]
})
export class TypeCheckModule {}

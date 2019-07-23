import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropDirectiveModule } from '@ks89/ngx-drag-n-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericBoxModule } from './simple-drag/generic-box/generic-box.module';
import { TypeCheckModule } from './type-check/type-check.module';
import { SimpleDragModule } from './simple-drag/simple-drag.module';
import { DragIntoInputComponent } from './drag-into-input/drag-into-input.component';

@NgModule({
  imports: [BrowserModule, GenericBoxModule, DragDropDirectiveModule, TypeCheckModule, SimpleDragModule, AppRoutingModule],
  declarations: [AppComponent, DragIntoInputComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

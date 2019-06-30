import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropDirectiveModule } from '@ks89/ngx-drag-n-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericBoxModule } from './generic-box/generic-box.module';
import { TypeCheckModule } from './type-check/type-check.module';
import { RoutingTestModule } from './routing-check/routing-test.module';
import { SimpleDragModule } from './simple-drag/simple-drag.module';

@NgModule({
  imports: [
    BrowserModule,
    GenericBoxModule,
    DragDropDirectiveModule,
    TypeCheckModule,
    SimpleDragModule,
    RoutingTestModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

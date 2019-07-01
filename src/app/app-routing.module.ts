import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeCheckComponent } from './type-check/type-check.component';
import { SimpleDragComponent } from './simple-drag/simple-drag.component';

const appRoutes: Routes = [
  {
    path: 'simpledrag',
    component: SimpleDragComponent
  },
  {
    path: 'typecheckdrag',
    component: TypeCheckComponent
  },
  {path: '', redirectTo: '/simpledrag', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true // <-- debugging purposes only
        // preloadingStrategy: SelectivePreloadingStrategy,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

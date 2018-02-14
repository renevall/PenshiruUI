import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { NameComponent } from './name.component';

const lawsRoutes: Routes = [
  //   { path: 'path', component: NameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(lawsRoutes)],
  exports: [RouterModule]
})
export class LawRoutingModule {}

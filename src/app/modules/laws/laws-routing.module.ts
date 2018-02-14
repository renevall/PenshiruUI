import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LawsComponent } from './components/laws/laws.component';

const lawsRoutes: Routes = [{ path: '', component: LawsComponent }];

@NgModule({
  imports: [RouterModule.forChild(lawsRoutes)],
  exports: [RouterModule]
})
export class LawRoutingModule {}

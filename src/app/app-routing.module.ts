import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { NameComponent } from './name.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'laws' },
  {
    path: 'products',
    loadChildren: './modules/laws/laws.module#LawsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

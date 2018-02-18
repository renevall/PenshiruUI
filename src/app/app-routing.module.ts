import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';

// import { NameComponent } from './name.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'laws' },
  {
    path: 'laws',
    loadChildren: './modules/laws/laws.module#LawsModule'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

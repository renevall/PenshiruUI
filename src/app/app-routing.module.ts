import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { NameComponent } from './name.component';

const routes: Routes = [
  //   { path: 'path', component: NameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

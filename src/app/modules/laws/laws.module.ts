import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LawRoutingModule } from './laws-routing.module';
import { CommonModule } from '@angular/common';
import { LawsComponent } from './components/laws/laws.component';

// import { NameComponent } from './name.component';

@NgModule({
  imports: [CommonModule, LawRoutingModule],
  exports: [],
  declarations: [LawsComponent],
  providers: []
})
export class LawsModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LawRoutingModule } from './laws-routing.module';
import { CommonModule } from '@angular/common';
import { LawsComponent } from './components/laws/laws.component';

import { StoreModule } from '@ngrx/store';

import { reducers } from './store';
import { ThemeModule } from '../theme/theme.module';

// import { NameComponent } from './name.component';

@NgModule({
  imports: [
    CommonModule,
    LawRoutingModule,
    ThemeModule,
    StoreModule.forFeature('documents', reducers)
  ],
  exports: [],
  declarations: [LawsComponent],
  providers: []
})
export class LawsModule {}

import { NgModule } from '@angular/core';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';

import { CommonModule } from '@angular/common';
import { ThemeModule } from '../theme/theme.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [CommonModule, ThemeModule, RouterModule],
  exports: [NavbarLeftComponent, PageNotFoundComponent],
  declarations: [NavbarLeftComponent, PageNotFoundComponent],
  providers: []
})
export class SharedModule {}

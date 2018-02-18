import { NgModule } from '@angular/core';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';

import { CommonModule } from '@angular/common';
import { ThemeModule } from '../theme/theme.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ThemeModule, RouterModule],
  exports: [NavbarLeftComponent],
  declarations: [NavbarLeftComponent],
  providers: []
})
export class SharedModule {}

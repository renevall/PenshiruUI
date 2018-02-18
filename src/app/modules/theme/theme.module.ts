import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [FlexLayoutModule, MatCardModule, MatSidenavModule],
  exports: [FlexLayoutModule, MatCardModule, MatSidenavModule],
  declarations: []
})
export class ThemeModule {}

import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatSidenavModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatSidenavModule,
    NoopAnimationsModule
  ],
  exports: [
    FlexLayoutModule,
    MatCardModule,
    MatSidenavModule,
    NoopAnimationsModule
  ],
  declarations: []
})
export class ThemeModule {}

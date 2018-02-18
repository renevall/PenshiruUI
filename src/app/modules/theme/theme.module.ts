import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [FlexLayoutModule, MatCardModule],
  exports: [FlexLayoutModule, MatCardModule],
  declarations: []
})
export class ThemeModule {}

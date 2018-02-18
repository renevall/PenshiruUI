import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from '../reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { LawsModule } from './modules/laws/laws.module';
import { ThemeModule } from './modules/theme/theme.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    ThemeModule,
    LawsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

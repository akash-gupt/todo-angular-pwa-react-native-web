import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Screen1Component } from './pages/screen1/screen1.component';
import { Screen2Component } from './pages/screen2/screen2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { userReducer } from './store/user';
import { HttpClientModule } from '@angular/common/http';
import { hydrationMetaReducer } from './hydrationMetaReducer';

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];

@NgModule({
  declarations: [AppComponent, Screen1Component, Screen2Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    StoreModule.forRoot({ user: userReducer }, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

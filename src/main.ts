import {importProvidersFrom} from '@angular/core';
import {AppComponent} from './app/app.component';
import {StoreModule} from './app/store/store.module';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, StoreModule)]
})
  .catch(err => console.error(err));

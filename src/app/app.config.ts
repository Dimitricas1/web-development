import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom([
    HttpClient,
    ScrollingModule
  ]),
  provideHttpClient()]
};

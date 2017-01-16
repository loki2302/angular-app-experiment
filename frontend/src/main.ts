import 'bootstrap/dist/css/bootstrap.css';

import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'rxjs/Rx';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

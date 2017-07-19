import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { ElectronService } from './providers/electron.service';
import { materialImports } from 'app/app-material.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    materialImports
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }


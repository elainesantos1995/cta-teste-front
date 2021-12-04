import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { InMemoryDatabase } from './InMemoryDatabase';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { ChartService } from './chart.service';
import { GraficosComponent } from './graficos/graficos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    GraficosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDatabase),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDatabase
    ),
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

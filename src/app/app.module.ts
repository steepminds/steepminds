import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/** Routes */
import { AppRoutingModule } from './app-routing.module';

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { ParkingSpaceDetectionComponent } from './parking-space-detection/parking-space-detection.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/index';
import { AudiDrivingCupComponent } from './audi-driving-cup/index';
import { TeamComponent } from './team/index';
import { PointOfSaleComponent } from './point-of-sale/index';
import { RdfAnalyzerComponent } from './rdf-analyzer/index';
import { Freihack16Component } from './freihack16/index';
import { CarouselComponent } from './carousel/index';
import { MainComponent } from './main/index';


@NgModule({
  declarations: [
    AppComponent,
    ParkingSpaceDetectionComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    PageNotFoundComponent,
    AudiDrivingCupComponent,
    TeamComponent,
    PointOfSaleComponent,
    RdfAnalyzerComponent,
    Freihack16Component,
    CarouselComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  schemas:     [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

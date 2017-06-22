import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/index';
import { HeaderComponent } from './header/index';
import { IndexComponent } from './index/index';
import { ParkingSpaceDetectionComponent } from './parking-space-detection/index';
import { AudiDrivingCupComponent } from './audi-driving-cup/index';
import { TeamComponent } from './team/index';
import { PointOfSaleComponent } from './point-of-sale/index';
import { RdfAnalyzerComponent } from './rdf-analyzer/index';
import { Freihack16Component } from './freihack16/index';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'rdf-analyzer', component: RdfAnalyzerComponent },
  { path: 'team', component: TeamComponent },
  { path: 'freihack16', component: Freihack16Component },
  { path: 'point-of-sale', component: PointOfSaleComponent },
  { path: 'parking-space-detection', component: ParkingSpaceDetectionComponent },
  { path: 'audi-driving-cup', component: AudiDrivingCupComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

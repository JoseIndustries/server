import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SlideComponent } from './slide/slide.component';
import { Slide2Component } from './slide2/slide2.component';
import { Slide3Component } from './slide3/slide3.component';
import { Slide4Component } from './slide4/slide4.component';
import { Slide5Component } from './slide5/slide5.component';
import { JlokComponent } from './jlok/jlok.component';
import { AgenciesComponent } from './agencies/agencies.component';
import { HousingComponent } from './housing/housing.component';
import { WelfareComponent } from './welfare/welfare.component';
import { FoodHandlerComponent } from './food-handler/food-handler.component';
import { HospitalityTrainingComponent } from './hospitality-training/hospitality-training.component';

const routes: Routes = [
  {
    path: 'Home', component: HomeComponent,
  },
  {
    path: 'Contact', component: ContactComponent,
  },
  {
    path: 'App', component: AppComponent,
  },
  {
    path: 'Slide', component: SlideComponent,
  },
  {
    path: 'Slide2', component: Slide2Component,
  },
  {
    path: 'Slide3', component: Slide3Component,
  }, {
    path: 'Slide4', component: Slide4Component,
  }, {
    path: 'Slide5', component: Slide5Component,
  },{
    path: 'jlok', component: JlokComponent,
  }, {
    path: 'Agencies', component: AgenciesComponent,
  }, {
    path: 'Housing', component: HousingComponent,
  }, {
    path: 'Welfare', component: WelfareComponent,
  },{ path: 'FoodHandler', component: FoodHandlerComponent,
},{ path: 'HospitalityTraining', component: HospitalityTrainingComponent,
},
  {
    path: '**',
    redirectTo: 'Home',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

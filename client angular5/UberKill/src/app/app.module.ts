import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SlideComponent } from './slide/slide.component';
import { Slide2Component } from './slide2/slide2.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Slide3Component } from './slide3/slide3.component';
import { Slide4Component } from './slide4/slide4.component';
import { Slide5Component } from './slide5/slide5.component';
import { JlokComponent } from './jlok/jlok.component';
import { HttpClientModule } from '@angular/common/http';
import { AgenciesComponent } from './agencies/agencies.component';
import { HousingComponent } from './housing/housing.component';
import { WelfareComponent } from './welfare/welfare.component';
import { LowComponent } from './low/low.component';
import { FoodHandlerComponent } from './food-handler/food-handler.component';
import { HospitalityTrainingComponent } from './hospitality-training/hospitality-training.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SlideComponent,
    Slide2Component,
    Slide3Component,
    Slide4Component,
    Slide5Component,
    JlokComponent,
    AgenciesComponent,
    HousingComponent,
    WelfareComponent,
    LowComponent,
    FoodHandlerComponent,
    HospitalityTrainingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

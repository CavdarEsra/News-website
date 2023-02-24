import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactComponent } from './contact/contact.component';
import { CategoriesComponent } from './categories/categories.component';
import { PoliticsComponent } from './politics/politics.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { SportComponent } from './sport/sport.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsService} from './service/news.service';
import { scienceComponent } from './science/science.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { BusComponent } from './categories/bus/bus.component';
import { EnterComponent } from './categories/enter/enter.component';
import { GenerComponent } from './categories/gener/gener.component';
import { HeaComponent } from './categories/hea/hea.component';
import { SciComponent } from './categories/sci/sci.component';
import { SpoComponent } from './categories/spo/spo.component';
import { TechComponent } from './categories/tech/tech.component';
import { PolComponent } from './categories/pol/pol.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    CategoriesComponent,
    PoliticsComponent,
    BusinessComponent,
    HealthComponent,
    scienceComponent,
    SportComponent,
    AboutComponent,
    DetailpageComponent,
    BusComponent,
    EnterComponent,
    GenerComponent,
    HeaComponent,
    SciComponent,
    SpoComponent,
    TechComponent,
    PolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

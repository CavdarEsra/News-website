import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CategoriesComponent } from './categories/categories.component';
import { PoliticsComponent } from './politics/politics.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { SportComponent } from './sport/sport.component';
import { AboutComponent } from './about/about.component';
import {DetailpageComponent} from './detailpage/detailpage.component';
import { BusComponent } from './categories/bus/bus.component';
import { EnterComponent } from './categories/enter/enter.component';
import { GenerComponent } from './categories/gener/gener.component';
import { HeaComponent } from './categories/hea/hea.component';
import { SciComponent } from './categories/sci/sci.component';
import { SpoComponent } from './categories/spo/spo.component';
import { TechComponent } from './categories/tech/tech.component';
import { PolComponent } from './categories/pol/pol.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'categories',component:CategoriesComponent},
  {path: 'politics',component:PoliticsComponent},
  {path: 'business',component:BusinessComponent},
  {path: 'health', component:HealthComponent},
  {path: 'sport', component:SportComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'about',component:AboutComponent},
  {path: 'detailpage', component: DetailpageComponent},
  {path: 'bus', component:BusComponent},
  {path: 'enter', component:EnterComponent},
  {path: 'gener', component: GenerComponent},
  {path:'hea',component:HeaComponent},
  {path:'sci',component:SciComponent},
  {path:'spo',component:SpoComponent},
  {path:'tech',component:TechComponent},
  {path:'pol',component:PolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

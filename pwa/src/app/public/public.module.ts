import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms'; 
import { PublicRoutingModule } from './public-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HomeComponent } from './home/home.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { InternshipComponent } from './internship/internship.component';
import { MapComponent } from './home/components/map/map.component';
import { EmailFormComponent } from './home/components/email-form/email-form.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    HomeComponent,
    WorkshopComponent,
    InternshipComponent,
    MapComponent,
    EmailFormComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatTooltipModule
  ]
})
export class PublicModule { }

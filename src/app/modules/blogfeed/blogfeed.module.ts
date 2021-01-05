import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogfeedRoutingModule } from './blogfeed-routing.module';
import { BlogfeedComponent } from './blogfeed.component';
import {SharedModule} from '../shared/shared.module';
import {RouteReuseStrategy} from '@angular/router';
import {RouteReuseService} from '../../services/routereuse.service';
import {MatProgressSpinnerModule} from '@angular/material';


@NgModule({
  declarations: [BlogfeedComponent],
  imports: [
    CommonModule,
    BlogfeedRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
  exports: [
  ],
  providers:[
    {provide: RouteReuseStrategy, useClass: RouteReuseService}
  ]
})
export class BlogfeedModule { }

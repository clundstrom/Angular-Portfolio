import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogfeedComponent } from './blogfeed.component';

const routes: Routes = [{ path: '', data: {shouldReuse: true},  component: BlogfeedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogfeedRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {AuthGuardService} from '../../services/auth-guard.service';


const routes: Routes = [
  {
    path: '', pathMatch: 'full',  canActivate: [AuthGuardService], component: AdminComponent,
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {


}

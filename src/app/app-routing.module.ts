import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/navbar/login/login.component';
import {AuthGuardService} from './services/auth-guard.service';
import {BioComponent} from './components/body/bio/bio.component';
import {MainComponent} from './components/body/main/main.component';
import {ConstructionComponent} from './components/body/construction/construction.component';
import {BlogEditorComponent} from './modules/admin/blog-editor/blog-editor.component';
import {NotfoundComponent} from './components/body/notfound/notfound.component';

const routes: Routes = [
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  {path: 'post', canActivate: [AuthGuardService], component: BlogEditorComponent},
  {path: 'about', component: BioComponent },
  {path: 'blog', loadChildren: () => import('./modules/blogfeed/blogfeed.module').then(m => m.BlogfeedModule)},
  {path: 'login', component: LoginComponent},
  {path: 'status', component: ConstructionComponent},
  {path: 'projects', loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule)},
  {path: '', component: MainComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

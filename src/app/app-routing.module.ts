import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CamCamTandilComponent} from './cam-cam-tandil/cam-cam-tandil.component';
import { CamAboutComponent } from './cam-about/cam-about.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'portada',
    pathMatch: 'full'
  },
  {
    path: 'portada',
    component: CamCamTandilComponent
  },
  {
    path: 'nosotros',
    component: CamAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

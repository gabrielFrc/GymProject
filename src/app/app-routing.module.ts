import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { GymsComponent } from './components/gyms/gyms.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'gyms', component: GymsComponent }
  // { path: 'plans', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

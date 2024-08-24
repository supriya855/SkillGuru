import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {path : 'login', component : LogInComponent},
  { path: 'dashboard', component: DashboardComponent },
    // {path:'signin', component : SignUpComponent},
     { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
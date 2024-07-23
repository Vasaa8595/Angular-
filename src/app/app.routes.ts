import { Routes } from '@angular/router';

export const routes: Routes = [
    {path : '', loadComponent:()=> import('./login/login.component').then(a=>a.LoginComponent)},
    {path : 'sidenav', loadComponent:()=> import('./sidenav/sidenav.component').then(a=>a.SidenavComponent)}, 
    {path : 'dashboard', loadComponent:()=> import('./dashboard/dashboard.component').then(a=>a.DashboardComponent)} 

];

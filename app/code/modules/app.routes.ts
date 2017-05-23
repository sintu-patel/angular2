import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './pages/home/home.component';
import { Profile } from './pages/profile/profile.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'profile', component: Profile}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
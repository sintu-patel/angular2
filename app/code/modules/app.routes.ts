import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Profile } from './pages/profile/profile.component';
import { Profile2 } from './pages/profile2/profile2.component';

// Route Configuration
export const routes: Routes = [
  { path: 'profile', component: Profile },
  { path: 'profile2', component: Profile2 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './pages/home/home.component';
import { Profile } from './pages/profile/profile.component';
import { Upload } from './pages/upload/upload.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'profile', component: Profile},
  { path: 'upload', component: Upload}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
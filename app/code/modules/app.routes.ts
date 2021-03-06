import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './pages/home/home.component';
import { DetailPage } from './pages/detailpage/detailpage.component';
import { Upload } from './pages/upload/upload.component';
import { FineList } from './pages/finelist/finelist.component';
import { CorrectFile } from './pages/correctfile/correctfile.component';
import { UpdateLLP } from './pages/llp/updatellp.component';
import { Login } from './pages/login/login.component';
import { Register } from './pages/register/register.component';
import { IssueRiskNextSteps } from './pages/issuerisknextsteps/issuerisknextsteps.component';
import { WebHookData } from './pages/webhook/webhookdata.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: UpdateLLP },
  { path: 'home', component: Home },
  { path: 'detailpage', component: DetailPage},
  { path: 'upload', component: Upload},
  { path: 'finelist', component: FineList},
  { path: 'correctfile', component: CorrectFile},
  { path: 'llp', component: UpdateLLP},
  { path: 'login', component: Login},
  { path: 'register', component: Register},
  { path: 'issuerisknextsteps', component: IssueRiskNextSteps},
  { path: 'webhookdata', component: WebHookData}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
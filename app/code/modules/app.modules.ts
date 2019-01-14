import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './components/component.app';
import { TrimString } from './components/pipe.app';
import { SearchData } from './components/search.app';
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
import { routing } from './app.routes';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    TrimString,
    SearchData,
    Home,
    DetailPage,
    Upload,
    FineList,
    CorrectFile,
    UpdateLLP,
    Login,
    Register,
    IssueRiskNextSteps,
    WebHookData
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
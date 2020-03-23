import { BrowserModule } from '@angular/platform-browser';
import { ErrorIntercept } from './services/error.interceptor';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TalentPoolService} from './services/talent-pool.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TalentPoolsComponent } from './talent-pools/talent-pools.component';
import { TalentsComponent } from './talents/talents.component';
import { CandidatesComponent } from './candidates/candidates.component';

import { TalentPoolsAddComponent } from './talent-pools/talent-pools-add/talent-pools-add.component';
import { TalentPoolsEditComponent } from './talent-pools/talent-pools-edit/talent-pools-edit.component';
import { TalentPoolsDetailComponent } from './talent-pools/talent-pools-detail/talent-pools-detail.component';
import { TalentPoolsDetailListComponent } from './talent-pools/talent-pools-detail-list/talent-pools-detail-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
    AppComponent,
    TalentPoolsComponent,
    TalentsComponent,
    CandidatesComponent,
    
    TalentPoolsAddComponent,
    TalentPoolsEditComponent,
    TalentPoolsDetailComponent,
    TalentPoolsDetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercept,
      multi: true
    },
    TalentPoolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

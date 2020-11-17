import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthGuard } from '../app/services/auth.guard';
import { AuthService } from '../app/services/auth.service';

import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './component/content/content.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AddclientComponent } from './component/addclient/addclient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeloginComponent } from './component/homelogin/homelogin.component';
import { SingletonRouterService } from './services/singletonRouter.service';
import { LoginComponent } from './component/login/login.component';
import { ErroraddclientComponent } from './component/erroraddclient/erroraddclient.component';
import { InvestmentComponent } from './component/investment/investment.component';
import { InvestmentpanelComponent } from './component/investmentpanel/investmentpanel.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    AddclientComponent,
    HomeloginComponent,
    LoginComponent,
    ErroraddclientComponent,
    InvestmentComponent,
    InvestmentpanelComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  providers: [AuthGuard, AuthService, SingletonRouterService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

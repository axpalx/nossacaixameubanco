import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/services/auth.guard';
import { AccessdeniedComponent } from './component/accessdenied/accessdenied.component';
import { AddclientComponent } from './component/addclient/addclient.component';
import { AddclientcompletedComponent } from './component/addclientcompleted/addclientcompleted.component';
import { ContentComponent } from './component/content/content.component';
import { HomeloginComponent } from './component/homelogin/homelogin.component';
import { InvestmentComponent } from './component/investment/investment.component';
import { InvestmentpanelComponent } from './component/investmentpanel/investmentpanel.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'addclient', component: AddclientComponent },
  { path: 'addclientcomleted', component: AddclientcompletedComponent },
  {
    path: 'homelogin',
    component: HomeloginComponent,
    canActivate: [AuthGuard],
  },
  { path: 'accessdenied', component: AccessdeniedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ivestmentpanel', component: InvestmentpanelComponent },
  { path: 'investment', component: InvestmentComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';


const routes: Routes = [
  {
    path:'', component:LoginComponent,
  },

  {
    path:'dashboard', component:DashboardComponent,
  },
  {
    path:'register', component: RegisterComponent,
  },
  {
    path:'transaction-history',component: TransactionHistoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

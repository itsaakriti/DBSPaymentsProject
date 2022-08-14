import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecieversComponent } from './components/recievers/recievers.component';
import { SendersComponent } from './components/senders/senders.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'senders', component: SendersComponent},
  { path: 'recievers', component: RecieversComponent,canActivate:[AuthGuard]},
  { path: 'transaction', component: TransactionsComponent,canActivate:[AuthGuard]},
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

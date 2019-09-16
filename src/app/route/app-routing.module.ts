import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { NeedAuthGuard } from "../auth.guard";

import { LoginPageComponent } from '../views/login-page/login-page.component';
import { DashboardPageComponent } from '../views/dashboard-page/dashboard-page.component';
//import { AuthGuard } from '../shared/guards/auth-guard.service';

// Views Interno. Devem ser organizados por ordem alfabética


const routes: Routes = [
	 { path: 'login', component: LoginPageComponent, pathMatch: 'full' },

	 { path: '**', redirectTo: '' },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [NeedAuthGuard]
})
export class AppRoutingModule { }

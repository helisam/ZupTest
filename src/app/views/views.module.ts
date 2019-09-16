import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaskModule } from 'soft-angular-mask';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { LoginPageModule } from './login-page/login-page.module';
import { DashboardPageModule } from './dashboard-page/dashboard-page.module';
//import { LoginPageComponent } from './login-page/login-page.component';
//import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

//import { IndexComponent } from './index/index.component';
//import { ViewsComponentsModule } from '../views-components/views-components.module';

@NgModule({
	declarations: [
		//IndexComponent
		//LoginPageComponent,
		//DashboardPageComponent
	],
	exports: [
		LoginPageModule,
		DashboardPageModule,
		//LoginPageComponent,
		//DashboardPageComponent,
		MaskModule
	],
	imports: [
		LoginPageModule,
		DashboardPageModule,
		CommonModule,
		FormsModule,
		MaskModule
	]
})
export class ViewsModule { }

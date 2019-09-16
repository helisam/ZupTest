import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ViewsModule } from "./views/views.module";
import { BootstrapModalModule } from 'angularx-bootstrap-modal';

import { LoginPageComponent } from './views/login-page/login-page.component';
import { DashboardPageComponent } from './views/dashboard-page/dashboard-page.component';
import { NeedAuthGuard } from "./auth.guard";

const appRoutes: Routes = [
  	{
    path: "dashboard",
    component: DashboardPageComponent,
    canActivate: [NeedAuthGuard]
  },
  {
    path: "login",
    component: LoginPageComponent
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
  	BootstrapModalModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
	ViewsModule,
    RouterModule.forRoot([{ path: "", component: DashboardPageComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

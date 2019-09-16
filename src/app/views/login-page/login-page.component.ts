import { Component } from "@angular/core";
import { ApplicationService } from '../../shared/services/application.service';
import { Router } from "@angular/router";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})

export class LoginPageComponent {
	
   forInvalido : boolean = false;

  constructor(
    private api: ApplicationService,
    private router: Router
  ) {}
  
   servico = 'login';
   user1 = "admin";
   password = "123";
  
  parametros: any = {};

  tryLogin() {
    this.api.findLogin(this.servico, this.parametros.username).subscribe(
      response => {
        console.log(response);
        const user = response[0];
           if (
             user &&
             user.username === this.parametros.username &&
             user.password === this.parametros.password
           ) {
				this.forInvalido = false;
             this.router.navigate(['/dashboard']);
			 
           } else {
				this.forInvalido = true;
           }
      },
      error => {
        console.log(error);
      }
    );
  }
}

import { Component, OnInit } from "@angular/core";
import { ApplicationService } from '../../shared/services/application.service';
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard-page",
  templateUrl: "./dashboard-page.component.html",
  styleUrls: ["./dashboard-page.component.css"]
})
export class DashboardPageComponent implements OnInit {
  name: string;
  users: any;
  servico: string = 'users';
  constructor(
  	private api: ApplicationService,
	private router: Router
	) {}

  ngOnInit() {
    this.getUsers();
  }

   getUsers() {
     this.api.get(this.servico).subscribe(
       response => {
         this.users = response;
       },
       error => {
         console.log(error);
       }
     );
   }

  searchUser() {
    if (this.name) {
		//this.getUsers();
		
      let result = this.users.filter(user => {
        return user.name.toLowerCase() === this.name.toLowerCase();
      });

      this.users = result;
    } else {
      this.getUsers();
    }
  }

  logout() {
	this.api.logout().subscribe(
		response => {
			console.log(response);
			this.router.navigate(['/login']);
       },
       error => {
        console.log(error);
		}
     );
   }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginResultModel } from "./model/LoginResultModel";
import { UserModel } from "./model/UserModel";
import { ApplicationService } from './shared/services/application.service';

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const data = {
      username: username,
      password: password
    };

    return this.http
      .post<any>(`http://localhost:3000/login?_limit=1`, data)
      .pipe(user => {
        localStorage.setItem("currentUser", JSON.stringify(user));
        return user;
      });
  }

  logout(): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/login`, {}).pipe(user => {
      localStorage.removeItem("currentUser");
      return user;
    });
  }

  getAll(): Observable<UserModel> {
    return this.http.get<any>(`http://localhost:3000/users`, {}).pipe(users => {
      return users;
    });
  }
}

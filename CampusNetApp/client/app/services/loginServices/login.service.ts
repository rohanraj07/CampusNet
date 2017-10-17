import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  constructor(private http: Http) {
    console.log("login initialized");
  }

  login(authUser) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/auth', JSON.stringify(authUser), { headers: headers })
      .map(res => res.json());
  }

}
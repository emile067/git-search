import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  // tslint:disable-next-line:typedef
  getUserInfo(name){
    return this.http.get(`https://api.github.com/users/${name}`);
  }

  constructor(private http: HttpClient) { }
}

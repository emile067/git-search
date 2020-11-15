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
  // tslint:disable-next-line:typedef
  getUserRepos(name){
    return this.http.get(`https://api.github.com/users/${name}/repos`);
  }
  constructor(private http: HttpClient) { }
}

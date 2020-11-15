import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  // tslint:disable-next-line:typedef
  getUserInfo(name){
    return this.http.get('https://api.github.com/users/' + name + '?access_token=' + environment.apiKey);
  }
  // tslint:disable-next-line:typedef
  getUserRepos(name){
    return this.http.get('https://api.github.com/users/' + name + '/repos?access_token=' + environment.apiKey);
  }
  constructor(private http: HttpClient) { }
}

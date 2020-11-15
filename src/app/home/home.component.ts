import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeUser: any;
  homeRepos: any;
  constructor(private userService: GitServiceService) {
  }

  ngOnInit(): void {
    this.userService.getUserInfo('emile067').subscribe(users => {
      this.homeUser = users;
      console.log(JSON.stringify(this.homeUser));
    });
    this.userService.getUserRepos('emile067').subscribe(repos => {
      this.homeRepos = repos;
      console.log(JSON.stringify(this.homeRepos));
    });
  }

}

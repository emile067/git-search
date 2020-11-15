import { GitUsers } from './../git-users';
import { GitUserInfo } from './../git-user-info';
import { GitRepositories } from './../git-repositories';
import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any = [];
  newUser: GitUsers;
  userRepos: GitRepositories;
  userName: string;

  constructor(private userService: GitServiceService) { }
  // tslint:disable-next-line:typedef
  submitUser() {
    this.userService.getUserInfo(this.userName).subscribe(users => {
      this.newUser = users;
      console.log(JSON.stringify(this.newUser));
      this.users.push(this.newUser);
    });
  }
  // tslint:disable-next-line:typedef
  getRepos(index){
    this.userService.getUserRepos(this.users[index].login).subscribe(repos => {
      this.userRepos = repos;
      console.log(JSON.stringify(this.userRepos));
      // this.users.push(this.userRepos);
    });
  }
  ngOnInit(): void {
  }

}

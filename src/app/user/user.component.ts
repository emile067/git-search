import { Component, OnInit } from '@angular/core';
import { GitUsers } from '../git-users';
import { GitServiceService } from '../git-service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any = [];
  newUser: GitUsers;
  userName: string;

  constructor(private userService: GitServiceService) { }
  // tslint:disable-next-line:typedef
  submitUser() {
    this.userService.getUserInfo(this.userName).subscribe(users => {
      this.newUser.info = users;
      console.log(JSON.stringify(this.newUser));
      this.users.push(this.newUser);
    });
    this.userService.getUserRepos(this.userName).subscribe(repos => {
      this.newUser.repos = repos;
      console.log(JSON.stringify(this.newUser));
      this.users.push(this.newUser);
    });
  }
  // tslint:disable-next-line:typedef
  getRepos(index){

  }
  ngOnInit(): void {
  }

}

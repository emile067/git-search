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
      this.newUser = users;
      console.log(JSON.stringify(this.newUser));
      this.users.push(this.newUser);
    });
  }
  ngOnInit(): void {
  }

}

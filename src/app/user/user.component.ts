import { Component, OnInit } from '@angular/core';
import { GitUsers } from '../git-users';
import { GitServiceService } from '../git-service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: GitServiceService) { }

  ngOnInit(): void {
  }

}

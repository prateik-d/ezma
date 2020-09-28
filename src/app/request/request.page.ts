import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserListingService } from '../shared/user-listing.service';
import { UserService } from '../shared/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  users: any;
  user_id: any;
  success_message: any;
  error: any;

  constructor(
    private userListingService: UserListingService,
    private userService: UserService,
    private http: HttpClient,
    private router: Router,

  ) { }

  ngOnInit() 
  {
    var email = localStorage.getItem('user_email');

    // console.log(email);

    if(email === null)
    {
      // console.log('in if');
      this.router.navigate(['/home']);
    }
    else
    {
      this.userService.get_data(email).subscribe((data) => {
        // console.log(data.data);
        
        this.user_id = data.data.id;
        
        console.log(this.user_id);

        const fdata = new FormData();

        fdata.append('id', this.user_id);


        this.userListingService.get_connect_request(fdata).subscribe((data) => {
          // console.log(data.data);
          
          this.users = data.data;
          
          console.log(this.users);
  
        });

      });
      
      
      
    }
  }

  accept(id)
  {
    console.log(id);
  }

  reject(id)
  {
    console.log(id);
  }

}

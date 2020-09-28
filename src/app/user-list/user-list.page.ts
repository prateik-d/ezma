import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserListingService } from '../shared/user-listing.service';
import { UserService } from '../shared/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  
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
      const formData = new FormData();

      formData.append('email', email);

      this.userListingService.get_list(formData).subscribe((data) => {
        
        console.log(data);
        
        this.users = data.data;
        
        // console.log(this.users);
        
      });
      
      this.userService.get_data(email).subscribe((data) => {
        // console.log(data.data);
        
        this.user_id = data.data.id;
        
        // console.log(this.user_id);
      });

    }
  }

  connect(id)
  {
    
    var following_id = id;
    var follower_id = this.user_id;
    
    console.log(following_id);
    console.log(follower_id);

    const formData = new FormData();

    formData.append('following_id', following_id);
    formData.append('follower_id', follower_id);

    this.userListingService.connect(formData).subscribe((data) => {
      console.log(data);
      if(data.status === '200')
      {
        console.log('in if');
        this.success_message = 'Request sent successfully';
          
          this.router.navigate(['/user-list']);
          // location.reload();
      }
      else
      {
        console.log('in else');
      }
    });

  }

}

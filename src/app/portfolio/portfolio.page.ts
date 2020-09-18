import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {
  user:any =  [];
  id: string;

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,

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
      this.id = this.route.snapshot.paramMap.get("id");

      this.userService.get_info_by_id(this.id).subscribe((data) => {
        
        console.log(data);
        
        this.user = data.data;
        
        console.log(this.user);
   
      });
    }

  }

}

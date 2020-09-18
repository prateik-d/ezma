import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  error:any;
  success_message:any;

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,

  ) { }

  ngOnInit() {
    
    this.success_message = localStorage.getItem('success_message');
    // console.log(this.success_message);
    console.log(localStorage.getItem('user_data'));
    console.log(localStorage.getItem('user_email'));
    
    if(localStorage.getItem('user_email'))
    {
      console.log('login');

      // make logout

      this.router.navigate(['/home']);
    }
    else
    {
      console.log('logout');
    }
      

  }

  login()
  {
    var email = ((document.getElementById("email") as HTMLInputElement).value);
    var password = ((document.getElementById("password") as HTMLInputElement).value);
    

    // console.log(email);
    // console.log(password);

    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);

    this.userService.login(formData).subscribe((data) => {
    //   // this.isLoad = 1;      
      // localStorage.clear();
      // console.log(data);
      if (data.status === '400') 
      {
        console.log('400');
        this.error = 'Invalid credentials';
      } 
      else if(data.status === '200')
      {
        console.log('200');
        console.log(data.data);
        localStorage.clear();
        localStorage.setItem('user_data', data.data);
        localStorage.setItem('user_email', data.data.email);
      
        this.router.navigate(['/home']);
        location.reload();
      }
      
    });
  }

}

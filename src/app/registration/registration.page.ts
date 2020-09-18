import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
  error: any;


  constructor(
    private userService: UserService,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,

  ) { }

  ngOnInit() {
  }

  signup()
  {
    var fullname = ((document.getElementById("fullname") as HTMLInputElement).value);
    var email = ((document.getElementById("email") as HTMLInputElement).value);
    var password = ((document.getElementById("password") as HTMLInputElement).value);
    

    // console.log(fullname);
    // console.log(email);
    // console.log(password);

    const formData = new FormData();

    formData.append('fullname', fullname);
    formData.append('email', email);
    formData.append('password', password);

    this.userService.signup(formData).subscribe((data) => {
    //   // this.isLoad = 1;      

      // console.log(data);
      if (data.status === '400') 
      {
        console.log('400');
        //  this.courseError = 'something went wrong...';
        this.error = data.message;
      } 
      else if(data.status === '200')
      {
        console.log('200');
        localStorage.clear();
        localStorage.setItem('user_data', data.data);
        localStorage.setItem('success_message', 'Signup completed successfully.');
        //  this.isLoad = 0;
         this.router.navigate(['/login']);
       }
      
    });
  }

}
